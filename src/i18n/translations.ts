import type { Lang } from './utils';

type T = { zh: string; en: string; pt: string; cri?: string };

export const t = (s: Record<string, string> | string, lang: Lang): string =>
  typeof s === 'string' ? s : (s[lang] || s.pt || '');

// ── Nav ──
export const nav = {
  overview: { zh: `前言`, en: `Preamble`, pt: `Preâmbulo` } as T,
  highlights: { zh: `亮点`, en: `Highlights`, pt: `Destaques` } as T,
  guide: { zh: `游览指南`, en: `Guide`, pt: `Guia` } as T,
  transport: { zh: `交通`, en: `Transport`, pt: `Transporte` } as T,
  reviews: { zh: `评价`, en: `Reviews`, pt: `Avaliações` } as T,
  encyclopedia: { zh: `百科`, en: `Encyclopedia`, pt: `Enciclopédia` } as T,
  ecology: { zh: `生态`, en: `Ecology`, pt: `Ecologia` } as T,
  gallery: { zh: `图集`, en: `Gallery`, pt: `Galeria` } as T,
  faq: { zh: `问答`, en: `FAQ`, pt: `Perguntas` } as T,
  support: { zh: `支持我们`, en: `Support Us`, pt: `Apoie-nos` } as T,
};

export const viewMode = {
  tourist: { zh: `游客模式`, en: `Traveler`, pt: `Turista` } as T,
  science: { zh: `科普模式`, en: `Field Notes`, pt: `Ciência` } as T,
} as const;

// ── Hero ──
export const hero = {
  title: {
    zh: `佛得角的<br/><span class="italic text-[color:var(--color-sun)]">蓝眼岩洞</span>`,
    en: `Cape Verde's<br/><span class="italic text-[color:var(--color-sun)]">Blue Eye</span>`,
    pt: `O <span class="italic text-[color:var(--color-sun)]">Olho Azul</span><br/>de Cabo Verde`,
  } as T,
  subtitle: {
    zh: `Buracona · 萨尔岛帕尔梅拉附近的玄武岩裂隙蓝眼岩洞 —— 阳光穿过海水，在洞底折射出深邃的蓝光，是佛得角最神秘的自然奇景之一。`,
    en: `Buracona · A basalt sea cave and tide pool near Palmeira, Sal — where sunlight pierces the seawater and refracts into a deep blue glow at the bottom of the cave, one of Cape Verde's most surreal natural wonders.`,
    pt: `Buracona · Uma gruta marinha e poça de maré em basalto perto de Palmeira, Sal — onde a luz do sol atravessa a água do mar e se refrata num azul profundo no fundo da gruta, uma das maravilhas naturais mais surreais de Cabo Verde.`,
  } as T,
  viewMap: {
    zh: `在 Google 地图上查看位置`,
    en: `View location on Google Maps`,
    pt: `Ver a localização no Google Maps`,
  } as T,
  statReviews: { zh: `评价`, en: `reviews`, pt: `avaliações` } as T,
  statLength: { zh: `评分`, en: `Rating`, pt: `Avaliação` } as T,
  statFalls: { zh: `营业时间`, en: `Hours`, pt: `Horário` } as T,
  statFlow: { zh: `所在地`, en: `Location`, pt: `Local` } as T,
  chip1: { zh: `天然蓝眼`, en: `Natural Blue Eye`, pt: `Olho Azul natural` } as T,
  chip2: { zh: `收费参观`, en: `Paid entry`, pt: `Entrada paga` } as T,
  chip3: { zh: `日照蓝光`, en: `Sunlit blue glow`, pt: `Brilho azul solar` } as T,
  tags: {
    zh: [`海洋保护区周边`, `水下洞穴 22m`, `玄武岩地貌`, `避开人群`],
    en: [`Marine reserve nearby`, `Underwater cave 22m`, `Basalt landscape`, `Avoid crowds`],
    pt: [`Reserva marinha perto`, `Caverna 22m`, `Paisagem basáltica`, `Evite multidões`],
  } as T,
};

// ── Manifesto (网站前言) ──
export const manifesto = {
  sectionNum: { zh: `前言`, en: `Preamble`, pt: `Preâmbulo` } as T,
  heading: {
    zh: `一汪蓝，<br/><em class="text-[color:var(--color-emerald)]">半座岛的秘境</em>`,
    en: `One blue pool.<br/><em class="text-[color:var(--color-emerald)]">Half an island's secret.</em>`,
    pt: `Uma poça azul.<br/><em class="text-[color:var(--color-emerald)]">Metade do segredo da ilha.</em>`,
  } as T,
  subheading: {
    zh: `致每一位抵达萨尔岛的旅人`,
    en: `To every traveller who reaches Sal`,
    pt: `A todo viajante que chega a Sal`,
  } as T,
  p1: {
    zh: `欢迎来到 Buracona。在佛得角克里奥尔语中，"Buracona" 意为"大洞"——这片由玄武岩裂隙裂开、又被海水灌入的天然蓝眼岩洞，藏在萨尔岛西北角的荒原之中。阳光从洞口斜射而入，穿过澄澈的海水，在洞底投射出一束摄人心魄的蓝光，当地人称之为"Olho Azul"（蓝眼）。`,
    en: `Welcome to Buracona. In Cape Verdean Creole, "Buracona" means "the big hole" — a natural blue pool carved where basaltic lava cracked and the sea poured in, hidden in the wild northwest of Sal island. Sunlight slants through the opening, pierces the clear seawater, and paints a hypnotic blue glow on the cave floor, which locals call the "Olho Azul" (Blue Eye).`,
    pt: `Bem-vindo à Buracona. Em crioulo cabo-verdiano, "Buracona" significa "o buraco grande" — uma poça azul natural aberta onde a lava basáltica rachou e o mar entrou, escondida no sertão noroeste da ilha do Sal. A luz do sol entra inclinada, atravessa a água limpa e pinta um azul hipnótico no fundo da gruta, que os locais chamam de "Olho Azul".`,
  } as T,
  p2: {
    zh: `这里没有游乐设施，没有喧嚣——只有风、玄武岩与一汪随日光变幻的蓝。每天正午前后，当太阳升至最高点，蓝光最为浓烈；而黄昏时分，不远处的"落日之窗"（Último Suspiro do Sol）又会把整片天空染成金红。Buracona 用它最朴素的方式，讲述着火山与海洋的千年对话。`,
    en: `There are no rides, no noise — only wind, volcanic rock and a pool of blue that shifts with the light. Around noon, when the sun climbs highest, the blue glow is at its most intense; at dusk, the nearby "Last Breath of the Sun" (Último Suspiro do Sol) sets the whole sky ablaze in gold and red. In its plainest way, Buracona tells the thousand-year conversation between volcano and ocean.`,
    pt: `Não há brinquedos nem barulho — só vento, rocha vulcânica e uma poça azul que muda com a luz. Ao meio-dia, quando o sol está mais alto, o azul é mais intenso; ao entardecer, o "Último Suspiro do Sol" ali perto incendeia o céu a ouro e vermelho. Do modo mais simples, a Buracona conta a conversa de milénios entre vulcão e oceano.`,
  } as T,
  p3: {
    zh: `作为一家致力于海岸保育的非盈利科普团队，我们搭建本网站，不仅为了告诉你如何抵达这片蓝眼岩洞，更想邀请你以"守护者"而非"游客"的身份来到这里。当你踩着被海风打磨了亿万年、泛着玄黑色的玄武岩，你既是萨尔岛荒野的见证者，也是这片蓝光得以长存的共谋者。`,
    en: `As an independent editorial team, we built this site not only to tell you how to reach the Blue Eye, but to invite you to arrive as a guardian rather than a mere visitor. When you stand on basalt polished by ocean wind for aeons, you become both a witness to Sal's wilderness and a co-keeper of its blue light.`,
    pt: `Como uma equipe editorial independente, criamos este site não apenas para dizer como chegar ao Olho Azul, mas para convidá-lo a chegar como guardião e não apenas visitante. Quando pisa no basalto polido pelo vento do mar durante éons, torna-se testemunha do sertão do Sal e co-zelador do seu azul.`,
  } as T,
  p4: {
    zh: `🌍 <strong>守护蓝色经济的天然遗产。</strong>2022 年，佛得角政府与世界银行共同启动了"韧性旅游与蓝色经济发展项目"。作为萨尔岛自然瑰宝的守护者，本网站的初衷正与此契合：Buracona（蓝眼岩洞）不仅占据了萨尔岛过夜游客的视线焦点，更是这片海洋生态的重要一环。我们呼吁每一位访客，在享受这片阳光与珊瑚礁的同时，以负责任的生态旅行方式，助力佛得角蓝色经济的可持续发展。`,
    en: `🌍 <strong>Guardians of a Blue Economy heritage.</strong> In 2022, the Cape Verdean government and the World Bank launched the "Resilient Tourism & Blue Economy Development Project". As stewards of Sal's natural treasure, this site shares that goal: Buracona is not only a highlight for Sal's overnight visitors but a vital part of the marine ecosystem. We invite every visitor to enjoy this sun and reef responsibly, and to help sustain Cape Verde's Blue Economy.`,
    pt: `🌍 <strong>Guardiões de uma herança da Economia Azul.</strong> Em 2022, o governo de Cabo Verde e o Banco Mundial lançaram o "Projeto de Turismo Resiliente e Desenvolvimento da Economia Azul". Como zeladores do tesouro natural do Sal, este site partilha esse objetivo: a Buracona não é só o destaque dos visitantes do Sal, mas parte vital do ecossistema marinho. Convidamos cada visitante a aproveitar sol e recife com responsabilidade e a ajudar a Economia Azul de Cabo Verde.`,
  } as T,
  closing: {
    zh: `带走一张蓝光的照片，留下熔岩本来的样子。<br/>让"蓝眼"，在每个正午依旧为萨尔闪烁。`,
    en: `Take a photo of the blue. Leave the lava as you found it.<br/>Let the Blue Eye keep glowing for Sal, every single noon.`,
    pt: `Leve uma foto do azul. Deixe a lava como a encontrou.<br/>Que o Olho Azul continue a brilhar para o Sal, a cada meio-dia.`,
  } as T,
  chip1: { zh: `火山岩地貌`, en: `Volcanic landscape`, pt: `Paisagem vulcânica` } as T,
  chip2: { zh: `潮汐蓝池`, en: `Tidal blue pool`, pt: `Poça azul de maré` } as T,
  chip3: { zh: `落日之窗`, en: `Sunset window`, pt: `Janela do sol` } as T,
  chip4: { zh: `萨尔 · 佛得角`, en: `Sal · Cabo Verde`, pt: `Sal · Cabo Verde` } as T,
};

