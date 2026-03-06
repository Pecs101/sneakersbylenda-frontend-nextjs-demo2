export interface TShirt {
  id: string;
  name: string;
  price: string;
  img: string;
  description: string;
  colors: string[];
  sizes: string[];
  rating: number;
  reviews: number;
}

export const TSHIRTS: TShirt[] = [
  {
    id: 'ts-1',
    name: 'L3nda Signature Tee',
    price: '$45.00',
    img: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=800',
    description: 'Our classic signature tee made from 100% organic cotton. Features a minimal l3nda logo on the chest.',
    colors: ['Black', 'White', 'Slate'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    rating: 4.9,
    reviews: 42
  },
  {
    id: 'ts-2',
    name: 'Street Culture Graphic Tee',
    price: '$55.00',
    img: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&q=80&w=800',
    description: 'Bold graphic tee celebrating the intersection of basketball and street culture.',
    colors: ['Vintage Black', 'Cream'],
    sizes: ['S', 'M', 'L', 'XL'],
    rating: 4.7,
    reviews: 28
  },
  {
    id: 'ts-3',
    name: 'Oversized Boxy Tee',
    price: '$50.00',
    img: 'https://images.unsplash.com/photo-1562157873-818bc0726f68?auto=format&fit=crop&q=80&w=800',
    description: 'Heavyweight cotton tee with a modern boxy fit. Perfect for layering with your favorite hoodie.',
    colors: ['Olive', 'Sand', 'Charcoal'],
    sizes: ['M', 'L', 'XL'],
    rating: 4.8,
    reviews: 35
  },
  {
    id: 'ts-4',
    name: 'Limited Edition "Drop" Tee',
    price: '$65.00',
    img: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&q=80&w=800',
    description: 'Commemorative tee for our latest sneaker drop. Features high-density puff print details.',
    colors: ['White'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    rating: 5.0,
    reviews: 12
  },
  {
    id: 'ts-5',
    name: 'Retro Logo Tee',
    price: '$48.00',
    img: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&q=80&w=800',
    description: 'A vintage-inspired tee featuring our original logo from the early days.',
    colors: ['Heather Grey', 'Navy'],
    sizes: ['S', 'M', 'L', 'XL'],
    rating: 4.6,
    reviews: 22
  },
  {
    id: 'ts-6',
    name: 'Minimalist Pocket Tee',
    price: '$42.00',
    img: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=800',
    description: 'Clean and simple pocket tee for everyday wear. Made from soft pima cotton.',
    colors: ['White', 'Black', 'Olive'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    rating: 4.8,
    reviews: 56
  },
  {
    id: 'ts-7',
    name: 'Urban Explorer Tee',
    price: '$52.00',
    img: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&q=80&w=800',
    description: 'Durable tee designed for the urban environment with reinforced stitching.',
    colors: ['Charcoal', 'Khaki'],
    sizes: ['M', 'L', 'XL'],
    rating: 4.7,
    reviews: 19
  },
  {
    id: 'ts-8',
    name: 'Artist Series Tee',
    price: '$60.00',
    img: 'https://images.unsplash.com/photo-1562157873-818bc0726f68?auto=format&fit=crop&q=80&w=800',
    description: 'Limited edition collaboration with local street artists. Each piece is unique.',
    colors: ['Multi'],
    sizes: ['L', 'XL'],
    rating: 4.9,
    reviews: 8
  }
];
