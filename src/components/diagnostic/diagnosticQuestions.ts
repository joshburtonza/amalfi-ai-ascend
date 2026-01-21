export interface DiagnosticOptionData {
  value: string;
  label: string;
  description?: string;
}

export interface DiagnosticQuestion {
  step: number;
  question: string;
  field: 'situation' | 'outcome' | 'frustration' | 'budget' | 'industry';
  options: DiagnosticOptionData[];
}

export const diagnosticQuestions: DiagnosticQuestion[] = [
  {
    step: 1,
    question: "Which best describes your current situation?",
    field: 'situation',
    options: [
      {
        value: 'workflows',
        label: 'Inefficient Workflows',
        description: "We have processes that could be better, but nobody's mapped them properly"
      },
      {
        value: 'response',
        label: 'Slow Response Times',
        description: "We're losing deals/clients because we can't respond fast enough"
      },
      {
        value: 'data',
        label: 'Unused Data',
        description: "We have data but aren't using it to make better decisions"
      },
      {
        value: 'manual',
        label: 'Manual Repetition',
        description: "We're manually doing work that feels completely repeatable"
      },
      {
        value: 'scaling',
        label: 'Scaling Constraints',
        description: "We're growing but our systems aren't scaling with us"
      }
    ]
  },
  {
    step: 2,
    question: "What's your primary goal in the next 90 days?",
    field: 'outcome',
    options: [
      {
        value: 'reduce_costs',
        label: 'Reduce Operational Costs',
        description: 'Cut costs by 20-40% without sacrificing quality'
      },
      {
        value: 'increase_conversion',
        label: 'Increase Conversion Rates',
        description: 'Convert more leads through faster, smarter responses'
      },
      {
        value: 'reclaim_time',
        label: 'Reclaim Time',
        description: 'Free up 10+ hours/week of manual admin work'
      },
      {
        value: 'scale_without_hiring',
        label: 'Scale Without Hiring',
        description: 'Grow revenue without proportional headcount increase'
      },
      {
        value: 'data_driven',
        label: 'Data-Driven Decisions',
        description: 'Make strategic decisions based on real intelligence, not gut feel'
      }
    ]
  },
  {
    step: 3,
    question: "What's your biggest frustration right now?",
    field: 'frustration',
    options: [
      {
        value: 'unclear_possibilities',
        label: "Don't Know What's Possible",
        description: 'Unclear on what AI can actually do for businesses like ours'
      },
      {
        value: 'previous_disappointment',
        label: 'Tried Before, Disappointed',
        description: "Previous automation attempts broke or didn't deliver promised results"
      },
      {
        value: 'finding_partner',
        label: "Can't Find the Right Partner",
        description: 'Need someone who understands both our business AND the technology'
      },
      {
        value: 'no_time',
        label: 'No Time to Figure It Out',
        description: 'Too busy running the business to research and implement solutions'
      },
      {
        value: 'roi_uncertainty',
        label: 'ROI Uncertainty',
        description: 'Worried about upfront costs without guaranteed returns'
      }
    ]
  },
  {
    step: 4,
    question: "What's your monthly budget for solving this problem?",
    field: 'budget',
    options: [
      {
        value: 'budget_10_15k',
        label: 'R10,000 - R15,000/month',
        description: 'Testing AI adoption with a single core solution'
      },
      {
        value: 'budget_20_30k',
        label: 'R20,000 - R30,000/month',
        description: 'Serious about operational transformation across multiple areas'
      },
      {
        value: 'budget_40_60k',
        label: 'R40,000 - R60,000/month',
        description: 'Ready to rebuild entire processes around AI-native solutions'
      },
      {
        value: 'budget_75k_plus',
        label: 'R75,000+/month',
        description: 'Enterprise-level transformation with dedicated support'
      },
      {
        value: 'budget_project',
        label: 'One-Time Project (R50k - R150k)',
        description: 'Prefer fixed-scope project over ongoing retainer'
      }
    ]
  },
  {
    step: 5,
    question: "What industry are you in?",
    field: 'industry',
    options: [
      { value: 'recruitment', label: 'Recruitment & Staffing' },
      { value: 'realestate', label: 'Real Estate / Property' },
      { value: 'professional', label: 'Professional Services (Legal, Accounting, Consulting)' },
      { value: 'healthcare', label: 'Healthcare / Medical Practice' },
      { value: 'logistics', label: 'Logistics / Supply Chain' },
      { value: 'ecommerce', label: 'E-commerce / Retail' },
      { value: 'other', label: 'Other' }
    ]
  }
];
