import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface DiagnosticOptionProps {
  label: string;
  description?: string;
  isSelected: boolean;
  onClick: () => void;
  index: number;
}

const DiagnosticOption = ({ label, description, isSelected, onClick, index }: DiagnosticOptionProps) => {
  return (
    <motion.button
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.05, duration: 0.3 }}
      onClick={onClick}
      className={cn(
        "relative w-full text-left p-5 rounded-xl border-2 transition-all duration-300 group overflow-hidden",
        "bg-card/50 backdrop-blur-sm",
        isSelected
          ? "border-primary bg-primary/10 shadow-[0_0_30px_rgba(45,212,191,0.15)]"
          : "border-border/50 hover:border-primary/50 hover:translate-x-1 hover:shadow-[0_5px_20px_rgba(45,212,191,0.1)]"
      )}
    >
      {/* Hover shimmer effect */}
      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-primary/5 to-transparent" />
      
      <div className="relative z-10">
        <p className={cn(
          "font-semibold text-lg mb-1 transition-colors",
          isSelected ? "text-primary" : "text-foreground group-hover:text-primary"
        )}>
          {label}
        </p>
        {description && (
          <p className="text-sm text-muted-foreground leading-relaxed">
            {description}
          </p>
        )}
      </div>

      {/* Selection indicator */}
      {isSelected && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-primary flex items-center justify-center"
        >
          <svg className="w-4 h-4 text-primary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
          </svg>
        </motion.div>
      )}
    </motion.button>
  );
};

export default DiagnosticOption;
