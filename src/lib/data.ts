export const WHATSAPP_NUMBER = "918427822232";

export const BUSINESS = {
  name: "MSL TOUR AND TRAVELS",
  short: "MSL",
  city: "Amritsar",
  address: "Sultanwind, Amritsar, Punjab, India",
  hours: "24×7",
  phoneDisplay: "+91 84278 22232",
  email: "book@msltourandtravels.in",
};

const u = (id: string, w = 1600) =>
  `https://images.unsplash.com/${id}?q=80&w=${w}&auto=format&fit=crop`;

export const IMG = {
  heroSUV: u("photo-1503376780353-7e6692767b70", 2000),
  // Real Amritsar landmark photos — Wikimedia Commons (CC licensed)
  goldenTemple: "/places/golden-temple.jpg",
  goldenTempleNight: "/places/golden-night.jpg",
  indiaGate: "/places/wagah.jpg",
  rollsRoyce: u("photo-1618843479313-40f8afb4b4d8", 1400),
  mercedes: u("photo-1617531653332-bd46c24f2068", 1400),
  bmw: u("photo-1555215695-3004980ad54e", 1400),
  sedanRoad: u("photo-1549317661-bd32c8ce0db2", 1400),
  suvRoad: u("photo-1533473359331-0135ef1b58bf", 1400),
  carNight: u("photo-1519641471654-76ce0107ad1b", 1400),
  bus: u("photo-1544620347-c4fd4a3d5957", 1400),
  van: u("photo-1570125909232-eb263c188f7e", 1400),
  airplane: u("photo-1436491865332-7a61a109cc05", 1600),
  highway: u("photo-1469854523086-cc02fe5d8800", 1600),
  wedding: u("photo-1519741497674-611481863552", 1400),
  driver: u("photo-1449965408869-eaa3f722e40d", 1400),
  interior: u("photo-1503736334956-4c8f8e92946d", 1400),
  punjabRoad: u("photo-1502877338535-766e1452684a", 1400),
};

export type Fleet = {
  slug: string;
  name: string;
  category: string;
  images: string[]; // first = cover; slides in order (own photos, old kept last)
  passengers: number;
  luggage: number;
  fuel: string;
  price: string;
  tag?: string;
};

