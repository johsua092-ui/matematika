'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Zap, History, Scroll, PenTool, ExternalLink } from 'lucide-react';
import { mathData } from '../data/MathData';

const TheoryVault = () => {
  const masters = mathData.filter(item => item.masterTheory);
  const [selectedTopic, setSelectedTopic] = useState(masters[0]);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col lg:flex-row gap-8 min-h-[80vh]"
    >
      {/* Sidebar Navigation */}
      <aside className="lg:w-80 bg-zinc-900/50 backdrop-blur-xl p-6 rounded-[32px] border border-white/5 h-fit lg:sticky lg:top-8">
        <h3 className="text-[10px] text-blue-500 font-extrabold uppercase tracking-[0.2em] mb-6">Mastery Vault</h3>
        <div className="space-y-2">
          {masters.map(item => (
            <button
              key={item.id}
              onClick={() => setSelectedTopic(item)}
              className={`w-full text-left p-4 rounded-2xl text-sm font-semibold transition-all duration-200 border ${
                selectedTopic.id === item.id 
                ? 'bg-blue-600/10 border-blue-500 text-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.1)]' 
                : 'bg-transparent border-transparent text-zinc-500 hover:bg-white/5'
              }`}
            >
              {item.title}
            </button>
          ))}
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 bg-zinc-900/30 backdrop-blur-xl p-8 lg:p-12 rounded-[32px] border border-white/5">
        <div className="max-w-3xl mx-auto space-y-12">
          <div className="flex items-center gap-2 text-amber-500">
            <ShieldCheck size={20} />
            <span className="text-[10px] font-bold uppercase tracking-[0.3em]">Mastery Level Unlocked</span>
          </div>
          
          <h2 className="text-5xl font-black bg-gradient-to-br from-white via-white to-zinc-500 bg-clip-text text-transparent leading-tight">
            {selectedTopic.title}
          </h2>

          <section>
            <div className="flex items-center gap-2 text-zinc-300 font-bold mb-4">
              <History size={18} className="text-blue-500" />
              <h4>Filosofi & Asal-usul</h4>
            </div>
            <p className="text-lg text-zinc-400 leading-relaxed font-medium">
              {selectedTopic.masterTheory?.intro}
            </p>
          </section>

          <section className="bg-blue-500/5 p-8 rounded-[24px] border-l-4 border-blue-500">
            <div className="flex items-center gap-2 text-blue-500 font-bold mb-4">
              <Zap size={18} />
              <h4>Penurunan Logika (The "Why")</h4>
            </div>
            <p className="text-zinc-300 leading-relaxed text-lg">
              {selectedTopic.masterTheory?.derivation}
            </p>
          </section>

          <section>
            <div className="flex items-center gap-2 text-purple-400 font-bold mb-8">
              <Scroll size={18} />
              <h4>Panduan Catatan Buku Fisik (Edisi Lengkap)</h4>
            </div>
            <div className="space-y-6">
              {selectedTopic.masterTheory?.notebookContent.map((content, i) => (
                <div key={i} className="flex gap-6 p-6 bg-white/5 rounded-3xl border border-white/5 hover:border-purple-500/30 transition-colors">
                  <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center shrink-0 font-black text-xl shadow-lg shadow-purple-900/20">
                    {i + 1}
                  </div>
                  <p className="text-zinc-300 text-lg leading-relaxed pt-2">
                    {content}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <footer className="pt-12 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-zinc-500 text-sm">
              <PenTool size={16} />
              <span>Estimasi: 3-4 Halaman Buku Fisik</span>
            </div>
            <button className="flex items-center gap-2 text-blue-500 font-bold hover:text-blue-400 transition-colors">
              Cetak Panduan <ExternalLink size={14} />
            </button>
          </footer>
        </div>
      </main>
    </motion.div>
  );
};

export default TheoryVault;
