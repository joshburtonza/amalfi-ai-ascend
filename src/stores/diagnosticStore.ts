import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface DiagnosticResponses {
  situation: string;
  outcome: string;
  frustration: string;
  budget: string;
  industry: string;
  name: string;
  email: string;
  company: string;
  phone: string;
  additionalNotes: string;
}

export interface DiagnosisResult {
  situationTitle: string;
  situationContent: string;
  situationSolution: string;
  budgetRecommendation: string;
  industryInsight: string;
}

interface DiagnosticState {
  currentStep: number;
  responses: DiagnosticResponses;
  diagnosisResult: DiagnosisResult | null;
  isComplete: boolean;
  hasStarted: boolean;
  
  // Actions
  setResponse: <K extends keyof DiagnosticResponses>(key: K, value: DiagnosticResponses[K]) => void;
  nextStep: () => void;
  prevStep: () => void;
  startDiagnostic: () => void;
  completeDiagnostic: () => void;
  resetDiagnostic: () => void;
  generateDiagnosis: () => DiagnosisResult;
}

const initialResponses: DiagnosticResponses = {
  situation: '',
  outcome: '',
  frustration: '',
  budget: '',
  industry: '',
  name: '',
  email: '',
  company: '',
  phone: '',
  additionalNotes: '',
};

const situationDiagnosis: Record<string, { title: string; content: string; solution: string }> = {
  workflows: {
    title: 'Process Inefficiency Detected',
    content: 'Your unmapped workflows are likely costing you 15-25 hours/week in duplicated effort and miscommunication. Hidden cost: R40-80k/month in lost productivity.',
    solution: 'Workflow audit + automation mapping to identify high-impact optimization points.'
  },
  response: {
    title: 'Critical Speed Gap',
    content: 'Slow response times typically reduce conversion by 30-50%. For every hour delay, you\'re losing qualified leads. Estimated revenue leak: R60-120k/month.',
    solution: 'AI-powered response automation + intelligent routing to collapse time-to-answer from hours to seconds.'
  },
  data: {
    title: 'Intelligence Blindspot',
    content: 'Unused data means uninformed decisions. You\'re making strategic calls with 20% of available intelligence. Opportunity cost: R50-100k/month in suboptimal resource allocation.',
    solution: 'Data intelligence dashboard + predictive analytics to surface actionable insights automatically.'
  },
  manual: {
    title: 'Automation Debt Accumulating',
    content: 'Repetitive manual work compounds daily. Your team is executing robot tasks at human wages. Cost multiplier: R80-150k/month paying skilled staff for mechanical work.',
    solution: 'Task automation audit to identify and eliminate high-frequency, low-value activities.'
  },
  scaling: {
    title: 'System Scaling Failure',
    content: 'Revenue growth constrained by operational capacity. You\'re hitting ceiling where more revenue = more chaos. Growth tax: R100-200k/month in missed opportunities.',
    solution: 'Scalable infrastructure redesign to decouple revenue from headcount/hours.'
  }
};

const budgetRecommendations: Record<string, string> = {
  'budget_10_15k': 'Foundation Intelligence Package — Single high-impact solution to prove ROI within 60 days.',
  'budget_20_30k': 'Solutions Architecture Package — Multi-system integration for compound effects across your operation.',
  'budget_40_60k': 'AI-Native Transformation — Entire business unit operating at next-level efficiency.',
  'budget_75k_plus': 'Enterprise Solutions — Comprehensive AI ecosystem with dedicated support and custom development.',
  'budget_project': 'Fixed-Scope Project — Defined deliverable with clear completion criteria and guaranteed outcomes.'
};

const industryInsights: Record<string, string> = {
  recruitment: 'In recruitment, we\'ve automated CV screening, candidate communication, and interview scheduling—typically saving 20+ hours weekly per recruiter while improving candidate experience.',
  realestate: 'For property businesses, we\'ve deployed AI lead qualification, automated property matching, and 24/7 inquiry handling—capturing leads that would otherwise be lost after hours.',
  professional: 'Professional services firms benefit most from intelligent document processing, automated client onboarding, and predictive resource allocation based on project patterns.',
  healthcare: 'Medical practices see immediate gains from automated appointment management, patient communication flows, and admin task elimination that frees clinical staff.',
  logistics: 'Logistics operations transform with intelligent routing, automated tracking updates, exception handling, and predictive capacity planning.',
  ecommerce: 'E-commerce benefits from automated customer service, inventory predictions, personalized recommendations, and order processing automation.',
  other: 'Every industry has unique automation opportunities. We\'ll identify yours through systematic diagnosis of your specific workflows and pain points.'
};

export const useDiagnosticStore = create<DiagnosticState>()(
  persist(
    (set, get) => ({
      currentStep: 1,
      responses: initialResponses,
      diagnosisResult: null,
      isComplete: false,
      hasStarted: false,

      setResponse: (key, value) => {
        set((state) => ({
          responses: { ...state.responses, [key]: value }
        }));
      },

      nextStep: () => {
        set((state) => ({
          currentStep: Math.min(state.currentStep + 1, 7)
        }));
      },

      prevStep: () => {
        set((state) => ({
          currentStep: Math.max(state.currentStep - 1, 1)
        }));
      },

      startDiagnostic: () => {
        set({ hasStarted: true, currentStep: 1 });
      },

      completeDiagnostic: () => {
        const diagnosis = get().generateDiagnosis();
        set({ isComplete: true, diagnosisResult: diagnosis });
      },

      resetDiagnostic: () => {
        set({
          currentStep: 1,
          responses: initialResponses,
          diagnosisResult: null,
          isComplete: false,
          hasStarted: false
        });
      },

      generateDiagnosis: () => {
        const { responses } = get();
        const situation = situationDiagnosis[responses.situation] || situationDiagnosis.workflows;
        const budget = budgetRecommendations[responses.budget] || budgetRecommendations.budget_20_30k;
        const industry = industryInsights[responses.industry] || industryInsights.other;

        return {
          situationTitle: situation.title,
          situationContent: situation.content,
          situationSolution: situation.solution,
          budgetRecommendation: budget,
          industryInsight: industry
        };
      }
    }),
    {
      name: 'amalfi-diagnostic',
      partialize: (state) => ({
        responses: state.responses,
        currentStep: state.currentStep,
        hasStarted: state.hasStarted,
        isComplete: state.isComplete,
        diagnosisResult: state.diagnosisResult
      })
    }
  )
);
