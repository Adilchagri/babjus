export type Language = 'fr' | 'ar';

export interface Translations {
  nav: {
    home: string;
    menu: string;
    about: string;
    contact: string;
    searchPlaceholder: string;
    orderCta: string;
    cart: string;
  };
  hero: {
    tagline: string;
    brandTitle: string;
    subtitle: string;
    benefit1Title: string;
    benefit1Desc: string;
    benefit2Title: string;
    benefit2Desc: string;
    benefit3Title: string;
    benefit3Desc: string;
    primaryCta: string;
    badgePizza: string;
    decorativePhrase: string;
  };
  categories: {
    title: string;
    viewAll: string;
  };
  featured: {
    title: string;
    subtitle: string;
    viewFullMenu: string;
    bestseller: string;
    new: string;
    promo: string;
    addToCart: string;
  };
  experience: {
    title: string;
    description: string;
    cta: string;
    stat1Value: string;
    stat1Label: string;
    stat2Value: string;
    stat2Label: string;
    stat3Value: string;
    stat3Label: string;
  };
  process: {
    title: string;
    step1Num: string;
    step1Title: string;
    step1Desc: string;
    step2Num: string;
    step2Title: string;
    step2Desc: string;
    step3Num: string;
    step3Title: string;
    step3Desc: string;
    cta: string;
  };
  gallery: {
    title: string;
    viewMore: string;
  };
  finalCta: {
    title: string;
    subtitle: string;
    ctaOrder: string;
    ctaMenu: string;
  };
  footer: {
    restaurantTag: string;
    followUs: string;
    phoneLabel: string;
    addressLabel: string;
    hoursLabel: string;
    openingHours: string;
    quickLinks: string;
    goodFoodMood: string;
    rights: string;
  };
  cart: {
    title: string;
    empty: string;
    emptySubtitle: string;
    exploreMenu: string;
    subtotal: string;
    delivery: string;
    deliveryOptionDelivery: string;
    deliveryOptionPickup: string;
    deliveryFree: string;
    deliveryNote: string;
    total: string;
    checkoutWhatsapp: string;
    checkoutCash: string;
    orderSummary: string;
    clientName: string;
    clientPhone: string;
    clientAddress: string;
    specialNotes: string;
    sendViaWhatsapp: string;
    confirmCashOrder: string;
    orderSuccess: string;
    orderSuccessMsg: string;
    close: string;
  };
  productModal: {
    size: string;
    quantity: string;
    addToCart: string;
    specialInstructions: string;
    specialInstructionsPlaceholder: string;
    unitPrice: string;
  };
  toast: {
    addedToCart: string;
  };
}