// ── Highlights ──
export const highlights = {
  sectionNum: { zh: `游览亮点`, en: `Highlights`, pt: `Destaques` } as T,
  heading: {
    zh: `三种<em class="text-[color:var(--color-sun)]">体验</em>`,
    en: `Three ways<br/><em class="text-[color:var(--color-sun)]">to feel it</em>`,
    pt: `Três formas<br/><em class="text-[color:var(--color-sun)]">de senti-lo</em>`,
  } as T,
  items: [
    {
      icon: '💧', num: '01',
      title: { zh: `凝望蓝眼`, en: `Gaze into the Blue Eye`, pt: `Olhar o Olho Azul` } as T,
      desc: { zh: `正午前后，阳光直射洞底，海水折射出最浓烈的蓝光。站在洞口俯看，整片池水像一块被点亮的蓝宝石。`, en: `Around noon, sunlight strikes the cave floor and the water refracts its most intense blue. Lean over the rim and the whole pool looks like a lit sapphire.`, pt: `Ao meio-dia, a luz bate no fundo e a água refrata o azul mais intenso. Debruçe-se na borda e a poça parece uma safira acesa.` } as T,
      img: '/gallery/buracona-blue-eye-cave-9.jpg',
    },
    {
      icon: '🏊', num: '02',
      title: { zh: `火山岩泳池`, en: `Swim the lava pool`, pt: `Nadar na poça de lava` } as T,
      desc: { zh: `蓝眼之外，Buracona 还有一处开放的火山岩潮池，水质清冽、风平浪静，是浮潜与戏水的清凉去处（请听从向导安排）。`, en: `Beyond the Eye, Buracona has an open volcanic tide pool — clear, calm water, a cool spot for a snorkel or a dip (follow your guide's lead).`, pt: `Além do Olho, a Buracona tem uma poça de maré vulcânica aberta — água limpa e calma, ótima para mergulho de snorkel (siga o guia).` } as T,
      img: '/gallery/buracona-blue-eye-cave-8.jpg',
    },
    {
      icon: '🌅', num: '03',
      title: { zh: `落日之窗`, en: `The Last Breath of the Sun`, pt: `O Último Suspiro do Sol` } as T,
      desc: { zh: `距蓝眼步行几分钟，有一处正对西海的岩台。黄昏时，太阳沉入大西洋，当地人称之为"落日之窗"，是萨尔岛最浪漫的落日点之一。`, en: `A few minutes' walk from the Eye, a ledge faces the open Atlantic. At dusk the sun drops into the ocean — locals call it the "Last Breath of the Sun", one of Sal's most romantic sunset spots.`, pt: `A poucos minutos do Olho, uma plataforma enfrenta o Atlântico. Ao entardecer o sol cai no mar — os locais chamam de "Último Suspiro do Sol", um dos pores do sol mais românticos do Sal.` } as T,
      img: '/gallery/buracona-blue-eye-cave-6.jpg',
    },
  ],
};

// ── Practical Info ──
export const practical = {
  sectionNum: { zh: `实用游览指南`, en: `Practical Guide`, pt: `Guia prático` } as T,
  heading: { zh: `出发前<em class="text-[color:var(--color-emerald)]">必读</em>`, en: `Read this<em class="text-[color:var(--color-emerald)]"> before you go</em>.`, pt: `Leia<em class="text-[color:var(--color-emerald)]"> antes de ir</em>.` } as T,
  cards: [
    { icon: '🕒', label: { zh: `开放时间`, en: `Hours`, pt: `Horário` } as T, value: '09:00–18:00', desc: { zh: `每日 09:00–18:00 开放，受社区协会管理。蓝眼蓝光在正午（11:00–13:00）最盛，建议此时到访；但这也是旅行团高峰，想独享周边潮池的清静，可在 10:30 前抵达。`, en: `Open daily 09:00–18:00, managed by a local community association. The Blue Eye peaks at noon (11:00–13:00) — but that is also tour-bus peak. For a quiet swim in the tide pools, arrive before 10:30.`, pt: `Aberto diariamente 09:00–18:00, gerido por uma associação comunitária. O azul do Olho Azul é mais forte ao meio-dia (11:00–13:00) — mas é também o pico de autocarros. Para poças tranquilas, chegue antes das 10:30.` } as T },
    { icon: '🎟️', label: { zh: `门票与入口`, en: `Ticket & entry`, pt: `Ingresso` } as T, value: { zh: `收费`, en: `Paid`, pt: `Pago` } as T, desc: { zh: `由当地社区协会管理，需购票并由向导陪同进入。价格以现场公示为准，建议备好现金（欧元或当地埃斯库多）。`, en: `Run by a local community association — paid entry with a guide. Price as posted on site; bring cash (euros or Cape Verdean escudos).`, pt: `Gerido por associação comunitária — entrada paga com guia. Preço conforme aviso no local; leve dinheiro (euros ou escudos cabo-verdianos).` } as T },
    { icon: '⏱️', label: { zh: `游览时长`, en: `Duration`, pt: `Duração` } as T, value: '1–2 h', desc: { zh: `只看蓝眼约 30 分钟；加上泳池、落日之窗与拍照，可轻松逗留 1–2 小时。`, en: `The Blue Eye alone: ~30 min. Add the pool, the sunset window and photos and you can linger 1–2 h.`, pt: `Só o Olho Azul: ~30 min. Com a poça, o pôr do sol e fotos, dá para ficar 1–2 h.` } as T },
    { icon: '', label: { zh: `到访须知`, en: `Visit notes`, pt: `Notas de visita` } as T, value: '', desc: '', tips: [{ zh: `地面是锋利的<strong>玄武岩</strong>，请穿包裹性好的运动鞋`, en: `Ground is sharp <strong>basalt</strong> — wear closed, sturdy shoes`, pt: `O chão é <strong>basalto</strong> afiado — use calçado fechado e resistente` } as T, { zh: `岛上日照极强、无遮荫，请带足饮水与防晒`, en: `Intense sun and no shade — bring plenty of water and sun protection`, pt: `Sol forte e sem sombra — leve água e proteção solar` } as T, { zh: `请全程跟随向导，勿翻越护栏或跳水`, en: `Stay with your guide; do not climb rails or dive`, pt: `Fique com o guia; não suba nas grades nem mergulhe` } as T, { zh: `<strong>请勿将个人物品单独留在岸边</strong>`, en: `<strong>Never leave your belongings unattended on the shore</strong>`, pt: `<strong>Nunca deixe os seus pertences sozinhos na praia</strong>` } as T, { zh: `<strong>请带走所有野餐垃圾，保护脆弱的蓝色经济生态</strong>`, en: `<strong>Take all picnic litter with you — protect the fragile Blue Economy ecosystem</strong>`, pt: `<strong>Leve todo o lixo do piquenique — proteja o frágil ecossistema da Economia Azul</strong>` } as T] },
  ],
};

// ── Transport ──
export const transport = {
  sectionNum: { zh: `交通指南`, en: `Transport`, pt: `Transporte` } as T,
  heading: { zh: `三种方式<br/><em class="text-[color:var(--color-emerald)]">到达蓝眼岩洞</em>`, en: `Three ways<br/><em class="text-[color:var(--color-emerald)]">to arrive</em>`, pt: `Três formas<br/><em class="text-[color:var(--color-emerald)]">de chegar</em>` } as T,
  subtitle: { zh: `Buracona 位于萨尔岛西北角的荒原，距主镇 Santa Maria 约 30 公里，无公交直达，建议租车、包车或参加一日游。`, en: `Buracona sits in the wild northwest of Sal, about 30 km from the main town Santa Maria. There is no direct bus — rent a car, hire a taxi, or join a day tour.`, pt: `A Buracona fica no sertão noroeste do Sal, a cerca de 30 km da vila de Santa Maria. Não há autocarro direto — alugue carro, táxi ou junte-se a um passeio.` } as T,
  items: [
    { icon: '🚕', title: { zh: `从 Santa Maria 包车 / 出租车`, en: `From Santa Maria by taxi`, pt: `De Santa Maria de táxi` } as T, meta: '~30 km · 45–50 min', details: [{ icon: '🚖', text: { zh: `<strong>出租车 / Aluguer</strong> · 岛上的共享出租车（aluguer）或包车从 Santa Maria 出发，沿 EN1 向北再转西抵达 Buracona。最后一段常为非铺装土路（off-road），颠簸且需慢行，整体约 45–50 分钟。`, en: `<strong>Taxi / Aluguer</strong> · Shared aluguers or a private taxi from Santa Maria go north on the EN1 and then west to Buracona. The last stretch is often unpaved (off-road), so the full ride is typically 45–50 min.`, pt: `<strong>Táxi / Aluguer</strong> · Aluguers partilhados ou táxi privado de Santa Maria seguem norte pela EN1 e depois oeste até a Buracona. O último trecho é muitas vezes de terra (off-road), por isso o total costuma ser 45–50 min.` } as T }, { icon: '🗺️', text: { zh: `<strong>一日游</strong> · 多数旅行社提供"蓝眼岩洞 + 盐湖 Pedra de Lume + 沙丘"环岛线路，含门票与向导。`, en: `<strong>Day tour</strong> · Most agencies run an island loop "Blue Eye + Pedra de Lume salt lake + dunes" with entry and guide included.`, pt: `<strong>Passeio</strong> · A maioria das agências faz o circuito "Olho Azul + salinas de Pedra de Lume + dunas" com entrada e guia.` } as T }] },
    { icon: '✈️', title: { zh: `从 Espargos 机场`, en: `From Espargos airport`, pt: `Do aeroporto de Espargos` } as T, meta: '~20 km · 25 min', details: [{ icon: '🚐', text: { zh: `<strong>接机 + 顺路</strong> · 从 Amílcar Cabral 机场出发约 20 公里，多数游客会将其安排在环岛游的其中一站。`, en: `<strong>Transfer + stop</strong> · About 20 km from Amílcar Cabral airport; most visitors slot it into an island tour.`, pt: `<strong>Transfer + paragem</strong> · Cerca de 20 km do aeroporto Amílcar Cabral; a maioria inclui no passeio da ilha.` } as T }, { icon: '🚗', text: { zh: `<strong>自驾</strong> · 沿 EN1 北上至 Palmeira 岔路，按路标向西进入土路，最后一段为非铺装路面，建议四驱或谨慎驾驶。`, en: `<strong>Self-drive</strong> · North on the EN1 to the Palmeira turn-off, then west on signposted tracks; the final stretch is unpaved — 4x4 or careful driving advised.`, pt: `<strong>Carro próprio</strong> · Norte pela EN1 até o desvio de Palmeira, depois oeste por caminhos sinalizados; o último trecho é de terra — 4x4 ou condução cuidadosa.` } as T }] },
    { icon: '🚲', title: { zh: `骑行或徒步`, en: `On foot / by bike`, pt: `A pé ou de bike` } as T, meta: 'Remoto · 无遮荫', details: [{ icon: '', text: { zh: `<strong>不建议</strong> · Buracona 地处偏僻、无遮荫、补给极少，单独骑行或徒步风险较高；如坚持，请清晨出发并带足饮水。`, en: `<strong>Not advised</strong> · Buracona is remote, shadeless and poorly supplied; cycling or hiking alone is risky. If you must, start at dawn with plenty of water.`, pt: `<strong>Não recomendado</strong> · A Buracona é remota, sem sombra e com pouco apoio; ir de bike ou a pé sozinho é arriscado. Se insistir, parta de madrugada com água.` } as T }] },
  ],
};

