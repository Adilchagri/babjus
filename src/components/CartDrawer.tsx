import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, ArrowLeft, Send, CheckCircle2, Bike, Store } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useLanguage } from '../context/LanguageContext';
import { RESTAURANT_INFO } from '../data/products';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';

export const CartDrawer: React.FC = () => {
  const {
    items,
    totalItems,
    subtotal,
    deliveryType,
    setDeliveryType,
    deliveryFee,
    total,
    isCartOpen,
    setIsCartOpen,
    updateQuantity,
    removeItem,
    clearCart,
  } = useCart();

  const { language, t, isRtl } = useLanguage();

  const [checkoutStep, setCheckoutStep] = useState<'cart' | 'form' | 'success'>('cart');
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [customerAddress, setCustomerAddress] = useState('');
  const [orderNotes, setOrderNotes] = useState('');

  const handleClose = () => {
    setIsCartOpen(false);
    if (checkoutStep === 'success') {
      setCheckoutStep('cart');
    }
  };

  // Generate WhatsApp Order Message & Link
  const handleWhatsAppOrder = () => {
    let orderText = `*Nouvelle commande Babjus Restaurant*\n\n`;
    orderText += `*Client :* ${customerName || 'Client'}\n`;
    if (customerPhone) orderText += `*Téléphone :* ${customerPhone}\n`;
    orderText += `*Mode :* ${deliveryType === 'delivery' ? 'Livraison à domicile' : 'À emporter / Sur place'}\n`;
    if (deliveryType === 'delivery' && customerAddress) {
      orderText += `*Adresse :* ${customerAddress}\n`;
    }
    orderText += `\n*Détail de la commande :*\n`;

    items.forEach((item, idx) => {
      const vText = item.selectedVariant ? ` (${item.selectedVariant.name})` : '';
      const notesText = item.instructions ? ` [Note: ${item.instructions}]` : '';
      orderText += `${idx + 1}. ${item.product.nameFr}${vText} x ${item.quantity} = ${item.itemTotal} MAD${notesText}\n`;
    });

    orderText += `\n*Sous-total :* ${subtotal} MAD\n`;
    if (deliveryFee > 0) orderText += `*Livraison :* ${deliveryFee} MAD\n`;
    orderText += `*TOTAL :* ${total} MAD\n`;

    if (orderNotes) orderText += `\n*Remarques :* ${orderNotes}\n`;
    orderText += `\nMerci Babjus !`;

    const encoded = encodeURIComponent(orderText);
    window.open(`https://wa.me/${RESTAURANT_INFO.whatsapp}?text=${encoded}`, '_blank');
  };

  const handleConfirmCashOrder = (e: React.FormEvent) => {
    e.preventDefault();
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });
    setCheckoutStep('success');
    clearCart();
  };

  return (
    <AnimatePresence>
      {isCartOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
          />

          {/* Drawer Panel */}
          <div className={`fixed inset-y-0 ${isRtl ? 'left-0' : 'right-0'} max-w-full flex`}>
            <motion.div
              initial={{ x: isRtl ? '-100%' : '100%' }}
              animate={{ x: 0 }}
              exit={{ x: isRtl ? '-100%' : '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 280 }}
              className="w-screen max-w-md bg-white shadow-2xl flex flex-col"
            >
              {/* Drawer Header */}
              <div className="p-5 border-b border-neutral-100 flex items-center justify-between bg-neutral-50/70">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-xl bg-babjus-yellow/20 text-babjus-dark">
                    <ShoppingBag size={20} />
                  </div>
                  <div>
                    <h2 className="text-lg font-black text-neutral-900">{t.cart.title}</h2>
                    <span className="text-xs text-neutral-500 font-medium">
                      {totalItems} {language === 'ar' ? 'عناصر' : 'articles'}
                    </span>
                  </div>
                </div>

                <button
                  onClick={handleClose}
                  className="p-2 text-neutral-400 hover:text-neutral-700 rounded-full hover:bg-neutral-100 transition-colors"
                  aria-label={t.cart.close}
                >
                  <X size={20} />
                </button>
              </div>

              {/* Drawer Content */}
              {items.length === 0 && checkoutStep !== 'success' ? (
                /* Empty Cart State */
                <div className="flex-grow flex flex-col items-center justify-center p-8 text-center">
                  <div className="w-20 h-20 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-400 mb-4">
                    <ShoppingBag size={36} />
                  </div>
                  <h3 className="text-lg font-bold text-neutral-800">{t.cart.empty}</h3>
                  <p className="text-xs text-neutral-500 mt-1 max-w-xs">{t.cart.emptySubtitle}</p>
                  <button
                    onClick={handleClose}
                    className="mt-6 bg-babjus-yellow hover:bg-babjus-yellowHover text-babjus-dark font-extrabold text-xs px-6 py-3 rounded-full shadow-md transition-all"
                  >
                    {t.cart.exploreMenu}
                  </button>
                </div>
              ) : checkoutStep === 'cart' ? (
                /* Active Cart Items View */
                <>
                  <div className="flex-grow overflow-y-auto p-5 space-y-4 divide-y divide-neutral-100">
                    {items.map((item) => {
                      const itemTitle = language === 'ar' ? item.product.nameAr : item.product.nameFr;

                      return (
                        <div key={item.id} className="pt-4 first:pt-0 flex gap-3.5 items-start">
                          {/* Item Thumbnail */}
                          <div className="w-16 h-16 rounded-2xl overflow-hidden bg-neutral-100 flex-shrink-0 border border-neutral-100">
                            <img
                              src={item.product.image || '/assets/hero_pizza.jpg'}
                              alt={itemTitle}
                              className="w-full h-full object-cover"
                            />
                          </div>

                          {/* Item Details */}
                          <div className="flex-grow min-w-0">
                            <div className="flex items-start justify-between gap-2">
                              <h4 className="text-sm font-black text-neutral-900 truncate">
                                {itemTitle}
                              </h4>
                              <button
                                onClick={() => removeItem(item.id)}
                                className="text-neutral-400 hover:text-red-500 p-1 transition-colors"
                                aria-label="Supprimer"
                              >
                                <Trash2 size={16} />
                              </button>
                            </div>

                            {item.selectedVariant && (
                              <span className="inline-block text-[11px] font-bold text-neutral-500 bg-neutral-100 px-2 py-0.5 rounded-md mt-0.5">
                                {item.selectedVariant.name}
                              </span>
                            )}

                            {item.instructions && (
                              <p className="text-[11px] text-amber-700 italic mt-0.5 truncate">
                                "{item.instructions}"
                              </p>
                            )}

                            {/* Quantity & Item Total */}
                            <div className="flex items-center justify-between mt-2.5">
                              <div className="flex items-center gap-2 bg-neutral-100 rounded-full px-2 py-0.5">
                                <button
                                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                  className="w-5 h-5 rounded-full flex items-center justify-center text-neutral-600 hover:text-neutral-900"
                                >
                                  <Minus size={12} />
                                </button>
                                <span className="text-xs font-black w-4 text-center">
                                  {item.quantity}
                                </span>
                                <button
                                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                  className="w-5 h-5 rounded-full flex items-center justify-center text-neutral-600 hover:text-neutral-900"
                                >
                                  <Plus size={12} />
                                </button>
                              </div>

                              <span className="text-sm font-black text-neutral-900">
                                {item.itemTotal} MAD
                              </span>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Delivery Mode & Price Summary Footer */}
                  <div className="p-5 border-t border-neutral-100 bg-neutral-50/80 space-y-4">
                    {/* Delivery Options Selector */}
                    <div>
                      <span className="text-[11px] font-black uppercase text-neutral-500 block mb-2">
                        {t.cart.delivery}
                      </span>
                      <div className="grid grid-cols-2 gap-2">
                        <button
                          onClick={() => setDeliveryType('delivery')}
                          className={`flex items-center justify-center gap-2 p-2.5 rounded-xl border text-xs font-bold transition-all ${
                            deliveryType === 'delivery'
                              ? 'border-babjus-yellow bg-babjus-yellow/15 text-neutral-900 font-black shadow-sm'
                              : 'border-neutral-200 bg-white text-neutral-600'
                          }`}
                        >
                          <Bike size={15} />
                          <span>Livraison (10 MAD)</span>
                        </button>

                        <button
                          onClick={() => setDeliveryType('pickup')}
                          className={`flex items-center justify-center gap-2 p-2.5 rounded-xl border text-xs font-bold transition-all ${
                            deliveryType === 'pickup'
                              ? 'border-babjus-yellow bg-babjus-yellow/15 text-neutral-900 font-black shadow-sm'
                              : 'border-neutral-200 bg-white text-neutral-600'
                          }`}
                        >
                          <Store size={15} />
                          <span>Sur place / Emporter</span>
                        </button>
                      </div>
                    </div>

                    {/* Breakdown */}
                    <div className="space-y-1.5 text-xs text-neutral-600">
                      <div className="flex justify-between">
                        <span>{t.cart.subtotal}</span>
                        <span className="font-bold text-neutral-900">{subtotal} MAD</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Livraison</span>
                        <span className="font-bold text-neutral-900">
                          {deliveryFee > 0 ? `${deliveryFee} MAD` : 'Gratuit'}
                        </span>
                      </div>
                      <div className="flex justify-between text-base font-black text-neutral-900 pt-2 border-t border-neutral-200">
                        <span>{t.cart.total}</span>
                        <span className="text-xl text-neutral-900 font-black">{total} MAD</span>
                      </div>
                    </div>

                    {/* Checkout Buttons */}
                    <div className="space-y-2 pt-1">
                      <button
                        onClick={() => setCheckoutStep('form')}
                        className="w-full bg-babjus-yellow hover:bg-babjus-yellowHover text-babjus-dark font-black text-sm py-3.5 rounded-full shadow-md hover:shadow-yellow-glow transition-all flex items-center justify-center gap-2 active:scale-95"
                      >
                        <span>Passer la commande</span>
                        {isRtl ? <ArrowLeft size={16} /> : <ArrowRight size={16} />}
                      </button>

                      <button
                        onClick={handleWhatsAppOrder}
                        className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs py-2.5 rounded-full transition-all flex items-center justify-center gap-2"
                      >
                        <Send size={14} />
                        <span>Commander direct via WhatsApp</span>
                      </button>
                    </div>
                  </div>
                </>
              ) : checkoutStep === 'form' ? (
                /* Customer Information Form */
                <div className="flex-grow overflow-y-auto p-6 space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-neutral-100">
                    <button
                      onClick={() => setCheckoutStep('cart')}
                      className="text-xs font-bold text-neutral-500 hover:text-neutral-900 flex items-center gap-1"
                    >
                      {isRtl ? <ArrowRight size={14} /> : <ArrowLeft size={14} />}
                      <span>Retour au panier</span>
                    </button>
                    <span className="text-sm font-black text-neutral-900">
                      Total: {total} MAD
                    </span>
                  </div>

                  <form onSubmit={handleConfirmCashOrder} className="space-y-4">
                    <div>
                      <label className="text-xs font-bold text-neutral-700 block mb-1">
                        {t.cart.clientName} *
                      </label>
                      <input
                        type="text"
                        required
                        value={customerName}
                        onChange={(e) => setCustomerName(e.target.value)}
                        placeholder="Ex: Mohammed Alami"
                        className="w-full text-xs sm:text-sm p-3 rounded-2xl border border-neutral-200 focus:border-babjus-yellow outline-none"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-bold text-neutral-700 block mb-1">
                        {t.cart.clientPhone} *
                      </label>
                      <input
                        type="tel"
                        required
                        value={customerPhone}
                        onChange={(e) => setCustomerPhone(e.target.value)}
                        placeholder="Ex: 06 12 34 56 78"
                        className="w-full text-xs sm:text-sm p-3 rounded-2xl border border-neutral-200 focus:border-babjus-yellow outline-none"
                      />
                    </div>

                    {deliveryType === 'delivery' && (
                      <div>
                        <label className="text-xs font-bold text-neutral-700 block mb-1">
                          {t.cart.clientAddress} *
                        </label>
                        <input
                          type="text"
                          required
                          value={customerAddress}
                          onChange={(e) => setCustomerAddress(e.target.value)}
                          placeholder="Ex: Quartier El Manar, Immeuble B, Appt 4"
                          className="w-full text-xs sm:text-sm p-3 rounded-2xl border border-neutral-200 focus:border-babjus-yellow outline-none"
                        />
                      </div>
                    )}

                    <div>
                      <label className="text-xs font-bold text-neutral-700 block mb-1">
                        {t.cart.specialNotes}
                      </label>
                      <textarea
                        value={orderNotes}
                        onChange={(e) => setOrderNotes(e.target.value)}
                        placeholder="Ex: Pas trop épicé, sonner à l'interphone..."
                        rows={2}
                        className="w-full text-xs sm:text-sm p-3 rounded-2xl border border-neutral-200 focus:border-babjus-yellow outline-none resize-none"
                      />
                    </div>

                    <div className="pt-2 space-y-2">
                      <button
                        type="submit"
                        className="w-full bg-babjus-yellow hover:bg-babjus-yellowHover text-babjus-dark font-black text-sm py-3.5 rounded-full shadow-md transition-all flex items-center justify-center gap-2"
                      >
                        <span>{t.cart.confirmCashOrder}</span>
                        <CheckCircle2 size={18} />
                      </button>

                      <button
                        type="button"
                        onClick={handleWhatsAppOrder}
                        className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs py-3 rounded-full transition-all flex items-center justify-center gap-2"
                      >
                        <Send size={14} />
                        <span>Envoyer la commande via WhatsApp</span>
                      </button>
                    </div>
                  </form>
                </div>
              ) : (
                /* Order Confirmation Success State */
                <div className="flex-grow flex flex-col items-center justify-center p-8 text-center space-y-4">
                  <div className="w-20 h-20 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
                    <CheckCircle2 size={44} />
                  </div>
                  <h3 className="text-2xl font-black text-neutral-900">{t.cart.orderSuccess}</h3>
                  <p className="text-xs sm:text-sm text-neutral-600 max-w-xs leading-relaxed">
                    {t.cart.orderSuccessMsg}
                  </p>

                  <div className="p-4 bg-neutral-50 rounded-2xl border border-neutral-100 text-xs text-neutral-600 w-full text-left space-y-1">
                    <div className="font-bold text-neutral-900">Babjus Restaurant El Jadida</div>
                    <div>Téléphone: {RESTAURANT_INFO.phoneDisplay}</div>
                    <div>Paiement à la réception de votre commande.</div>
                  </div>

                  <button
                    onClick={handleClose}
                    className="bg-babjus-dark hover:bg-black text-white font-extrabold text-xs px-8 py-3.5 rounded-full shadow-md transition-all"
                  >
                    Fermer et retourner au menu
                  </button>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
};
