export interface VisualStep {
  label: string;
  calc: string;
  result: string;
  color: string;
  note?: string;
}

export interface VisualBoard {
  title: string;
  num1: string;
  num2?: string;
  operation: string;
  steps: VisualStep[];
}

export interface ProgressiveExample {
  level: 1 | 2 | 3 | 4 | 5;
  levelName: string;
  question: string;
  solution: string[];
  answer: string;
}

export interface TeachingContent {
  prerequisites: string[];
  analogy: string;
  stepsFromZero: string[];
  ahaMoment: string;
}

export interface NotebookEntry {
  title: string;
  content: string[];
  formula?: string;
  important: boolean;
}

export interface MathItem {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  level: "SD" | "SMP" | "SMA" | "Kuliah";
  difficulty: number;
  formula: string;
  formulaExplain: string;
  logic: string;
  why: string;
  steps: string[];
  mustWrite: boolean;
  notebook: NotebookEntry[];
  teaching: TeachingContent;
  progressiveExamples: ProgressiveExample[];
  visualBoard?: VisualBoard;
  interactive: boolean;
  inputs?: string[];
  inputLabels?: string[];
  solve?: (inputs: Record<string, number>) => string | number;
}
