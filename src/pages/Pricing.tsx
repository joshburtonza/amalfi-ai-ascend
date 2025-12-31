import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import { GlowCard } from '@/components/ui/spotlight-card';

const Pricing = () => {
  const pricingTiers = [
    {
      name: 'Diagnosis Session',
      price: 'R2,500',
      priceNote: 'once-off',
      description: 'Start here if you\'re not sure what you need.',
      features: [
        '90-minute operational deep-dive',
        'Bottleneck identification and mapping',
        'ROI projections for potential solutions',
        'Clear next-steps roadmap',
      ],
      cta: 'Book Diagnosis Session',
      ctaLink: '/contact',
      highlighted: false,
    },
    {
      name: 'System Deployment',
      price: 'From R8,000',
      priceNote: 'setup + monthly subscription',
      description: 'Pre-built solutions deployed for your business.',
      features: [
        'Mark (Reception): R8-12k setup, R1,800-2,500/mo',
        'Clara (Inbox): R10k setup, R2,000-3,000/mo',
        'Avery (Recruitment): R15k setup, R3,500-4,000/mo',
        'Includes customization, training, and first month support',
      ],
      cta: 'Explore Systems',
      ctaLink: '/services/systems',
      highlighted: true,
    },
    {
      name: 'Solution Partnership',
      price: 'From R20,000',
      priceNote: 'per month',
      description: 'For businesses that need bespoke solutions.',
      features: [
        'Custom architecture and implementation',
        'Ongoing optimization and support',
        'Monthly strategy reviews',
        'Priority response and continuous improvement',
      ],
      cta: 'Discuss Partnership',
      ctaLink: '/contact',
      highlighted: false,
    },
  ];

  return (
    <>
      <Helmet>
        <title>Investment Levels - Amalfi AI | Solutions Architecture</title>
        <meta name="description" content="Every engagement starts with diagnosis. We don't quote solutions until we understand your problems. View our investment levels." />
        <link rel="canonical" href="https://www.amalfiai.com/pricing" />
        <meta property="og:title" content="Investment Levels - Amalfi AI | Solutions Architecture" />
        <meta property="og:description" content="Every engagement starts with diagnosis. We don't quote solutions until we understand your problems." />
        <meta property="og:url" content="https://www.amalfiai.com/pricing" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        
        <main className="pt-32 pb-20">
          <div className="max-container px-4 sm:px-6">
            {/* Header */}
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Investment Levels
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                Every engagement starts with diagnosis. We don't quote solutions until we understand your problems.
              </p>
            </div>

            {/* Pricing Cards */}
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingTiers.map((tier, index) => (
                <GlowCard
                  key={tier.name}
                  customSize
                  className={`p-8 flex flex-col ${
                    tier.highlighted
                      ? 'border-primary/50 shadow-lg shadow-primary/20 relative'
                      : ''
                  }`}
                >
                  {tier.highlighted && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span className="bg-primary text-primary-foreground text-sm font-semibold px-4 py-1 rounded-full">
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div className="mb-6">
                    <h2 className="text-2xl font-bold text-foreground mb-2">
                      {tier.name}
                    </h2>
                    <p className="text-muted-foreground text-sm">
                      {tier.description}
                    </p>
                  </div>

                  <div className="mb-8">
                    <span className="text-4xl font-bold text-foreground">
                      {tier.price}
                    </span>
                    <span className="text-muted-foreground ml-2">{tier.priceNote}</span>
                  </div>

                  <ul className="space-y-3 mb-8 flex-grow">
                    {tier.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    variant={tier.highlighted ? 'default' : 'outline'}
                    size="lg"
                    className="w-full"
                    asChild
                  >
                    <Link to={tier.ctaLink}>{tier.cta}</Link>
                  </Button>
                </GlowCard>
              ))}
            </div>

            {/* Footer text */}
            <div className="mt-16 text-center">
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Not sure where to start? Book a diagnosis session. If we're not the right fit, we'll tell you.
              </p>
              <Link
                to="/contact"
                className="text-primary hover:underline font-medium mt-4 inline-block"
              >
                Book a free consultation →
              </Link>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Pricing;
