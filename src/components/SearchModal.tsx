import React, { useState, useMemo } from 'react';
import { Search, X, Plus } from 'lucide-react';
import { ALL_PRODUCTS, type Product } from '../data/products';
import { useLanguage } from '../context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProduct: (product: Product) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectProduct,
}) => {
  const { language } = useLanguage();
  const [query, setQuery] = useState('');

  const filteredProducts = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return ALL_PRODUCTS.filter((p) => {
      const nameFr = p.nameFr.toLowerCase();
      const nameAr = p.nameAr.toLowerCase();
      const desc = p.description.toLowerCase();
      const cat = p.categoryKey.toLowerCase();
      return (
        nameFr.includes(q) ||
        nameAr.includes(q) ||
        desc.includes(q) ||
        cat.includes(q)
      );
    });
  }, [query]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-start justify-center p-4 sm:p-6 md:p-10 pt-16 sm:pt-20">
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
          initial={{ opacity: 0, scale: 0.95, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden z-10 flex flex-col max-h-[80vh]"
        >
          {/* Search Header Input */}
          <div className="p-4 sm:p-5 border-b border-neutral-100 flex items-center gap-3 bg-neutral-50/70">
            <Search size={20} className="text-neutral-400 flex-shrink-0" />
            <input
              type="text"
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={
                language === 'ar'
                  ? 'ابحث عن بيتزا، طاكوس، دجاج، عصير...'
                  : 'Rechercher une pizza, crispy chicken, pasticcio...'
              }
              className="w-full text-base sm:text-lg bg-transparent border-none outline-none font-semibold text-neutral-900 placeholder-neutral-400"
            />
            {query && (
              <button
                onClick={() => setQuery('')}
                className="text-neutral-400 hover:text-neutral-700 p-1 rounded-full"
              >
                <X size={18} />
              </button>
            )}
            <button
              onClick={onClose}
              className="text-xs font-black uppercase text-neutral-500 hover:text-neutral-900 px-2 py-1 rounded-lg border border-neutral-200"
            >
              Échap
            </button>
          </div>

          {/* Search Results Area */}
          <div className="overflow-y-auto p-4 sm:p-6 space-y-3 flex-grow">
            {query.trim() === '' ? (
              <div className="text-center py-10 text-neutral-400 space-y-2">
                <p className="text-sm font-medium">
                  {language === 'ar'
                    ? 'اكتب اسم الوجبة أو المكونات للبحث في قائمة باب جوس'
                    : 'Tapez un nom de plat ou ingrédient pour rechercher'}
                </p>
                <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
                  {['Pizza', 'Crispy', 'Pinsa', 'Pasticcio', 'Tacos', 'Jus'].map((tag) => (
                    <button
                      key={tag}
                      onClick={() => setQuery(tag)}
                      className="text-xs font-bold px-3 py-1 bg-neutral-100 hover:bg-babjus-yellow hover:text-babjus-dark rounded-full transition-colors"
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>
            ) : filteredProducts.length === 0 ? (
              <div className="text-center py-12 text-neutral-400">
                <p className="text-sm font-bold text-neutral-700">
                  {language === 'ar'
                    ? 'لم يتم العثور على أطباق تطابق بحثك'
                    : 'Aucun plat trouvé pour cette recherche.'}
                </p>
                <p className="text-xs text-neutral-500 mt-1">
                  {language === 'ar'
                    ? 'جرب البحث بكلمات أخرى مثل "بيتزا" أو "دجاج"'
                    : 'Essayez un mot clé plus simple (ex: pizza, poulet...)'}
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-2.5">
                {filteredProducts.map((p) => {
                  const title = language === 'ar' ? p.nameAr : p.nameFr;

                  return (
                    <div
                      key={p.id}
                      onClick={() => {
                        onSelectProduct(p);
                        onClose();
                      }}
                      className="flex items-center justify-between gap-3 p-3 rounded-2xl hover:bg-neutral-50 border border-neutral-100 transition-colors cursor-pointer group"
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <img
                          src={p.image || '/assets/hero_pizza.jpg'}
                          alt={title}
                          className="w-12 h-12 rounded-xl object-cover flex-shrink-0"
                        />
                        <div className="min-w-0">
                          <h4 className="text-sm font-bold text-neutral-900 group-hover:text-amber-600 transition-colors truncate">
                            {title}
                          </h4>
                          <span className="text-[11px] font-semibold text-neutral-400 block truncate">
                            {p.categoryKey}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 flex-shrink-0">
                        <span className="text-sm font-black text-neutral-900">
                          {p.price} MAD
                        </span>
                        <div className="w-8 h-8 rounded-full bg-babjus-yellow text-babjus-dark flex items-center justify-center shadow-sm">
                          <Plus size={16} />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
