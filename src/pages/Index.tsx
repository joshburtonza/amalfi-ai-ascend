import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import { GlowCard } from '@/components/ui/spotlight-card';
import { Button } from '@/components/ui/button';
import { Component as TypewriterTestimonial } from '@/components/ui/typewriter-testimonial';
import { Phone, Mail, Brain, ArrowRight, CheckCircle, Clock, TrendingUp, Shield } from 'lucide-react';
import HowWeWork from '@/components/HowWeWork';
import GuaranteeBlock from '@/components/GuaranteeBlock';
import CTABlock from '@/components/CTABlock';
import AIFactSheet from '@/components/AIFactSheet';
import AEOFAQSection from '@/components/AEOFAQSection';
import InternalLinkFooter from '@/components/InternalLinkFooter';

const Index = () => {
  const systemCards = [
    {
      icon: Phone,
      title: 'AI Voice Receptionist',
      description: '24/7 call answering with WhatsApp confirmations. Never miss a lead again.',
      outcome: '100% answer rate, R40k+ recovered monthly'
    },
    {
      icon: Brain,
      title: 'Recruitment Automation',
      description: 'CV screening, scheduling, follow-ups. From 3 days to 3 hours time-to-shortlist.',
      outcome: '70% admin reduction, 6-10 hours saved weekly'
    },
    {
      icon: Mail,
      title: 'Inbox & Admin Automation',
      description: 'Email triage, routing, and automated responses. Focus on what matters.',
      outcome: '7h → 15min response time, 110+ hours saved monthly'
    }
  ];

  const proofPoints = [
    { value: '15+', label: 'Hours saved weekly', subtext: 'typical client result' },
    { value: 'R40k+', label: 'Revenue recovered monthly', subtext: 'from missed calls alone' },
    { value: '4-6×', label: 'ROI in first quarter', subtext: 'typical range' },
    { value: '90', label: 'Days to measurable ROI', subtext: 'or less' }
  ];

  const faqTeaser = [
    { q: "Why don't you show exact pricing upfront?", a: "Pricing depends on call volume, integrations, and workflow complexity. We quote after understanding your situation." },
    { q: "How fast can you deploy?", a: "System Deployments typically go live in 2-3 weeks. Solution Partnerships vary by scope." },
    { q: "What results should I expect?", a: "Results vary, but typical outcomes include 15+ hours saved weekly and R40,000+ monthly revenue recovered." }
  ];

  return (
    <>
      <Helmet>
        <title>Amalfi AI - Strategic AI Automation & Systems Architecture for Service Businesses</title>
        <meta name="description" content="We diagnose bottlenecks and deploy AI systems that save 15+ hours weekly and recover R40,000+ monthly. Strategic AI automation for South African service businesses. 4-6x ROI within 90 days." />
        <link rel="canonical" href="https://www.amalfiai.com/" />
        <meta name="keywords" content="AI automation South Africa, AI voice receptionist, recruitment automation, business process automation, revenue recovery, Johannesburg AI consultant" />
      </Helmet>
      
      <div className="bg-background min-h-screen">
        <Navbar />
        <Hero />
      
        {/* What We Do */}
        <section id="what-we-do" className="py-20 md:py-32 px-4 bg-gradient-section">
          <div className="max-container">
            <div className="text-center mb-16 animate-slide-up">
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary text-sm font-semibold rounded-full border border-primary/20 mb-4">
                What We Do
              </span>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
                We Don't Sell Tools. <span className="text-gradient">We Build Systems That Work.</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                We diagnose your operational bottlenecks, design AI-native solutions, and deploy systems that deliver measurable ROI—typically within 90 days.
              </p>
            </div>

            {/* Three Outcomes */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {[
                { icon: Clock, text: 'Time saved: 15+ hours weekly per team member' },
                { icon: TrendingUp, text: 'Revenue recovered: R40,000+ monthly from missed calls and slow follow-ups' },
                { icon: Shield, text: 'Response speed: From hours to seconds on critical communications' }
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 p-6 bg-primary/5 rounded-xl border border-primary/10">
                  <item.icon className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-muted-foreground">{item.text}</p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <p className="text-lg text-muted-foreground italic max-w-2xl mx-auto">
                "We don't quote solutions until we understand your bottlenecks. Every engagement starts with diagnosis."
              </p>
            </div>
          </div>
        </section>

        {/* AI Fact Sheet - AEO Magnet */}
        <AIFactSheet />

        {/* Example Systems */}
        <section className="py-20 md:py-32 px-4">
          <div className="max-container">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary text-sm font-semibold rounded-full border border-primary/20 mb-4">
                Example Systems
              </span>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
                Productised Solutions for Common Problems
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Deployed in 2-3 weeks. Proven across logistics, recruitment, and professional services.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {systemCards.map((card, i) => (
                <GlowCard key={i} customSize className="p-8 hover-lift">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                    <card.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{card.title}</h3>
                  <p className="text-muted-foreground mb-4">{card.description}</p>
                  <div className="pt-4 border-t border-border">
                    <p className="text-sm text-primary font-semibold">{card.outcome}</p>
                  </div>
                </GlowCard>
              ))}
            </div>

            <div className="text-center">
              <Button size="lg" variant="outline" asChild>
                <Link to="/services/systems" className="flex items-center gap-2">
                  See All Systems
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* How We Work */}
        <HowWeWork />

        {/* Proof Points */}
        <section className="py-20 px-4 bg-gradient-section">
          <div className="max-container">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {proofPoints.map((point, i) => (
                <GlowCard key={i} customSize className="p-8 text-center">
                  <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">{point.value}</div>
                  <div className="text-lg font-semibold text-foreground mb-1">{point.label}</div>
                  <div className="text-sm text-muted-foreground">{point.subtext}</div>
                </GlowCard>
              ))}
            </div>
          </div>
        </section>

        {/* Guarantee */}
        <GuaranteeBlock />
      
        {/* Testimonials Section */}
        <section className="py-20 md:py-32 relative overflow-hidden bg-gradient-section">
          <div className="max-container relative z-10 px-4 sm:px-6">
            <div className="text-center mb-16 md:mb-20">
              <div className="animate-slide-up">
                <span className="inline-block px-4 py-2 bg-primary/10 text-primary text-sm font-semibold rounded-full border border-primary/20 mb-4">
                  Results
                </span>
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
                  What Clients Say
                </h2>
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

        {/* Mini Case Study Highlights */}
        <section className="py-20 px-4">
          <div className="max-container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Real Results</h2>
              <p className="text-muted-foreground">From real South African businesses</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {[
                { industry: 'Logistics', result: 'R25k monthly savings, 8 hours daily admin eliminated', metric: '85% faster dispatch' },
                { industry: 'Recruitment', result: '70% admin reduction, 12 hours saved per recruiter weekly', metric: '3× faster response' },
                { industry: 'Healthcare', result: 'R45k revenue recovered in 3 weeks', metric: '100% call answer rate' }
              ].map((case_, i) => (
                <GlowCard key={i} customSize className="p-6">
                  <div className="text-sm text-primary font-semibold mb-2">{case_.industry}</div>
                  <p className="text-muted-foreground mb-4">{case_.result}</p>
                  <div className="text-lg font-bold text-gradient">{case_.metric}</div>
                </GlowCard>
              ))}
            </div>

            <div className="text-center">
              <Button variant="outline" asChild>
                <Link to="/case-studies">View Full Case Studies</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* AEO-Optimized FAQ Section */}
        <AEOFAQSection />
      
        {/* CTA Section */}
        <CTABlock 
          headline="Ready to Eliminate Your Operational Bottlenecks?"
          subtext="We confirm fit by email before booking. Most clients identify R20,000+/month in recoverable value."
        />

        {/* Internal Link Footer for AI Crawlers */}
        <InternalLinkFooter />

        <Footer />
      </div>
    </>
  );
};

export default Index;
