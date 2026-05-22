/**
 * GLAM BY DOVE — Brand constants
 * Style: "Gilded Owambe" — deep aubergine, antique gold, champagne cream, blush.
 * Keep all copy, imagery, and contact details centralized here.
 */

export const BRAND = {
  name: "Glam By Dove",
  shortName: "GBD",
  handle: "@itz_dovesglam",
  instagramUrl: "https://www.instagram.com/itz_dovesglam/",
  tagline: "Flawless Glam for Your Most Memorable Moments.",
  cities: ["Ado-Ekiti", "Akure", "Ibadan"],
  phoneDisplay: "0803 061 6727",
  phoneRaw: "+2348030616727",
  whatsappUrl:
    "https://wa.me/2348030616727?text=" +
    encodeURIComponent(
      "Hi Dove! I'd love to book a glam session — please share availability and pricing.",
    ),
  email: "hello@glambydove.com",
};

export const HERO = {
  eyebrow: "Bridal · Gele · Owambe · Graduation",
  headline: "Flawless glam for your most",
  headlineItalic: "memorable moments",
  body: "Your beauty deserves a professional touch. At Glam By Dove, we specialize in enhancing your natural features to create timeless, radiant looks for weddings, graduations, and celebrations. Let's make you unforgettable.",
};

export const HERO_IMAGE =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663644520441/Lqf4T2LnejD5iGnXZp5tVD/gbd-hero-bride-RP3mJmkNNAJXV6wgcqWqZF.webp";

export const ARTIST_IMAGE =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663644520441/Lqf4T2LnejD5iGnXZp5tVD/gbd-portrait-artist-HijrKbdSPLfCpk7dZBsgVE.webp";

export type ServiceCategory = "bridal" | "owambe" | "gele" | "graduation";

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
      "A complete bridal beauty experience designed to last from first-look to last dance. Skin prep, premium makeup, lashes, and an optional signature gele to complete the look.",
    inclusions: [
      "In-depth skin prep & priming",
      "Premium long-wear bridal makeup",
      "Custom lashes & contour",
      "Touch-up kit for the day",
    ],
    price: "Contact for quote",
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663644520441/Lqf4T2LnejD5iGnXZp5tVD/gbd-card-bridal-WP3b4sC7am2fAzRtzV3Efh.webp",
  },
  {
    id: "owambe",
    number: "N° 02",
    name: "Owambe & Birthday Glam",
    italic: "for the celebration",
    blurb:
      "Party-ready, long-wearing glam built for Owambe heat and dance floors. Bold or soft — your call. Travel and on-site styling available.",
    inclusions: [
      "Sweat-resistant base & set",
      "Statement eye or soft glam",
      "Full lash application",
      "Lip combo of your choice",
    ],
    price: "From ₦35,000",
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663644520441/Lqf4T2LnejD5iGnXZp5tVD/gbd-card-owambe-6mMDmhTNxmfjd67vkwBNii.webp",
  },
  {
    id: "gele",
    number: "N° 03",
    name: "Signature Turban Gele",
    italic: "the architectural crown",
    blurb:
      "Sculpted, photo-ready gele styling using premium aso-oke. Booked alone or layered onto a glam package as a finishing crown.",
    inclusions: [
      "Custom gele consultation",
      "Pleated, sculpted finish",
      "Pinning & secure fit",
      "Coordination with your aso-ebi",
    ],
    price: "From ₦25,000",
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663644520441/Lqf4T2LnejD5iGnXZp5tVD/gbd-card-gele-Hxkh9oWGk2WsV3utxLnN8t.webp",
  },
  {
    id: "graduation",
    number: "N° 04",
    name: "Convocation & Shoots",
    italic: "for your milestone",
    blurb:
      "Fresh, photo-friendly glam tailored for graduation portraits, convocation ceremonies, and editorial shoots. Skin-first, camera-ready.",
    inclusions: [
      "Dewy, camera-ready base",
      "Soft definition & natural lash",
      "Skin-toned lip palette",
      "Setting for all-day wear",
    ],
    price: "From ₦25,000",
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663644520441/Lqf4T2LnejD5iGnXZp5tVD/gbd-card-graduation-264cx4JLgzssMpcAwETHqt.webp",
  },
];

