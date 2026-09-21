export type RatingValue = 0 | 1 | 2 | 3;

export interface QuizQuestion {
  id: 'A' | 'B' | 'C' | 'D' | 'E';
  groupName: string;
  statement: string;
  flowerName: string;
  flowerSubtitle: string;
  benefitShort: string;
  tagline: string;
  emotionalState: string;
  flowerAction: string;
  symptoms: string[];
  tips: string;
  posology: string;
  accentColor: string;
  badgeBg: string;
  badgeText: string;
  imageUrl: string;
  productUrl: string;
}

export interface QuizScores {
  A: RatingValue;
  B: RatingValue;
  C: RatingValue;
  D: RatingValue;
  E: RatingValue;
}

export interface QuizResult {
  primary: QuizQuestion;
  secondary: QuizQuestion;
  scores: QuizScores;
  maxScore: number;
  synergyReason: string;
}

