import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import { GlowCard } from '@/components/ui/spotlight-card';
import { Button } from '@/components/ui/button';
import { Component as TypewriterTestimonial } from '@/components/ui/typewriter-testimonial';
import { Search, Wrench, ArrowRight } from 'lucide-react';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Amalfi AI - Solutions Architecture for Service Businesses</title>
        <meta name="description" content="We diagnose business pain and design AI-native solutions that eliminate operational bottlenecks. Solutions Architecture for South African service businesses." />
        <link rel="canonical" href="https://www.amalfiai.com/" />
      </Helmet>
      
      <div className="bg-background min-h-screen">
        <Navbar />
        <Hero />
      
      {/* Two Pillars Overview */}
      <section className="py-20 md:py-32 px-4 bg-gradient-section">
        <div className="max-container">
          <div className="text-center mb-16 animate-slide-up">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary text-sm font-semibold rounded-full border border-primary/20 mb-4">
              How We Work
            </span>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
              Solutions Architecture, <span className="text-gradient">Not Tool Installation</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We start with your problems, not our products. Average client ROI: 4-6× within the first quarter.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-10">
            {/* Diagnosis & Design */}
            <GlowCard customSize className="p-8 md:p-10 hover-lift animate-slide-up">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <Search className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-3xl font-bold mb-4 text-foreground">Diagnosis & Design</h3>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                We map your operations, identify where time and money leak, and architect AI-native solutions tailored to your business model.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'Process audit and bottleneck mapping',
                  'ROI modeling before any build',
                  'Custom solution architecture',
                  'Clear implementation roadmap'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-muted-foreground">
                    <span className="text-primary mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Button variant="outline" className="group" asChild>
                <Link to="/services">
                  <span className="flex items-center gap-2">
                    Learn More
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </Button>
            </GlowCard>

            {/* Build & Operate */}
            <GlowCard customSize className="p-8 md:p-10 hover-lift animate-slide-up [animation-delay:200ms]">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <Wrench className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-3xl font-bold mb-4 text-foreground">Build & Operate</h3>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                We deploy AI systems that integrate with your existing workflows. Average deployment: 2-3 weeks to full operation.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'Full implementation and integration',
                  'Staff training and handover',
                  'Ongoing optimization and support',
                  'Monthly performance reviews'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-muted-foreground">
                    <span className="text-primary mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Button variant="outline" className="group" asChild>
                <Link to="/services/systems">
                  <span className="flex items-center gap-2">
                    View Systems
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </Button>
            </GlowCard>
          </div>

          {/* Proof Point */}
          <div className="text-center mt-16 animate-slide-up" style={{ animationDelay: '400ms' }}>
            <p className="text-lg text-muted-foreground">
              <span className="text-gradient font-bold">3 businesses. R180,000+ in monthly recurring savings. 45+ hours reclaimed weekly.</span>{' '}
              All within 90 days of engagement.
            </p>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-20 md:py-32 relative overflow-hidden bg-gradient-section">
        <div className="max-container relative z-10 px-4 sm:px-6">
          <div className="text-center mb-16 md:mb-20">
            <div className="animate-slide-up">
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary text-sm font-semibold rounded-full border border-primary/20 mb-4">
                Results
              </span>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
                What Happens When <span className="text-gradient">Problems Get Solved</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
                Real businesses. Real bottlenecks. Real solutions.
              </p>
              <p className="text-lg text-primary font-semibold animate-pulse">
                Hover over the avatars to read their stories
              </p>
            </div>
          </div>
          
          <TypewriterTestimonial testimonials={[
            {
              image: 'https://images.unsplash.com/photo-1507003211169-0a6dd7228f2d?q=80&w=1780&auto=format&fit=crop',
              audio: 'audio_1.mp3',
              text: "Amalfi AI completely transformed our digital operations. Their AI-driven workflows helped us save 15+ hours every week, and the onboarding was seamless.",
              name: 'Salah Elbaba',
              jobtitle: 'Owner, SA Recruitment',
            },
            {
              image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1780&auto=format&fit=crop',
              audio: 'audio_2.mp3',
              text: "Switching to Amalfi AI was the smartest investment we made. The team understood our unique logistics challenges and built a custom solution.",
              name: 'Johan V.',
              jobtitle: 'Director, TableView Logistics',
            },
            {
              image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1780&auto=format&fit=crop',
              audio: 'audio_6.mp3',
              text: "The support team is incredible. They not only set up our systems but trained our entire team. The ROI was visible within the first month.",
              name: 'Zanele N.',
              jobtitle: 'Operations Manager, Durban Tech',
            },
          ]} />
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-container">
          <GlowCard customSize className="p-12 md:p-16 rounded-3xl text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gradient">
              Stop Buying Tools. Start Solving Problems.
            </h2>
            <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
              Book a 30-minute diagnosis call. We'll identify your biggest bottleneck and show you exactly what solving it is worth—in rands and hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="w-full sm:w-auto" asChild>
                <Link to="/contact">Book Your Diagnosis Call</Link>
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto" asChild>
                <Link to="/pricing">View Investment Levels</Link>
              </Button>
            </div>
          </GlowCard>
        </div>
      </section>

      <Footer />
    </div>
    </>
  );
};

export default Index;