export const FLEET: Fleet[] = [
  // Customer's own new car — shown first across the site
  { slug: "maruti-ertiga", name: "Maruti Ertiga", category: "MUV", images: ["/fleet/customer-ertiga.jpg", "/fleet/ertiga-1.jpg", "/fleet/ertiga-2.jpg", "/fleet/ertiga-3.jpg", "/fleet/ertiga.jpg"], passengers: 6, luggage: 2, fuel: "CNG / Petrol", price: "₹14/km", tag: "New Arrival" },
  { slug: "swift-dzire", name: "Swift Dzire", category: "Sedan", images: ["/fleet/dzire-1.jpg", "/fleet/dzire-2.jpg", "/fleet/dzire-3.jpg", "/fleet/dzire-4.jpg", "/fleet/dzire.jpg"], passengers: 4, luggage: 2, fuel: "Diesel / CNG", price: "₹11/km", tag: "Most Booked" },
  { slug: "toyota-etios", name: "Toyota Etios", category: "Sedan", images: ["/fleet/etios-1.jpg", "/fleet/etios.jpg"], passengers: 4, luggage: 2, fuel: "Diesel", price: "₹11/km" },
  { slug: "honda-amaze", name: "Honda Amaze", category: "Sedan", images: ["/fleet/amaze-1.jpg", "/fleet/amaze-2.jpg", "/fleet/amaze-3.jpg"], passengers: 4, luggage: 2, fuel: "Petrol / Diesel", price: "₹11/km", tag: "New in Fleet" },
  { slug: "innova-crysta", name: "Toyota Innova Crysta", category: "Premium MUV", images: ["/fleet/innova-1.jpg", "/fleet/innova-2.jpg", "/fleet/innova-3.jpg", "/fleet/innova-4.jpg", "/fleet/innova-5.jpg", "/fleet/innova-6.jpg", "/fleet/innova-7.jpg", "/fleet/innova-8.jpg", "/fleet/innova-9.jpg", "/fleet/innova-10.jpg", "/fleet/innova-11.jpg", "/fleet/innova-12.jpg", "/fleet/innova-13.jpg", "/fleet/innova-14.jpg", "/fleet/innova.jpg"], passengers: 7, luggage: 3, fuel: "Diesel", price: "₹19/km", tag: "Best Value" },
  { slug: "kia-carens", name: "Kia Carens", category: "MUV", images: ["/fleet/carens.jpg"], passengers: 6, luggage: 2, fuel: "Diesel", price: "₹16/km" },
  { slug: "toyota-fortuner", name: "Toyota Fortuner", category: "Luxury SUV", images: ["/fleet/fortuner.jpg"], passengers: 7, luggage: 3, fuel: "Diesel", price: "₹32/km", tag: "Flagship SUV" },
  { slug: "mercedes-e-class", name: "Mercedes E-Class", category: "Luxury", images: ["/fleet/mercedes.jpg"], passengers: 4, luggage: 2, fuel: "Petrol", price: "₹85/km", tag: "Chauffeur Elite" },
  { slug: "bmw-5-series", name: "BMW 5 Series", category: "Luxury", images: ["/fleet/bmw.jpg"], passengers: 4, luggage: 2, fuel: "Petrol", price: "₹85/km" },
  { slug: "tempo-12", name: "Tempo Traveller 12 Seater", category: "Group", images: ["/fleet/tempo12-1.jpg", "/fleet/tempo12-2.jpg", "/fleet/tempo12-3.jpg", "/fleet/tempo12-4.jpg", "/fleet/tempo12.jpg"], passengers: 12, luggage: 12, fuel: "Diesel", price: "₹24/km" },
  { slug: "tempo-17", name: "Tempo Traveller 17 Seater", category: "Group", images: ["/fleet/tempo17-1.jpg", "/fleet/tempo17-2.jpg", "/fleet/tempo17-3.jpg", "/fleet/tempo17-4.jpg", "/fleet/tempo17-5.jpg", "/fleet/tempo17.jpg"], passengers: 17, luggage: 17, fuel: "Diesel", price: "₹28/km", tag: "Group Choice" },
];

export type Service = {
  slug: string;
  title: string;
  desc: string;
  image: string;
  icon: string;
};

export const SERVICES: Service[] = [
  { slug: "airport-pickup", title: "Airport Pickup", desc: "Flight-tracked meet & greet at Amritsar Airport with zero waiting stress.", image: IMG.airplane, icon: "Plane" },
  { slug: "airport-drop", title: "Airport Drop", desc: "On-time guaranteed drops with route optimisation and buffer planning.", image: IMG.airplane, icon: "PlaneTakeoff" },
  { slug: "local-taxi", title: "Local Amritsar Taxi", desc: "4 / 8 / 12-hour city packages with verified chauffeurs.", image: IMG.sedanRoad, icon: "MapPin" },
  { slug: "golden-temple", title: "Golden Temple Visit", desc: "Dawn Palki Sahib to night Palki darshan — serene, unhurried transfers.", image: "/places/golden-temple.jpg", icon: "Sparkles" },
  { slug: "wagah-border", title: "Wagah Border Tour", desc: "Reserved-time departure so you never miss the retreat ceremony.", image: "/places/wagah.jpg", icon: "Flag" },
  { slug: "heritage-tour", title: "Punjab Heritage Tour", desc: "Gobindgarh Fort, Partition Museum, Sadda Pind in one royal circuit.", image: "/places/gobindgarh.jpg", icon: "Landmark" },
  { slug: "outstation", title: "Outstation Taxi", desc: "Chandigarh, Delhi, Dharamshala, Katra — one-way & round-trip experts.", image: IMG.highway, icon: "Route" },
  { slug: "corporate", title: "Corporate Cab", desc: "Monthly billing, GST invoices, priority dispatch for business travel.", image: IMG.interior, icon: "Briefcase" },
  { slug: "wedding", title: "Wedding Car Rental", desc: "Mercedes, BMW & decorated Fortuner fleet for baraats and bridal entries.", image: IMG.wedding, icon: "Heart" },
  { slug: "group-tour", title: "Group Tour", desc: "12 & 17-seater Tempo Travellers with pushback seats and music.", image: IMG.bus, icon: "Users" },
];

