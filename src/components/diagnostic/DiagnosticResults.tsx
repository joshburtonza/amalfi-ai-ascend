import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, AlertTriangle, Target, Briefcase, Lightbulb } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { DiagnosisResult, DiagnosticResponses } from '@/stores/diagnosticStore';
import type { Easing } from 'framer-motion';

interface DiagnosticResultsProps {
  result: DiagnosisResult;
  responses: DiagnosticResponses;
  onReset: () => void;
}

const DiagnosticResults = ({ result, responses, onReset }: DiagnosticResultsProps) => {
  const easeOut: Easing = [0.33, 1, 0.68, 1];
  
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.4, ease: easeOut }
    })
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-6"
    >
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-3">
          <span className="text-gradient">Your AI Readiness Diagnosis</span>
        </h2>
        <p className="text-muted-foreground">
          Here's what we found, {responses.name.split(' ')[0]}
        </p>
      </div>

      {/* Situation Card */}
      <motion.div
        custom={0}
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        className="p-6 rounded-xl border-2 border-destructive/30 bg-destructive/5 backdrop-blur-sm"
      >
        <div className="flex items-start gap-4">
          <div className="p-2 rounded-lg bg-destructive/10">
            <AlertTriangle className="w-6 h-6 text-destructive" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-destructive mb-2">{result.situationTitle}</h3>
            <p className="text-muted-foreground mb-4 leading-relaxed">{result.situationContent}</p>
            <div className="p-3 rounded-lg bg-card/50 border border-border/50">
              <p className="text-sm">
                <span className="font-semibold text-primary">Recommended Approach: </span>
                {result.situationSolution}
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Budget Recommendation Card */}
      <motion.div
        custom={1}
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        className="p-6 rounded-xl border border-border/50 bg-card/30 backdrop-blur-sm"
      >
        <div className="flex items-start gap-4">
          <div className="p-2 rounded-lg bg-primary/10">
            <Target className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-foreground mb-2">Recommended Investment Tier</h3>
            <p className="text-muted-foreground leading-relaxed">{result.budgetRecommendation}</p>
          </div>
        </div>
      </motion.div>

      {/* Industry Insight Card */}
      <motion.div
        custom={2}
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        className="p-6 rounded-xl border border-border/50 bg-card/30 backdrop-blur-sm"
      >
        <div className="flex items-start gap-4">
          <div className="p-2 rounded-lg bg-amalfi-teal/10">
            <Lightbulb className="w-6 h-6 text-amalfi-teal" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-foreground mb-2">Industry-Specific Insight</h3>
            <p className="text-muted-foreground leading-relaxed">{result.industryInsight}</p>
          </div>
        </div>
      </motion.div>

      {/* CTA Section */}
      <motion.div
        custom={3}
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        className="p-8 rounded-xl border-2 border-primary/30 bg-gradient-to-br from-primary/10 to-amalfi-teal/10 backdrop-blur-sm text-center"
      >
        <Briefcase className="w-10 h-10 text-primary mx-auto mb-4" />
        <h3 className="text-xl font-bold mb-2">Ready to Turn Diagnosis Into Action?</h3>
        <p className="text-muted-foreground mb-6 max-w-md mx-auto">
          Book a 30-minute strategy call where we'll walk through your exact situation and map out a roadmap.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button size="lg" className="text-lg px-8" asChild>
            <Link to="/apply" className="flex items-center gap-2">
              Book Your Diagnosis Call
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" onClick={onReset}>
            Start Over
          </Button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default DiagnosticResults;
