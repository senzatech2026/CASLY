export interface LookItem {
  id: string;
  name: string;
  type: string;
  price: number;
  originalPrice?: number;
  image: string;
  tag: string;
  sizes: string[];
}

export interface ModelLook {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  description: string;
  avatarImage: string;
  fullLookPrice: number;
  items: LookItem[];
}

export interface Product {
  id: string;
  name: string;
  category: "tees" | "tie-dye" | "custom-prints" | "oversized" | "ethnic";
  price: number;
  originalPrice?: number;
  badge?: string;
  image: string;
  hoverImage: string;
  sizes: string[];
  fabric: string;
  description: string;
  inStock: boolean;
}

export const MODEL_LOOKS: ModelLook[] = [
  {
    id: "look-01",
    title: "Look 01: The Studio Boxy",
    subtitle: "Heavyweight Minimalist Fit",
    badge: "CORE ESSENTIAL",
    description: "240 GSM combed cotton raw-edge boxy tee layered over distressed light-wash wide-leg skater denim. Dropped shoulders for an effortless drape.",
    // Full body model in white boxy tee & wide blue jeans (matching user reference)
    avatarImage: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&fit=crop&w=900&q=85",
    fullLookPrice: 3899,
    items: [
      {
        id: "item-01-a",
        name: "CASLY 240 GSM Heavyweight Boxy Tee",
        type: "Oversized Top",
        price: 1599,
        originalPrice: 1899,
        image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=600&q=80",
        tag: "100% Combed Cotton",
        sizes: ["S", "M", "L", "XL"],
      },
      {
        id: "item-01-b",
        name: "Washed Stonework Wide-Leg Denim",
        type: "Bottomwear",
        price: 2499,
        originalPrice: 2899,
        image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=600&q=80",
        tag: "14oz Hand-distressed Denim",
        sizes: ["28", "30", "32", "34"],
      },
      {
        id: "item-01-c",
        name: "Studio Chunky Minimalist Lows",
        type: "Footwear",
        price: 3200,
        image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=600&q=80",
        tag: "Suede & Gum Sole",
        sizes: ["UK 7", "UK 8", "UK 9", "UK 10"],
      },
    ],
  },
  {
    id: "look-02",
    title: "Look 02: Olive Pleated Knit",
    subtitle: "Autumn Earth Tone Set",
    badge: "NEW ARRIVAL",
    description: "Relaxed olive knit crewneck sweater paired with tailored pleated brown trousers and minimal footwear. Understated luxury drape.",
    // Full body model in olive sweater & brown pleated trousers (matching user reference)
    avatarImage: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=900&q=85",
    fullLookPrice: 4299,
    items: [
      {
        id: "item-02-a",
        name: "CASLY Heavy Knit Olive Crewneck",
        type: "Sweater",
        price: 2199,
        originalPrice: 2499,
        image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=600&q=80",
        tag: "Merino Wool Blend",
        sizes: ["S", "M", "L", "XL"],
      },
      {
        id: "item-02-b",
        name: "Pleated Double-Knee Brown Trousers",
        type: "Bottomwear",
        price: 2299,
        image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=600&q=80",
        tag: "Heavy Cotton Gabardine",
        sizes: ["30", "32", "34"],
      },
    ],
  },
  {
    id: "look-03",
    title: "Look 03: Heather Grey Vintage",
    subtitle: "Atelier Washed Sweatshirt",
    badge: "BESTSELLER",
    description: "Vintage enzyme-washed heather grey boxy sweatshirt over medium vintage wash skate denim. Soft brushed fleece interior.",
    // Full body model in grey crewneck & blue jeans (matching user reference)
    avatarImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=900&q=85",
    fullLookPrice: 3999,
    items: [
      {
        id: "item-03-a",
        name: "Atelier Heather Grey French Terry Crew",
        type: "Top",
        price: 1899,
        image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=600&q=80",
        tag: "400 GSM Heavy Fleece",
        sizes: ["S", "M", "L", "XL"],
      },
      {
        id: "item-03-b",
        name: "Vintage Straight Skate Jeans",
        type: "Denim",
        price: 2399,
        image: "https://images.unsplash.com/photo-1542272604-780c96856592?auto=format&fit=crop&w=600&q=80",
        tag: "100% Cotton Denim",
        sizes: ["30", "32", "34"],
      },
    ],
  },
  {
    id: "look-04",
    title: "Look 04: Sukuna Hand-Painted",
    subtitle: "Custom Anime Denim Series",
    badge: "1 OF 1 DROP",
    description: "Individually hand-painted Sukuna anime artwork across raw-edge denim trucker jacket. Finished with permanent waterproof pigments.",
    avatarImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=85",
    fullLookPrice: 5499,
    items: [
      {
        id: "item-04-a",
        name: "CASLY x Sukuna Hand-Painted Denim Jacket",
        type: "Outerwear",
        price: 3899,
        originalPrice: 4499,
        image: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?auto=format&fit=crop&w=600&q=80",
        tag: "18 Hours Handwork",
        sizes: ["S", "M", "L", "XL"],
      },
      {
        id: "item-04-b",
        name: "Relaxed Cargo Trouser in Obsidian",
        type: "Bottomwear",
        price: 1999,
        image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=600&q=80",
        tag: "Ripstop Cotton",
        sizes: ["30", "32", "34"],
      },
    ],
  },
  {
    id: "look-05",
    title: "Look 05: Storm Cloud Tie-Dye",
    subtitle: "Atelier Ice-Dye Technique",
    badge: "SMALL BATCH",
    description: "Slow-melt ice-dye crystallization with organic mineral pigments. Subtle smoky grey-blue gradient across 260 GSM jersey.",
    avatarImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=85",
    fullLookPrice: 3499,
    items: [
      {
        id: "item-05-a",
        name: "Storm Cloud Ice-Dye Boxy Tee",
        type: "Unisex Top",
        price: 1799,
        originalPrice: 2099,
        image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=600&q=80",
        tag: "Hand-Dyed Pigment",
        sizes: ["S", "M", "L", "XL"],
      },
      {
        id: "item-05-b",
        name: "Straight Cut Ecru Tailored Trouser",
        type: "Bottomwear",
        price: 1999,
        image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=600&q=80",
        tag: "Linen Cotton Blend",
        sizes: ["30", "32", "34"],
      },
    ],
  },
];

