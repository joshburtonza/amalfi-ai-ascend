import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactForm from '../components/Contact';
import { GlowCard } from '@/components/ui/spotlight-card';
import { Button, buttonVariants } from '@/components/ui/button';
import { Calendar, MessageSquare, Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <div className="bg-background min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="max-container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gradient">
              Let's Start With Your Problems
            </h1>
            <p className="text-xl text-muted-foreground mb-6">
              30 minutes. Zero pitch. Most businesses we talk to discover R20,000+/month in recoverable time and revenue.
            </p>
            <Button size="lg" asChild>
              <a href="https://calendly.com/amalfiai" target="_blank" rel="noopener noreferrer">Book a Diagnosis Call</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-12 px-4">
        <div className="max-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
            <GlowCard customSize className="p-8 rounded-2xl text-center hover-lift h-full">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Calendar className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Book a Diagnosis Call</h3>
              <p className="text-muted-foreground mb-6">
                30 minutes to understand your biggest bottlenecks and explore whether we can help.
              </p>
              <Button size="lg" className="w-full">
                Book a Call
              </Button>
            </GlowCard>

            <GlowCard customSize className="p-8 rounded-2xl text-center hover-lift h-full">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <MessageSquare className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Already Know What You Need?</h3>
              <p className="text-muted-foreground mb-6">
                Send us a message with details and we'll respond within 24 hours.
              </p>
              <Button size="lg" variant="outline" className="w-full" onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}>
                Send Message
              </Button>
            </GlowCard>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact-form" className="py-12 px-4">
        <div className="max-container">
          <div className="max-w-2xl mx-auto mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Send Us a Message
            </h2>
            <p className="text-lg text-muted-foreground">
              Tell us about your operational challenges and we'll get back to you within 24 hours.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 px-4 bg-gradient-to-b from-transparent to-primary/5">
        <div className="max-container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Email</h3>
              <a href="mailto:hello@amalfiai.com" className="text-muted-foreground hover:text-primary transition-colors">
                hello@amalfiai.com
              </a>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Phone</h3>
              <a href="tel:+27812705358" className="text-muted-foreground hover:text-primary transition-colors">
                +27 81 270 5358
              </a>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Location</h3>
              <p className="text-muted-foreground">
                Johannesburg, South Africa
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