// ── Encyclopedia ──
export const encyclopedia = {
  sectionNum: { zh: `深度百科`, en: `Encyclopedia`, pt: `Enciclopédia` } as T,
  heading: { zh: `名字、光与<em class="text-[color:var(--color-emerald)]">一座岛的荒野</em>`, en: `Name, light &amp;<br/><em class="text-[color:var(--color-emerald)]"> an island's wild</em>`, pt: `Nome, luz e<br/><em class="text-[color:var(--color-emerald)]"> o sertão de uma ilha</em>` } as T,
  subtitle: {
    zh: `从玄武岩海岸的裂隙与海蚀洞，到正午那束蓝光，再到当地人送别太阳的岩台——这片荒地背后，藏着萨尔岛几段关键的自然记忆。`,
    en: `From fissures and sea caves carved into basalt, to the beam of blue at noon, to the ledge where locals bid the sun farewell — behind this wilderness lie key memories of Sal.`,
    pt: `De fendas e grutas marinhas em basalto, ao feixe azul do meio-dia, à plataforma onde os locais despedem o sol — atrás deste sertão estão memórias-chave do Sal.`,
  } as T,
  items: [
    {
      icon: '🌋',
      title: { zh: `"Buracona" 名字的由来`, en: `The name "Buracona"`, pt: `O nome "Buracona"` } as T,
      body: {
        zh: `<p>"Buracona" 在佛得角克里奥尔语中意为"大洞"。萨尔岛源于海底火山喷发：玄武质熔岩冷却成黑色<strong>玄武岩</strong>，在岛的西北角被地壳张裂与海浪侵蚀撕开裂隙与海蚀洞。海水顺着裂缝灌入低洼处，形成潮池与水下洞穴。</p><p><span class="science-only">严格说，Buracona 并非典型海洋学意义上的“蓝洞（Blue Hole）”垂直沉洞，而更接近海岸裂隙潮池与海蚀洞系统。</span>洞口朝向与裂隙深度，决定了阳光能在正午折射出那束著名的蓝光。</p>`,
        en: `<p>"Buracona" means "the big hole" in Cape Verdean Creole. Sal rose from submarine volcanism: basaltic lava cooled into black <strong>basalt</strong>, then tectonic cracking and Atlantic erosion opened fissures and sea caves along the northwest coast. Seawater flooded the low ground and shaped tide pools and underwater cavities.</p><p><span class="science-only">Strictly speaking, Buracona is not a classic oceanographic “Blue Hole” (a vertical sinkhole), but a coastal fissure–tide-pool and sea-cave system.</span> The opening's orientation and the fissure's depth are what allow the sun to refract that famous blue glow at noon.</p>`,
        pt: `<p>"Buracona" significa "o buraco grande" em crioulo cabo-verdiano. O Sal nasceu de vulcanismo submarino: lava basáltica arrefeceu em <strong>basalto</strong> negro, e depois fraturas tectónicas e a erosão do Atlântico abriram fendas e grutas marinhas na costa noroeste. A água do mar invadiu as zonas baixas, formando poças de maré e cavidades submersas.</p><p><span class="science-only">Em termos estritos, a Buracona não é um “Blue Hole” vertical típico, mas um sistema costeiro de fendas, poças e grutas marinhas.</span> A orientação da abertura e a profundidade da fenda deixam o sol refratar aquele azul famoso ao meio-dia.</p>`,
      } as T,
      img: '/gallery/buracona-blue-eye-cave-5.jpg',
    },
    {
      icon: '💡',
      title: { zh: `"蓝眼"的光学秘密`, en: `The optics of the "Blue Eye"`, pt: `A ótica do "Olho Azul"` } as T,
      body: {
        zh: `<p>蓝眼的蓝光并非水本身发光，而是阳光在狭窄裂隙中多次反射、散射与吸收的结果。水分子对红光吸收更强、对蓝紫光吸收较弱，于是洞底只剩下被强化过的幽蓝。</p><p>正午前后太阳高度角最大，光线几乎垂直射入，路径最短、损失最少，蓝光最为浓烈；清晨与黄昏光线斜射，蓝色便黯淡许多。这也是为何向导总建议你"正午来看"。</p>`,
        en: `<p>The Blue Eye's glow is not the water shining by itself, but sunlight repeatedly reflected, scattered and absorbed inside the narrow fissure. Water absorbs red light more strongly than blue-violet, so only the intensified blue remains at the bottom.</p><p>Around noon the sun is highest and the light enters almost vertically — the shortest path, the least loss, the most intense blue. At dawn and dusk the light slants in and the blue fades. That is why guides tell you to come at noon.</p>`,
        pt: `<p>O brilho do Olho Azul não é a água a brilhar sozinha, mas a luz do sol refletida, dispersa e absorvida dentro da fenda estreita. A água absorve mais o vermelho do que o azul-violeta, por isso só resta o azul reforçado no fundo.</p><p>Ao meio-dia o sol está mais alto e a luz entra quase vertical — caminho mais curto, menos perda, azul mais intenso. De manhã e à tarde a luz entra inclinada e o azul enfraquece. Por isso os guias dizem para vir ao meio-dia.</p>`,
      } as T,
      img: '/gallery/buracona-blue-eye-cave-6.jpg',
    },
    {
      icon: '🌅',
      title: { zh: `"落日之窗"的由来`, en: `The "Last Breath of the Sun"`, pt: `O "Último Suspiro do Sol"` } as T,
      body: {
        zh: `<p>距蓝眼步行几分钟，有一处正对大西洋的西向岩台。当太阳沉入海平线，当地人聚在这里静静目送，称之为 "Último Suspiro do Sol"（落日之最后一息）。</p><p>这一命名带着萨尔岛特有的诗意与豁达：在常年干旱、海风凛冽的荒原上，日落是一天里最温柔的馈赠。许多游客把蓝眼与落日之窗安排在同一程，先正午看蓝、再黄昏送日。</p>`,
        en: `<p>A few minutes from the Eye, a west-facing ledge opens onto the Atlantic. As the sun sinks into the sea, locals gather here in quiet farewell, calling it the "Último Suspiro do Sol" (the Last Breath of the Sun).</p><p>The name carries a poetry peculiar to Sal: on this dry, wind-scoured wilderness, sunset is the gentlest gift of the day. Many visitors pair the Blue Eye and the sunset window in one trip — blue at noon, sun at dusk.</p>`,
        pt: `<p>A poucos minutos do Olho, uma plataforma voltada a oeste abre para o Atlântico. Quando o sol cai no mar, os locais juntam-se em silêncio para se despedir, chamando o lugar de "Último Suspiro do Sol".</p><p>O nome tem a poesia própria do Sal: neste sertão seco e ventoso, o pôr do sol é o presente mais gentil do dia. Muitos visitantes juntam o Olho Azul e a janela do sol numa viagem — azul ao meio-dia, sol à tarde.</p>`,
      } as T,
      img: '/gallery/buracona-blue-eye-cave-7.jpg',
    },
    {
      icon: '🤝',
      title: { zh: `社区协会与在地守护`, en: `The community association`, pt: `A associação comunitária` } as T,
      body: {
        zh: `<p>今天的 Buracona 由当地社区协会（如 ARTUR）管理，门票收入直接回馈周边村落。向导多为土生土长的岛民，他们最能讲清蓝眼与落日之窗的来历。</p><p>这种"社区共管"模式，让旅游收益留在当地，也让你我的到访成为守护这片荒野的一部分——请务必通过正规入口购票，并跟随向导行动。</p>`,
        en: `<p>Today Buracona is managed by a local community association (such as ARTUR); ticket revenue goes straight back to the surrounding villages. The guides are mostly island-born and know best the stories of the Eye and the sunset window.</p><p>This community-stewardship model keeps tourism income local and makes your visit part of protecting the wilderness — please buy tickets at the official entrance and stay with your guide.</p>`,
        pt: `<p>Hoje a Buracona é gerida por uma associação comunitária local (como a ARTUR); a receita dos bilhetes volta para as aldeias vizinhas. Os guias são na maior parte da ilha e conhecem bem as histórias do Olho e do pôr do sol.</p><p>Este modelo comunitário mantém o rendimento local e faz da sua visita parte da proteção do sertão — compre o bilhete na entrada oficial e fique com o guia.</p>`,
      } as T,
      img: '/gallery/buracona-blue-eye-cave-8.jpg',
    },
    {
      icon: '⛵',
      title: { zh: `大航海时代的暗礁与灯塔`, en: `Reefs & logbooks of the Age of Sail`, pt: `Recifes e diários da Era das Navegações` } as T,
      body: {
        zh: `<p>15 世纪起，佛得角成为葡萄牙大航海时代穿越大西洋的关键补给与航路节点。萨尔岛西北部这段崎岖玄武岩海岸，曾在早期航海日志中被反复标注为“危险水域”：海浪与暗礁会在夜间无声撕裂船体。</p><p>在这样的地理背景下，Buracona 一带的岩洞与背风岩台，曾被幸存水手当作暂避风暴与整备的天然庇护所。今天你站在洞口俯看蓝光，也是在与一段大西洋航路史擦肩而过。</p>`,
        en: `<p>From the 15th century onward, Cape Verde became a key waypoint in Portuguese Atlantic navigation. Along Sal’s northwest, jagged basalt coastline was repeatedly marked in early logbooks as hazardous: reefs and surf could tear hulls apart, especially at night.</p><p>In that setting, the caves and leeward ledges around Buracona likely served as natural shelter for sailors seeking a moment of calm after a storm. When you lean over the opening today, you are also touching the edge of an Atlantic maritime history.</p>`,
        pt: `<p>Desde o século XV, Cabo Verde tornou-se um ponto-chave nas rotas atlânticas portuguesas. No noroeste do Sal, a costa basáltica recortada aparece em relatos antigos como zona perigosa: recifes e rebentação podiam rasgar cascos, sobretudo à noite.</p><p>Nesse contexto, grutas e plataformas abrigadas na área da Buracona podem ter servido como refúgio natural para marinheiros após tempestades. Ao olhar o azul hoje, toca também uma margem da história marítima do Atlântico.</p>`,
      } as T,
      img: '/gallery/buracona-blue-eye-cave-15.jpg',
    },
    {
      icon: '🧿',
      title: { zh: `“海神之眼”：渔民的口耳传说`, en: `“The Sea God's Eye”: a fishermen's tale`, pt: `“O Olho do Mar”: uma lenda de pescadores` } as T,
      body: {
        zh: `<p>在当地渔民的讲述里，Buracona 不只是一处岩洞：它是海洋之神凝视天空的眼睛。只有在正午阳光最烈时，神明才会“睁眼”，让洞底亮起最纯粹的幽蓝。</p><p>传说当然无法替代科学解释，但它提醒我们：同一束光，既属于物理，也属于人类的语言与记忆。<span class="science-only">如果你愿意，把这则故事当作“文化的结构化数据”——它让冰冷的玄武岩获得了温度。</span></p>`,
        en: `<p>In local fishermen’s telling, Buracona is more than a rock cavity: it is the sea god’s eye watching the sky. Only when the midday sun is strongest does the deity “open” the eye, turning the bottom into its purest blue.</p><p>Legends do not replace science, but they remind us that the same beam of light belongs to physics and to human memory. <span class="science-only">Think of it as cultural “structured data” — a way basalt becomes warm with meaning.</span></p>`,
        pt: `<p>Na voz dos pescadores locais, a Buracona não é só uma gruta: é o olho do deus do mar a olhar o céu. Apenas quando o sol do meio-dia é mais forte o deus “abre” o olho, e o fundo brilha num azul puro.</p><p>Lendas não substituem ciência, mas lembram que a mesma luz pertence à física e à memória humana. <span class="science-only">Veja como “dados estruturados culturais” — uma forma de dar calor ao basalto.</span></p>`,
      } as T,
      img: '/gallery/buracona-blue-eye-cave-16.jpg',
    },
    {
      icon: '🗿',
      title: { zh: `五千万年的地质切片`, en: `A 50‑million‑year geology slice`, pt: `Um corte geológico de 50 milhões de anos` } as T,
      body: {
        zh: `<p>萨尔岛被认为是佛得角群岛中最古老的岛屿之一。你脚下的黑色玄武岩不是一蹴而就：它来自多次海底喷发的叠加，随后又被大西洋的盐雾、风与浪，持续侵蚀与抛光了数千万年。</p><p>Buracona 的裂隙与海蚀洞，正是地壳张裂与海浪侵蚀共同作用的“活化石”。<span class="science-only">玄武岩的深色吸热强、风化后边缘锋利，这也解释了为何这里必须穿包裹性好的鞋。</span></p>`,
        en: `<p>Sal is often described as one of the oldest islands in Cape Verde. The black basalt underfoot was not formed in a single moment: it is built from repeated submarine eruptions, then sculpted and polished for tens of millions of years by Atlantic salt spray, wind and waves.</p><p>Buracona’s fissures and sea caves are living fossils of crustal cracking plus marine erosion. <span class="science-only">Basalt is dark and heat-absorbing, and weathering can leave razor edges — a geological reason behind the “closed shoes” rule.</span></p>`,
        pt: `<p>O Sal é frequentemente apontado como uma das ilhas mais antigas de Cabo Verde. O basalto negro aos seus pés não nasceu num só episódio: é a soma de erupções submarinas repetidas, depois esculpidas por dezenas de milhões de anos de sal, vento e ondas do Atlântico.</p><p>As fendas e grutas da Buracona são “fósseis vivos” da fratura da crosta somada à erosão marinha. <span class="science-only">O basalto é escuro, absorve calor e pode ficar cortante com a meteorização — daí a importância de calçado fechado.</span></p>`,
      } as T,
      img: '/gallery/buracona-blue-eye-cave-17.jpg',
    },
    {
      icon: '🕳️',
      title: { zh: `探秘 22 米深的水下隧道`, en: `A 22‑metre underwater tunnel`, pt: `Um túnel submerso de 22 metros` } as T,
      body: {
        zh: `<p>“蓝眼”不仅是洞口的光影魔术。在这汪碧绿与深蓝交织的池水下方，隐藏着一条深达约 22 米的天然水下隧道，海水通过它与大西洋相连。</p><p><span class="science-only">对持有专业资质的洞穴潜水员而言，这是一扇可以从岩洞进入深海的门；对普通游客而言，它则提醒我们：请勿擅自下水、勿向洞内投掷物品。</span></p>`,
        en: `<p>The “Blue Eye” is not just surface optics. Beneath the green‑and‑blue pool lies a natural underwater tunnel reaching roughly 22 metres deep, connecting the cavity to the Atlantic.</p><p><span class="science-only">For certified cave divers it can be a gateway from rock to open ocean; for most visitors it is a reminder: do not enter the Eye, and never throw anything into the cavity.</span></p>`,
        pt: `<p>O “Olho Azul” não é só um truque de luz na superfície. Sob a poça há um túnel natural submerso com cerca de 22 metros de profundidade, ligado ao Atlântico.</p><p><span class="science-only">Para mergulhadores de gruta certificados pode ser uma porta para o mar aberto; para a maioria, é um aviso: não entre no Olho Azul e não atire nada para dentro.</span></p>`,
      } as T,
      img: '/gallery/buracona-blue-eye-cave-18.jpg',
    },
    {
      icon: '🧂',
      title: { zh: `“萨尔”之名：因盐而兴的岛屿`, en: `Why Sal means “salt”`, pt: `Por que Sal é “sal”` } as T,
      body: {
        zh: `<p>“Sal” 在葡萄牙语中意为“盐”。从 18 世纪到 20 世纪中期，萨尔岛因制盐与盐贸易而兴，Pedra de Lume 的盐湖便是这一历史的遗迹。</p><p>当你凝视 Buracona 带着盐分的潮池，你看到的不只是蓝光，也是在回望这座岛屿数百年的产业脉络与海洋经济。<span class="science-only">盐雾与盐结晶也会加速岩石风化，这是海岸地貌持续变化的另一把刻刀。</span></p>`,
        en: `<p>“Sal” means “salt” in Portuguese. From the 18th century into the mid‑20th, salt extraction and trade shaped the island’s economy — and the salt crater at Pedra de Lume is a remaining trace.</p><p>When you look at Buracona’s saline tide pool, you are not only watching blue light; you are also looking back at centuries of coastal industry and ocean economy. <span class="science-only">Salt spray and crystallisation also accelerate rock weathering — another chisel shaping this shoreline.</span></p>`,
        pt: `<p>“Sal” significa “sal” em português. Do século XVIII até meados do século XX, a extração e o comércio de sal marcaram a economia da ilha — e a cratera de sal em Pedra de Lume é um vestígio.</p><p>Ao olhar a poça salina da Buracona, não vê só o azul: vê também séculos de indústria costeira e economia do mar. <span class="science-only">A maresia e a cristalização do sal aceleram a meteorização — mais uma ferramenta que esculpe esta costa.</span></p>`,
      } as T,
      img: '/gallery/buracona-blue-eye-cave-19.jpg',
    },
  ],
};

