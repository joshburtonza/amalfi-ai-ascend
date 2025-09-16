
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
        'Enterprise-grade security & compliance',
        'Dedicated support & consultation',
        'Advanced analytics & insights',
        'Multi-environment deployment',
        'White-label solutions available'
      ],
      cta: {
        text: 'Schedule Enterprise Demo',
        href: '#contact'
      },
      highlight: true
    },
    {
      badge: 'Integration',
      title: 'API & Developer Tools',
      description: 'Integrate our AI capabilities into your products and services with our comprehensive API suite and developer toolkit.',
      features: [
        'RESTful API access',
        'SDKs for major languages',
        'Webhook integrations',
        'Real-time processing'
      ],
      cta: {
        text: 'View Documentation',
        href: 'https://soarai.app.n8n.cloud/form/889b9500-9b97-40fd-a200-193ace0f0cca'
      }
    },
    {
      badge: 'Industry Focus',
      title: 'Sector-Specific Solutions',
      description: 'Tailored AI solutions for healthcare, finance, e-commerce, logistics, and more, designed to address industry-specific challenges.',
      features: [
        'Healthcare automation',
        'Financial compliance tools',
        'E-commerce optimization',
        'Supply chain intelligence'
      ],
      cta: {
        text: 'Explore Industries',
        href: '#contact'
      }
    }
  ];

  return (
    <section id="solutions" className="py-20 md:py-32 relative overflow-hidden bg-gradient-section">
      {/* Floating background elements */}
      <div className="absolute top-20 right-10 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-10 left-20 w-64 h-64 bg-primary-glow/5 rounded-full blur-2xl animate-float" style={{ animationDelay: '4s' }}></div>
      
      <div className="max-container relative z-10 px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <div className="animate-slide-up">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary text-sm font-semibold rounded-full border border-primary/20 mb-4">
              Solution Portfolio
            </span>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
              <span className="text-gradient">Complete</span> AI Ecosystem
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              From enterprise automation to developer APIs, our comprehensive suite powers innovation across industries
            </p>
          </div>
        </div>
        
        {/* Main Enterprise Solution Card */}
        <div className="mb-16">
          <div className="glassmorphic-strong rounded-3xl overflow-hidden hover-lift hover-glow">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="p-8 md:p-12 lg:p-16">
                <div className="animate-slide-right">
                  <span className="inline-block px-4 py-2 bg-primary/20 text-primary text-sm font-semibold rounded-full border border-primary/30 mb-4">
                    {solutions[0].badge}
                  </span>
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
                    {solutions[0].title}
                  </h3>
                  <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                    {solutions[0].description}
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
                    {solutions[0].features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-3 text-muted-foreground">
                        <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0"></div>
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button 
                    variant="gradient"
                    size="lg"
                    className="group"
                    asChild
                  >
                    <a href={solutions[0].cta.href}>
                      <span className="flex items-center gap-2">
                        {solutions[0].cta.text}
                        <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                        </svg>
                      </span>
                    </a>
                  </Button>
                </div>
              </div>
              
              <div className="relative bg-card/50 flex items-center justify-center p-8 lg:p-12 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary-glow/5"></div>
                <div className="relative z-10 animate-float">
                  <img 
                    src="/lovable-uploads/automation-workflow-ecosystem.png" 
                    alt="AI Automation Platform Dashboard" 
                    className="max-w-full h-auto rounded-xl shadow-glow-lg hover:shadow-glow-xl transition-all duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Secondary Solution Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {solutions.slice(1).map((solution, index) => (
            <div
              key={index}
              className="glassmorphic-strong rounded-3xl p-8 md:p-10 hover-lift hover-glow animate-slide-up"
              style={{ animationDelay: `${(index + 1) * 200}ms` }}
            >
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary text-sm font-semibold rounded-full border border-primary/20 mb-6">
                {solution.badge}
              </span>
              
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
                {solution.title}
              </h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {solution.description}
              </p>
              
              {solution.features.length > 0 && (
                <ul className="space-y-2 mb-8">
                  {solution.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              )}
              
              <Button 
                variant="glass"
                size="lg" 
                className="w-full group border-primary/30 hover:border-primary/60"
                asChild
              >
                <a href={solution.cta.href} target={solution.cta.href.startsWith('http') ? '_blank' : '_self'} rel={solution.cta.href.startsWith('http') ? 'noopener noreferrer' : undefined}>
                  <span className="flex items-center justify-center gap-2">
                    {solution.cta.text}
                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                    </svg>
                  </span>
                </a>
              </Button>
            </div>
          ))}
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center mt-16 md:mt-20">
          <div className="animate-slide-up" style={{ animationDelay: '0.8s' }}>
            <p className="text-muted-foreground mb-6 text-lg">
              Ready to transform your business with AI?
            </p>
            <Button 
              variant="premium"
              size="xl"
              className="group"
              asChild
            >
              <a href="#contact">
                <span className="flex items-center gap-2">
                  Start Your AI Journey
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

export default SolutionEcosystem;
