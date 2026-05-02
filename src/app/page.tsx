'use client';
import React, { useState } from 'react';
import { mathData } from '@/data/MathData';
import FormulaCard from '@/components/FormulaCard';
import StudyGuide from '@/components/StudyGuide';
import TheoryVault from '@/components/TheoryVault';
import { BookOpen, Sparkles, GraduationCap, LayoutDashboard, FileText, ShieldCheck, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Home() {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-600/10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/10 blur-[120px] rounded-full"></div>

      <div className={`container mx-auto px-6 py-16 transition-all duration-700 relative z-10 ${activeTab === 'mastery' ? 'max-w-7xl' : 'max-w-6xl'}`}>
        
        {/* Epic Hero Section */}
        <header className="text-center mb-24 space-y-8">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-6 py-2 rounded-full shadow-2xl"
          >
            <Sparkles size={16} className="text-amber-400" />
            <span className="text-[11px] font-black tracking-[0.3em] text-zinc-400 uppercase">EduNova Next-Gen Math</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-7xl md:text-9xl font-black tracking-tighter leading-none"
          >
            <span className="bg-gradient-to-b from-white via-white to-zinc-600 bg-clip-text text-transparent">EduNova</span>
            <span className="text-indigo-500">.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-light"
          >
            Eksplorasi matematika SMA dengan cara yang <span className="text-white font-bold">paling intuitif</span> dan <span className="text-indigo-400 font-bold">akurat</span> di era modern.
          </motion.p>

          {/* Premium Navigation */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4 pt-8"
          >
            {[
              { id: 'dashboard', label: 'Dashboard Rumus', icon: LayoutDashboard, color: 'indigo' },
              { id: 'guide', label: 'Panduan Belajar', icon: FileText, color: 'violet' },
              { id: 'mastery', label: 'Mastery Vault', icon: ShieldCheck, color: 'amber' }
            ].map((tab) => (
              <button 
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`group relative flex items-center gap-3 px-8 py-4 rounded-2xl text-sm font-black transition-all duration-500 overflow-hidden ${
                  activeTab === tab.id 
                  ? 'text-white' 
                  : 'text-zinc-500 hover:text-white'
                }`}
              >
                {activeTab === tab.id && (
                  <motion.div 
                    layoutId="activeTab"
                    className={`absolute inset-0 bg-${tab.color}-600 shadow-[0_0_30px_rgba(79,70,229,0.4)]`}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <div className={`absolute inset-0 border border-white/5 rounded-2xl group-hover:border-white/20 transition-all ${activeTab === tab.id ? 'hidden' : ''}`}></div>
                <tab.icon size={20} className="relative z-10" />
                <span className="relative z-10">{tab.label}</span>
              </button>
            ))}
          </motion.div>
        </header>

        {/* Dynamic Content Grid */}
        <main className="min-h-[600px]">
          <AnimatePresence mode="wait">
            {activeTab === 'dashboard' && (
              <motion.section 
                key="dashboard"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-12"
              >
                <div className="flex items-center gap-4 border-l-4 border-indigo-600 pl-6">
                  <BookOpen className="text-indigo-500" size={28} />
                  <div>
                    <h2 className="text-3xl font-black text-white">Modul Inti</h2>
                    <p className="text-zinc-500 text-sm">Rumus-rumus yang telah disederhanakan secara logika.</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {mathData.map((item) => (
                    <FormulaCard key={item.id} data={item} />
                  ))}
                </div>
              </motion.section>
            )}

            {activeTab === 'guide' && (
               <motion.div 
                 key="guide"
                 initial={{ opacity: 0, x: 20 }}
                 animate={{ opacity: 1, x: 0 }}
                 exit={{ opacity: 0, x: -20 }}
               >
                  <StudyGuide />
               </motion.div>
            )}

            {activeTab === 'mastery' && (
               <motion.div 
                 key="mastery"
                 initial={{ opacity: 0, x: 20 }}
                 animate={{ opacity: 1, x: 0 }}
                 exit={{ opacity: 0, x: -20 }}
               >
                  <TheoryVault />
               </motion.div>
            )}
          </AnimatePresence>
        </main>

        {/* Footer Luxury */}
        <footer className="mt-40 pt-16 border-t border-white/5 space-y-12">
          <div className="grid md:grid-cols-3 gap-12 text-center md:text-left">
            <div className="space-y-4">
              <div className="flex items-center gap-2 justify-center md:justify-start">
                <GraduationCap className="text-indigo-500" size={24} />
                <span className="text-white font-black tracking-widest text-sm">EDUNOVA ACADEMY</span>
              </div>
              <p className="text-zinc-500 text-xs leading-relaxed uppercase tracking-wider">
                Menciptakan standar baru dalam pembelajaran digital untuk pelajar Indonesia.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center gap-2">
               <span className="text-[10px] font-black text-zinc-600 uppercase tracking-widest mb-2">Developed By</span>
               <div className="flex items-center gap-4">
                 <button className="p-3 bg-white/5 rounded-full border border-white/10 hover:bg-white/10 transition-all">
                    <Globe size={20} className="text-white" />
                 </button>
               </div>
            </div>
            <div className="flex flex-col items-center md:items-end justify-center text-zinc-500 text-[10px] font-bold uppercase tracking-widest">
              <span>© 2026 EduNova Platform</span>
              <span>All Rights Reserved</span>
            </div>
          </div>
          <div className="h-[2px] bg-gradient-to-r from-transparent via-indigo-600/50 to-transparent"></div>
        </footer>
      </div>
    </div>
  );
}
