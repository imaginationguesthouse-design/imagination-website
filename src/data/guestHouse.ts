import {
  BatteryCharging,
  Bed,
  Bike,
  Bug,
  Cctv,
  Coffee,
  CookingPot,
  Droplets,
  FireExtinguisher,
  Flame,
  Music,
  Palmtree,
  IceCream,
  Utensils,
  Store,
  Waves,
  CalendarHeart,
  ParkingSquare,
  Refrigerator,
  ShowerHead,
  Sun,
  Trees,
  WashingMachine,
  Wifi,
  type LucideIcon,
} from 'lucide-react';

export const guestHouse = {
  name: 'The Imagination Guest House',
  tagline: 'Wake up to birdsong beneath a thatched roof, and let your imagination wander.',
  location: 'Near Isaiambalam School, Auroville, Tamil Nadu',
  phone: '+91 95859 42575',
  whatsappUrl:
    'https://wa.me/919585942575?text=Hi!%20I%20am%20interested%20in%20booking%20a%20hut%20at%20The%20Imagination%20Guest%20House.%20Can%20you%20share%20the%20availability%20and%20rates%3F',
  images: {
    hero: '/Screenshot_2026-06-19_162524.jpg',
  },
  hut: {
    name: 'The Imagination Hut',
    features: [
      {
        title: 'Bed Setup',
        description: '1 large bed on the top loft, 1 single bed on the floor (extra mattresses available inside).',
        icon: Bed,
      },
      {
        title: 'Private Bathroom',
        description: 'Attached bathroom with an inbuilt water heater, soap, shampoo, and 2 fresh towels provided.',
        icon: ShowerHead,
      },
      {
        title: 'Balcony',
        description: 'Private small balcony on the top level.',
        icon: Sun,
      },
      {
        title: 'In-Room Essentials',
        description: 'Mosquito net, electric kettle, and high-speed WiFi.',
        icon: Wifi,
      },
    ] satisfies { title: string; description: string; icon: LucideIcon }[],
  },
  checkIn: {
    time: '1:00 PM',
  },
  checkOut: {
    time: '11:00 AM',
  },
  houseRules: [
    {
      label: 'Capacity & Pricing',
      value:
        'Maximum capacity per hut is 3 adults, or a family of 4 (2 adults, 2 children). Base rate covers 2 adults. A 3rd adult is an extra ₹700.',
    },
    {
      label: 'Smoking',
      value: 'Smoking is allowed on the campus without disturbing other guests, but strictly NO smoking inside the huts.',
    },
    {
      label: 'Pets',
      value: 'Pets can also enjoy the stay for free.',
    },
  ],
  amenities: [
    { label: 'High-Speed WiFi', icon: Wifi },
    { label: 'Complimentary Breakfast', icon: Coffee },
    { label: 'Inbuilt Water Heater', icon: Droplets },
    { label: 'Inverter (Power Backup)', icon: BatteryCharging },
    { label: 'Mosquito Net', icon: Bug },
    { label: 'Kettle', icon: Flame },
  ] satisfies { label: string; icon: LucideIcon }[],
  campusFacilities: [
    { label: 'Common Kitchen', icon: CookingPot },
    { label: 'Fridge', icon: Refrigerator },
    { label: 'Washing Machine', icon: WashingMachine },
    { label: 'Garden / Yard', icon: Trees },
    { label: 'Free Parking', icon: ParkingSquare },
    { label: 'Scooter & Car Rentals Available', icon: Bike },
    { label: 'CCTV Security Cameras', icon: Cctv },
    { label: 'Fire Extinguishers', icon: FireExtinguisher },
  ] satisfies { label: string; icon: LucideIcon }[],
  nearby: [
    {
      title: 'SVARAM Sound Garden',
      line: 'An open-air garden of giant musical instruments and wind chimes you can play.',
      chip: '1.5 km • 4 min',
      hours: 'Mon–Sat 9:30 AM–12:30 PM and 2:30–4:30 PM. Sunday morning only.',
      icon: Music,
    },
    {
      title: 'SVARAM Instruments & Research',
      line: 'Watch artisans craft extraordinary instruments, right next door to the garden.',
      chip: '1.5 km • 4 min',
      hours: 'Mon–Sat 9:30 AM–12:30 PM and 2:30–4:30 PM. Sunday morning only.',
      icon: Music,
    },
    {
      title: "Auroville Visitor's Centre",
      line: 'Stroll through local boutiques and unwind at the open cafés.',
      chip: '2.5 km • 6 min',
      hours: 'Grounds and cafés 8:00 AM–7:30 PM. Boutiques 9:30 AM–5:00 PM.',
      icon: Store,
    },
    {
      title: 'Naturellement Garden Café',
      line: 'A quiet, shaded garden café for sitting back among the trees.',
      chip: '3.5 km • 8 min',
      hours: 'Tue–Sun 9:00 AM–5:00 PM. Closed Monday.',
      icon: Utensils,
    },
    {
      title: 'Gelato Factory Auroville',
      line: 'Authentic Italian ice cream for lazy afternoons.',
      chip: '5 km • 11 min',
      hours: 'Daily 10:00 AM–10:00 PM.',
      icon: IceCream,
    },
    {
      title: 'Auroville Beach',
      line: "A calm stretch of sand for a relaxed walk by the ocean. Go early morning or late afternoon, when it's cooler.",
      chip: '7 km • 15 min',
      hours: 'Daily 7:00 AM–6:30 PM.',
      icon: Waves,
    },
  ] satisfies { title: string; line: string; chip: string; hours: string; icon: LucideIcon }[],
  matrimandir: {
    url: 'https://mmaccess.auroville.org.in/visitors/new',
    icon: CalendarHeart,
  },
};
