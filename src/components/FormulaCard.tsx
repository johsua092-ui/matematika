'use client';
import React, { useState, useEffect, useRef } from 'react';
import katex from 'katex';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Calculator, Info, ChevronRight, Zap, Target } from 'lucide-react';
import { MathItem } from '../data/MathData';

const FormulaCard = ({ data }: { data: MathItem }) => {
  const [inputs, setInputs] = useState<any>({});
  const [result, setResult] = useState<string | number | null>(null);
  const [showDetail, setShowDetail] = useState(false);
  const formulaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (formulaRef.current) {
      katex.render(data.formula, formulaRef.current, {
        throwOnError: false,
        displayMode: true
      });
    }
  }, [data.formula]);

  const handleInputChange = (name: string, value: string) => {
    const val = parseFloat(value);
    const newInputs = { ...inputs, [name]: val };
    setInputs(newInputs);
    
    if (data.inputs) {
      if (data.inputs.every(k => !isNaN(newInputs[k]))) {
        setResult(data.solve(newInputs));
      } else {
        setResult(null);
      }
    } else {
      setResult(data.solve(val));
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      whileHover={{ y: -5 }}
      className="premium-glass relative rounded-[32px] overflow-hidden group"
    >
      {/* Decorative Glow */}
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-indigo-600/20 blur-[80px] group-hover:bg-indigo-600/30 transition-all duration-500"></div>
      
      <div className="p-8 relative z-10">
        <div className="flex justify-between items-start mb-6">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 bg-indigo-500/10 border border-indigo-500/20 px-3 py-1 rounded-full">
              <Zap size={12} className="text-indigo-400" />
              <span className="text-[10px] text-indigo-400 font-bold uppercase tracking-widest">{data.category}</span>
            </div>
            <h3 className="text-2xl font-black text-white tracking-tight">{data.title}</h3>
          </div>
          <div className="p-3 bg-white/5 rounded-2xl border border-white/10 text-white/50 group-hover:text-white group-hover:border-indigo-500/50 transition-all">
            <Target size={20} />
          </div>
        </div>

        {/* Formula Display Area */}
        <div className="bg-black/40 border border-white/5 rounded-2xl p-6 mb-6 flex justify-center items-center overflow-x-auto min-h-[100px]">
          <div ref={formulaRef}></div>
        </div>

        {/* Short Logic */}
        <p className="text-zinc-400 text-sm leading-relaxed mb-8 font-medium italic border-l-2 border-indigo-500/50 pl-4">
          "{data.logic}"
        </p>

        <div className="grid grid-cols-1 gap-4">
          <button 
            onClick={() => setShowDetail(!showDetail)}
            className="w-full flex items-center justify-between px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white text-sm font-bold hover:bg-white/10 transition-all group/btn"
          >
            <div className="flex items-center gap-2">
              <Info size={18} className="text-indigo-400" />
              <span>Analisis Konsep</span>
            </div>
            <ChevronRight size={18} className={`transition-transform duration-300 ${showDetail ? 'rotate-90' : ''}`} />
          </button>

          <AnimatePresence>
            {showDetail && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden"
              >
                <div className="p-6 bg-indigo-500/5 rounded-2xl border border-indigo-500/20 space-y-6">
                  <div>
                    <h4 className="text-[10px] font-black text-indigo-400 uppercase tracking-widest mb-2 flex items-center gap-2">
                      <Sparkles size={12} /> Kenapa Ini Jenius?
                    </h4>
                    <p className="text-sm text-zinc-300 leading-relaxed font-medium">{data.why}</p>
                  </div>
                  
                  <div className="space-y-3">
                    <h4 className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">Langkah Cepat:</h4>
                    {data.steps.map((step, idx) => (
                      <div key={idx} className="flex gap-3 text-xs text-zinc-400 items-start">
                        <span className="w-5 h-5 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-[10px] font-bold">{idx + 1}</span>
                        <span className="pt-0.5">{step}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-white/5">
                    <p className="text-[11px] text-zinc-500 italic"><span className="text-white font-bold">Contoh:</span> {data.example}</p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {data.interactive && (
            <div className="mt-2 bg-white/5 p-6 rounded-3xl border border-white/5">
              <div className="flex items-center gap-2 text-[10px] font-black text-zinc-500 uppercase tracking-[0.2em] mb-4">
                <Calculator size={14} className="text-indigo-400" />
                Solver Interaktif
              </div>
              
              <div className="flex gap-2">
                {data.inputs ? data.inputs.map(inputName => (
                  <input 
                    key={inputName}
                    type="number" 
                    placeholder={inputName}
                    className="w-full bg-black/40 border border-white/10 text-white rounded-xl px-4 py-3 text-sm focus:border-indigo-500/50 outline-none transition-all placeholder:text-zinc-700"
                    onChange={(e) => handleInputChange(inputName, e.target.value)}
                  />
                )) : (
                  <input 
                    type="number" 
                    placeholder="Masukkan angka..." 
                    className="w-full bg-black/40 border border-white/10 text-white rounded-xl px-4 py-3 text-sm focus:border-indigo-500/50 outline-none transition-all placeholder:text-zinc-700"
                    onChange={(e) => handleInputChange('single', e.target.value)}
                  />
                )}
              </div>

              <AnimatePresence>
                {result !== null && (
                  <motion.div 
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="mt-4 p-4 bg-indigo-600 rounded-2xl text-center shadow-xl shadow-indigo-900/40 relative overflow-hidden group/result"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 -translate-x-full group-hover/result:translate-x-full transition-transform duration-1000"></div>
                    <span className="text-[10px] block font-bold text-indigo-200 uppercase mb-1">Hasil Perhitungan</span>
                    <span className="text-xl font-black text-white">{result}</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default FormulaCard;
