
import React from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section 
      id="home"
      className="relative min-h-screen w-full bg-background flex items-center pt-20 overflow-hidden"
    >
      {/* Dynamic background with gradients */}
      <div className="absolute inset-0 bg-gradient-hero"></div>
      
      {/* Background image with enhanced overlay */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: "url('/lovable-uploads/9bb8f7b5-a01b-4363-96f7-918cc27305ef.png')",
          backgroundSize: "cover",
          backgroundPosition: "center bottom",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      
      {/* Clean background - no floating elements */}
      
      {/* Content */}
      <div className="max-container relative z-10 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-slide-up">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 text-foreground leading-tight tracking-tight">
              Unlock AI Excellence with{" "}
              <span className="text-gradient">Amalfi AI</span>
            </h1>
          </div>
          
          <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <p className="text-xl sm:text-2xl md:text-3xl text-muted-foreground mb-10 sm:mb-12 max-w-3xl mx-auto font-light leading-relaxed">
              Premium AI Automation Solutions for{" "}
              <span className="text-gradient-subtle font-medium">Modern Businesses</span>
            </p>
          </div>
          
          <div className="animate-slide-up flex flex-col sm:flex-row justify-center gap-6" style={{ animationDelay: '0.4s' }}>
            <Button 
              variant="gradient"
              size="xl"
              className="group relative overflow-hidden"
              asChild
            >
              <a href="#contact" className="relative z-10">
                <span className="flex items-center gap-2">
                  Book Discovery Call
                  <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                  </svg>
                </span>
              </a>
            </Button>
            
            <Button 
              variant="glass"
              size="xl"
              className="group border-primary/30 hover:border-primary/60 text-foreground"
              asChild
            >
              <a href="https://soarai.app.n8n.cloud/form/889b9500-9b97-40fd-a200-193ace0f0cca" target="_blank" rel="noopener noreferrer" className="relative z-10">
                <span className="flex items-center gap-2">
                  Let's Chat
                  <svg className="w-5 h-5 transition-transform group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                  </svg>
                </span>
              </a>
            </Button>
          </div>
          
          {/* Trust indicators */}
          <div className="animate-slide-up mt-16 flex flex-col items-center gap-4" style={{ animationDelay: '0.6s' }}>
            <p className="text-sm text-muted-foreground uppercase tracking-wider font-medium">Trusted by innovative companies</p>
            <div className="flex items-center gap-8 opacity-60">
              <div className="text-xs font-medium">Enterprise Grade</div>
              <div className="w-1 h-1 bg-muted-foreground rounded-full"></div>
              <div className="text-xs font-medium">24/7 Support</div>
              <div className="w-1 h-1 bg-muted-foreground rounded-full"></div>
              <div className="text-xs font-medium">Scalable Solutions</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
