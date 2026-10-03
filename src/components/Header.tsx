import React, { useState } from 'react';
import { BRAND_INFO, SOCIAL_CHANNELS } from '../data/socials';
import { SocialPlatformIcon, WhatsAppIcon } from './SocialIcons';

interface HeaderProps {
  cartCount: number;
  onOpenCart: () => void;
  onOpenWhatsAppModal: () => void;
  onNavigateSection: (sectionId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  cartCount,
  onOpenCart,
  onOpenWhatsAppModal,
  onNavigateSection,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (sectionId: string) => {
    setMobileMenuOpen(false);
    onNavigateSection(sectionId);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FAF9F6]/95 backdrop-blur-md border-b border-stone-200/80 transition-all">
      {/* Slim Top Utility Strip */}
      <div className="bg-stone-900 text-stone-200 text-xs py-1.5 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 truncate">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            <span className="font-normal text-stone-300">Fast Delivery Across Pakistan & Worldwide</span>
            <span className="hidden sm:inline text-stone-500">·</span>
            <span className="hidden sm:inline text-stone-300">Custom Stitching Available</span>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href={BRAND_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-stone-300 hover:text-emerald-400 transition-colors"
              title="Direct WhatsApp Helpline"
            >
              <WhatsAppIcon className="w-3.5 h-3.5 text-emerald-400" />
              <span className="font-medium text-[11px] sm:text-xs">Order Helpline: {BRAND_INFO.whatsappNumber}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar (Strict 3-Zone Contract) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
        {/* Zone 1: Wordmark */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('hero');
          }}
          className="font-serif text-2xl sm:text-3xl font-bold tracking-wider text-stone-900 hover:opacity-90 transition-opacity"
        >
          {BRAND_INFO.name}
        </a>

        {/* Zone 2: Nav Links */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-stone-700">
          <button
            onClick={() => handleNavClick('collections')}
            className="hover:text-stone-950 transition-colors cursor-pointer py-1"
          >
            Collections
          </button>
          <button
            onClick={() => handleNavClick('luxury-lawn')}
            className="hover:text-stone-950 transition-colors cursor-pointer py-1"
          >
            Luxury Lawn
          </button>
          <button
            onClick={() => handleNavClick('festive-pret')}
            className="hover:text-stone-950 transition-colors cursor-pointer py-1"
          >
            Festive Prêt
          </button>
          <button
            onClick={() => handleNavClick('home-couture')}
            className="hover:text-stone-950 transition-colors cursor-pointer py-1"
          >
            Home Linen
          </button>
          <button
            onClick={() => handleNavClick('social-hub')}
            className="hover:text-stone-950 transition-colors cursor-pointer py-1"
          >
            Official Socials
          </button>
          <button
            onClick={() => handleNavClick('contact')}
            className="hover:text-stone-950 transition-colors cursor-pointer py-1"
          >
            Contact
          </button>
        </nav>

        {/* Zone 3: Header Social Links + Actions */}
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Official Social Media Icons in Header */}
          <div className="hidden md:flex items-center gap-1 border-r border-stone-200 pr-3">
            {SOCIAL_CHANNELS.map((channel) => (
              <a
                key={channel.id}
                href={channel.url}
                target="_blank"
                rel="noopener noreferrer"
                title={`${channel.name} (${channel.handle})`}
                aria-label={`LIBAS HOME on ${channel.name}`}
                className="p-1.5 text-stone-600 hover:text-stone-900 hover:bg-stone-100 rounded-full transition-colors"
              >
                <SocialPlatformIcon platformId={channel.id} className="w-4 h-4" />
              </a>
            ))}
          </div>

          {/* WhatsApp Direct Header Button */}
          <button
            onClick={onOpenWhatsAppModal}
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 rounded-full transition-colors cursor-pointer"
            title="Chat directly on WhatsApp"
          >
            <WhatsAppIcon className="w-4 h-4 text-emerald-600" />
            <span className="whitespace-nowrap">Order on WhatsApp</span>
          </button>

          {/* Cart Icon Button */}
          <button
            onClick={onOpenCart}
            aria-label="View Shopping Bag"
            className="relative p-2 text-stone-800 hover:text-stone-950 rounded-full hover:bg-stone-100 transition-colors cursor-pointer"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.75}
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              />
            </svg>
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 flex items-center justify-center min-w-5 h-5 px-1 bg-stone-900 text-white text-[11px] font-bold rounded-full tabular-nums">
                {cartCount}
              </span>
            )}
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className="lg:hidden p-2 text-stone-700 hover:text-stone-950 rounded-lg hover:bg-stone-100 transition-colors"
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-stone-200 bg-[#FAF9F6] px-5 py-6 space-y-5 animate-in fade-in duration-200">
          <div className="flex flex-col gap-3 font-medium text-stone-800 text-base">
            <button
              onClick={() => handleNavClick('collections')}
              className="text-left py-1 hover:text-stone-950 transition-colors"
            >
              Collections & Catalog
            </button>
            <button
              onClick={() => handleNavClick('luxury-lawn')}
              className="text-left py-1 hover:text-stone-950 transition-colors"
            >
              Luxury Lawn
            </button>
            <button
              onClick={() => handleNavClick('festive-pret')}
              className="text-left py-1 hover:text-stone-950 transition-colors"
            >
              Festive Prêt
            </button>
            <button
              onClick={() => handleNavClick('home-couture')}
              className="text-left py-1 hover:text-stone-950 transition-colors"
            >
              Home Couture & Bed Linen
            </button>
            <button
              onClick={() => handleNavClick('social-hub')}
              className="text-left py-1 hover:text-stone-950 transition-colors"
            >
              Official Social Media Hub
            </button>
            <button
              onClick={() => handleNavClick('contact')}
              className="text-left py-1 hover:text-stone-950 transition-colors"
            >
              Contact & Store Info
            </button>
          </div>

          <div className="pt-4 border-t border-stone-200">
            <p className="text-xs uppercase tracking-wider text-stone-500 font-semibold mb-3">
              Connect with LIBAS HOME
            </p>
            <div className="grid grid-cols-2 gap-2">
              {SOCIAL_CHANNELS.map((ch) => (
                <a
                  key={ch.id}
                  href={ch.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-2 rounded-lg bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-medium transition-colors"
                >
                  <SocialPlatformIcon platformId={ch.id} className="w-4 h-4 shrink-0" />
                  <span className="truncate">{ch.name}</span>
                </a>
              ))}
            </div>

            <div className="mt-3">
              <a
                href={BRAND_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-2.5 px-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-sm font-semibold shadow-sm transition-colors"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span>Chat on WhatsApp (+92 303 4095758)</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