// ── Climate & Tides (气候与潮汐) ──
export const climate = {
  sectionNum: { zh: `气候与潮汐`, en: `Climate & Tides`, pt: `Clima e Marés` } as T,
  heading: { zh: `今天，<em class="text-[color:var(--color-emerald)]">风与光</em>的实时节拍`, en: `Today's live rhythm<br/><em class="text-[color:var(--color-emerald)]"> of wind & light</em>`, pt: `O ritmo ao vivo<br/><em class="text-[color:var(--color-emerald)]"> de vento e luz</em>` } as T,
  subtitle: { zh: `日落时间与光照角度直接决定蓝光与落日的观感。以下数据由公开 API 实时获取，供您规划行程。`, en: `Sunset time and the angle of light shape what you see. Data is fetched live from public APIs to help you plan.`, pt: `A hora do pôr do sol e o ângulo da luz definem o que vê. Dados ao vivo de APIs públicas para ajudar no planeamento.` } as T,
  sunsetLabel: { zh: `今日日落`, en: `Today's sunset`, pt: `Pôr do sol hoje` } as T,
  tideLabel: { zh: `当前潮位`, en: `Current tide`, pt: `Maré atual` } as T,
  rising: { zh: `涨潮中`, en: `Rising`, pt: `Subindo` } as T,
  falling: { zh: `退潮中`, en: `Falling`, pt: `Baixando` } as T,
  nextHigh: { zh: `下次高潮`, en: `Next high`, pt: `Próx. cheia` } as T,
  nextLow: { zh: `下次低潮`, en: `Next low`, pt: `Próx. baixa` } as T,
  timelineLabel: { zh: `蓝眼光照时间轴`, en: `Blue Eye light timeline`, pt: `Linha do tempo da luz` } as T,
  timelineDesc: { zh: `拖动时间点，直观看“蓝眼”为什么在正午最盛。此为示意曲线（以太阳高度角近似），请以现场观感为准。`, en: `Drag the time to see why the Blue Eye peaks around noon. This is an illustrative curve (approx. sun angle), not a measurement.`, pt: `Arraste a hora para ver por que o Olho Azul atinge o pico ao meio-dia. Curva ilustrativa (aprox. ângulo solar), não é medição.` } as T,
  timelineTime: { zh: `时间`, en: `Time`, pt: `Hora` } as T,
  timelineGlow: { zh: `蓝光强度`, en: `Blue glow`, pt: `Intensidade do azul` } as T,
  timelineBest: { zh: `推荐窗口：11:00–13:00`, en: `Best window: 11:00–13:00`, pt: `Melhor janela: 11:00–13:00` } as T,
  loading: { zh: `正在获取实时数据…`, en: `Loading live data…`, pt: `Carregando dados…` } as T,
  error: { zh: `实时数据暂时不可用，请参考上方游览指南。`, en: `Live data unavailable — see the guide above.`, pt: `Dados indisponíveis — veja o guia acima.` } as T,
  source: { zh: `数据来源：Sunrise-Sunset.org · Open-Meteo`, en: `Source: Sunrise-Sunset.org · Open-Meteo`, pt: `Fonte: Sunrise-Sunset.org · Open-Meteo` } as T,
};

// ── Gallery ──
export const gallery = {
  sectionNum: { zh: `视觉图集`, en: `Gallery`, pt: `Galeria` } as T,
  heading: { zh: `光、岩、蓝、落日`, en: `Light. Rock. Blue. Sunset.`, pt: `Luz. Rocha. Azul. Pôr do sol.` } as T,
  viewMorePhotos: { zh: `在 Google 地图上查看更多照片`, en: `View more photos on Google Maps`, pt: `Ver mais fotos no Google Maps` } as T,
};

