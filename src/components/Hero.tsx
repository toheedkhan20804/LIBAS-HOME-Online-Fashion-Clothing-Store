import React from 'react';
import { BRAND_INFO, SOCIAL_CHANNELS } from '../data/socials';
import { SocialPlatformIcon, WhatsAppIcon } from './SocialIcons';
import heroImg from '../assets/images/hero_libas_couture_1790997501283.jpg';

interface HeroProps {
  onExploreCollections: () => void;
  onOpenWhatsAppModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreCollections,
  onOpenWhatsAppModal,
}) => {
  return (
    <section id="hero" className="relative overflow-hidden bg-stone-900 text-stone-100">
      {/* Background Image with Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImg}
          alt="LIBAS HOME luxury eastern fashion and couture"
          className="w-full h-full object-cover object-center opacity-40 scale-105 transition-transform duration-1000 ease-out"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-stone-950 via-stone-950/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-20 sm:py-28 lg:py-36 min-h-[580px] flex flex-col justify-center">
        <div className="max-w-2xl space-y-6">
          {/* Subtle unboxed metadata */}
          <div className="flex items-center gap-2 text-xs tracking-widest uppercase font-semibold text-amber-300">
            <span>Festive Prêt & Luxury Lawn</span>
            <span aria-hidden="true" className="text-stone-500">·</span>
            <span>Home Living Suite</span>
            <span aria-hidden="true" className="text-stone-500">·</span>
            <span>Worldwide Shipping</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-white text-balance leading-tight">
            Artisanal Eastern Couture & Refined Living
          </h1>

          <p className="text-base sm:text-lg text-stone-300 leading-relaxed font-normal">
            Welcome to the official online home of <strong className="text-white font-semibold">LIBAS HOME</strong>. Explore handcrafted 3-piece luxury lawn, zardozi festive ensembles, and bridal home textiles — tailored for unmatched elegance.
          </p>

          {/* Primary Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              onClick={onExploreCollections}
              className="px-6 py-3.5 bg-amber-100 hover:bg-white text-stone-950 font-semibold text-sm rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer"
            >
              Explore New Catalog
            </button>

            <button
              onClick={onOpenWhatsAppModal}
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm rounded-lg shadow-lg transition-all duration-200 cursor-pointer"
            >
              <WhatsAppIcon className="w-5 h-5 text-white" />
              <span>Order via WhatsApp</span>
            </button>
          </div>

          {/* Adjacency Trust Markers: WhatsApp Helpline & Official Socials */}
          <div className="pt-6 border-t border-stone-800 flex flex-wrap items-center gap-y-3 gap-x-6 text-xs text-stone-400">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>WhatsApp Helpline:</span>
              <a
                href={BRAND_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-200 hover:text-emerald-400 font-semibold underline underline-offset-4 transition-colors"
              >
                {BRAND_INFO.whatsappNumber}
              </a>
            </div>

            <div className="flex items-center gap-2">
              <span>Follow our socials:</span>
              <div className="flex items-center gap-1.5 text-stone-300">
                {SOCIAL_CHANNELS.map((ch) => (
                  <a
                    key={ch.id}
                    href={ch.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={ch.name}
                    aria-label={`LIBAS HOME on ${ch.name}`}
                    className="p-1 rounded hover:text-white hover:bg-stone-800 transition-colors"
                  >
                    <SocialPlatformIcon platformId={ch.id} className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
