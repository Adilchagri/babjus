import { X, MapPin, Phone, Clock, Heart, Sparkles, Utensils } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/products';
import { useLanguage } from '../context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
  onExploreMenu: () => void;
}

export const AboutModal: React.FC<AboutModalProps> = ({
  isOpen,
  onClose,
  onExploreMenu,
}) => {
  const { language, t } = useLanguage();

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-2xl bg-babjus-dark text-white rounded-3xl shadow-2xl overflow-hidden z-10 max-h-[90vh] flex flex-col border border-white/10"
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
            aria-label="Fermer"
          >
            <X size={20} />
          </button>

          {/* Top Hero image */}
          <div className="relative h-48 sm:h-60 w-full overflow-hidden flex-shrink-0">
            <img
              src="/assets/restaurant_storefront.jpg"
              alt="Babjus El Jadida"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-babjus-dark via-babjus-dark/40 to-transparent" />
            <div className="absolute bottom-4 left-6">
              <span className="font-script text-2xl text-babjus-yellow block">
                {t.hero.tagline}
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-white">
                Babjus Restaurant
              </h2>
            </div>
          </div>

          {/* Scrollable Details */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-6 flex-grow">
            <p className="text-sm sm:text-base text-white/80 leading-relaxed">
              {language === 'ar'
                ? 'مرحباً بكم في مطعم باب جوس، وجهتكم المفضلة في الجديدة لتذوق أشهى المأكولات المحضرة بكل شغف. من البيتزا الإيطالية المقرمشة، والباستيشيو الساخن الغني بالجبن، والبانزا المميزة، إلى أطباق الإيمانسي والعصائر الطبيعية الطازجة، نحرص على تقديم تجربة لا تُنسى في أجواء دافئة وعائلية.'
                : "Bienvenue à Babjus Restaurant, où chaque repas est une expérience inoubliable ! Situé au cœur d'El Jadida, Babjus est l'adresse de référence pour savourer des pizzas croustillantes, des pasticcios généreux, des pinsas authentiques, des émincés savoureux et des jus de fruits frais préparés à la commande."}
            </p>

            {/* 3 Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-3.5 bg-white/5 rounded-2xl border border-white/10">
                <Utensils size={18} className="text-babjus-yellow mb-2" />
                <h4 className="text-xs font-bold text-white">Fraîcheur garantie</h4>
                <p className="text-[11px] text-white/60 mt-1">Ingrédients rigoureusement sélectionnés chaque matin.</p>
              </div>

              <div className="p-3.5 bg-white/5 rounded-2xl border border-white/10">
                <Sparkles size={18} className="text-green-400 mb-2" />
                <h4 className="text-xs font-bold text-white">Recettes maison</h4>
                <p className="text-[11px] text-white/60 mt-1">Pâtes pétries sur place et sauces signatures.</p>
              </div>

              <div className="p-3.5 bg-white/5 rounded-2xl border border-white/10">
                <Heart size={18} className="text-red-400 mb-2" />
                <h4 className="text-xs font-bold text-white">Accueil chaleureux</h4>
                <p className="text-[11px] text-white/60 mt-1">Une ambiance conviviale pour toute la famille.</p>
              </div>
            </div>

            {/* Practical Info */}
            <div className="space-y-3 pt-4 border-t border-white/10">
              <div className="flex items-center gap-3 text-xs sm:text-sm text-white/80">
                <MapPin size={18} className="text-babjus-yellow flex-shrink-0" />
                <span>{RESTAURANT_INFO.address}</span>
              </div>
              <div className="flex items-center gap-3 text-xs sm:text-sm text-white/80">
                <Clock size={18} className="text-green-400 flex-shrink-0" />
                <span>{RESTAURANT_INFO.openingHoursFr}</span>
              </div>
              <div className="flex items-center gap-3 text-xs sm:text-sm text-white/80">
                <Phone size={18} className="text-amber-400 flex-shrink-0" />
                <span>{RESTAURANT_INFO.phoneDisplay} (WhatsApp & Téléphone)</span>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-2">
              <button
                onClick={() => {
                  onClose();
                  onExploreMenu();
                }}
                className="w-full bg-babjus-yellow hover:bg-babjus-yellowHover text-babjus-dark font-black text-sm py-3.5 rounded-full shadow-md transition-all text-center block"
              >
                {t.hero.primaryCta}
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
