import React from 'react';
import { Phone, MapPin, Clock } from 'lucide-react';
import { Logo } from './Logo';
import { RESTAURANT_INFO } from '../data/products';
import { useLanguage } from '../context/LanguageContext';

export const Footer: React.FC<{ onNavigate: (tab: string) => void }> = ({ onNavigate }) => {
  const { t } = useLanguage();

  return (
    <footer className="bg-babjus-dark text-white pt-14 pb-8 border-t border-white/10 relative overflow-hidden">
      {/* Background organic leaf texture hint */}
      <div className="absolute right-0 bottom-0 w-80 h-80 bg-babjus-forest/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 items-start pb-12 border-b border-white/10">
          {/* Col 1: Logo & Socials */}
          <div className="space-y-4">
            <div onClick={() => onNavigate('home')}>
              <Logo variant="dark" size="md" />
            </div>

            <p className="text-xs text-white/65 leading-relaxed">
              {t.experience.description}
            </p>

            <div>
              <span className="text-xs font-bold text-white/80 block mb-2">{t.footer.followUs}</span>
              <div className="flex items-center gap-3">
                <a
                  href={RESTAURANT_INFO.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-babjus-yellow hover:text-babjus-dark flex items-center justify-center transition-colors text-white"
                  aria-label="Instagram"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a
                  href={RESTAURANT_INFO.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-babjus-yellow hover:text-babjus-dark flex items-center justify-center transition-colors text-white"
                  aria-label="Facebook"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.688 5H18V0h-3.808C10.597 0 9 1.583 9 4.615V8z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Phone */}
          <div className="flex items-start gap-3">
            <div className="p-3 bg-white/5 rounded-2xl text-babjus-yellow border border-white/10 flex-shrink-0">
              <Phone size={22} />
            </div>
            <div>
              <span className="text-xs text-white/50 block font-medium">{t.footer.phoneLabel}</span>
              <a
                href={`tel:${RESTAURANT_INFO.phoneCall}`}
                className="text-base font-extrabold text-white hover:text-babjus-yellow transition-colors block mt-0.5"
              >
                {RESTAURANT_INFO.phoneDisplay}
              </a>
              <span className="text-[11px] text-white/50 block mt-1">
                WhatsApp & Appels directs
              </span>
            </div>
          </div>

          {/* Col 3: Address & Hours */}
          <div className="space-y-6">
            <div className="flex items-start gap-3">
              <div className="p-3 bg-white/5 rounded-2xl text-amber-400 border border-white/10 flex-shrink-0">
                <MapPin size={22} />
              </div>
              <div>
                <span className="text-xs text-white/50 block font-medium">{t.footer.addressLabel}</span>
                <a
                  href={RESTAURANT_INFO.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-extrabold text-white hover:text-babjus-yellow transition-colors block mt-0.5"
                >
                  {RESTAURANT_INFO.address}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-3 bg-white/5 rounded-2xl text-green-400 border border-white/10 flex-shrink-0">
                <Clock size={22} />
              </div>
              <div>
                <span className="text-xs text-white/50 block font-medium">{t.footer.hoursLabel}</span>
                <span className="text-sm font-extrabold text-white block mt-0.5">
                  {t.footer.openingHours}
                </span>
              </div>
            </div>
          </div>

          {/* Col 4: Handwritten Brand Statement */}
          <div className="flex flex-col items-center justify-center p-6 rounded-3xl bg-white/5 border border-white/10 text-center">
            <span className="font-script text-3xl sm:text-4xl text-babjus-yellow/95 leading-snug">
              {t.footer.goodFoodMood}
            </span>
            <span className="text-xs text-white/60 mt-2 font-medium">
              Babjus Restaurant • El Jadida
            </span>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <p>{t.footer.rights}</p>
          <div className="flex items-center gap-6">
            <button onClick={() => onNavigate('home')} className="hover:text-white transition-colors">
              {t.nav.home}
            </button>
            <button onClick={() => onNavigate('menu')} className="hover:text-white transition-colors">
              {t.nav.menu}
            </button>
            <button onClick={() => onNavigate('about')} className="hover:text-white transition-colors">
              {t.nav.about}
            </button>
            <button onClick={() => onNavigate('contact')} className="hover:text-white transition-colors">
              {t.nav.contact}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
