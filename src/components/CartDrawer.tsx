import React, { useState } from 'react';
import { CartItem } from '../types';
import { BRAND_INFO, createWhatsAppCartOrderLink } from '../data/socials';
import { WhatsAppIcon } from './SocialIcons';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (productId: string, size: string, delta: number) => void;
  onRemoveItem: (productId: string, size: string) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) => {
  const [showCheckoutForm, setShowCheckoutForm] = useState(false);
  const [custName, setCustName] = useState('');
  const [custPhone, setCustPhone] = useState('');
  const [custAddress, setCustAddress] = useState('');
  const [custCity, setCustCity] = useState('');
  const [orderConfirmed, setOrderConfirmed] = useState(false);

  if (!isOpen) return null;

  const totalAmount = items.reduce(
    (sum, item) => sum + item.product.pricePKR * item.quantity,
    0
  );

  const handleOrderAllWhatsApp = () => {
    const simplified = items.map((i) => ({
      name: i.product.name,
      size: i.selectedSize,
      quantity: i.quantity,
      price: i.product.pricePKR,
    }));
    const url = createWhatsAppCartOrderLink(simplified, totalAmount);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleCodSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Also build a customized WhatsApp confirmation link with the address
    const itemList = items
      .map(
        (item, idx) =>
          `${idx + 1}. ${item.product.name} (${item.selectedSize}) x${item.quantity}`
      )
      .join('\n');
    const msg =
      `*New COD Order - LIBAS HOME*\n\n` +
      `Customer: ${custName}\n` +
      `Phone: ${custPhone}\n` +
      `Delivery Address: ${custAddress}, ${custCity}\n\n` +
      `*Ordered Items:*\n${itemList}\n\n` +
      `*Total: PKR ${totalAmount.toLocaleString()}*`;

    const url = `https://wa.me/923034095758?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank', 'noopener,noreferrer');

    setOrderConfirmed(true);
    setTimeout(() => {
      onClearCart();
      setOrderConfirmed(false);
      setShowCheckoutForm(false);
      onClose();
    }, 4000);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="cart-drawer-title"
      className="fixed inset-0 z-50 overflow-hidden bg-stone-950/60 backdrop-blur-xs flex justify-end"
    >
      <div
        className="w-full max-w-md bg-white h-full flex flex-col shadow-2xl animate-in slide-in-from-right duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 border-b border-stone-200 flex items-center justify-between bg-[#FAF9F6]">
          <div className="flex items-center gap-2">
            <h2 id="cart-drawer-title" className="font-serif text-xl font-bold text-stone-900">
              Shopping Bag
            </h2>
            <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-stone-200 text-stone-800 tabular-nums">
              {items.reduce((acc, i) => acc + i.quantity, 0)}
            </span>
          </div>

          <button
            onClick={onClose}
            aria-label="Close Shopping Bag"
            className="p-1.5 text-stone-500 hover:text-stone-900 rounded-full hover:bg-stone-200/60 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {orderConfirmed ? (
            <div className="text-center py-12 px-4 space-y-3">
              <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="font-serif text-lg font-bold text-stone-900">
                Order Received!
              </h3>
              <p className="text-xs text-stone-600">
                Opening WhatsApp to confirm details with our customer representative...
              </p>
            </div>
          ) : items.length === 0 ? (
            <div className="text-center py-16 text-stone-500 space-y-3">
              <svg className="w-12 h-12 mx-auto text-stone-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              <p className="text-sm">Your shopping bag is empty.</p>
              <button
                onClick={onClose}
                className="text-xs font-semibold text-stone-900 underline underline-offset-4"
              >
                Browse Collections
              </button>
            </div>
          ) : showCheckoutForm ? (
            <form onSubmit={handleCodSubmit} className="space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-stone-200">
                <span className="text-xs font-bold text-stone-900">Delivery Information (COD)</span>
                <button
                  type="button"
                  onClick={() => setShowCheckoutForm(false)}
                  className="text-xs text-stone-500 hover:text-stone-900 underline"
                >
                  &larr; Back to Bag
                </button>
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-stone-700 mb-1">Full Name</label>
                <input
                  type="text"
                  required
                  value={custName}
                  onChange={(e) => setCustName(e.target.value)}
                  placeholder="Recipient Name"
                  className="w-full text-xs p-2.5 bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-stone-900"
                />
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-stone-700 mb-1">Phone / WhatsApp Number</label>
                <input
                  type="tel"
                  required
                  value={custPhone}
                  onChange={(e) => setCustPhone(e.target.value)}
                  placeholder="e.g. 0300 1234567"
                  className="w-full text-xs p-2.5 bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-stone-900"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-[11px] font-semibold text-stone-700 mb-1">City</label>
                  <input
                    type="text"
                    required
                    value={custCity}
                    onChange={(e) => setCustCity(e.target.value)}
                    placeholder="Lahore, Karachi..."
                    className="w-full text-xs p-2.5 bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-stone-900"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-stone-700 mb-1">Postal Code (Optional)</label>
                  <input
                    type="text"
                    placeholder="e.g. 54000"
                    className="w-full text-xs p-2.5 bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-stone-900"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-stone-700 mb-1">Complete Delivery Address</label>
                <textarea
                  rows={2}
                  required
                  value={custAddress}
                  onChange={(e) => setCustAddress(e.target.value)}
                  placeholder="House #, Street #, Area..."
                  className="w-full text-xs p-2.5 bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-stone-900 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs rounded-xl shadow-md transition-colors mt-3"
              >
                Confirm COD Order & Notify via WhatsApp
              </button>
            </form>
          ) : (
            items.map((item) => (
              <div
                key={`${item.product.id}-${item.selectedSize}`}
                className="flex gap-3 p-3 bg-stone-50 rounded-xl border border-stone-200/80"
              >
                <img
                  src={item.product.image}
                  alt={item.product.name}
                  className="w-20 h-24 object-cover rounded-lg bg-stone-200 shrink-0"
                  referrerPolicy="no-referrer"
                />
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="font-serif text-sm font-bold text-stone-900 line-clamp-1">
                      {item.product.name}
                    </h4>
                    <p className="text-[11px] text-stone-500">
                      Size: <span className="font-medium text-stone-700">{item.selectedSize}</span>
                    </p>
                    <p className="text-xs font-semibold text-stone-900 mt-1 tabular-nums">
                      PKR {item.product.pricePKR.toLocaleString()}
                    </p>
                  </div>

                  <div className="flex items-center justify-between mt-2 pt-1 border-t border-stone-200/60">
                    <div className="flex items-center border border-stone-200 rounded bg-white">
                      <button
                        onClick={() => onUpdateQuantity(item.product.id, item.selectedSize, -1)}
                        className="px-2 py-0.5 text-xs text-stone-600 hover:bg-stone-100"
                      >
                        -
                      </button>
                      <span className="px-2 py-0.5 text-xs font-semibold text-stone-900 tabular-nums">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => onUpdateQuantity(item.product.id, item.selectedSize, 1)}
                        className="px-2 py-0.5 text-xs text-stone-600 hover:bg-stone-100"
                      >
                        +
                      </button>
                    </div>

                    <button
                      onClick={() => onRemoveItem(item.product.id, item.selectedSize)}
                      className="text-[11px] text-rose-600 hover:text-rose-800"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer Checkout Actions */}
        {items.length > 0 && !showCheckoutForm && !orderConfirmed && (
          <div className="p-5 border-t border-stone-200 bg-[#FAF9F6] space-y-3">
            <div className="flex items-baseline justify-between">
              <span className="text-xs text-stone-500 font-medium">Subtotal</span>
              <span className="font-serif text-xl font-bold text-stone-900 tabular-nums">
                PKR {totalAmount.toLocaleString()}
              </span>
            </div>

            <p className="text-[11px] text-stone-500">
              Free nationwide delivery on orders over PKR 5,000. Taxes included.
            </p>

            <button
              onClick={handleOrderAllWhatsApp}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs rounded-xl shadow-md transition-colors cursor-pointer"
            >
              <WhatsAppIcon className="w-4 h-4" />
              <span>Complete Order on WhatsApp ({BRAND_INFO.whatsappNumber})</span>
            </button>

            <button
              onClick={() => setShowCheckoutForm(true)}
              className="w-full py-2.5 px-4 bg-stone-900 hover:bg-stone-800 text-white font-medium text-xs rounded-xl transition-colors cursor-pointer"
            >
              Cash on Delivery (Direct Checkout)
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
