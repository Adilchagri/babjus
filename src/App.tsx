import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CategoryNav } from './components/CategoryNav';
import { ProductCarousel } from './components/ProductCarousel';
import { RestaurantSection } from './components/RestaurantSection';
import { Gallery } from './components/Gallery';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { ProductModal } from './components/ProductModal';
import { CartDrawer } from './components/CartDrawer';
import { SearchModal } from './components/SearchModal';
import { AboutModal } from './components/AboutModal';
import { ToastNotification } from './components/ToastNotification';
import { MenuPage } from './pages/MenuPage';

import { CATEGORIES, FEATURED_PRODUCTS, type Product } from './data/products';
import { useCart } from './context/CartContext';

export const AppContent: React.FC = () => {
  const { setIsCartOpen } = useCart();

  const [activeTab, setActiveTab] = useState<string>('home');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleNavigate = (tab: string) => {
    setActiveTab(tab);
    if (tab === 'about') {
      setIsAboutOpen(true);
    } else if (tab === 'contact') {
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    } else if (tab === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleSelectCategory = (categoryKey: string) => {
    setSelectedCategory(categoryKey);
    // Switch to menu page and filter to this category
    setActiveTab('menu');
    setTimeout(() => {
      const el = document.getElementById(categoryKey);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen bg-babjus-cream flex flex-col font-sans">
      {/* Sticky Navbar */}
      <Navbar
        activeTab={activeTab}
        onNavigate={handleNavigate}
        onOpenSearch={() => setIsSearchOpen(true)}
      />

      {/* Main View Router */}
      <main className="flex-grow">
        {activeTab === 'menu' ? (
          <MenuPage
            onOpenModal={(product) => setSelectedProduct(product)}
            onGoHome={() => {
              setActiveTab('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        ) : (
          <>
            {/* Hero Section */}
            <Hero onExploreMenu={() => setActiveTab('menu')} />

            {/* Category Navigation Bar directly under hero */}
            <CategoryNav
              categories={CATEGORIES}
              selectedCategory={selectedCategory}
              onSelectCategory={handleSelectCategory}
            />

            {/* "Nos incontournables" - Signature Products Carousel */}
            <ProductCarousel
              products={FEATURED_PRODUCTS}
              onOpenModal={(product) => setSelectedProduct(product)}
              onViewAll={() => setActiveTab('menu')}
            />

            {/* Restaurant Storefront Experience + 3-Step Ordering Process */}
            <RestaurantSection
              onOpenCart={() => setIsCartOpen(true)}
              onOpenAbout={() => setIsAboutOpen(true)}
            />

            {/* Food Gallery with Lightbox */}
            <Gallery />

            {/* Final Conversion CTA */}
            <FinalCTA
              onOrderNow={() => setIsCartOpen(true)}
              onExploreMenu={() => setActiveTab('menu')}
            />
          </>
        )}
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Global Modals & Notifications */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />

      <CartDrawer />

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectProduct={(p) => setSelectedProduct(p)}
      />

      <AboutModal
        isOpen={isAboutOpen}
        onClose={() => setIsAboutOpen(false)}
        onExploreMenu={() => {
          setActiveTab('menu');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      <ToastNotification />
    </div>
  );
};
