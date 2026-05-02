'use client';
import React, { useState } from 'react';
import { mathData } from '@/data/MathData';
import FormulaCard from '@/components/FormulaCard';
import StudyGuide from '@/components/StudyGuide';
import TheoryVault from '@/components/TheoryVault';
import { BookOpen, Sparkles, GraduationCap, LayoutDashboard, FileText, ShieldCheck } from 'lucide-react';

export default function Home() {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-blue-500/30">
      <div className={`container mx-auto px-6 py-12 transition-all duration-500 ${activeTab === 'mastery' ? 'max-w-7xl' : 'max-w-5xl'}`}>
        
        {/* Header Section */}
        <header className="text-center mb-16 mt-8 space-y-6">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 px-4 py-2 rounded-full text-blue-500 text-xs font-bold tracking-wider animate-pulse">
            <Sparkles size={16} />
            PLATFORM BELAJAR SMA MASA DEPAN
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter bg-gradient-to-b from-white to-zinc-500 bg-clip-text text-transparent">
            EduNova Math
          </h1>
          
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Konsep inti Matematika SMA dengan logika yang jauh lebih simpel, akurat, dan dirancang untuk pemahaman maksimal.
          </p>

          {/* Navigation Tabs */}
          <div className="flex flex-wrap justify-center gap-3 pt-4">
            <button 
              onClick={() => setActiveTab('dashboard')}
              className={`flex items-center gap-2 px-6 py-3 rounded-2xl text-sm font-bold transition-all duration-300 border ${
                activeTab === 'dashboard' 
                ? 'bg-blue-600 border-blue-500 text-white shadow-lg shadow-blue-900/20' 
                : 'bg-zinc-900/50 border-white/5 text-zinc-500 hover:border-white/10'
              }`}
            >
              <LayoutDashboard size={18} />
              Dashboard Rumus
            </button>
            <button 
              onClick={() => setActiveTab('guide')}
              className={`flex items-center gap-2 px-6 py-3 rounded-2xl text-sm font-bold transition-all duration-300 border ${
                activeTab === 'guide' 
                ? 'bg-purple-600 border-purple-500 text-white shadow-lg shadow-purple-900/20' 
                : 'bg-zinc-900/50 border-white/5 text-zinc-500 hover:border-white/10'
              }`}
            >
              <FileText size={18} />
              Panduan Belajar
            </button>
            <button 
              onClick={() => setActiveTab('mastery')}
              className={`flex items-center gap-2 px-6 py-3 rounded-2xl text-sm font-bold transition-all duration-300 border ${
                activeTab === 'mastery' 
                ? 'bg-amber-600 border-amber-500 text-white shadow-lg shadow-amber-900/20' 
                : 'bg-zinc-900/50 border-white/5 text-zinc-500 hover:border-white/10'
              }`}
            >
              <ShieldCheck size={18} />
              Mastery Vault
            </button>
          </div>
        </header>

        {/* Main Content */}
        <main className="pb-24">
          {activeTab === 'dashboard' && (
            <section className="animate-in fade-in slide-in-from-bottom-4 duration-700">
              <div className="flex items-center gap-3 mb-10">
                <BookOpen className="text-blue-500" />
                <h2 className="text-2xl font-black uppercase tracking-widest text-zinc-300">Core Modules</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {mathData.map((item) => (
                  <FormulaCard key={item.id} data={item} />
                ))}
              </div>
            </section>
          )}

          {activeTab === 'guide' && (
             <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
                <StudyGuide />
             </div>
          )}

          {activeTab === 'mastery' && (
             <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
                <TheoryVault />
             </div>
          )}
        </main>

        {/* Footer */}
        <footer className="text-center py-12 border-t border-white/5 text-zinc-500 text-sm space-y-4">
          <div className="flex justify-center items-center gap-2">
            <GraduationCap className="text-white" size={20} />
            <span className="text-white font-bold tracking-widest uppercase text-[10px]">EduNova Academy</span>
          </div>
          <p>© 2026 EduNova. Designed for maximum intelligence.</p>
        </footer>
      </div>
    </div>
  );
}
