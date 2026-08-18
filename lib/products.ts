export type Product = {
  slug: string;
  name: string;
  type: string;
  category: string;
  tagline: string;
  description: string;
  specs: { label: string; value: string }[];
  imagePublicId: string;
};

export const products: Product[] = [
  {
    slug: 'ed3-01m',
    name: 'ED3-01M',
    type: 'Electric Tricycle',
    category: 'Cargo & passenger',
    tagline: 'Heavy-duty electric tricycle for business and family transport.',
    description: 'The ED3-01M offers strong load capacity, dependable range, and comfortable passenger seating for urban delivery or shuttle routes.',
    specs: [
      { label: 'Battery', value: '48V 20Ah lithium' },
      { label: 'Range', value: '80 km per charge' },
      { label: 'Load capacity', value: '300 kg' },
      { label: 'Brakes', value: 'Hydraulic disc' },
    ],
    imagePublicId: 'ed3_01m.jpg.png',
  },
  {
    slug: 'ed3-02',
    name: 'ED3-02',
    type: 'Electric Tricycle',
    category: 'Passenger transport',
    tagline: 'Balanced tricycle for passenger comfort and daily town use.',
    description: 'ED3-02 is a versatile electric tricycle with a low centre of gravity and efficient motor, ideal for passenger and small cargo journeys.',
    specs: [
      { label: 'Battery', value: '48V 18Ah lithium' },
      { label: 'Range', value: '70 km per charge' },
      { label: 'Seating', value: '2 passengers' },
      { label: 'Frame', value: 'Reinforced steel' },
    ],
    imagePublicId: 'ed3_02.jpg.png',
  },
  {
    slug: 'ed3-02p',
    name: 'ED3-02P',
    type: 'Electric Tricycle',
    category: 'Premium passenger',
    tagline: 'Premium passenger tricycle with refined finish and powerful electric support.',
    description: 'Designed for guest transport and executive trips, the ED3-02P pairs comfort with a strong motor and smooth handling.',
    specs: [
      { label: 'Battery', value: '48V 22Ah lithium' },
      { label: 'Range', value: '90 km per charge' },
      { label: 'Comfort', value: 'Cushioned passenger seating' },
      { label: 'Suspension', value: 'Dual shock absorbers' },
    ],
    imagePublicId: 'ed3_02p.jpg.png',
  },
  {
    slug: 'ed3-03',
    name: 'ED3-03',
    type: 'Electric Tricycle',
    category: 'Cargo transporter',
    tagline: 'Robust cargo tricycle for businesses and last-mile deliveries.',
    description: 'The ED3-03 is purpose-built for hauling goods, with durable chassis and optimized weight distribution for everyday deliveries.',
    specs: [
      { label: 'Battery', value: '60V 26Ah lithium' },
      { label: 'Range', value: '100 km per charge' },
      { label: 'Cargo space', value: '1.2 m³' },
      { label: 'Motor', value: '1000W brushless' },
    ],
    imagePublicId: 'ed3_03.jpg.png',
  },
  {
    slug: 'lion-bmx',
    name: 'Lion BMX Bicycle',
    type: 'Electric Bicycle',
    category: 'City & leisure',
    tagline: 'Stylish electric bicycle for city riders and short commutes.',
    description: 'The Lion BMX combines agile handling with electric support for a clean ride around Accra and Tema.',
    specs: [
      { label: 'Battery', value: '36V 14Ah lithium' },
      { label: 'Range', value: '60 km per charge' },
      { label: 'Top speed', value: '25 km/h' },
      { label: 'Weight', value: '23 kg' },
    ],
    imagePublicId: 'lionridegh/lion_bmx.jpg.png',
  },
];
