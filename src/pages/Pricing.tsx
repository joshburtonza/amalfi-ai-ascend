import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PayNowButton from '@/components/PayNowButton';
import { offers } from '@/config/offers';
import { Check } from 'lucide-react';

const Pricing = () => {
  return (
    <>
      <Helmet>
        <title>Pricing - Amalfi AI | AI Automation Solutions</title>
        <meta name="description" content="Explore Amalfi AI's pricing for AI automation solutions. AI Readiness Audit, Recruitment Automation Pilot, and AI Voice Receptionist Setup packages available." />
        <link rel="canonical" href="https://www.amalfiai.com/pricing" />
        <meta property="og:title" content="Pricing - Amalfi AI | AI Automation Solutions" />
        <meta property="og:description" content="Explore Amalfi AI's pricing for AI automation solutions." />
        <meta property="og:url" content="https://www.amalfiai.com/pricing" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        
        <main className="pt-32 pb-20">
          <div className="max-container px-4 sm:px-6">
            {/* Header */}
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Simple, Transparent Pricing
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                Choose the package that fits your business needs. Get started with AI automation today.
              </p>
            </div>

            {/* Pricing Cards */}
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {offers.map((offer, index) => (
                <div
                  key={offer.id}
                  className={`relative rounded-2xl border p-8 flex flex-col ${
                    index === 1
                      ? 'border-primary bg-primary/5 shadow-lg shadow-primary/20'
                      : 'border-border bg-card'
                  }`}
                >
                  {index === 1 && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span className="bg-primary text-primary-foreground text-sm font-semibold px-4 py-1 rounded-full">
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div className="mb-6">
                    <h2 className="text-2xl font-bold text-foreground mb-2">
                      {offer.name}
                    </h2>
                    <p className="text-muted-foreground text-sm">
                      {offer.description}
                    </p>
                  </div>

                  <div className="mb-8">
                    <span className="text-4xl font-bold text-foreground">
                      {offer.price}
                    </span>
                    <span className="text-muted-foreground ml-2">once-off</span>
                  </div>

                  <ul className="space-y-3 mb-8 flex-grow">
                    {getFeatures(offer.id).map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <PayNowButton
                    offerId={offer.id}
                    variant={index === 1 ? 'gradient' : 'outline'}
                    size="lg"
                    className="w-full"
                  />
                </div>
              ))}
            </div>

            {/* FAQ / Additional Info */}
            <div className="mt-20 text-center">
              <p className="text-muted-foreground mb-4">
                Have questions about our services?
              </p>
              <a
                href="/contact"
                className="text-primary hover:underline font-medium"
              >
                Contact us for a free consultation →
              </a>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

// Helper function to get features for each offer
const getFeatures = (offerId: string): string[] => {
  switch (offerId) {
    case 'ai-readiness-audit':
      return [
        'Complete business process analysis',
        'AI opportunity identification',
        'ROI projections for automation',
        'Custom implementation roadmap',
        '1-hour strategy call',
      ];
    case 'recruitment-automation-pilot':
      return [
        '30-day full implementation',
        'AI candidate screening setup',
        'Automated scheduling integration',
        'Custom scoring algorithms',
        'Dedicated support team',
        'Performance analytics dashboard',
      ];
    case 'ai-voice-receptionist-setup':
      return [
        '24/7 AI voice answering',
        'Custom greeting & responses',
        'Call routing & scheduling',
        'CRM integration',
        'Real-time transcription',
      ];
    default:
      return [];
  }
};

export default Pricing;
