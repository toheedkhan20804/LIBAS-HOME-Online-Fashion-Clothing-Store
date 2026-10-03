import React, { useState } from 'react';
import { BRAND_INFO, createWhatsAppInquiryLink } from '../data/socials';
import { WhatsAppIcon } from './SocialIcons';

interface FloatingWhatsAppProps {
  isOpenExternal?: boolean;
  onCloseExternal?: () => void;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({
  isOpenExternal,
  onCloseExternal,
}) => {
  const [isOpenInternal, setIsOpenInternal] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState('Product Order Inquiry');
  const [customMessage, setCustomMessage] = useState('');

  const isOpen = isOpenExternal !== undefined ? isOpenExternal : isOpenInternal;
  const setIsOpen = (val: boolean) => {
    if (onCloseExternal && !val) {
      onCloseExternal();
    }
    setIsOpenInternal(val);
  };

  const handleStartChat = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const url = createWhatsAppInquiryLink(selectedTopic, customMessage.trim());
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      {/* Interactive Popover Modal / Card */}
      {isOpen && (
        <div
          role="dialog"
          aria-labelledby="whatsapp-chat-title"
          className="fixed bottom-20 right-4 sm:right-6 z-50 w-[calc(100vw-2rem)] max-w-sm bg-white rounded-2xl shadow-2xl border border-stone-200 overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-200"
        >
          {/* Header */}
          <div className="bg-emerald-700 text-white p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-xs">
                    <WhatsAppIcon className="w-6 h-6 text-white" />
                  </div>
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-300 border-2 border-emerald-700 rounded-full"></span>
                </div>
                <div>
                  <h3 id="whatsapp-chat-title" className="font-semibold text-sm leading-snug">
                    LIBAS HOME Support
                  </h3>
                  <p className="text-[11px] text-emerald-100 flex items-center gap-1">
                    <span>{BRAND_INFO.whatsappNumber}</span>
                    <span>·</span>
                    <span className="text-emerald-200">Online</span>
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                aria-label="Close WhatsApp chat popup"
                className="text-white/80 hover:text-white p-1 rounded-full hover:bg-white/10 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <p className="mt-2 text-xs text-emerald-50 leading-relaxed">
              Assalam-o-Alaikum! We are here to assist with new collection orders, custom sizing, and product inquiries.
            </p>
          </div>

          {/* Body */}
          <div className="p-4 space-y-3 bg-[#FAF9F6]">
            <div>
              <label className="block text-xs font-semibold text-stone-700 mb-1.5">
                Select your inquiry type:
              </label>
              <div className="grid grid-cols-2 gap-1.5">
                {[
                  'Place an Order',
                  'Custom Stitching',
                  'Fabric Inquiries',
                  'Track My Parcel',
                ].map((topic) => (
                  <button
                    key={topic}
                    type="button"
                    onClick={() => setSelectedTopic(topic)}
                    className={`text-left px-2.5 py-1.5 rounded-lg text-xs font-medium border transition-colors cursor-pointer ${
                      selectedTopic === topic
                        ? 'bg-emerald-50 border-emerald-600 text-emerald-900 font-semibold'
                        : 'bg-white border-stone-200 text-stone-700 hover:border-stone-400'
                    }`}
                  >
                    {topic}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-stone-700 mb-1.5">
                Custom note or question (optional):
              </label>
              <textarea
                value={customMessage}
                onChange={(e) => setCustomMessage(e.target.value)}
                placeholder="Mention article name, size, or delivery city..."
                rows={2}
                className="w-full text-xs p-2.5 bg-white border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-transparent resize-none text-stone-800"
              />
            </div>

            <button
              onClick={() => handleStartChat()}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs rounded-xl shadow-md transition-colors cursor-pointer"
            >
              <WhatsAppIcon className="w-4 h-4" />
              <span>Send Message on WhatsApp</span>
            </button>

            <div className="text-center">
              <a
                href={BRAND_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-[11px] text-stone-500 hover:text-stone-800 underline underline-offset-2"
              >
                Or open direct link: {BRAND_INFO.whatsappLink}
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Floating Action Button (Always visible on mobile & desktop) */}
      <div className="fixed bottom-5 right-4 sm:right-6 z-40">
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Chat with LIBAS HOME on WhatsApp"
          className="group relative flex items-center gap-2.5 bg-emerald-600 hover:bg-emerald-500 text-white pl-3.5 pr-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform active:scale-95 cursor-pointer focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-emerald-500"
        >
          {/* Active pulse dot */}
          <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-400 border-2 border-white"></span>
          </span>

          <WhatsAppIcon className="w-6 h-6 text-white shrink-0" />
          <span className="hidden sm:inline font-semibold text-xs tracking-wide">
            Chat on WhatsApp
          </span>
        </button>
      </div>
    </>
  );
};
