import React from 'react';
import { Link } from 'react-router-dom';
import { BackgroundPaths } from '@/components/ui/background-paths';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section 
      id="home"
      className="relative min-h-screen w-full bg-background flex items-center justify-center pt-20 overflow-hidden"
    >
      <BackgroundPaths 
        title=""
        topContent={
          <div className="text-center max-w-5xl mx-auto px-4">
            {/* Primary H1 for SEO - visually hidden but accessible */}
            <h1 className="sr-only">Solutions Architecture for Service Businesses</h1>
            
            {/* Visual heading */}
            <p className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6" role="heading" aria-level={2}>
              Your Business Has Problems.{' '}
              <span className="text-gradient">AI Has Solutions.</span>{' '}
              We Bridge The Gap.
            </p>
            
            {/* Subhead */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10">
              Our clients save 15+ hours weekly and recover R40,000+ monthly—within 90 days. No tools for sale. Just solutions that work.
            </p>
            
            {/* CTA */}
            <Button size="lg" className="text-lg px-8 py-6" asChild>
              <Link to="/contact">Book a Diagnosis Call</Link>
            </Button>
          </div>
        }
      />
    </section>
  );
};

export default Hero;
