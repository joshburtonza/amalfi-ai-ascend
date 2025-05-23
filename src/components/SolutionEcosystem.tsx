
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const SolutionEcosystem = () => {
  const solutions = [
    {
      badge: 'Enterprise',
      title: 'Complete Automation Platform',
      description: 'Transform your organization with end-to-end AI-powered automation. Our enterprise solution integrates seamlessly with your existing infrastructure, providing secure, scalable automation that grows with your business.',
      features: [
        'Custom AI model deployment',
        'Enterprise-grade security',
        'Dedicated support team',
        'Advanced analytics dashboard'
      ],
      cta: {
        text: 'Schedule a Demo',
        href: '#contact'
      },
      imagePosition: 'right'
    },
    {
      badge: 'Integration',
      title: 'API & Developer Tools',
      description: 'Integrate our AI capabilities into your products and services with our comprehensive API and developer toolkit.',
      features: [],
      cta: {
        text: 'View Documentation',
        href: '#'
      },
      imagePosition: 'none'
    },
    {
      badge: 'Business',
      title: 'Industry-Specific Solutions',
      description: 'Tailored AI solutions for healthcare, finance, e-commerce, and more, designed to address industry-specific challenges.',
      features: [],
      cta: {
        text: 'Explore Industries',
        href: '#'
      },
      imagePosition: 'none'
    }
  ];

  return (
    <section id="solutions" className="py-24 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-amalfi-black via-amalfi-black to-amalfi-teal/20 z-0"></div>
      
      {/* Glow Effects */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-amalfi-teal/10 rounded-full blur-3xl animate-glow-pulse"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-amalfi-emerald/10 rounded-full blur-3xl animate-glow-pulse" style={{ animationDelay: '1s' }}></div>
      
      <div className="max-container relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Solution</span> Ecosystem
          </h2>
          <p className="text-amalfi-white/80 max-w-3xl mx-auto">
            Our comprehensive suite of AI tools and integrations powers businesses across industries.
          </p>
        </div>
        
        <div className="space-y-12">
          {/* Main Enterprise Solution Card */}
          <div className="glassmorphic rounded-3xl overflow-hidden border border-amalfi-emerald/10 shadow-glow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="p-8 md:p-12">
                <span className="inline-block px-4 py-1 rounded-full text-xs font-semibold bg-amalfi-emerald/20 text-amalfi-emerald mb-4">
                  {solutions[0].badge}
                </span>
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-amalfi-white">
                  {solutions[0].title}
                </h3>
                <p className="text-amalfi-white/80 mb-6">
                  {solutions[0].description}
                </p>
                
                <ul className="space-y-3 mb-8">
                  {solutions[0].features.map((feature, index) => (
                    <li key={index} className="flex items-center text-amalfi-white/90">
                      <span className="w-1.5 h-1.5 rounded-full bg-amalfi-emerald mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className="btn-gradient text-amalfi-white inline-flex items-center gap-2 shadow-glow-sm hover:shadow-glow-md transition-all"
                  asChild
                >
                  <a href={solutions[0].cta.href}>
                    {solutions[0].cta.text}
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3.33337 8H12.6667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M8 3.33331L12.6667 7.99998L8 12.6666" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                </Button>
              </div>
              <div className="bg-amalfi-black/30 flex items-center justify-center p-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-amalfi-black to-amalfi-teal/30 opacity-80"></div>
                <img 
                  src="/lovable-uploads/c992728c-8637-4a6b-a323-db67c759b05e.png" 
                  alt="Amalfi AI Automation Ecosystem" 
                  className="relative z-10 max-w-full h-auto rounded-xl shadow-glow-sm"
                />
              </div>
            </div>
          </div>
          
          {/* Secondary Solution Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {solutions.slice(1).map((solution, index) => (
              <Card 
                key={index} 
                className="glassmorphic border border-amalfi-emerald/10 shadow-glow-sm hover:shadow-glow-md transition-all bg-transparent"
              >
                <CardContent className="p-8">
                  <span className="inline-block px-4 py-1 rounded-full text-xs font-semibold bg-amalfi-emerald/20 text-amalfi-emerald mb-4">
                    {solution.badge}
                  </span>
                  <h3 className="text-xl font-bold mb-3 text-amalfi-white">
                    {solution.title}
                  </h3>
                  <p className="text-amalfi-white/80 mb-6">
                    {solution.description}
                  </p>
                  
                  <Button 
                    variant="outline" 
                    className="border border-amalfi-emerald/30 hover:border-amalfi-emerald/80 text-amalfi-white bg-transparent hover:bg-amalfi-emerald/10 transition-all"
                    asChild
                  >
                    <a href={solution.cta.href}>
                      {solution.cta.text}
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionEcosystem;
