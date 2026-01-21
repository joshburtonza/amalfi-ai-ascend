import { motion } from 'framer-motion';
import { ArrowRight, ArrowLeft, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { BackgroundPaths } from '@/components/ui/background-paths';
import { useDiagnosticStore } from '@/stores/diagnosticStore';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

import DiagnosticProgress from './DiagnosticProgress';
import DiagnosticStep from './DiagnosticStep';
import DiagnosticOption from './DiagnosticOption';
import DiagnosticContactForm from './DiagnosticContactForm';
import DiagnosticNotesForm from './DiagnosticNotesForm';
import DiagnosticResults from './DiagnosticResults';
import { diagnosticQuestions } from './diagnosticQuestions';

const DiagnosticHero = () => {
  const {
    currentStep,
    responses,
    diagnosisResult,
    isComplete,
    hasStarted,
    setResponse,
    nextStep,
    prevStep,
    startDiagnostic,
    completeDiagnostic,
    resetDiagnostic,
    generateDiagnosis
  } = useDiagnosticStore();

  const totalSteps = 7;

  const canProceed = () => {
    switch (currentStep) {
      case 1: return !!responses.situation;
      case 2: return !!responses.outcome;
      case 3: return !!responses.frustration;
      case 4: return !!responses.budget;
      case 5: return !!responses.industry;
      case 6: return !!(responses.name && responses.email && responses.company);
      case 7: return true;
      default: return false;
    }
  };

  const validateEmail = (email: string) => {
    return email.includes('@') && email.includes('.');
  };

  const handleNext = () => {
    if (currentStep === 6 && !validateEmail(responses.email)) {
      toast.error('Please enter a valid email address');
      return;
    }
    nextStep();
  };

  const handleSubmit = async () => {
    const diagnosis = generateDiagnosis();
    
    try {
      // Cast to any for JSONB compatibility
      const diagnosisJson = JSON.parse(JSON.stringify(diagnosis));
      
      const { error } = await supabase.from('diagnostic_leads').insert([{
        name: responses.name,
        email: responses.email,
        company: responses.company,
        phone: responses.phone || null,
        situation: responses.situation,
        outcome: responses.outcome,
        frustration: responses.frustration,
        budget: responses.budget,
        industry: responses.industry,
        additional_notes: responses.additionalNotes || null,
        diagnosis_result: diagnosisJson,
        source: 'diagnostic_hero'
      }]);

      if (error) {
        console.error('Error saving diagnostic:', error);
        toast.error('Failed to save your responses. Please try again.');
        return;
      }

      completeDiagnostic();
      toast.success('Your diagnosis is ready!');
    } catch (err) {
      console.error('Error submitting diagnostic:', err);
      toast.error('Something went wrong. Please try again.');
    }
  };

  const scrollToContent = () => {
    const element = document.getElementById('what-we-do');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Intro Screen
  if (!hasStarted) {
    return (
      <section id="home" className="relative min-h-screen w-full bg-background flex items-center justify-center pt-20 overflow-hidden">
        <BackgroundPaths 
          title=""
          topContent={
            <div className="text-center max-w-3xl mx-auto px-4">
              <h1 className="sr-only">AI Readiness Diagnostic - Strategic Automation Assessment for Service Businesses</h1>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <p className="text-sm font-mono text-primary mb-4 tracking-wider">
                  2-MINUTE ASSESSMENT
                </p>
                
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                  Is Your Business{' '}
                  <span className="text-gradient">AI-Ready?</span>
                </h2>
                
                <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-4">
                  Most South African businesses automate the wrong things. They buy tools, not solutions.
                </p>
                
                <p className="text-2xl font-mono text-amalfi-coral mb-10">
                  The gap costs R50-200k/year in lost opportunity.
                </p>
                
                <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                  This diagnostic identifies exactly where AI can drive revenue in YOUR business—not generic recommendations, real impact.
                </p>
                
                <Button 
                  size="lg" 
                  className="text-lg px-10 py-7 font-semibold"
                  onClick={startDiagnostic}
                >
                  Start Diagnostic
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                
                <button
                  onClick={scrollToContent}
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mx-auto mt-8"
                >
                  <span>Skip to explore the site</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
              </motion.div>
            </div>
          }
        />
      </section>
    );
  }

  // Results Screen
  if (isComplete && diagnosisResult) {
    return (
      <section id="home" className="relative min-h-screen w-full bg-background flex items-center justify-center pt-20 pb-16 overflow-hidden">
        <BackgroundPaths 
          title=""
          topContent={
            <div className="max-w-2xl mx-auto px-4">
              <DiagnosticResults 
                result={diagnosisResult} 
                responses={responses}
                onReset={resetDiagnostic}
              />
            </div>
          }
        />
      </section>
    );
  }

  // Question Steps
  const currentQuestion = diagnosticQuestions.find(q => q.step === currentStep);

  return (
    <section id="home" className="relative min-h-screen w-full bg-background flex items-center justify-center pt-20 pb-16 overflow-hidden">
      <BackgroundPaths 
        title=""
        topContent={
          <div className="max-w-2xl mx-auto px-4 w-full text-left">
            <DiagnosticProgress currentStep={currentStep} totalSteps={totalSteps} />
            
            {/* Steps 1-5: Multiple choice questions */}
            {currentQuestion && (
              <DiagnosticStep
                question={currentQuestion.question}
                isActive={currentStep === currentQuestion.step}
              >
                {currentQuestion.options.map((option, index) => (
                  <DiagnosticOption
                    key={option.value}
                    label={option.label}
                    description={option.description}
                    isSelected={responses[currentQuestion.field] === option.value}
                    onClick={() => setResponse(currentQuestion.field, option.value)}
                    index={index}
                  />
                ))}
              </DiagnosticStep>
            )}

            {/* Step 6: Contact Form */}
            {currentStep === 6 && (
              <DiagnosticStep
                question="Where should we send your personalized diagnosis?"
                isActive={currentStep === 6}
              >
                <DiagnosticContactForm />
              </DiagnosticStep>
            )}

            {/* Step 7: Additional Notes */}
            {currentStep === 7 && (
              <DiagnosticStep
                question="Anything else we should know about your situation?"
                isActive={currentStep === 7}
              >
                <DiagnosticNotesForm />
              </DiagnosticStep>
            )}

            {/* Navigation Buttons */}
            <div className="flex gap-4 mt-8">
              {currentStep > 1 && (
                <Button
                  variant="outline"
                  size="lg"
                  onClick={prevStep}
                  className="flex-1"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back
                </Button>
              )}
              
              {currentStep < 7 ? (
                <Button
                  size="lg"
                  onClick={handleNext}
                  disabled={!canProceed()}
                  className="flex-1"
                >
                  Next
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              ) : (
                <Button
                  size="lg"
                  onClick={handleSubmit}
                  className="flex-1"
                >
                  Get My Diagnosis
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              )}
            </div>

            {/* Skip link */}
            <button
              onClick={scrollToContent}
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mx-auto mt-6"
            >
              <span>Skip to explore the site</span>
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>
        }
      />
    </section>
  );
};

export default DiagnosticHero;
