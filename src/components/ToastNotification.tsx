import React from 'react';
import { useCart } from '../context/CartContext';
import { useLanguage } from '../context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, ShoppingBag } from 'lucide-react';

export const ToastNotification: React.FC = () => {
  const { toast, setToast, setIsCartOpen } = useCart();
  const { t, isRtl } = useLanguage();

  return (
    <AnimatePresence>
      {toast && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          transition={{ type: 'spring', damping: 25, stiffness: 350 }}
          className={`fixed bottom-6 ${isRtl ? 'left-6' : 'right-6'} z-50 flex items-center gap-3 bg-babjus-dark text-white px-5 py-3.5 rounded-2xl shadow-2xl border border-white/15 max-w-md cursor-pointer`}
          onClick={() => {
            setIsCartOpen(true);
            setToast(null);
          }}
        >
          <div className="w-8 h-8 rounded-full bg-babjus-yellow text-babjus-dark flex items-center justify-center flex-shrink-0">
            <CheckCircle2 size={18} strokeWidth={2.5} />
          </div>

          <div className="min-w-0 flex-grow">
            <p className="text-xs sm:text-sm font-bold truncate">
              {toast}
            </p>
            <p className="text-[11px] text-babjus-yellow font-semibold">
              {t.toast.addedToCart} • Voir le panier
            </p>
          </div>

          <ShoppingBag size={18} className="text-white/60 hover:text-white flex-shrink-0" />
        </motion.div>
      )}
    </AnimatePresence>
  );
};
