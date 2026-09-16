// Central, single-source-of-truth constants for the Buracona single-attraction
// SEO entity binding. Every component / JSON-LD / translation references these
// values so the "full name + city + domain meaning" stays consistent everywhere.

export const SITE = {
  domain: 'buracona.com',

  // {{ATTRACTION_FULL_NAME}} / {{ATTRACTION_SHORT_NAME}}
  attractionFullName: 'Buracona - Blue Eye Cave',
  attractionShortName: 'Buracona (Blue Eye)',

  // {{CITY_NAME}} / {{STATE_PROVINCE}} / {{COUNTRY_NAME}} / {{COUNTRY_CODE_2LETTER}} / {{POSTAL_CODE}}
  city: 'Palmeira',
  region: 'Sal',
  country: 'Cabo Verde',
  countryEn: 'Cape Verde',
  countryCode: 'CV',
  postalCode: '4110',

  // {{LATITUDE}} / {{LONGITUDE}} — Buracona natural pool (OSM / Wikipedia)
  latitude: 16.79889,
  longitude: -22.99167,

  // Plus codes
  plusCode: 'Q2X5+C3', // attraction entrance
  plusCodeEye: 'Q2X5+M3', // the Blue Eye (Olho Azul) viewpoint

  // Google Maps links
  mapsShareUrl: 'https://maps.app.goo.gl/SexiAKH5DFxKRNf79',
  mapsEyeUrl: 'https://maps.app.goo.gl/uoaSERUwq5GR8LGF7',
  mapsEmbedSrc: 'https://maps.google.com/maps?q=16.79889%2C-22.99167&z=15&output=embed',

  // {{NEARBY_LANDMARK_1}} / {{NEARBY_LANDMARK_2}}
  nearby1: 'Santa Maria',
  nearby2: 'Pedra de Lume',

  // {{GOVT_TOURISM_URL}}
  govTourismUrl: 'https://www.turismo.cv/page/sal',

  // Latest rating snapshot — synced from Google Maps user reviews
  rating: 4.3,
  ratingMax: 5,
  reviewCount: 4858,
  ratingSyncedAt: '2026 年 9 月',
  ratingSyncedAtEn: 'September 2026',
  ratingSyncedAtPt: 'setembro de 2026',

  // Opening hours
  openingHours: 'Mo-Su 09:00-18:00',

  // Hero image used for OG / JSON-LD
  heroImage: '/gallery/buracona-blue-eye-cave-1.jpg',
} as const;

// Locale-aware thousands separator for the review count.
export function formatReviewCount(lang: string): string {
  if (lang === 'pt') return (SITE.reviewCount).toLocaleString('pt-PT');
  if (lang === 'zh') return (SITE.reviewCount).toLocaleString('zh-CN');
  return (SITE.reviewCount).toLocaleString('en-US');
}

export function ratingSyncedLabel(lang: string): string {
  if (lang === 'pt') return SITE.ratingSyncedAtPt;
  if (lang === 'zh') return SITE.ratingSyncedAt;
  return SITE.ratingSyncedAtEn;
}
