export interface Product {
  id: string;
  name: string;
  brand: string;
  price: string;
  numericPrice: number;
  img: string;
  category: 'Lifestyle' | 'Running' | 'Basketball' | 'Skateboarding';
  description: string;
  details: string[];
  rating: number;
  reviews: number;
}

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'AIR MAX PULSE',
    brand: 'Nike',
    price: '$160',
    numericPrice: 160,
    img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=1000',
    category: 'Lifestyle',
    description: 'The Air Max Pulse combines urban style with rugged durability. Featuring a point-loaded cushioning system, it delivers a bouncy, responsive ride that pushes boundaries.',
    details: ['Point-loaded Air cushioning', 'Textile and leather upper', 'Rubber Waffle outsole'],
    rating: 4.8,
    reviews: 156
  },
  {
    id: '2',
    name: 'FORUM LOW',
    brand: 'Adidas',
    price: '$110',
    numericPrice: 110,
    img: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&q=80&w=1000',
    category: 'Basketball',
    description: 'More than just a shoe, it\'s a statement. The Adidas Forum hit the scene in \'84 and gained major love on both the hardwood and in the music biz.',
    details: ['Adjustable strap', 'Leather upper', 'Rubber cupsole'],
    rating: 4.7,
    reviews: 89
  },
  {
    id: '3',
    name: '990v6 MADE IN USA',
    brand: 'New Balance',
    price: '$200',
    numericPrice: 200,
    img: 'https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&q=80&w=1000',
    category: 'Running',
    description: 'The designers of the first 990 were tasked with creating the single best running shoe on the market. The 990v6 continues that legacy with FuelCell foam.',
    details: ['FuelCell foam', 'ENCAP midsole cushioning', 'Reflective accents'],
    rating: 4.9,
    reviews: 210
  },
  {
    id: '4',
    name: 'OLD SKOOL CLASSIC',
    brand: 'Vans',
    price: '$70',
    numericPrice: 70,
    img: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&q=80&w=1000',
    category: 'Skateboarding',
    description: 'The Old Skool, the Vans classic skate shoe and first to bare the iconic sidestripe, is a low top lace-up featuring sturdy canvas and suede uppers.',
    details: ['Reinforced toe caps', 'Supportive padded collars', 'Signature rubber waffle outsoles'],
    rating: 4.6,
    reviews: 342
  },
  {
    id: '5',
    name: 'JORDAN 1 RETRO HIGH',
    brand: 'Jordan',
    price: '$180',
    numericPrice: 180,
    img: 'https://images.unsplash.com/photo-1597045566677-8cf032ed6634?auto=format&fit=crop&q=80&w=1000',
    category: 'Basketball',
    description: 'The Air Jordan 1 Retro High OG combines a genuine leather upper with an encapsulated Air-Sole unit for plush cushioning and iconic style.',
    details: ['Genuine leather upper', 'Encapsulated Air-Sole unit', 'Solid rubber outsole'],
    rating: 4.9,
    reviews: 528
  },
  {
    id: '6',
    name: 'ULTRABOOST LIGHT',
    brand: 'Adidas',
    price: '$190',
    numericPrice: 190,
    img: 'https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?auto=format&fit=crop&q=80&w=1000',
    category: 'Running',
    description: 'Experience epic energy with the new Ultraboost Light, our lightest Ultraboost ever. The magic lies in the Light BOOST midsole.',
    details: ['Light BOOST midsole', 'Primeknit+ upper', 'Continental™ Better Rubber'],
    rating: 4.8,
    reviews: 167
  },
  {
    id: '7',
    name: 'DUNK LOW RETRO',
    brand: 'Nike',
    price: '$115',
    numericPrice: 115,
    img: 'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&q=80&w=1000',
    category: 'Lifestyle',
    description: 'Created for the hardwood but taken to the streets, the Nike Dunk Low Retro returns with crisp overlays and original university colors.',
    details: ['Premium leather', 'Foam midsole', 'Rubber outsole with pivot circle'],
    rating: 4.7,
    reviews: 289
  },
  {
    id: '8',
    name: 'CHUCK 70 VINTAGE',
    brand: 'Converse',
    price: '$90',
    numericPrice: 90,
    img: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&q=80&w=1000',
    category: 'Lifestyle',
    description: 'The Chuck 70 mixes the best details from the \'70s-era Chuck with impeccable craftsmanship and premium materials.',
    details: ['Organic canvas', 'Archival rubber taping', 'Extra cushioning'],
    rating: 4.5,
    reviews: 112
  }
];
