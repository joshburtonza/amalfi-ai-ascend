import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { GlowCard } from '@/components/ui/spotlight-card';
import { Target, Users, Shield, Lightbulb } from 'lucide-react';
import { Button } from '@/components/ui/button';

const About = () => {
  const founder = {
    name: "Joshua Burton",
    title: "Founder & CEO",
    image: "/lovable-uploads/c82f3a29-2a00-4659-9f03-92a11af68d26.png",
    bio: "Strategic AI architect with over a decade of experience transforming businesses through intelligent automation and infrastructure design."
  };

  const values = [
    {
      icon: Lightbulb,
      title: "Strategy Before Tools",
      description: "We start with your business objectives, not technology. Every AI solution is designed to deliver measurable impact aligned with strategic goals."
    },
    {
      icon: Target,
      title: "Business Impact as North Star",
      description: "ROI isn't an afterthought—it's the foundation. We measure success in business outcomes: efficiency gains, revenue growth, and competitive advantage."
    },
    {
      icon: Shield,
      title: "Sustainable AI",
      description: "We build for the long term. Our systems are maintainable, auditable, and designed to evolve with your organization's needs."
    },
    {
      icon: Users,
      title: "Partnership, Not Vendorship",
      description: "We're strategic partners, not service providers. Your success is our success, and we're committed to your AI journey from start to scale."
    }
  ];

  return (
    <div className="bg-background min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-hsl(var(--amalfi-teal)/0.05) to-transparent" />
        <div className="max-container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gradient">
              Strategic AI Infrastructure Partners
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              We don't just build AI tools. We architect the intelligent backbone that transforms businesses into AI-powered enterprises.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 px-4">
        <div className="max-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <GlowCard customSize className="p-8 rounded-2xl h-full">
              <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                AI as an infrastructure layer, not an add-on. We envision a future where AI is as fundamental to business operations as cloud computing or the internet—seamlessly integrated, reliably operated, and strategically leveraged.
              </p>
            </GlowCard>
            
            <GlowCard customSize className="p-8 rounded-2xl h-full">
              <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To empower organizations with AI infrastructure that scales. We partner with ambitious teams to design, implement, and sustain AI systems that deliver measurable business value and competitive advantage.
              </p>
            </GlowCard>
          </div>
        </div>
      </section>

      {/* Founders */}
      <section className="py-20 px-4 bg-gradient-to-b from-transparent to-hsl(var(--amalfi-surface)/0.3)">
        <div className="max-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Meet Our Founder
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Led by an experienced AI strategist and technical architect who has built and scaled AI systems for leading organizations.
            </p>
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
                <p className="text-hsl(var(--amalfi-teal)) font-semibold mb-4">{founder.title}</p>
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
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide every engagement, every decision, and every line of code.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <GlowCard key={index} customSize className="p-8 rounded-2xl hover-lift h-full">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-hsl(var(--amalfi-teal)/0.2) to-hsl(var(--amalfi-teal)/0.05) flex items-center justify-center mb-6">
                  <value.icon className="w-8 h-8 text-hsl(var(--amalfi-teal))" />
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
              Ready to Build Your AI Backbone?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let's start with a conversation about your strategic objectives and how AI infrastructure can accelerate your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="w-full sm:w-auto" asChild>
                <a href="/contact">Start a Conversation</a>
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto" asChild>
                <a href="/services">Explore Our Services</a>
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