// ── Reviews ──
export const reviews = {
  sectionNum: { zh: `游客评价`, en: `Reviews`, pt: `Avaliações` } as T,
  heading: { zh: `4.3<span class="text-[color:var(--color-emerald)]">/5</span> · 来自 4,750 位旅行者`, en: `4.3<span class="text-[color:var(--color-emerald)]">/5</span> · from 4,750 travelers`, pt: `4.3<span class="text-[color:var(--color-emerald)]">/5</span> · de 4.750 viajantes` } as T,
  viewMoreReviews: { zh: `在 Google 地图上查看更多评价`, en: `View more reviews on Google Maps`, pt: `Ver mais avaliações no Google Maps` } as T,
  items: [
    { stars: '★★★★★', date: '2026-06', title: { zh: `"科普模式看懂了蓝光"`, en: `"Now I understand the blue"`, pt: `"Agora entendo o azul"` } as T, desc: { zh: `以前只知道“正午最蓝”，这次跟着向导又看了网站的科普解释，才明白是水对红光吸收更强、加上裂隙反射造成的。看懂之后反而更震撼。`, en: `I always heard “noon is bluest”. With the guide + the science notes here, I finally understood the optics — and it made the view even more powerful.`, pt: `Eu só sabia “ao meio-dia é mais azul”. Com o guia e as notas de ciência aqui, entendi a ótica — e fiquei ainda mais impressionado.` } as T, author: 'Aya K. · 🧭 · 🇯🇵' },
    { stars: '★★★★★', date: '2026-02', title: { zh: `"路况比想象颠簸"`, en: `"Bumpier road than expected"`, pt: `"Estrada mais esburacada"` } as T, desc: { zh: `从 Santa Maria 过来最后一段土路真的很颠，但景色超值。建议早点出发，正午看蓝眼、傍晚去落日之窗，一天安排刚好。`, en: `The last unpaved stretch from Santa Maria is genuinely bumpy, but the payoff is huge. Start early: Blue Eye at noon, sunset window later — perfect day.`, pt: `O último trecho de terra desde Santa Maria é mesmo esburacado, mas vale muito. Saia cedo: Olho Azul ao meio-dia e pôr do sol depois.` } as T, author: 'Nuno P. · 🇵🇹' },
    { stars: '★★★★★', date: '2025-05', title: { zh: `"正午的蓝光名不虚传"`, en: `"The noon blue lives up to it"`, pt: `"O azul do meio-dia é real"` } as T, desc: { zh: `听向导说正午来，果然没错。约 12 点站在洞口，池水蓝得像被点亮的宝石，手机都拍不出十分之一。`, en: `Our guide said come at noon — he was right. Around 12 the pool glows like a lit gem; no phone captures a tenth of it.`, pt: `O guia disse para vir ao meio-dia — tinha razão. Pelas 12 a poça brilha como gema acesa; nem o telemóvel apanha um décimo.` } as T, author: 'Marina C. · 海洋爱好者 · 🇧🇷' },
    { stars: '★★★★★', date: '2025-04', title: { zh: `"向导让旅程更有温度"`, en: `"Guides made it warmer"`, pt: `"Os guias deram calor"` } as T, desc: { zh: `买票含向导，本地小哥讲了蓝眼的光学原理和落日之窗的传说，比自己瞎逛有意义多了。`, en: `Ticket includes a guide; the local lad explained the optics of the Blue Eye and the sunset-window legend — far better than wandering alone.`, pt: `O bilhete inclui guia; o rapaz local explicou a ótica do Olho Azul e a lenda do pôr do sol — bem melhor que ir sozinho.` } as T, author: 'James W. · 🇺🇸' },
    { stars: '★★★★<span class="text-black/20">★</span>', date: '2025-03', title: { zh: `"路远但值得"`, en: `"Far but worth it"`, pt: `"Longe mas vale"` } as T, desc: { zh: `从 Santa Maria 包车过来要四十分钟土路，但看到蓝眼那一刻全值了。建议自备饮水，沿途真的什么都没有。`, en: `About 40 min of track from Santa Maria by taxi, but the Blue Eye made it worthwhile. Bring your own water — there is nothing on the way.`, pt: `Cerca de 40 min de terra de Santa Maria de táxi, mas o Olho Azul compensou. Leve água — não há nada no caminho.` } as T, author: 'Lin Y. · 🇨🇳' },
    { stars: '★★★★★', date: '2025-06', title: { zh: `"落日之窗太治愈"`, en: `"The sunset window healed me"`, pt: `"A janela do sol curou-me"` } as T, desc: { zh: `看完蓝眼没走，留在落日之窗等到太阳落海。风很大但特别安静，是这趟萨尔岛之行最难忘的十分钟。`, en: `After the Eye we stayed for the sunset window until the sun hit the sea. Windy but deeply quiet — the most unforgettable ten minutes of the trip.`, pt: `Depois do Olho ficámos na janela do sol até o sol cair no mar. Vento forte mas quieto — os dez minutos mais memoráveis da viagem.` } as T, author: 'Sofía R. · 🇦🇷' },
    { stars: '★★★★★', date: '2025-02', title: { zh: `"泳池清凉舒服"`, en: `"The pool was refreshing"`, pt: `"A poça foi refrescante"` } as T, desc: { zh: `蓝眼不能下水，但旁边的火山岩潮池可以浮潜，水清见底、温度刚好，孩子玩得很开心。`, en: `You can't swim in the Eye, but the neighbouring volcanic pool is great for snorkelling — clear, just the right temperature, kids loved it.`, pt: `No Olho não se nada, mas a poça vulcânica ao lado é ótima para snorkel — água limpa, temperatura certa, as crianças adoraram.` } as T, author: 'Rafael M. · 🇧🇷' },
    { stars: '★★★★<span class="text-black/20">★</span>', date: '2024-11', title: { zh: `"鞋一定要穿对"`, en: `"Wear the right shoes"`, pt: `"Use o calçado certo"` } as T, desc: { zh: `火山岩又尖又烫，我穿凉鞋差点磨破脚。后来向导提醒才换上运动鞋。提醒后来的朋友一定穿包裹好的鞋。`, en: `The lava is sharp and hot; in sandals I nearly shredded my feet. The guide told me to switch to trainers — a tip for friends who come later: wear closed shoes.`, pt: `A lava é afiada e quente; de sandália quase cortei os pés. O guia mandou calçar ténis — aviso aos amigos: usem calçado fechado.` } as T, author: 'Wang H. · 🇨🇳' },
  ],
};

// ── Surrounding ──
export const surrounding = {
  sectionNum: { zh: `周边联动`, en: `Nearby`, pt: `Arredores` } as T,
  heading: { zh: `还可以<em class="text-[color:var(--color-emerald)]">连着玩</em>`, en: `Extend the trip<em class="text-[color:var(--color-emerald)]"> further</em>`, pt: `Estenda a viagem<em class="text-[color:var(--color-emerald)]"> ainda mais</em>` } as T,
  items: [
    { img: '/gallery/buracona-blue-eye-cave-9.jpg', title: '🏖️ Santa Maria', desc: { zh: `萨尔岛最大的度假小镇，绵延的金色沙滩与风帆冲浪闻名。多数游客以此为基地，包车北上前往 Buracona 约 30 公里。`, en: `Sal's main resort town — long golden beaches and windsurfing. Most visitors base here and drive ~30 km north to Buracona.`, pt: `A principal vila turística do Sal — praias douradas e windsurf. A maioria baseia aqui e vai ~30 km norte até a Buracona.` } as T },
    { img: '/gallery/buracona-blue-eye-cave-11.jpg', title: '🧂 Pedra de Lume 盐湖', desc: { zh: `岛东部的废弃盐矿，高盐度湖水让人轻松漂浮，号称"佛得角的死海"。常与蓝眼岩洞安排在同一日游线路中。`, en: `An abandoned salt mine in the east of the island; its hyper-saline water lets you float effortlessly — the "Dead Sea of Cape Verde". Often paired with Buracona on the same tour.`, pt: `Minas de sal abandonadas a leste; a água hiper-salina faz flutuar sem esforço — o "Mar Morto de Cabo Verde". Muitas vezes junto com a Buracona no mesmo passeio.` } as T },
    { img: '/gallery/buracona-blue-eye-cave-12.jpg', title: '🌊 Baía da Murdeira', desc: { zh: `萨尔岛南岸的半封闭海湾，水质清澈、风平浪静，是浮潜与观鸟的好去处，沿途还能看到岛上的火烈鸟。`, en: `A semi-enclosed bay on Sal's south coast — clear, calm water, good for snorkelling and birdwatching, with flamingos along the way.`, pt: `Uma baía semi-fechada no sul do Sal — água limpa e calma, boa para snorkel e aves, com flamingos pelo caminho.` } as T },
    { img: '/gallery/buracona-blue-eye-cave-13.jpg', title: '🦅 Serra Negra', desc: { zh: `萨尔岛南部的自然保护区，保护范围延伸至离岸 300 米的海洋水域。山与海相接，是珍稀海鸟与化石沙丘的共同栖息地。`, en: `A protected area in southern Sal whose boundary extends 300 m offshore. Where mountain meets sea, it shelters rare seabirds and fossil dunes.`, pt: `Área protegida no sul do Sal com limite que se estende 300 m ao largo. Montanha e mar juntos — abrigo de aves marinhas e dunas fósseis.` } as T },
    { img: '/gallery/buracona-blue-eye-cave-14.jpg', title: '🦁 Monte Leão & Rabo de Junco', desc: { zh: `萨尔岛另一段野性海岸：狮子山的风化山体与 Rabo de Junco 的礁岸线，适合做“陆地风化 vs 海蚀塑形”的时空对比。`, en: `Another wild stretch of Sal: the weathered mass of Monte Leão and the reef coast of Rabo de Junco — perfect for a land‑erosion vs sea‑carving contrast.`, pt: `Outro litoral selvagem do Sal: o maciço erodido do Monte Leão e a costa recifal de Rabo de Junco — ótimo para comparar erosão terrestre e marinha.` } as T },
  ],
};

// ── Ecology (海岸生态与物种名录) ──
export const ecology = {
  sectionNum: { zh: `生态名录`, en: `Ecology`, pt: `Ecologia` } as T,
  heading: { zh: `荒野间的<em class="text-[color:var(--color-emerald)]">生命脉动</em>`, en: `The pulse of life<br/><em class="text-[color:var(--color-emerald)]"> in the wild</em>`, pt: `O pulso da vida<br/><em class="text-[color:var(--color-emerald)]"> no sertão</em>` } as T,
  intro: {
    zh: `Buracona 虽身处火山荒原，却是海陆交汇的生态节点。潮池里的珊瑚鱼、岩缝间的螃蟹，以及掠过海面的海鸟，共同构成萨尔岛最容易被忽略的生命网络。请放慢脚步，你与这些海岸居民的相遇，往往只在一潮之间。`,
    en: `Though it sits in volcanic wilderness, Buracona is an ecological node where land meets sea. The reef fish in the pools, the crabs in the cracks, and the birds skimming the waves together form the most overlooked web of life on Sal. Slow down — your encounter with these coastal dwellers often lasts but a single tide.`,
    pt: `Embora no sertão vulcânico, a Buracona é um nó ecológico onde terra e mar se encontram. Os peixes das poças, os caranguejos nas fendas e as aves sobre as ondas formam a teia de vida mais esquecida do Sal. Vá devagar — o encontro dura só uma maré.`,
  } as T,
  iucnVU: { zh: `易危 VU`, en: `Vulnerable VU`, pt: `Vulnerável VU` } as T,
  iucnNT: { zh: `近危 NT`, en: `Near Threatened NT`, pt: `Quase Ameaçado NT` } as T,
  iucnLC: { zh: `无危 LC`, en: `Least Concern LC`, pt: `Pouco Preocupante LC` } as T,
  iucnEN: { zh: `极危 EN`, en: `Endangered EN`, pt: `Em Perigo EN` } as T,
  secUmbrella: { zh: `旗舰与伞护物种`, en: `Flagship & Umbrella Species`, pt: `Espécies Bandeira e Guarda-chuva` } as T,
  secCommensal: { zh: `常见共生物种`, en: `Commensal & Observable Species`, pt: `Espécies Comensais e Observáveis` } as T,
  secFlora: { zh: `海岸植物群`, en: `Coastal Flora`, pt: `Flora Costeira` } as T,
  species: [
    {
      name: { zh: `军士鱼`, en: `Sergeant major`, pt: `Castanheta` } as T,
      latin: 'Abudefduf saxatilis',
      niche: { zh: `潮池居民`, en: `Tide-pool resident`, pt: `Morador de poça de maré` } as T,
      desc: {
        zh: `潮池里黄蓝相间的斑马纹小鱼，胆大不怕人，是 Buracona 火山岩池中最容易观察的海洋生物之一。`,
        en: `Yellow-and-blue zebra-striped fish in the tide pools, bold and unafraid — among the easiest marine life to observe in Buracona's volcanic pools.`,
        pt: `Peixinhos amarelo-azuis nas poças de maré, audazes — uma das vidas marinhas mais fáceis de observar nas poças vulcânicas da Buracona.`,
      } as T,
      iucn: 'LC',
      icon: '🐠',
    },
    {
      name: { zh: `岩蟹`, en: `Sally Lightfoot crab`, pt: `Caranguejo` } as T,
      latin: 'Grapsus grapsus',
      niche: { zh: `礁石清道夫`, en: `Rock scavenger`, pt: `Carniça de rocha` } as T,
      desc: {
        zh: `橙红相间的礁石蟹在浪花边缘飞快爬行，以藻类与落果为食，是海岸线重要的分解者。`,
        en: `Orange-and-red rock crabs scuttling at the water's edge, eating algae and fallen fruit — key decomposers of the shoreline.`,
        pt: `Caranguejos vermelho-alaranjados que correm na borda da onda, comem algas e frutos caídos — decompositores da costa.`,
      } as T,
      iucn: 'LC',
      icon: '🦀',
    },
    {
      name: { zh: `海龟`, en: `Loggerhead turtle`, pt: `Tartaruga` } as T,
      latin: 'Caretta caretta',
      niche: { zh: `海中访客`, en: `Sea visitor`, pt: `Visitante do mar` } as T,
      desc: {
        zh: `萨尔岛周边海域是 loggerhead 海龟的觅食与产卵地，Buracona 清澈的水域偶尔可见其身影（请勿靠近或触摸）。`,
        en: `The waters around Sal are feeding and nesting grounds for loggerhead turtles; Buracona's clear water occasionally reveals one (do not approach or touch).`,
        pt: `As águas do Sal são zona de alimentação e desova da tartaruga-comum; a água limpa da Buracona por vezes a mostra (não se aproxime).`,
      } as T,
      iucn: 'VU',
      icon: '🐢',
    },
    {
      name: { zh: `鹲（热带鸟）`, en: `Red-billed tropicbird`, pt: `Rabo-de-palha` } as T,
      latin: 'Phaethon aethereus',
      niche: { zh: `掠海飞鸟`, en: `Sea skimmer`, pt: `Ave do mar` } as T,
      desc: {
        zh: `雪白长尾的热带鸟在海面上方盘旋捕食，是萨尔岛荒岸上最优雅的剪影之一。`,
        en: `Snow-white, long-tailed tropicbirds wheel above the waves — among the most elegant silhouettes along Sal's wild coast.`,
        pt: `Aves brancas de cauda longa planam sobre as ondas — uma das silhuetas mais elegantes do litoral do Sal.`,
      } as T,
      iucn: 'LC',
      icon: '🐦',
    },
    {
      name: { zh: `佛得角壁虎`, en: `Cape Verde wall gecko`, pt: `Lagarto` } as T,
      latin: 'Tarentola caboverdiana',
      niche: { zh: `熔岩居民`, en: `Lava resident`, pt: `Morador da lava` } as T,
      desc: {
        zh: `萨尔岛特有的壁虎，白天躲在熔岩缝隙，黄昏出来捕食昆虫，是这片火山荒原最古老的"原住民"。`,
        en: `A gecko endemic to Sal, hiding in lava cracks by day and hunting insects at dusk — among the oldest "natives" of this volcanic wilderness.`,
        pt: `Lagarto endémico do Sal, esconde-se nas fendas de lava de dia e caça insetos à tarde — dos "nativos" mais antigos do sertão.`,
      } as T,
      iucn: 'LC',
      icon: '🦎',
    },
    {
      name: { zh: `耐旱灌木`, en: `Drought-tolerant scrub`, pt: `Arbusto resistente` } as T,
      latin: 'Frankenia spp.',
      niche: { zh: `海岸植被`, en: `Coastal vegetation`, pt: `Vegetação costeira` } as T,
      desc: {
        zh: `贴着熔岩生长的耐旱盐生灌木，根系固沙、为昆虫与爬行动物提供荫蔽，是荒原生态的骨架。`,
        en: `Drought-hardy coastal scrub clinging to the lava, its roots holding the sand and sheltering insects and reptiles — the backbone of the wilderness.`,
        pt: `Arbusto resistente colado à lava, as raízes fixam a areia e abrigam insetos e répteis — a espinha do sertão.`,
      } as T,
      iucn: 'LC',
      icon: '🌿',
    },
  ],
};

