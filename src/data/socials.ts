import { SocialChannel } from '../types';

export const BRAND_INFO = {
  name: 'LIBAS HOME',
  tagline: 'Luxury Eastern Fashion & Home Couture',
  whatsappNumber: '+92 303 4095758',
  whatsappFormatted: '+92 303 4095758',
  whatsappRaw: '923034095758',
  whatsappLink: 'https://wa.me/923034095758',
  address: 'Lahore Fashion District, Punjab, Pakistan',
  email: 'info@libashome.com',
  workingHours: 'Mon - Sat: 10:00 AM - 9:00 PM (PKT)',
  deliveryNotice: 'Cash on Delivery (COD) Nationwide & Express International Shipping',
};

export const SOCIAL_CHANNELS: SocialChannel[] = [
  {
    id: 'facebook',
    name: 'Facebook',
    handle: 'LIBAS HOME Official',
    url: 'http://www.facebook.com/share/1Di1B9J2Su/',
    description: 'Join our Facebook community for customer reviews, live exhibitions & launch alerts.',
    brandColor: '#1877F2',
    hoverBg: 'hover:bg-[#1877F2] hover:text-white',
    hoverBorder: 'hover:border-[#1877F2]',
    badgeText: 'Official Page',
  },
  {
    id: 'instagram',
    name: 'Instagram',
    handle: '@libas_home3',
    url: 'https://www.instagram.com/libas_home3/',
    description: 'Follow our daily lookbooks, reel lookbooks, styling videos and client spotlights.',
    brandColor: '#E1306C',
    hoverBg: 'hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] hover:text-white',
    hoverBorder: 'hover:border-[#E1306C]',
    badgeText: 'Follow @libas_home3',
  },
  {
    id: 'blogger',
    name: 'Blogger',
    handle: 'libashome.blogspot.com',
    url: 'https://libashome.blogspot.com/',
    description: 'Read the official Libas Home editorial blog, styling guides & fabric care insights.',
    brandColor: '#FF5722',
    hoverBg: 'hover:bg-[#FF5722] hover:text-white',
    hoverBorder: 'hover:border-[#FF5722]',
    badgeText: 'Official Blog',
  },
  {
    id: 'tiktok',
    name: 'TikTok',
    handle: '@libas_home3',
    url: 'https://www.tiktok.com/@libas_home3',
    description: 'Trending dress reveals, stitching BTS, embroidery closeups & styling transitions.',
    brandColor: '#000000',
    hoverBg: 'hover:bg-black hover:text-white',
    hoverBorder: 'hover:border-black',
    badgeText: 'Watch @libas_home3',
  },
  {
    id: 'youtube',
    name: 'YouTube',
    handle: '@libas_home3',
    url: 'https://www.youtube.com/@libas_home3',
    description: 'Watch 4K collection unboxing, unstitched suit fabric walk-throughs & fashion films.',
    brandColor: '#FF0000',
    hoverBg: 'hover:bg-[#FF0000] hover:text-white',
    hoverBorder: 'hover:border-[#FF0000]',
    badgeText: 'Subscribe @libas_home3',
  },
];

export const createWhatsAppOrderLink = (productTitle: string, pricePKR: number, size?: string) => {
  const message = `Hello LIBAS HOME! I would like to order the following item from your website:\n\n` +
    `• Product: ${productTitle}\n` +
    `• Price: PKR ${pricePKR.toLocaleString()}\n` +
    (size ? `• Selected Size: ${size}\n` : '') +
    `\nPlease let me know about availability and delivery details. Thank you!`;
  return `https://wa.me/923034095758?text=${encodeURIComponent(message)}`;
};

export const createWhatsAppCartOrderLink = (items: { name: string; size: string; quantity: number; price: number }[], total: number) => {
  const itemList = items
    .map((item, idx) => `${idx + 1}. ${item.name} (${item.size}) x${item.quantity} = PKR ${(item.price * item.quantity).toLocaleString()}`)
    .join('\n');
  const message = `Hello LIBAS HOME! I would like to place an order for the following items:\n\n` +
    `${itemList}\n\n` +
    `Total Amount: PKR ${total.toLocaleString()}\n\n` +
    `Please confirm order availability and provide payment/Cash-on-Delivery instructions.`;
  return `https://wa.me/923034095758?text=${encodeURIComponent(message)}`;
};

export const createWhatsAppInquiryLink = (inquiryType: string, customText?: string) => {
  const message = `Hello LIBAS HOME!\n` +
    `I am contacting you regarding: ${inquiryType}.\n\n` +
    (customText ? `${customText}\n\n` : '') +
    `Looking forward to your assistance.`;
  return `https://wa.me/923034095758?text=${encodeURIComponent(message)}`;
};
