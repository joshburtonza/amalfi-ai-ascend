import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { GlowCard } from '@/components/ui/spotlight-card';
import { Target, TrendingUp, Users, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';

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
      description: "We never lead with tools. Every engagement starts with understanding what's actually breaking in your business."
    },
    {
      icon: TrendingUp,
      title: "ROI or Nothing",
      description: "If we can't show you the numbers before we build, we don't build. Every solution comes with clear projections and measurable outcomes."
    },
    {
      icon: Users,
      title: "Partnership, Not Projects",
      description: "We're not vendors who disappear after setup. We're strategic partners invested in your ongoing success."
    },
    {
      icon: Shield,
      title: "Built to Last",
      description: "Our systems are designed to evolve with your business, not become technical debt you inherit."
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
              Solutions Architects, Not Automation Vendors
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              We're not here to sell you AI. We're here to diagnose what's costing you time and money, then architect systems that fix it permanently.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 px-4">
        <div className="max-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <GlowCard customSize className="p-8 rounded-2xl h-full">
              <h2 className="text-3xl font-bold mb-4">Our Approach</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Most businesses don't need more tools. They need someone who understands their operations deeply enough to design solutions that actually work. We start with your business problems, not our product catalog.
              </p>
            </GlowCard>
            
            <GlowCard customSize className="p-8 rounded-2xl h-full">
              <h2 className="text-3xl font-bold mb-4">What We Do</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We partner with service businesses to eliminate operational bottlenecks through AI-native solutions. Discovery first. Diagnosis second. Design third. Build last.
              </p>
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
              Our Core Values
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

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="max-container">
          <GlowCard customSize className="p-12 rounded-3xl text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Diagnose What's Holding You Back?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let's start with a conversation about your operations—not our products.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="w-full sm:w-auto" asChild>
                <Link to="/contact">Book a Diagnosis Call</Link>
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto" asChild>
                <Link to="/services">Explore Our Services</Link>
              </Button>
            </div>
          </GlowCard>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
