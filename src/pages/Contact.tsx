import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactForm from '../components/Contact';
import { GlowCard } from '@/components/ui/spotlight-card';
import { Button } from '@/components/ui/button';
import { Calendar, Download, Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <div className="bg-background min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-hsl(var(--amalfi-teal)/0.05) to-transparent" />
        <div className="max-container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gradient">
              Let's Design Your AI Backbone
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Start with a conversation. No commitment required. Let's explore how AI infrastructure can transform your business.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-12 px-4">
        <div className="max-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
            <GlowCard customSize className="p-8 rounded-2xl text-center hover-lift h-full">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-hsl(var(--amalfi-teal)/0.2) to-hsl(var(--amalfi-teal)/0.05) flex items-center justify-center mx-auto mb-6">
                <Calendar className="w-8 h-8 text-hsl(var(--amalfi-teal))" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Schedule a Strategy Call</h3>
              <p className="text-muted-foreground mb-6">
                Book a 30-minute consultation to discuss your AI needs and explore strategic opportunities.
              </p>
              <Button size="lg" className="w-full">
                Book a Call
              </Button>
            </GlowCard>

            <GlowCard customSize className="p-8 rounded-2xl text-center hover-lift h-full">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-hsl(var(--amalfi-teal)/0.2) to-hsl(var(--amalfi-teal)/0.05) flex items-center justify-center mx-auto mb-6">
                <Download className="w-8 h-8 text-hsl(var(--amalfi-teal))" />
              </div>
              <h3 className="text-2xl font-bold mb-4">AI Readiness Audit</h3>
              <p className="text-muted-foreground mb-6">
                Download our self-assessment framework to evaluate your organization's AI maturity.
              </p>
              <Button size="lg" variant="outline" className="w-full">
                Download Audit
              </Button>
            </GlowCard>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-12 px-4">
        <div className="max-container">
          <div className="max-w-2xl mx-auto mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Send Us a Message
            </h2>
            <p className="text-lg text-muted-foreground">
              Tell us about your AI needs and we'll get back to you within 24 hours.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 px-4 bg-gradient-to-b from-transparent to-hsl(var(--amalfi-surface)/0.3)">
        <div className="max-container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-hsl(var(--amalfi-teal)/0.2) to-hsl(var(--amalfi-teal)/0.05) flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-hsl(var(--amalfi-teal))" />
              </div>
              <h3 className="font-semibold mb-2">Email</h3>
              <a href="mailto:hello@amalfiai.com" className="text-muted-foreground hover:text-hsl(var(--amalfi-teal)) transition-colors">
                hello@amalfiai.com
              </a>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-hsl(var(--amalfi-teal)/0.2) to-hsl(var(--amalfi-teal)/0.05) flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6 text-hsl(var(--amalfi-teal))" />
              </div>
              <h3 className="font-semibold mb-2">Phone</h3>
              <a href="tel:+27123456789" className="text-muted-foreground hover:text-hsl(var(--amalfi-teal)) transition-colors">
                +27 12 345 6789
              </a>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-hsl(var(--amalfi-teal)/0.2) to-hsl(var(--amalfi-teal)/0.05) flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6 text-hsl(var(--amalfi-teal))" />
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
