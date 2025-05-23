
import React from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section 
      id="home"
      className="relative min-h-screen w-full bg-amalfi-black flex items-center pt-20"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amalfi-black via-amalfi-teal/20 to-amalfi-emerald/20"></div>
        <div className="absolute bottom-0 left-0 right-0 h-[30vh] bg-gradient-to-t from-amalfi-black to-transparent"></div>
        
        {/* Wave Elements */}
        <div className="absolute bottom-[10%] w-full h-[60vh] opacity-20 animate-wave" style={{ animationDelay: '0s' }}>
          <div className="w-full h-full bg-gradient-to-r from-amalfi-teal to-amalfi-emerald rounded-[100%] blur-3xl"></div>
        </div>
        <div className="absolute bottom-[5%] w-full h-[40vh] opacity-20 animate-wave" style={{ animationDelay: '0.5s' }}>
          <div className="w-full h-full bg-gradient-to-r from-amalfi-emerald to-amalfi-teal rounded-[100%] blur-3xl"></div>
        </div>
        <div className="absolute bottom-[15%] w-full h-[20vh] opacity-20 animate-wave" style={{ animationDelay: '1s' }}>
          <div className="w-full h-full bg-gradient-to-r from-amalfi-teal/80 to-amalfi-emerald/80 rounded-[100%] blur-3xl"></div>
        </div>
      </div>
      
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
