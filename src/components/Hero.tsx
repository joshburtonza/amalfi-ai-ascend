
import React from 'react';
import { GooeyText } from '@/components/ui/gooey-text-morphing';

const Hero = () => {
  return (
    <section 
      id="home"
      className="relative min-h-screen w-full bg-background flex items-center justify-center pt-20 overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <GooeyText
          texts={["Strategic", "AI", "Partners"]}
          morphTime={1.5}
          cooldownTime={0.5}
          className="h-[300px] md:h-[400px]"
          textClassName="font-bold text-gradient bg-gradient-to-r from-[hsl(188,100%,63%)] to-[hsl(210,100%,70%)] bg-clip-text text-transparent"
        />
      </div>
    </section>
  );
};

export default Hero;
