import React from 'react';
import { ArrowRight, ArrowLeft, ShoppingBag, Utensils } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface FinalCTAProps {
  onOrderNow: () => void;
  onExploreMenu: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOrderNow, onExploreMenu }) => {
  const { t, isRtl } = useLanguage();

  return (
    <section className="relative py-20 bg-babjus-dark text-white overflow-hidden">
      {/* Glow / Background accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-babjus-forest/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 right-10 w-72 h-72 bg-babjus-yellow/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <span className="font-script text-3xl sm:text-4xl text-babjus-yellow block">
          {t.hero.tagline}
        </span>

        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
          {t.finalCta.title}
        </h2>

        <p className="text-lg sm:text-xl text-white/80 font-medium max-w-2xl mx-auto">
          {t.finalCta.subtitle}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <button
            onClick={onOrderNow}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-babjus-yellow hover:bg-babjus-yellowHover text-babjus-dark font-black text-base px-8 py-4 rounded-full shadow-lg hover:shadow-yellow-glow transition-all duration-300 transform active:scale-95 group"
          >
            <ShoppingBag size={20} />
            <span>{t.finalCta.ctaOrder.replace('→', '').replace('←', '').trim()}</span>
            {isRtl ? (
              <ArrowLeft size={18} className="group-hover:-translate-x-1.5 transition-transform" />
            ) : (
              <ArrowRight size={18} className="group-hover:translate-x-1.5 transition-transform" />
            )}
          </button>

          <button
            onClick={onExploreMenu}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold text-base px-7 py-4 rounded-full border border-white/15 transition-all duration-300"
          >
            <Utensils size={18} />
            <span>{t.finalCta.ctaMenu}</span>
          </button>
        </div>
      </div>
    </section>
  );
};
