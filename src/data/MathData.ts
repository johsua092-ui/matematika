export type { MathItem, VisualStep, VisualBoard, ProgressiveExample, TeachingContent, NotebookEntry } from './types';
import { sdFormulas } from './sd';
import { smpFormulas } from './smp';
import { smaFormulas } from './sma';
import { kuliahFormulas } from './kuliah';

export const mathData = [...sdFormulas, ...smpFormulas, ...smaFormulas, ...kuliahFormulas];

export const levels = ["SD", "SMP", "SMA", "Kuliah"] as const;

export const levelColors: Record<string, { bg: string; text: string; border: string; accent: string }> = {
  SD: { bg: "bg-emerald-500/10", text: "text-emerald-400", border: "border-emerald-500/20", accent: "#10b981" },
  SMP: { bg: "bg-blue-500/10", text: "text-blue-400", border: "border-blue-500/20", accent: "#3b82f6" },
  SMA: { bg: "bg-amber-500/10", text: "text-amber-400", border: "border-amber-500/20", accent: "#f59e0b" },
  Kuliah: { bg: "bg-rose-500/10", text: "text-rose-400", border: "border-rose-500/20", accent: "#f43f5e" },
};

export const levelEmoji: Record<string, string> = {
  SD: "🟢", SMP: "🔵", SMA: "🟡", Kuliah: "🔴"
};
