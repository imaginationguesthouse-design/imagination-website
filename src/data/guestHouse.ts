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
  Palette,
  Sparkles,
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
  location: 'Isaiambalam School Road, Alankuppam, Auroville, Puducherry',
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
    { label: 'Free Car Parking', icon: ParkingSquare },
    { label: 'Guest Kitchen (Cook Your Own Meals)', icon: CookingPot },
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
      title: 'Matrimandir',
      line: 'The iconic golden meditation dome at the heart of Auroville—a peaceful, one-of-a-kind experience surrounded by serene gardens.',
      chip: '2.5 km from Guest House',
      hours: 'Viewing Point daily 9:00 AM–5:00 PM. Inner Chamber requires advance booking.',
      icon: Sparkles,
    },
    {
      title: 'SVARAM Sound Garden',
      line: 'An open-air garden of giant musical instruments and wind chimes you can play and discover.',
      chip: '4 min from Guest House',
      hours: 'Mon–Sat 9:30 AM–12:30 PM and 2:30–4:30 PM. Sunday morning only.',
      icon: Music,
    },
    {
      title: 'SVARAM Instruments & Research',
      line: 'Watch artisans craft extraordinary musical instruments, right next door to the garden.',
      chip: '4 min from Guest House',
      hours: 'Mon–Sat 9:30 AM–12:30 PM
