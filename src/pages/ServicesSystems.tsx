import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { GlowCard } from '@/components/ui/spotlight-card';
import { Phone, Mail, Brain, Zap, Clock, Users, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const ServicesSystems = () => {
  return (
    <div className="bg-background min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="max-container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gradient">
              Meet the Amalfi AI Systems
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Intelligent Team Members That Scale Your Business
            </p>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Three powerful AI systems designed to automate communication, accelerate operations, and deliver 24/7 reliability — all with a human touch.
            </p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-12 px-4">
        <div className="max-container">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-muted-foreground">
              Amalfi's systems are pre-built, battle-tested AI modules that can be deployed as standalone SaaS tools or integrated into your existing infrastructure. Each one acts like a digital team member — trained, consistent, and infinitely scalable.
            </p>
          </div>
        </div>
      </section>

      {/* Mark - AI Receptionist */}
      <section className="py-20 px-4">
        <div className="max-container">
          <GlowCard customSize className="p-8 md:p-12">
            <div className="flex items-start gap-6 mb-6">
              <div className="bg-primary/10 p-4 rounded-lg">
                <Phone className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-2">Mark — The AI Receptionist</h2>
                <p className="text-xl text-primary italic">Your 24/7 voice receptionist that never misses a call.</p>
              </div>
            </div>
            
            <p className="text-lg text-muted-foreground mb-8">
              Mark answers, schedules, reschedules, and confirms appointments for service-based businesses — clinics, salons, lodges, or agencies. He handles every call with warmth, efficiency, and professionalism, ensuring no lead ever slips away.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Zap className="h-5 w-5 text-primary" />
                  Core Features
                </h3>
                <ul className="space-y-3">
                  {[
                    'Real-time voice conversations via phone, WhatsApp, or web',
                    'Dynamic calendar integration (Google Calendar or n8n backend)',
                    'Smart FAQ engine (services, hours, pricing)',
                    'Lead capture and CRM sync',
                    'Natural human tone with multiple language models'
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  Ideal For
                </h3>
                <p className="text-muted-foreground mb-6">
                  Businesses that rely on inbound bookings — healthcare, hospitality, recruitment, fitness, and beauty.
                </p>

                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-primary" />
                    <span className="text-muted-foreground"><strong>Setup Time:</strong> 2–3 days</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <ArrowRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground"><strong>Model:</strong> Monthly subscription + optional customization tier</span>
                  </div>
                </div>
              </div>
            </div>
          </GlowCard>
        </div>
      </section>

      {/* Clara - AI Customer Success Manager */}
      <section className="py-20 px-4 bg-gradient-to-b from-transparent to-primary/5">
        <div className="max-container">
          <GlowCard customSize className="p-8 md:p-12">
            <div className="flex items-start gap-6 mb-6">
              <div className="bg-primary/10 p-4 rounded-lg">
                <Mail className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-2">Clara — The AI Customer Success Manager</h2>
                <p className="text-xl text-primary italic">Your intelligent inbox assistant that reads, prioritizes, and responds with precision.</p>
              </div>
            </div>
            
            <p className="text-lg text-muted-foreground mb-8">
              Clara manages your email or shared inbox like a seasoned customer success manager. She reads, classifies, and drafts replies instantly — ensuring your clients always receive timely, professional responses.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Zap className="h-5 w-5 text-primary" />
                  Core Features
                </h3>
                <ul className="space-y-3">
                  {[
                    'Email & multi-channel inbox automation (Gmail, Outlook, WhatsApp, Instagram DMs)',
                    'Smart intent detection (lead, support, invoice, general inquiry)',
                    'Automated response drafting & escalation logic',
                    'Integration with CRMs, Notion, or ticketing systems',
                    'Sentiment analysis & urgency detection'
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  Ideal For
                </h3>
                <p className="text-muted-foreground mb-6">
                  Founders, agencies, or teams overloaded with client communication.
                </p>

                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-primary" />
                    <span className="text-muted-foreground"><strong>Setup Time:</strong> 4–5 days</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <ArrowRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground"><strong>Model:</strong> Monthly subscription, customizable for single or multi-inbox use</span>
                  </div>
                </div>
              </div>
            </div>
          </GlowCard>
        </div>
      </section>

      {/* Avery - AI Recruiter */}
      <section className="py-20 px-4">
        <div className="max-container">
          <GlowCard customSize className="p-8 md:p-12">
            <div className="flex items-start gap-6 mb-6">
              <div className="bg-primary/10 p-4 rounded-lg">
                <Brain className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-2">Avery — The AI Recruiter</h2>
                <p className="text-xl text-primary italic">Your intelligent hiring assistant that reads, ranks, and recommends candidates.</p>
              </div>
            </div>
            
            <p className="text-lg text-muted-foreground mb-8">
              Avery automates candidate screening and analysis. It scans CVs, extracts structured data, scores candidates using AI, and syncs results directly to your recruitment dashboard.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Zap className="h-5 w-5 text-primary" />
                  Core Features
                </h3>
                <ul className="space-y-3">
                  {[
                    'CV & resume parsing via email or upload',
                    'AI-based scoring and ranking (education, experience, skills)',
                    'Duplicate detection & candidate justification reports',
                    'Integration with Supabase or client ATS',
                    'Dashboard visualization and analytics'
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  Ideal For
                </h3>
                <p className="text-muted-foreground mb-6">
                  Recruitment agencies, HR teams, and education placement firms.
                </p>

                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-primary" />
                    <span className="text-muted-foreground"><strong>Setup Time:</strong> 1 week</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <ArrowRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground"><strong>Model:</strong> Subscription or white-label licensing option</span>
                  </div>
                </div>
              </div>
            </div>
          </GlowCard>
        </div>
      </section>

      {/* Why Choose Amalfi Systems */}
      <section className="py-20 px-4 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="max-container">
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">
            Why Businesses Choose Amalfi Systems
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              { title: 'Speed', description: 'Deploy in days, not months.' },
              { title: 'Scalability', description: 'From single-location businesses to enterprise.' },
              { title: 'Human Touch', description: 'Designed to sound and feel authentic.' },
              { title: 'Flexibility', description: 'Plug-and-play or customizable per brand.' },
              { title: 'Support', description: 'Continuous optimization and maintenance available.' },
            ].map((benefit, index) => (
              <GlowCard key={index} customSize className="p-6 text-center">
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </GlowCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="max-container">
          <div className="text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to meet your next AI team member?
            </h2>
            <Button size="lg" asChild>
              <Link to="/contact">Book a Discovery Call</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicesSystems;