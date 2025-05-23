
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-amalfi-black via-amalfi-black to-amalfi-emerald/10 z-0"></div>
      
      {/* Glow Effects */}
      <div className="absolute top-0 right-1/4 w-64 h-64 bg-amalfi-teal/10 rounded-full blur-3xl animate-glow-pulse"></div>
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-amalfi-emerald/10 rounded-full blur-3xl animate-glow-pulse" style={{ animationDelay: '1.5s' }}></div>
      
      <div className="max-container relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            <span className="text-gradient">Contact</span> Us
          </h2>
          <p className="text-center text-amalfi-white/80 mb-10">
            Ready to transform your business with premium AI solutions? Get in touch today.
          </p>
          
          <div className="glassmorphic rounded-3xl p-8 md:p-10 border border-amalfi-emerald/10 shadow-glow-sm">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm text-amalfi-white/80">
                    Name
                  </label>
                  <Input 
                    id="name"
                    placeholder="Your name"
                    className="bg-amalfi-black/50 border-amalfi-emerald/20 focus:border-amalfi-emerald/60 glassmorphic focus:shadow-glow-sm placeholder:text-amalfi-teal/50 text-amalfi-white"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm text-amalfi-white/80">
                    Email
                  </label>
                  <Input 
                    id="email"
                    type="email"
                    placeholder="Your email"
                    className="bg-amalfi-black/50 border-amalfi-emerald/20 focus:border-amalfi-emerald/60 glassmorphic focus:shadow-glow-sm placeholder:text-amalfi-teal/50 text-amalfi-white"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="company" className="text-sm text-amalfi-white/80">
                  Company
                </label>
                <Input 
                  id="company"
                  placeholder="Your company name"
                  className="bg-amalfi-black/50 border-amalfi-emerald/20 focus:border-amalfi-emerald/60 glassmorphic focus:shadow-glow-sm placeholder:text-amalfi-teal/50 text-amalfi-white"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm text-amalfi-white/80">
                  Message
                </label>
                <Textarea 
                  id="message"
                  placeholder="How can we help you?"
                  rows={5}
                  className="bg-amalfi-black/50 border-amalfi-emerald/20 focus:border-amalfi-emerald/60 glassmorphic focus:shadow-glow-sm placeholder:text-amalfi-teal/50 text-amalfi-white resize-none"
                />
              </div>
              
              <div className="flex justify-center pt-4">
                <Button 
                  className="btn-gradient text-amalfi-white font-medium px-8 py-6 shadow-glow-md hover:shadow-glow-lg transition-all hover:scale-105 w-full md:w-auto"
                  size="lg"
                >
                  Send Message
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
