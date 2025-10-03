
import React from 'react';
import { BackgroundPaths } from '@/components/ui/background-paths';

const Hero = () => {
  return (
    <section 
      id="home"
      className="relative min-h-screen w-full bg-background flex items-center pt-20 overflow-hidden"
    >
      <div className="absolute top-32 left-0 right-0 z-10 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold text-foreground/80">
          Strategic AI Partners
        </h2>
      </div>
      <BackgroundPaths title="Unlock AI Excellence with Amalfi AI" />
    </section>
  );
};

export default Hero;
