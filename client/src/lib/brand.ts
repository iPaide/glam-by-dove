/**
 * GLAM BY DOVE — Brand constants
 * Style: "Gilded Owambe" — deep aubergine, antique gold, champagne cream, blush.
 * Keep all copy, imagery, and contact details centralized here.
 */

export const BRAND = {
  name: "Glam By Dove",
  shortName: "GBD",
  handle: "@itz_dovesglam",
  tiktokHandle: "@itz_doveglam",
  instagramUrl: "https://www.instagram.com/itz_dovesglam/",
  tiktokUrl: "https://www.tiktok.com/@itz_doveglam?_r=1&_t=ZT-96c6nLWgWY1",
  socialLinks: [
    {
      label: "WhatsApp",
      value: "Message Dove directly",
      url:
        "https://wa.me/2348030616727?text=" +
        encodeURIComponent(
          "Hi Dove! I'd love to book a glam session — please share availability and pricing.",
        ),
      primary: true,
    },
    {
      label: "Instagram",
      value: "@itz_dovesglam",
      url: "https://www.instagram.com/itz_dovesglam/",
      primary: false,
    },
    {
      label: "TikTok",
      value: "@itz_doveglam",
      url: "https://www.tiktok.com/@itz_doveglam?_r=1&_t=ZT-96c6nLWgWY1",
      primary: false,
    },
  ],
  tagline: "Flawless Glam for Your Most Memorable Moments.",
  cities: ["Ado-Ekiti", "Akure", "Ibadan"],
  baseCity: "Ado-Ekiti",
  phoneDisplay: "0803 061 6727",
  phoneRaw: "+2348030616727",
  whatsappUrl:
    "https://wa.me/2348030616727?text=" +
    encodeURIComponent(
      "Hi Dove! I'd love to book a glam session — please share availability and pricing.",
    ),
  email: "dovesglam@gmail.com",
};

export const HERO = {
  eyebrow: "Bridal · Owambe · Aso-Ebi · Gele · Lessons",
  headline: "Flawless glam for your most",
  headlineItalic: "memorable moments",
  body: "From traditional weddings and introductions to Owambe Saturdays, birthdays, and convocation days, Glam By Dove creates polished, long-wearing makeup in Ado-Ekiti, with bookings across Akure, Ibadan, Ekiti, and beyond by agreement. Let's make you unforgettable.",
};

export const HERO_IMAGE =
  "/assets/glam-by-dove-royal-bridal-ai.jpg";

export const ARTIST_IMAGE =
  "/assets/glam-by-dove-artist-owner.jpg";

export const LOCAL_IMAGES = {
  birthday: "/assets/glam-by-dove-birthday.jpg",
  bridalWhite: "/assets/glam-by-dove-bridal-white.jpg",
  geleGold: "/assets/glam-by-dove-gele-gold.jpg",
  geleWine: "/assets/glam-by-dove-gele-wine.jpg",
  graduation: "/assets/glam-by-dove-graduation.jpg",
  lessonsAcademy: "/assets/glam-by-dove-lessons-academy-ai.jpg",
  owambeBlackTea: "/assets/glam-by-dove-owambe-black-tea-clean.jpg",
  owambeSoft: "/assets/glam-by-dove-owambe-soft.jpg",
  royalBridal: "/assets/glam-by-dove-royal-bridal-ai.jpg",
};

export const SERVICE_IMAGES = {
  bridal: LOCAL_IMAGES.royalBridal,
  owambe: LOCAL_IMAGES.owambeBlackTea,
  birthday: LOCAL_IMAGES.birthday,
  gele: LOCAL_IMAGES.geleGold,
  graduation: LOCAL_IMAGES.graduation,
  lessons: LOCAL_IMAGES.lessonsAcademy,
};

export type ServiceCategory =
  | "bridal"
  | "owambe"
  | "birthday"
  | "gele"
  | "graduation"
  | "lessons";

export interface Service {
  id: ServiceCategory;
  number: string;
  name: string;
  italic: string;
  blurb: string;
  inclusions: string[];
  price: string;
  image: string;
}

