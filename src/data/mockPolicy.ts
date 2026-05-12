export interface Vehicle {
  year: number;
  make: string;
  model: string;
}

export interface PolicyData {
  carrier: { name: string; logoInitials: string; color: string };
  premium: { amount: number; frequency: string };
  renewal: { date: string };
  coverageLevel: string;
  policyNumber: string;
  vehicles: Vehicle[];
  drivers: string[];
  coverageDetails: {
    bodilyInjury: string;
    propertyDamage: string;
    collision: string;
    comprehensive: string;
    uninsuredMotorist: string;
  };
}

export interface Finding {
  id: string;
  category: 'gap' | 'rightsize' | 'savings';
  severity: 'high' | 'medium' | 'low';
  icon: string;
  title: string;
  description: string;
  recommendation: string;
  potentialSavings?: number;
  details?: string[];
}

export const mockPolicy: PolicyData = {
  carrier: { name: 'State Farm', logoInitials: 'SF', color: '#E31837' },
  premium: { amount: 187, frequency: 'mo' },
  renewal: { date: 'Sep 15, 2026' },
  coverageLevel: 'Full Coverage',
  policyNumber: 'SF-8847291',
  vehicles: [
    { year: 2022, make: 'Honda', model: 'Accord' },
  ],
  drivers: ['Yash Pisolkar'],
  coverageDetails: {
    bodilyInjury: '$50,000 / $100,000',
    propertyDamage: '$50,000',
    collision: '$500 deductible',
    comprehensive: '$500 deductible',
    uninsuredMotorist: '$50,000 / $100,000',
  },
};

export const checkupFindings: Finding[] = [
  {
    id: 'gap-multidriver',
    category: 'gap',
    severity: 'high',
    icon: '🛡️',
    title: 'Unlisted driver detected',
    description:
      'Your household has 2 licensed drivers, but only 1 is listed on your policy. Unlisted regular drivers can lead to claim denials.',
    recommendation:
      'Add your spouse as a named driver. Many carriers offer multi-driver discounts that could offset the added cost.',
    details: [
      'Household member: Priya Pisolkar (spouse)',
      'Estimated impact if unlisted driver in accident: claim denial up to $50,000',
      'Multi-driver discount potential: 5-10% off premium',
    ],
  },
  {
    id: 'gap-multivehicle',
    category: 'gap',
    severity: 'medium',
    icon: '🚗',
    title: 'Multi-vehicle discount missing',
    description:
      'You have 2 registered vehicles but only 1 is on this policy. Consolidating vehicles under one policy typically unlocks a 10-25% multi-vehicle discount.',
    recommendation:
      'Add your 2024 Toyota RAV4 to this policy to unlock multi-vehicle savings.',
    potentialSavings: 28,
    details: [
      'Unlinked vehicle: 2024 Toyota RAV4',
      'Current separate policy: GEICO ($156/mo)',
      'Estimated combined savings: $28/mo ($336/yr)',
    ],
  },
  {
    id: 'rightsize-liability',
    category: 'rightsize',
    severity: 'medium',
    icon: '⚖️',
    title: 'Liability limits may be too low',
    description:
      'Your bodily injury limit is $50K/$100K. Based on your financial profile, experts recommend at least $100K/$300K to protect your assets.',
    recommendation:
      'Increasing liability to $100K/$300K typically costs only $12-18/mo more but provides significantly better asset protection.',
    details: [
      'Current: $50,000 per person / $100,000 per accident',
      'Recommended: $100,000 per person / $300,000 per accident',
      'Your estimated net worth bracket suggests higher coverage',
      'Average cost increase: ~$15/mo',
    ],
  },
  {
    id: 'savings-bundle',
    category: 'savings',
    severity: 'low',
    icon: '💰',
    title: 'Bundle discount available',
    description:
      'You have a connected home insurance policy. Bundling auto + home with the same carrier could save you up to $42/mo.',
    recommendation:
      'We found 3 carriers offering competitive bundle rates. The best quote saves you $42/mo compared to your current combined premiums.',
    potentialSavings: 42,
    details: [
      'Current auto: $187/mo (State Farm)',
      'Current home: $128/mo (Allstate)',
      'Best bundle quote: $273/mo (Progressive) — saves $42/mo',
      'Runner-up: $281/mo (USAA) — saves $34/mo',
    ],
  },
];

export const totalPotentialSavings = checkupFindings.reduce(
  (sum, f) => sum + (f.potentialSavings ?? 0),
  0
);

export const analyzerSteps = [
  'Reviewing your coverage limits...',
  'Checking for policy gaps...',
  'Analyzing your household drivers...',
  'Finding savings opportunities...',
  'Comparing rates from 40+ carriers...',
];
