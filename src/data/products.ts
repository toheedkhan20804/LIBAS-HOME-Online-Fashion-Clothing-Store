import { Product } from '../types';

import luxuryLawnImg from '../assets/images/product_luxury_lawn_1790997512679.jpg';
import festiveFormalImg from '../assets/images/product_festive_formal_1790997522168.jpg';
import homeBeddingImg from '../assets/images/product_home_bedding_1790997531754.jpg';
import heroCoutureImg from '../assets/images/hero_libas_couture_1790997501283.jpg';

export const PRODUCTS: Product[] = [
  {
    id: 'lh-101',
    name: 'Noor-e-Bahar Embroidered Luxury Lawn',
    category: 'Luxury Lawn',
    pricePKR: 8950,
    originalPricePKR: 10500,
    image: luxuryLawnImg,
    description: 'Bespoke 3-piece luxury lawn suit featuring intricate thread embroidery on neckline, organza embroidered daman border, dyed cambric trouser, and pure digital printed silk dupatta.',
    details: [
      'Embroidered front with sequin hand-touch',
      'Digital printed pure medium silk dupatta (2.5m)',
      'Dyed lawn back and sleeves (2.0m)',
      'Organza embroidered sleeve patch & daman lace',
      'Dyed premium cambric cotton trousers'
    ],
    fabric: 'Premium 80/80 Egyptian Lawn & Pure Silk',
    pieces: '3-Piece Unstitched / Custom Stitched',
    sizes: ['Unstitched', 'Small', 'Medium', 'Large', 'Custom'],
    isNewArrival: true,
    isBestSeller: true,
  },
  {
    id: 'lh-102',
    name: 'Shahzadi Zardozi Velvet Ensemble',
    category: 'Festive Prêt',
    pricePKR: 16500,
    originalPricePKR: 19500,
    image: festiveFormalImg,
    description: 'An opulent royal maroon micro-velvet formal ensemble with elaborate gold tilla, dabka, and zardozi craftsmanship. Paired with hand-worked organza dupatta and raw silk cigarette pants.',
    details: [
      'Pure 9000 Micro-Velvet shirt with heavy zardozi neckline',
      'Hand-crafted kora and dabka embellishments along daman',
      'Net organza scalloped dupatta with golden pearl hangings',
      'Dyed Korean raw silk pants with embellished cuffs',
      'Inner slip included'
    ],
    fabric: 'Pure 9000 Micro Velvet & Organza',
    pieces: '3-Piece Stitched Prêt',
    sizes: ['Small', 'Medium', 'Large', 'X-Large', 'Custom Stitched'],
    isNewArrival: true,
    isBestSeller: true,
  },
  {
    id: 'lh-103',
    name: 'Imperial Jacquard Bridal Quilt & Bedding Suite',
    category: 'Home Couture',
    pricePKR: 14800,
    originalPricePKR: 17500,
    image: homeBeddingImg,
    description: 'From our signature LIBAS HOME living collection. An 8-piece royal jacquard bridal bed set tailored with woven golden motifs, plush quilted bedspread, matching pillow shams, and satin decor cushions.',
    details: [
      '1 Heavy Quilted King Size Jacquard Bedspread (240x260 cm)',
      '1 Cotton Satin Fitted Bed Sheet (240x250 cm)',
      '2 Quilted Jacquard Flanged Pillow Covers',
      '2 Plain Satin Sleeping Pillow Covers',
      '2 Square Filled Decorative Accent Cushions'
    ],
    fabric: 'Imported Golden Jacquard & 100% Breathable Cotton Satin',
    pieces: '8-Piece Master Bedroom Luxury Set',
    sizes: ['King Size', 'Queen Size'],
    isNewArrival: false,
    isBestSeller: true,
  },
  {
    id: 'lh-104',
    name: 'Daria-e-Noor Champagne Tissue Prêt',
    category: 'Velvet & Silk',
    pricePKR: 13900,
    originalPricePKR: 15800,
    image: heroCoutureImg,
    description: 'A luminous festive silhouette handcrafted on shimmering champagne tissue silk. Adorned with delicate cutwork sleeves, floral resham thread embroidery, and pearl tassel accents.',
    details: [
      'Embroidered shimmering tissue silk kalidar shirt',
      'Handcrafted pearl and crystal neckline buttons',
      'Embroidered organza dupatta with four-side borders',
      'Dyed silk slip and straight trousers',
      'Breathable lining throughout'
    ],
    fabric: 'Pure Tissue Silk & Sheer Organza',
    pieces: '3-Piece Prêt Formal',
    sizes: ['Small', 'Medium', 'Large', 'Custom'],
    isNewArrival: true,
    isBestSeller: false,
  },
  {
    id: 'lh-105',
    name: 'Gul-o-Gulzar Chiffon Festive Edition',
    category: 'Festive Prêt',
    pricePKR: 11500,
    originalPricePKR: 13200,
    image: luxuryLawnImg,
    description: 'Graceful embroidered crinkle chiffon shirt adorned with subtle pastel resham embroidery, sequin work, and a lavish chiffon dupatta bordered with gota patti.',
    details: [
      'Embroidered pure crinkle chiffon front & back',
      'Heavy embroidered chiffon dupatta (2.5m)',
      'Cotton silk inner slip included',
      'Dyed raw silk trousers with lace trims'
    ],
    fabric: 'Pure Crinkle Chiffon & Raw Silk',
    pieces: '3-Piece Stitched Ensemble',
    sizes: ['Small', 'Medium', 'Large'],
    isNewArrival: false,
    isBestSeller: true,
  },
  {
    id: 'lh-106',
    name: 'Sultana Velvet Shawl & Unstitched Kurti',
    category: 'Velvet & Silk',
    pricePKR: 9800,
    originalPricePKR: 11900,
    image: festiveFormalImg,
    description: 'Signature plush micro-velvet shawl with heavily embroidered 4-sided matha patti borders and all-over floral bootis, paired with a matching embroidered unstitched shirt piece.',
    details: [
      '2.5 meter pure velvet shawl with golden tilla work',
      'Embroidered velvet front panel for shirt (1.25m)',
      'Plain velvet fabric for back & sleeves (1.75m)',
      'High density embroidery with finished piping'
    ],
    fabric: 'Pure Micro Velvet',
    pieces: '2-Piece Shawl & Kurti Set',
    sizes: ['Standard / Free Size'],
    isNewArrival: false,
    isBestSeller: false,
  }
];