export const SERVICES: Service[] = [
  {
    id: "bridal",
    number: "N° 01",
    name: "The Royal Bridal",
    italic: "for the aisle",
    blurb:
      "A custom bridal makeup experience for traditional weddings, white weddings, introductions, and bridal portraits in Ado-Ekiti, Ekiti State, Akure, Ibadan, and travel locations by agreement. Your quote is shaped around timing, travel, touch-ups, gele, aso-ebi colors, and the full bridal party plan.",
    inclusions: [
      "In-depth skin prep & priming",
      "Premium long-wear bridal makeup",
      "Custom lashes & contour",
      "Touch-up kit for the day",
    ],
    price: "Custom bridal quote",
    image: SERVICE_IMAGES.bridal,
  },
  {
    id: "owambe",
    number: "N° 02",
    name: "Owambe Glam",
    italic: "for the celebration",
    blurb:
      "Party-ready, long-wearing Owambe makeup for Ado-Ekiti celebrations, introductions, aso-ebi color stories, family photos, greetings, and dance floors. Bold or soft — your call.",
    inclusions: [
      "Sweat-resistant base & set",
      "Statement eye or soft glam",
      "Full lash application",
      "Lip combo of your choice",
    ],
    price: "From ₦35,000",
    image: SERVICE_IMAGES.owambe,
  },
  {
    id: "birthday",
    number: "N° 03",
    name: "Birthday Glam",
    italic: "for your spotlight",
    blurb:
      "Camera-ready birthday makeup in Ado-Ekiti for dinners, shoots, parties, and intimate celebrations. Soft glam, full glam, or a look built around your birthday outfit and color theme.",
    inclusions: [
      "Skin-prepped photo-ready base",
      "Soft or full glam finish",
      "Lashes and lip combo",
      "Setting for long wear",
    ],
    price: "From ₦25,000",
    image: SERVICE_IMAGES.birthday,
  },
  {
    id: "gele",
    number: "N° 04",
    name: "Gele Artist",
    italic: "the architectural crown",
    blurb:
      "Sculpted, photo-ready gele styling by an Ado-Ekiti gele artist for trad, introduction, church, Owambe, and aso-ebi moments. Booked alone or layered onto a glam package as a finishing crown.",
    inclusions: [
      "Custom gele consultation",
      "Pleated, sculpted finish",
      "Pinning & secure fit",
      "Coordination with your aso-ebi",
    ],
    price: "From ₦5,000",
    image: SERVICE_IMAGES.gele,
  },
  {
    id: "graduation",
    number: "N° 05",
    name: "Convocation & Shoots",
    italic: "for your milestone",
    blurb:
      "Fresh, photo-friendly graduation makeup tailored for convocation portraits, signing-out shoots, ceremonies, and editorial sessions around Ado-Ekiti and nearby campuses. Skin-first, camera-ready.",
    inclusions: [
      "Dewy, camera-ready base",
      "Soft definition & natural lash",
      "Skin-toned lip palette",
      "Setting for all-day wear",
    ],
    price: "From ₦25,000",
    image: SERVICE_IMAGES.graduation,
  },
  {
    id: "lessons",
    number: "N° 06",
    name: "Makeup Lessons",
    italic: "learn your own face",
    blurb:
      "Personal makeup lessons and tutorials in Ado-Ekiti for beginners, beauty lovers, and aspiring artists who want to improve everyday glam, Owambe-ready application, product use, and technique.",
    inclusions: [
      "Beginner-friendly step-by-step guidance",
      "Product and brush recommendations",
      "Brows, base, eyes, and lips practice",
      "One-on-one technique correction",
    ],
    price: "Contact for rate",
    image: SERVICE_IMAGES.lessons,
  },
];

export interface GalleryItem {
  id: string;
  category: ServiceCategory;
  src: string;
  alt: string;
  instagramUrl: string;
}

