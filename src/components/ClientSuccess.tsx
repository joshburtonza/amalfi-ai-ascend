import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface TestimonialProps {
  quote: string;
  name: string;
  title: string;
  location: string;
  className?: string;
  style?: React.CSSProperties; // Added style prop to the interface
}

const Testimonial: React.FC<TestimonialProps> = ({
  quote,
  name,
  title,
  location,
  className,
  style, // Added style prop to the destructuring
}) => {
  return (
    <Card className={cn("glassmorphic border-amalfi-emerald/30 hover:border-amalfi-emerald/50 transition-all duration-300 hover:shadow-glow-sm h-full", className)} style={style}>
      <CardContent className="p-8 flex flex-col h-full">
        <div className="mb-6 text-amalfi-emerald">
          <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-75">
            <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
            <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path>
          </svg>
        </div>
        <p className="text-amalfi-white/90 mb-6 flex-grow">{quote}</p>
        <div className="mt-auto">
          <p className="font-semibold text-gradient">{name}</p>
          <p className="text-sm text-amalfi-white/70">{title}, {location}</p>
        </div>
      </CardContent>
    </Card>
  );
};

const ClientSuccess = () => {
  const testimonials = [
    {
      quote: "Amalfi AI completely transformed our digital operations. Their AI-driven workflows helped us save 15+ hours every week, and the onboarding was seamless. We now deliver exceptional service to our clients consistently.",
      name: "Noluthando M.",
      title: "Owner, UrbanEdge Digital Solutions",
      location: "Johannesburg",
      rating: 5,
      company: "Digital Agency"
    },
    {
      quote: "Switching to Amalfi AI was the smartest investment we made this year. The team understood our unique logistics challenges and built a custom solution that eliminated our manual admin headaches completely.",
      name: "Johan V.",
      title: "Director, TableView Logistics",
      location: "Cape Town",
      rating: 5,
      company: "Logistics"
    },
    {
      quote: "We needed automation that could scale with our growing marketing business. Amalfi AI delivered exactly that—a beautiful, intuitive platform with local support we can trust.",
      name: "Sibongile P.",
      title: "Co-Founder, Pulse Marketing SA",
      location: "Durban",
      rating: 5,
      company: "Marketing"
    }
  ];

  return (
    <section id="success" className="py-20 md:py-32 relative overflow-hidden bg-gradient-section">
      {/* Floating background elements */}
      <div className="absolute top-20 left-10 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-10 right-20 w-64 h-64 bg-primary-glow/5 rounded-full blur-2xl animate-float" style={{ animationDelay: '3s' }}></div>
      
      <div className="max-container relative z-10 px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <div className="animate-slide-up">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary text-sm font-semibold rounded-full border border-primary/20 mb-4">
              Success Stories
            </span>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
              <span className="text-gradient">Client</span> Success Stories
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              See how businesses across South Africa are transforming their operations with our AI automation solutions
            </p>
          </div>
        </div>
        
        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group glassmorphic-strong rounded-3xl p-8 hover-lift hover-glow animate-slide-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Company badge */}
              <div className="flex items-center justify-between mb-6">
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full border border-primary/20">
                  {testimonial.company}
                </span>
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-primary fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                    </svg>
                  ))}
                </div>
              </div>
              
              {/* Quote */}
              <div className="mb-6 text-primary/60">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"/>
                  <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"/>
                </svg>
              </div>
              
              <p className="text-muted-foreground mb-8 leading-relaxed italic">
                "{testimonial.quote}"
              </p>
              
              {/* Author */}
              <div className="border-t border-border pt-6">
                <p className="font-bold text-foreground mb-1">{testimonial.name}</p>
                <p className="text-sm text-primary font-semibold mb-1">{testimonial.title}</p>
                <p className="text-xs text-muted-foreground">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center mt-16 md:mt-20">
          <div className="animate-slide-up" style={{ animationDelay: '0.8s' }}>
            <p className="text-muted-foreground mb-6 text-lg">
              Ready to join our success stories?
            </p>
            <Button 
              variant="gradient"
              size="xl"
              className="group"
              asChild
            >
              <a href="#contact">
                <span className="flex items-center gap-2">
                  Start Your Success Story
                  <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                  </svg>
                </span>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientSuccess;
