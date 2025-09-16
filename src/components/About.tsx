

import React from 'react';
import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar';

const About = () => {
  return (
    <section id="about" className="py-20 md:py-32 relative overflow-hidden bg-gradient-section">
      {/* Floating background elements */}
      <div className="absolute top-10 left-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-glow/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      
      <div className="max-container relative z-10 px-4 sm:px-6">
        <div className="glassmorphic-strong rounded-3xl p-8 md:p-16 hover-glow">
          <div className="max-w-5xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-12 md:mb-16">
              <div className="animate-slide-up">
                <span className="inline-block px-4 py-2 bg-primary/10 text-primary text-sm font-semibold rounded-full border border-primary/20 mb-4">
                  Our Story
                </span>
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-gradient">
                  Who We Are
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  Pioneering AI automation with South African innovation and global expertise
                </p>
              </div>
            </div>
            
            {/* Company Story */}
            <div className="animate-slide-up space-y-6 md:space-y-8 text-muted-foreground mb-16" style={{ animationDelay: '0.2s' }}>
              <p className="text-lg md:text-xl leading-relaxed">
                Born out of a passion for <span className="text-foreground font-semibold">elegant solutions</span> and relentless efficiency, Amalfi AI was created to help South African businesses unlock the true power of AI automation. We saw how much time small and medium businesses spent on manual tasks—and knew there was a better way.
              </p>
              
              <p className="text-lg md:text-xl leading-relaxed">
                We design and deploy <span className="text-gradient font-semibold">seamless, cutting-edge AI-driven workflows</span> tailored to the unique needs of every client. From automating your most tedious processes to integrating smart systems that grow with your business, our team brings global tech expertise with a local touch.
              </p>
              
              <p className="text-lg md:text-xl leading-relaxed">
                Our clients are <span className="text-foreground font-semibold">ambitious small and medium-sized businesses</span> ready to scale, streamline, and innovate. Whether you're a digital agency, logistics company, or a fast-growing local brand, we make AI accessible, aesthetic, and impactful for your everyday operations.
              </p>
            </div>
            
            {/* Team Members Section */}
            <div className="animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <h3 className="text-2xl md:text-4xl font-bold mb-10 md:mb-12 text-gradient text-center">
                Meet Our Founders
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                {/* Founder */}
                <div className="group text-center">
                  <div className="relative mb-6">
                    <div className="w-48 h-48 md:w-64 md:h-64 mx-auto rounded-full overflow-hidden border-4 border-primary/30 shadow-glow-md group-hover:shadow-glow-lg group-hover:border-primary/60 transition-all duration-500">
                      <img 
                        alt="Joshua Burton - Founder of Amalfi AI" 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                        src="/lovable-uploads/c82f3a29-2a00-4659-9f03-92a11af68d26.png"
                        style={{ transform: "scale(1.2)" }}
                      />
                    </div>
                    {/* Floating accent */}
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-primary rounded-full animate-pulse-glow"></div>
                  </div>
                  <div className="glassmorphic rounded-2xl p-6 group-hover:shadow-glow-md transition-all duration-300">
                    <h4 className="text-xl md:text-2xl font-bold text-foreground mb-2">Joshua Burton</h4>
                    <p className="text-primary font-semibold mb-3">Founder & CEO</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Visionary leader driving AI innovation for South African businesses
                    </p>
                  </div>
                </div>
                
                {/* Co-Founder */}
                <div className="group text-center">
                  <div className="relative mb-6">
                    <div className="w-48 h-48 md:w-64 md:h-64 mx-auto rounded-full overflow-hidden border-4 border-primary/30 shadow-glow-md group-hover:shadow-glow-lg group-hover:border-primary/60 transition-all duration-500">
                      <img 
                        src="/lovable-uploads/bbbe09c8-5a08-44e6-a343-151adaf1bf84.png" 
                        alt="Cheyenne Horn - Co-Founder of Amalfi AI" 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                      />
                    </div>
                    {/* Floating accent */}
                    <div className="absolute -top-2 -left-2 w-6 h-6 bg-primary-glow rounded-full animate-pulse-glow" style={{ animationDelay: '1s' }}></div>
                  </div>
                  <div className="glassmorphic rounded-2xl p-6 group-hover:shadow-glow-md transition-all duration-300">
                    <h4 className="text-xl md:text-2xl font-bold text-foreground mb-2">Cheyenne Horn</h4>
                    <p className="text-primary font-semibold mb-3">Co-Founder & CTO</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Technical architect specializing in scalable AI automation solutions
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Values Section */}
            <div className="animate-slide-up mt-16 md:mt-20 text-center" style={{ animationDelay: '0.6s' }}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                <div className="glassmorphic rounded-xl p-6 hover-glow">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                    </svg>
                  </div>
                  <h4 className="text-lg font-bold text-foreground mb-2">Innovation First</h4>
                  <p className="text-sm text-muted-foreground">Cutting-edge solutions that push boundaries</p>
                </div>
                
                <div className="glassmorphic rounded-xl p-6 hover-glow">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                    </svg>
                  </div>
                  <h4 className="text-lg font-bold text-foreground mb-2">Client-Centric</h4>
                  <p className="text-sm text-muted-foreground">Your success drives everything we do</p>
                </div>
                
                <div className="glassmorphic rounded-xl p-6 hover-glow">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                    </svg>
                  </div>
                  <h4 className="text-lg font-bold text-foreground mb-2">Trust & Security</h4>
                  <p className="text-sm text-muted-foreground">Enterprise-grade security in every solution</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

