
import React from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section 
      id="home"
      className="relative min-h-screen w-full bg-amalfi-black flex items-center pt-20"
      style={{
        backgroundImage: "url('/lovable-uploads/2ea9419c-2ca9-4637-9fb4-d62623538574.png')",
        backgroundSize: "cover",
        backgroundPosition: "center bottom",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-amalfi-black/80 to-transparent"></div>
      
      {/* Content */}
      <div className="max-container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-amalfi-white leading-tight">
            Unlock AI Excellence with{" "}
            <span className="text-gradient">Amalfi AI</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-amalfi-white/90 mb-10 max-w-2xl mx-auto">
            Premium AI Automation Solutions for Modern Businesses
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              className="btn-gradient text-amalfi-white font-medium text-lg px-8 py-6 shadow-glow-md hover:shadow-glow-lg transition-all hover:scale-105"
              size="lg"
            >
              Get Started
            </Button>
            
            <Button 
              variant="outline" 
              className="text-amalfi-white border-amalfi-emerald/50 hover:bg-transparent hover:border-amalfi-emerald font-medium text-lg px-8 py-6 transition-all hover:shadow-glow-sm"
              size="lg"
            >
              Let&apos;s Chat
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
