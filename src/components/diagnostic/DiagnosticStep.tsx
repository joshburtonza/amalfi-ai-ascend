import { motion, AnimatePresence } from 'framer-motion';
import { ReactNode } from 'react';

interface DiagnosticStepProps {
  question: string;
  children: ReactNode;
  isActive: boolean;
}

const DiagnosticStep = ({ question, children, isActive }: DiagnosticStepProps) => {
  return (
    <AnimatePresence mode="wait">
      {isActive && (
        <motion.div
          key={question}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="space-y-6"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-foreground leading-tight">
            {question}
          </h2>
          <div className="space-y-3">
            {children}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DiagnosticStep;
