import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { GlowCard } from '@/components/ui/spotlight-card';
import { Button } from '@/components/ui/button';
import { Calendar, MessageSquare, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact - Amalfi AI | Apply for a Diagnosis Call</title>
        <meta name="description" content="Apply for a Diagnosis Call. We confirm fit by email before booking. Johannesburg-based, serving SA, UK, and US businesses." />
        <link rel="canonical" href="https://www.amalfiai.com/contact" />
      </Helmet>

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
                We don't quote solutions until we understand your bottlenecks. Apply for a Diagnosis Call and we'll confirm fit by email before booking.
              </p>
              <Button size="lg" asChild>
                <Link to="/apply" className="flex items-center gap-2">
                  Apply for a Diagnosis Call
                  <ArrowRight className="w-4 h-4" />
                </Link>
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
                <h3 className="text-2xl font-bold mb-4">Apply for a Diagnosis Call</h3>
                <p className="text-muted-foreground mb-4">
                  60-90 minute deep-dive into your operations. R2,500. We confirm fit by email before booking.
                </p>
                <p className="text-sm text-muted-foreground mb-6 italic">
                  Most clients identify R20,000+/month in recoverable value.
                </p>
                <Button size="lg" className="w-full" asChild>
                  <Link to="/apply" className="flex items-center justify-center gap-2">
                    Apply Now
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </GlowCard>

              <GlowCard customSize className="p-8 rounded-2xl text-center hover-lift h-full">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <MessageSquare className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Quick Question?</h3>
                <p className="text-muted-foreground mb-6">
                  Email us directly. We respond within 24 hours on business days.
                </p>
                <Button size="lg" variant="outline" className="w-full" asChild>
                  <a href="mailto:hello@amalfiai.com">
                    Email Us
                  </a>
                </Button>
              </GlowCard>
            </div>
          </div>
        </section>

        {/* What to Expect */}
        <section className="py-12 px-4">
          <div className="max-container">
            <GlowCard customSize className="p-8 max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold mb-6 text-center">What Happens When You Apply</h2>
              <ol className="space-y-4">
                {[
                  { step: '1', text: 'You submit the application form (takes 2 minutes)' },
                  { step: '2', text: 'We review and confirm fit within 24 hours' },
                  { step: '3', text: 'If there\'s potential, we send a booking link' },
                  { step: '4', text: 'You book and pay for the Diagnosis Session (R2,500)' },
                  { step: '5', text: 'We meet, diagnose your bottlenecks, and map out ROI' }
                ].map((item) => (
                  <li key={item.step} className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-primary/10 text-primary font-bold flex items-center justify-center flex-shrink-0">
                      {item.step}
                    </span>
                    <span className="text-muted-foreground pt-1">{item.text}</span>
                  </li>
                ))}
              </ol>
            </GlowCard>
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
    </>
  );
};

export default Contact;
