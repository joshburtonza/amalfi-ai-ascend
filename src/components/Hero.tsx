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
        title=""
        topContent={
          <>
            {/* Primary H1 for SEO - visually hidden but accessible */}
            <h1 className="sr-only">AI Automation for Service Businesses</h1>
            {/* Visual heading with animation */}
            <p className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground" role="heading" aria-level={2}>
              <GooeyText 
                words={['Strategic', 'Innovative', 'Transformative', 'Strategic']} 
                morphTime={0.9}
                cooldownTime={0.25}
              />{' '}
              AI Partners
            </p>
          </>
        }
      />
    </section>
  );
};

export default Hero;
