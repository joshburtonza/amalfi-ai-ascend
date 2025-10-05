
import React from 'react';
import { BackgroundPaths } from '@/components/ui/background-paths';

const Hero = () => {
  return (
    <section 
      id="home"
      className="relative min-h-screen w-full bg-background flex items-center justify-center pt-20 overflow-hidden"
    >
      <BackgroundPaths 
        title="Unlock AI Excellence with Amalfi AI"
      />
    </section>
  );
};

export default Hero;
