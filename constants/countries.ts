export interface Country {
  id: string;
  name: string;
  flag: string;
  flagImage?: any;
  capital: string;
  population: number;
  area: number;
  region: string;
  language: string;
  currency: string;
}

export const countries: Country[] = [
  {
    id: '1',
    name: 'France',
    flag: '🇫🇷',
    capital: 'Paris',
    population: 67000000,
    area: 643801,
    region: 'Europe',
    language: 'Français',
    currency: 'Euro (€)',
  },
  {
    id: '2',
    name: 'Tunisie',
    flag: '🇹🇳',
    flagImage: require('@/assets/images/Tunisia_Big.png'),
    capital: 'Tunis',
    population: 11800000,
    area: 163610,
    region: 'Afrique',
    language: 'Arabe',
    currency: 'Dinar tunisien (TND)',
  },
  {
    id: '3',
    name: 'Brésil',
    flag: '🇧🇷',
    capital: 'Brasília',
    population: 214000000,
    area: 8515767,
    region: 'Amérique du Sud',
    language: 'Portugais',
    currency: 'Real brésilien (BRL)',
  },
  {
    id: '4',
    name: 'Italie',
    flag: '🇮🇹',
    capital: 'Rome',
    population: 60000000,
    area: 301340,
    region: 'Europe',
    language: 'Italien',
    currency: 'Euro (€)',
  },
  {
    id: '5',
    name: 'Canada',
    flag: '🇨🇦',
    capital: 'Ottawa',
    population: 38000000,
    area: 9984670,
    region: 'Amérique du Nord',
    language: 'Anglais, Français',
    currency: 'Dollar canadien (CAD)',
  },
  {
    id: '6',
    name: 'Australie',
    flag: '🇦🇺',
    capital: 'Canberra',
    population: 25700000,
    area: 7692024,
    region: 'Océanie',
    language: 'Anglais',
    currency: 'Dollar australien (AUD)',
  },
  {
    id: '7',
    name: 'Allemagne',
    flag: '🇩🇪',
    capital: 'Berlin',
    population: 83000000,
    area: 357022,
    region: 'Europe',
    language: 'Allemand',
    currency: 'Euro (€)',
  },
  {
    id: '8',
    name: 'Espagne',
    flag: '🇪🇸',
    capital: 'Madrid',
    population: 47000000,
    area: 505990,
    region: 'Europe',
    language: 'Espagnol',
    currency: 'Euro (€)',
  },
  {
    id: '9',
    name: 'Afrique du Sud',
    flag: '🇿🇦',
    capital: 'Pretoria',
    population: 59000000,
    area: 1221037,
    region: 'Afrique',
    language: 'Anglais, Afrikaans, Zoulou',
    currency: 'Rand sud-africain (ZAR)',
  },
];
