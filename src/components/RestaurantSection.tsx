import React from 'react';
import { Users, UtensilsCrossed, MapPin, ArrowRight, ArrowLeft, ShoppingBag, CreditCard, Bike } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface RestaurantSectionProps {
  onOpenCart: () => void;
  onOpenAbout: () => void;
}

export const RestaurantSection: React.FC<RestaurantSectionProps> = ({
  onOpenCart,
  onOpenAbout,
}) => {
  const { t, isRtl } = useLanguage();

  return (
    <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Left 7 Columns: Physical Restaurant Storefront + Storytelling & Metrics */}
        <div className="lg:col-span-7 bg-babjus-forest text-white rounded-3xl overflow-hidden shadow-xl flex flex-col justify-between border border-white/10">
          {/* Top Half: Real Physical Storefront Image */}
          <div className="relative h-64 sm:h-80 w-full overflow-hidden">
            <img
              src="/assets/restaurant_storefront.jpg"
              alt="Babjus Restaurant El Jadida"
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-babjus-forest via-transparent to-black/30" />
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-semibold text-white/80">
              <span className="bg-black/50 backdrop-blur-md px-3 py-1 rounded-full border border-white/15">
                📍 Av. Allal Fassi, El Jadida
              </span>
            </div>
          </div>

          {/* Bottom Half: Storytelling & Key Metrics */}
          <div className="p-6 sm:p-8 space-y-6">
            <div>
              <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-white leading-tight">
                {t.experience.title}
              </h3>
              <p className="text-white/80 text-sm sm:text-base mt-3 leading-relaxed font-normal">
                {t.experience.description}
              </p>

              <div className="mt-5">
                <button
                  onClick={onOpenAbout}
                  className="inline-flex items-center gap-2 bg-babjus-yellow hover:bg-babjus-yellowHover text-babjus-dark font-extrabold px-6 py-2.5 rounded-full text-xs sm:text-sm shadow-md transition-all group"
                >
                  <span>{t.experience.cta.replace('→', '').replace('←', '').trim()}</span>
                  {isRtl ? (
                    <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                  ) : (
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  )}
                </button>
              </div>
            </div>

            {/* 3 Metric Badges */}
            <div className="grid grid-cols-3 gap-3 pt-4 border-t border-white/10">
              <div className="flex flex-col items-center text-center p-2 rounded-xl bg-white/5">
                <Users size={20} className="text-babjus-yellow mb-1" />
                <span className="font-black text-white text-base sm:text-lg leading-tight">
                  {t.experience.stat1Value}
                </span>
                <span className="text-[11px] text-white/70 font-medium">
                  {t.experience.stat1Label}
                </span>
              </div>

              <div className="flex flex-col items-center text-center p-2 rounded-xl bg-white/5">
                <UtensilsCrossed size={20} className="text-green-400 mb-1" />
                <span className="font-black text-white text-base sm:text-lg leading-tight">
                  {t.experience.stat2Value}
                </span>
                <span className="text-[11px] text-white/70 font-medium">
                  {t.experience.stat2Label}
                </span>
              </div>

              <div className="flex flex-col items-center text-center p-2 rounded-xl bg-white/5">
                <MapPin size={20} className="text-amber-400 mb-1" />
                <span className="font-black text-white text-base sm:text-lg leading-tight">
                  {t.experience.stat3Value}
                </span>
                <span className="text-[11px] text-white/70 font-medium">
                  {t.experience.stat3Label}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right 5 Columns: 3-Step Ordering Process (High Conversion) */}
        <div className="lg:col-span-5 bg-gradient-to-br from-babjus-forest to-babjus-dark text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-white/10 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                {t.process.title}
              </h3>
            </div>

            {/* Steps list */}
            <div className="space-y-5">
              {/* Step 01 */}
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-babjus-yellow/40 transition-colors">
                <div className="w-10 h-10 rounded-2xl bg-babjus-yellow/20 text-babjus-yellow flex items-center justify-center font-black text-sm flex-shrink-0">
                  <ShoppingBag size={18} />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-black text-babjus-yellow">{t.process.step1Num}</span>
                    <h4 className="font-extrabold text-white text-sm sm:text-base">{t.process.step1Title}</h4>
                  </div>
                  <p className="text-xs text-white/70 mt-0.5">{t.process.step1Desc}</p>
                </div>
              </div>

              {/* Step 02 */}
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-babjus-yellow/40 transition-colors">
                <div className="w-10 h-10 rounded-2xl bg-babjus-yellow/20 text-babjus-yellow flex items-center justify-center font-black text-sm flex-shrink-0">
                  <CreditCard size={18} />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-black text-babjus-yellow">{t.process.step2Num}</span>
                    <h4 className="font-extrabold text-white text-sm sm:text-base">{t.process.step2Title}</h4>
                  </div>
                  <p className="text-xs text-white/70 mt-0.5">{t.process.step2Desc}</p>
                </div>
              </div>

              {/* Step 03 */}
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-babjus-yellow/40 transition-colors">
                <div className="w-10 h-10 rounded-2xl bg-babjus-yellow/20 text-babjus-yellow flex items-center justify-center font-black text-sm flex-shrink-0">
                  <Bike size={18} />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-black text-babjus-yellow">{t.process.step3Num}</span>
                    <h4 className="font-extrabold text-white text-sm sm:text-base">{t.process.step3Title}</h4>
                  </div>
                  <p className="text-xs text-white/70 mt-0.5">{t.process.step3Desc}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Conversion CTA */}
          <div className="mt-8">
            <button
              onClick={onOpenCart}
              className="w-full flex items-center justify-center gap-3 bg-babjus-yellow hover:bg-babjus-yellowHover text-babjus-dark font-black text-base py-4 rounded-full shadow-lg hover:shadow-yellow-glow transition-all duration-300 transform active:scale-95 group"
            >
              <span>{t.process.cta.replace('→', '').replace('←', '').trim()}</span>
              {isRtl ? (
                <ArrowLeft size={18} className="group-hover:-translate-x-1.5 transition-transform" />
              ) : (
                <ArrowRight size={18} className="group-hover:translate-x-1.5 transition-transform" />
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
