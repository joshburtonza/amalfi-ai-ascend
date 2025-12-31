export interface Offer {
  id: string;
  name: string;
  description: string;
  price: string;
  cta: string;
  checkoutUrl: string;
}

export const offers: Offer[] = [
  {
    id: 'ai-readiness-audit',
    name: 'AI Readiness Audit',
    description: 'Comprehensive assessment of your business AI readiness with actionable recommendations',
    price: 'R2,500',
    cta: 'Pay for Audit',
    checkoutUrl: '', // TODO: Add Shopify checkout URL
  },
  {
    id: 'recruitment-automation-pilot',
    name: 'Recruitment Automation Pilot',
    description: '30-day pilot of our AI recruitment system with full implementation support',
    price: 'R15,000',
    cta: 'Start Pilot',
    checkoutUrl: '', // TODO: Add Shopify checkout URL
  },
  {
    id: 'ai-voice-receptionist-setup',
    name: 'AI Voice Receptionist Setup',
    description: 'Complete setup of 24/7 AI voice answering system for your business',
    price: 'R5,000',
    cta: 'Get Set Up',
    checkoutUrl: '', // TODO: Add Shopify checkout URL
  },
];

export const getOfferById = (id: string): Offer | undefined => {
  return offers.find((offer) => offer.id === id);
};