// ── FAQ (官方访客指南与常见问题) ──
export const faq = {
  sectionNum: { zh: `官方访客指南`, en: `Official Visitor Guide`, pt: `Guia Oficial do Visitante` } as T,
  heading: { zh: `访客指南与<em class="text-[color:var(--color-emerald)]">常见问题</em>`, en: `Visitor Guide &<em class="text-[color:var(--color-emerald)]"> FAQ</em>`, pt: `Guia do visitante &<em class="text-[color:var(--color-emerald)]"> perguntas frequentes</em>` } as T,
  disclaimer: {
    zh: `以下信息由 buracona 独立科普团队根据公开资料整理，仅供访客参考。出行前请通过佛得角官方旅游渠道核实最新政策。`,
    en: `The following information has been compiled by the independent buracona editorial team from publicly available sources and is provided for visitor reference only. Please verify the latest policies through official Cape Verde tourism channels before your visit.`,
    pt: `As informações a seguir foram compiladas pela equipe editorial independente do buracona a partir de fontes públicas e são fornecidas apenas para referência. Verifique as políticas mais recentes pelos canais oficiais de turismo de Cabo Verde antes de sua visita.`,
  } as T,
  items: [
    {
      q: { zh: `需要门票吗？开放时间是？`, en: `Is there an entrance fee? What are the hours?`, pt: `Tem entrada? Qual o horário?` } as T,
      a: {
        zh: `Buracona 由当地社区协会管理，需购票并由向导陪同进入，每日 09:00–18:00 开放。价格以现场公示为准，建议备好现金。`,
        en: `Buracona is managed by a local community association — paid entry with a guide, open daily 09:00–18:00. Price as posted on site; bring cash.`,
        pt: `A Buracona é gerida por associação comunitária — entrada paga com guia, aberta diariamente 09:00–18:00. Preço conforme aviso no local; leve dinheiro.`,
      } as T,
    },
    {
      q: { zh: `如何前往 Buracona？`, en: `How do I get to Buracona?`, pt: `Como chego à Buracona?` } as T,
      a: {
        zh: `最方便的方式是从 Santa Maria 包车或搭乘 aluguer 共享出租车北上约 30 公里；也可从 Espargos 机场租车自驾，最后一段为非铺装路面。无公交直达。`,
        en: `The easiest way is a taxi or shared aluguer from Santa Maria, ~30 km north. Or rent a car from Espargos airport — the final stretch is unpaved. There is no direct bus.`,
        pt: `O mais fácil é táxi ou aluguer de Santa Maria, ~30 km norte. Ou alugue carro em Espargos — o último trecho é de terra. Não há autocarro direto.`,
      } as T,
    },
    {
      q: { zh: `什么时候是最佳到访时间？`, en: `When is the best time to visit?`, pt: `Qual o melhor horário para visitar?` } as T,
      a: {
        zh: `<strong>看蓝眼：</strong>正午前后（约 11:00–14:00）太阳最高，蓝光最盛。<br/><br/><strong>看落日：</strong>留到黄昏，步行几分钟到"落日之窗"目送太阳沉入大西洋。`,
        en: `<strong>Blue Eye:</strong> around midday (≈11:00–14:00) the sun is highest and the blue glow peaks.<br/><br/><strong>Sunset:</strong> stay till dusk and walk a few minutes to the "Last Breath of the Sun" ledge as the sun drops into the Atlantic.`,
        pt: `<strong>Olho Azul:</strong> perto do meio-dia (≈11:00–14:00) o sol está mais alto e o azul é mais forte.<br/><br/><strong>Pôr do sol:</strong> fique até a tarde e caminhe poucos minutos até a plataforma do "Último Suspiro do Sol".`,
      } as T,
    },
    {
      q: { zh: `参观安全吗？`, en: `Is it safe to visit?`, pt: `É seguro visitar?` } as T,
      a: {
        zh: `地面是锋利且吸热的<strong>玄武岩</strong>，容易割伤与烫伤，请穿包裹性好的运动鞋、带足饮水与防晒，并全程跟随向导，勿翻越护栏或跳水。`,
        en: `The ground is sharp, heat-holding <strong>basalt</strong> — wear closed sturdy shoes, bring water and sun protection, and stay with your guide at all times. Do not climb rails or dive.`,
        pt: `O chão é <strong>basalto</strong> afiado e quente — use calçado fechado e resistente, leve água e protetor solar, e fique com o guia. Não suba nas grades nem mergulhe.`,
      } as T,
    },
  ],
};

// ── Leave No Trace (荒野游览公约) ──
export const leaveNoTrace = {
  sectionNum: { zh: `游览公约`, en: `Visitor Code`, pt: `Código do Visitante` } as T,
  heading: { zh: `荒野游览<em class="text-[color:var(--color-emerald)]">公约</em>`, en: `Leave No Trace<em class="text-[color:var(--color-emerald)]"> Code</em>`, pt: `Código de<em class="text-[color:var(--color-emerald)]"> Não Deixe Rastros</em>` } as T,
  subtitle: {
    zh: `作为萨尔岛的公共空间，Buracona 属于每一位岛民与旅人。请在到访前阅读并承诺遵守以下行为准则，让这片蓝光长久清澈。`,
    en: `As a public space on Sal, Buracona belongs to every islander and traveller. Please read and commit to the following code before your visit, so this blue stays clear for all.`,
    pt: `Como espaço público do Sal, a Buracona é de todos. Leia e comprometa-se com este código antes de ir, para que o azul fique claro para todos.`,
  } as T,
  rules: [
    {
      icon: '🚯',
      title: { zh: `不留垃圾`, en: `Pack It In, Pack It Out`, pt: `Leve seu lixo embora` } as T,
      desc: {
        zh: `荒原上没有垃圾桶。所有废弃物（包括果皮、纸巾、水瓶）请自行带走。塑料被风吹入蓝池，会伤害潮间生物。`,
        en: `There are no bins in the wilderness. Carry out all waste (peels, tissues, bottles). Plastic blown into the blue pool harms tide-pool life.`,
        pt: `Não há lixeiras no sertão. Leve tudo (cascas, lenços, garrafas). O plástico no azul fere a vida da maré.`,
      } as T,
    },
    {
      icon: '👣',
      title: { zh: `不偏离步道`, en: `Stay on Paths`, pt: `Permaneça nos caminhos` } as T,
      desc: {
        zh: `火山岩上的潮池生态极其脆弱。请走既有小径，不要踩踏岩池与附着的贝类。`,
        en: `The tide-pool life on the lava is extremely fragile. Use existing paths; don't trample pools or attached shellfish.`,
        pt: `A vida das poças na lava é frágil. Use os caminhos; não pise poças nem moluscos presos.`,
      } as T,
    },
    {
      icon: '🤫',
      title: { zh: `保持安静，尊重落日`, en: `Keep Quiet, Respect the Sunset`, pt: `Mantenha silêncio, respeite o sol` } as T,
      desc: {
        zh: `黄昏时分，请收起外放音响，将交谈声降到最低。当"落日之窗"的太阳沉海，请安静目送，而非喧哗盖过它。`,
        en: `At dusk, put away speakers and lower your voice. When the sun sinks at the "Last Breath of the Sun", watch in quiet, don't drown it with noise.`,
        pt: `Ao entardecer, guarde silêncio e baixe a voz. Quando o sol se põe no "Último Suspiro do Sol", veja em silêncio.`,
      } as T,
    },
    {
      icon: '🐢',
      title: { zh: `不投喂、不触碰野生动物`, en: `No Feeding or Touching Wildlife`, pt: `Não alimente nem toque a fauna` } as T,
      desc: {
        zh: `潮池鱼、蟹与海龟看似亲近，但投喂与触碰会改变其行为并带来风险。请只远观，把食物收好。`,
        en: `The pool fish, crabs and turtles look friendly, but feeding or touching changes their behaviour and risks them. Observe from afar and keep food stowed.`,
        pt: `Os peixes, caranguejos e tartarugas parecem amigáveis, mas alimentar ou tocar muda o comportamento. Observe de longe.`,
      } as T,
    },
    {
      icon: '🏊',
      title: { zh: `只在指定水域戏水`, en: `Swim Only in Designated Water`, pt: `Nade só na água indicada` } as T,
      desc: {
        zh: `蓝眼岩洞本身禁止下水；仅可在向导指定的开放潮池浮潜戏水，避免扰动洞底生态。`,
        en: `The Blue Eye itself is off-limits for swimming; only snorkel in the open pool your guide indicates, to avoid disturbing the cave floor.`,
        pt: `O próprio Olho Azul é proibido para banho; só mergulhe na poça aberta que o guia indicar.`,
      } as T,
    },
    {
      icon: '🪨',
      title: { zh: `注意安全，远离锋利熔岩`, en: `Stay Safe, Off the Sharp Lava`, pt: `Cuidado, longe da lava afiada` } as T,
      desc: {
        zh: `玄武岩长期暴晒、边缘锋利；大浪来袭时会没过脚下的平台。请穿包裹鞋，与浪花保持距离，切勿背对大海。`,
        en: `The basalt is sun-baked and sharp; big waves can wash over the platform. Wear closed shoes, keep clear of the surf, and never turn your back on the sea.`,
        pt: `O basalto é quente e afiado; ondas grandes cobrem a plataforma. Use calçado fechado, longe da onda, nunca de costas para o mar.`,
      } as T,
    },
  ],
  closing: {
    zh: `带走一张蓝光的照片，留下熔岩本来的样子。<br/>让"蓝眼"，在每个正午依旧为萨尔闪烁。`,
    en: `Take a photo of the blue. Leave the lava as you found it.<br/>Let the Blue Eye keep glowing for Sal, every single noon.`,
    pt: `Leve uma foto do azul. Deixe a lava como a encontrou.<br/>Que o Olho Azul continue a brilhar para o Sal, a cada meio-dia.`,
  } as T,
};

