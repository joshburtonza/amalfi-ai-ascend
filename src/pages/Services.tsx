import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { GlowCard } from '@/components/ui/spotlight-card';
import { Search, Stethoscope, PenTool, Rocket, TrendingUp, Cpu, Wrench } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Services = () => {
  const processSteps = [
    {
      icon: Search,
      title: "Discovery",
      badge: "Week 1",
      description: "We map your operations end-to-end. Where does time disappear? Where do leads leak?"
    },
    {
      icon: Stethoscope,
      title: "Diagnosis",
      badge: "Week 1-2",
      description: "We identify root causes, not symptoms. Most businesses are solving the wrong problems."
    },
    {
      icon: PenTool,
      title: "Design",
      badge: "Week 2-3",
      description: "We architect a solution with clear ROI projections. You know exactly what you're getting before we build."
    },
    {
      icon: Rocket,
      title: "Deploy",
      badge: "Week 3-5",
      description: "We build, integrate, and train your team. Average deployment: 2-3 weeks to full operation."
    },
    {
      icon: TrendingUp,
      title: "Optimize",
      badge: "Ongoing",
      description: "Monthly reviews, continuous improvement. Our clients see ROI compound over time, not diminish."
    }
  ];

  return (
    <div className="bg-background min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="max-container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gradient">
              Solutions Architecture for Service Businesses
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Discovery → Diagnosis → Design → Deploy. Average time to ROI: 90 days. Average return: 4-6× your investment.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Links to Sub-pages */}
      <section className="py-12 px-4">
        <div className="max-container">
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
            <GlowCard customSize className="p-8 text-center hover:scale-105 transition-transform">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Cpu className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Pre-Built Systems</h3>
              <p className="text-muted-foreground mb-6">
                Proven solutions for common problems: reception, recruitment, customer success.
              </p>
              <Button asChild>
                <Link to="/services/systems">Explore Systems</Link>
              </Button>
            </GlowCard>
            <GlowCard customSize className="p-8 text-center hover:scale-105 transition-transform">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Wrench className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Custom Architecture</h3>
              <p className="text-muted-foreground mb-6">
                Bespoke systems designed around your unique operational challenges.
              </p>
              <Button asChild>
                <Link to="/services/infrastructure">Explore Infrastructure</Link>
              </Button>
            </GlowCard>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 px-4">
        <div className="max-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Our Process
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Every engagement follows the same discipline. That's why our clients see results—not just deliverables.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {processSteps.map((step, index) => (
              <div key={index} className="flex gap-6 mb-8 last:mb-0">
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <step.icon className="w-7 h-7 text-primary" />
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="w-0.5 h-full bg-primary/20 mt-4" />
                  )}
                </div>
                <div className="pb-8">
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full mb-2">
                    {step.badge}
                  </span>
                  <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Models */}
      <section className="py-20 px-4 bg-gradient-to-b from-transparent to-primary/5">
        <div className="max-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Engagement Models
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
              Choose the engagement that fits your needs and budget.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <GlowCard customSize className="p-8 h-full">
              <h3 className="text-2xl font-bold mb-2">Diagnosis Session</h3>
              <p className="text-3xl font-bold text-primary mb-4">R2,500</p>
              <p className="text-muted-foreground mb-6">
                90-minute deep-dive. Walk away with a bottleneck map and ROI projection—whether you work with us or not.
              </p>
              <p className="text-sm text-muted-foreground italic">
                Start here if you're not sure what you need.
              </p>
            </GlowCard>
            
            <GlowCard customSize className="p-8 h-full border-primary/50">
              <h3 className="text-2xl font-bold mb-2">Solution Partnership</h3>
              <p className="text-3xl font-bold text-primary mb-4">From R20,000/mo</p>
              <p className="text-muted-foreground mb-6">
                Custom architecture + ongoing optimization. Average client: 4-6× ROI within first quarter.
              </p>
              <p className="text-sm text-muted-foreground italic">
                For businesses that need bespoke solutions.
              </p>
            </GlowCard>
            
            <GlowCard customSize className="p-8 h-full">
              <h3 className="text-2xl font-bold mb-2">System Deployment</h3>
              <p className="text-3xl font-bold text-primary mb-4">From R8,000 setup</p>
              <p className="text-muted-foreground mb-6">
                Pre-built solutions deployed in 2-3 weeks. Average client saves 10+ hours weekly within 30 days.
              </p>
              <p className="text-sm text-muted-foreground italic">
                Fastest path to solving common problems.
              </p>
            </GlowCard>
          </div>

          <div className="text-center">
            <Button size="lg" className="w-full sm:w-auto max-w-xs mx-auto" asChild>
              <Link to="/contact">Discuss Your Needs</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
