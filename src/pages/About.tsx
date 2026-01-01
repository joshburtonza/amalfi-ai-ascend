import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { GlowCard } from '@/components/ui/spotlight-card';
import { Target, TrendingUp, Users, Shield, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import CTABlock from '@/components/CTABlock';

const About = () => {
  const founder = {
    name: "Joshua Burton",
    title: "Founder & Solutions Architect",
    image: "/lovable-uploads/c82f3a29-2a00-4659-9f03-92a11af68d26.png",
    bio: "Former finance professional turned AI strategist. I've spent years in the trenches of operational chaos—manual processes, missed calls, drowning inboxes. Now I architect the systems that eliminate those problems for good."
  };

  const values = [
    {
      icon: Target,
      title: "Problems Before Products",
      description: "We never lead with tools. Every engagement starts with understanding what's actually breaking in your business. That's why our solutions stick—and why typical clients see 4-6× ROI."
    },
    {
      icon: TrendingUp,
      title: "Outcome-First",
      description: "Time saved. Revenue recovered. Response speed. We measure success in business outcomes, not features delivered. If we can't project clear ROI, we'll tell you."
    },
    {
      icon: Users,
      title: "Partnership, Not Projects",
      description: "We're not vendors who disappear after setup. Our average client relationship is 12+ months of continuous optimization. Your success is our success."
    },
    {
      icon: Shield,
      title: "Built to Last",
      description: "Our systems are designed to scale. One client went from 50 CVs/week to 1,000+ without adding headcount. We build for where you're going, not just where you are."
    }
  ];

  return (
    <>
      <Helmet>
        <title>About - Amalfi AI | Strategic AI Automation Partners</title>
        <meta name="description" content="Solutions architects, not automation vendors. We diagnose bottlenecks and build AI systems that deliver 4-6× ROI. Based in Johannesburg, serving SA, UK, and US." />
        <link rel="canonical" href="https://www.amalfiai.com/about" />
      </Helmet>

      <div className="bg-background min-h-screen">
        <Navbar />
        
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
          <div className="max-container relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gradient">
                Solutions Architects, Not Automation Vendors
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                We don't sell tools. We diagnose business problems and design AI systems that eliminate them. Typical client outcome: 15+ hours saved weekly, R40,000+ recovered monthly.
              </p>
            </div>
          </div>
        </section>

        {/* What We Do */}
        <section className="py-20 px-4">
          <div className="max-container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              <GlowCard customSize className="p-8 rounded-2xl h-full">
                <h2 className="text-3xl font-bold mb-4">Our Approach</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Most businesses don't need more tools. They need someone who understands their operations deeply enough to design solutions that actually work.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We start with your business problems, not our product catalog. Every engagement begins with a Diagnosis Session—because the right solution depends on your specific situation.
                </p>
              </GlowCard>
              
              <GlowCard customSize className="p-8 rounded-2xl h-full">
                <h2 className="text-3xl font-bold mb-4">What We Don't Do</h2>
                <ul className="space-y-4 text-lg text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✕</span>
                    <span>Sell software licenses</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✕</span>
                    <span>Quote solutions before understanding your problems</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✕</span>
                    <span>Disappear after implementation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✕</span>
                    <span>Promise results we can't measure</span>
                  </li>
                </ul>
              </GlowCard>
            </div>
          </div>
        </section>

        {/* Founder */}
        <section className="py-20 px-4 bg-gradient-to-b from-transparent to-primary/5">
          <div className="max-container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                Built by Someone Who's Been There
              </h2>
            </div>

            <div className="flex justify-center">
              <GlowCard customSize className="rounded-2xl overflow-hidden hover-lift max-w-md w-full">
                <div className="aspect-square overflow-hidden rounded-t-2xl">
                  <img 
                    src={founder.image} 
                    alt={founder.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-2">{founder.name}</h3>
                  <p className="text-primary font-semibold mb-4">{founder.title}</p>
                  <p className="text-muted-foreground leading-relaxed">{founder.bio}</p>
                </div>
              </GlowCard>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-20 px-4">
          <div className="max-container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                How We Think
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {values.map((value, index) => (
                <GlowCard key={index} customSize className="p-8 rounded-2xl hover-lift h-full">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </GlowCard>
              ))}
            </div>
          </div>
        </section>

        {/* Location & Focus */}
        <section className="py-20 px-4 bg-gradient-to-b from-primary/5 to-transparent">
          <div className="max-container">
            <GlowCard customSize className="p-12 max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Based in South Africa. Serving Globally.</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Headquartered in Johannesburg, we serve B2B service businesses across South Africa, the UK, and the US. Our systems are built with local context in mind—WhatsApp integrations, after-hours coverage, and tools that work with whatever you're already using.
              </p>
              <p className="text-lg text-muted-foreground">
                <strong>Primary focus:</strong> Logistics, recruitment, and professional services.
              </p>
            </GlowCard>
          </div>
        </section>

        {/* CTA */}
        <CTABlock 
          headline="Ready to Diagnose What's Holding You Back?"
          subtext="We confirm fit by email before booking."
        />

        <Footer />
      </div>
    </>
  );
};

export default About;