// ── Partners (佛得角官方旅游伙伴) ──
export const partners = {
  heading: {
    zh: `佛得角官方旅游伙伴`,
    en: `Official Cape Verde Tourism Partners`,
    pt: `Parceiros Oficiais de Turismo de Cabo Verde`,
  } as T,
  items: [
    {
      name: { zh: `Turismo de Cabo Verde（佛得角国家旅游局）`, en: `Turismo de Cabo Verde (Cape Verde Tourism)`, pt: `Turismo de Cabo Verde (Turismo de Cabo Verde)` } as T,
      url: 'https://www.turismo.cv/page/sal',
      abbr: 'TCV',
      note: { zh: `佛得角国家旅游局 · 萨尔岛`, en: `Cape Verde Tourism Board · Sal`, pt: `Turismo de Cabo Verde · Sal` } as T,
      attr: { zh: `佛得角负责管理和推介全国旅游的最高官方职能机构，其萨尔岛专页将 Buracona 列为必去之地。`, en: `Cape Verde's top official body for managing and promoting national tourism; its Sal page lists Buracona as a must-visit.`, pt: `O órgão oficial máximo de Cabo Verde para gerir e promover o turismo nacional; a página de Sal lista a Buracona como imperdível.` } as T,
    },
    {
      name: { zh: `Cabo Verde Airports（佛得角国家机场管理署）`, en: `Cabo Verde Airports (National Airports Authority)`, pt: `Cabo Verde Airports (Autoridade Nacional de Aeroportos)` } as T,
      url: 'https://www.caboverde-airports.cv/en/cape-verde/sal/',
      abbr: 'CV AIR',
      note: { zh: `佛得角机场管理署 · 萨尔岛`, en: `Cabo Verde Airports · Sal`, pt: `Cabo Verde Airports · Sal` } as T,
      attr: { zh: `国家级航空与机场基础设施官方门户，萨尔岛专页在景点名录中明确提到 Buracona 与 Olho Azul（蓝眼岩洞）。`, en: `The national aviation and airport infrastructure portal; its Sal page names Buracona and Olho Azul in the attractions list.`, pt: `Portal nacional de aviação e infraestrutura aeroportuária; a página de Sal cita Buracona e Olho Azul na lista de atrações.` } as T,
    },
    {
      name: { zh: `Portal do Comércio（佛得角政府商业门户）`, en: `Portal do Comércio (Government Commerce Portal)`, pt: `Portal do Comércio (Portal do Comércio do Governo)` } as T,
      url: 'https://portaldocomercio.gov.cv/web/portal/instituicoes/-/asset_publisher/liqo/content/instituto-do-turismo-de-cabo-verde',
      abbr: 'GOV.CV',
      note: { zh: `佛得角政府 · 国家旅游研究所`, en: `Cape Verde Government · National Tourism Institute`, pt: `Governo de Cabo Verde · Instituto do Turismo` } as T,
      attr: { zh: `纯 .gov.cv 政府域名。记录"佛得角国家旅游研究所"的官方注册信息及在萨尔岛（SAL）的总部联络方式。`, en: `A pure .gov.cv government domain. Records the official registration of the "Instituto do Turismo de Cabo Verde" and its Sal headquarters contact.`, pt: `Domínio governamental .gov.cv. Regista o registo oficial do "Instituto do Turismo de Cabo Verde" e o contacto da sede em Sal.` } as T,
    },
    {
      name: { zh: `UGPE（佛得角政府特别项目管理单元）`, en: `UGPE (Special Projects Management Unit)`, pt: `UGPE (Unidade de Gestão de Projetos Especiais)` } as T,
      url: 'https://backend-ugpe.gov.cv/noticias/governo-lanca-projeto-turismo-resiliente-e-desenvolvimento-da-economia-azul-em-cabo-verde/',
      abbr: 'UGPE',
      note: { zh: `佛得角政府 · 旅游发展`, en: `Cape Verde Government · Tourism Development`, pt: `Governo de Cabo Verde · Desenvolvimento do Turismo` } as T,
      attr: { zh: `纯 .gov.cv 政府域名。隶属财政部，记录国家首脑在萨尔岛启动"弹性旅游与蓝色经济发展项目"的官方公文。`, en: `A pure .gov.cv government domain under the Ministry of Finance, recording the official launch of the "Resilient Tourism & Blue Economy" project on Sal.`, pt: `Domínio governamental .gov.cv, sob o Ministério das Finanças, regista o lançamento oficial do projeto "Turismo Resiliente e Economia Azul" em Sal.` } as T,
    },
    {
      name: { zh: `EASE（佛得角政府入境预登记系统）`, en: `EASE (Official Entry Pre-Registration)`, pt: `EASE (Pré-registo Oficial de Entrada)` } as T,
      url: 'https://www.ease.gov.cv/',
      abbr: 'EASE',
      note: { zh: `佛得角政府 · 入境预登记`, en: `Cape Verde Government · Entry Pre-Registration`, pt: `Governo de Cabo Verde · Pré-registo de Entrada` } as T,
      attr: { zh: `纯 .gov.cv 政府域名。官方"电子旅行授权（EASE）"与"机场安全税（TSA）"支付与预登记平台，所有访客出行前须在此申报。`, en: `A pure .gov.cv government domain. The official EASE travel authorisation and TSA airport security tax payment & pre-registration platform, required of all visitors before travel.`, pt: `Domínio governamental .gov.cv. Plataforma oficial de pagamento e pré-registo da autorização EASE e da taxa TSA, obrigatória para todos os visitantes.` } as T,
    },
  ],
};

// ── Footer (updated) ──
export const footer = {
  cta: { zh: `今天，去<br/><em class="text-[color:var(--color-sun)]">遇见蓝光</em>。`, en: `Today, go<br/><em class="text-[color:var(--color-sun)]">meet the blue</em>.`, pt: `Hoje, vá<br/><em class="text-[color:var(--color-sun)]">encontrar o azul</em>.` } as T,
  address: { zh: `Buracona · Palmeira, Sal · 佛得角（Cabo Verde）`, en: `Buracona · Palmeira, Sal · Cape Verde`, pt: `Buracona · Palmeira, Sal · Cabo Verde` } as T,
  copyright: { zh: `© 2026 buracona 保留所有权利。`, en: `© 2026 buracona. All rights reserved.`, pt: `© 2026 buracona. Todos os direitos reservados.` } as T,
  disclaimer: { zh: `本网站是一个独立的第三方旅游资讯项目。我们与当地政府或其他官方机构没有任何关联。`, en: `This website is an independent third-party tourism information project. We are not affiliated with any local government or official entity.`, pt: `Este site é um projeto independente de informações turísticas de terceiros. Não temos vínculo com nenhum governo local ou entidade oficial.` } as T,
  privacy: { zh: `隐私政策`, en: `Privacy Policy`, pt: `Política de Privacidade` } as T,
  terms: { zh: `服务条款`, en: `Terms of Service`, pt: `Termos de Serviço` } as T,
  cookies: { zh: `Cookie 设置`, en: `Cookie Settings`, pt: `Configurações de Cookies` } as T,
  leaveNoTrace: { zh: `游览公约`, en: `Visitor Code`, pt: `Código do Visitante` } as T,
};

// ── Privacy Policy Page ──
export const privacy = {
  title: { zh: `隐私政策 — buracona`, en: `Privacy Policy — buracona`, pt: `Política de Privacidade — buracona` } as T,
  lastUpdated: { zh: `最后更新时间：2026年7月`, en: `Last updated: July 2026`, pt: `Última atualização: Julho de 2026` } as T,
  h1: { zh: `隐私政策`, en: `Privacy Policy`, pt: `Política de Privacidade` } as T,
  h2_collect: { zh: `我们收集的信息`, en: `Information We Collect`, pt: `Informações que coletamos` } as T,
  p_collect: {
    zh: `我们仅收集提供服务所必需的最低限度数据。这些数据可能包括：浏览数据（IP 地址、浏览器类型、访问页面）、Cookie 和类似技术、您通过联系表格或电子邮件自愿提供的任何信息。`,
    en: `We collect only the minimum data necessary to provide our services. This may include: browsing data (IP address, browser type, pages visited), cookies and similar technologies, and any information you voluntarily provide through contact forms or email.`,
    pt: `Coletamos apenas os dados mínimos necessários para fornecer nossos serviços. Isso pode incluir: dados de navegação (endereço IP, tipo de navegador, páginas visitadas), cookies e tecnologias similares, e qualquer informação que você fornecer voluntariamente por meio de formulários de contato ou e-mail.`,
  } as T,
  h2_use: { zh: `我们如何使用您的信息`, en: `How We Use Your Information`, pt: `Como usamos suas informações` } as T,
  p_use: {
    zh: `我们使用收集到的信息用于：改善网站内容和用户体验、分析流量和使用模式、回应请求、遵守我们的法律义务。`,
    en: `We use the collected information to: improve website content and user experience, analyze traffic and usage patterns, respond to inquiries, and comply with our legal obligations.`,
    pt: `Usamos as informações coletadas para: melhorar o conteúdo do site e a experiência do usuário, analisar o tráfego e padrões de uso, responder a solicitações, e cumprir nossas obrigações legais.`,
  } as T,
  h2_third: { zh: `第三方服务`, en: `Third-Party Services`, pt: `Serviços de terceiros` } as T,
  p_third: {
    zh: `我们的网站可能会使用第三方服务，例如谷歌地图（用于嵌入式地图和位置数据）和谷歌分析（用于流量分析）。本站图片均为 Buracona 实地拍摄并存储于本服务器。这些服务均有各自的隐私政策。`,
    en: `Our website may use third-party services, such as Google Maps (for embedded maps and location data) and Google Analytics (for traffic analysis). All photographs on this site are taken at Buracona and hosted on our own server. These services have their own privacy policies.`,
    pt: `Nosso site pode usar serviços de terceiros, como Google Maps (para mapas incorporados e dados de localização) e Google Analytics (para análise de tráfego). Todas as fotos do site foram feitas na Buracona e hospedadas em nosso próprio servidor. Esses serviços têm suas próprias políticas de privacidade.`,
  } as T,
  h2_rights: { zh: `您的权利`, en: `Your Rights`, pt: `Seus direitos` } as T,
  p_rights: {
    zh: `根据《通用数据保护条例》(GDPR) 及相关法规，您享有以下权利：访问您的个人数据、要求更正或删除、反对处理、向监管机构提出投诉。`,
    en: `Under the General Data Protection Regulation (GDPR) and related regulations, you have the following rights: access your personal data, request correction or deletion, object to processing, and lodge a complaint with a supervisory authority.`,
    pt: `De acordo com o Regulamento Geral de Proteção de Dados (GDPR) e regulamentações relacionadas, você tem os seguintes direitos: acessar seus dados pessoais, solicitar correção ou exclusão, opor-se ao processamento, e apresentar uma reclamação a uma autoridade supervisora.`,
  } as T,
};

