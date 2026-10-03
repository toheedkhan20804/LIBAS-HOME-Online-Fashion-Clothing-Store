import React, { useState } from 'react';
import { BRAND_INFO, createWhatsAppInquiryLink } from '../data/socials';
import { WhatsAppIcon } from './SocialIcons';

export const ContactSection: React.FC = () => {
  const [name, setName] = useState('');
  const [city, setCity] = useState('');
  const [inquiryType, setInquiryType] = useState('Order & Sizing Inquiry');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formatted = `Name: ${name || 'Customer'}\nCity/Location: ${city || 'Not specified'}\nNote: ${message || 'No additional note'}`;
    const url = createWhatsAppInquiryLink(inquiryType, formatted);
    window.open(url, '_blank', 'noopener,noreferrer');
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Direct Contact Details */}
        <div className="lg:col-span-5 space-y-6">
          <div>
            <div className="text-xs font-semibold uppercase tracking-widest text-stone-500 mb-1">
              Direct Inquiries & Assistance
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900">
              Get in Touch with {BRAND_INFO.name}
            </h2>
            <p className="text-sm text-stone-600 mt-3 leading-relaxed">
              Whether you wish to place a custom order, inquire about wholesale availability, or require stitching guidance, our team is ready to assist you.
            </p>
          </div>

          <div className="space-y-4 pt-4 border-t border-stone-200">
            {/* WhatsApp Contact Box */}
            <div className="p-5 rounded-2xl bg-emerald-50/60 border border-emerald-200/80 flex items-start gap-4">
              <div className="p-3 bg-emerald-600 text-white rounded-xl shadow-xs shrink-0">
                <WhatsAppIcon className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h3 className="font-semibold text-sm text-stone-900">WhatsApp Orders & Support</h3>
                <p className="text-xs text-stone-600">Quickest response for orders, fabric videos, and measurements.</p>
                <div className="pt-2">
                  <a
                    href={BRAND_INFO.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-emerald-800 font-bold text-sm hover:text-emerald-950 transition-colors"
                  >
                    <span>{BRAND_INFO.whatsappNumber}</span>
                    <span className="text-xs font-normal underline underline-offset-2">· Chat Now &rarr;</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Timings & Delivery */}
            <div className="p-5 rounded-2xl bg-white border border-stone-200 space-y-3 text-xs text-stone-700">
              <div className="flex items-center justify-between py-1 border-b border-stone-100">
                <span className="font-medium text-stone-500">Service Hours:</span>
                <span className="font-semibold text-stone-900">{BRAND_INFO.workingHours}</span>
              </div>
              <div className="flex items-center justify-between py-1 border-b border-stone-100">
                <span className="font-medium text-stone-500">Payment Modes:</span>
                <span className="font-semibold text-stone-900">Cash on Delivery (COD) & Bank Transfer</span>
              </div>
              <div className="flex items-center justify-between py-1">
                <span className="font-medium text-stone-500">Delivery Coverage:</span>
                <span className="font-semibold text-stone-900">All Pakistan & Express Worldwide</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Inquiry Form */}
        <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-stone-200 shadow-sm">
          <h3 className="font-serif text-xl font-bold text-stone-900 mb-1">
            Send an Instant Order Inquiry
          </h3>
          <p className="text-xs text-stone-500 mb-6">
            Fill out your details below to directly connect with our order team via WhatsApp with all inquiry details pre-filled.
          </p>

          {submitted && (
            <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs">
              Opening WhatsApp with your order message... If it didn&apos;t open automatically, click{' '}
              <a
                href={BRAND_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="underline font-bold"
              >
                here
              </a>.
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">Your Name</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Fatima Ali"
                  className="w-full text-xs p-3 bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-stone-900 focus:bg-white transition-all text-stone-900"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">City / Country</label>
                <input
                  type="text"
                  required
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  placeholder="e.g. Lahore, Islamabad, UK, USA"
                  className="w-full text-xs p-3 bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-stone-900 focus:bg-white transition-all text-stone-900"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-stone-700 mb-1">Inquiry Purpose</label>
              <select
                value={inquiryType}
                onChange={(e) => setInquiryType(e.target.value)}
                className="w-full text-xs p-3 bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-stone-900 focus:bg-white transition-all text-stone-900"
              >
                <option>Order & Sizing Inquiry</option>
                <option>Custom Stitching Consultation</option>
                <option>Home Living & Bed Linen Booking</option>
                <option>Wholesale / Reseller Inquiries</option>
                <option>Shipping & Delivery Query</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-stone-700 mb-1">Product Details or Question</label>
              <textarea
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Mention desired dress title, preferred sizing, or questions..."
                className="w-full text-xs p-3 bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-stone-900 focus:bg-white transition-all resize-none text-stone-900"
              />
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 py-3.5 px-6 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm rounded-xl shadow-md transition-colors cursor-pointer"
            >
              <WhatsAppIcon className="w-5 h-5 text-white" />
              <span>Connect on WhatsApp Now (+92 303 4095758)</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