export const GALLERY: GalleryItem[] = [
  {
    id: "g1",
    category: "bridal",
    src: SERVICE_IMAGES.bridal,
    alt: "Traditional bride in blue aso-oke gele",
    instagramUrl: "https://www.instagram.com/reel/DPlWOAaArua/",
  },
  {
    id: "g2",
    category: "bridal",
    src: LOCAL_IMAGES.bridalWhite,
    alt: "White bridal glam with soft radiant finish",
    instagramUrl: "https://www.instagram.com/reel/DX6mPUKCON3/",
  },
  {
    id: "g3",
    category: "owambe",
    src: SERVICE_IMAGES.owambe,
    alt: "Owambe guest glam with green lace and gold gele",
    instagramUrl: "https://www.instagram.com/reel/DNQ3_nHswq5/",
  },
  {
    id: "g4",
    category: "owambe",
    src: LOCAL_IMAGES.owambeSoft,
    alt: "Soft traditional glam with red bead styling",
    instagramUrl: "https://www.instagram.com/reel/DQt6jGeAv3C/",
  },
  {
    id: "g5",
    category: "gele",
    src: SERVICE_IMAGES.gele,
    alt: "Gold gele with full glam finish",
    instagramUrl: "https://www.instagram.com/reel/DV8WLROArma/",
  },
  {
    id: "g6",
    category: "gele",
    src: LOCAL_IMAGES.geleWine,
    alt: "Wine gele with clean evening glam",
    instagramUrl: "https://www.instagram.com/reel/DJ_Sl0PsYwN/",
  },
  {
    id: "g7",
    category: "birthday",
    src: SERVICE_IMAGES.birthday,
    alt: "Birthday-ready soft glam with glossy lips",
    instagramUrl: "https://www.instagram.com/reel/DWgpNAigvu-/",
  },
  {
    id: "g8",
    category: "graduation",
    src: SERVICE_IMAGES.graduation,
    alt: "Convocation glam with editorial styling",
    instagramUrl: "https://www.instagram.com/reel/DW8fZOMAuIN/",
  },
];

export interface Testimonial {
  name: string;
  role: string;
  city: string;
  quote: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Adesewa O.",
    role: "Bride · Traditional + White Wedding",
    city: "Ibadan",
    quote:
      "Dove handled both my trad and white wedding glam. My makeup lasted from morning prep until the last dance — and the gele was a moment. I felt like myself, but elevated.",
  },
  {
    name: "Funmilayo A.",
    role: "Convocation Shoot",
    city: "Ado-Ekiti",
    quote:
      "I wanted something fresh and photo-ready for graduation, not heavy. Dove read the brief perfectly. My pictures came back glowing.",
  },
  {
    name: "Yetunde B.",
    role: "Owambe Guest",
    city: "Akure",
    quote:
      "Booked her for my best friend's introduction. The energy in the chair was calm and professional, and my gele still gets compliments months later.",
  },
];

export const FAQS = [
  {
    q: "Where are you based, and do you travel?",
    a: "Glam By Dove is a makeup artist in Ado-Ekiti, Ekiti State, with easy access to Akure and Ibadan. Travel within Nigeria and for destination events is available once timing, logistics, and travel costs are agreed.",
  },
  {
    q: "How early should I book my bridal date?",
    a: "Bridal dates are usually secured 3-6 months ahead, and peak wedding months (November, December, April) book out fastest. Full upfront payment secures your date once your quote and timing are confirmed.",
  },
  {
    q: "Can I book gele styling alone?",
    a: "Yes. Gele Artist bookings are available as a stand-alone service in Ado-Ekiti or as a finishing crown layered onto any bridal, Owambe, or birthday glam package.",
  },
  {
    q: "What products do you use?",
    a: "Only premium, long-wear, skin-friendly products tested on rich melanin tones. Your skin type and any sensitivities are discussed during consultation.",
  },
  {
    q: "What happens after I submit the booking form?",
    a: "The form opens a pre-filled WhatsApp message so you can send your details directly. Dove responds as quickly as possible, confirms availability, shares the right quote, and sends payment details when you are ready to secure the date.",
  },
  {
    q: "Do you handle group bookings and early call times?",
    a: "Yes. For bridal parties, family glam, or multiple Owambe guests, share the number of faces, venue, and ready-by time when you inquire. Early starts and travel are planned into the quote.",
  },
  {
    q: "Can I reschedule after payment?",
    a: "Bookings are secured with full upfront payment and payments are non-refundable. Reschedules depend on date availability, so message as early as possible if your plans change.",
  },
];
