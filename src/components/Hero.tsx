
import React from 'react';
import { BackgroundPaths } from '@/components/ui/background-paths';
import { GooeyText } from '@/components/ui/gooey-text-morphing';

const Hero = () => {
  return (
    <section 
      id="home"
      className="relative min-h-screen w-full bg-background flex items-center justify-center pt-20 overflow-hidden"
    >
      <BackgroundPaths 
        title="Unlock AI Excellence with Amalfi AI"
        topContent={
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground">
            <GooeyText 
              words={['Strategic', 'Innovative', 'Transformative', 'Strategic']} 
              morphTime={0.9}
              cooldownTime={0.25}
            />{' '}
            AI Partners
          </h2>
        }
      />
    </section>
  );
};

export default Hero;
