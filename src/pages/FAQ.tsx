import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { GlowCard } from '@/components/ui/spotlight-card';
import CTABlock from '@/components/CTABlock';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqSections = [
    {
      title: "Getting Started",
      questions: [
        {
          q: "What is a Diagnosis Session?",
          a: "A 60-90 minute operational deep-dive where we map your workflows, identify bottlenecks, and estimate the ROI of automating them. You walk away with a bottleneck map and recommended roadmap—whether you work with us or not. Investment: R2,500 once-off."
        },
        {
          q: "Why do I need to apply before booking?",
          a: "We confirm fit by email before booking to respect your time. Not every business is ready for automation (insufficient volume, unwilling to standardize processes, etc.). A quick review ensures we only schedule calls where there's genuine potential."
        },
        {
          q: "What happens after the Diagnosis Session?",
          a: "You receive a written summary with bottleneck mapping and ROI projections. If there's a fit, we'll propose either a System Deployment (2-3 weeks, productized solution) or a Solution Partnership (bespoke, ongoing). If we can't see clear ROI, we'll tell you."
        }
      ]
    },
    {
      title: "Pricing & Investment",
      questions: [
        {
          q: "Why don't you show exact pricing upfront?",
          a: "Pricing depends on call volume, integrations, and workflow complexity. We quote after understanding your specific situation in the Diagnosis Session. That said, typical ranges: System Deployment is R10,000-R25,000 setup + R2,000-R6,000/month. Solution Partnership is from R20,000/month."
        },
        {
          q: "What's included in a System Deployment?",
          a: "Setup, configuration, integration with your existing tools, staff training, and ongoing monitoring. Typical timeline: 2-3 weeks to live. Examples include AI Voice Receptionist, Recruitment Automation, and Inbox/Admin Automation."
        },
        {
          q: "What's included in a Solution Partnership?",
          a: "Custom architecture, full implementation, ongoing optimization, and monthly strategy reviews. Minimum 6-month commitment. Best for businesses with multiple workflows or continuous improvement needs. Investment: from R20,000/month."
        },
        {
          q: "Is there a contract?",
          a: "System Deployments are month-to-month after the setup phase. Solution Partnerships have a 6-month minimum commitment, then month-to-month."
        }
      ]
    },
    {
      title: "Timelines & Rollout",
      questions: [
        {
          q: "How fast can you deploy?",
          a: "System Deployments typically go live in 2-3 weeks. Solution Partnerships vary by scope—usually 4-8 weeks for the initial implementation, then ongoing optimization."
        },
        {
          q: "What do I need to provide?",
          a: "Access to your existing systems (CRM, calendar, booking system, ATS, etc.), a point of contact for questions, and willingness to participate in workflow design. We handle the rest."
        }
      ]
    },
    {
      title: "Integrations & Tooling",
      questions: [
        {
          q: "Do you integrate with my existing tools?",
          a: "Yes. We work with whatever you're already using—Google Calendar, Outlook, WhatsApp, most CRMs, booking systems, and ATS platforms. If there's an API, we can connect it."
        },
        {
          q: "What if I don't have a CRM or booking system?",
          a: "We can recommend and help set up appropriate tools as part of the engagement. Many clients use simple, affordable solutions that work perfectly with our automation."
        }
      ]
    },
    {
      title: "Results & Measurement",
      questions: [
        {
          q: "What results should I expect?",
          a: "Results vary by business, but typical outcomes include: 15+ hours saved weekly per team member, R40,000+ monthly revenue recovered from missed calls/slow follow-ups, and 4-6× ROI within the first quarter. We set specific success metrics during Diagnosis."
        },
        {
          q: "How do you measure success?",
          a: "We establish baseline metrics before deployment (current call answer rate, response times, admin hours, etc.) and track against them monthly. You get a dashboard showing actual impact."
        }
      ]
    },
    {
      title: "Guarantee",
      id: "guarantee",
      questions: [
        {
          q: "How does the 90-Day ROI Guarantee work?",
          a: "If, after 90 days from go-live, you've seen no measurable progress against the success metrics we agreed upfront, you can request a refund of the monthly service fees paid during that 90-day period."
        },
        {
          q: "What counts as 'measurable progress'?",
          a: "Progress is measured against a baseline established before deployment. It includes at least one of: revenue recovered (missed calls, bookings, response speed), time saved (admin hours reduced), or conversion/response speed improvements."
        },
        {
          q: "What are the qualification conditions?",
          a: "To qualify: tracking must be enabled, you must provide required access, your team must use the workflow as designed, and you must attend scheduled check-ins. We're partners in this—we need your participation."
        },
        {
          q: "What's excluded from the guarantee?",
          a: "Refunds don't apply if progress was blocked by: missing access or approvals from your side, significant scope changes after deployment, insufficient lead/call volume to measure impact, or non-adoption by your team. Setup fees are also non-refundable—only monthly service fees are covered."
        }
      ]
    },
    {
      title: "Data Privacy & Security",
      questions: [
        {
          q: "How do you handle my data?",
          a: "We follow POPIA (South Africa) and GDPR-aligned practices. Data is encrypted, access is limited to essential personnel, and we never sell or share your information with third parties. See our Privacy Policy for full details."
        },
        {
          q: "Do you record calls?",
          a: "Only if you choose to enable call recording for training or compliance purposes. All recordings are stored securely and you control retention policies."
        }
      ]
    }
  ];

  // Generate FAQ schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqSections.flatMap(section => 
      section.questions.map(q => ({
        "@type": "Question",
        "name": q.q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": q.a
        }
      }))
    )
  };

  return (
    <>
      <Helmet>
        <title>Frequently Asked Questions - Amalfi AI</title>
        <meta name="description" content="Common questions about Amalfi AI's diagnosis sessions, pricing, timelines, integrations, and our 90-day ROI guarantee." />
        <link rel="canonical" href="https://www.amalfiai.com/faq" />
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        
        <main className="pt-32 pb-20">
          <div className="max-container px-4 sm:px-6">
            {/* Header */}
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Frequently Asked Questions
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                Everything you need to know about working with Amalfi AI.
              </p>
            </div>

            {/* FAQ Sections */}
            <div className="max-w-3xl mx-auto space-y-12">
              {faqSections.map((section, sectionIndex) => (
                <div key={sectionIndex} id={section.id}>
                  <h2 className="text-2xl font-bold mb-6">{section.title}</h2>
                  <GlowCard customSize className="p-6">
                    <Accordion type="single" collapsible className="w-full">
                      {section.questions.map((faq, faqIndex) => (
                        <AccordionItem key={faqIndex} value={`${sectionIndex}-${faqIndex}`}>
                          <AccordionTrigger className="text-left hover:no-underline">
                            <span className="font-semibold">{faq.q}</span>
                          </AccordionTrigger>
                          <AccordionContent className="text-muted-foreground leading-relaxed">
                            {faq.a}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </GlowCard>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-20">
              <CTABlock 
                headline="Still Have Questions?"
                subtext="Apply for a Diagnosis Call and we'll answer everything specific to your situation."
              />
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default FAQ;
