'use client';
import React, { useState, useMemo } from 'react';
import { mathData, levels, levelColors, levelEmoji } from '@/data/MathData';
import FormulaCard from '@/components/FormulaCard';
import StudyGuide from '@/components/StudyGuide';
import TheoryVault from '@/components/TheoryVault';
import { BookOpen, GraduationCap, LayoutGrid, FileText, Search, ExternalLink } from 'lucide-react';

export default function Home() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [selectedLevel, setSelectedLevel] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState('');

  const filteredData = useMemo(() => {
    let data = mathData;
    if (selectedLevel !== "all") data = data.filter(m => m.level === selectedLevel);
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      data = data.filter(m =>
        m.title.toLowerCase().includes(q) ||
        m.subtitle.toLowerCase().includes(q) ||
        m.category.toLowerCase().includes(q)
      );
    }
    return data;
  }, [selectedLevel, searchQuery]);

  const tabs = [
    { id: 'dashboard', label: 'Semua Rumus', icon: LayoutGrid },
    { id: 'mastery', label: 'Mastery Mode', icon: GraduationCap },
    { id: 'guide', label: 'Panduan Belajar', icon: FileText },
  ];

  return (
    <div className="min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">

        {/* Header */}
        <header className="mb-12">
          <div className="flex items-center justify-between mb-8">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="mono text-xs text-neutral-600">v2.0</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                EduNova<span className="text-indigo-500">.</span>
              </h1>
              <p className="text-sm text-neutral-500 mt-1 max-w-lg">
                22 rumus matematika original — dari SD sampai Kuliah. Setiap metode dirancang baru untuk membuat matematika super gampang.
              </p>
            </div>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg border border-neutral-800 text-neutral-500 hover:text-white hover:border-neutral-600 transition-all"
            >
              <ExternalLink size={18} />
            </a>
          </div>

          {/* Nav tabs */}
          <div className="flex gap-1 p-1 bg-neutral-900 rounded-lg border border-neutral-800 w-fit">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-md text-xs font-semibold transition-all ${
                  activeTab === tab.id
                    ? 'bg-white text-black'
                    : 'text-neutral-500 hover:text-white'
                }`}
              >
                <tab.icon size={14} />
                {tab.label}
              </button>
            ))}
          </div>
        </header>

        {/* Dashboard Tab */}
        {activeTab === 'dashboard' && (
          <main className="animate-in">
            {/* Filters */}
            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              {/* Search */}
              <div className="relative flex-1">
                <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-600" />
                <input
                  type="text"
                  placeholder="Cari rumus..."
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  className="w-full bg-neutral-900 border border-neutral-800 rounded-lg pl-9 pr-4 py-2.5 text-sm text-white placeholder:text-neutral-700 focus:border-neutral-600 outline-none transition-colors"
                />
              </div>

              {/* Level pills */}
              <div className="flex gap-1.5 flex-wrap">
                <button
                  onClick={() => setSelectedLevel("all")}
                  className={`px-3 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all border ${
                    selectedLevel === "all" ? 'bg-white text-black border-white' : 'bg-neutral-900 text-neutral-600 border-neutral-800 hover:text-white'
                  }`}
                >
                  All ({mathData.length})
                </button>
                {levels.map(level => {
                  const c = levelColors[level];
                  const count = mathData.filter(m => m.level === level).length;
                  return (
                    <button
                      key={level}
                      onClick={() => setSelectedLevel(level)}
                      className={`px-3 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all border ${
                        selectedLevel === level
                          ? `${c.bg} ${c.text} ${c.border}`
                          : 'bg-neutral-900 text-neutral-600 border-neutral-800 hover:text-neutral-400'
                      }`}
                    >
                      {levelEmoji[level]} {level} ({count})
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
              {levels.map(level => {
                const c = levelColors[level];
                const count = mathData.filter(m => m.level === level).length;
                return (
                  <div key={level} className="card p-4 text-center">
                    <p className="text-2xl font-bold text-white mono">{count}</p>
                    <p className={`text-xs font-bold uppercase tracking-wider ${c.text}`}>{level}</p>
                  </div>
                );
              })}
            </div>

            {/* Cards */}
            {filteredData.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-neutral-600 text-sm">Tidak ada rumus ditemukan.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {filteredData.map(item => (
                  <FormulaCard key={item.id} data={item} />
                ))}
              </div>
            )}
          </main>
        )}

        {/* Mastery Tab */}
        {activeTab === 'mastery' && (
          <main className="animate-in">
            <TheoryVault />
          </main>
        )}

        {/* Guide Tab */}
        {activeTab === 'guide' && (
          <main className="animate-in">
            <StudyGuide />
          </main>
        )}

        {/* Footer */}
        <footer className="mt-20 pt-8 border-t border-neutral-800">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-600">
            <div className="flex items-center gap-2">
              <BookOpen size={14} />
              <span className="font-semibold">EduNova</span>
              <span>— Rumus Original untuk Semua Jenjang</span>
            </div>
            <div className="mono">© 2026 EduNova</div>
          </div>
        </footer>
      </div>
    </div>
  );
}
