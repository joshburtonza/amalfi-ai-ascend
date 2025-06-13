import React from 'react';
import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar';

const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-amalfi-black via-amalfi-black to-amalfi-teal/20 z-0"></div>
      
      {/* Glow Effects */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-amalfi-emerald/10 rounded-full blur-3xl animate-glow-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amalfi-teal/10 rounded-full blur-3xl animate-glow-pulse" style={{
        animationDelay: '1s'
      }}></div>
      
      <div className="max-container relative z-10 px-4 sm:px-6">
        <div className="glassmorphic rounded-3xl p-6 md:p-12 border border-amalfi-emerald/10 shadow-glow-sm">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-bold mb-8 md:mb-10 text-gradient text-center">Who We Are</h2>
            
            <div className="space-y-5 md:space-y-6 text-amalfi-white/90">
              <p className="text-base md:text-xl">
                Born out of a passion for elegant solutions and relentless efficiency, Amalfi AI was created to help South African businesses unlock the true power of AI automation. We saw how much time small and medium businesses spent on manual tasks—and knew there was a better way.
              </p>
              
              <p className="text-base md:text-xl">
                We design and deploy seamless, cutting-edge AI-driven workflows tailored to the unique needs of every client. From automating your most tedious processes to integrating smart systems that grow with your business, our team brings global tech expertise with a local touch.
              </p>
              
              <p className="text-base md:text-xl">
                Our clients are ambitious small and medium-sized businesses (SMBs) ready to scale, streamline, and innovate. Whether you're a digital agency, logistics company, or a fast-growing local brand, we make AI accessible, aesthetic, and impactful for your everyday operations.
              </p>
            </div>
            
            {/* Team Members Section */}
            <div className="mt-12 md:mt-16">
              <h3 className="text-xl md:text-3xl font-bold mb-6 md:mb-8 text-gradient text-center">Our Team</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
                {/* Founder */}
                <div className="flex flex-col items-center glassmorphic p-5 md:p-6 rounded-2xl border border-amalfi-emerald/10 transition-all duration-300 hover:shadow-glow-md">
                  <div className="w-40 h-40 md:w-52 md:h-52 rounded-full overflow-hidden border-2 border-amalfi-emerald mb-4 shadow-glow-sm">
                    <div className="w-full h-full overflow-hidden">
                      <img 
                        alt="Joshua Burton" 
                        className="w-full h-full object-cover" 
                        src="/lovable-uploads/6b1aadce-bf68-4277-9744-2fb114379290.jpg"
                        style={{
                          transform: "scale(1.5) translateY(27px)",
                        }} 
                      />
                    </div>
                  </div>
                  <h4 className="text-lg md:text-xl font-bold text-amalfi-white mb-1">Joshua Burton</h4>
                  <p className="text-amalfi-emerald font-medium">Founder</p>
                </div>
                
                {/* Co-Founder */}
                <div className="flex flex-col items-center glassmorphic p-5 md:p-6 rounded-2xl border border-amalfi-emerald/10 transition-all duration-300 hover:shadow-glow-md">
                  <div className="w-40 h-40 md:w-52 md:h-52 rounded-full overflow-hidden border-2 border-amalfi-emerald mb-4 shadow-glow-sm">
                    <div className="w-full h-full overflow-hidden">
                      <img 
                        src="/lovable-uploads/bbbe09c8-5a08-44e6-a343-151adaf1bf84.png" 
                        alt="Cheyenne Horn" 
                        className="w-full h-full object-cover" 
                      />
                    </div>
                  </div>
                  <h4 className="text-lg md:text-xl font-bold text-amalfi-white mb-1">Cheyenne Horn</h4>
                  <p className="text-amalfi-emerald font-medium">Co-Founder</p>
                </div>
              </div>
            </div>
            
            {/* Decorative Element */}
            <div className="mt-10 md:mt-12 flex justify-center">
              <div className="h-0.5 w-16 md:w-24 bg-gradient-to-r from-amalfi-emerald to-amalfi-teal rounded-full shadow-glow-sm"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
