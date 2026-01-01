import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { TrendingUp, Clock, Users, CheckCircle2, ArrowRight } from 'lucide-react';
import { GlowCard } from '@/components/ui/spotlight-card';
import CTABlock from '@/components/CTABlock';

const CaseStudies = () => {
  const cases = [
    {
      category: "Logistics Automation",
      title: "Logistics Company Eliminated Manual Dispatching",
      client: "TableView Logistics, Cape Town",
      situation: "Manual dispatch coordination creating bottlenecks and delayed deliveries across 50+ daily routes. Coordinators spending 8+ hours daily on phone calls and WhatsApp messages.",
      bottleneck: "No centralized system for driver assignment. Every exception required manual intervention. After-hours calls went unanswered.",
      solution: [
        "Built custom AI dispatch automation system",
        "Integrated with existing fleet management tools",
        "Automated driver assignment and route optimization",
        "Deployed AI voice for after-hours exception handling"
      ],
      timeline: "4 weeks to full deployment",
      results: [
        { metric: "85%", label: "Faster dispatch times" },
        { metric: "8 hours", label: "Daily admin time saved" },
        { metric: "30%", label: "Improvement in on-time delivery" },
        { metric: "R25k", label: "Monthly operational savings" }
      ],
      testimonial: {
        quote: "Switching to Amalfi AI was the smartest investment we made this year. The team understood our unique logistics challenges and built a custom solution that eliminated our manual admin headaches completely.",
        author: "Johan V.",
        role: "Director, TableView Logistics"
      },
      icon: Clock
    },
    {
      category: "Recruitment Automation",
      title: "Recruitment Firm Cut Admin by 70%",
      client: "SA Recruitment, Johannesburg",
      situation: "Recruitment team of 8 spending 30+ hours weekly on manual CV screening, scheduling, and follow-ups. Top candidates lost to competitors due to slow response times.",
      bottleneck: "CV screening took 3 days per role. Interview scheduling required 5-10 email exchanges per candidate. No consistent evaluation criteria.",
      solution: [
        "Implemented AI CV Scanner with explainable scoring",
        "Automated interview scheduling with calendar integration",
        "Set up WhatsApp candidate follow-up workflows",
        "Deployed Adzuna scraping for proactive sourcing"
      ],
      timeline: "3 weeks to full deployment",
      results: [
        { metric: "70%", label: "Reduction in admin time" },
        { metric: "12 hours", label: "Saved per recruiter weekly" },
        { metric: "3×", label: "Faster candidate response" },
        { metric: "94%", label: "Screening accuracy" }
      ],
      testimonial: {
        quote: "Amalfi AI completely transformed our digital operations. Their AI-driven workflows helped us save 15+ hours every week, and the onboarding was seamless.",
        author: "Salah Elbaba",
        role: "Owner, SA Recruitment"
      },
      icon: Users
    },
    {
      category: "AI Voice Receptionist",
      title: "Medical Clinic Recovered R45,000 in 3 Weeks",
      client: "Cape Health Clinic, Cape Town",
      situation: "40% of patient calls going to voicemail during busy periods and after hours. Significant booking losses and patients switching to competitors.",
      bottleneck: "Reception staff overwhelmed during peak hours. After-hours calls completely unhandled. No automated confirmations leading to 25% no-show rate.",
      solution: [
        "Deployed AI Voice Receptionist with 24/7 coverage",
        "Integrated with existing booking system",
        "Set up WhatsApp confirmations and reminders",
        "Implemented smart FAQ handling for common questions"
      ],
      timeline: "3 days to live",
      results: [
        { metric: "R45k", label: "Revenue recovered in 3 weeks" },
        { metric: "100%", label: "Call answer rate" },
        { metric: "95%", label: "Patient satisfaction" },
        { metric: "60%", label: "Reduction in no-shows" }
      ],
      testimonial: {
        quote: "The AI receptionist transformed our patient experience. We went from losing patients to competitors to having a 100% answer rate and recovering thousands in revenue.",
        author: "Dr. Sarah Chen",
        role: "Director, Cape Health Clinic"
      },
      icon: TrendingUp
    }
  ];

  return (
    <>
      <Helmet>
        <title>Case Studies - Amalfi AI | Real Results from Real Businesses</title>
        <meta name="description" content="See how South African businesses save 15+ hours weekly and recover R40,000+ monthly with Amalfi AI automation. Logistics, recruitment, and healthcare case studies." />
        <link rel="canonical" href="https://www.amalfiai.com/case-studies" />
      </Helmet>

      <div className="bg-background min-h-screen">
        <Navbar />

        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 relative overflow-hidden">
          <div className="absolute top-20 left-10 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-10 right-20 w-64 h-64 bg-primary/5 rounded-full blur-2xl animate-float" style={{ animationDelay: '3s' }}></div>
          
          <div className="max-container relative z-10">
            <div className="max-w-4xl mx-auto text-center animate-slide-up">
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary text-sm font-semibold rounded-full border border-primary/20 mb-6">
                Proof
              </span>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-foreground">
                Real Results. <span className="text-gradient">Real Businesses.</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-6 leading-relaxed">
                R180,000+ monthly savings. 45+ hours reclaimed weekly. All within 90 days.
              </p>
              <p className="text-lg text-muted-foreground">
                Not projections. Actual outcomes from actual South African businesses.
              </p>
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-20 px-4">
          <div className="max-container">
            <div className="space-y-20">
              {cases.map((caseStudy, index) => (
                <div
                  key={index}
                  className="animate-slide-up"
                >
                  <GlowCard customSize className="p-8 md:p-12 hover-lift">
                    {/* Category Badge */}
                    <div className="inline-block px-4 py-2 bg-primary/10 text-primary text-sm font-semibold rounded-full border border-primary/20 mb-6">
                      {caseStudy.category}
                    </div>

                    {/* Title & Client */}
                    <div className="flex items-start gap-6 mb-8">
                      <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <caseStudy.icon className="w-8 h-8 text-primary" />
                      </div>
                      <div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-3 text-foreground">
                          {caseStudy.title}
                        </h2>
                        <p className="text-lg text-muted-foreground">{caseStudy.client}</p>
                      </div>
                    </div>

                    {/* Situation, Bottleneck, Solution Grid */}
                    <div className="grid lg:grid-cols-3 gap-8 mb-8">
                      <div>
                        <h3 className="text-xl font-bold mb-4 text-foreground">The Situation</h3>
                        <p className="text-muted-foreground leading-relaxed">{caseStudy.situation}</p>
                      </div>

                      <div>
                        <h3 className="text-xl font-bold mb-4 text-foreground">The Bottleneck</h3>
                        <p className="text-muted-foreground leading-relaxed">{caseStudy.bottleneck}</p>
                      </div>

                      <div>
                        <h3 className="text-xl font-bold mb-4 text-foreground">What We Built</h3>
                        <ul className="space-y-2">
                          {caseStudy.solution.map((item, i) => (
                            <li key={i} className="flex items-start gap-2 text-muted-foreground">
                              <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Timeline */}
                    <div className="mb-8 p-4 bg-primary/5 rounded-lg inline-block">
                      <span className="text-sm text-muted-foreground"><strong>Time to live:</strong> {caseStudy.timeline}</span>
                    </div>

                    {/* Results */}
                    <div className="mb-8">
                      <h3 className="text-xl font-bold mb-6 text-foreground">Results</h3>
                      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {caseStudy.results.map((result, i) => (
                          <div key={i} className="bg-primary/10 p-4 rounded-lg text-center">
                            <div className="text-3xl font-bold text-gradient mb-1">{result.metric}</div>
                            <div className="text-sm text-muted-foreground">{result.label}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Testimonial */}
                    <div className="border-t border-border pt-8">
                      <div className="bg-muted/30 rounded-2xl p-6">
                        <p className="text-lg text-muted-foreground italic mb-4">
                          &quot;{caseStudy.testimonial.quote}&quot;
                        </p>
                        <div>
                          <p className="font-bold text-foreground">{caseStudy.testimonial.author}</p>
                          <p className="text-sm text-muted-foreground">{caseStudy.testimonial.role}</p>
                        </div>
                      </div>
                    </div>
                  </GlowCard>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Important Note */}
        <section className="py-12 px-4">
          <div className="max-container">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-muted-foreground italic">
                Results vary by business. These case studies represent typical outcomes but your specific results depend on your workflows, volume, and implementation.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <CTABlock 
          headline="Ready to Write Your Success Story?"
          subtext="Apply for a Diagnosis Call. We'll confirm fit by email before booking."
        />

        <Footer />
      </div>
    </>
  );
};

export default CaseStudies;
