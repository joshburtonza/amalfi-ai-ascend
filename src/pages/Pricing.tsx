import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Check, X, ArrowRight } from 'lucide-react';
import { GlowCard } from '@/components/ui/spotlight-card';
import HowWeWork from '@/components/HowWeWork';
import GuaranteeBlock from '@/components/GuaranteeBlock';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Pricing = () => {
  const pricingTiers = [
    {
      name: "Diagnosis Session",
      price: "R2,500",
      priceNote: "once-off",
      subhead: "Required first step. Know exactly what is costing you—and what fixing it is worth.",
      features: [
        "60-90 minute operational deep-dive",
        "Bottleneck identification and mapping",
        "ROI projections for potential solutions",
        "Clear recommended roadmap",
        "If we cannot see clear ROI, we will tell you"
      ],
      cta: "Apply for Diagnosis",
      ctaLink: "/apply",
      highlighted: false,
    },
    {
      name: "System Deployment",
      price: "R10,000-R25,000",
      priceNote: "setup + R2,000-R6,000/month",
      subhead: "Productised systems. Deployed in 2-3 weeks. ROI within 90 days.",
      features: [
        "AI Voice Receptionist (24/7 + WhatsApp)",
        "Recruitment Automation (CV screening, scheduling)",
        "Inbox/Admin Automation (triage, routing, replies)",
        "Staff training and integration",
        "Ongoing monitoring and optimization"
      ],
      note: "Pricing depends on call volume, integrations, and workflow complexity.",
      cta: "See Example Systems",
      ctaLink: "/services/systems",
      highlighted: true,
    },
    {
      name: "Solution Partnership",
      price: "From R20,000",
      priceNote: "per month (6-month minimum)",
      subhead: "Custom architecture. Ongoing optimization. For serious teams.",
      features: [
        "Custom architecture and implementation",
        "Multiple workflows and integrations",
        "Ongoing optimization and support",
        "Monthly strategy reviews",
        "Priority support with dedicated contact"
      ],
      cta: "Learn About Partnership",
      ctaLink: "/services/partnership",
      highlighted: false,
    },
  ];

  const fitChecklist = {
    goodFit: [
      "You spend 15+ hours/week on manual processes",
      "You are losing leads to slow response times",
      "You are ready to standardise workflows",
      "You value measurable outcomes over features",
      "You can commit to a 90-day implementation window"
    ],
    notFit: [
      "You are looking for the cheapest option",
      "You need results in under 2 weeks",
      "You are not willing to standardise processes",
      "You want to buy software, not outcomes",
      "You have fewer than 50 monthly leads/calls"
    ]
  };

  const faqItems = [
    {
      q: "Why don't you show exact pricing upfront?",
      a: "Pricing depends on call volume, integrations, and workflow complexity. Quoting without understanding your situation leads to misaligned expectations. That's why every engagement starts with a Diagnosis Session—so we can give you accurate numbers based on your actual needs."
    },
    {
      q: "What do I get from the Diagnosis Session?",
      a: "A complete operational deep-dive (60-90 minutes), bottleneck mapping, ROI projections, and a recommended roadmap. You keep this whether you work with us or not. Most clients identify R20,000+/month in recoverable value."
    },
    {
      q: "How fast can you deploy?",
      a: "System Deployments typically go live in 2-3 weeks. Solution Partnerships vary by scope—usually 4-8 weeks for initial implementation, then ongoing optimization."
    },
    {
      q: "What results should I expect?",
      a: "Results vary by business, but typical outcomes include: 15+ hours saved weekly per team member, R40,000+ monthly revenue recovered from missed calls/slow follow-ups, and 4-6× ROI within the first quarter."
    },
    {
      q: "Do you integrate with my existing tools?",
      a: "Yes. We work with whatever you're already using—Google Calendar, Outlook, WhatsApp, most CRMs, booking systems, and ATS platforms. If there's an API, we can connect it."
    },
    {
      q: "Is there a contract?",
      a: "System Deployments are month-to-month after setup. Solution Partnerships have a 6-month minimum commitment to allow for proper implementation and optimization, then month-to-month."
    },
    {
      q: "How does the guarantee work?",
      a: "If you see no measurable progress after 90 days from go-live against agreed success metrics, you can request a refund of monthly service fees paid during that period. Setup fees are non-refundable. See our FAQ for full terms."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Investment & Fit - Amalfi AI | Strategic AI Automation</title>
        <meta name="description" content="We don't quote solutions until we understand your bottlenecks. Diagnosis Session R2,500. System Deployment from R10,000. Partnership from R20,000/month." />
        <link rel="canonical" href="https://www.amalfiai.com/pricing" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        
        <main className="pt-32 pb-20">
          <div className="max-container px-4 sm:px-6">
            {/* Header */}
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Investment & Fit
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                We don't quote solutions until we understand your bottlenecks. Every engagement starts with diagnosis—because the right solution depends on your specific situation.
              </p>
            </div>

            {/* Fit Checklist */}
            <section className="mb-20">
              <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                <GlowCard customSize className="p-8">
                  <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                    <Check className="w-6 h-6 text-primary" />
                    Good Fit If
                  </h3>
                  <ul className="space-y-4">
                    {fitChecklist.goodFit.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </GlowCard>

                <GlowCard customSize className="p-8">
                  <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                    <X className="w-6 h-6 text-muted-foreground" />
                    Not the Right Fit If
                  </h3>
                  <ul className="space-y-4">
                    {fitChecklist.notFit.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <X className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </GlowCard>
              </div>
            </section>

            {/* Pricing Cards */}
            <section className="mb-20">
              <h2 className="text-3xl font-bold text-center mb-12">Investment Levels</h2>
              <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {pricingTiers.map((tier) => (
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
                          Most Common
                        </span>
                      </div>
                    )}

                    <div className="mb-6">
                      <h2 className="text-2xl font-bold text-foreground mb-2">
                        {tier.name}
                      </h2>
                      <p className="text-muted-foreground text-sm">
                        {tier.subhead}
                      </p>
                    </div>

                    <div className="mb-8">
                      <span className="text-3xl font-bold text-foreground">
                        {tier.price}
                      </span>
                      <span className="text-muted-foreground ml-2 text-sm">{tier.priceNote}</span>
                    </div>

                    <ul className="space-y-3 mb-6 flex-grow">
                      {tier.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {tier.note && (
                      <p className="text-xs text-muted-foreground italic mb-6">
                        {tier.note}
                      </p>
                    )}

                    <Button
                      variant={tier.highlighted ? 'default' : 'outline'}
                      size="lg"
                      className="w-full"
                      asChild
                    >
                      <Link to={tier.ctaLink} className="flex items-center justify-center gap-2">
                        {tier.cta}
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </Button>
                  </GlowCard>
                ))}
              </div>
            </section>

            {/* How the Engagement Works */}
            <HowWeWork />

            {/* Guarantee */}
            <GuaranteeBlock />

            {/* FAQ */}
            <section className="py-20">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
                <GlowCard customSize className="p-6">
                  <Accordion type="single" collapsible className="w-full">
                    {faqItems.map((faq, i) => (
                      <AccordionItem key={i} value={`faq-${i}`}>
                        <AccordionTrigger className="text-left hover:no-underline">
                          <span className="font-semibold">{faq.q}</span>
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground leading-relaxed">
                          {faq.a}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </GlowCard>
              </div>
            </section>

            {/* CTA */}
            <section className="py-12">
              <GlowCard customSize className="p-12 md:p-16 text-center max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Ready to See What's Possible?
                </h2>
                <p className="text-lg text-muted-foreground mb-2 max-w-2xl mx-auto">
                  Apply for a Diagnosis Call. We'll confirm fit by email before booking.
                </p>
                <p className="text-sm text-muted-foreground mb-8">
                  Most clients identify R20,000+/month in recoverable value.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="w-full sm:w-auto" asChild>
                    <Link to="/apply" className="flex items-center gap-2 justify-center">
                      Apply for a Diagnosis Call
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" className="w-full sm:w-auto" asChild>
                    <Link to="/services/systems">See Example Systems</Link>
                  </Button>
                </div>
              </GlowCard>
            </section>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Pricing;