export const TRANSLATIONS: Record<Language, Translations> = {
  fr: {
    nav: {
      home: "Accueil",
      menu: "Menu",
      about: "À propos",
      contact: "Contact",
      searchPlaceholder: "Rechercher un plat...",
      orderCta: "Commander →",
      cart: "Panier"
    },
    hero: {
      tagline: "Plus qu’un restaurant,",
      brandTitle: "Babjus",
      subtitle: "Une expérience de goût à El Jadida",
      benefit1Title: "Plats gourmands",
      benefit1Desc: "pour tous les goûts",
      benefit2Title: "Ingrédients frais",
      benefit2Desc: "et de qualité",
      benefit3Title: "Une ambiance",
      benefit3Desc: "chaleureuse",
      primaryCta: "Découvrir le menu →",
      badgePizza: "PIZZA GOURMANDE",
      decorativePhrase: "Le goût qui rassemble ♡"
    },
    categories: {
      title: "Nos Catégories",
      viewAll: "Tout afficher"
    },
    featured: {
      title: "Nos incontournables",
      subtitle: "Des plats savoureux, préparés avec passion.",
      viewFullMenu: "Voir tout le menu →",
      bestseller: "Best-seller",
      new: "Nouveau",
      promo: "Promo",
      addToCart: "Ajouter"
    },
    experience: {
      title: "Un lieu convivial au cœur d’El Jadida",
      description: "Babjus vous accueille dans un cadre chaleureux pour partager des moments uniques autour de plats délicieux préparés à la minute.",
      cta: "À propos de nous →",
      stat1Value: "+1000",
      stat1Label: "Clients satisfaits",
      stat2Value: "Plats variés",
      stat2Label: "pour tous les goûts",
      stat3Value: "El Jadida",
      stat3Label: "Notre ville"
    },
    process: {
      title: "Commandez en toute simplicité !",
      step1Num: "01",
      step1Title: "Choisissez vos plats",
      step1Desc: "Parcourez notre menu gourmand",
      step2Num: "02",
      step2Title: "Validez votre commande",
      step2Desc: "Paiement en ligne ou à la livraison",
      step3Num: "03",
      step3Title: "Savourez chez vous",
      step3Desc: "Livraison rapide à El Jadida",
      cta: "Commander maintenant →"
    },
    gallery: {
      title: "Nos spécialités en images",
      viewMore: "Voir plus de photos →"
    },
    finalCta: {
      title: "Une envie de Babjus ?",
      subtitle: "Votre prochain repas commence ici.",
      ctaOrder: "Commander maintenant →",
      ctaMenu: "Voir le menu"
    },
    footer: {
      restaurantTag: "RESTAURANT EL JADIDA",
      followUs: "Suivez-nous",
      phoneLabel: "Appelez-nous",
      addressLabel: "Notre adresse",
      hoursLabel: "Horaires d'ouverture",
      openingHours: "Tous les jours 12h00 - 00h00",
      quickLinks: "Navigation",
      goodFoodMood: "Good Food Good Mood ♡",
      rights: "© 2026 Babjus Restaurant. Tous droits réservés."
    },
    cart: {
      title: "Votre Panier",
      empty: "Votre panier est vide",
      emptySubtitle: "Découvrez notre carte et ajoutez vos plats préférés !",
      exploreMenu: "Découvrir le menu",
      subtotal: "Sous-total",
      delivery: "Mode de récupération",
      deliveryOptionDelivery: "Livraison à domicile (El Jadida)",
      deliveryOptionPickup: "À emporter / Sur place",
      deliveryFree: "Gratuit",
      deliveryNote: "Paiement à la livraison ou direct via WhatsApp",
      total: "Total",
      checkoutWhatsapp: "Commander par WhatsApp →",
      checkoutCash: "Valider la commande (Paiement à la livraison)",
      orderSummary: "Détails de livraison",
      clientName: "Votre nom complet",
      clientPhone: "Numéro de téléphone",
      clientAddress: "Adresse de livraison (Quartier, Rue...)",
      specialNotes: "Instructions spéciales (sans oignon, sauce...)",
      sendViaWhatsapp: "Envoyer la commande sur WhatsApp",
      confirmCashOrder: "Confirmer la commande",
      orderSuccess: "Commande enregistrée !",
      orderSuccessMsg: "Merci ! Votre commande Babjus est en cours de préparation.",
      close: "Fermer"
    },
    productModal: {
      size: "Choisir la taille",
      quantity: "Quantité",
      addToCart: "Ajouter au panier",
      specialInstructions: "Remarques spéciales pour la cuisine",
      specialInstructionsPlaceholder: "Ex: Sauce piquante à part, sans oignon...",
      unitPrice: "Prix unitaire"
    },
    toast: {
      addedToCart: "ajouté au panier ✓"
    }
  },
  ar: {
    nav: {
      home: "الرئيسية",
      menu: "قائمة الطعام",
      about: "من نحن",
      contact: "اتصل بنا",
      searchPlaceholder: "ابحث عن وجبتك المفضلة...",
      orderCta: "اطلب الآن ←",
      cart: "السلة"
    },
    hero: {
      tagline: "أكثر من مجرد مطعم،",
      brandTitle: "باب جوس",
      subtitle: "تجربة طعم فريدة في قلب الجديدة",
      benefit1Title: "أطباق شهية",
      benefit1Desc: "تناسب جميع الأذواق",
      benefit2Title: "مكونات طازجة",
      benefit2Desc: "وعالية الجودة",
      benefit3Title: "أجواء دافئة",
      benefit3Desc: "ومميزة",
      primaryCta: "اكتشف قائمة الطعام ←",
      badgePizza: "بيتزا شهية ولذيذة",
      decorativePhrase: "المذاق الذي يجمعنا ♡"
    },
    categories: {
      title: "أصنافنا المميزة",
      viewAll: "عرض الكل"
    },
    featured: {
      title: "أطباقنا التي لا تُفوّت",
      subtitle: "أطباق محضرة بكل شغف وعناية لإرضاء ذوقكم.",
      viewFullMenu: "مشاهدة القائمة كاملة ←",
      bestseller: "الأكثر طلباً",
      new: "جديد",
      promo: "عرض خاص",
      addToCart: "إضافة"
    },
    experience: {
      title: "مكان دافئ في قلب مدينة الجديدة",
      description: "يرحب بكم مطعم باب جوس في أجواء مميزة ومريحة لمشاركة لحظات لا تُنسى حول أشهى الأطباق المحضرة طازجة فور طلبها.",
      cta: "تعرف علينا أكثر ←",
      stat1Value: "+1000",
      stat1Label: "زبون راضٍ وسعيد",
      stat2Value: "أطباق متنوعة",
      stat2Label: "لكل الأذواق",
      stat3Value: "الجديدة",
      stat3Label: "مدينتنا الغالية"
    },
    process: {
      title: "اطلب وجبتك بكل سهولة وسرعة !",
      step1Num: "01",
      step1Title: "اختر أطباقك المفضلة",
      step1Desc: "تصفح قائمتنا الغنية والمتنوعة",
      step2Num: "02",
      step2Title: "أكد طلبك",
      step2Desc: "الدفع عند الاستلام أو عبر واتساب",
      step3Num: "03",
      step3Title: "استمتع بوجبتك",
      step3Desc: "توصيل سريع إلى باب منزلك في الجديدة",
      cta: "اطلب الآن بكل سهولة ←"
    },
    gallery: {
      title: "أطباقنا بعدسة الكاميرا",
      viewMore: "المزيد من الصور ←"
    },
    finalCta: {
      title: "هل تشتهي وجبة من باب جوس ؟",
      subtitle: "وجبتك اللذيذة القادمة تبدأ من هنا.",
      ctaOrder: "اطلب وجبتك الآن ←",
      ctaMenu: "تصفح القائمة"
    },
    footer: {
      restaurantTag: "مطعم الجديدة",
      followUs: "تابعونا على مواقع التواصل",
      phoneLabel: "اتصل بنا مباشرة",
      addressLabel: "عنواننا",
      hoursLabel: "أوقات العمل",
      openingHours: "يومياً من 12:00 زوالاً إلى 00:00 ليلاً",
      quickLinks: "روابط سريعة",
      goodFoodMood: "Good Food Good Mood ♡",
      rights: "© 2026 مطعم باب جوس. جميع الحقوق محفوظة."
    },
    cart: {
      title: "سلة الطلبات",
      empty: "سلة طلباتك فارغة حالياً",
      emptySubtitle: "تصفح قائمتنا اللذيذة وأضف وجباتك المفضلة !",
      exploreMenu: "تصفح قائمة الطعام",
      subtotal: "المجموع الفرعي",
      delivery: "طريقة الاستلام",
      deliveryOptionDelivery: "توصيل إلى المنزل (الجديدة)",
      deliveryOptionPickup: "استلام من المطعم",
      deliveryFree: "مجاناً",
      deliveryNote: "الدفع عند الاستلام متاح | الدفع السريع عبر واتساب",
      total: "المجموع الإجمالي",
      checkoutWhatsapp: "إتمام الطلب عبر واتساب ←",
      checkoutCash: "تأكيد الطلب (الدفع عند الاستلام)",
      orderSummary: "معلومات التوصيل",
      clientName: "الاسم الكامل",
      clientPhone: "رقم الهاتف",
      clientAddress: "عنوان التوصيل (الحي، الشارع...)",
      specialNotes: "ملاحظات خاصة للمطبخ (بدون بصل، صلصة إضافية...)",
      sendViaWhatsapp: "إرسال الطلب عبر واتساب",
      confirmCashOrder: "تأكيد الطلب الآن",
      orderSuccess: "تم تسجيل طلبك بنجاح !",
      orderSuccessMsg: "شكراً لاختيارك باب جوس ! وجبتك قيد التحضير الآن بعناية.",
      close: "إغلاق"
    },
    productModal: {
      size: "اختر الحجم",
      quantity: "الكمية",
      addToCart: "إضافة إلى السلة",
      specialInstructions: "ملاحظات خاصة للمطبخ",
      specialInstructionsPlaceholder: "مثال: صلصة حارة جانباً، بدون بصل...",
      unitPrice: "سعر الوحدة"
    },
    toast: {
      addedToCart: "تمت إضافته إلى السلة بنجاح ✓"
    }
  }
};
