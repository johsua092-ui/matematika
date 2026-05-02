'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Book, Edit3, CheckCircle2, AlertCircle, Eye, EyeOff } from 'lucide-react';
import { mathData } from '../data/MathData';

const StudyGuide = () => {
  const [showAnswer, setShowAnswer] = useState<Record<string, boolean>>({});

  const toggleAnswer = (id: string, idx: number) => {
    const key = `${id}-${idx}`;
    setShowAnswer(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-12"
    >
      <div className="text-center">
        <h2 className="text-4xl font-extrabold mb-4 bg-gradient-to-r from-white to-blue-500 bg-clip-text text-transparent">Panduan Belajar & Catatan</h2>
        <p className="text-zinc-400">Hal-hal wajib catat dan latihan mandiri untuk mengasah otak.</p>
      </div>

      <div className="space-y-16">
        {mathData.filter(item => item.notes).map((item) => (
          <div key={item.id} className="bg-zinc-900/30 border border-white/5 rounded-[32px] p-8 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-purple-500/50"></div>
            
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-purple-500/10 rounded-2xl">
                <Book className="text-purple-500" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-white">{item.title}</h3>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Notebook Section */}
              <div className="bg-white/5 p-6 rounded-[24px] border border-white/5">
                <div className="flex items-center gap-2 text-blue-400 font-bold text-xs uppercase tracking-widest mb-6">
                  <Edit3 size={16} />
                  Wajib Dicatat di Buku:
                </div>
                <ul className="space-y-4">
                  {item.notes?.map((note, i) => (
                    <li key={i} className="flex gap-3 text-sm text-zinc-300">
                      <CheckCircle2 size={16} className="text-blue-500 mt-1 shrink-0" />
                      <span>{note}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Practice Section */}
              <div className="bg-white/5 p-6 rounded-[24px] border border-white/5">
                <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs uppercase tracking-widest mb-6">
                  <AlertCircle size={16} />
                  Latihan Soal:
                </div>
                <div className="space-y-4">
                  {item.practice?.map((p, idx) => (
                    <div key={idx} className="bg-black/40 p-4 rounded-xl border border-white/5">
                      <p className="text-sm font-semibold text-white mb-3">{p.q}</p>
                      <button 
                        onClick={() => toggleAnswer(item.id, idx)}
                        className="flex items-center gap-2 text-[10px] text-zinc-500 border border-zinc-800 rounded-lg px-3 py-1.5 hover:bg-zinc-800 transition-colors"
                      >
                        {showAnswer[`${item.id}-${idx}`] ? <EyeOff size={12} /> : <Eye size={12} />}
                        {showAnswer[`${item.id}-${idx}`] ? 'Sembunyikan' : 'Lihat Jawaban'}
                      </button>
                      <AnimatePresence>
                        {showAnswer[`${item.id}-${idx}`] && (
                          <motion.p 
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            className="mt-3 text-sm text-emerald-500 font-bold"
                          >
                            Jawaban: {p.a}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default StudyGuide;
