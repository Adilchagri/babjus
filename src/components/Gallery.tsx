import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Maximize2, ArrowRight, ArrowLeft } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';

export const Gallery: React.FC = () => {
  const { t, language, isRtl } = useLanguage();
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  const galleryItems = [
    {
      id: 1,
      titleFr: "Pizza Margherita & Spécialités",
      titleAr: "بيتزا مرغريتا وأطباقنا الخاصة",
      categoryFr: "Pizza",
      categoryAr: "بيتزا",
      image: "/assets/gallery_1.jpg",
    },
    {
      id: 2,
      titleFr: "Émincé de Poulet aux Champignons",
      titleAr: "إيمانسي الدجاج بصلصة الفطر",
      categoryFr: "Émincé",
      categoryAr: "ايمانسي",
      image: "/assets/gallery_2.jpg",
    },
    {
      id: 3,
      titleFr: "Pasticcio Fondant au Four",
      titleAr: "باستيتشيو ساخن ولذيذ بالجبن",
      categoryFr: "Pasticcios",
      categoryAr: "باستيشيو",
      image: "/assets/gallery_3.jpg",
    },
    {
      id: 4,
      titleFr: "Jus de Fruits Frais & Cocktails",
      titleAr: "عصائر فواكه طبيعية ومنعشة",
      categoryFr: "Jus Fruit",
      categoryAr: "عصير فواكه",
      image: "/assets/gallery_4.jpg",
    },
    {
      id: 5,
      titleFr: "Crispy Chicken & Croustillant",
      titleAr: "دجاج كريسبي مقرمش ولذيذ",
      categoryFr: "Plats",
      categoryAr: "أطباق",
      image: "/assets/gallery_5.jpg",
    },
  ];

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeImageIndex !== null) {
      setActiveImageIndex((activeImageIndex + 1) % galleryItems.length);
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeImageIndex !== null) {
      setActiveImageIndex((activeImageIndex - 1 + galleryItems.length) % galleryItems.length);
    }
  };

  return (
    <section className="py-14 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Title & Accent */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
        <div>
          <div className="flex items-center gap-3">
            <h2 className="text-3xl sm:text-4xl font-black text-neutral-900 tracking-tight">
              {t.gallery.title}
            </h2>
            <div className="w-12 sm:w-16 h-1.5 bg-babjus-yellow rounded-full" />
          </div>
        </div>

        <button
          onClick={() => setActiveImageIndex(0)}
          className="inline-flex items-center gap-1 text-xs sm:text-sm font-bold text-neutral-700 hover:text-amber-600 transition-colors group self-start sm:self-auto"
        >
          <span>{t.gallery.viewMore.replace('→', '').replace('←', '').trim()}</span>
          {isRtl ? (
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          ) : (
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          )}
        </button>
      </div>

      {/* 5-Item Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
        {galleryItems.map((item, index) => {
          const itemTitle = language === 'ar' ? item.titleAr : item.titleFr;
          const itemCat = language === 'ar' ? item.categoryAr : item.categoryFr;

          return (
            <div
              key={item.id}
              onClick={() => setActiveImageIndex(index)}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-neutral-900 cursor-pointer shadow-md hover:shadow-xl transition-all duration-300"
            >
              <img
                src={item.image}
                alt={itemTitle}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500 ease-out"
                loading="lazy"
              />

              {/* Hover Dark Overlay & Title */}
              <div className="absolute inset-0 bg-gradient-to-t from-babjus-dark/90 via-babjus-dark/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3.5 text-white">
                <span className="text-[10px] uppercase tracking-wider font-extrabold text-babjus-yellow">
                  {itemCat}
                </span>
                <span className="text-xs font-bold leading-tight mt-0.5 line-clamp-1">
                  {itemTitle}
                </span>
                <div className="mt-2 flex items-center gap-1 text-[10px] text-white/70">
                  <Maximize2 size={12} />
                  <span>Agrandir</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {activeImageIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveImageIndex(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveImageIndex(null)}
              className="absolute top-5 right-5 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-2.5 rounded-full transition-colors z-10"
              aria-label="Fermer"
            >
              <X size={24} />
            </button>

            {/* Prev Button */}
            <button
              onClick={handlePrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white bg-white/10 hover:bg-white/25 p-3 rounded-full transition-all z-10 hidden sm:flex items-center justify-center"
              aria-label="Précédent"
            >
              <ChevronLeft size={28} />
            </button>

            {/* Main Modal Image Container */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl max-h-[85vh] rounded-3xl overflow-hidden shadow-2xl bg-babjus-dark border border-white/10 flex flex-col"
            >
              <img
                src={galleryItems[activeImageIndex].image}
                alt={
                  language === 'ar'
                    ? galleryItems[activeImageIndex].titleAr
                    : galleryItems[activeImageIndex].titleFr
                }
                className="w-full max-h-[70vh] object-contain"
              />

              <div className="p-4 bg-babjus-dark/95 border-t border-white/10 flex items-center justify-between text-white">
                <div>
                  <span className="text-xs uppercase font-extrabold text-babjus-yellow">
                    {language === 'ar'
                      ? galleryItems[activeImageIndex].categoryAr
                      : galleryItems[activeImageIndex].categoryFr}
                  </span>
                  <h4 className="text-base font-bold">
                    {language === 'ar'
                      ? galleryItems[activeImageIndex].titleAr
                      : galleryItems[activeImageIndex].titleFr}
                  </h4>
                </div>
                <span className="text-xs text-white/60 font-medium">
                  {activeImageIndex + 1} / {galleryItems.length}
                </span>
              </div>
            </motion.div>

            {/* Next Button */}
            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white bg-white/10 hover:bg-white/25 p-3 rounded-full transition-all z-10 hidden sm:flex items-center justify-center"
              aria-label="Suivant"
            >
              <ChevronRight size={28} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
