import React from 'react';
import { Plus } from 'lucide-react';
import type { Product } from '../data/products';
import { useLanguage } from '../context/LanguageContext';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  product: Product;
  onOpenModal: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onOpenModal,
}) => {
  const { language } = useLanguage();
  const { addToCart } = useCart();

  const title = language === 'ar' ? product.nameAr : product.nameFr;
  const description = product.description;

  const handleAddClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (product.hasVariants && product.variants.length > 1) {
      // If product has multiple sizes/variants, open modal so user can pick
      onOpenModal(product);
    } else {
      addToCart(product, product.variants[0] || null, 1);
    }
  };

  return (
    <div
      onClick={() => onOpenModal(product)}
      className="group bg-white rounded-2xl sm:rounded-3xl overflow-hidden border border-neutral-100/80 shadow-card hover:shadow-card-hover transition-all duration-300 transform hover:-translate-y-1.5 cursor-pointer flex flex-col h-full relative"
    >
      {/* Top Image Container */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-100">
        <img
          src={product.image || '/assets/hero_pizza.jpg'}
          alt={title}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 ease-out"
          loading="lazy"
        />

        {/* Badge Overlay (Top Left) */}
        {product.badge && (
          <div className="absolute top-2 left-2 sm:top-3 sm:left-3 z-10">
            <span
              className={`text-[9px] sm:text-[11px] font-black uppercase tracking-wider px-2 py-0.5 sm:px-3 sm:py-1 rounded-full shadow-md ${
                product.badgeColor === 'green'
                  ? 'bg-green-600 text-white'
                  : 'bg-babjus-yellow text-babjus-dark font-extrabold'
              }`}
            >
              {product.badge}
            </span>
          </div>
        )}
      </div>

      {/* Content Area */}
      <div className="p-2.5 sm:p-5 flex flex-col flex-grow justify-between gap-1.5 sm:gap-3">
        <div>
          <h3 className="font-extrabold text-neutral-900 text-xs sm:text-base lg:text-lg group-hover:text-amber-600 transition-colors line-clamp-1 leading-snug">
            {title}
          </h3>

          {description && (
            <p className="text-[10px] sm:text-xs text-neutral-500 mt-0.5 sm:mt-1 line-clamp-1 sm:line-clamp-2 leading-relaxed">
              {description}
            </p>
          )}
        </div>

        {/* Bottom Price & Circular Add Button */}
        <div className="flex items-center justify-between pt-1.5 sm:pt-2 border-t border-neutral-100 mt-auto">
          <div className="flex items-baseline gap-1 sm:gap-2">
            <span className="text-xs sm:text-lg font-black text-neutral-900">
              {product.price} <span className="text-[10px] sm:text-xs font-bold text-neutral-500">MAD</span>
            </span>

            {product.originalPrice && product.originalPrice > product.price && (
              <span className="text-[10px] sm:text-xs font-semibold text-neutral-400 line-through">
                {product.originalPrice}
              </span>
            )}
          </div>

          {/* Yellow Circular Add Button */}
          <button
            onClick={handleAddClick}
            aria-label={`Ajouter ${title}`}
            className="w-7 h-7 sm:w-10 sm:h-10 rounded-full bg-babjus-yellow hover:bg-babjus-yellowHover text-babjus-dark flex items-center justify-center shadow-md hover:shadow-yellow-glow transform group-hover:scale-105 active:scale-95 transition-all duration-200 flex-shrink-0"
          >
            <Plus size={14} className="sm:w-5 sm:h-5" strokeWidth={2.5} />
          </button>
        </div>
      </div>
    </div>
  );
};
