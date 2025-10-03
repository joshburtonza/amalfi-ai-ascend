import React from 'react';
import { Search, Pencil, Rocket, Settings, TrendingUp } from 'lucide-react';

const ProcessTimeline = () => {
  const steps = [
    {
      icon: Search,
      number: "01",
      title: "Audit & Strategy",
      description: "Assess current state, identify opportunities, and define strategic objectives aligned with business goals."
    },
    {
      icon: Pencil,
      number: "02",
      title: "Architecture & Blueprint",
      description: "Design scalable AI infrastructure, data flows, and governance frameworks tailored to your needs."
    },
    {
      icon: Rocket,
      number: "03",
      title: "Pilot & Execution",
      description: "Build and test pilot implementations to validate approach and demonstrate value quickly."
    },
    {
      icon: Settings,
      number: "04",
      title: "Deploy & Operate",
      description: "Roll out production systems with monitoring, support, and operational excellence frameworks."
    },
    {
      icon: TrendingUp,
      number: "05",
      title: "Scale & Optimize",
      description: "Expand capabilities across domains while continuously improving performance and ROI."
    }
  ];

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-hsl(var(--amalfi-surface)/0.2) to-transparent" />
      
      <div className="max-container relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Our Strategic Process
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A proven methodology that transforms AI from concept to competitive advantage.
          </p>
        </div>

        {/* Desktop Timeline */}
        <div className="hidden lg:block relative">
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-hsl(var(--amalfi-teal)/0.3) to-transparent" />
          
          <div className="grid grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="flex flex-col items-center text-center">
                  <div className="relative mb-8">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-hsl(var(--amalfi-teal)/0.2) to-hsl(var(--amalfi-teal)/0.05) flex items-center justify-center border-2 border-hsl(var(--amalfi-teal)/0.3) relative z-10 hover-lift">
                      <step.icon className="w-10 h-10 text-hsl(var(--amalfi-teal))" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-hsl(var(--amalfi-teal)) flex items-center justify-center text-xs font-bold">
                      {step.number}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="lg:hidden space-y-8">
          {steps.map((step, index) => (
            <div key={index} className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="relative">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-hsl(var(--amalfi-teal)/0.2) to-hsl(var(--amalfi-teal)/0.05) flex items-center justify-center border-2 border-hsl(var(--amalfi-teal)/0.3)">
                    <step.icon className="w-8 h-8 text-hsl(var(--amalfi-teal))" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-hsl(var(--amalfi-teal)) flex items-center justify-center text-xs font-bold">
                    {step.number}
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div className="w-0.5 h-full bg-gradient-to-b from-hsl(var(--amalfi-teal)/0.3) to-transparent mt-4" />
                )}
              </div>
              
              <div className="flex-1 pb-8">
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;
