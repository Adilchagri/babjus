import React from 'react';
import { ArrowRight, ArrowLeft, ChevronDown, Phone } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { RESTAURANT_INFO } from '../data/products';
import { motion } from 'framer-motion';
import { Logo } from './Logo';

interface HeroProps {
  onExploreMenu: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreMenu }) => {
  const { t, isRtl } = useLanguage();

  const socialLinks = [
    {
      name: 'Instagram',
      url: RESTAURANT_INFO.socials.instagram,
      color: 'hover:text-pink-400 hover:border-pink-500/50 hover:bg-pink-500/10',
      icon: (
        <svg className="w-4 h-4 sm:w-4.5 sm:h-4.5 fill-current" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      )
    },
    {
      name: 'Facebook',
      url: RESTAURANT_INFO.socials.facebook,
      color: 'hover:text-blue-400 hover:border-blue-500/50 hover:bg-blue-500/10',
      icon: (
        <svg className="w-4 h-4 sm:w-4.5 sm:h-4.5 fill-current" viewBox="0 0 24 24">
          <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.688 5H18V0h-3.808C10.597 0 9 1.583 9 4.615V8z"/>
        </svg>
      )
    },
    {
      name: 'WhatsApp',
      url: `https://wa.me/${RESTAURANT_INFO.whatsapp}`,
      color: 'hover:text-green-400 hover:border-green-500/50 hover:bg-green-500/10',
      icon: (
        <svg className="w-4 h-4 sm:w-4.5 sm:h-4.5 fill-current" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
        </svg>
      )
    }
  ];

  return (
    <section className="relative h-[84svh] min-h-[570px] max-h-[720px] sm:h-[92svh] sm:min-h-[680px] sm:max-h-none lg:h-auto lg:min-h-[88vh] lg:max-h-none bg-babjus-dark text-white flex flex-col justify-between pt-20 sm:pt-24 lg:pt-28 pb-8 sm:pb-6 lg:pb-16 overflow-hidden">
      {/* Background Food & Atmosphere Image & Overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/hero_bg_clean.jpg"
          alt="Babjus Restaurant Atmosphere"
          className="w-full h-full object-cover object-[72%_center] lg:object-center filter brightness-[0.85] contrast-[1.05]"
        />
        {/* Multilayer Gradients for text readability while revealing the warm restaurant scene */}
        <div
          className={`absolute inset-0 bg-gradient-to-r ${
            isRtl
              ? 'from-transparent via-babjus-dark/40 to-babjus-dark/85'
              : 'from-babjus-dark/90 via-babjus-dark/50 to-transparent'
          }`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-babjus-dark via-transparent to-babjus-dark/70" />
        {/* Additional mobile vignette so typography stays crystal clear */}
        <div className="absolute inset-0 bg-babjus-dark/30 lg:bg-transparent" />
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-grow flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="max-w-2xl lg:max-w-3xl flex flex-col justify-center space-y-3 sm:space-y-4 lg:space-y-6 pt-6 sm:pt-0"
        >
          {/* Handwritten Phrase */}
          <div className="inline-block">
            <span className="font-script text-3xl sm:text-3xl lg:text-4xl text-white/90 tracking-wide drop-shadow-md">
              {t.hero.tagline}
            </span>
          </div>

          {/* Official wordmark: kept as one component so the hat and lettering never overlap. */}
          <div className="space-y-1 sm:space-y-2">
            <h1 className="sr-only">Babjus Restaurant</h1>
            <Logo variant="dark" size="hero" />

            <p className="max-w-sm text-lg sm:text-3xl lg:text-4xl font-extrabold text-white/95 leading-tight tracking-tight drop-shadow-md">
              {t.hero.subtitle}
            </p>
          </div>

          {/* Food Badges / Atmosphere Pills */}
          <div className="hidden sm:flex flex-wrap items-center gap-2 pt-0.5 sm:pt-1">
            <span className="px-3 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-[11px] sm:text-xs lg:text-sm font-semibold text-white/95 shadow-md">
              🍕 Pizzas au feu de bois
            </span>
            <span className="px-3 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-[11px] sm:text-xs lg:text-sm font-semibold text-white/95 shadow-md">
              🥪 Tacos & Burgers
            </span>
            <span className="px-3 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-[11px] sm:text-xs lg:text-sm font-semibold text-white/95 shadow-md">
              🥗 Ingrédients Frais
            </span>
          </div>

          {/* Social Media Icons with Links (Instagram, Facebook, WhatsApp) */}
          <div className="hidden sm:block pt-1 sm:pt-2">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-white/80">
                {isRtl ? 'تابعونا واطلبوا مباشرة :' : 'Suivez-nous & Commandez :'}
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-2 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-full bg-white/15 border border-white/25 text-white text-xs sm:text-sm font-bold backdrop-blur-md shadow-md transition-all duration-200 transform hover:scale-105 active:scale-95 group ${s.color}`}
                  aria-label={s.name}
                >
                  <span className="flex-shrink-0 transition-transform group-hover:scale-110">
                    {s.icon}
                  </span>
                  <span className="font-extrabold">{s.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Primary CTA & Direct Call */}
          <div className="pt-2 sm:pt-4 flex flex-wrap items-center gap-3 sm:gap-4">
            <button
              onClick={onExploreMenu}
              className="inline-flex items-center gap-2.5 sm:gap-3 bg-babjus-yellow hover:bg-babjus-yellowHover text-babjus-dark font-black text-sm sm:text-base lg:text-lg px-6 sm:px-9 py-3.5 sm:py-4 rounded-full shadow-2xl hover:shadow-yellow-glow transition-all duration-300 transform active:scale-95 group"
            >
              <span>{t.hero.primaryCta.replace('→', '').replace('←', '').trim()}</span>
              {isRtl ? (
                <ArrowLeft size={18} className="group-hover:-translate-x-1.5 transition-transform" />
              ) : (
                <ArrowRight size={18} className="group-hover:translate-x-1.5 transition-transform" />
              )}
            </button>

            <a
              href={`https://wa.me/${RESTAURANT_INFO.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-5 sm:px-6 py-3.5 sm:py-4 rounded-full bg-white/15 hover:bg-white/25 border border-white/25 text-white font-bold text-xs sm:text-sm lg:text-base backdrop-blur-md transition-all transform active:scale-95 shadow-md"
            >
              <Phone size={16} className="text-green-400" />
              <span>{RESTAURANT_INFO.phoneDisplay}</span>
            </a>
          </div>
        </motion.div>
      </div>

      {/* Mobile Indicator to invite scrolling down to menu */}
      <button
        onClick={onExploreMenu}
        className="lg:hidden relative z-10 flex flex-col items-center justify-center pb-0 pt-1 text-white/60 hover:text-babjus-yellow transition-colors animate-bounce cursor-pointer"
        aria-label="Défiler vers le menu"
      >
        <span className="text-[10px] uppercase tracking-widest font-semibold mb-0.5">
          {isRtl ? 'استكشف القائمة' : 'Explorer le menu'}
        </span>
        <ChevronDown size={18} />
      </button>
    </section>
  );
};
