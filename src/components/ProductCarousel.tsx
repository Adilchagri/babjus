import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight, ArrowLeft } from 'lucide-react';
import type { Product } from '../data/products';
import { ProductCard } from './ProductCard';
import { useLanguage } from '../context/LanguageContext';

interface ProductCarouselProps {
  products: Product[];
  onOpenModal: (product: Product) => void;
  onViewAll: () => void;
}

export const ProductCarousel: React.FC<ProductCarouselProps> = ({
  products,
  onOpenModal,
  onViewAll,
}) => {
  const { t, isRtl } = useLanguage();
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const scrollAmount = container.clientWidth * 0.75;
    const factor = direction === 'left' ? -1 : 1;
    container.scrollBy({ left: scrollAmount * factor, behavior: 'smooth' });
  };

  return (
    <section className="py-14 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header with Title, Accent Bar, and View All CTA */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <div className="flex items-center gap-3">
            <h2 className="text-3xl sm:text-4xl font-black text-neutral-900 tracking-tight">
              {t.featured.title}
            </h2>
            {/* Signature Yellow Accent Bar */}
            <div className="w-12 sm:w-16 h-1.5 bg-babjus-yellow rounded-full" />
          </div>
          <p className="text-sm sm:text-base text-neutral-500 mt-2 font-medium">
            {t.featured.subtitle}
          </p>
        </div>

        <div className="flex items-center gap-3 self-end md:self-auto">
          {/* View full menu link */}
          <button
            onClick={onViewAll}
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-neutral-800 hover:text-amber-600 transition-colors py-1 group mr-2"
          >
            <span>{t.featured.viewFullMenu.replace('→', '').replace('←', '').trim()}</span>
            {isRtl ? (
              <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            ) : (
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            )}
          </button>

          {/* Navigational Arrows */}
          <button
            onClick={() => handleScroll(isRtl ? 'right' : 'left')}
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-neutral-200 bg-white hover:bg-neutral-50 flex items-center justify-center text-neutral-700 shadow-sm hover:shadow transition-all"
            aria-label="Previous dishes"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() => handleScroll(isRtl ? 'left' : 'right')}
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-neutral-200 bg-white hover:bg-neutral-50 flex items-center justify-center text-neutral-700 shadow-sm hover:shadow transition-all"
            aria-label="Next dishes"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* Product Cards Carousel */}
      <div
        ref={scrollContainerRef}
        className="flex gap-5 sm:gap-6 overflow-x-auto no-scrollbar pb-6 pt-2 px-1 scroll-smooth snap-x snap-mandatory"
      >
        {products.map((product) => (
          <div
            key={product.id}
            className="w-[260px] sm:w-[280px] lg:w-[300px] flex-shrink-0 snap-start"
          >
            <ProductCard product={product} onOpenModal={onOpenModal} />
          </div>
        ))}
      </div>
    </section>
  );
};
