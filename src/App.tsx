/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Product, CartItem } from './types';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProductCatalog } from './components/ProductCatalog';
import { ProductQuickViewModal } from './components/ProductQuickViewModal';
import { SocialHubSection } from './components/SocialHubSection';
import { ContactSection } from './components/ContactSection';
import { CartDrawer } from './components/CartDrawer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { Footer } from './components/Footer';

export default function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [isWhatsAppModalOpen, setIsWhatsAppModalOpen] = useState(false);

  // Cart operations
  const handleAddToCart = (product: Product, selectedSize: string, quantity: number) => {
    setCartItems((prev) => {
      const existingIndex = prev.findIndex(
        (item) => item.product.id === product.id && item.selectedSize === selectedSize
      );
      if (existingIndex > -1) {
        const copy = [...prev];
        copy[existingIndex].quantity += quantity;
        return copy;
      }
      return [...prev, { product, selectedSize, quantity }];
    });
  };

  const handleUpdateCartQuantity = (productId: string, size: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.product.id === productId && item.selectedSize === size) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter((item): item is CartItem => item !== null)
    );
  };

  const handleRemoveCartItem = (productId: string, size: string) => {
    setCartItems((prev) =>
      prev.filter(
        (item) => !(item.product.id === productId && item.selectedSize === size)
      )
    );
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const handleNavigateSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const totalCartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F6] text-stone-900 font-sans selection:bg-amber-100 selection:text-amber-900">
      {/* Header with official social links & WhatsApp */}
      <Header
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenWhatsAppModal={() => setIsWhatsAppModalOpen(true)}
        onNavigateSection={handleNavigateSection}
      />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onExploreCollections={() => handleNavigateSection('collections')}
          onOpenWhatsAppModal={() => setIsWhatsAppModalOpen(true)}
        />

        {/* Value Proposition Highlights */}
        <section className="border-b border-stone-200 bg-white py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center sm:text-left">
              <div className="space-y-1">
                <p className="text-xs font-semibold text-stone-900 uppercase tracking-wider">
                  Pure Authentic Fabrics
                </p>
                <p className="text-xs text-stone-500">
                  100% fine Egyptian lawn, micro velvet & pure silk
                </p>
              </div>

              <div className="space-y-1">
                <p className="text-xs font-semibold text-stone-900 uppercase tracking-wider">
                  Direct WhatsApp Orders
                </p>
                <p className="text-xs text-stone-500">
                  Instant confirmation & real-time updates at +92 303 4095758
                </p>
              </div>

              <div className="space-y-1">
                <p className="text-xs font-semibold text-stone-900 uppercase tracking-wider">
                  Custom Stitching
                </p>
                <p className="text-xs text-stone-500">
                  Master tailoring to your precise shoulder & bust specs
                </p>
              </div>

              <div className="space-y-1">
                <p className="text-xs font-semibold text-stone-900 uppercase tracking-wider">
                  Cash on Delivery (COD)
                </p>
                <p className="text-xs text-stone-500">
                  Reliable delivery across Pakistan & global air courier
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Product Catalog & Ordering */}
        <ProductCatalog
          onQuickView={(prod) => setQuickViewProduct(prod)}
          onAddToCart={handleAddToCart}
        />

        {/* Official Social Media Hub (Prominent Display of all 5 platforms) */}
        <SocialHubSection />

        {/* Contact Section with WhatsApp details */}
        <ContactSection />
      </main>

      {/* Footer with All Social Media Icons */}
      <Footer onNavigateSection={handleNavigateSection} />

      {/* Floating WhatsApp Widget */}
      <FloatingWhatsApp
        isOpenExternal={isWhatsAppModalOpen ? true : undefined}
        onCloseExternal={() => setIsWhatsAppModalOpen(false)}
      />

      {/* Product Quick View Modal */}
      <ProductQuickViewModal
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        onAddToCart={handleAddToCart}
      />

      {/* Shopping Bag Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateCartQuantity}
        onRemoveItem={handleRemoveCartItem}
        onClearCart={handleClearCart}
      />
    </div>
  );
}
