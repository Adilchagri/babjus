import React, { useState, useEffect } from 'react';
import { X, Plus, Minus, ShoppingBag, Check } from 'lucide-react';
import type { Product, ProductVariant } from '../data/products';
import { useLanguage } from '../context/LanguageContext';
import { useCart } from '../context/CartContext';
import { motion, AnimatePresence } from 'framer-motion';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  const { language, t } = useLanguage();
  const { addToCart } = useCart();

  const [selectedVariant, setSelectedVariant] = useState<ProductVariant | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [instructions, setInstructions] = useState('');
  const [isAdded, setIsAdded] = useState(false);

  useEffect(() => {
    if (product) {
      if (product.variants && product.variants.length > 0) {
        setSelectedVariant(product.variants[0]);
      } else {
        setSelectedVariant(null);
      }
      setQuantity(1);
      setInstructions('');
      setIsAdded(false);
    }
  }, [product]);

  if (!product) return null;

  const currentPrice = selectedVariant ? selectedVariant.price : product.price;
  const totalPrice = currentPrice * quantity;
  const title = language === 'ar' ? product.nameAr : product.nameFr;

  const handleAddToCart = () => {
    addToCart(product, selectedVariant, quantity, instructions);
    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
      onClose();
    }, 600);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/75 backdrop-blur-sm"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', duration: 0.4 }}
          className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl overflow-hidden z-10 max-h-[90vh] flex flex-col"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center transition-colors shadow-md"
            aria-label="Fermer"
          >
            <X size={20} />
          </button>

          {/* Top Image Container */}
          <div className="relative aspect-[16/9] w-full overflow-hidden bg-neutral-900 flex-shrink-0">
            <img
              src={product.image || '/assets/hero_pizza.jpg'}
              alt={title}
              className="w-full h-full object-cover"
            />
            {product.badge && (
              <div className="absolute bottom-4 left-4 z-10">
                <span
                  className={`text-xs font-black uppercase px-3 py-1 rounded-full shadow-md ${
                    product.badgeColor === 'green'
                      ? 'bg-green-600 text-white'
                      : 'bg-babjus-yellow text-babjus-dark'
                  }`}
                >
                  {product.badge}
                </span>
              </div>
            )}
          </div>

          {/* Scrollable Modal Body */}
          <div className="p-6 overflow-y-auto space-y-6 flex-grow">
            {/* Header / Title & Price */}
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-2xl font-black text-neutral-900 leading-tight">
                  {title}
                </h3>
                {language === 'ar' && product.nameFr && (
                  <p className="text-xs text-neutral-500 font-semibold mt-0.5">{product.nameFr}</p>
                )}
                {language === 'fr' && product.nameAr && (
                  <p className="text-xs text-neutral-500 font-semibold mt-0.5">{product.nameAr}</p>
                )}
              </div>

              <div className="text-right flex-shrink-0">
                <span className="text-2xl font-black text-neutral-900">
                  {currentPrice} <span className="text-xs font-bold text-neutral-500">MAD</span>
                </span>
                {product.originalPrice && product.originalPrice > currentPrice && (
                  <div className="text-xs font-bold text-neutral-400 line-through">
                    {product.originalPrice} MAD
                  </div>
                )}
              </div>
            </div>

            {/* Description */}
            {product.description && (
              <div className="bg-neutral-50 rounded-2xl p-4 border border-neutral-100">
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-medium">
                  {product.description}
                </p>
              </div>
            )}

            {/* Variants / Sizes Selection */}
            {product.variants && product.variants.length > 0 && (
              <div className="space-y-3">
                <label className="text-xs font-black uppercase tracking-wider text-neutral-600 block">
                  {t.productModal.size}
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {product.variants.map((v) => {
                    const isSelected = selectedVariant?.id === v.id;
                    return (
                      <button
                        key={v.id}
                        type="button"
                        onClick={() => setSelectedVariant(v)}
                        className={`p-3 rounded-2xl border-2 text-left transition-all flex items-center justify-between ${
                          isSelected
                            ? 'border-babjus-yellow bg-babjus-yellow/10 text-neutral-900 font-bold shadow-sm'
                            : 'border-neutral-200 hover:border-neutral-300 text-neutral-700'
                        }`}
                      >
                        <span className="text-xs sm:text-sm font-bold">{v.name}</span>
                        <span className="text-xs font-black text-neutral-900">{v.price} MAD</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Special Instructions */}
            <div className="space-y-2">
              <label className="text-xs font-black uppercase tracking-wider text-neutral-600 block">
                {t.productModal.specialInstructions}
              </label>
              <textarea
                value={instructions}
                onChange={(e) => setInstructions(e.target.value)}
                placeholder={t.productModal.specialInstructionsPlaceholder}
                rows={2}
                className="w-full text-xs sm:text-sm p-3 rounded-2xl border border-neutral-200 focus:border-babjus-yellow focus:ring-2 focus:ring-babjus-yellow/20 outline-none resize-none"
              />
            </div>
          </div>

          {/* Modal Footer (Quantity & Add Button) */}
          <div className="p-4 sm:p-6 bg-neutral-50 border-t border-neutral-100 flex items-center justify-between gap-4">
            {/* Quantity Stepper */}
            <div className="flex items-center gap-3 bg-white border border-neutral-200 rounded-full px-3 py-1.5 shadow-sm">
              <button
                type="button"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                disabled={quantity <= 1}
                className="w-7 h-7 rounded-full text-neutral-600 hover:text-neutral-900 disabled:opacity-30 flex items-center justify-center transition-colors"
              >
                <Minus size={15} />
              </button>
              <span className="text-sm font-black w-6 text-center">{quantity}</span>
              <button
                type="button"
                onClick={() => setQuantity(quantity + 1)}
                className="w-7 h-7 rounded-full text-neutral-600 hover:text-neutral-900 flex items-center justify-center transition-colors"
              >
                <Plus size={15} />
              </button>
            </div>

            {/* Add CTA */}
            <button
              onClick={handleAddToCart}
              className={`flex-grow flex items-center justify-center gap-2 py-3.5 px-6 rounded-full font-black text-sm shadow-md transition-all duration-300 ${
                isAdded
                  ? 'bg-green-600 text-white'
                  : 'bg-babjus-yellow hover:bg-babjus-yellowHover text-babjus-dark hover:shadow-yellow-glow active:scale-95'
              }`}
            >
              {isAdded ? (
                <>
                  <Check size={18} />
                  <span>{language === 'ar' ? 'تمت الإضافة !' : 'Ajouté !'}</span>
                </>
              ) : (
                <>
                  <ShoppingBag size={18} />
                  <span>
                    {t.productModal.addToCart} • {totalPrice} MAD
                  </span>
                </>
              )}
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
