import React, { createContext, useContext, useState, useEffect } from 'react';
import type { Product, ProductVariant } from '../data/products';

export interface CartItem {
  id: string; // unique item key
  product: Product;
  selectedVariant?: ProductVariant | null;
  quantity: number;
  instructions?: string;
  itemTotal: number;
}

interface CartContextType {
  items: CartItem[];
  totalItems: number;
  subtotal: number;
  deliveryType: 'delivery' | 'pickup';
  setDeliveryType: (type: 'delivery' | 'pickup') => void;
  deliveryFee: number;
  total: number;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  addToCart: (product: Product, variant?: ProductVariant | null, quantity?: number, instructions?: string) => void;
  updateQuantity: (itemId: string, quantity: number) => void;
  removeItem: (itemId: string) => void;
  clearCart: () => void;
  toast: string | null;
  setToast: (msg: string | null) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('babjus_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [deliveryType, setDeliveryType] = useState<'delivery' | 'pickup'>('delivery');
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [toast, setToast] = useState<string | null>(null);

  useEffect(() => {
    try {
      localStorage.setItem('babjus_cart', JSON.stringify(items));
    } catch {}
  }, [items]);

  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => setToast(null), 3200);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  const addToCart = (
    product: Product,
    variant?: ProductVariant | null,
    quantity = 1,
    instructions = ''
  ) => {
    const unitPrice = variant ? variant.price : product.price;
    const itemId = `${product.id}_${variant ? variant.id : 'base'}_${instructions.trim()}`;

    setItems(prevItems => {
      const existing = prevItems.find(i => i.id === itemId);
      if (existing) {
        return prevItems.map(i =>
          i.id === itemId
            ? {
                ...i,
                quantity: i.quantity + quantity,
                itemTotal: (i.quantity + quantity) * unitPrice
              }
            : i
        );
      } else {
        return [
          ...prevItems,
          {
            id: itemId,
            product,
            selectedVariant: variant,
            quantity,
            instructions,
            itemTotal: unitPrice * quantity
          }
        ];
      }
    });

    const variantName = variant ? ` (${variant.name})` : '';
    setToast(`${product.nameFr}${variantName}`);
  };

  const updateQuantity = (itemId: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(itemId);
      return;
    }
    setItems(prev =>
      prev.map(item => {
        if (item.id === itemId) {
          const unitPrice = item.selectedVariant ? item.selectedVariant.price : item.product.price;
          return {
            ...item,
            quantity,
            itemTotal: unitPrice * quantity
          };
        }
        return item;
      })
    );
  };

  const removeItem = (itemId: string) => {
    setItems(prev => prev.filter(item => item.id !== itemId));
  };

  const clearCart = () => {
    setItems([]);
  };

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = items.reduce((sum, item) => sum + item.itemTotal, 0);
  const deliveryFee = deliveryType === 'delivery' && subtotal > 0 ? 10 : 0;
  const total = subtotal + deliveryFee;

  return (
    <CartContext.Provider
      value={{
        items,
        totalItems,
        subtotal,
        deliveryType,
        setDeliveryType,
        deliveryFee,
        total,
        isCartOpen,
        setIsCartOpen,
        addToCart,
        updateQuantity,
        removeItem,
        clearCart,
        toast,
        setToast
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
