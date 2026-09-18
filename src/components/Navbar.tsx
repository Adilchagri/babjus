import React, { useState, useEffect } from 'react';
import { Search, ShoppingBag, Menu as MenuIcon, X, ArrowRight, ArrowLeft } from 'lucide-react';
import { Logo } from './Logo';
import { useCart } from '../context/CartContext';
import { useLanguage } from '../context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  activeTab?: string;
  onNavigate: (tab: string) => void;
  onOpenSearch: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab = 'home',
  onNavigate,
  onOpenSearch,
}) => {
  const { totalItems, setIsCartOpen } = useCart();
  const { language, setLanguage, t, isRtl } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: t.nav.home },
    { id: 'menu', label: t.nav.menu },
    { id: 'about', label: t.nav.about },
    { id: 'contact', label: t.nav.contact },
  ];

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-babjus-dark/95 backdrop-blur-md py-2.5 shadow-xl border-b border-white/10'
          : 'bg-babjus-dark/70 backdrop-blur-sm py-4 border-b border-white/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          {/* Left: Logo */}
          <div className="flex-shrink-0" onClick={() => handleLinkClick('home')}>
            <Logo variant="dark" size={isScrolled ? 'sm' : 'md'} />
          </div>

          {/* Center: Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = activeTab === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`relative text-sm font-semibold transition-colors duration-200 py-1 ${
                    isActive
                      ? 'text-babjus-yellow font-bold'
                      : 'text-white/80 hover:text-white'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="navIndicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-babjus-yellow rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Center-Right: Search Input + Language + Cart */}
          <div className="flex items-center gap-3 md:gap-5">
            {/* Search Pill Input (Desktop) */}
            <div
              onClick={onOpenSearch}
              className="hidden md:flex items-center gap-2.5 bg-white/10 hover:bg-white/15 text-white/70 hover:text-white px-4 py-2 rounded-full cursor-pointer text-xs font-medium border border-white/10 transition-all w-52 lg:w-64"
            >
              <Search size={15} className="text-white/60" />
              <span className="truncate">{t.nav.searchPlaceholder}</span>
            </div>

            {/* Mobile Search Button */}
            <button
              onClick={onOpenSearch}
              className="md:hidden p-2 text-white/80 hover:text-white bg-white/5 rounded-full"
              aria-label="Rechercher"
            >
              <Search size={18} />
            </button>

            {/* Language Switcher */}
            <div className="flex items-center bg-white/10 rounded-full p-1 border border-white/10 text-xs font-bold">
              <button
                onClick={() => setLanguage('fr')}
                className={`px-2.5 py-1 rounded-full transition-all ${
                  language === 'fr'
                    ? 'bg-babjus-yellow text-babjus-dark shadow-sm'
                    : 'text-white/70 hover:text-white'
                }`}
              >
                FR
              </button>
              <span className="text-white/20 mx-0.5">|</span>
              <button
                onClick={() => setLanguage('ar')}
                className={`px-2.5 py-1 rounded-full transition-all ${
                  language === 'ar'
                    ? 'bg-babjus-yellow text-babjus-dark shadow-sm'
                    : 'text-white/70 hover:text-white'
                }`}
              >
                AR
              </button>
            </div>

            {/* Cart Icon with Counter */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2.5 text-white/90 hover:text-babjus-yellow transition-colors group"
              aria-label={t.nav.cart}
            >
              <ShoppingBag size={22} className="group-hover:scale-110 transition-transform" />
              <AnimatePresence>
                {totalItems > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: [1, 1.25, 1] }}
                    exit={{ scale: 0 }}
                    className="absolute -top-0.5 -right-0.5 bg-babjus-yellow text-babjus-dark text-[11px] font-black w-5 h-5 rounded-full flex items-center justify-center shadow-md"
                  >
                    {totalItems}
                  </motion.span>
                )}
              </AnimatePresence>
            </button>

            {/* Large Yellow CTA Button (Desktop) */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="hidden sm:inline-flex items-center gap-2 bg-babjus-yellow hover:bg-babjus-yellowHover text-babjus-dark font-extrabold px-5 py-2.5 rounded-full text-sm shadow-md hover:shadow-yellow-glow transition-all duration-300 transform active:scale-95 group"
            >
              <span>{t.nav.orderCta.replace('→', '').replace('←', '').trim()}</span>
              {isRtl ? (
                <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
              ) : (
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              )}
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-white/80 hover:text-white bg-white/5 rounded-full focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={22} /> : <MenuIcon size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-babjus-dark border-b border-white/10 px-6 py-6"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`text-left text-base font-semibold py-2 px-3 rounded-lg transition-colors ${
                    activeTab === link.id
                      ? 'bg-babjus-yellow/15 text-babjus-yellow'
                      : 'text-white/80 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  {link.label}
                </button>
              ))}

              <div className="pt-2 border-t border-white/10">
                <button
                  onClick={() => {
                    setIsCartOpen(true);
                    setMobileMenuOpen(false);
                  }}
                  className="w-full flex items-center justify-center gap-2 bg-babjus-yellow text-babjus-dark font-black py-3 rounded-full text-sm shadow-lg"
                >
                  <span>{t.nav.orderCta}</span>
                  <ShoppingBag size={18} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
