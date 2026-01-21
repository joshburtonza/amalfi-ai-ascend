import { motion } from 'framer-motion';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useDiagnosticStore } from '@/stores/diagnosticStore';

const DiagnosticContactForm = () => {
  const { responses, setResponse } = useDiagnosticStore();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-5"
    >
      <div className="space-y-2">
        <Label htmlFor="name" className="text-sm font-medium text-foreground">
          Full Name <span className="text-destructive">*</span>
        </Label>
        <Input
          id="name"
          type="text"
          placeholder="John Smith"
          value={responses.name}
          onChange={(e) => setResponse('name', e.target.value)}
          className="bg-card/50 border-border/50 focus:border-primary h-12"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="email" className="text-sm font-medium text-foreground">
          Email Address <span className="text-destructive">*</span>
        </Label>
        <Input
          id="email"
          type="email"
          placeholder="john@company.co.za"
          value={responses.email}
          onChange={(e) => setResponse('email', e.target.value)}
          className="bg-card/50 border-border/50 focus:border-primary h-12"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="company" className="text-sm font-medium text-foreground">
          Company Name <span className="text-destructive">*</span>
        </Label>
        <Input
          id="company"
          type="text"
          placeholder="Your Company"
          value={responses.company}
          onChange={(e) => setResponse('company', e.target.value)}
          className="bg-card/50 border-border/50 focus:border-primary h-12"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone" className="text-sm font-medium text-foreground">
          Phone Number <span className="text-muted-foreground">(optional)</span>
        </Label>
        <Input
          id="phone"
          type="tel"
          placeholder="+27 82 123 4567"
          value={responses.phone}
          onChange={(e) => setResponse('phone', e.target.value)}
          className="bg-card/50 border-border/50 focus:border-primary h-12"
        />
      </div>
    </motion.div>
  );
};

export default DiagnosticContactForm;