// ── Terms of Service Page ──
export const terms = {
  title: { zh: `服务条款 — buracona`, en: `Terms of Service — buracona`, pt: `Termos de Serviço — buracona` } as T,
  lastUpdated: { zh: `最后更新时间：2026年7月`, en: `Last updated: July 2026`, pt: `Última atualização: Julho de 2026` } as T,
  h1: { zh: `服务条款`, en: `Terms of Service`, pt: `Termos de Serviço` } as T,
  h2_acceptance: { zh: `接受条款`, en: `Acceptance of Terms`, pt: `Aceitação dos termos` } as T,
  p_acceptance: {
    zh: `访问和使用 buracona，即表示您同意受这些服务条款的约束。`,
    en: `By accessing and using buracona, you agree to be bound by these Terms of Service.`,
    pt: `Ao acessar e usar o buracona, você concorda em ficar vinculado a estes Termos de Serviço.`,
  } as T,
  h2_content: { zh: `内容使用`, en: `Content Usage`, pt: `Uso do conteúdo` } as T,
  p_content: {
    zh: `本网站所有内容仅供参考。我们是一家独立的第三方旅游信息网站，与任何旅游景点、政府机构或商业运营商均无关联。`,
    en: `All content on this website is for informational purposes only. We are an independent third-party tourism information website and are not affiliated with any tourist attractions, government agencies, or commercial operators.`,
    pt: `Todo o conteúdo deste site é apenas para fins informativos. Somos um site independente de informações turísticas de terceiros e não temos vínculo com nenhuma atração turística, agência governamental ou operador comercial.`,
  } as T,
  h2_accuracy: { zh: `信息的准确性`, en: `Accuracy of Information`, pt: `Precisão das informações` } as T,
  p_accuracy: {
    zh: `我们力求提供准确及时的信息，但无法保证信息的完整性或准确性。行程安排、条件和服务如有变更，恕不另行通知。请务必在出行前通过官方渠道核实重要信息。`,
    en: `We strive to provide accurate and timely information, but we cannot guarantee the completeness or accuracy of the information. Schedules, conditions, and services are subject to change without notice. Please always verify important information through official channels before traveling.`,
    pt: `Nos esforçamos para fornecer informações precisas e oportunas, mas não podemos garantir a integridade ou exatidão das informações. Horários, condições e serviços estão sujeitos a alterações sem aviso prévio. Sempre verifique informações importantes pelos canais oficiais antes de viajar.`,
  } as T,
  h2_ip: { zh: `知识产权`, en: `Intellectual Property`, pt: `Propriedade intelectual` } as T,
  p_ip: {
    zh: `本网站设计和原创内容受版权保护。站内图片均为 Buracona 实地拍摄，版权归本网站所有。Google 地图数据的使用符合 Google 的服务条款。`,
    en: `The website design and original content are protected by copyright. All photographs on this site are taken at Buracona and are owned by this website. Google Maps data is used in accordance with Google's Terms of Service.`,
    pt: `O design do site e o conteúdo original são protegidos por direitos autorais. Todas as fotos do site foram feitas na Buracona e pertencem a este site. Os dados do Google Maps são usados de acordo com os Termos de Serviço do Google.`,
  } as T,
  h2_liability: { zh: `责任限制`, en: `Limitation of Liability`, pt: `Limitação de responsabilidade` } as T,
  p_liability: {
    zh: `本网站按"现状"提供，不作任何担保。对于因使用本网站信息而造成的任何损失，包括但不限于基于本网站内容做出的旅行决定，我们概不负责。`,
    en: `This website is provided "as is" without any warranties. We are not responsible for any losses resulting from the use of information on this website, including but not limited to travel decisions made based on the content of this website.`,
    pt: `Este site é fornecido "como está" sem qualquer garantia. Não nos responsabilizamos por quaisquer perdas resultantes do uso das informações deste site, incluindo, mas não se limitando a, decisões de viagem tomadas com base no conteúdo deste site.`,
  } as T,
  backLink: { zh: `← 返回首页`, en: `← Back to home`, pt: `← Voltar ao início` } as T,
};

// ── Cookie Settings Page ──
export const cookies = {
  title: { zh: `Cookie 设置 — buracona`, en: `Cookie Settings — buracona`, pt: `Configurações de Cookies — buracona` } as T,
  lastUpdated: { zh: `最后更新时间：2026年7月`, en: `Last updated: July 2026`, pt: `Última atualização: Julho de 2026` } as T,
  h1: { zh: `Cookie 设置`, en: `Cookie Settings`, pt: `Configurações de Cookies` } as T,
  intro: {
    zh: `我们使用 Cookie 来改善您的浏览体验。您可以在下方管理您的偏好设置。`,
    en: `We use cookies to improve your browsing experience. You can manage your preferences below.`,
    pt: `Usamos cookies para melhorar sua experiência de navegação. Você pode gerenciar suas preferências abaixo.`,
  } as T,

  cat_necessary: { zh: `必要 Cookie`, en: `Necessary Cookies`, pt: `Cookies necessários` } as T,
  cat_necessary_desc: { zh: `这些 Cookie 对于网站正常运行至关重要，无法禁用。`, en: `These cookies are essential for the website to function properly and cannot be disabled.`, pt: `Estes cookies são essenciais para o funcionamento do site e não podem ser desativados.` } as T,
  alwaysActive: { zh: `始终保持活跃`, en: `Always active`, pt: `Sempre ativo` } as T,

  cat_analytics: { zh: `分析型 Cookie`, en: `Analytics Cookies`, pt: `Cookies analíticos` } as T,
  cat_analytics_desc: { zh: `它们通过收集匿名使用数据，帮助我们了解访客如何与我们的网站互动。`, en: `They help us understand how visitors interact with our website by collecting anonymous usage data.`, pt: `Eles nos ajudam a entender como os visitantes interagem com nosso site, coletando dados de uso anônimos.` } as T,
  ga_label: 'Google Analytics',
  ga_desc: { zh: `它会收集访客如何使用我们网站的匿名信息。`, en: `Collects anonymous information about how visitors use our website.`, pt: `Coleta informações anônimas sobre como os visitantes usam nosso site.` } as T,
  activated: { zh: `激活`, en: `Active`, pt: `Ativado` } as T,

  cat_preference: { zh: `偏好 Cookie`, en: `Preference Cookies`, pt: `Cookies de preferência` } as T,
  cat_preference_desc: { zh: `它们会记住您的设置，例如语言和主题偏好。`, en: `They remember your settings, such as language and theme preferences.`, pt: `Eles lembram suas configurações, como preferências de idioma e tema.` } as T,
  pref_label: { zh: `用户偏好`, en: `User Preferences`, pt: `Preferências do usuário` } as T,
  pref_desc: { zh: `保存您的语言偏好和网站设置。`, en: `Saves your language preferences and website settings.`, pt: `Salva suas preferências de idioma e configurações do site.` } as T,

  cat_marketing: { zh: `营销 Cookie`, en: `Marketing Cookies`, pt: `Cookies de marketing` } as T,
  cat_marketing_desc: { zh: `它们用于展示相关广告并衡量广告活动的有效性。`, en: `They are used to display relevant advertisements and measure the effectiveness of ad campaigns.`, pt: `São usados para exibir anúncios relevantes e medir a eficácia das campanhas publicitárias.` } as T,
  ads_label: { zh: `个性化广告`, en: `Personalized Ads`, pt: `Anúncios personalizados` } as T,
  ads_desc: { zh: `它可以根据你的兴趣为你展示相关的广告。`, en: `Shows you relevant ads based on your interests.`, pt: `Mostra anúncios relevantes com base nos seus interesses.` } as T,
  deactivated: { zh: `停用`, en: `Inactive`, pt: `Desativado` } as T,

  consent_title: { zh: `同意管理`, en: `Consent Management`, pt: `Gerenciamento de consentimento` } as T,
  consent_desc: { zh: `您可以随时更改您的 Cookie 设置。请注意，禁用某些 Cookie 可能会影响网站的功能。`, en: `You can change your cookie settings at any time. Please note that disabling certain cookies may affect the website's functionality.`, pt: `Você pode alterar suas configurações de cookies a qualquer momento. Observe que desativar certos cookies pode afetar a funcionalidade do site.` } as T,
  savePrefs: { zh: `保存偏好设置`, en: `Save Preferences`, pt: `Salvar preferências` } as T,
  rejectAll: { zh: `拒绝一切`, en: `Reject All`, pt: `Rejeitar tudo` } as T,
  backLink: { zh: `← 返回首页`, en: `← Back to home`, pt: `← Voltar ao início` } as T,
};

// ── Meta ──
export const meta = {
  title: { zh: `Buracona · 蓝眼岩洞 — 佛得角萨尔岛的玄武岩海蚀洞`, en: `Buracona · Cape Verde's Blue Eye in Sal`, pt: `Buracona · O Olho Azul de Cabo Verde no Sal` } as T,
  description: { zh: `Buracona（蓝眼岩洞）完整指南：玄武岩海岸裂隙与海蚀洞的光学秘密、正午蓝光、落日之窗、开放时间 09:00–18:00、交通、真实评价与常见问题。`, en: `The complete guide to Buracona (the Blue Eye) in Sal, Cape Verde: basalt sea caves, the optics of the blue glow, midday light, the sunset window, hours 09:00–18:00, transport, real reviews and FAQ.`, pt: `O guia completo da Buracona (Olho Azul) no Sal, Cabo Verde: grutas em basalto, a ótica do azul, a luz do meio-dia, a janela do sol, horário 09:00–18:00, transporte, avaliações e FAQ.` } as T,
};
