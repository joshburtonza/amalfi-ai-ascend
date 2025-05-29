
import React from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section 
      id="home"
      className="relative min-h-screen w-full bg-amalfi-black flex items-center pt-20"
      style={{
        backgroundImage: "url('/lovable-uploads/9bb8f7b5-a01b-4363-96f7-918cc27305ef.png')",
        backgroundSize: "cover",
        backgroundPosition: "center bottom",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-amalfi-black/80 to-transparent"></div>
      
      {/* Content */}
      <div className="max-container relative z-10 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-amalfi-white leading-tight">
            Unlock AI Excellence with{" "}
            <span className="text-gradient">Amalfi AI</span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-amalfi-white/90 mb-8 sm:mb-10 max-w-2xl mx-auto">
            Premium AI Automation Solutions for Modern Businesses
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              className="btn-gradient text-amalfi-white font-medium text-base md:text-lg px-6 sm:px-8 py-5 sm:py-6 shadow-glow-md hover:shadow-glow-lg transition-all hover:scale-105 whitespace-nowrap"
              size="lg"
              asChild
            >
              <a href="#contact">
                Book Discovery Call
              </a>
            </Button>
            
            <Button 
              variant="outline" 
              className="bg-white/10 text-amalfi-white font-medium text-base md:text-lg px-6 sm:px-8 py-5 sm:py-6 transition-all border-2 border-white hover:bg-white hover:text-amalfi-black shadow-glow-md hover:shadow-glow-lg whitespace-nowrap"
              size="lg"
              asChild
            >
              <a href="https://soarai.app.n8n.cloud/form/889b9500-9b97-40fd-a200-193ace0f0cca" target="_blank" rel="noopener noreferrer">
                Let&apos;s Chat
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
