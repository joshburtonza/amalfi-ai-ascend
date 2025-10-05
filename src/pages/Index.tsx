
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ProcessTimeline from '../components/ProcessTimeline';
import Footer from '../components/Footer';
import { GlowCard } from '@/components/ui/spotlight-card';
import { Button } from '@/components/ui/button';
import { Component as TypewriterTestimonial } from '@/components/ui/typewriter-testimonial';

const Index = () => {
  return (
    <div className="bg-background min-h-screen">
      <Navbar />
      <Hero />
      <ProcessTimeline />
      
      {/* Testimonials Section */}
      <section className="py-20 md:py-32 relative overflow-hidden bg-gradient-section">
        <div className="max-container relative z-10 px-4 sm:px-6">
          <div className="text-center mb-16 md:mb-20">
            <div className="animate-slide-up">
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary text-sm font-semibold rounded-full border border-primary/20 mb-4">
                Success Stories
              </span>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
                <span className="text-gradient">Client</span> Success Stories
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
                See how businesses across South Africa are transforming their operations with our AI automation solutions
              </p>
              <p className="text-lg text-primary font-semibold animate-pulse">
                Hover over the avatars to read their stories
              </p>
            </div>
          </div>
          
          <TypewriterTestimonial testimonials={[
            {
              image: 'https://images.unsplash.com/photo-1507003211169-0a6dd7228f2d?q=80&w=1780&auto=format&fit=crop',
              audio: 'audio_1.mp3',
              text: "Amalfi AI completely transformed our digital operations. Their AI-driven workflows helped us save 15+ hours every week, and the onboarding was seamless.",
              name: 'Noluthando M.',
              jobtitle: 'Owner, UrbanEdge Digital',
            },
            {
              image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1780&auto=format&fit=crop',
              audio: 'audio_2.mp3',
              text: "Switching to Amalfi AI was the smartest investment we made. The team understood our unique logistics challenges and built a custom solution.",
              name: 'Johan V.',
              jobtitle: 'Director, TableView Logistics',
            },
            {
              image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1780&auto=format&fit=crop',
              audio: 'audio_3.mp3',
              text: "We needed automation that could scale with our growing marketing business. Amalfi AI delivered exactly that—a beautiful, intuitive platform.",
              name: 'Sibongile P.',
              jobtitle: 'Co-Founder, Pulse Marketing SA',
            },
            {
              image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1780&auto=format&fit=crop',
              audio: 'audio_4.mp3',
              text: "The AI automation tools have revolutionized how we handle client data. We can now focus on strategy while the system handles the routine tasks.",
              name: 'Thabo K.',
              jobtitle: 'CEO, Cape Analytics',
            },
            {
              image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?q=80&w=1780&auto=format&fit=crop',
              audio: 'audio_5.mp3',
              text: "As a growing startup, we needed efficiency without compromising quality. Amalfi AI gave us enterprise-level automation at a price we could afford.",
              name: 'Lerato M.',
              jobtitle: 'Founder, Innovate ZA',
            },
            {
              image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1780&auto=format&fit=crop',
              audio: 'audio_6.mp3',
              text: "The support team is incredible. They not only set up our systems but trained our entire team. The ROI was visible within the first month.",
              name: 'Zanele N.',
              jobtitle: 'Operations Manager, Durban Tech',
            },
          ]} />
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-container">
          <GlowCard customSize className="p-12 md:p-16 rounded-3xl text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gradient">
              Future-Proof Your Business with AI Infrastructure
            </h2>
            <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
              Transform your organization with AI systems that scale, adapt, and deliver measurable business value.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" asChild>
                <a href="/contact">Get an AI Readiness Audit</a>
              </Button>
              <Button size="lg" variant="outline" asChild>
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

export default Index;
