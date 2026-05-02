'use client';
import React, { useState, useEffect, useRef } from 'react';
import katex from 'katex';
import { motion, AnimatePresence } from 'framer-motion';
import { Lightbulb, Calculator, HelpCircle, ChevronDown, ChevronUp, Layers } from 'lucide-react';
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
      layout
      className="bg-zinc-900/40 backdrop-blur-xl border border-white/10 rounded-[24px] p-6 hover:border-blue-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.1)]"
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 bg-blue-500/10 rounded-xl">
          <Layers className="text-blue-500" size={18} />
        </div>
        <div>
          <span className="text-[10px] text-blue-500 font-bold uppercase tracking-wider">{data.category}</span>
          <h3 className="text-lg font-bold text-white">{data.title}</h3>
        </div>
      </div>

      <div className="bg-black/20 rounded-xl py-6 my-4 flex justify-center items-center overflow-x-auto" ref={formulaRef}></div>

      <div className="bg-blue-500/5 border-l-4 border-blue-500 p-4 my-4 rounded-r-xl">
        <div className="flex items-center gap-2 text-[10px] font-bold text-blue-500 uppercase mb-2">
          <Lightbulb size={12} />
          Logika "Rumus Baru"
        </div>
        <p className="text-sm text-zinc-300 leading-relaxed">{data.logic}</p>
      </div>

      <button 
        onClick={() => setShowDetail(!showDetail)}
        className="w-full flex items-center justify-center gap-2 py-2 px-4 rounded-xl border border-white/5 text-zinc-400 text-xs hover:bg-white/5 transition-colors"
      >
        {showDetail ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
        {showDetail ? 'Sembunyikan Detail' : 'Bagaimana Cara Kerjanya?'}
      </button>

      <AnimatePresence>
        {showDetail && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="mt-6 p-4 bg-black/30 rounded-2xl border border-white/5">
              <div className="flex items-center gap-2 text-purple-400 mb-2">
                <HelpCircle size={14} />
                <span className="text-xs font-bold uppercase tracking-wide">Kenapa Bisa Begini?</span>
              </div>
              <p className="text-xs text-zinc-400 mb-4 leading-relaxed">{data.why}</p>
              
              <div className="space-y-2 mb-4">
                <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Step-by-Step:</span>
                {data.steps.map((step, idx) => (
                  <div key={idx} className="flex gap-2 text-xs text-zinc-300">
                    <span className="text-blue-500 font-bold">•</span>
                    <span>{step}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-white/5">
                <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest block mb-2">Contoh Nyata:</span>
                <p className="text-xs text-zinc-400 italic">{data.example}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {data.interactive && (
        <div className="mt-6 bg-blue-500/5 p-4 rounded-2xl border border-blue-500/20">
          <div className="flex items-center gap-2 text-[10px] font-bold text-blue-500 uppercase mb-4">
            <Calculator size={14} />
            Interactive Simulator
          </div>
          
          <div className="grid grid-cols-2 gap-2">
            {data.inputs ? data.inputs.map(inputName => (
              <div key={inputName}>
                <input 
                  type="number" 
                  placeholder={inputName}
                  className="w-full bg-zinc-950 border border-white/10 text-white rounded-lg px-3 py-2 text-xs outline-none focus:border-blue-500 transition-colors"
                  onChange={(e) => handleInputChange(inputName, e.target.value)}
                />
              </div>
            )) : (
              <input 
                type="number" 
                placeholder="Masukkan angka..." 
                className="w-full col-span-2 bg-zinc-950 border border-white/10 text-white rounded-lg px-3 py-2 text-xs outline-none focus:border-blue-500 transition-colors"
                onChange={(e) => handleInputChange('single', e.target.value)}
              />
            )}
          </div>

          {result !== null && (
            <motion.div 
              initial={{ y: 5, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="mt-4 p-3 bg-blue-600 text-white rounded-xl text-center font-bold text-sm shadow-lg shadow-blue-900/20"
            >
              Hasil: {result}
            </motion.div>
          )}
        </div>
      )}
    </motion.div>
  );
};

export default FormulaCard;
