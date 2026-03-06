export interface ComboItem {
  name: string;
  type: 'Sneaker' | 'Apparel' | 'Accessory';
}

export interface Combo {
  id: string;
  name: string;
  price: string;
  originalPrice: string;
  img: string;
  description: string;
  items: ComboItem[];
  rating: number;
  reviews: number;
  tag?: string;
}

export const COMBOS: Combo[] = [
  {
    id: 'c-1',
    name: 'The Urban Legend Bundle',
    price: '$195.00',
    originalPrice: '$245.00',
    img: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&q=80&w=1000',
    description: 'The ultimate street starter pack. Features the Forum Lows paired with our Signature Tee and premium crew socks.',
    items: [
      { name: 'Adidas Forum Low', type: 'Sneaker' },
      { name: 'L3nda Signature Tee', type: 'Apparel' },
      { name: 'L3nda Crew Socks', type: 'Accessory' }
    ],
    rating: 4.9,
    reviews: 128,
    tag: 'BEST SELLER'
  },
  {
    id: 'c-2',
    name: 'Midnight Runner Set',
    price: '$240.00',
    originalPrice: '$310.00',
    img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=1000',
    description: 'Engineered for the night. High-performance Air Max Pulse combined with our moisture-wicking tech tee.',
    items: [
      { name: 'Nike Air Max Pulse', type: 'Sneaker' },
      { name: 'Urban Explorer Tee', type: 'Apparel' },
      { name: 'Reflective Wristbands', type: 'Accessory' }
    ],
    rating: 4.8,
    reviews: 85,
    tag: 'LIMITED'
  },
  {
    id: 'c-3',
    name: 'Skate Culture Pack',
    price: '$110.00',
    originalPrice: '$155.00',
    img: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&q=80&w=1000',
    description: 'Everything you need for the park. Classic Old Skools, a durable graphic tee, and a l3nda beanie.',
    items: [
      { name: 'Vans Old Skool', type: 'Sneaker' },
      { name: 'Street Culture Graphic Tee', type: 'Apparel' },
      { name: 'Classic Beanie', type: 'Accessory' }
    ],
    rating: 4.7,
    reviews: 210
  },
  {
    id: 'c-4',
    name: 'The Heritage Combo',
    price: '$220.00',
    originalPrice: '$285.00',
    img: 'https://images.unsplash.com/photo-1597045566677-8cf032ed6634?auto=format&fit=crop&q=80&w=1000',
    description: 'A tribute to the classics. Jordan 1 Retro Highs paired with our Retro Logo Tee.',
    items: [
      { name: 'Jordan 1 Retro High', type: 'Sneaker' },
      { name: 'Retro Logo Tee', type: 'Apparel' },
      { name: 'Premium Shoe Care Kit', type: 'Accessory' }
    ],
    rating: 5.0,
    reviews: 342,
    tag: 'EXCLUSIVE'
  }
];
