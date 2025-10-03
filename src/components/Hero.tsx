
import React from 'react';
import { GooeyText } from '@/components/ui/gooey-text-morphing';
import { LavaLamp } from '@/components/ui/fluid-blob';

const Hero = () => {
  return (
    <section 
      id="home"
      className="relative min-h-screen w-full bg-white dark:bg-black flex flex-col items-center justify-center pt-20 overflow-hidden"
    >
      <div className="container mx-auto px-8 md:px-16 z-10 relative w-full">
        <div className="flex items-center justify-center min-h-[180px] md:min-h-[220px] lg:min-h-[260px] mb-8 w-full">
          <GooeyText
            texts={["Strategic", "AI", "Partners"]}
            morphTime={0.9}
            cooldownTime={0.25}
            className="h-[180px] md:h-[220px] lg:h-[260px] w-full max-w-6xl"
            textClassName="font-bold text-gradient bg-gradient-to-r from-[hsl(188,100%,63%)] to-[hsl(210,100%,70%)] bg-clip-text text-transparent !text-5xl md:!text-7xl lg:!text-8xl"
          />
        </div>
      </div>

      <div className="absolute inset-0 w-full h-full opacity-60">
        <LavaLamp />
      </div>
    </section>
  );
};

export default Hero;
