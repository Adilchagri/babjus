import React from 'react';
import type { Category } from '../data/products';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';

interface CategoryNavProps {
  categories: Category[];
  selectedCategory: string | null;
  onSelectCategory: (categoryId: string) => void;
}

export const CategoryNav: React.FC<CategoryNavProps> = ({
  categories,
  selectedCategory,
  onSelectCategory,
}) => {
  const { language } = useLanguage();

  return (
    <div className="relative z-20 -mt-3 sm:mt-0 lg:-mt-10 w-full px-0 sm:px-6 lg:px-8">
      <div className="bg-white/95 backdrop-blur-md rounded-t-[1.75rem] sm:rounded-3xl shadow-xl border border-neutral-100 px-3 py-3 sm:p-5">
        <div className="flex items-start gap-3 overflow-x-auto no-scrollbar py-1 px-1 scroll-smooth sm:justify-between sm:gap-4">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat.key;
            const categoryName = language === 'ar' ? cat.nameAr : cat.nameFr;

            return (
              <button
                key={cat.key}
                onClick={() => onSelectCategory(cat.key)}
                className={`flex flex-col items-center flex-shrink-0 min-w-[68px] sm:flex-1 sm:min-w-0 group transition-transform duration-200 focus:outline-none ${
                  isSelected ? 'scale-105' : 'hover:scale-105 opacity-80 hover:opacity-100'
                }`}
              >
                {/* Circular Dish Image */}
                <div
                    className={`relative w-14 h-14 sm:w-20 sm:h-20 rounded-2xl sm:rounded-full overflow-hidden p-1 transition-all duration-300 ${
                    isSelected
                      ? 'ring-4 ring-babjus-yellow shadow-lg scale-105'
                      : 'ring-2 ring-neutral-200 group-hover:ring-babjus-yellow/60'
                  }`}
                >
                  <img
                    src={cat.categoryImage || cat.image || '/assets/hero_pizza.jpg'}
                    alt={categoryName}
                    className="w-full h-full object-cover rounded-xl sm:rounded-full transform group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  {isSelected && (
                    <div className="absolute inset-0 bg-babjus-yellow/15 rounded-full" />
                  )}
                </div>

                {/* Category Label */}
                <span
                  className={`mt-1.5 text-[10px] sm:text-sm font-extrabold tracking-wide uppercase whitespace-nowrap transition-colors ${
                    isSelected
                      ? 'text-babjus-dark font-black'
                      : 'text-neutral-600 group-hover:text-neutral-900'
                  }`}
                >
                  {categoryName}
                </span>

                {/* Active Underline Pill */}
                {isSelected && (
                  <motion.div
                    layoutId="categoryActiveIndicator"
                    className="w-8 h-1 bg-babjus-yellow rounded-full mt-1"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