export type Destination = {
  name: string;
  desc: string;
  image: string;
  distance: string;
  fare: string;
  duration: string;
};

export const DESTINATIONS: Destination[] = [
  { name: "Golden Temple", desc: "The holiest Sikh shrine — gold-plated sanctum floating on Amrit Sarovar. Best at 4 AM Palki Sahib and 9 PM Palki.", image: "/places/golden-temple.jpg", distance: "8 km from Sultanwind", fare: "₹1,200 onwards", duration: "3–4 hrs" },
  { name: "Wagah Border", desc: "Electrifying Indo-Pak retreat ceremony with parade, patriotic chanting and flag lowering at sunset.", image: "/places/wagah.jpg", distance: "32 km one way", fare: "₹2,200 onwards", duration: "4–5 hrs" },
  { name: "Jallianwala Bagh", desc: "Moving memorial of 1919 — preserved bullet marks, eternal flame and light-and-sound show.", image: "/places/jallianwala.jpg", distance: "9 km", fare: "Included in city tour", duration: "1–2 hrs" },
  { name: "Partition Museum", desc: "World's first museum on the Partition — letters, artefacts and oral histories near Town Hall.", image: "/places/partition.jpg", distance: "9.5 km", fare: "Included in city tour", duration: "1.5–2 hrs" },
  { name: "Gobindgarh Fort", desc: "1760s Bhangi fort turned cultural theme park — 7D shows, live performances, Sikh martial arts.", image: "/places/gobindgarh.jpg", distance: "10 km", fare: "₹1,400 onwards", duration: "3 hrs" },
  { name: "Durgiana Temple", desc: "Lakshmi-Narayan temple on a lake, often called the Silver Temple — calm morning darshan.", image: "/places/durgiana.jpg", distance: "7 km", fare: "₹999 onwards", duration: "1–2 hrs" },
  { name: "Sadda Pind", desc: "Punjabi heritage village resort — bhangra, phulkari, lassi, camel rides and farm food.", image: "/places/sadda-pind.jpg", distance: "12 km", fare: "₹1,600 onwards", duration: "4 hrs" },
  { name: "Harike Wetland", desc: "Ramsar bird sanctuary at the Beas–Sutlej confluence — winter migratory birds and boat rides.", image: "/places/harike.jpg", distance: "60 km one way", fare: "₹3,800 onwards", duration: "Full day" },
];

export const TESTIMONIALS = [
  { name: "Rajesh Malhotra", meta: "Delhi • Airport Transfer", text: "Flight landed at 2 AM. Driver was already waiting with a name placard, Innova spotless. This is Taj-level service in a taxi.", stars: 5 },
  { name: "Simran Kaur", meta: "Amritsar • Golden Temple Tour", text: "They planned our 4 AM Palki Sahib darshan perfectly. Driver knew every shortcut and waited patiently. Felt like family.", stars: 5 },
  { name: "James Whitfield", meta: "UK • Heritage Tour", text: "Booked Wagah + city for two days. GPS-enabled cars, polite English-speaking chauffeur, transparent billing. Superb.", stars: 5 },
  { name: "Priya & Arjun", meta: "Wedding • Mercedes E-Class", text: "Mercedes arrived decorated, chauffeur in uniform, on-time to the minute. Our baraat photos look straight out of a film.", stars: 5 },
  { name: "Amit Verma", meta: "Corporate • Monthly Billing", text: "We run 40+ airport trips a month with MSL. GST invoices, 24×7 dispatch, zero escalations in 8 months.", stars: 5 },
  { name: "Harpreet Singh", meta: "Chandigarh Outstation", text: "One-way Innova at genuine one-way price. No hidden driver bata, no night charge surprises. Honest people.", stars: 5 },
];

