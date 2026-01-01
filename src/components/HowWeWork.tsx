import React from 'react';
import { Search, Stethoscope, PenTool, Rocket, TrendingUp } from 'lucide-react';

const HowWeWork = () => {
  const steps = [
    {
      icon: Search,
      number: '01',
      title: 'Diagnose',
      description: 'We map your operations and identify where time and money leak. No assumptions—just data.'
    },
    {
      icon: Stethoscope,
      number: '02',
      title: 'Blueprint',
      description: "We design a solution with clear ROI projections. You know exactly what you're getting before we build."
    },
    {
      icon: PenTool,
      number: '03',
      title: 'Pilot',
      description: 'We deploy a focused first phase to prove value fast. Typical pilot: 2-3 weeks.'
    },
    {
      icon: Rocket,
      number: '04',
      title: 'Deploy',
      description: 'We roll out the full solution, integrate with your workflows, and train your team.'
    },
    {
      icon: TrendingUp,
      number: '05',
      title: 'Optimize',
      description: 'Monthly reviews, continuous improvement. Our clients see ROI compound over time.'
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-container">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary text-sm font-semibold rounded-full border border-primary/20 mb-4">
            Our Process
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            How We Work
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Every engagement follows the same discipline. That's why our clients see results—not just deliverables.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="flex gap-6 mb-8 last:mb-0">
              <div className="flex flex-col items-center">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <step.icon className="w-7 h-7 text-primary" />
                </div>
                {index < steps.length - 1 && (
                  <div className="w-0.5 h-full bg-primary/20 mt-4" />
                )}
              </div>
              <div className="pb-8">
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full mb-2">
                  Step {step.number}
                </span>
                <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
