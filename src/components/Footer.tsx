import React from 'react';
import { BRAND_INFO, SOCIAL_CHANNELS } from '../data/socials';
import { SocialPlatformIcon, WhatsAppIcon } from './SocialIcons';

interface FooterProps {
  onNavigateSection: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigateSection }) => {
  return (
    <footer className="bg-stone-950 text-stone-300 border-t border-stone-800">
      {/* Upper Footer: Brand, Navigation, Social Channels & Contact */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Brand Info & Mission (Col 1-5) */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="font-serif text-2xl font-bold tracking-wider text-white">
              {BRAND_INFO.name}
            </h3>
            <p className="text-xs text-stone-400 leading-relaxed max-w-sm">
              Crafting timeless Pakistani festive wear, luxury unstitched lawn, and artisanal home bed linen. Designed with devotion to traditional craftsmanship and modern silhouette perfection.
            </p>

            <div className="pt-2 space-y-1.5 text-xs text-stone-400">
              <p className="flex items-center gap-2">
                <span className="text-stone-500">Address:</span>
                <span className="text-stone-300">{BRAND_INFO.address}</span>
              </p>
              <p className="flex items-center gap-2">
                <span className="text-stone-500">Service Hours:</span>
                <span className="text-stone-300">{BRAND_INFO.workingHours}</span>
              </p>
            </div>
          </div>

          {/* Quick Navigation Links (Col 5-7) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-100">
              Collections
            </h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li>
                <button
                  onClick={() => onNavigateSection('collections')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  All Products
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('collections')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Luxury Lawn & Silk
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('collections')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Festive Prêt Formals
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('collections')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Bridal Bedding Couture
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('contact')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Custom Sizing Guide
                </button>
              </li>
            </ul>
          </div>

          {/* Direct WhatsApp Ordering Information (Col 7-9) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-100">
              Instant Order Support
            </h4>
            <p className="text-xs text-stone-400 leading-relaxed">
              Order directly or request detailed fabric videos and customized measurements through our official WhatsApp desk.
            </p>
            <div className="pt-1">
              <a
                href={BRAND_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl bg-emerald-900/60 hover:bg-emerald-800 text-emerald-200 border border-emerald-700/60 transition-colors text-xs font-semibold"
              >
                <WhatsAppIcon className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp: {BRAND_INFO.whatsappNumber}</span>
              </a>
            </div>
            <p className="text-[11px] text-stone-500">
              Direct Link: <a href={BRAND_INFO.whatsappLink} target="_blank" rel="noopener noreferrer" className="underline hover:text-stone-300">wa.me/923034095758</a>
            </p>
          </div>

          {/* Official Social Media Channels (Col 9-12) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-100">
              Official Social Channels
            </h4>
            <p className="text-xs text-stone-400">
              Connect with LIBAS HOME across all our official platforms:
            </p>

            <div className="grid grid-cols-1 gap-2 pt-1">
              {SOCIAL_CHANNELS.map((channel) => (
                <a
                  key={channel.id}
                  href={channel.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between px-3 py-2 rounded-lg bg-stone-900 border border-stone-800 hover:border-stone-700 text-stone-300 hover:text-white transition-all text-xs"
                  title={`${channel.name} Profile`}
                >
                  <div className="flex items-center gap-2.5">
                    <SocialPlatformIcon
                      platformId={channel.id}
                      className="w-4 h-4 text-stone-400 group-hover:text-amber-400 transition-colors"
                    />
                    <span className="font-medium">{channel.name}</span>
                  </div>
                  <span className="text-[11px] text-stone-500 font-mono group-hover:text-stone-300 transition-colors truncate max-w-[130px]">
                    {channel.handle}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Horizontal Full Social Bar with Official Logos & Hover Effects */}
        <div className="mt-12 pt-8 border-t border-stone-800/80">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-stone-400">
                Official Channels:
              </span>
              <div className="flex items-center gap-2">
                {SOCIAL_CHANNELS.map((ch) => (
                  <a
                    key={ch.id}
                    href={ch.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={`LIBAS HOME on ${ch.name}`}
                    aria-label={`LIBAS HOME on ${ch.name}`}
                    className="p-2 rounded-lg bg-stone-900 border border-stone-800 text-stone-400 hover:text-white hover:bg-stone-800 hover:border-stone-700 transition-all transform hover:-translate-y-0.5"
                  >
                    <SocialPlatformIcon platformId={ch.id} className="w-4 h-4" />
                  </a>
                ))}
                <a
                  href={BRAND_INFO.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={`Chat on WhatsApp: ${BRAND_INFO.whatsappNumber}`}
                  aria-label="LIBAS HOME on WhatsApp"
                  className="p-2 rounded-lg bg-emerald-950 border border-emerald-900 text-emerald-400 hover:text-white hover:bg-emerald-900 transition-all transform hover:-translate-y-0.5"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 text-xs text-stone-500">
              <span>All Rights Reserved</span>
              <span>·</span>
              <span>Authentic Pakistani Fabrics</span>
              <span>·</span>
              <span>Secure Nationwide COD</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Strip */}
      <div className="bg-stone-900 py-4 px-4 sm:px-6 border-t border-stone-800/60 text-center text-xs text-stone-500">
        <p>
          &copy; {new Date().getFullYear()} <strong className="text-stone-300 font-semibold">{BRAND_INFO.name}</strong>. All social media icons and links are official and verified. Direct WhatsApp: {BRAND_INFO.whatsappNumber}
        </p>
      </div>
    </footer>
  );
};
