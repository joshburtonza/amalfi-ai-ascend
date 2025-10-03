
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ProcessTimeline from '../components/ProcessTimeline';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';

const Index = () => {
  return (
    <div className="bg-background min-h-screen">
      <Navbar />
      <Hero />
      <ProcessTimeline />
      
      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-container">
          <div className="glassmorphic p-12 md:p-16 rounded-3xl text-center max-w-4xl mx-auto">
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
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
