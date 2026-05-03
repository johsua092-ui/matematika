import { MathItem } from './types';

export const kuliahFormulas: MathItem[] = [
  {
    id: "metode-apit-limit",
    title: "Metode Apit Limit",
    subtitle: "Limit = Mendekati, Bukan Menyentuh",
    category: "Kalkulus",
    level: "Kuliah",
    difficulty: 4,
    formula: "\\lim_{x \\to a} f(x) = L \\;\\Leftrightarrow\\; f(a^-) = f(a^+) = L",
    formulaExplain: "Limit = nilai yang didekati dari kiri dan kanan. Jika keduanya sama, limit ada.",
    logic: "Jangan substitusi langsung — dekati dari 2 arah. Jika bertemu di titik yang sama, itulah limit.",
    why: "Substitusi langsung sering menghasilkan 0/0 (tak tentu). Metode Apit menghindari jebakan ini.",
    steps: [
      "Substitusi langsung. Jika hasilnya jelas → selesai",
      "Jika 0/0: faktorisasi pembilang dan penyebut",
      "Coret faktor yang sama",
      "Substitusi ulang ke bentuk yang sudah disederhanakan"
    ],
    mustWrite: true,
    notebook: [
      { title: "Pola Limit Penting", content: [
        "lim (x→a) [xⁿ-aⁿ]/(x-a) = n×aⁿ⁻¹",
        "lim (x→0) sin(x)/x = 1",
        "lim (x→∞) (1+1/n)ⁿ = e ≈ 2.718",
        "Jika 0/0 → faktorisasi atau L'Hôpital"
      ], formula: "\\lim_{x\\to 0}\\frac{\\sin x}{x} = 1", important: true }
    ],
    teaching: {
      prerequisites: ["Fungsi f(x)","Substitusi nilai","Faktorisasi"],
      analogy: "Bayangkan kamu jalan ke arah tembok dari kiri dan temanmu dari kanan. Limit = titik di tembok yang kalian berdua tuju. Kalau kalian menuju titik yang sama → limit ada!",
      stepsFromZero: ["Fungsi f(x) = mesin yang mengubah input x menjadi output","Limit = apa output-nya MENDEKATI saat x mendekati nilai tertentu","Bukan 'berapa f(a)', tapi 'berapa f mendekati saat x → a'","Kadang f(a) tidak ada (lubang) tapi limitnya ada","Cek dari kiri dan kanan — kalau sama, itulah limit"],
      ahaMoment: "Limit bukan tentang 'sampai' tapi tentang 'mendekati' — seperti kamu bisa mendekati tembok tanpa menabraknya!"
    },
    progressiveExamples: [
      { level: 1, levelName: "Pemanasan", question: "lim (x→2) 3x + 1 = ?", solution: ["Substitusi: 3(2)+1 = 7"], answer: "7" },
      { level: 2, levelName: "Latihan", question: "lim (x→1) (x²-1)/(x-1) = ?", solution: ["0/0! Faktorisasi: (x-1)(x+1)/(x-1)","Coret (x-1): lim x+1 = 2"], answer: "2" },
      { level: 3, levelName: "Tantangan", question: "lim (x→3) (x²-9)/(x-3) = ?", solution: ["0/0! Faktorisasi: (x-3)(x+3)/(x-3)","Coret: lim x+3 = 6"], answer: "6" },
      { level: 4, levelName: "Ujian", question: "lim (x→0) sin(3x)/x = ?", solution: ["Kalikan 3/3: 3×sin(3x)/(3x)","lim sin(3x)/(3x) = 1","Jawaban: 3×1 = 3"], answer: "3" },
      { level: 5, levelName: "Olimpiade", question: "lim (x→∞) (3x²+2x)/(x²+1) = ?", solution: ["Bagi semua dengan x²:","(3+2/x)/(1+1/x²)","Saat x→∞: 2/x→0, 1/x²→0","= 3/1 = 3"], answer: "3" }
    ],
    interactive: false
  },
  {
    id: "metode-tepuk-turunan",
    title: "Metode Tepuk Turunan",
    subtitle: "Power Rule = Tepuk Pangkat ke Depan",
    category: "Kalkulus",
    level: "Kuliah",
    difficulty: 4,
    formula: "\\frac{d}{dx}[x^n] = n \\cdot x^{n-1}",
    formulaExplain: "Tepuk pangkat ke depan sebagai koefisien, lalu kurangi pangkat 1.",
    logic: "Turunan itu cuma 'tepuk dan kurangi'. Pangkat turun ke depan, dan dikurangi 1. Selesai.",
    why: "Turunan diajarkan dari definisi limit yang panjang. Padahal 95% soal cuma butuh Power Rule — yang super simpel.",
    steps: [
      "Lihat pangkat (n)",
      "Tepuk ke depan: jadikan koefisien (×n)",
      "Kurangi pangkat: n → n-1",
      "Untuk jumlah suku: turunkan masing-masing"
    ],
    mustWrite: true,
    notebook: [
      { title: "Tabel Turunan Wajib", content: [
        "d/dx [xⁿ] = nxⁿ⁻¹ (Power Rule)",
        "d/dx [konstanta] = 0",
        "d/dx [sin x] = cos x",
        "d/dx [cos x] = -sin x",
        "d/dx [eˣ] = eˣ",
        "d/dx [ln x] = 1/x"
      ], formula: "\\frac{d}{dx}[x^n] = nx^{n-1}", important: true },
      { title: "Aturan Rantai", content: [
        "d/dx [f(g(x))] = f'(g(x)) × g'(x)",
        "Turunkan luar, kali turunan dalam"
      ], important: true }
    ],
    teaching: {
      prerequisites: ["Eksponen/pangkat","Konsep fungsi"],
      analogy: "Bayangkan angka pangkat duduk di atas kursi tinggi. 'Tepuk!' — dia jatuh ke depan (jadi koefisien). Kursinya jadi lebih pendek 1 tingkat (pangkat berkurang).",
      stepsFromZero: ["Turunan = laju perubahan fungsi","Kalau f(x) = jarak, f'(x) = kecepatan","Untuk f(x) = xⁿ, turunannya = nxⁿ⁻¹","Contoh: f(x) = x³ → f'(x) = 3x²","Bayangkan: pangkat 3 'tepuk' ke depan, jadi 3. Pangkat turun ke 2."],
      ahaMoment: "Turunan bukan ilmu roket — cuma 'tepuk pangkat ke depan dan kurangi satu'!"
    },
    progressiveExamples: [
      { level: 1, levelName: "Pemanasan", question: "f(x) = x³. f'(x) = ?", solution: ["Tepuk 3 ke depan: 3x","Kurangi pangkat: 3-1=2","f'(x) = 3x²"], answer: "3x²" },
      { level: 2, levelName: "Latihan", question: "f(x) = 5x⁴ - 3x² + 2. f'(x) = ?", solution: ["5x⁴ → 20x³","−3x² → −6x","2 → 0 (konstanta)","f'(x) = 20x³ - 6x"], answer: "20x³ - 6x" },
      { level: 3, levelName: "Tantangan", question: "f(x) = √x = x^(1/2). f'(x) = ?", solution: ["Tepuk ½: (1/2)x","Kurangi pangkat: 1/2-1 = -1/2","f'(x) = (1/2)x^(-1/2) = 1/(2√x)"], answer: "1/(2√x)" },
      { level: 4, levelName: "Ujian", question: "f(x) = (3x+1)⁵. f'(x) = ?", solution: ["Aturan rantai!","Luar: u⁵ → 5u⁴","Dalam: 3x+1 → 3","f'(x) = 5(3x+1)⁴ × 3 = 15(3x+1)⁴"], answer: "15(3x+1)⁴" },
      { level: 5, levelName: "Olimpiade", question: "f(x) = x²·sin(x). f'(x) = ?", solution: ["Product rule: f'= u'v + uv'","u=x² → u'=2x","v=sin(x) → v'=cos(x)","f'(x) = 2x·sin(x) + x²·cos(x)"], answer: "2x·sin(x) + x²·cos(x)" }
    ],
    interactive: false
  },
  {
    id: "metode-balok-integral",
    title: "Metode Balok Integral",
    subtitle: "Integral = Turunan Dibalik + Tambah C",
    category: "Kalkulus",
    level: "Kuliah",
    difficulty: 5,
    formula: "\\int x^n\\,dx = \\frac{x^{n+1}}{n+1} + C",
    formulaExplain: "Naikkan pangkat 1, bagi dengan pangkat baru, tambah konstanta C.",
    logic: "Integral = kebalikan turunan. Jika turunan 'tepuk ke bawah', integral 'angkat ke atas'.",
    why: "Integral terdengar menakutkan. Tapi 90% soal integral cuma Power Rule dibalik!",
    steps: [
      "Naikkan pangkat: n → n+1",
      "Bagi dengan pangkat baru: ÷(n+1)",
      "Tambahkan +C (konstanta integrasi)",
      "Untuk integral tentu: substitusi batas atas dikurangi batas bawah"
    ],
    mustWrite: true,
    notebook: [
      { title: "Tabel Integral Wajib", content: [
        "∫ xⁿ dx = xⁿ⁺¹/(n+1) + C",
        "∫ 1/x dx = ln|x| + C",
        "∫ sin x dx = -cos x + C",
        "∫ cos x dx = sin x + C",
        "∫ eˣ dx = eˣ + C"
      ], formula: "\\int x^n dx = \\frac{x^{n+1}}{n+1} + C", important: true }
    ],
    teaching: {
      prerequisites: ["Turunan (Power Rule)","Konsep luas"],
      analogy: "Turunan = memecah kue jadi irisan. Integral = menyusun irisan kembali jadi kue utuh. Kamu sudah bisa memecah (turunan), sekarang tinggal balik prosesnya!",
      stepsFromZero: ["Integral = anti-turunan (kebalikan)","Jika turunan x³ = 3x², maka integral 3x² = x³","Rumus: naikkan pangkat 1, bagi pangkat baru","Tambah +C karena banyak fungsi yang turunannya sama","Integral tentu (pakai batas) = luas di bawah kurva"],
      ahaMoment: "Kalau kamu bisa turunan, kamu PASTI bisa integral — tinggal dibalik saja!"
    },
    progressiveExamples: [
      { level: 1, levelName: "Pemanasan", question: "∫ x² dx = ?", solution: ["Pangkat 2 naik jadi 3","Bagi 3: x³/3","Tambah C: x³/3 + C"], answer: "x³/3 + C" },
      { level: 2, levelName: "Latihan", question: "∫ (3x² + 2x) dx = ?", solution: ["3x²→3(x³/3)=x³","2x→2(x²/2)=x²","Hasil: x³ + x² + C"], answer: "x³ + x² + C" },
      { level: 3, levelName: "Tantangan", question: "∫₀² x² dx = ?", solution: ["Anti-turunan: x³/3","F(2)-F(0) = 8/3 - 0 = 8/3"], answer: "8/3" },
      { level: 4, levelName: "Ujian", question: "∫ (1/x²) dx = ∫ x⁻² dx = ?", solution: ["Pangkat -2 naik jadi -1","Bagi -1: x⁻¹/(-1) = -1/x","Hasil: -1/x + C"], answer: "-1/x + C" },
      { level: 5, levelName: "Olimpiade", question: "∫₀^π sin(x) dx = ?", solution: ["Anti-turunan sin = -cos","F(π)-F(0) = -cos(π)-(-cos(0))","= -(-1)-(-1) = 1+1 = 2"], answer: "2" }
    ],
    interactive: false
  },
  {
    id: "metode-penggaris-z",
    title: "Metode Penggaris Z-Score",
    subtitle: "Seberapa 'Aneh' Sebuah Data?",
    category: "Statistika",
    level: "Kuliah",
    difficulty: 4,
    formula: "z = \\frac{x - \\mu}{\\sigma}",
    formulaExplain: "Z-score = berapa standar deviasi jauhnya data dari rata-rata. Seperti mengukur pakai penggaris σ.",
    logic: "Z-score mengubah semua data ke skala yang sama. z=0 artinya rata-rata, z=2 artinya sangat tinggi.",
    why: "Tanpa z-score, kamu tidak bisa bandingkan nilai ujian Matematika (rata-rata 60) dengan Bahasa (rata-rata 75). Z-score menyamakan mereka.",
    steps: [
      "Hitung rata-rata (μ) dari data",
      "Hitung standar deviasi (σ)",
      "Untuk setiap data x: z = (x - μ) / σ",
      "Interpretasi: |z|<1 normal, |z|>2 langka, |z|>3 sangat langka"
    ],
    mustWrite: true,
    notebook: [
      { title: "Interpretasi Z-Score", content: [
        "z = 0: tepat di rata-rata",
        "|z| < 1: normal (68% data ada di sini)",
        "|z| < 2: masih wajar (95% data)",
        "|z| > 2: langka (hanya 5%)",
        "|z| > 3: sangat langka (0.3%)"
      ], formula: "z = \\frac{x - \\mu}{\\sigma}", important: true }
    ],
    teaching: {
      prerequisites: ["Rata-rata (mean)","Konsep penyebaran data"],
      analogy: "Bayangkan kamu punya penggaris spesial yang satuannya σ (standar deviasi). Titik 0 = rata-rata kelas. Nilaimu ada di angka berapa di penggaris itu? Itulah z-score-mu!",
      stepsFromZero: ["Rata-rata (μ) = jumlah semua data ÷ banyak data","Standar deviasi (σ) = seberapa 'tersebar' data dari rata-rata","Z-score = jarakmu dari rata-rata, diukur pakai satuan σ","z positif = di atas rata-rata, z negatif = di bawah rata-rata","z = 1.5 artinya kamu 1.5 standar deviasi di atas rata-rata"],
      ahaMoment: "Z-score itu cuma jarak ke rata-rata diukur pakai penggaris khusus — bukan rumus menakutkan!"
    },
    progressiveExamples: [
      { level: 1, levelName: "Pemanasan", question: "μ=70, σ=10. Nilaimu 80. Z-score?", solution: ["z = (80-70)/10 = 1"], answer: "z = 1" },
      { level: 2, levelName: "Latihan", question: "μ=500, σ=100. Nilaimu 720. Z-score?", solution: ["z = (720-500)/100 = 2.2","Kamu di atas 97.7% orang!"], answer: "z = 2.2" },
      { level: 3, levelName: "Tantangan", question: "μ=65, σ=8. Berapa nilai minimal untuk z ≥ 1.5?", solution: ["1.5 = (x-65)/8","x = 65 + 1.5×8 = 65+12 = 77"], answer: "x = 77" },
      { level: 4, levelName: "Ujian", question: "Matematika: 75 (μ=60,σ=10). Fisika: 85 (μ=70,σ=12). Mana lebih baik?", solution: ["z_mat = (75-60)/10 = 1.5","z_fis = (85-70)/12 = 1.25","Matematika lebih baik (z lebih tinggi)!"], answer: "Matematika (z=1.5 > 1.25)" },
      { level: 5, levelName: "Olimpiade", question: "Data: 12,15,18,22,33. Apakah 33 outlier?", solution: ["μ = 100/5 = 20","σ = √[(64+25+4+4+169)/5] = √53.2 ≈ 7.29","z_33 = (33-20)/7.29 ≈ 1.78","|z|<2, jadi 33 bukan outlier (tapi borderline)"], answer: "z ≈ 1.78, bukan outlier" }
    ],
    interactive: true, inputs: ["x","mu","sigma"], inputLabels: ["Nilai (x)","Rata-rata (μ)","Std Dev (σ)"],
    solve: (i) => i.sigma !== 0 ? Math.round((i.x - i.mu) / i.sigma * 1000) / 1000 : "Error: σ=0"
  },
  {
    id: "metode-kompas-vektor",
    title: "Metode Kompas Vektor",
    subtitle: "Vektor = Arah + Jarak, Seperti Kompas",
    category: "Aljabar Linear",
    level: "Kuliah",
    difficulty: 4,
    formula: "\\vec{a} \\cdot \\vec{b} = |\\vec{a}||\\vec{b}|\\cos\\theta",
    formulaExplain: "Dot product = seberapa 'sejajar' dua vektor. cos 0°=1 (sejajar penuh), cos 90°=0 (tegak lurus).",
    logic: "Vektor bukan cuma angka dalam kurung. Vektor = anak panah dengan arah dan panjang. Dot product = ukuran kesejajarannya.",
    why: "Vektor diajarkan sebagai operasi angka abstrak. Metode Kompas mengembalikan intuisi geometrinya.",
    steps: [
      "Vektor = (x, y) = arah kompas dengan panjang",
      "Panjang: |v| = √(x² + y²)",
      "Dot product: a·b = a₁b₁ + a₂b₂",
      "Sudut: cos θ = (a·b) / (|a|×|b|)"
    ],
    mustWrite: true,
    notebook: [
      { title: "Operasi Vektor", content: [
        "Penjumlahan: (a₁,a₂) + (b₁,b₂) = (a₁+b₁, a₂+b₂)",
        "Panjang: |v| = √(x²+y²)",
        "Dot product: a·b = a₁b₁ + a₂b₂",
        "Cross product (3D): a×b = (a₂b₃-a₃b₂, a₃b₁-a₁b₃, a₁b₂-a₂b₁)"
      ], formula: "\\vec{a} \\cdot \\vec{b} = a_1b_1 + a_2b_2", important: true }
    ],
    teaching: {
      prerequisites: ["Koordinat (x,y)","Teorema Pythagoras","Trigonometri dasar"],
      analogy: "Bayangkan kamu pegang kompas. Vektor = arah jarummu (Utara, Timur Laut, dll) + seberapa jauh kamu jalan. Dot product = seberapa sejajar dua orang berjalan.",
      stepsFromZero: ["Angka biasa (skalar) cuma punya nilai: 5, -3, 7.2","Vektor punya nilai DAN arah: '5 langkah ke timur'","Ditulis: (x,y) dimana x=timur-barat, y=utara-selatan","(3,4) = 3 langkah timur, 4 langkah utara","Panjangnya: √(9+16) = 5 langkah total"],
      ahaMoment: "Vektor bukan abstraksi — cuma instruksi jalan: 'jalan sekian ke arah sana'!"
    },
    progressiveExamples: [
      { level: 1, levelName: "Pemanasan", question: "Panjang vektor (3,4)?", solution: ["|v| = √(9+16) = √25 = 5"], answer: "5" },
      { level: 2, levelName: "Latihan", question: "(2,3) + (4,1) = ?", solution: ["(2+4, 3+1) = (6, 4)"], answer: "(6, 4)" },
      { level: 3, levelName: "Tantangan", question: "Dot product (1,2)·(3,4) = ?", solution: ["1×3 + 2×4 = 3+8 = 11"], answer: "11" },
      { level: 4, levelName: "Ujian", question: "Sudut antara (1,0) dan (1,1)?", solution: ["a·b = 1×1+0×1 = 1","|a|=1, |b|=√2","cos θ = 1/√2 → θ = 45°"], answer: "45°" },
      { level: 5, levelName: "Olimpiade", question: "Apakah (2,-1) dan (3,6) tegak lurus?", solution: ["Dot product: 2×3 + (-1)×6 = 6-6 = 0","Dot product = 0 → tegak lurus! ✓"], answer: "Ya, tegak lurus (dot=0)" }
    ],
    interactive: true, inputs: ["x1","y1","x2","y2"], inputLabels: ["a₁","a₂","b₁","b₂"],
    solve: (i) => i.x1*i.x2 + i.y1*i.y2
  }
];
