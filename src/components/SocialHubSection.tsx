import React from 'react';
import { SOCIAL_CHANNELS, BRAND_INFO } from '../data/socials';
import { SocialPlatformIcon, WhatsAppIcon } from './SocialIcons';

export const SocialHubSection: React.FC = () => {
  return (
    <section id="social-hub" className="py-16 sm:py-24 bg-stone-100/70 border-y border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="text-xs font-semibold uppercase tracking-widest text-stone-500 mb-2">
            Stay Connected With LIBAS HOME
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 text-balance">
            Official Social Media & Digital Channels
          </h2>
          <p className="text-sm text-stone-600 mt-3 leading-relaxed">
            Follow our verified accounts for new seasonal drops, behind-the-scenes embroidery, unboxing videos, and direct customer support.
          </p>
        </div>

        {/* Social Platform Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SOCIAL_CHANNELS.map((channel) => (
            <div
              key={channel.id}
              className="group bg-white rounded-2xl p-6 border border-stone-200/90 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-stone-50 border border-stone-100 flex items-center justify-center text-stone-900 group-hover:scale-105 transition-transform">
                      <SocialPlatformIcon platformId={channel.id} className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-base text-stone-900 flex items-center gap-1.5">
                        {channel.name}
                        <svg className="w-4 h-4 text-sky-500" viewBox="0 0 20 20" fill="currentColor">
                          <path
                            fillRule="evenodd"
                            d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </h3>
                      <p className="text-xs text-stone-500 font-mono">{channel.handle}</p>
                    </div>
                  </div>
                  <span className="text-[11px] font-medium text-stone-500 bg-stone-100 px-2 py-1 rounded-md">
                    {channel.badgeText}
                  </span>
                </div>

                <p className="text-xs text-stone-600 leading-relaxed mb-6">
                  {channel.description}
                </p>
              </div>

              <div>
                <a
                  href={channel.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-semibold bg-stone-900 hover:bg-stone-800 text-white transition-all duration-200 group-hover:shadow-md"
                >
                  <span>Open {channel.name} Profile</span>
                  <svg className="w-3.5 h-3.5 text-stone-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          ))}

          {/* Featured WhatsApp Direct Communication Card */}
          <div className="bg-gradient-to-br from-emerald-800 via-emerald-900 to-teal-950 text-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center backdrop-blur-xs">
                    <WhatsAppIcon className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-base text-white flex items-center gap-1.5">
                      WhatsApp Support
                    </h3>
                    <p className="text-xs text-emerald-200 font-mono">{BRAND_INFO.whatsappNumber}</p>
                  </div>
                </div>
                <span className="text-[11px] font-semibold text-emerald-200 bg-emerald-800/80 px-2 py-1 rounded-md">
                  Active Now
                </span>
              </div>

              <p className="text-xs text-emerald-100 leading-relaxed mb-6">
                Fastest way to order, request custom stitching measurements, or ask about international parcel rates directly with our team.
              </p>
            </div>

            <div>
              <a
                href={BRAND_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-semibold bg-emerald-500 hover:bg-emerald-400 text-stone-950 transition-colors shadow-sm"
              >
                <WhatsAppIcon className="w-4 h-4 text-stone-950" />
                <span>Chat on WhatsApp Directly</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
