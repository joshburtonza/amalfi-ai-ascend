
import React from 'react';
import { GooeyText } from '@/components/ui/gooey-text-morphing';
import { LavaLamp } from '@/components/ui/fluid-blob';

const Hero = () => {
  return (
    <section 
      id="home"
      className="relative min-h-screen w-full bg-background flex flex-col items-center justify-center pt-20 overflow-hidden"
    >
      <div className="container mx-auto px-4 z-10 relative">
        <div className="flex items-center justify-center min-h-[200px] md:min-h-[250px] mb-8">
          <GooeyText
            texts={["Strategic", "AI", "Partners"]}
            morphTime={1}
            cooldownTime={0.3}
            className="h-[200px] md:h-[250px]"
            textClassName="font-bold text-gradient bg-gradient-to-r from-[hsl(188,100%,63%)] to-[hsl(210,100%,70%)] bg-clip-text text-transparent"
          />
        </div>
      </div>
      
      <div className="absolute inset-0 w-full h-full opacity-30">
        <LavaLamp />
      </div>
    </section>
  );
};

export default Hero;