export const FAQS = [
  { q: "How do I book a cab?", a: "Use the Book Now page or tap any WhatsApp button. Your booking opens in WhatsApp with all details pre-filled — just press send and our dispatcher confirms within minutes, 24×7." },
  { q: "Are your drivers verified?", a: "Yes — 100% police-verified, medically checked, GPS-tracked and trained in hospitality. You receive driver name, photo and live location before every trip." },
  { q: "What is included in outstation pricing?", a: "Per-km fare plus transparent toll, state tax and driver allowance. One-way trips charge one side only on select routes like Amritsar–Chandigarh." },
  { q: "Do you provide airport pickup with flight tracking?", a: "Yes. Share your flight number — we track delays live, offer 45 minutes free waiting, and meet you at the arrival gate with a placard." },
  { q: "Can I book luxury cars for weddings?", a: "Absolutely. Mercedes E-Class, BMW 5 Series and decorated Fortuner with uniformed chauffeurs, red-carpet entry and photography time included." },
  { q: "What is your cancellation policy?", a: "Free cancellation up to 6 hours before pickup for local trips and 12 hours for outstation. No advance needed for most bookings — pay after the trip." },
];

export const GALLERY = [
  { src: "/fleet/customer-ertiga.jpg", cat: "Our Fleet", label: "Our New Ertiga" },
  { src: "/gallery/tourist-coach.jpg", cat: "Group Tours", label: "Tourist Coach" },
  { src: "/gallery/wedding-decor.jpg", cat: "Weddings", label: "Wedding Decor Car" },
  { src: "/gallery/sedan-duty-1.jpg", cat: "Our Fleet", label: "Sedan on Duty" },
  { src: "/gallery/sedan-duty-2.jpg", cat: "Our Fleet", label: "Sedan on Duty" },
  { src: "/gallery/fleet-van.jpg", cat: "Our Fleet", label: "Family Van" },
  { src: "/gallery/fleet-suv-1.jpg", cat: "Our Fleet", label: "SUV on Duty" },
  { src: "/gallery/fleet-suv-2.jpg", cat: "Our Fleet", label: "SUV on Duty" },
  { src: "/gallery/fleet-hatch.jpg", cat: "Our Fleet", label: "Compact on Duty" },
  { src: "/gallery/fleet-sedan-black.jpg", cat: "Our Fleet", label: "Premium Sedan" },
  { src: "/gallery/fleet-sedan-1.jpg", cat: "Our Fleet", label: "Sedan on Duty" },
  { src: "/gallery/fleet-cabin.jpg", cat: "Our Fleet", label: "Comfort Cabin" },
  { src: IMG.heroSUV, cat: "Luxury Cars", label: "Fortuner Night Patrol" },
  { src: IMG.rollsRoyce, cat: "Luxury Cars", label: "Rolls Royce Class" },
  { src: IMG.mercedes, cat: "Luxury Cars", label: "Mercedes E-Class" },
  { src: IMG.bmw, cat: "Luxury Cars", label: "BMW 5 Series" },
  { src: "/places/golden-temple.jpg", cat: "Golden Temple", label: "Golden Temple Dawn" },
  { src: "/places/golden-night.jpg", cat: "Golden Temple", label: "Temple at Night" },
  { src: "/places/wagah.jpg", cat: "Wagah Border", label: "Wagah Retreat Ceremony" },
  { src: "/places/jallianwala.jpg", cat: "Golden Temple", label: "Jallianwala Bagh" },
  { src: "/places/durgiana.jpg", cat: "Golden Temple", label: "Durgiana Temple" },
  { src: "/places/gobindgarh.jpg", cat: "Wagah Border", label: "Gobindgarh Fort" },
  { src: IMG.airplane, cat: "Airport", label: "Airport Pickup" },
  { src: IMG.wedding, cat: "Weddings", label: "Bridal Entry" },
  { src: IMG.bus, cat: "Group Tours", label: "Tempo Traveller" },
  { src: IMG.van, cat: "Group Tours", label: "12-Seater Cruiser" },
  { src: IMG.highway, cat: "Highways", label: "Punjab Highway Run" },
  { src: IMG.sedanRoad, cat: "Luxury Cars", label: "Sedan Fleet" },
  { src: IMG.suvRoad, cat: "Highways", label: "SUV Outstation" },
  { src: IMG.punjabRoad, cat: "Highways", label: "Innova Crysta Tour" },
  { src: IMG.driver, cat: "Airport", label: "Chauffeur Service" },
  { src: IMG.interior, cat: "Luxury Cars", label: "First-Class Cabin" },
  { src: IMG.carNight, cat: "Luxury Cars", label: "Night Transfer" },
];
