import React, { useState } from 'react';
import { Product } from '../types';
import { BRAND_INFO, createWhatsAppOrderLink } from '../data/socials';
import { WhatsAppIcon } from './SocialIcons';

interface ProductQuickViewModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, size: string, quantity: number) => void;
}

export const ProductQuickViewModal: React.FC<ProductQuickViewModalProps> = ({
  product,
  onClose,
  onAddToCart,
}) => {
  if (!product) return null;

  const [selectedSize, setSelectedSize] = useState<string>(product.sizes[0] || 'Standard');
  const [quantity, setQuantity] = useState<number>(1);
  const [addedNotice, setAddedNotice] = useState(false);

  const handleOrderWhatsApp = () => {
    const url = createWhatsAppOrderLink(product.name, product.pricePKR, selectedSize);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleAdd = () => {
    onAddToCart(product, selectedSize, quantity);
    setAddedNotice(true);
    setTimeout(() => setAddedNotice(false), 2000);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="quickview-title"
      className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
    >
      <div
        className="relative bg-white rounded-2xl max-w-3xl w-full overflow-hidden shadow-2xl border border-stone-200 animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close product preview"
          className="absolute top-4 right-4 z-10 p-2 text-stone-500 hover:text-stone-900 bg-white/80 hover:bg-white rounded-full shadow-sm transition-colors cursor-pointer"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Product Image Column */}
          <div className="relative bg-stone-100 min-h-[340px] md:min-h-full">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover object-center max-h-[460px] md:max-h-none"
              referrerPolicy="no-referrer"
            />
            {product.isNewArrival && (
              <span className="absolute top-4 left-4 text-xs font-semibold tracking-wider uppercase bg-stone-900 text-white px-2.5 py-1 rounded">
                New Season
              </span>
            )}
          </div>

          {/* Product Details Column */}
          <div className="p-6 sm:p-8 flex flex-col justify-between space-y-5">
            <div>
              <div className="text-xs uppercase tracking-widest text-stone-500 font-semibold">
                {product.category} · {product.pieces}
              </div>

              <h2 id="quickview-title" className="font-serif text-2xl font-bold text-stone-900 mt-1">
                {product.name}
              </h2>

              <div className="flex items-baseline gap-3 mt-2">
                <span className="text-2xl font-bold text-stone-950 tabular-nums">
                  PKR {product.pricePKR.toLocaleString()}
                </span>
                {product.originalPricePKR && (
                  <span className="text-sm text-stone-400 line-through tabular-nums">
                    PKR {product.originalPricePKR.toLocaleString()}
                  </span>
                )}
              </div>

              <p className="text-xs text-stone-600 mt-3 leading-relaxed">
                {product.description}
              </p>

              <div className="mt-4 pt-3 border-t border-stone-100">
                <p className="text-xs font-semibold text-stone-800 mb-1">Fabric Specifications:</p>
                <p className="text-xs text-stone-600">{product.fabric}</p>

                <ul className="mt-2 space-y-1">
                  {product.details.slice(0, 3).map((detail, idx) => (
                    <li key={idx} className="text-xs text-stone-500 flex items-start gap-1.5">
                      <span className="text-amber-700">·</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Size Selector */}
              <div className="mt-4">
                <label className="block text-xs font-semibold text-stone-800 mb-2">
                  Select Size / Style:
                </label>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((sz) => (
                    <button
                      key={sz}
                      type="button"
                      onClick={() => setSelectedSize(sz)}
                      className={`px-3 py-1.5 text-xs font-medium rounded-lg border transition-all cursor-pointer ${
                        selectedSize === sz
                          ? 'border-stone-900 bg-stone-900 text-white shadow-xs'
                          : 'border-stone-200 text-stone-700 bg-stone-50 hover:bg-stone-100'
                      }`}
                    >
                      {sz}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div className="mt-4 flex items-center gap-3">
                <label className="text-xs font-semibold text-stone-800">Quantity:</label>
                <div className="flex items-center border border-stone-200 rounded-lg overflow-hidden bg-white">
                  <button
                    type="button"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-2.5 py-1 text-stone-600 hover:bg-stone-100 text-sm font-bold"
                  >
                    -
                  </button>
                  <span className="px-3 py-1 text-xs font-medium text-stone-900 tabular-nums">
                    {quantity}
                  </span>
                  <button
                    type="button"
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-2.5 py-1 text-stone-600 hover:bg-stone-100 text-sm font-bold"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-2 pt-3 border-t border-stone-100">
              {/* Primary: Direct WhatsApp Order */}
              <button
                type="button"
                onClick={handleOrderWhatsApp}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm rounded-xl shadow-md transition-colors cursor-pointer"
              >
                <WhatsAppIcon className="w-5 h-5" />
                <span>Instant Order via WhatsApp (+92 303 4095758)</span>
              </button>

              {/* Secondary: Add to Bag */}
              <button
                type="button"
                onClick={handleAdd}
                className="w-full py-2.5 px-4 bg-stone-100 hover:bg-stone-200 text-stone-900 font-medium text-sm rounded-xl transition-colors cursor-pointer flex items-center justify-center gap-2"
              >
                {addedNotice ? (
                  <span className="text-emerald-700 font-semibold">✓ Added to Shopping Bag</span>
                ) : (
                  <span>Add to Bag</span>
                )}
              </button>

              <p className="text-[11px] text-center text-stone-400">
                Direct WhatsApp assistance available daily 10:00 AM – 9:00 PM PKT
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
