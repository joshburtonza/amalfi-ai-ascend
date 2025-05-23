import React from 'react';
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
      quote: "Amalfi Ai has completely transformed our business automation. Their AI-driven workflows helped us save hours every week, and the onboarding was seamless. We now deliver a better service to our clients, every day.",
      name: "Noluthando M.",
      title: "Owner, UrbanEdge Digital Solutions",
      location: "Johannesburg"
    },
    {
      quote: "Switching to Amalfi Ai was the smartest move we made this year. The team understood our unique needs as a Cape Town SME and built a custom solution that just works—no more manual admin headaches!",
      name: "Johan V.",
      title: "Director, TableView Logistics",
      location: "Cape Town"
    },
    {
      quote: "We needed automation that could scale with our growing business. Amalfi Ai delivered exactly that, with a beautiful, easy-to-use platform and local support we can trust.",
      name: "Sibongile P.",
      title: "Co-Founder, Pulse Marketing SA",
      location: "Durban"
    }
  ];

  return (
    <section id="success" className="py-24 relative overflow-hidden">
      <div className="max-container">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">Client Success Stories</h2>
          <p className="text-amalfi-white/80 max-w-2xl mx-auto">
            See how businesses across South Africa are transforming their operations with our AI automation solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              quote={testimonial.quote}
              name={testimonial.name}
              title={testimonial.title}
              location={testimonial.location}
              className="animate-fade-in opacity-0"
              style={{ animationDelay: `${index * 0.2}s` }}
            />
          ))}
        </div>
      </div>
      
      {/* Background Accents */}
      <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-amalfi-emerald/10 rounded-full blur-3xl opacity-30 animate-glow-pulse"></div>
      <div className="absolute top-32 -right-32 w-96 h-96 bg-amalfi-teal/10 rounded-full blur-3xl opacity-20 animate-glow-pulse" style={{ animationDelay: '2s' }}></div>
    </section>
  );
};

export default ClientSuccess;
