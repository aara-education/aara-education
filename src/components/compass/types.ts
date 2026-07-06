export type Interest =
  | "technology"
  | "business"
  | "medical"
  | "law"
  | "creative"
  | "exploring";

export interface StudentProfile {
  interest?: Interest;
  tenthMarks?: number;
  twelfthMarks?: number;
  entranceExam?: string;
  location?: string;
  budget?: string;
}

export interface Recommendation {
  title: string;
  description: string;
  match: number;
}

export type CompassStep =
  | "welcome"
  | "interest"
  | "academics"
  | "location"
  | "budget"
  | "results";