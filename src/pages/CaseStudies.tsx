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
      title: "Fleet Operator Saves R52,000/Month on Dispatch",
      client: "TableView Logistics, Cape Town",
      industry: "Logistics & Transport",
      teamSize: "32 drivers, 4 coordinators",
      situation: "Manual dispatch coordination creating bottlenecks across 85+ daily routes. Coordinators spent 9+ hours daily on phone calls, WhatsApp messages, and spreadsheet updates. After-hours emergency calls went unanswered, causing delayed pickups and customer complaints.",
      bottleneck: "No centralized system for driver assignment. Every route change required 3-4 phone calls. Exception handling consumed 60% of coordinator time. Weekend calls missed entirely.",
      solution: [
        "Built custom AI dispatch automation with real-time driver assignment",
        "Integrated with existing fleet GPS and route management tools",
        "Deployed AI voice system for 24/7 exception handling",
        "Automated WhatsApp confirmations to drivers and customers",
        "Created dashboard for real-time route visibility"
      ],
      timeline: "4 weeks to full deployment",
      results: [
        { metric: "R52k", label: "Monthly savings" },
        { metric: "85%", label: "Faster dispatch" },
        { metric: "9 hours", label: "Daily admin saved" },
        { metric: "100%", label: "After-hours coverage" }
      ],
      beforeAfter: {
        before: [
          "9+ hours daily on manual coordination",
          "3-day average to resolve exceptions",
          "35% of after-hours calls missed",
          "Customer complaints: 12/week average"
        ],
        after: [
          "2 hours daily oversight only",
          "Same-day exception resolution",
          "100% call answer rate 24/7",
          "Customer complaints: 2/week average"
        ]
      },
      testimonial: {
        quote: "The ROI was obvious within the first month. We went from chaos to control. My coordinators now focus on complex problems instead of chasing drivers for updates.",
        author: "Johan V.",
        role: "Operations Director, TableView Logistics"
      },
      icon: Clock
    },
    {
      category: "Recruitment Automation",
      title: "Agency Cuts Time-to-Hire by 65%",
      client: "SA Recruitment, Johannesburg",
      industry: "Recruitment & Staffing",
      teamSize: "8 recruiters",
      situation: "Recruitment team of 8 spending 30+ hours weekly on manual CV screening, scheduling, and follow-ups. Top candidates lost to competitors due to 3-day average response time. No consistent evaluation criteria leading to poor placement matches.",
      bottleneck: "CV screening took 3 days per role. Interview scheduling required 5-10 email exchanges per candidate. Recruiters couldn't keep up with volume—300+ applications per week.",
      solution: [
        "Implemented AI CV Scanner with customizable scoring criteria",
        "Automated interview scheduling with Google Calendar integration",
        "Set up WhatsApp candidate communication workflows",
        "Deployed Adzuna job board scraping for proactive sourcing",
        "Built recruiter dashboard with pipeline visibility"
      ],
      timeline: "3 weeks to full deployment",
      results: [
        { metric: "65%", label: "Faster time-to-hire" },
        { metric: "12 hrs", label: "Saved per recruiter/week" },
        { metric: "94%", label: "CV screening accuracy" },
        { metric: "4.2×", label: "ROI in first quarter" }
      ],
      beforeAfter: {
        before: [
          "3 days to screen CVs per role",
          "5-10 emails to schedule one interview",
          "30+ hours weekly on admin per recruiter",
          "Top candidates lost to faster competitors"
        ],
        after: [
          "Same-day CV screening",
          "One-click calendar booking",
          "8 hours weekly on admin per recruiter",
          "First response within 2 hours"
        ]
      },
      testimonial: {
        quote: "Amalfi AI completely transformed our operations. We went from losing candidates to competitors to being the fastest responders in our market. The 12 hours I save weekly now goes into client relationships.",
        author: "Salah Elbaba",
        role: "Owner, SA Recruitment"
      },
      icon: Users
    },
    {
      category: "AI Voice Receptionist",
      title: "Medical Practice Recovers R45,000 in 3 Weeks",
      client: "Cape Health Clinic, Cape Town",
      industry: "Healthcare",
      teamSize: "3 reception staff, 4 practitioners",
      situation: "40% of patient calls going to voicemail during busy periods and after hours. Patients booking with competitors. Reception overwhelmed—handling calls, check-ins, and admin simultaneously. 25% no-show rate costing R30,000+ monthly.",
      bottleneck: "Peak hours (8-10am, 4-6pm) created call overflow. After-hours calls completely unhandled. No automated confirmations or reminders. Staff burned out from constant phone interruptions.",
      solution: [
        "Deployed AI Voice Receptionist with 24/7 coverage",
        "Integrated with existing HealthBridge booking system",
        "Set up WhatsApp appointment confirmations and reminders",
        "Implemented smart FAQ handling for common questions",
        "Created escalation protocols for urgent medical queries"
      ],
      timeline: "3 days to live",
      results: [
        { metric: "R45k", label: "Recovered in 3 weeks" },
        { metric: "100%", label: "Call answer rate" },
        { metric: "60%", label: "Fewer no-shows" },
        { metric: "95%", label: "Patient satisfaction" }
      ],
      beforeAfter: {
        before: [
          "40% of calls to voicemail",
          "25% appointment no-show rate",
          "Zero after-hours booking capability",
          "Reception staff burned out"
        ],
        after: [
          "100% call answer rate",
          "10% no-show rate",
          "24/7 booking available",
          "Staff focused on in-person care"
        ]
      },
      testimonial: {
        quote: "We recovered R45,000 in the first three weeks just from calls we would have missed. The AI handles bookings seamlessly—patients often don't realize they're not speaking to a person.",
        author: "Dr. Sarah Chen",
        role: "Director, Cape Health Clinic"
      },
      icon: TrendingUp
    },
    {
      category: "Professional Services Automation",
      title: "Accounting Firm Saves 18 Hours Weekly on Admin",
      client: "Meridian Accounting, Pretoria",
      industry: "Professional Services",
      teamSize: "6 accountants, 2 admin staff",
      situation: "Small accounting practice drowning in email triage, document requests, and appointment scheduling. Partners spending 3+ hours daily on non-billable admin. Client response times averaging 48 hours during busy periods.",
      bottleneck: "Email inbox unmanageable—200+ emails daily. Document collection for tax submissions required 4-5 follow-ups per client. Scheduling consumed 1+ hour daily.",
      solution: [
        "Deployed AI email triage with smart categorization",
        "Automated document request and follow-up sequences",
        "Integrated appointment scheduling with Calendly",
        "Set up client portal with automated status updates",
        "Created workflow for recurring compliance reminders"
      ],
      timeline: "2 weeks to full deployment",
      results: [
        { metric: "18 hrs", label: "Weekly admin saved" },
        { metric: "4 hours", label: "Average response time" },
        { metric: "80%", label: "Fewer follow-up emails" },
        { metric: "R28k", label: "Monthly capacity unlocked" }
      ],
      beforeAfter: {
        before: [
          "48-hour average email response",
          "4-5 follow-ups per document collection",
          "3+ hours daily on scheduling",
          "Missed compliance deadlines"
        ],
        after: [
          "4-hour average response",
          "1 automated follow-up sequence",
          "30 minutes daily oversight",
          "Zero missed deadlines"
        ]
      },
      testimonial: {
        quote: "I got 18 hours of my week back. That's 18 hours I now spend on advisory work that actually bills. The system paid for itself in the first month.",
        author: "Zanele M.",
        role: "Partner, Meridian Accounting"
      },
      icon: CheckCircle2
    },
    {
      category: "Logistics + Voice",
      title: "Courier Company Handles 500% More Inquiries",
      client: "Swift Couriers, Durban",
      industry: "Logistics & Courier",
      teamSize: "45 drivers, 6 customer service",
      situation: "Customer service team couldn't keep up with tracking inquiries—500+ daily calls during peak periods. Hold times averaging 8 minutes. Customers switching to competitors with better service.",
      bottleneck: "80% of calls were simple 'Where is my package?' queries. No self-service tracking option. Staff answering same questions repeatedly. Peak periods created 30+ minute hold times.",
      solution: [
        "Deployed AI Voice Receptionist for tracking inquiries",
        "Integrated with internal tracking system API",
        "Automated WhatsApp tracking updates",
        "Created escalation path for complex issues",
        "Set up proactive delay notifications"
      ],
      timeline: "2 weeks to full deployment",
      results: [
        { metric: "500%", label: "More inquiries handled" },
        { metric: "< 30 sec", label: "Average hold time" },
        { metric: "R35k", label: "Monthly CS savings" },
        { metric: "85%", label: "First-call resolution" }
      ],
      beforeAfter: {
        before: [
          "8-minute average hold time",
          "500 daily calls overwhelming 6 staff",
          "Customer complaints: 25/day",
          "Staff overtime: 15 hours/week"
        ],
        after: [
          "30-second average hold time",
          "2,500+ inquiries handled automatically",
          "Customer complaints: 5/day",
          "Zero CS overtime required"
        ]
      },
      testimonial: {
        quote: "We went from drowning in calls to handling 5x the volume with the same team. Our customer satisfaction scores jumped 40 points in the first month.",
        author: "Thabo N.",
        role: "Customer Experience Manager, Swift Couriers"
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

                    {/* Industry & Team */}
                    <div className="flex flex-wrap gap-4 mb-8 text-sm">
                      <span className="px-3 py-1 bg-muted rounded-full text-muted-foreground">
                        {caseStudy.industry}
                      </span>
                      <span className="px-3 py-1 bg-muted rounded-full text-muted-foreground">
                        {caseStudy.teamSize}
                      </span>
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

                    {/* Before/After Comparison */}
                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                      <div className="bg-destructive/5 border border-destructive/20 rounded-lg p-6">
                        <h4 className="font-bold text-foreground mb-4 flex items-center gap-2">
                          <span className="w-2 h-2 bg-destructive rounded-full"></span>
                          Before
                        </h4>
                        <ul className="space-y-2">
                          {caseStudy.beforeAfter.before.map((item, i) => (
                            <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                              <span className="text-destructive">✗</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
                        <h4 className="font-bold text-foreground mb-4 flex items-center gap-2">
                          <span className="w-2 h-2 bg-primary rounded-full"></span>
                          After
                        </h4>
                        <ul className="space-y-2">
                          {caseStudy.beforeAfter.after.map((item, i) => (
                            <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                              <span className="text-primary">✓</span>
                              {item}
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
