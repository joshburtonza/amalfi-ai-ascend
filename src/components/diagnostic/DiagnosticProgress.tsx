import { motion } from 'framer-motion';

interface DiagnosticProgressProps {
  currentStep: number;
  totalSteps: number;
}

const DiagnosticProgress = ({ currentStep, totalSteps }: DiagnosticProgressProps) => {
  const progress = (currentStep / totalSteps) * 100;

  return (
    <div className="w-full mb-8">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-mono text-primary">
          QUESTION {currentStep}/{totalSteps}
        </span>
        <span className="text-sm text-muted-foreground">
          {Math.round(progress)}% complete
        </span>
      </div>
      <div className="h-1 bg-border/50 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-primary to-amalfi-teal"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        />
      </div>
    </div>
  );
};

export default DiagnosticProgress;
