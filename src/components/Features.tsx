
import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';

const Features = () => {
  const features = [
    {
      title: "Automate Workflows Effortlessly",
      description: "Transform repetitive tasks into automated processes with our intuitive AI solutions, freeing your team to focus on strategic growth and innovation.",
      badge: "Efficiency",
      color: "from-blue-500 to-cyan-500",
      icon: (
        <svg className="w-10 h-10 md:w-12 md:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
        </svg>
      ),
      features: ["Smart Process Automation", "Workflow Optimization", "Task Prioritization", "Real-time Monitoring"]
    },
    {
      title: "Secure, Scalable AI",
      description: "Enterprise-grade security with solutions that grow alongside your business, ensuring long-term value, compliance, and adaptability at scale.",
      badge: "Security",
      color: "from-green-500 to-emerald-500",
      icon: (
        <svg className="w-10 h-10 md:w-12 md:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
        </svg>
      ),
      features: ["End-to-End Encryption", "SOC 2 Type II Compliance", "Auto-scaling Infrastructure", "Advanced Threat Detection"]
    },
    {
      title: "Personalized Integration",
      description: "Customized solutions that integrate seamlessly with your existing tools and workflows, minimizing disruption while maximizing operational impact.",
      badge: "Integration",
      color: "from-purple-500 to-pink-500",
      icon: (
        <svg className="w-10 h-10 md:w-12 md:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"></path>
        </svg>
      ),
      features: ["API-First Architecture", "Custom Connectors", "Legacy System Support", "White-label Solutions"]
    },
  ];

  const featureRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    featureRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      featureRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section id="features" className="py-20 md:py-32 relative overflow-hidden bg-gradient-section">
      {/* Floating background elements */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-20 w-48 h-48 bg-primary-glow/5 rounded-full blur-2xl animate-float" style={{ animationDelay: '3s' }}></div>
      
      <div className="max-container relative z-10 px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <div className="animate-slide-up">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary text-sm font-semibold rounded-full border border-primary/20 mb-4">
              Core Capabilities
            </span>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
              <span className="text-gradient">Premium</span> AI Features
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Discover how our cutting-edge AI solutions transform your business operations with intelligent automation and seamless integration
            </p>
          </div>
        </div>
        
        {/* Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              ref={(el) => (featureRefs.current[index] = el)}
              className="group glassmorphic-strong rounded-3xl p-8 md:p-10 hover-lift hover-glow opacity-0 translate-y-10 relative overflow-hidden"
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Card background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`}></div>
              
              {/* Badge */}
              <div className="relative">
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full border border-primary/20 mb-6">
                  {feature.badge}
                </span>
                
                {/* Icon */}
                <div className="text-gradient mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                
                {/* Content */}
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground group-hover:text-gradient transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {feature.description}
                </p>
                
                {/* Feature list */}
                <ul className="space-y-2">
                  {feature.features.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center gap-3 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        
        {/* CTA Section */}
        <div className="text-center mt-16 md:mt-20">
          <div className="animate-slide-up" style={{ animationDelay: '0.8s' }}>
            <Button 
              variant="gradient" 
              size="lg" 
              className="group"
              asChild
            >
              <a href="#contact">
                <span className="flex items-center gap-2">
                  Explore All Features
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

export default Features;
