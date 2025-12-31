export interface Offer {
  id: string;
  name: string;
  description: string;
  price: string;
  cta: string;
  shopifyVariantId: string; // Full GraphQL ID
}

export const offers: Offer[] = [
  {
    id: 'diagnosis-session',
    name: 'Diagnosis Session',
    description: '90-minute operational deep-dive with bottleneck mapping and ROI projections',
    price: 'R2,500',
    cta: 'Book Session',
    shopifyVariantId: 'gid://shopify/ProductVariant/46707861029033',
  },
  {
    id: 'system-deployment',
    name: 'System Deployment',
    description: 'Pre-built AI systems (Mark, Clara, Avery) deployed and customized for your business',
    price: 'From R8,000',
    cta: 'Get Started',
    shopifyVariantId: 'gid://shopify/ProductVariant/46707861061801',
  },
  {
    id: 'solution-partnership',
    name: 'Solution Partnership',
    description: 'Custom architecture, implementation, and ongoing optimization for bespoke solutions',
    price: 'From R20,000/mo',
    cta: 'Discuss Partnership',
    shopifyVariantId: 'gid://shopify/ProductVariant/46707861094569',
  },
];

export const getOfferById = (id: string): Offer | undefined => {
  return offers.find((offer) => offer.id === id);
};
