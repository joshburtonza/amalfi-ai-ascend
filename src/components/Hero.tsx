import React from 'react';
import { Link } from 'react-router-dom';
import { BackgroundPaths } from '@/components/ui/background-paths';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

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
            <h1 className="sr-only">Strategic AI Automation Partners for Service Businesses</h1>
            
            {/* Visual heading */}
            <p className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6" role="heading" aria-level={2}>
              Missed Calls and Manual Admin Are Costing You Money.{' '}
              <span className="text-gradient">We Fix It With Automation.</span>
            </p>
            
            {/* Subhead */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10">
              Typical results: 15+ hours saved weekly, R40,000+ recovered monthly—within 90 days. No tools for sale. Just systems that work.
            </p>
            
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="text-lg px-8 py-6" asChild>
                <Link to="/apply" className="flex items-center gap-2">
                  Apply for a Diagnosis Call
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6" asChild>
                <Link to="/services/systems">See Example Systems</Link>
              </Button>
            </div>
            
            {/* Microcopy */}
            <p className="text-sm text-muted-foreground mt-4">
              We confirm fit by email before booking.
            </p>
          </div>
        }
      />
    </section>
  );
};

export default Hero;
