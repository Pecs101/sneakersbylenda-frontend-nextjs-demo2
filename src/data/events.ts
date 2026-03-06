export interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  address: string;
  img: string;
  description: string;
  highlights: string[];
  organizer: string;
  ticketPrice: string;
  basePrice: number;
  status: 'Upcoming' | 'Sold Out' | 'Live';
  gallery?: string[];
  promoVideo?: string;
}

export const EVENTS: Event[] = [
  {
    id: '1',
    title: 'Sneaker Con 2026',
    date: 'March 25, 2026',
    time: '10:00 AM - 6:00 PM',
    location: 'Los Angeles, CA',
    address: 'Los Angeles Convention Center, 1201 S Figueroa St, Los Angeles, CA 90015',
    img: 'https://images.unsplash.com/photo-1556906781-9a412961c28c?auto=format&fit=crop&q=80&w=1200',
    description: 'The Greatest Sneaker Show on Earth returns to Los Angeles! Join thousands of sneakerheads for a day of buying, selling, and trading the most sought-after kicks on the planet. From rare vintage finds to the latest hype releases, Sneaker Con is the ultimate destination for the community.',
    highlights: [
      'Over 500 vendors with 100,000+ pairs of sneakers',
      'Sneaker Con Authenticated: Get your kicks verified by experts',
      'Trading Pit: The heart of the show where the real action happens',
      'Exclusive drops and giveaways throughout the day',
      'Panel discussions with industry leaders and influencers'
    ],
    organizer: 'Sneaker Con Global',
    ticketPrice: '$35 - $150',
    basePrice: 35,
    status: 'Upcoming',
    gallery: [
      'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1584735175315-9d5df23860e6?auto=format&fit=crop&q=80&w=800'
    ],
    promoVideo: 'https://assets.mixkit.co/videos/preview/mixkit-running-shoes-in-slow-motion-42563-large.mp4'
  },
  {
    id: '2',
    title: 'L3nda Pop-up Shop',
    date: 'April 12, 2026',
    time: '11:00 AM - 8:00 PM',
    location: 'New York, NY',
    address: 'SOHO Design District, 456 Broadway, New York, NY 10012',
    img: 'https://images.unsplash.com/photo-1512374382149-4332c6c021f1?auto=format&fit=crop&q=80&w=1200',
    description: 'Experience the world of SNEAKERS by l3nda in person at our exclusive SOHO pop-up. We are bringing our digital curation to life with a physical space featuring our most limited collaborations and a first look at the upcoming Summer 2026 collection.',
    highlights: [
      'First 100 guests receive an exclusive l3nda tote bag',
      'Live DJ sets and complimentary refreshments',
      'Customization station: Personalize your new pair on-site',
      'Exclusive "NY Edition" drop only available at the pop-up',
      'Meet the design team behind the l3nda curation'
    ],
    organizer: 'SNEAKERS by l3nda',
    ticketPrice: 'Free Entry',
    basePrice: 0,
    status: 'Upcoming',
    gallery: [
      'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1534452203294-49c8913721b2?auto=format&fit=crop&q=80&w=800'
    ],
    promoVideo: 'https://assets.mixkit.co/videos/preview/mixkit-close-up-of-a-person-tying-their-sneakers-42561-large.mp4'
  },
  {
    id: '3',
    title: 'Basketball Heritage Night',
    date: 'May 05, 2026',
    time: '6:00 PM - 10:00 PM',
    location: 'Chicago, IL',
    address: 'United Center Atrium, 1901 W Madison St, Chicago, IL 60612',
    img: 'https://images.unsplash.com/photo-1519861531473-9200262188bf?auto=format&fit=crop&q=80&w=1200',
    description: 'A night dedicated to the intersection of basketball culture and sneaker history. We are hosting a curated exhibition of game-worn sneakers from the legends of the game, followed by a live auction of rare basketball memorabilia.',
    highlights: [
      'Exhibition of 50+ iconic game-worn sneakers',
      'Keynote speech by a legendary NBA sneaker designer',
      'Charity auction benefiting local youth sports programs',
      'Interactive VR experience: Step into the shoes of a pro',
      'Limited edition heritage apparel drop'
    ],
    organizer: 'Heritage Kicks Foundation',
    ticketPrice: '$50 (All proceeds to charity)',
    basePrice: 50,
    status: 'Upcoming',
    gallery: [
      'https://images.unsplash.com/photo-1546514714-df0ccc50d7bf?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1504450758481-7338eba7524a?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1518063311540-0689199263c7?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1515523110800-9415d13b84a8?auto=format&fit=crop&q=80&w=800'
    ]
  }
];
