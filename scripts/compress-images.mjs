import { readdirSync, statSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import sharp from 'sharp';

const root = 'public';
const quality = 82;
const maxWidth = 1600;
const skipBelowBytes = 200_000;

function walk(dir, out = []) {
  for (const e of readdirSync(dir)) {
    const p = join(dir, e);
    if (statSync(p).isDirectory()) walk(p, out);
    else out.push(p);
  }
  return out;
}

const files = walk(root).filter((f) => /\.(jpe?g)$/i.test(f));
let before = 0;
let after = 0;
let count = 0;

async function encode(buf) {
  let pipe = sharp(buf, { failOn: 'none' });
  const meta = await pipe.metadata();
  if (meta.width && meta.width > maxWidth) pipe = pipe.resize(maxWidth);
  // optimizeCoding:false avoids the libvips "Invalid SOS parameters" quirk on
  // JPEGs produced by some camera/export pipelines.
  return pipe.jpeg({ quality, optimizeCoding: false, chromaSubsampling: '4:2:0' }).toBuffer();
}

for (const f of files) {
  const buf = readFileSync(f);
  if (buf.length < skipBelowBytes) continue;
  before += buf.length;
  try {
    const out = await encode(buf);
    writeFileSync(f, out);
    after += out.length;
    count++;
  } catch (e) {
    console.error(`skip ${f}: ${e.message}`);
  }
}

console.log(
  `compressed ${count} files: ${(before / 1e6).toFixed(1)}MB -> ${(after / 1e6).toFixed(1)}MB`
);
