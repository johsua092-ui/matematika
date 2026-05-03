'use client';
import React, { useState, useEffect, useRef } from 'react';
import katex from 'katex';
import { ChevronDown, Calculator, BookOpen } from 'lucide-react';
import { MathItem, levelColors } from '../data/MathData';

export default function FormulaCard({ data }: { data: MathItem }) {
  const [inputs, setInputs] = useState<Record<string, number>>({});
  const [result, setResult] = useState<string | number | null>(null);
  const [expanded, setExpanded] = useState(false);
  const formulaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (formulaRef.current) {
      try {
        katex.render(data.formula, formulaRef.current, { throwOnError: false, displayMode: true });
      } catch { /* ignore */ }
    }
  }, [data.formula]);

  const colors = levelColors[data.level];

  const handleInput = (name: string, value: string) => {
    const val = parseFloat(value);
    const next = { ...inputs, [name]: val };
    setInputs(next);
    if (data.solve && data.inputs) {
      if (data.inputs.every(k => !isNaN(next[k]))) {
        try { setResult(data.solve(next)); } catch { setResult("Error"); }
      } else { setResult(null); }
    }
  };

  return (
    <div className={`card card-hover relative overflow-hidden ${data.mustWrite ? 'must-write' : ''}`}>
      {/* Level indicator line */}
      <div className="level-line absolute left-0 top-0 bottom-0" style={{ background: colors.accent }} />

      <div className="p-6 pl-8">
        {/* Header */}
        <div className="flex items-start justify-between gap-4 mb-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className={`badge ${colors.bg} ${colors.text} ${colors.border} border`}>
                {data.level}
              </span>
              <span className="text-[11px] text-neutral-500 font-medium">{data.category}</span>
            </div>
            <h3 className="text-lg font-bold text-white leading-tight">{data.title}</h3>
            <p className="text-sm text-neutral-500 mt-0.5">{data.subtitle}</p>
          </div>
        </div>

        {/* Formula */}
        <div className="bg-black/50 border border-neutral-800 rounded-lg p-4 mb-4 overflow-x-auto">
          <div ref={formulaRef} className="min-h-[40px] flex items-center justify-center" />
        </div>

        {/* Logic quote */}
        <p className="text-sm text-neutral-400 italic border-l-2 border-neutral-700 pl-3 mb-4 leading-relaxed">
          {data.logic}
        </p>

        {/* Quick steps */}
        <div className="space-y-1.5 mb-4">
          {data.steps.map((step, i) => (
            <div key={i} className="flex gap-2.5 text-sm">
              <span className="mono text-xs text-neutral-600 w-5 text-right shrink-0 pt-0.5">{i + 1}.</span>
              <span className="text-neutral-300">{step}</span>
            </div>
          ))}
        </div>

        {/* Expand toggle */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="w-full flex items-center justify-between px-4 py-2.5 rounded-lg bg-neutral-800/50 border border-neutral-800 text-sm text-neutral-400 hover:text-white hover:border-neutral-700 transition-all"
        >
          <div className="flex items-center gap-2">
            <BookOpen size={14} />
            <span className="font-medium">Analisis & Contoh</span>
          </div>
          <ChevronDown size={14} className={`transition-transform ${expanded ? 'rotate-180' : ''}`} />
        </button>

        {expanded && (
          <div className="mt-4 space-y-4 animate-in">
            {/* Why */}
            <div className="p-4 rounded-lg bg-neutral-900 border border-neutral-800">
              <p className="text-xs font-bold text-neutral-500 uppercase tracking-wider mb-2">Kenapa Ini Jenius?</p>
              <p className="text-sm text-neutral-300 leading-relaxed">{data.why}</p>
            </div>

            {/* Formula explain */}
            <div className="p-4 rounded-lg bg-neutral-900 border border-neutral-800">
              <p className="text-xs font-bold text-neutral-500 uppercase tracking-wider mb-2">Penjelasan Rumus</p>
              <p className="text-sm text-neutral-300 leading-relaxed">{data.formulaExplain}</p>
            </div>

            {/* Progressive Examples - first 3 */}
            <div className="p-4 rounded-lg bg-neutral-900 border border-neutral-800">
              <p className="text-xs font-bold text-neutral-500 uppercase tracking-wider mb-3">Contoh Progressive</p>
              <div className="space-y-3">
                {data.progressiveExamples.slice(0, 3).map((ex, i) => (
                  <div key={i} className="p-3 rounded-lg bg-black/40 border border-neutral-800">
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="text-xs">{'⭐'.repeat(ex.level)}</span>
                      <span className="text-[10px] font-bold text-neutral-600 uppercase">{ex.levelName}</span>
                    </div>
                    <p className="text-sm font-semibold text-white mb-2">{ex.question}</p>
                    <div className="space-y-0.5">
                      {ex.solution.map((s, j) => (
                        <p key={j} className="text-xs text-neutral-400 mono">{s}</p>
                      ))}
                    </div>
                    <p className="text-sm font-bold text-emerald-400 mt-2 mono">= {ex.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Interactive solver */}
        {data.interactive && data.inputs && (
          <div className="mt-4 p-4 rounded-lg bg-neutral-900/50 border border-neutral-800">
            <div className="flex items-center gap-2 text-xs font-bold text-neutral-500 uppercase tracking-wider mb-3">
              <Calculator size={12} />
              Kalkulator
            </div>
            <div className="flex gap-2 flex-wrap">
              {data.inputs.map((name, i) => (
                <input
                  key={name}
                  type="number"
                  placeholder={data.inputLabels?.[i] || name}
                  className="flex-1 min-w-[80px] bg-black border border-neutral-800 text-white rounded-lg px-3 py-2 text-sm mono focus:border-neutral-600 outline-none transition-colors placeholder:text-neutral-700"
                  onChange={(e) => handleInput(name, e.target.value)}
                />
              ))}
            </div>
            {result !== null && (
              <div className="mt-3 p-3 rounded-lg bg-indigo-600/10 border border-indigo-500/20 text-center animate-in">
                <span className="text-[10px] font-bold text-indigo-400 uppercase block mb-0.5">Hasil</span>
                <span className="text-lg font-bold text-white mono">{result}</span>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
