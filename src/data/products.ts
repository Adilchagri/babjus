// Authentic Babjus Restaurant Catalog Data
// Source of truth: https://take.app/fr/babjus

export interface ProductVariant {
  id: string;
  name: string;
  price: number;
  originalPrice?: number | null;
}

export interface ProductMedia {
  id: string;
  url: string;
  name?: string;
  width?: number;
  height?: number;
}

export interface Product {
  id: string;
  categoryId: string;
  categoryKey: string;
  name: string;
  nameFr: string;
  nameAr: string;
  description: string;
  price: number;
  originalPrice?: number | null;
  image: string;
  medias: ProductMedia[];
  variants: ProductVariant[];
  hasVariants: boolean;
  isPopular?: boolean;
  isNew?: boolean;
  badge?: string;
  badgeColor?: 'yellow' | 'green' | 'red';
  isFeatured?: boolean;
  featuredOrder?: number;
}

export interface Category {
  id: string;
  key: string;
  nameFr: string;
  nameAr: string;
  icon: string;
  description: string;
  image: string;
  categoryImage: string;
  products: Product[];
}

export interface RestaurantInfo {
  name: string;
  taglineFr: string;
  taglineAr: string;
  city: string;
  country: string;
  phone: string;
  phoneDisplay: string;
  phoneCall: string;
  whatsapp: string;
  address: string;
  mapsUrl: string;
  openingHoursFr: string;
  openingHoursAr: string;
  currency: string;
  socials: {
    instagram: string;
    facebook: string;
  };
}

export const RESTAURANT_INFO: RestaurantInfo = {
  "name": "Babjus RESTAURANT",
  "taglineFr": "Une expérience de goût à El Jadida",
  "taglineAr": "تجربة طعم فريدة في الجديدة",
  "city": "El Jadida",
  "country": "Maroc",
  "phone": "06 61 63 71 45",
  "phoneDisplay": "06 61 63 71 45",
  "phoneCall": "+212661637145",
  "whatsapp": "212661637145",
  "address": "Av. Allal Fassi, El Jadida, Maroc",
  "mapsUrl": "https://maps.google.com/?q=6FMF%2B4M7%2C%20Av.%20Allal%20Fassi%20EL%20JADIDA",
  "openingHoursFr": "Tous les jours : 12h00 - 00h00",
  "openingHoursAr": "يومياً : 12:00 زوالاً - 00:00 ليلاً",
  "currency": "MAD",
  "socials": {
    "instagram": "https://www.instagram.com/babjus.restaurant",
    "facebook": "https://www.facebook.com/babjus.restaurant"
  }
};

