import React from 'react';
import { Home, Search, ShoppingBag, UtensilsCrossed, UserRound } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useLanguage } from '../context/LanguageContext';

interface MobileBottomNavProps {
  activeTab: string;
  onNavigate: (tab: string) => void;
  onOpenSearch: () => void;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({
  activeTab,
  onNavigate,
  onOpenSearch,
}) => {
  const { totalItems, setIsCartOpen } = useCart();
  const { language } = useLanguage();
  const labels = language === 'ar'
    ? { home: 'الرئيسية', menu: 'القائمة', search: 'بحث', cart: 'السلة', about: 'عنّا' }
    : { home: 'Accueil', menu: 'Menu', search: 'Recherche', cart: 'Panier', about: 'À propos' };

  const itemClass = (active: boolean) =>
    `relative flex min-w-0 flex-1 flex-col items-center gap-1 rounded-xl py-2 text-[10px] font-extrabold transition-colors ${
      active ? 'text-babjus-yellow' : 'text-white/70'
    }`;

  return (
    <nav className="fixed inset-x-0 bottom-0 z-[60] border-t border-white/10 bg-babjus-dark/95 px-2 pb-[max(0.45rem,env(safe-area-inset-bottom))] pt-1.5 backdrop-blur-xl lg:hidden">
      <div className="mx-auto flex max-w-lg items-center justify-between">
        <button onClick={() => onNavigate('home')} className={itemClass(activeTab === 'home')}>
          <Home size={21} fill={activeTab === 'home' ? 'currentColor' : 'none'} />
          <span>{labels.home}</span>
        </button>
        <button onClick={() => onNavigate('menu')} className={itemClass(activeTab === 'menu')}>
          <UtensilsCrossed size={21} />
          <span>{labels.menu}</span>
        </button>
        <button onClick={onOpenSearch} className={itemClass(false)}>
          <Search size={21} />
          <span>{labels.search}</span>
        </button>
        <button onClick={() => setIsCartOpen(true)} className={itemClass(false)}>
          <span className="relative"><ShoppingBag size={21} />{totalItems > 0 && <span className="absolute -right-2 -top-2 flex h-4 min-w-4 items-center justify-center rounded-full bg-babjus-yellow px-1 text-[9px] text-babjus-dark">{totalItems}</span>}</span>
          <span>{labels.cart}</span>
        </button>
        <button onClick={() => onNavigate('about')} className={itemClass(activeTab === 'about')}>
          <UserRound size={21} />
          <span>{labels.about}</span>
        </button>
      </div>
    </nav>
  );
};
