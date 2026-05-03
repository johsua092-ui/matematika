'use client';
import React, { useState } from 'react';
import { mathData, levelColors, MathItem } from '../data/MathData';
import { BookOpen, Lightbulb, GraduationCap, ChevronRight, Pen, Eye, EyeOff } from 'lucide-react';

export default function TheoryVault() {
  const [selectedLevel, setSelectedLevel] = useState<string>("SD");
  const [selectedId, setSelectedId] = useState<string>(mathData[0].id);
  const [showAnswers, setShowAnswers] = useState<Record<string, boolean>>({});

  const filtered = mathData.filter(m => m.level === selectedLevel);
  const data = mathData.find(m => m.id === selectedId);

  const toggleAnswer = (key: string) => {
    setShowAnswers(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="space-y-8">
      {/* Level Tabs */}
      <div className="flex gap-2">
        {["SD", "SMP", "SMA", "Kuliah"].map(level => {
          const c = levelColors[level];
          return (
            <button
              key={level}
              onClick={() => { setSelectedLevel(level); const first = mathData.find(m => m.level === level); if (first) setSelectedId(first.id); }}
              className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all border ${
                selectedLevel === level
                  ? `${c.bg} ${c.text} ${c.border}`
                  : 'bg-neutral-900 text-neutral-600 border-neutral-800 hover:text-neutral-400'
              }`}
            >
              {level}
            </button>
          );
        })}
      </div>

      {/* Formula Selector */}
      <div className="flex flex-wrap gap-2 pb-4 border-b border-neutral-800">
        {filtered.map(item => (
          <button
            key={item.id}
            onClick={() => setSelectedId(item.id)}
            className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all border ${
              selectedId === item.id
                ? 'bg-white text-black border-white'
                : 'bg-neutral-900 text-neutral-500 border-neutral-800 hover:text-white hover:border-neutral-700'
            }`}
          >
            {item.title}
          </button>
        ))}
      </div>

      {data && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Main Content (8 cols) */}
          <div className="lg:col-span-8 space-y-6">

            {/* Teaching: Prerequisites */}
            <div className="card p-6">
              <div className="flex items-center gap-2 text-xs font-bold text-neutral-500 uppercase tracking-wider mb-4">
                <GraduationCap size={16} />
                Prasyarat (Apa yang harus kamu tahu dulu)
              </div>
              <div className="space-y-2">
                {data.teaching.prerequisites.map((p, i) => (
                  <div key={i} className="flex gap-2 text-sm text-neutral-300">
                    <span className="text-neutral-600 mono text-xs mt-0.5">→</span>
                    <span>{p}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Teaching: Concept from Zero */}
            <div className="card p-6">
              <div className="flex items-center gap-2 text-xs font-bold text-blue-400 uppercase tracking-wider mb-4">
                <Lightbulb size={16} />
                Belajar dari Nol
              </div>
              <div className="space-y-3">
                {data.teaching.stepsFromZero.map((step, i) => (
                  <div key={i} className="flex gap-3 text-sm">
                    <span className="mono text-xs text-neutral-600 w-5 text-right shrink-0 pt-0.5">{i + 1}.</span>
                    <span className="text-neutral-200 leading-relaxed">{step}</span>
                  </div>
                ))}
              </div>
              {/* Analogy */}
              <div className="mt-4 p-4 rounded-lg bg-indigo-500/5 border border-indigo-500/10">
                <p className="text-xs font-bold text-indigo-400 uppercase tracking-wider mb-2">💡 Analogi</p>
                <p className="text-sm text-neutral-300 italic leading-relaxed">{data.teaching.analogy}</p>
              </div>
              {/* Aha Moment */}
              <div className="mt-3 p-4 rounded-lg bg-amber-500/5 border border-amber-500/10">
                <p className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-2">⚡ Momen &quot;Aha!&quot;</p>
                <p className="text-sm text-neutral-200 font-medium leading-relaxed">{data.teaching.ahaMoment}</p>
              </div>
            </div>

            {/* Visual Board */}
            {data.visualBoard && (
              <div className="card overflow-hidden">
                <div className="p-4 bg-neutral-900 border-b border-neutral-800 flex items-center justify-between">
                  <span className="text-xs font-bold text-neutral-500 uppercase tracking-wider">Visual Step Board</span>
                  <div className="flex gap-3 mono text-lg text-white font-bold">
                    <span>{data.visualBoard.num1}</span>
                    <span className="text-neutral-600">{data.visualBoard.operation}</span>
                    {data.visualBoard.num2 && <span>{data.visualBoard.num2}</span>}
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  {data.visualBoard.steps.map((step, idx) => {
                    const colorMap: Record<string, string> = {
                      blue: 'border-blue-500 text-blue-400',
                      green: 'border-emerald-500 text-emerald-400',
                      amber: 'border-amber-500 text-amber-400',
                      red: 'border-red-500 text-red-400',
                      purple: 'border-purple-500 text-purple-400',
                      indigo: 'border-indigo-500 text-indigo-400',
                    };
                    return (
                      <div key={idx} className="flex items-start gap-4">
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold border bg-black/50 shrink-0 ${colorMap[step.color] || 'border-neutral-600 text-neutral-400'}`}>
                          {idx + 1}
                        </div>
                        <div className="flex-1 space-y-1">
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-bold text-neutral-500 uppercase tracking-wider">{step.label}</span>
                            <span className="text-neutral-700">—</span>
                            <span className="text-sm mono text-white font-semibold">{step.calc} = {step.result}</span>
                          </div>
                          {step.note && <p className="text-xs text-neutral-500 italic">{step.note}</p>}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Progressive Examples (ALL) */}
            <div className="card p-6">
              <div className="flex items-center gap-2 text-xs font-bold text-neutral-500 uppercase tracking-wider mb-4">
                <BookOpen size={16} />
                Contoh Soal Progressive (Mudah → Sulit)
              </div>
              <div className="space-y-3">
                {data.progressiveExamples.map((ex, i) => (
                  <div key={i} className="p-4 rounded-lg bg-neutral-900 border border-neutral-800">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className="text-xs">{'⭐'.repeat(ex.level)}</span>
                        <span className="text-[10px] font-bold text-neutral-600 uppercase tracking-wider">{ex.levelName}</span>
                      </div>
                      <button
                        onClick={() => toggleAnswer(`${data.id}-${i}`)}
                        className="flex items-center gap-1 text-[10px] font-bold text-neutral-600 hover:text-white transition-colors"
                      >
                        {showAnswers[`${data.id}-${i}`] ? <EyeOff size={10} /> : <Eye size={10} />}
                        {showAnswers[`${data.id}-${i}`] ? 'Tutup' : 'Solusi'}
                      </button>
                    </div>
                    <p className="text-sm font-semibold text-white">{ex.question}</p>
                    {showAnswers[`${data.id}-${i}`] && (
                      <div className="mt-3 pt-3 border-t border-neutral-800 animate-in">
                        <div className="space-y-1 mb-2">
                          {ex.solution.map((s, j) => (
                            <p key={j} className="text-xs text-neutral-400 mono">{s}</p>
                          ))}
                        </div>
                        <p className="text-sm font-bold text-emerald-400 mono">Jawaban: {ex.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            {/* Notebook - Must Write */}
            <div className={`card p-6 ${data.mustWrite ? 'border-amber-500/30' : ''}`}>
              <div className="flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-wider mb-4">
                <Pen size={14} />
                Wajib Catat di Buku Tulis
              </div>
              <div className="space-y-4">
                {data.notebook.map((entry, i) => (
                  <div key={i} className={`p-4 rounded-lg bg-neutral-900 border ${entry.important ? 'border-amber-500/20' : 'border-neutral-800'} notebook-lines`}>
                    <p className="text-xs font-bold text-neutral-400 uppercase tracking-wider mb-2">{entry.title}</p>
                    <div className="space-y-1.5">
                      {entry.content.map((line, j) => (
                        <p key={j} className="text-sm text-neutral-300 leading-relaxed">{line}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Info */}
            <div className="card p-6">
              <p className="text-xs font-bold text-neutral-500 uppercase tracking-wider mb-3">Info</p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-neutral-500">Level</span>
                  <span className={`font-bold ${levelColors[data.level].text}`}>{data.level}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-500">Difficulty</span>
                  <span className="text-white mono">{data.difficulty}/5</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-500">Kategori</span>
                  <span className="text-white">{data.category}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-500">Interaktif</span>
                  <span className="text-white">{data.interactive ? '✓' : '—'}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