export interface GalleryItem {
  id: string;
  category: Exclude<ServiceCategory, never> | "details";
  src: string;
  alt: string;
}

export const GALLERY: GalleryItem[] = [
  {
    id: "g1",
    category: "bridal",
    src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663644520441/Lqf4T2LnejD5iGnXZp5tVD/gbd-card-bridal-WP3b4sC7am2fAzRtzV3Efh.webp",
    alt: "Bride with soft glow makeup and lace veil",
  },
  {
    id: "g2",
    category: "gele",
    src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663644520441/Lqf4T2LnejD5iGnXZp5tVD/gbd-card-gele-Hxkh9oWGk2WsV3utxLnN8t.webp",
    alt: "Antique gold sculpted turban gele",
  },
  {
    id: "g3",
    category: "owambe",
    src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663644520441/Lqf4T2LnejD5iGnXZp5tVD/gbd-card-owambe-6mMDmhTNxmfjd67vkwBNii.webp",
    alt: "Owambe glam with copper smoky eye and gold earrings",
  },
  {
    id: "g4",
    category: "graduation",
    src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663644520441/Lqf4T2LnejD5iGnXZp5tVD/gbd-card-graduation-264cx4JLgzssMpcAwETHqt.webp",
    alt: "Graduation portrait with fresh dewy makeup",
  },
  {
    id: "g5",
    category: "details",
    src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663644520441/Lqf4T2LnejD5iGnXZp5tVD/gbd-gallery-1-8By4MX7HktWYGc4wD4dozQ.webp",
    alt: "Close-up of bronze halo eye look",
  },
  {
    id: "g6",
    category: "gele",
    src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663644520441/Lqf4T2LnejD5iGnXZp5tVD/gbd-gallery-2-CQaM27cr8ejhVnjWV3h8TJ.webp",
    alt: "Detail of pleated gold aso-oke gele",
  },
  {
    id: "g7",
    category: "bridal",
    src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663644520441/Lqf4T2LnejD5iGnXZp5tVD/gbd-gallery-3-EuN46PH6xvemFa9JVD6Pcm.webp",
    alt: "Bride mid-laugh with pearl earrings",
  },
  {
    id: "g8",
    category: "owambe",
    src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663644520441/Lqf4T2LnejD5iGnXZp5tVD/gbd-gallery-4-ZHUBtL5JHMiFWVth4uWDsA.webp",
    alt: "Owambe guest in plum and gold aso-ebi",
  },
  {
    id: "g9",
    category: "graduation",
    src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663644520441/Lqf4T2LnejD5iGnXZp5tVD/gbd-gallery-5-8tnBAtcUtn3sSzNQvA5VGW.webp",
    alt: "Graduate in cap and gown smiling",
  },
  {
    id: "g10",
    category: "details",
    src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663644520441/Lqf4T2LnejD5iGnXZp5tVD/gbd-gallery-6-XsuNF4YfFJgcKRczwCfthd.webp",
    alt: "Glossy berry-plum lip close-up",
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
    a: "Glam By Dove is based across Southwestern Nigeria and regularly serves clients in Ado-Ekiti, Akure, and Ibadan. Travel for destination events outside these cities is available with a small logistics fee — just mention your venue when booking.",
  },
  {
    q: "How early should I book my bridal date?",
    a: "Bridal dates are usually secured 3–6 months ahead, and peak wedding months (November, December, April) book out fastest. A small deposit holds your date.",
  },
  {
    q: "Can I book gele styling alone?",
    a: "Yes. Signature Turban Gele is available as a stand-alone service or as a finishing crown layered onto any glam package.",
  },
  {
    q: "What products do you use?",
    a: "Only premium, long-wear, skin-friendly products tested on rich melanin tones. Your skin type and any sensitivities are discussed during consultation.",
  },
];
