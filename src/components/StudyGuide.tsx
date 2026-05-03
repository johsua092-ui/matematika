'use client';
import React, { useState } from 'react';
import { mathData, levelColors } from '../data/MathData';
import { Pen, CheckCircle2, Eye, EyeOff, BookOpen } from 'lucide-react';

export default function StudyGuide() {
  const [selectedLevel, setSelectedLevel] = useState<string>("all");
  const [showAnswer, setShowAnswer] = useState<Record<string, boolean>>({});
  const [checked, setChecked] = useState<Record<string, boolean>>({});

  const filtered = selectedLevel === "all" ? mathData : mathData.filter(m => m.level === selectedLevel);
  const mustWriteItems = filtered.filter(m => m.mustWrite);

  const toggleCheck = (id: string) => setChecked(p => ({ ...p, [id]: !p[id] }));
  const toggleAnswer2 = (key: string) => setShowAnswer(p => ({ ...p, [key]: !p[key] }));

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-white mb-2">Panduan Belajar & Catatan</h2>
        <p className="text-sm text-neutral-500">Hal-hal yang WAJIB dicatat di buku tulis dan latihan soal untuk setiap metode.</p>
      </div>

      {/* Level filter */}
      <div className="flex gap-2 justify-center flex-wrap">
        <button
          onClick={() => setSelectedLevel("all")}
          className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all border ${
            selectedLevel === "all" ? 'bg-white text-black border-white' : 'bg-neutral-900 text-neutral-600 border-neutral-800 hover:text-white'
          }`}
        >
          Semua
        </button>
        {["SD", "SMP", "SMA", "Kuliah"].map(level => {
          const c = levelColors[level];
          return (
            <button
              key={level}
              onClick={() => setSelectedLevel(level)}
              className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all border ${
                selectedLevel === level ? `${c.bg} ${c.text} ${c.border}` : 'bg-neutral-900 text-neutral-600 border-neutral-800 hover:text-neutral-400'
              }`}
            >
              {level}
            </button>
          );
        })}
      </div>

      {/* Progress */}
      <div className="text-center">
        <span className="text-xs text-neutral-600 mono">
          {Object.values(checked).filter(Boolean).length} / {mustWriteItems.length} dicatat
        </span>
      </div>

      {/* Guide cards */}
      <div className="space-y-8">
        {mustWriteItems.map((item) => {
          const c = levelColors[item.level];
          return (
            <div key={item.id} className="card overflow-hidden">
              <div className="level-line absolute left-0 top-0 bottom-0" style={{ background: c.accent }} />

              {/* Header */}
              <div className="p-5 pl-7 border-b border-neutral-800 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <button onClick={() => toggleCheck(item.id)} className="shrink-0">
                    <CheckCircle2 size={20} className={checked[item.id] ? 'text-emerald-400' : 'text-neutral-700'} />
                  </button>
                  <div>
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className={`badge ${c.bg} ${c.text} ${c.border} border text-[9px]`}>{item.level}</span>
                    </div>
                    <h3 className={`font-bold text-white ${checked[item.id] ? 'line-through opacity-50' : ''}`}>
                      {item.title}
                    </h3>
                  </div>
                </div>
                <span className="text-[9px] font-bold text-amber-400 bg-amber-500/10 px-2 py-1 rounded uppercase tracking-wider">
                  ✍️ Wajib Catat
                </span>
              </div>

              <div className="grid md:grid-cols-2 gap-0 md:divide-x divide-neutral-800">
                {/* Notebook section */}
                <div className="p-5 pl-7">
                  <div className="flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-wider mb-4">
                    <Pen size={14} />
                    Salin ke Buku Tulis:
                  </div>
                  <div className="space-y-3">
                    {item.notebook.map((entry, i) => (
                      <div key={i} className="p-3 rounded-lg bg-neutral-900 border border-neutral-800 notebook-lines">
                        <p className="text-xs font-bold text-neutral-500 uppercase tracking-wider mb-1.5">{entry.title}</p>
                        {entry.content.map((line, j) => (
                          <p key={j} className="text-sm text-neutral-300 leading-[32px]">{line}</p>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Practice section */}
                <div className="p-5">
                  <div className="flex items-center gap-2 text-xs font-bold text-emerald-400 uppercase tracking-wider mb-4">
                    <BookOpen size={14} />
                    Latihan Soal:
                  </div>
                  <div className="space-y-3">
                    {item.progressiveExamples.slice(0, 3).map((ex, idx) => (
                      <div key={idx} className="p-3 rounded-lg bg-neutral-900 border border-neutral-800">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xs">{'⭐'.repeat(ex.level)}</span>
                        </div>
                        <p className="text-sm font-semibold text-white mb-2">{ex.question}</p>
                        <button
                          onClick={() => toggleAnswer2(`${item.id}-${idx}`)}
                          className="flex items-center gap-1.5 text-[10px] text-neutral-600 border border-neutral-800 rounded px-2 py-1 hover:text-white hover:border-neutral-600 transition-colors"
                        >
                          {showAnswer[`${item.id}-${idx}`] ? <EyeOff size={10} /> : <Eye size={10} />}
                          {showAnswer[`${item.id}-${idx}`] ? 'Tutup' : 'Jawaban'}
                        </button>
                        {showAnswer[`${item.id}-${idx}`] && (
                          <p className="mt-2 text-sm text-emerald-400 font-bold mono animate-in">{ex.answer}</p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
