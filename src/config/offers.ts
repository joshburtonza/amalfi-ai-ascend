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
    id: 'ai-readiness-audit',
    name: 'AI Readiness Audit',
    description: 'Comprehensive assessment of your business AI readiness with actionable recommendations',
    price: 'R2,500',
    cta: 'Pay for Audit',
    shopifyVariantId: 'gid://shopify/ProductVariant/46707861029033',
  },
  {
    id: 'recruitment-automation-pilot',
    name: 'Recruitment Automation Pilot',
    description: '30-day pilot of our AI recruitment system with full implementation support',
    price: 'R15,000',
    cta: 'Start Pilot',
    shopifyVariantId: 'gid://shopify/ProductVariant/46707861061801',
  },
  {
    id: 'ai-voice-receptionist-setup',
    name: 'AI Voice Receptionist Setup',
    description: 'Complete setup of 24/7 AI voice answering system for your business',
    price: 'R5,000',
    cta: 'Get Set Up',
    shopifyVariantId: 'gid://shopify/ProductVariant/46707861094569',
  },
];

export const getOfferById = (id: string): Offer | undefined => {
  return offers.find((offer) => offer.id === id);
};
