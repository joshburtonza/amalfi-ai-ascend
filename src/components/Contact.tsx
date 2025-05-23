
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MessageSquare } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-amalfi-black via-amalfi-black to-amalfi-emerald/10 z-0"></div>
      
      {/* Glow Effects */}
      <div className="absolute top-0 right-1/4 w-64 h-64 bg-amalfi-teal/10 rounded-full blur-3xl animate-glow-pulse"></div>
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-amalfi-emerald/10 rounded-full blur-3xl animate-glow-pulse" style={{ animationDelay: '1.5s' }}></div>
      
      <div className="max-container relative z-10">
        <div className="mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Connect</span> With Us
          </h2>
          <p className="text-amalfi-white/80 max-w-2xl mx-auto">
            Ready to transform your business with our premium AI solutions? Get in touch with our team.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Form - Takes up 2/3 of the space on larger screens */}
          <div className="lg:col-span-2">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm text-amalfi-white/80">
                    Full Name
                  </label>
                  <Input 
                    id="name"
                    placeholder="Your name"
                    className="bg-amalfi-black/50 border-amalfi-emerald/20 focus:border-amalfi-emerald/60 glassmorphic focus:shadow-glow-sm placeholder:text-amalfi-teal/50 text-amalfi-white"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm text-amalfi-white/80">
                    Email Address
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
                  placeholder="Tell us about your project needs..."
                  rows={5}
                  className="bg-amalfi-black/50 border-amalfi-emerald/20 focus:border-amalfi-emerald/60 glassmorphic focus:shadow-glow-sm placeholder:text-amalfi-teal/50 text-amalfi-white resize-none"
                />
              </div>
              
              <div>
                <Button 
                  className="btn-gradient text-amalfi-white font-medium px-8 py-6 shadow-glow-md hover:shadow-glow-lg transition-all hover:scale-105 w-full"
                  size="lg"
                >
                  <span className="mr-2">Send Message</span>
                  <Mail size={18} />
                </Button>
              </div>
            </form>
          </div>
          
          {/* Contact Info Box */}
          <div className="lg:col-span-1">
            <div className="glassmorphic rounded-3xl p-8 border border-amalfi-emerald/10 shadow-glow-sm h-full">
              <h3 className="text-2xl font-bold text-gradient mb-8">Get in Touch</h3>
              
              <div className="space-y-8">
                {/* Email Contact */}
                <div className="flex items-start">
                  <div className="p-3 rounded-full bg-amalfi-emerald/10 mr-4">
                    <Mail className="text-amalfi-emerald" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-amalfi-white mb-1">Email Us</h4>
                    <p className="text-amalfi-white/80">Josh@amalfiai.com</p>
                    <p className="text-amalfi-white/80">clan@amalfiai.com</p>
                  </div>
                </div>
                
                {/* Phone Contact */}
                <div className="flex items-start">
                  <div className="p-3 rounded-full bg-amalfi-emerald/10 mr-4">
                    <Phone className="text-amalfi-emerald" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-amalfi-white mb-1">Call Us</h4>
                    <p className="text-amalfi-white/80">+27 81 270 5358</p>
                    <p className="text-amalfi-white/80">Mon-Fri, 9am-6pm EST</p>
                  </div>
                </div>
                
                {/* Live Chat */}
                <div className="flex items-start">
                  <div className="p-3 rounded-full bg-amalfi-emerald/10 mr-4">
                    <MessageSquare className="text-amalfi-emerald" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-amalfi-white mb-1">Live Chat</h4>
                    <p className="text-amalfi-white/80">Chat with our support team in real-time through our web app or mobile application.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
