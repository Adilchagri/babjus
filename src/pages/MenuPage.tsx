import React, { useState } from 'react';
import { CATEGORIES, type Product } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { useLanguage } from '../context/LanguageContext';
import { Search, ArrowLeft, ArrowRight } from 'lucide-react';

interface MenuPageProps {
  onOpenModal: (product: Product) => void;
  onGoHome: () => void;
}

export const MenuPage: React.FC<MenuPageProps> = ({ onOpenModal, onGoHome }) => {
  const { language, isRtl } = useLanguage();
  const [activeCategoryKey, setActiveCategoryKey] = useState<string>('ALL');
  const [searchFilter, setSearchFilter] = useState('');

  const displayCategories = activeCategoryKey === 'ALL'
    ? CATEGORIES
    : CATEGORIES.filter(c => c.key === activeCategoryKey);

  return (
    <div className="pt-24 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Back to Home Button & Page Header */}
      <div className="mb-8">
        <button
          onClick={onGoHome}
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-neutral-600 hover:text-neutral-900 mb-4 transition-colors"
        >
          {isRtl ? <ArrowRight size={16} /> : <ArrowLeft size={16} />}
          <span>{language === 'ar' ? 'العودة إلى الرئيسية' : "Retour à l'accueil"}</span>
        </button>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="font-script text-2xl sm:text-3xl text-amber-600 block">
              {language === 'ar' ? 'قائمة طعام باب جوس' : 'Carte & Spécialités'}
            </span>
            <h1 className="text-4xl sm:text-5xl font-black text-neutral-900 tracking-tight mt-1">
              {language === 'ar' ? 'قائمة الطعام الكاملة' : 'Notre Menu'}
            </h1>
          </div>

          {/* Quick Filter Search Bar */}
          <div className="relative w-full md:w-72">
            <Search size={17} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-400" />
            <input
              type="text"
              value={searchFilter}
              onChange={(e) => setSearchFilter(e.target.value)}
              placeholder={language === 'ar' ? 'تصفية القائمة...' : 'Filtrer un plat...'}
              className="w-full text-xs sm:text-sm pl-10 pr-4 py-2.5 rounded-full border border-neutral-200 bg-white focus:border-babjus-yellow outline-none shadow-sm"
            />
          </div>
        </div>
      </div>

      {/* Category Pills Bar */}
      <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-4 pt-1 mb-10 border-b border-neutral-200">
        <button
          onClick={() => setActiveCategoryKey('ALL')}
          className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-black whitespace-nowrap transition-all ${
            activeCategoryKey === 'ALL'
              ? 'bg-babjus-dark text-white shadow-md'
              : 'bg-white text-neutral-600 hover:bg-neutral-100 border border-neutral-200'
          }`}
        >
          {language === 'ar' ? 'جميع الأطباق' : 'Tous les plats'}
        </button>

        {CATEGORIES.map((cat) => {
          const isSelected = activeCategoryKey === cat.key;
          const label = language === 'ar' ? cat.nameAr : cat.nameFr;

          return (
            <button
              key={cat.key}
              onClick={() => setActiveCategoryKey(cat.key)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-black whitespace-nowrap transition-all ${
                isSelected
                  ? 'bg-babjus-yellow text-babjus-dark shadow-md'
                  : 'bg-white text-neutral-600 hover:bg-neutral-100 border border-neutral-200'
              }`}
            >
              {label} ({cat.products.length})
            </button>
          );
        })}
      </div>

      {/* Render Each Category Section */}
      <div className="space-y-16">
        {displayCategories.map((category) => {
          const categoryTitle = language === 'ar' ? category.nameAr : category.nameFr;
          
          // Apply search filter
          const matchingProducts = category.products.filter((p) => {
            if (!searchFilter.trim()) return true;
            const q = searchFilter.toLowerCase();
            return (
              p.nameFr.toLowerCase().includes(q) ||
              p.nameAr.toLowerCase().includes(q) ||
              p.description.toLowerCase().includes(q)
            );
          });

          if (matchingProducts.length === 0) return null;

          return (
            <div key={category.id} id={category.key} className="scroll-mt-28">
              {/* Category Header */}
              <div className="flex items-baseline gap-3 mb-6 border-b border-neutral-200 pb-3">
                <h2 className="text-2xl sm:text-3xl font-black text-neutral-900 tracking-tight uppercase">
                  {categoryTitle}
                </h2>
                <span className="text-xs font-bold text-neutral-500">
                  ({matchingProducts.length} {language === 'ar' ? 'أطباق' : 'plats'})
                </span>
                <div className="flex-grow" />
                <div className="w-8 h-1 bg-babjus-yellow rounded-full" />
              </div>

              {/* Product Grid: 2 columns on phone (2x2), 3 tablet, 4 desktop */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-5 lg:gap-6">
                {matchingProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onOpenModal={onOpenModal}
                  />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