export const CATEGORIES: Category[] = [
  {
    "id": "clza4vl7e007tdidu9ko4aifk",
    "key": "PLATS",
    "nameFr": "Plats",
    "nameAr": "أطباق",
    "icon": "Utensils",
    "description": "",
    "image": "https://storage.googleapis.com/takeapp/media/cm0zl20hv00020cla29eq48fe.jpg",
    "products": [
      {
        "id": "clzesjnoi001pzz20bvpzgsym",
        "categoryId": "clza4vl7e007tdidu9ko4aifk",
        "categoryKey": "PLATS",
        "name": "دجاج مقرمش | CRISPY CHIKEN",
        "nameFr": "CRISPY CHIKEN",
        "nameAr": "دجاج مقرمش",
        "description": "Poulet croustillant / Frites",
        "price": 50,
        "originalPrice": null,
        "image": "https://storage.googleapis.com/takeapp/media/cm0zl20hv00020cla29eq48fe.jpg",
        "medias": [
          {
            "id": "cm0zl224p00017eg6qx0zm5o9",
            "url": "https://storage.googleapis.com/takeapp/media/cm0zl20hv00020cla29eq48fe.jpg",
            "name": "أطلب الأن_20240912_183141_0000.jpg"
          }
        ],
        "variants": [],
        "hasVariants": false,
        "isPopular": true,
        "isNew": false,
        "badge": "Best-seller",
        "badgeColor": "yellow",
        "isFeatured": true,
        "featuredOrder": 2
      },
      {
        "id": "cmr89ntfz00000akzdx706hwu",
        "categoryId": "clza4vl7e007tdidu9ko4aifk",
        "categoryKey": "PLATS",
        "name": "TESTY CROUSTY",
        "nameFr": "TESTY CROUSTY",
        "nameAr": "TESTY CROUSTY",
        "description": "crispy chicken/riz/sauce spécial/Oignons/persil",
        "price": 49,
        "originalPrice": 59,
        "image": "https://storage.googleapis.com/takeapp/media/cmr89nev8000009ks4upx6jcd.jpg",
        "medias": [
          {
            "id": "cmr89nguh000009ksvaoankt3",
            "url": "https://storage.googleapis.com/takeapp/media/cmr89nev8000009ks4upx6jcd.jpg",
            "name": "IMG-20260705-WA0011.jpg"
          }
        ],
        "variants": [],
        "hasVariants": false,
        "isPopular": false,
        "isNew": false
      }
    ],
    "categoryImage": "/assets/gallery_5.jpg"
  },
  {
    "id": "clza4ssez004l9o7ev26ebzmx",
    "key": "PIZZA",
    "nameFr": "Pizza",
    "nameAr": "بيتزا",
    "icon": "Pizza",
    "description": "",
    "image": "https://storage.googleapis.com/takeapp/media/cmdasbslr000304l879rmb3x9.avif",
    "products": [
      {
        "id": "clzer705p001vr9de4lkgsr5t",
        "categoryId": "clza4ssez004l9o7ev26ebzmx",
        "categoryKey": "PIZZA",
        "name": "بيتزا مرغريتا | PIZZA MARGARITA",
        "nameFr": "PIZZA MARGARITA",
        "nameAr": "بيتزا مرغريتا",
        "description": "استمتع بمذاق بيتزا مارغريتا الأصيلة! 🍕 مزيج مثالي من صلصة الطماطم الطازجة، جبن الموتزاريلا الذائب، ولمسة من الريحان العطري، كلها فوق عجينة ذهبية مقرمشة تُخبز بحب. طعم بسيط لكنه ساحر، يجسد جوهر المطبخ الإيطالي التقليدي!\n\nSavourez l’authentique Pizza Margherita ! 🍕 Une harmonie parfaite entre une sauce tomate fraîche, une mozzarella fondante et une touche de basilic parfumé, le tout sur une pâte dorée et croustillante, cuite avec passion. Une simplicité exquise qui incarne l’essence même de la cuisine italienne traditionnelle !",
        "price": 30,
        "originalPrice": 35,
        "image": "https://storage.googleapis.com/takeapp/media/cmdasbslr000304l879rmb3x9.avif",
        "medias": [
          {
            "id": "cmdasbuka003el4047elurbg4",
            "url": "https://storage.googleapis.com/takeapp/media/cmdasbslr000304l879rmb3x9.avif",
            "name": "cmd5wkq1g000304l1f7zsf8fl.avif"
          }
        ],
        "variants": [
          {
            "id": "clzer4uq400003v623vyi0o6m",
            "name": "صغيرة | PETITE",
            "price": 30,
            "originalPrice": 35
          },
          {
            "id": "clzer5wms00013v628dhfqrr1",
            "name": "كبيرة |  GRANDE",
            "price": 40,
            "originalPrice": 45
          }
        ],
        "hasVariants": true,
        "isPopular": false,
        "isNew": false
      },
      {
        "id": "clzer83bm000d1r09joyzm5ux",
        "categoryId": "clza4ssez004l9o7ev26ebzmx",
        "categoryKey": "PIZZA",
        "name": "بيتزا فونجي | PIZZA FUNGHI",
        "nameFr": "PIZZA FUNGHI",
        "nameAr": "بيتزا فونجي",
        "description": "SAUCE TOMATE, MOZZARELLA,OLIVES NOIRS, CHAMPIGNOS.",
        "price": 30,
        "originalPrice": 35,
        "image": "https://storage.googleapis.com/takeapp/media/cmdas6jox000004l57hlseir5.avif",
        "medias": [
          {
            "id": "cmdas6ll0000ml104v3y98m05",
            "url": "https://storage.googleapis.com/takeapp/media/cmdas6jox000004l57hlseir5.avif",
            "name": "clzlyfbpw000b0cmgef403zd1.avif"
          }
        ],
        "variants": [
          {
            "id": "clzer83bd00000cl5d6y6ghd8",
            "name": "صغيرة | PETITE",
            "price": 30,
            "originalPrice": 35
          },
          {
            "id": "clzer83bd00010cl54o689vhq",
            "name": "كبيرة |  GRANDE",
            "price": 45,
            "originalPrice": 45
          }
        ],
        "hasVariants": true,
        "isPopular": false,
        "isNew": false
      },
      {
        "id": "clzer85m0001xr9deq1rt19a1",
        "categoryId": "clza4ssez004l9o7ev26ebzmx",
        "categoryKey": "PIZZA",
        "name": "بيتزا نباتية | PIZZA VEGETARIENNE",
        "nameFr": "PIZZA VEGETARIENNE",
        "nameAr": "بيتزا نباتية",
        "description": "SAUCETOMATE,MOZZARELLA,LEGUME,BROCOLLI,ÉPINARDS.",
        "price": 30,
        "originalPrice": 35,
        "image": "https://storage.googleapis.com/takeapp/media/cmdar22t2000104jvda2ugt5m.avif",
        "medias": [
          {
            "id": "cmdar24pa0008js04s15a0ctp",
            "url": "https://storage.googleapis.com/takeapp/media/cmdar22t2000104jvda2ugt5m.avif",
            "name": "cmd78l240000d04l80mtt3wdu.avif"
          }
        ],
        "variants": [
          {
            "id": "clzer85lq00060clba8w3ap68",
            "name": "صغيرة | PETITE",
            "price": 30,
            "originalPrice": 35
          },
          {
            "id": "clzer85lq00070clb0p0ch5ua",
            "name": "كبيرة |  GRANDE",
            "price": 40,
            "originalPrice": 45
          }
        ],
        "hasVariants": true,
        "isPopular": false,
        "isNew": false
      },
      {
        "id": "clzer8amv0020r9dek8adpag1",
        "categoryId": "clza4ssez004l9o7ev26ebzmx",
        "categoryKey": "PIZZA",
        "name": "بيتزا هوت دوج | PIZZA HOT DOG",
        "nameFr": "PIZZA HOT DOG",
        "nameAr": "بيتزا هوت دوج",
        "description": "SAUCE TOMATE, MOZZARELLA,HOT DOG,OLIVES NOIRS.",
        "price": 35,
        "originalPrice": 40,
        "image": "https://storage.googleapis.com/takeapp/media/cmdas9rbb000g04l46kmwh31i.avif",
        "medias": [
          {
            "id": "cmdas9t810032l404dpst2xe7",
            "url": "https://storage.googleapis.com/takeapp/media/cmdas9rbb000g04l46kmwh31i.avif",
            "name": "cmd5whvt9000004l12xmrcma0.avif"
          }
        ],
        "variants": [
          {
            "id": "clzer8aml00080clb5rne8n8x",
            "name": "صغيرة | PETITE",
            "price": 35,
            "originalPrice": 40
          },
          {
            "id": "clzer8aml00090clb0h43fs3x",
            "name": "كبيرة |  GRANDE",
            "price": 45,
            "originalPrice": 50
          }
        ],
        "hasVariants": true,
        "isPopular": false,
        "isNew": false
      },
      {
        "id": "clzer8cla0022r9dees2ijxs7",
        "categoryId": "clza4ssez004l9o7ev26ebzmx",
        "categoryKey": "PIZZA",
        "name": "بيتزا بالبيبروني | PIZZA PEPPERONI",
        "nameFr": "PIZZA PEPPERONI",
        "nameAr": "بيتزا بالبيبروني",
        "description": "SAUCE TOMATE, MOZZARELLA, PEPPERONI",
        "price": 35,
        "originalPrice": 40,
        "image": "https://storage.googleapis.com/takeapp/media/clzlxb54c00010cl1c33y7e6r.jpeg",
        "medias": [
          {
            "id": "clzlxb6wo001112eawaq5b23r",
            "url": "https://storage.googleapis.com/takeapp/media/clzlxb54c00010cl1c33y7e6r.jpeg",
            "name": "IMG_6956.jpeg"
          }
        ],
        "variants": [
          {
            "id": "clzer8cl0000a0clb6iykagn4",
            "name": "صغيرة | PETITE",
            "price": 35,
            "originalPrice": 40
          },
          {
            "id": "clzer8cl0000b0clb2uxw957v",
            "name": "كبيرة |  GRANDE",
            "price": 45,
            "originalPrice": 50
          }
        ],
        "hasVariants": true,
        "isPopular": false,
        "isNew": false
      },
      {
        "id": "clzer8ej10008r3qwo6bmnnt9",
        "categoryId": "clza4ssez004l9o7ev26ebzmx",
        "categoryKey": "PIZZA",
        "name": "بيتزا الجبن األربعة | PIZZA QUATRE FROMAGE",
        "nameFr": "PIZZA QUATRE FROMAGE",
        "nameAr": "بيتزا الجبن األربعة",
        "description": "SAUCETOMATE,MOZZARELLA,FROMAGEBLEU,FROMAGE ROUGE, RICOTTA",
        "price": 40,
        "originalPrice": 45,
        "image": "https://storage.googleapis.com/takeapp/media/cmdasebm3000304l82femht7k.avif",
        "medias": [
          {
            "id": "cmdasedh90034l8046uulajqe",
            "url": "https://storage.googleapis.com/takeapp/media/cmdasebm3000304l82femht7k.avif",
            "name": "cmd5wo2mo000204kz3viqh5z7.avif"
          }
        ],
        "variants": [
          {
            "id": "clzer8eir00020cl842rrgp8o",
            "name": "صغيرة | PETITE",
            "price": 40,
            "originalPrice": 45
          },
          {
            "id": "clzer8eir00030cl84587dzx1",
            "name": "كبيرة |  GRANDE",
            "price": 50,
            "originalPrice": 55
          }
        ],
        "hasVariants": true,
        "isPopular": true,
        "isNew": false,
        "badge": "Best-seller",
        "badgeColor": "yellow",
        "isFeatured": true,
        "featuredOrder": 1
      },
      {
        "id": "clzer8gll000bxdrrpke8ud4a",
        "categoryId": "clza4ssez004l9o7ev26ebzmx",
        "categoryKey": "PIZZA",
        "name": "بيتزا بروسسيوتو | PIZZA PROSCIUTTO",
        "nameFr": "PIZZA PROSCIUTTO",
        "nameAr": "بيتزا بروسسيوتو",
        "description": "SAUCE TOMATE, MOZZARELLA,JAMBON,HOT DOG.",
        "price": 40,
        "originalPrice": 50,
        "image": "https://storage.googleapis.com/takeapp/media/cmdar6nyj000104jrd03n61ln.avif",
        "medias": [
          {
            "id": "cmdar6psx0002jr04z6dvgfj8",
            "url": "https://storage.googleapis.com/takeapp/media/cmdar6nyj000104jrd03n61ln.avif",
            "name": "cmd5uefuc000604l534om04ki.avif"
          }
        ],
        "variants": [
          {
            "id": "clzer8glb00030ckz3simacx6",
            "name": "صغيرة | PETITE",
            "price": 40,
            "originalPrice": 50
          },
          {
            "id": "clzer8glb00040ckzed74actw",
            "name": "كبيرة |  GRANDE",
            "price": 50,
            "originalPrice": 55
          }
        ],
        "hasVariants": true,
        "isPopular": false,
        "isNew": false
      },
      {
        "id": "clzer8ihg0024r9deklgfijfe",
        "categoryId": "clza4ssez004l9o7ev26ebzmx",
        "categoryKey": "PIZZA",
        "name": "بيتزا بولو | PIZZA POLLO",
        "nameFr": "PIZZA POLLO",
        "nameAr": "بيتزا بولو",
        "description": "SAUCE TOMATE, MOZZARELLA,OLIVES NOIRS, POULET",
        "price": 45,
        "originalPrice": 50,
        "image": "https://storage.googleapis.com/takeapp/media/cmdaqtec0000004gsbizud2xq.avif",
        "medias": [
          {
            "id": "cmdaqtgci0001gs04pslrwiog",
            "url": "https://storage.googleapis.com/takeapp/media/cmdaqtec0000004gsbizud2xq.avif",
            "name": "cmda2rv70000204jvg8fc305v.avif"
          }
        ],
        "variants": [
          {
            "id": "clzer8ih6000c0clb8l3ph061",
            "name": "صغيرة | PETITE",
            "price": 45,
            "originalPrice": 50
          },
          {
            "id": "clzer8ih6000d0clb60z088va",
            "name": "كبيرة |  GRANDE",
            "price": 55,
            "originalPrice": 60
          }
        ],
        "hasVariants": true,
        "isPopular": false,
        "isNew": false
      },
      {
        "id": "clzerqs0l003ar9deycrkm4dk",
        "categoryId": "clza4ssez004l9o7ev26ebzmx",
        "categoryKey": "PIZZA",
        "name": "بيتزا مقرمشة | PIZZA CRISPY",
        "nameFr": "PIZZA CRISPY",
        "nameAr": "بيتزا مقرمشة",
        "description": "SAUCE TOMATE, MOZZARELL, OLIVES NOIRS, CRESPY",
        "price": 45,
        "originalPrice": 50,
        "image": "https://storage.googleapis.com/takeapp/media/cmdaqosfd000604lcexb2ezkf.avif",
        "medias": [
          {
            "id": "cmdaqouhz004cl7044rf3ybz3",
            "url": "https://storage.googleapis.com/takeapp/media/cmdaqosfd000604lcexb2ezkf.avif",
            "name": "cmda2bg8m000104in1wmc0hl1.avif"
          }
        ],
        "variants": [
          {
            "id": "clzerqs09000h0clbd4m119if",
            "name": "صغيرة | PETITE",
            "price": 45,
            "originalPrice": 50
          },
          {
            "id": "clzerqs09000i0clbgmrh4ysg",
            "name": "كبيرة |  GRANDE",
            "price": 55,
            "originalPrice": 60
          }
        ],
        "hasVariants": true,
        "isPopular": true,
        "isNew": false,
        "badge": "Best-seller",
        "badgeColor": "yellow",
        "isFeatured": true,
        "featuredOrder": 2
      },
      {
        "id": "clzerqw0i000yxdrrzwkb6gzd",
        "categoryId": "clza4ssez004l9o7ev26ebzmx",
        "categoryKey": "PIZZA",
        "name": "بيتزا اللحم المفروم | PIZZA VIANDE HACHÉE",
        "nameFr": "PIZZA VIANDE HACHÉE",
        "nameAr": "بيتزا اللحم المفروم",
        "description": "SAUCETOMATE,MOZZARELLA,OLIVESNOIRS,VIANDE HACHÉE.",
        "price": 45,
        "originalPrice": 50,
        "image": "https://storage.googleapis.com/takeapp/media/cmdar4qvo000404jvgmxxdaav.avif",
        "medias": [
          {
            "id": "cmdar4rpo0010l904aglrkhzm",
            "url": "https://storage.googleapis.com/takeapp/media/cmdar4qvo000404jvgmxxdaav.avif",
            "name": "cmd5ux2li000604if1pffawp0.avif"
          }
        ],
        "variants": [
          {
            "id": "clzerqw0800060ckzdswv87u6",
            "name": "صغيرة | PETITE",
            "price": 45,
            "originalPrice": 50
          },
          {
            "id": "clzerqw0800070ckz2ckcc0qn",
            "name": "كبيرة |  GRANDE",
            "price": 55,
            "originalPrice": 60
          }
        ],
        "hasVariants": true,
        "isPopular": true,
        "isNew": false
      },
      {
        "id": "clzerqxwy001sqvqz8kcrwqk0",
        "categoryId": "clza4ssez004l9o7ev26ebzmx",
        "categoryKey": "PIZZA",
        "name": "بيتزا تونة | PIZZA TUNA",
        "nameFr": "PIZZA TUNA",
        "nameAr": "بيتزا تونة",
        "description": "SAUCETOMATE,MOZZARELLA,OLIVESNOIRS,THON.",
        "price": 45,
        "originalPrice": 50,
        "image": "https://storage.googleapis.com/takeapp/media/cmd78i96x000a04l84t4le0lh.png",
        "medias": [
          {
            "id": "cmd78ibww0028l80425n011ke",
            "url": "https://storage.googleapis.com/takeapp/media/cmd78i96x000a04l84t4le0lh.png",
            "name": "PIZZA-TUNA.png"
          }
        ],
        "variants": [
          {
            "id": "clzerqxwq00090cjt0a4fc7l1",
            "name": "صغيرة | PETITE",
            "price": 45,
            "originalPrice": 50
          },
          {
            "id": "clzerqxwq000a0cjt7q6ca3kb",
            "name": "كبيرة |  GRANDE",
            "price": 55,
            "originalPrice": 60
          }
        ],
        "hasVariants": true,
        "isPopular": false,
        "isNew": false
      },
      {
        "id": "clzerr1yx001uqvqzcgk7u2az",
        "categoryId": "clza4ssez004l9o7ev26ebzmx",
        "categoryKey": "PIZZA",
        "name": "بيتزا فور سيزونز | PIZZA QUATRE SAISONS",
        "nameFr": "PIZZA QUATRE SAISONS",
        "nameAr": "بيتزا فور سيزونز",
        "description": "SAUCE TOMATE, MOZZARELLA.OLIVES NOIRS,THON,CREVETTES,POULET,VIANDE HACHÉE.",
        "price": 65,
        "originalPrice": 70,
        "image": "https://storage.googleapis.com/takeapp/media/cmd78o4y1000104l7e2y72ujf.png",
        "medias": [
          {
            "id": "cmd78o7ii0004jp046d70r4h5",
            "url": "https://storage.googleapis.com/takeapp/media/cmd78o4y1000104l7e2y72ujf.png",
            "name": "PIZZA-QUATRE-SAISONS.png"
          }
        ],
        "variants": [
          {
            "id": "clzerr1yo000c0cjt1rdcb30l",
            "name": "كبيرة |  GRANDE",
            "price": 65,
            "originalPrice": 70
          },
          {
            "id": "clzerr1yo000b0cjt7wgh1uas",
            "name": "صغيرة | PETITE",
            "price": 50,
            "originalPrice": 55
          }
        ],
        "hasVariants": true,
        "isPopular": false,
        "isNew": false
      },
      {
        "id": "clzerr3sy001wqvqzwgv9t22r",
        "categoryId": "clza4ssez004l9o7ev26ebzmx",
        "categoryKey": "PIZZA",
        "name": "بيتزا فواكه البحر | PIZZA FRUIT DE MER",
        "nameFr": "PIZZA FRUIT DE MER",
        "nameAr": "بيتزا فواكه البحر",
        "description": "SAUCETOMATE,MOZZARELLA,CHAMPIGNOS,CREVETTES,SÉPIA.",
        "price": 55,
        "originalPrice": 60,
        "image": "https://storage.googleapis.com/takeapp/media/cmd5w6k4o000204js0tt0burz.png",
        "medias": [
          {
            "id": "cmd5w6mok0046l904qg53tdsn",
            "url": "https://storage.googleapis.com/takeapp/media/cmd5w6k4o000204js0tt0burz.png",
            "name": "PIZZA FRUIT DE MER.png"
          }
        ],
        "variants": [
          {
            "id": "clzerr3sq000d0cjtc28f6zfm",
            "name": "صغيرة | PETITE",
            "price": 55,
            "originalPrice": 60
          },
          {
            "id": "clzerr3sq000e0cjte3m3atni",
            "name": "كبيرة |  GRANDE",
            "price": 70,
            "originalPrice": 75
          }
        ],
        "hasVariants": true,
        "isPopular": false,
        "isNew": false
      }
    ],
    "categoryImage": "/assets/hero_pizza.jpg"
  },
  {
    "id": "clza4web300a6hr4bxyty4v6h",
    "key": "PASTICCIOS",
    "nameFr": "Pasticcios",
    "nameAr": "باستيشيو",
    "icon": "Layers",
    "description": "",
    "image": "https://storage.googleapis.com/takeapp/media/clzo3m0jb000m0cmh4kaf45qf.png",
    "products": [
      {
        "id": "clzg9tiep001tm91gamy8hic1",
        "categoryId": "clza4web300a6hr4bxyty4v6h",
        "categoryKey": "PASTICCIOS",
        "name": "باستيتشيو الدجاج | PASTICCIO POULET",
        "nameFr": "PASTICCIO POULET",
        "nameAr": "باستيتشيو الدجاج",
        "description": "استمتع بتجربة طهي لا تُنسى مع طبقنا الشهي \"Pasticcio Poulet\"! هذا الطبق الفاخر يجمع بين الدجاج الطري والمكرونة الإيطالية الشهية في تناغم مثالي مع صلصة البشاميل الكريمية والأعشاب الطازجة. كل قضمة تأخذك في رحلة إلى قلب المطبخ الإيطالي الأصيل، مع لمسة عصرية تضمن لك نكهة لا تُقاوم.\n\nلا تفوت فرصة تذوق هذا المزيج الرائع من المكونات الطازجة والنكهات المتناغمة. اطلب الآن \"Pasticcio Poulet\" من مطعمنا وتمتع بوجبة مثالية تلبي شغفك بالطعام اللذيذ وتضمن لك تجربة استثنائية مع كل لقمة!",
        "price": 40,
        "originalPrice": 50,
        "image": "https://storage.googleapis.com/takeapp/media/clzo3m0jb000m0cmh4kaf45qf.png",
        "medias": [
          {
            "id": "clzo3mclq001511qxkrw43bcb",
            "url": "https://storage.googleapis.com/takeapp/media/clzo3m0jb000m0cmh4kaf45qf.png",
            "name": "20240810_131133_0000.png"
          }
        ],
        "variants": [],
        "hasVariants": false,
        "isPopular": false,
        "isNew": false
      },
      {
        "id": "clzg9wz950051wh5vf1qwg6dp",
        "categoryId": "clza4web300a6hr4bxyty4v6h",
        "categoryKey": "PASTICCIOS",
        "name": "باستيتشيو جومبو | PASTICCIO CHARCUTERIE",
        "nameFr": "PASTICCIO CHARCUTERIE",
        "nameAr": "باستيتشيو جومبو",
        "description": "اختبر قمة التميز في الطهي مع طبقنا الراقي \"Pasticcio Charcuterie\"! مزيج لا مثيل له من المكرونة الإيطالية الأصيلة الممزوجة بأجود أنواع اللحوم الباردة والمكونات الفاخرة. يتم تحضير هذا الطبق الفاخر بصلصة بشاميل حريرية تذوب في الفم، مدموجة بتوابل وأعشاب طازجة لتعزز كل نكهة بعناية.\n\nكل لقمة من \"Pasticcio Charcuterie\" تأخذك في رحلة طهي استثنائية، تعكس فنون الطهي الراقية والجودة الفائقة. إنه الخيار الأمثل لأولئك الذين يقدرون الفخامة في تفاصيل الطعام. جربه الآن من مطعمنا وتمتع بتجربة غنية، تملأ حواسك بالمتعة وتترك لديك ذكرى طهي لا تُنسى!",
        "price": 40,
        "originalPrice": 50,
        "image": "https://storage.googleapis.com/takeapp/media/clzvc5zrv00170cl222ir2436.png",
        "medias": [
          {
            "id": "clzvc6ler00f5134ugerc8njk",
            "url": "https://storage.googleapis.com/takeapp/media/clzvc5zrv00170cl222ir2436.png",
            "name": "Design sans titre_20240815_004210_0000.png"
          }
        ],
        "variants": [],
        "hasVariants": false,
        "isPopular": false,
        "isNew": false
      },
      {
        "id": "clzga0ypm0058eq4lf5g92ae6",
        "categoryId": "clza4web300a6hr4bxyty4v6h",
        "categoryKey": "PASTICCIOS",
        "name": "باستيشيو لحم المفروم | PASTICCIO VIANDE HACHÉE",
        "nameFr": "PASTICCIO VIANDE HACHÉE",
        "nameAr": "باستيشيو لحم المفروم",
        "description": "",
        "price": 45,
        "originalPrice": 55,
        "image": "https://storage.googleapis.com/takeapp/media/clzvc3uak000o0cmd2xh854cz.png",
        "medias": [
          {
            "id": "clzvc4f4v008jgcifab9zq83o",
            "url": "https://storage.googleapis.com/takeapp/media/clzvc3uak000o0cmd2xh854cz.png",
            "name": "20240815_010532_0000.png"
          }
        ],
        "variants": [],
        "hasVariants": false,
        "isPopular": true,
        "isNew": false,
        "badge": "Promo",
        "badgeColor": "yellow",
        "isFeatured": true,
        "featuredOrder": 5
      },
      {
        "id": "clzga62vj005rwh5vp8u0gt9o",
        "categoryId": "clza4web300a6hr4bxyty4v6h",
        "categoryKey": "PASTICCIOS",
        "name": "باستيشيو مختلطة | PASTICCIO MIXTE",
        "nameFr": "PASTICCIO MIXTE",
        "nameAr": "باستيشيو مختلطة",
        "description": "",
        "price": 55,
        "originalPrice": 65,
        "image": "https://storage.googleapis.com/takeapp/media/clzlysz0200080cjm7lv37c6y.jpeg",
        "medias": [
          {
            "id": "clzlyt06i002ox2mfdzudjw45",
            "url": "https://storage.googleapis.com/takeapp/media/clzlysz0200080cjm7lv37c6y.jpeg",
            "name": "IMG_6979.jpeg"
          }
        ],
        "variants": [],
        "hasVariants": false,
        "isPopular": false,
        "isNew": false
      }
    ],
    "categoryImage": "/assets/gallery_3.jpg"
  },
  {
    "id": "clza4tfcj00a1hr4byjne1v8z",
    "key": "PINSA",
    "nameFr": "Pinsa",
    "nameAr": "بنزا",
    "icon": "Flame",
    "description": "",
    "image": "https://storage.googleapis.com/takeapp/media/clzo7tsow00010cky7mpnaraq.png",
    "products": [
      {
        "id": "clzeqkao9000dx9s72glvfzkz",
        "categoryId": "clza4tfcj00a1hr4byjne1v8z",
        "categoryKey": "PINSA",
        "name": "بينسا الدجاج | PINSA POULET",
        "nameFr": "PINSA POULET",
        "nameAr": "بينسا الدجاج",
        "description": "",
        "price": 45,
        "originalPrice": 50,
        "image": "https://storage.googleapis.com/takeapp/media/clzo7tsow00010cky7mpnaraq.png",
        "medias": [
          {
            "id": "clzo7u3l3001q3sm2whw8w5j4",
            "url": "https://storage.googleapis.com/takeapp/media/clzo7tsow00010cky7mpnaraq.png",
            "name": "20240810_151055_0000.png"
          }
        ],
        "variants": [],
        "hasVariants": false,
        "isPopular": true,
        "isNew": true,
        "badge": "Nouveau",
        "badgeColor": "green",
        "isFeatured": true,
        "featuredOrder": 3
      },
      {
        "id": "clzeqkepf008e1qae7k9u2wn5",
        "categoryId": "clza4tfcj00a1hr4byjne1v8z",
        "categoryKey": "PINSA",
        "name": "بينسا لحم مفروم | PINSA VIANDE HACHÉE",
        "nameFr": "PINSA VIANDE HACHÉE",
        "nameAr": "بينسا لحم مفروم",
        "description": "",
        "price": 45,
        "originalPrice": 50,
        "image": "https://storage.googleapis.com/takeapp/media/clzo7sv9b00070cic55kdg3w0.png",
        "medias": [
          {
            "id": "clzo7t789001ipz4x1qav7esh",
            "url": "https://storage.googleapis.com/takeapp/media/clzo7sv9b00070cic55kdg3w0.png",
            "name": "20240810_150817_0000.png"
          }
        ],
        "variants": [],
        "hasVariants": false,
        "isPopular": true,
        "isNew": true
      },
      {
        "id": "clzeqkhp2000muqnz7f0dmvjd",
        "categoryId": "clza4tfcj00a1hr4byjne1v8z",
        "categoryKey": "PINSA",
        "name": "بينسا مختلطة | PINSA MIXTE",
        "nameFr": "PINSA MIXTE",
        "nameAr": "بينسا مختلطة",
        "description": "",
        "price": 50,
        "originalPrice": 60,
        "image": "https://storage.googleapis.com/takeapp/media/clzo7ry3q00050cmgd7i4bdz3.png",
        "medias": [
          {
            "id": "clzo7sagt001gy7jvcgiinw29",
            "url": "https://storage.googleapis.com/takeapp/media/clzo7ry3q00050cmgd7i4bdz3.png",
            "name": "20240810_150731_0000.png"
          }
        ],
        "variants": [],
        "hasVariants": false,
        "isPopular": false,
        "isNew": true
      }
    ],
    "categoryImage": "/assets/gallery_1.jpg"
  },
  {
    "id": "clza4r12f009shr4bmmfx03z5",
    "key": "EMINCE",
    "nameFr": "Émincé",
    "nameAr": "ايمانسي",
    "icon": "Soup",
    "description": "",
    "image": "https://storage.googleapis.com/takeapp/media/cmdau05f8000t04l92htzh2xm.avif",
    "products": [
      {
        "id": "clzeogxvz007mnjw8afibidrq",
        "categoryId": "clza4r12f009shr4bmmfx03z5",
        "categoryKey": "EMINCE",
        "name": "إيمانسي دجاج مع صلصة الفطر | ÉMINCÉ DE POULET SAUCE CHAMPIGNONS",
        "nameFr": "ÉMINCÉ DE POULET SAUCE CHAMPIGNONS",
        "nameAr": "إيمانسي دجاج مع صلصة الفطر",
        "description": "",
        "price": 50,
        "originalPrice": 55,
        "image": "https://storage.googleapis.com/takeapp/media/cmdau05f8000t04l92htzh2xm.avif",
        "medias": [
          {
            "id": "cmdau073k005il904s859ti5v",
            "url": "https://storage.googleapis.com/takeapp/media/cmdau05f8000t04l92htzh2xm.avif",
            "name": "cmd5wrswa000304joaz6ldyp1.avif"
          }
        ],
        "variants": [],
        "hasVariants": false,
        "isPopular": true,
        "isNew": false,
        "badge": "Populaire",
        "badgeColor": "yellow",
        "isFeatured": true,
        "featuredOrder": 4
      },
      {
        "id": "clzeohkce000ym1jg85w1rh9t",
        "categoryId": "clza4r12f009shr4bmmfx03z5",
        "categoryKey": "EMINCE",
        "name": "إيمانسي دجاج مع صلصة الجبن | ÉMINCÉ DE POULET SAUCE FROMAGE",
        "nameFr": "ÉMINCÉ DE POULET SAUCE FROMAGE",
        "nameAr": "إيمانسي دجاج مع صلصة الجبن",
        "description": "",
        "price": 50,
        "originalPrice": 55,
        "image": "https://storage.googleapis.com/takeapp/media/cmdau5ioj000504jx6p7w9hxd.avif",
        "medias": [
          {
            "id": "cmdau5kbz000qjx042j2iy9td",
            "url": "https://storage.googleapis.com/takeapp/media/cmdau5ioj000504jx6p7w9hxd.avif",
            "name": "cmd5wx33q000504joc98s0wcw.avif"
          }
        ],
        "variants": [],
        "hasVariants": false,
        "isPopular": false,
        "isNew": false
      }
    ],
    "categoryImage": "/assets/gallery_2.jpg"
  },
  {
    "id": "clza4xt3d0066f8p16ncgzrsw",
    "key": "JUS FRUIT",
    "nameFr": "Jus Fruit",
    "nameAr": "عصير فواكه",
    "icon": "CupSoda",
    "description": "",
    "image": "https://storage.googleapis.com/takeapp/media/cm0xtemyp00070cjvda8rflpu.png",
    "products": [
      {
        "id": "clzo82pog0013v6pzzkeqee7v",
        "categoryId": "clza4xt3d0066f8p16ncgzrsw",
        "categoryKey": "JUS FRUIT",
        "name": "JUS DE CITRON",
        "nameFr": "JUS DE CITRON",
        "nameAr": "JUS DE CITRON",
        "description": "Cocktail Citron",
        "price": 18,
        "originalPrice": 22,
        "image": "https://storage.googleapis.com/takeapp/media/cm0xtemyp00070cjvda8rflpu.png",
        "medias": [
          {
            "id": "cm0xtep2p0028mfs60pmhr53w",
            "url": "https://storage.googleapis.com/takeapp/media/cm0xtemyp00070cjvda8rflpu.png",
            "name": "أطلب الأن_20240911_124845_0000.png"
          }
        ],
        "variants": [],
        "hasVariants": false,
        "isPopular": false,
        "isNew": false
      },
      {
        "id": "clzo84hea000iyhzg2fiaagg6",
        "categoryId": "clza4xt3d0066f8p16ncgzrsw",
        "categoryKey": "JUS FRUIT",
        "name": "JUS EXOTIC",
        "nameFr": "JUS EXOTIC",
        "nameAr": "JUS EXOTIC",
        "description": "ananas, mangue, coco",
        "price": 30,
        "originalPrice": 38,
        "image": "https://storage.googleapis.com/takeapp/media/cm0xt5tpe00030cmi9jr17khc.png",
        "medias": [
          {
            "id": "cm0xt5w4h0018dsgxil9qol2s",
            "url": "https://storage.googleapis.com/takeapp/media/cm0xt5tpe00030cmi9jr17khc.png",
            "name": "أطلب الأن_20240911_124729_0000.png"
          }
        ],
        "variants": [],
        "hasVariants": false,
        "isPopular": false,
        "isNew": false
      },
      {
        "id": "clzo833gd0018v6pztolp044b",
        "categoryId": "clza4xt3d0066f8p16ncgzrsw",
        "categoryKey": "JUS FRUIT",
        "name": "JUS D’ORANGE",
        "nameFr": "JUS D’ORANGE",
        "nameAr": "JUS D’ORANGE",
        "description": "",
        "price": 18,
        "originalPrice": 20,
        "image": "https://storage.googleapis.com/takeapp/media/cm0xtdyos00000ckzh7uh1p7i.png",
        "medias": [
          {
            "id": "cm0xte21j000bc1o5syuf7xyd",
            "url": "https://storage.googleapis.com/takeapp/media/cm0xtdyos00000ckzh7uh1p7i.png",
            "name": "أطلب الأن_20240911_124935_0000.png"
          }
        ],
        "variants": [],
        "hasVariants": false,
        "isPopular": false,
        "isNew": false
      },
      {
        "id": "clzo839ss002w143pwai6muxe",
        "categoryId": "clza4xt3d0066f8p16ncgzrsw",
        "categoryKey": "JUS FRUIT",
        "name": "JUS DE CARROTE",
        "nameFr": "JUS DE CARROTE",
        "nameAr": "JUS DE CARROTE",
        "description": "Carrote (orange / lait / eau)",
        "price": 19,
        "originalPrice": 20,
        "image": "https://storage.googleapis.com/takeapp/media/cm0xtd6fj000g0cjvfqbe20s9.png",
        "medias": [
          {
            "id": "cm0xtd8o9004jvulifuvn952f",
            "url": "https://storage.googleapis.com/takeapp/media/cm0xtd6fj000g0cjvfqbe20s9.png",
            "name": "أطلب الأن_20240911_124908_0000.png"
          }
        ],
        "variants": [],
        "hasVariants": false,
        "isPopular": false,
        "isNew": false
      },
      {
        "id": "clzo83eg2001lv6pzatj773xr",
        "categoryId": "clza4xt3d0066f8p16ncgzrsw",
        "categoryKey": "JUS FRUIT",
        "name": "JUS DE BANANE",
        "nameFr": "JUS DE BANANE",
        "nameAr": "JUS DE BANANE",
        "description": "",
        "price": 18,
        "originalPrice": 20,
        "image": "https://storage.googleapis.com/takeapp/media/cm0xtcjzu00030cl8fcdrdp5j.png",
        "medias": [
          {
            "id": "cm0xtcm6i000jkddsdm3xe3gy",
            "url": "https://storage.googleapis.com/takeapp/media/cm0xtcjzu00030cl8fcdrdp5j.png",
            "name": "أطلب الأن_20240911_125004_0000.png"
          }
        ],
        "variants": [],
        "hasVariants": false,
        "isPopular": false,
        "isNew": false
      },
      {
        "id": "clzo83lem001hpfnez4jakkbg",
        "categoryId": "clza4xt3d0066f8p16ncgzrsw",
        "categoryKey": "JUS FRUIT",
        "name": "JUS DE ÉPINARDS",
        "nameFr": "JUS DE ÉPINARDS",
        "nameAr": "JUS DE ÉPINARDS",
        "description": "orange et épinards",
        "price": 19,
        "originalPrice": 20,
        "image": "https://storage.googleapis.com/takeapp/media/cm0xtc0ao00000cmbed1n5uc1.png",
        "medias": [
          {
            "id": "cm0xtc2p9000ci8c89v1s238n",
            "url": "https://storage.googleapis.com/takeapp/media/cm0xtc0ao00000cmbed1n5uc1.png",
            "name": "أطلب الأن_20240911_125235_0000.png"
          }
        ],
        "variants": [],
        "hasVariants": false,
        "isPopular": false,
        "isNew": false
      },
      {
        "id": "clzo841fw003kom8czsfzbygj",
        "categoryId": "clza4xt3d0066f8p16ncgzrsw",
        "categoryKey": "JUS FRUIT",
        "name": "JUS D’AVOCAT",
        "nameFr": "JUS D’AVOCAT",
        "nameAr": "JUS D’AVOCAT",
        "description": "",
        "price": 24,
        "originalPrice": 29,
        "image": "https://storage.googleapis.com/takeapp/media/cm0xtbbv500020ck293bt9q00.png",
        "medias": [
          {
            "id": "cm0xtbe5s001w12chnydlkp67",
            "url": "https://storage.googleapis.com/takeapp/media/cm0xtbbv500020ck293bt9q00.png",
            "name": "أطلب الأن_20240911_125152_0000.png"
          }
        ],
        "variants": [],
        "hasVariants": false,
        "isPopular": false,
        "isNew": false
      },
      {
        "id": "clzo841fy002t3sm291a4th8f",
        "categoryId": "clza4xt3d0066f8p16ncgzrsw",
        "categoryKey": "JUS FRUIT",
        "name": "JUS DE POMME",
        "nameFr": "JUS DE POMME",
        "nameAr": "JUS DE POMME",
        "description": "orange / lait / eau",
        "price": 25,
        "originalPrice": 29,
        "image": "https://storage.googleapis.com/takeapp/media/cm0xta3qg00010cl0cwushdp4.png",
        "medias": [
          {
            "id": "cm0xta6350010qe943drfmwof",
            "url": "https://storage.googleapis.com/takeapp/media/cm0xta3qg00010cl0cwushdp4.png",
            "name": "أطلب الأن_20240911_125211_0000.png"
          }
        ],
        "variants": [],
        "hasVariants": false,
        "isPopular": false,
        "isNew": false
      },
      {
        "id": "clzo841fy002y143pw357x2kk",
        "categoryId": "clza4xt3d0066f8p16ncgzrsw",
        "categoryKey": "JUS FRUIT",
        "name": "JUS VERT",
        "nameFr": "JUS VERT",
        "nameAr": "JUS VERT",
        "description": "kiwi, concombre, épinard",
        "price": 28,
        "originalPrice": 34,
        "image": "https://storage.googleapis.com/takeapp/media/cm0xtaqid00020cl8cb5c9vge.png",
        "medias": [
          {
            "id": "cm0xtasrb000oqcs9k0fy1gc7",
            "url": "https://storage.googleapis.com/takeapp/media/cm0xtaqid00020cl8cb5c9vge.png",
            "name": "أطلب الأن_20240911_124703_0000.png"
          }
        ],
        "variants": [],
        "hasVariants": false,
        "isPopular": false,
        "isNew": false
      },
      {
        "id": "clzo841gp00348i43znj8ni6m",
        "categoryId": "clza4xt3d0066f8p16ncgzrsw",
        "categoryKey": "JUS FRUIT",
        "name": "JUS D’ANANAS",
        "nameFr": "JUS D’ANANAS",
        "nameAr": "JUS D’ANANAS",
        "description": "",
        "price": 28,
        "originalPrice": 35,
        "image": "https://storage.googleapis.com/takeapp/media/cm0xt9c6300000cl012q2d1zb.png",
        "medias": [
          {
            "id": "cm0xt9efn000fp3lp1g9oty6i",
            "url": "https://storage.googleapis.com/takeapp/media/cm0xt9c6300000cl012q2d1zb.png",
            "name": "أطلب الأن_20240911_125024_0000.png"
          }
        ],
        "variants": [],
        "hasVariants": false,
        "isPopular": false,
        "isNew": false
      },
      {
        "id": "clzo841il001nv6pz1uixatix",
        "categoryId": "clza4xt3d0066f8p16ncgzrsw",
        "categoryKey": "JUS FRUIT",
        "name": "JUS DE MANGUE",
        "nameFr": "JUS DE MANGUE",
        "nameAr": "JUS DE MANGUE",
        "description": "",
        "price": 28,
        "originalPrice": 35,
        "image": "https://storage.googleapis.com/takeapp/media/cm0xt8fa800000cjxftb24ddg.png",
        "medias": [
          {
            "id": "cm0xt8hlg001jmfs6yehw7586",
            "url": "https://storage.googleapis.com/takeapp/media/cm0xt8fa800000cjxftb24ddg.png",
            "name": "أطلب الأن_20240911_125052_0000.png"
          }
        ],
        "variants": [],
        "hasVariants": false,
        "isPopular": false,
        "isNew": false
      },
      {
        "id": "clzo84hcw003oom8c8ml4zb0c",
        "categoryId": "clza4xt3d0066f8p16ncgzrsw",
        "categoryKey": "JUS FRUIT",
        "name": "JUS TROPICANA",
        "nameFr": "JUS TROPICANA",
        "nameAr": "JUS TROPICANA",
        "description": "banane, mangue, épinard",
        "price": 28,
        "originalPrice": 35,
        "image": "https://storage.googleapis.com/takeapp/media/cm0xt7a5j00000cju07c3fbvr.png",
        "medias": [
          {
            "id": "cm0xt7do60009qcs96z0q2mt5",
            "url": "https://storage.googleapis.com/takeapp/media/cm0xt7a5j00000cju07c3fbvr.png",
            "name": "أطلب الأن_20240911_124607_0000.png"
          }
        ],
        "variants": [],
        "hasVariants": false,
        "isPopular": false,
        "isNew": false
      },
      {
        "id": "clzo84hd8002c6v2vqchzfi7x",
        "categoryId": "clza4xt3d0066f8p16ncgzrsw",
        "categoryKey": "JUS FRUIT",
        "name": "JUS DE PARADISE",
        "nameFr": "JUS DE PARADISE",
        "nameAr": "JUS DE PARADISE",
        "description": "banane, mangue, carrote, orange",
        "price": 30,
        "originalPrice": 38,
        "image": "https://storage.googleapis.com/takeapp/media/cm0xt6jok00010ck27y3scfri.png",
        "medias": [
          {
            "id": "cm0xt6ly60003zeuatuifn1le",
            "url": "https://storage.googleapis.com/takeapp/media/cm0xt6jok00010ck27y3scfri.png",
            "name": "أطلب الأن_20240911_124753_0000.png"
          }
        ],
        "variants": [],
        "hasVariants": false,
        "isPopular": false,
        "isNew": false
      },
      {
        "id": "clzo84hgr00h8pfneq9xvfj98",
        "categoryId": "clza4xt3d0066f8p16ncgzrsw",
        "categoryKey": "JUS FRUIT",
        "name": "PANACHÉ FRUIT DE SAISON",
        "nameFr": "PANACHÉ FRUIT DE SAISON",
        "nameAr": "PANACHÉ FRUIT DE SAISON",
        "description": "",
        "price": 30,
        "originalPrice": 36,
        "image": "https://storage.googleapis.com/takeapp/media/cm0xt53wm00040cl84aj092ar.png",
        "medias": [
          {
            "id": "cm0xt567h00121vvpfxfw1cwx",
            "url": "https://storage.googleapis.com/takeapp/media/cm0xt53wm00040cl84aj092ar.png",
            "name": "أطلب الأن_20240911_124818_0000.png"
          }
        ],
        "variants": [],
        "hasVariants": false,
        "isPopular": false,
        "isNew": false
      },
      {
        "id": "clzo84hhj0015r3lcuu2kvgs8",
        "categoryId": "clza4xt3d0066f8p16ncgzrsw",
        "categoryKey": "JUS FRUIT",
        "name": "JUS D’AVOCAT FRUIT SEC",
        "nameFr": "JUS D’AVOCAT FRUIT SEC",
        "nameAr": "JUS D’AVOCAT FRUIT SEC",
        "description": "",
        "price": 31,
        "originalPrice": 38,
        "image": "https://storage.googleapis.com/takeapp/media/cm0xt4h3h00010ck3g9zsg5g1.png",
        "medias": [
          {
            "id": "cm0xt4jll0016xpagdjgcl4l1",
            "url": "https://storage.googleapis.com/takeapp/media/cm0xt4h3h00010ck3g9zsg5g1.png",
            "name": "أطلب الأن_20240911_125126_0000.png"
          }
        ],
        "variants": [],
        "hasVariants": false,
        "isPopular": false,
        "isNew": false
      }
    ],
    "categoryImage": "/assets/gallery_4.jpg"
  },
  {
    "id": "clza4s2fn007mdidu8jebo37t",
    "key": "LES EXTRAS",
    "nameFr": "Les Extras",
    "nameAr": "الإضافات",
    "icon": "PlusCircle",
    "description": "",
    "image": "https://storage.googleapis.com/takeapp/media/clzfqavuo00030clh79jcd598.gif",
    "products": [
      {
        "id": "clzetmpde0007jyjh0danbjg3",
        "categoryId": "clza4s2fn007mdidu8jebo37t",
        "categoryKey": "LES EXTRAS",
        "name": "كل الإظافات متاحة لك |  LES EXTRAS DISPONIBLES",
        "nameFr": "LES EXTRAS DISPONIBLES",
        "nameAr": "كل الإظافات متاحة لك",
        "description": "** ajouter votre extra s’il vous plaît**",
        "price": 0,
        "originalPrice": null,
        "image": "https://storage.googleapis.com/takeapp/media/clzfqavuo00030clh79jcd598.gif",
        "medias": [
          {
            "id": "clzfqbz980031bqceinpu76nj",
            "url": "https://storage.googleapis.com/takeapp/media/clzfqavuo00030clh79jcd598.gif",
            "name": "IMG_6871.gif"
          }
        ],
        "variants": [],
        "hasVariants": false,
        "isPopular": false,
        "isNew": false
      }
    ],
    "categoryImage": "https://emofly.b-cdn.net/hbd_exvhac6ayb3ZKT/width:640/plain/https%3A%2F%2Fstorage.googleapis.com%2Ftakeapp%2Fmedia%2Fclzfqavuo00030clh79jcd598.gif"
  },
  {
    "id": "clza4tu8m005of8p1qvsulvvr",
    "key": "TACOS",
    "nameFr": "Tacos",
    "nameAr": "طاكوس",
    "icon": "Sandwich",
    "description": "",
    "image": "https://storage.googleapis.com/takeapp/media/cmdarxzgs000704ildvy37i8s.avif",
    "products": [
      {
        "id": "clzep5vml00641qaewwclzkyn",
        "categoryId": "clza4tu8m005of8p1qvsulvvr",
        "categoryKey": "TACOS",
        "name": "تاكوس الدجاج الخاص | Tacos poulet spécial",
        "nameFr": "Tacos poulet spécial",
        "nameAr": "تاكوس الدجاج الخاص",
        "description": "",
        "price": 45,
        "originalPrice": 48,
        "image": "https://storage.googleapis.com/takeapp/media/cmdarxzgs000704ildvy37i8s.avif",
        "medias": [
          {
            "id": "cmdary159002kju049llr1n9u",
            "url": "https://storage.googleapis.com/takeapp/media/cmdarxzgs000704ildvy37i8s.avif",
            "name": "cmd788tk4000404lkag9z2ixv.avif"
          }
        ],
        "variants": [],
        "hasVariants": false,
        "isPopular": false,
        "isNew": false
      },
      {
        "id": "clzep5xu3003jm1jgy3s26pul",
        "categoryId": "clza4tu8m005of8p1qvsulvvr",
        "categoryKey": "TACOS",
        "name": "تاكوس باللحم المفروم | Tacos viande hachées",
        "nameFr": "Tacos viande hachées",
        "nameAr": "تاكوس باللحم المفروم",
        "description": "",
        "price": 50,
        "originalPrice": 55,
        "image": "https://storage.googleapis.com/takeapp/media/cmdarzvpb000304ju04o4dkxk.avif",
        "medias": [
          {
            "id": "cmdarzxey001eju04td0ycujm",
            "url": "https://storage.googleapis.com/takeapp/media/cmdarzvpb000304ju04o4dkxk.avif",
            "name": "cmd784mk7000504l43h8b1bwb.avif"
          }
        ],
        "variants": [],
        "hasVariants": false,
        "isPopular": true,
        "isNew": false
      }
    ],
    "categoryImage": "https://emofly.b-cdn.net/hbd_exvhac6ayb3ZKT/width:640/plain/https%3A%2F%2Fstorage.googleapis.com%2Ftakeapp%2Fmedia%2Fcmdarxzgs000704ildvy37i8s.avif"
  },
  {
    "id": "cmrb3yesr000109kyuq19c9bb",
    "key": "NOS POULET AU FOUR",
    "nameFr": "Poulet au Four",
    "nameAr": "دجاج في الفرن",
    "icon": "Drumstick",
    "description": "",
    "image": "https://storage.googleapis.com/takeapp/media/cmrb3zzpw00020agga3unff25.jpg",
    "products": [
      {
        "id": "cmrb40m3600060ahqe1sbamb3",
        "categoryId": "cmrb3yesr000109kyuq19c9bb",
        "categoryKey": "NOS POULET AU FOUR",
        "name": "PILON AU FOUR",
        "nameFr": "PILON AU FOUR",
        "nameAr": "PILON AU FOUR",
        "description": "3 PILON-RIZ BASMATI-FRITE",
        "price": 45,
        "originalPrice": 50,
        "image": "https://storage.googleapis.com/takeapp/media/cmrb3zzpw00020agga3unff25.jpg",
        "medias": [
          {
            "id": "cmrb401zd00040ahtggd0do3n",
            "url": "https://storage.googleapis.com/takeapp/media/cmrb3zzpw00020agga3unff25.jpg",
            "name": "IMG-20260705-WA0015.jpg"
          }
        ],
        "variants": [],
        "hasVariants": false,
        "isPopular": false,
        "isNew": false
      }
    ],
    "categoryImage": "https://emofly.b-cdn.net/hbd_exvhac6ayb3ZKT/width:640/plain/https%3A%2F%2Fstorage.googleapis.com%2Ftakeapp%2Fmedia%2Fcmrb3zzpw00020agga3unff25.jpg"
  }
];

export const ALL_PRODUCTS: Product[] = CATEGORIES.flatMap(c => c.products);

export const FEATURED_PRODUCTS: Product[] = ALL_PRODUCTS
  .filter(p => p.isFeatured)
  .sort((a, b) => (a.featuredOrder || 99) - (b.featuredOrder || 99));
