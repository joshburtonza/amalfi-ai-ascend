import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { GlowCard } from '@/components/ui/spotlight-card';
import { Button } from '@/components/ui/button';
import { CheckCircle, XCircle, TrendingUp, Users, Zap, Clock, ArrowRight } from 'lucide-react';
import CTABlock from '@/components/CTABlock';
import GuaranteeBlock from '@/components/GuaranteeBlock';

const Partnership = () => {
  const included = [
    'Custom architecture designed for your specific workflows',
    'Full implementation and integration with existing systems',
    'Staff training and change management support',
    'Ongoing optimization based on performance data',
    'Monthly strategy reviews with ROI reporting',
    'Priority support with dedicated contact',
    'Continuous improvement as your business evolves'
  ];

  const idealFor = [
    'Businesses with multiple workflows to automate',
    'Operations needing continuous optimization',
    'Companies planning to scale with automation',
    'Teams wanting strategic AI partnership, not just tools'
  ];

  const notFor = [
    'Single-workflow problems (see System Deployment)',
    'Businesses not ready to standardize processes',
    'Teams looking for one-time setup without ongoing optimization'
  ];

  const examples = [
    {
      title: "Logistics Company",
      description: "End-to-end automation: dispatch coordination, driver communication, customer updates, exception handling, and real-time reporting.",
      results: "8 hours daily admin saved, 30% faster on-time delivery"
    },
    {
      title: "Recruitment Agency",
      description: "Full recruitment pipeline: CV screening, candidate communication, interview scheduling, client updates, and placement tracking.",
      results: "70% admin reduction, 3x faster time-to-shortlist"
    },
    {
      title: "Professional Services Firm",
      description: "Client intake, engagement management, document automation, invoicing, and proactive client communication.",
      results: "15 hours/week saved per partner, 40% faster client response"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Solution Partnership - Amalfi AI | Custom AI Architecture & Ongoing Optimization</title>
        <meta name="description" content="From R20,000/month. Custom AI architecture, full implementation, and ongoing optimization for service businesses with complex automation needs." />
        <link rel="canonical" href="https://www.amalfiai.com/services/partnership" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        
        <main className="pt-32 pb-20">
          <div className="max-container px-4 sm:px-6">
            {/* Hero */}
            <div className="text-center mb-16 max-w-4xl mx-auto">
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary text-sm font-semibold rounded-full border border-primary/20 mb-6">
                For Serious Teams
              </span>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                Solution Partnership
              </h1>
              <p className="text-xl text-muted-foreground mb-4">
                Custom architecture. Ongoing optimization. Strategic AI partnership.
              </p>
              <div className="flex items-center justify-center gap-4 text-2xl font-bold text-primary">
                From R20,000/month
              </div>
              <p className="text-muted-foreground mt-2">Minimum 6-month commitment</p>
            </div>

            {/* What's Included */}
            <section className="mb-20">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-8 text-center">What's Included</h2>
                <GlowCard customSize className="p-8">
                  <div className="grid md:grid-cols-2 gap-4">
                    {included.map((item, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                </GlowCard>
              </div>
            </section>

            {/* Who It's For */}
            <section className="mb-20">
              <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                <GlowCard customSize className="p-8">
                  <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                    <Users className="w-6 h-6 text-primary" />
                    Ideal For
                  </h3>
                  <ul className="space-y-4">
                    {idealFor.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </GlowCard>

                <GlowCard customSize className="p-8">
                  <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                    <XCircle className="w-6 h-6 text-muted-foreground" />
                    Not the Right Fit If
                  </h3>
                  <ul className="space-y-4">
                    {notFor.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <XCircle className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-6 text-sm text-muted-foreground">
                    For single-workflow needs, see{' '}
                    <Link to="/services/systems" className="text-primary hover:underline">System Deployment</Link>.
                  </p>
                </GlowCard>
              </div>
            </section>

            {/* Example Rollouts */}
            <section className="mb-20">
              <h2 className="text-3xl font-bold mb-8 text-center">Example Multi-Workflow Rollouts</h2>
              <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {examples.map((example, i) => (
                  <GlowCard key={i} customSize className="p-8">
                    <h3 className="text-xl font-bold mb-4">{example.title}</h3>
                    <p className="text-muted-foreground mb-4">{example.description}</p>
                    <div className="pt-4 border-t border-border">
                      <div className="flex items-center gap-2 text-primary">
                        <TrendingUp className="w-4 h-4" />
                        <span className="text-sm font-semibold">{example.results}</span>
                      </div>
                    </div>
                  </GlowCard>
                ))}
              </div>
            </section>

            {/* How It Works */}
            <section className="mb-20">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-8 text-center">How the Partnership Works</h2>
                <GlowCard customSize className="p-8">
                  <div className="space-y-6">
                    {[
                      { step: '1', title: 'Diagnosis', desc: 'We start with a Diagnosis Session to understand your full operational landscape.' },
                      { step: '2', title: 'Architecture', desc: 'We design a comprehensive automation roadmap with phased rollout plan.' },
                      { step: '3', title: 'Build & Deploy', desc: 'We implement in phases, proving value at each stage before expanding.' },
                      { step: '4', title: 'Optimize', desc: 'Monthly reviews, continuous improvement, and expansion as you grow.' }
                    ].map((item, i) => (
                      <div key={i} className="flex gap-6">
                        <div className="w-10 h-10 rounded-full bg-primary/10 text-primary font-bold flex items-center justify-center flex-shrink-0">
                          {item.step}
                        </div>
                        <div>
                          <h3 className="font-bold text-foreground mb-1">{item.title}</h3>
                          <p className="text-muted-foreground">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </GlowCard>
              </div>
            </section>

            {/* Guarantee */}
            <GuaranteeBlock />

            {/* CTA */}
            <CTABlock 
              headline="Ready for a Strategic AI Partner?"
              subtext="We'll confirm fit by email before booking."
            />
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Partnership;