export const FEATURED_COLLECTIONS = [
  {
    id: "col-1",
    num: "01",
    title: "Handmade T-Shirts",
    tagline: "Slow-stitched, 240+ GSM dropped shoulder essentials.",
    image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1200&q=85",
    accent: "100% Combed Cotton",
  },
  {
    id: "col-2",
    num: "02",
    title: "Tie & Dye Atelier",
    tagline: "Ice-crystallized mineral pigments. No two garments alike.",
    image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1200&q=85",
    accent: "Artisan Hand-Dyed",
  },
  {
    id: "col-3",
    num: "03",
    title: "Custom Painted & Prints",
    tagline: "Anime, realism & streetwear iconography painted by hand.",
    image: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?auto=format&fit=crop&w=1200&q=85",
    accent: "1 of 1 Pieces",
  },
  {
    id: "col-4",
    num: "04",
    title: "Oversized & Unisex",
    tagline: "Gender-free architectural silhouettes engineered for comfort.",
    image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=1200&q=85",
    accent: "Universal Drape",
  },
];

export const FEATURED_PRODUCTS: Product[] = [
  {
    id: "prod-1",
    name: "Storm Cloud Ice-Dye Unisex Tee",
    category: "tie-dye",
    price: 1799,
    originalPrice: 2099,
    badge: "MOST LOVED",
    image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=85",
    hoverImage: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=85",
    sizes: ["XS", "S", "M", "L", "XL", "Custom"],
    fabric: "240 GSM 100% Combed Cotton, Hand-Dyed",
    description: "Every piece is treated individually in small buckets using our proprietary cold-dye process, producing smoky fractal clouds.",
    inStock: true,
  },
  {
    id: "prod-2",
    name: "Sukuna Ryomen Hand-Painted Trucker",
    category: "custom-prints",
    price: 3899,
    originalPrice: 4499,
    badge: "1 OF 1 DROP",
    image: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?auto=format&fit=crop&w=800&q=85",
    hoverImage: "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=85",
    sizes: ["S", "M", "L", "XL"],
    fabric: "14.5 oz Rigid Vintage Denim, Acrylic Emulsion",
    description: "Hand-painted by CASLY resident artists. Features meticulous anime linework that endures repeated gentle washes.",
    inStock: true,
  },
  {
    id: "prod-3",
    name: "Minimalist Heavyweight Boxy Blank in Chalk",
    category: "tees",
    price: 1499,
    originalPrice: 1799,
    badge: "DAILY ESSENTIAL",
    image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=85",
    hoverImage: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=85",
    sizes: ["S", "M", "L", "XL", "XXL"],
    fabric: "250 GSM Pure Compact Cotton",
    description: "The ultimate blank canvas. Drop shoulder, thick 1.25 inch ribbed collar that will never bacon-neck, and reinforced twin-needle stitching.",
    inStock: true,
  },
  {
    id: "prod-4",
    name: "Obsidian Reverse-Bleach Discharge Tee",
    category: "oversized",
    price: 1699,
    originalPrice: 1999,
    badge: "ATELIER DROP",
    image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=800&q=85",
    hoverImage: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=85",
    sizes: ["S", "M", "L", "XL"],
    fabric: "240 GSM Carbon Washed Jersey",
    description: "Selective bleaching technique that extracts the black dye into ghostly cream textures, neutralizing the chemical to maintain thread strength.",
    inStock: true,
  },
];

export const INSTAGRAM_POSTS = [
  {
    id: "ig-1",
    type: "reel",
    caption: "The making of our Sukuna custom hand-painted jacket ✨ 18 hours of pure patience & fine brushes.",
    image: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?auto=format&fit=crop&w=600&q=80",
    likes: "4.1k",
    comments: "104",
  },
  {
    id: "ig-2",
    type: "photo",
    caption: "Clients review 🤍 Matching in our Cloud Dye oversized collection. Swipe for details.",
    image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=600&q=80",
    likes: "2.8k",
    comments: "58",
  },
  {
    id: "ig-3",
    type: "reel",
    caption: "Studio prep day! Mixing non-toxic Japanese pigments for next week's drop 🎨",
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=600&q=80",
    likes: "5.6k",
    comments: "213",
  },
  {
    id: "ig-4",
    type: "photo",
    caption: "Festive mood: Custom peacock feather handpainted koti for our client in Mumbai 🦚",
    image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=600&q=80",
    likes: "3.4k",
    comments: "82",
  },
  {
    id: "ig-5",
    type: "reel",
    caption: "Wash care instructions: Why CASLY hand-painted pieces last for years without fading 🌊",
    image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=600&q=80",
    likes: "6.2k",
    comments: "135",
  },
  {
    id: "ig-6",
    type: "photo",
    caption: "Behind the seams: Our 240 GSM organic cotton racks ready for custom orders 🧵",
    image: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=600&q=80",
    likes: "1.9k",
    comments: "47",
  },
];
