import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { GlowCard } from '@/components/ui/spotlight-card';
import { Phone, Mail, Brain, Cpu, Wrench, CheckCircle, ArrowRight, Truck, Users, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';
import CTABlock from '@/components/CTABlock';

const Services = () => {
  const systemCards = [
    {
      icon: Phone,
      title: 'AI Voice Receptionist',
      outcomes: [
        '100% call answer rate (vs. 60-70% typical)',
        'WhatsApp confirmations and reminders',
        'Works with any booking system',
        'After-hours coverage included'
      ],
      industries: 'Healthcare, hospitality, logistics, professional services'
    },
    {
      icon: Brain,
      title: 'Recruitment Automation',
      outcomes: [
        'CV screening: 15 → 250+ per hour',
        'Time-to-shortlist: 3 days → 3 hours',
        'Automated scheduling and follow-ups',
        'Adzuna scraping for candidate sourcing'
      ],
      industries: 'Recruitment agencies, HR teams, staffing firms'
    },
    {
      icon: Mail,
      title: 'Inbox & Admin Automation',
      outcomes: [
        'Response time: 7 hours → 15 minutes',
        'Smart triage, routing, and replies',
        '110+ admin hours saved monthly',
        'Works across email, WhatsApp, DMs'
      ],
      industries: 'Agencies, founders, customer success teams'
    }
  ];

  const industries = [
    { icon: Truck, name: 'Logistics', desc: 'Dispatch coordination, driver communication, exception handling' },
    { icon: Users, name: 'Recruitment', desc: 'CV screening, candidate comms, interview scheduling' },
    { icon: Briefcase, name: 'Professional Services', desc: 'Client intake, admin automation, response management' }
  ];

  // Service schema for structured data
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "AI Automation Consulting",
    "provider": {
      "@type": "Organization",
      "name": "Amalfi AI",
      "url": "https://www.amalfiai.com"
    },
    "areaServed": ["South Africa", "United Kingdom", "United States"],
    "description": "We diagnose operational bottlenecks and deploy AI systems that deliver measurable ROI. Two engagement models: System Deployment (2-3 weeks) or Solution Partnership (custom architecture).",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "AI Automation Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "AI Voice Receptionist",
            "description": "24/7 call answering with 100% answer rate and WhatsApp confirmations"
          },
          "priceSpecification": {
            "@type": "PriceSpecification",
            "price": "10000-25000",
            "priceCurrency": "ZAR"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Recruitment Automation",
            "description": "CV screening from 15 to 250+ per hour, automated scheduling and follow-ups"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Inbox & Admin Automation",
            "description": "Email triage and routing, response time from 7 hours to 15 minutes"
          }
        }
      ]
    }
  };

  return (
    <>
      <Helmet>
        <title>Solutions - Amalfi AI | AI Systems & Partnership</title>
        <meta name="description" content="Two ways to work with us: System Deployment (2-3 weeks, productized solutions) or Solution Partnership (custom architecture, ongoing optimization). We diagnose first." />
        <link rel="canonical" href="https://www.amalfiai.com/services" />
        <script type="application/ld+json">
          {JSON.stringify(serviceSchema)}
        </script>
      </Helmet>

      <div className="bg-background min-h-screen">
        <Navbar />
        
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
          <div className="max-container relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gradient">
                Solutions, Not Tools
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-4">
                We diagnose first. We don't quote solutions until we understand your bottlenecks.
              </p>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Every engagement starts with a Diagnosis Session—because the right solution depends on your specific situation.
              </p>
            </div>
          </div>
        </section>

        {/* Two Ways to Work With Us */}
        <section className="py-20 px-4">
          <div className="max-container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                Two Ways to Work With Us
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <GlowCard customSize className="p-8 hover:scale-[1.02] transition-transform">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                  <Cpu className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-2">System Deployment</h3>
                <p className="text-primary font-semibold mb-4">R10,000-R25,000 setup + R2,000-R6,000/month</p>
                <p className="text-muted-foreground mb-6">
                  Productised solutions for common problems. Deployed in 2-3 weeks. Best for single-workflow automation with proven ROI.
                </p>
                <ul className="space-y-2 mb-6">
                  {['AI Voice Receptionist', 'Recruitment Automation', 'Inbox/Admin Automation'].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild className="w-full">
                  <Link to="/services/systems" className="flex items-center justify-center gap-2">
                    See Example Systems
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </GlowCard>

              <GlowCard customSize className="p-8 hover:scale-[1.02] transition-transform border-primary/30">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                  <Wrench className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Solution Partnership</h3>
                <p className="text-primary font-semibold mb-4">From R20,000/month (6-month minimum)</p>
                <p className="text-muted-foreground mb-6">
                  Custom architecture + ongoing optimization. Best for businesses with multiple workflows or continuous improvement needs.
                </p>
                <ul className="space-y-2 mb-6">
                  {['Custom architecture design', 'Multi-workflow integration', 'Monthly strategy reviews'].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Button variant="outline" asChild className="w-full">
                  <Link to="/services/partnership" className="flex items-center justify-center gap-2">
                    Learn About Partnership
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </GlowCard>
            </div>
          </div>
        </section>

        {/* Example Systems Overview */}
        <section className="py-20 px-4 bg-gradient-to-b from-transparent to-primary/5">
          <div className="max-container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                Example Systems
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Proven solutions we've deployed dozens of times. Typical deployment: 2-3 weeks.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {systemCards.map((card, i) => (
                <GlowCard key={i} customSize className="p-8">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                    <card.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{card.title}</h3>
                  <ul className="space-y-2 mb-6">
                    {card.outcomes.map((outcome, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>{outcome}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-xs text-muted-foreground italic">
                    <strong>Best for:</strong> {card.industries}
                  </p>
                </GlowCard>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button size="lg" asChild>
                <Link to="/services/systems" className="flex items-center gap-2">
                  View Full System Details
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Who We Work With */}
        <section className="py-20 px-4">
          <div className="max-container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                Who We Work With
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                B2B service businesses in South Africa, UK, and US. Primarily logistics, recruitment, and professional services.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {industries.map((industry, i) => (
                <GlowCard key={i} customSize className="p-8 text-center">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <industry.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{industry.name}</h3>
                  <p className="text-muted-foreground text-sm">{industry.desc}</p>
                </GlowCard>
              ))}
            </div>
          </div>
        </section>

        {/* Fit Checklist Teaser */}
        <section className="py-20 px-4 bg-gradient-to-b from-primary/5 to-transparent">
          <div className="max-container">
            <GlowCard customSize className="p-12 max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Not Sure If We're the Right Fit?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                We work best with businesses that spend 15+ hours/week on manual processes and value measurable outcomes. If you're not ready to standardise workflows or need results in under 2 weeks, we're probably not the right fit.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link to="/pricing" className="flex items-center gap-2">
                    Check Fit & Investment Levels
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </GlowCard>
          </div>
        </section>

        {/* CTA */}
        <CTABlock />

        <Footer />
      </div>
    </>
  );
};

export default Services;
