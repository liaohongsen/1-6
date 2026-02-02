
export interface TutoringPlan {
  id: string;
  title: string;
  price: string;
  target: string[];
  services: string[];
}

export interface Teacher {
  name: string;
  title: string;
  expertise: string[];
  intro?: string;
}

export interface CompetitionPrice {
  hours: string;
  standard: string;
  senior: string;
}
