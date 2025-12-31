import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { TrendingUp, Clock, Users, CheckCircle2 } from 'lucide-react';
import { GlowCard } from '@/components/ui/spotlight-card';

const CaseStudies = () => {
  const cases = [
    {
      category: "Recruitment Automation",
      title: "How a SA Recruitment Firm Cut Admin by 70%",
      client: "SA Recruitment, Johannesburg",
      challenge: "Recruitment team spending 30+ hours weekly on manual CV screening, scheduling, and follow-ups",
      solution: [
        "Implemented AI CV Scanner with explainable scoring",
        "Automated interview scheduling with calendar integration",
        "Set up candidate follow-up workflows"
      ],
      results: [
        { metric: "70%", label: "Reduction in admin time" },
        { metric: "12 hours", label: "Saved per recruiter weekly" },
        { metric: "3x", label: "Faster candidate response" },
        { metric: "100%", label: "Consistent evaluation process" }
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
      challenge: "40% of patient calls going to voicemail, leading to significant booking losses and competitor switching",
      solution: [
        "Deployed AI Voice Receptionist with 24/7 coverage",
        "Integrated with existing booking system",
        "Set up WhatsApp confirmations and reminders"
      ],
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
    },
    {
      category: "Logistics Automation",
      title: "TableView Logistics Eliminated Manual Dispatching",
      client: "TableView Logistics, Cape Town",
      challenge: "Manual dispatch coordination creating bottlenecks and delayed deliveries across 50+ daily routes",
      solution: [
        "Built custom AI dispatch automation system",
        "Integrated with existing fleet management tools",
        "Automated driver assignment and route optimization"
      ],
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
    }
  ];

  return (
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
              R180,000+ Monthly. 45+ Hours Weekly. <span className="text-gradient">Real Results.</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-10 leading-relaxed">
              Not theory. Not projections. Actual outcomes from actual businesses.
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

                  {/* Challenge, Solution, Results Grid */}
                  <div className="grid lg:grid-cols-3 gap-8 mb-12">
                    <div>
                      <h3 className="text-xl font-bold mb-4 text-foreground">Challenge</h3>
                      <p className="text-muted-foreground leading-relaxed">{caseStudy.challenge}</p>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold mb-4 text-foreground">Solution</h3>
                      <ul className="space-y-3">
                        {caseStudy.solution.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-muted-foreground">
                            <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold mb-4 text-foreground">Results</h3>
                      <div className="space-y-4">
                        {caseStudy.results.map((result, i) => (
                          <div key={i}>
                            <div className="text-2xl font-bold text-gradient">{result.metric}</div>
                            <div className="text-sm text-muted-foreground">{result.label}</div>
                          </div>
                        ))}
                      </div>
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

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-section">
        <div className="max-container">
          <GlowCard customSize className="p-12 md:p-16 text-center max-w-4xl mx-auto animate-slide-up">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gradient">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
              Book a free AI audit and discover how automation can transform your business operations
            </p>
            <Button size="lg" className="w-full sm:w-auto" asChild>
              <Link to="/contact">Book Your Free Audit</Link>
            </Button>
          </GlowCard>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CaseStudies;
