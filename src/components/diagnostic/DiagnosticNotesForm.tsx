import { motion } from 'framer-motion';
import { Textarea } from '@/components/ui/textarea';
import { useDiagnosticStore } from '@/stores/diagnosticStore';

const DiagnosticNotesForm = () => {
  const { responses, setResponse } = useDiagnosticStore();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-4"
    >
      <Textarea
        placeholder="Tell us about your specific challenges, current tools you're using, team size, or anything else that would help us understand your situation better..."
        value={responses.additionalNotes}
        onChange={(e) => setResponse('additionalNotes', e.target.value)}
        className="bg-card/50 border-border/50 focus:border-primary min-h-[150px] resize-none"
      />
      <p className="text-sm text-muted-foreground">
        This helps us tailor your diagnosis with specific recommendations.
      </p>
    </motion.div>
  );
};

export default DiagnosticNotesForm;
