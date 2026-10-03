import React, { useState, useMemo } from 'react';
import { Product } from '../types';
import { PRODUCTS } from '../data/products';
import { createWhatsAppOrderLink } from '../data/socials';
import { WhatsAppIcon } from './SocialIcons';

interface ProductCatalogProps {
  onQuickView: (product: Product) => void;
  onAddToCart: (product: Product, size: string, quantity: number) => void;
}

export const ProductCatalog: React.FC<ProductCatalogProps> = ({
  onQuickView,
  onAddToCart,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [addedProductId, setAddedProductId] = useState<string | null>(null);

  const categories = ['All', 'Luxury Lawn', 'Festive Prêt', 'Home Couture', 'Velvet & Silk'];

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      const matchesCategory =
        activeCategory === 'All' || product.category === activeCategory;
      const matchesSearch =
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.fabric.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const handleDirectWhatsAppOrder = (e: React.MouseEvent, product: Product) => {
    e.stopPropagation();
    const url = createWhatsAppOrderLink(product.name, product.pricePKR, product.sizes[0]);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleQuickAdd = (e: React.MouseEvent, product: Product) => {
    e.stopPropagation();
    onAddToCart(product, product.sizes[0] || 'Standard', 1);
    setAddedProductId(product.id);
    setTimeout(() => setAddedProductId(null), 1500);
  };

  return (
    <section id="collections" className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-stone-200">
        <div>
          <div className="text-xs font-semibold uppercase tracking-widest text-stone-500 mb-1">
            Curated Autumn / Festive Collection
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900">
            Signature Ensembles & Home Couture
          </h2>
          <p className="text-sm text-stone-600 mt-2 max-w-xl">
            Order online or connect with our master stylists on WhatsApp for custom sizing, fabric samples, and priority dispatch.
          </p>
        </div>

        {/* Search Input */}
        <div className="w-full md:w-72">
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search lawn, velvet, bedsheet..."
              className="w-full text-xs py-2.5 pl-9 pr-4 bg-white border border-stone-200 rounded-lg text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-900 focus:border-transparent transition-all"
            />
            <svg
              className="w-4 h-4 text-stone-400 absolute left-3 top-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Category Filter Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto py-6 scrollbar-none">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 text-xs font-medium rounded-lg whitespace-nowrap transition-colors cursor-pointer ${
              activeCategory === cat
                ? 'bg-stone-900 text-white shadow-xs'
                : 'bg-stone-100 text-stone-700 hover:bg-stone-200 hover:text-stone-900'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      {filteredProducts.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-2xl border border-stone-200 p-8">
          <p className="text-stone-500 text-sm">No products found matching &ldquo;{searchQuery}&rdquo;</p>
          <button
            onClick={() => {
              setActiveCategory('All');
              setSearchQuery('');
            }}
            className="mt-3 text-xs font-semibold text-stone-900 underline underline-offset-4 cursor-pointer"
          >
            Clear filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProducts.map((product) => (
            <article
              key={product.id}
              onClick={() => onQuickView(product)}
              className="group flex flex-col bg-white rounded-xl border border-stone-200 overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
            >
              {/* Product Image Area */}
              <div className="relative aspect-[4/3] bg-stone-100 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                  referrerPolicy="no-referrer"
                />

                {/* Subtle Tag */}
                {product.isNewArrival && (
                  <span className="absolute top-3 left-3 bg-stone-900/90 backdrop-blur-xs text-white text-[11px] font-semibold px-2 py-0.5 rounded tracking-wide">
                    New Arrival
                  </span>
                )}

                {/* Quick View Button overlay on desktop */}
                <div className="absolute inset-0 bg-stone-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
                  <span className="px-4 py-2 bg-white/95 text-stone-900 text-xs font-semibold rounded-lg shadow-md hover:bg-white transition-colors">
                    Quick View & Sizing
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  {/* Unboxed Metadata with · separator */}
                  <div className="flex items-center gap-1.5 text-xs text-stone-500">
                    <span>{product.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>{product.pieces}</span>
                  </div>

                  <h3 className="font-serif text-lg font-bold text-stone-900 mt-1.5 group-hover:text-amber-800 transition-colors line-clamp-1">
                    {product.name}
                  </h3>

                  <p className="text-xs text-stone-600 line-clamp-2 mt-1 leading-relaxed">
                    {product.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-stone-100 space-y-3">
                  {/* Price and Stock Indicator */}
                  <div className="flex items-baseline justify-between">
                    <div className="flex items-baseline gap-2">
                      <span className="text-base font-bold text-stone-900 tabular-nums">
                        PKR {product.pricePKR.toLocaleString()}
                      </span>
                      {product.originalPricePKR && (
                        <span className="text-xs text-stone-400 line-through tabular-nums">
                          PKR {product.originalPricePKR.toLocaleString()}
                        </span>
                      )}
                    </div>
                    <span className="text-[11px] text-emerald-700 font-medium">In Stock</span>
                  </div>

                  {/* Actions Row */}
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={(e) => handleDirectWhatsAppOrder(e, product)}
                      className="flex items-center justify-center gap-1.5 py-2 px-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-semibold transition-colors cursor-pointer"
                      title="Order directly on WhatsApp"
                    >
                      <WhatsAppIcon className="w-3.5 h-3.5" />
                      <span className="truncate">WhatsApp Order</span>
                    </button>

                    <button
                      type="button"
                      onClick={(e) => handleQuickAdd(e, product)}
                      className="flex items-center justify-center py-2 px-2.5 bg-stone-100 hover:bg-stone-200 text-stone-800 rounded-lg text-xs font-medium transition-colors cursor-pointer"
                    >
                      {addedProductId === product.id ? (
                        <span className="text-emerald-700 font-semibold truncate">✓ Added</span>
                      ) : (
                        <span className="truncate">Add to Bag</span>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
};
