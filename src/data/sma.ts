import { MathItem } from './types';

export const smaFormulas: MathItem[] = [
  {
    id: "metode-jam-trigo",
    title: "Metode Jam Trigonometri",
    subtitle: "Semua Nilai Sin/Cos/Tan dari Jam Dinding",
    category: "Trigonometri",
    level: "SMA",
    difficulty: 3,
    formula: "\\sin\\theta = \\frac{\\sqrt{n}}{2}, \\quad n = \\text{posisi jam}",
    formulaExplain: "Posisi jam → nilai sin/cos. 0°=jam 3 (sin=√0/2=0), 30°(√1/2), 45°(√2/2), 60°(√3/2), 90°(√4/2=1)",
    logic: "Nilai sin untuk sudut standar mengikuti pola √0, √1, √2, √3, √4 dibagi 2. Cos = kebalikan urutannya.",
    why: "Menghafal tabel trigonometri itu menyiksa. Metode Jam membuat semua nilai bisa diturunkan dalam detik.",
    steps: [
      "Ingat urutan sudut: 0°, 30°, 45°, 60°, 90°",
      "Sin naik: √0/2, √1/2, √2/2, √3/2, √4/2",
      "Cos turun: √4/2, √3/2, √2/2, √1/2, √0/2 (kebalikan sin)",
      "Tan = Sin/Cos"
    ],
    mustWrite: true,
    notebook: [
      { title: "Tabel Jam Trigo — WAJIB HAFAL", content: [
        "sin 0° = 0 | cos 0° = 1 | tan 0° = 0",
        "sin 30° = ½ | cos 30° = ½√3 | tan 30° = ⅓√3",
        "sin 45° = ½√2 | cos 45° = ½√2 | tan 45° = 1",
        "sin 60° = ½√3 | cos 60° = ½ | tan 60° = √3",
        "sin 90° = 1 | cos 90° = 0 | tan 90° = ∞"
      ], important: true },
      { title: "Pola Cepat", content: [
        "Sin: naik → √0, √1, √2, √3, √4 (semua dibagi 2)",
        "Cos: turun → √4, √3, √2, √1, √0 (semua dibagi 2)",
        "Kuadran: I semua +, II sin+, III tan+, IV cos+"
      ], important: true }
    ],
    teaching: {
      prerequisites: ["Konsep sudut (derajat)","Akar kuadrat sederhana"],
      analogy: "Bayangkan jam dinding. Jarum jam di angka 3 = 0°. Bergerak ke 12 = 90°. Setiap posisi punya 'tinggi' (sin) dan 'lebar' (cos) tertentu.",
      stepsFromZero: ["Trigonometri = hubungan antara sudut dan sisi segitiga","Sin = sisi depan / sisi miring","Cos = sisi samping / sisi miring","Untuk sudut standar, nilainya mengikuti pola √n/2","n naik dari 0 sampai 4 untuk sin (0° sampai 90°)"],
      ahaMoment: "Sin dan Cos itu cuma √0,√1,√2,√3,√4 dibagi 2 — selesai, tidak perlu hafal tabel!"
    },
    progressiveExamples: [
      { level: 1, levelName: "Pemanasan", question: "sin 30° = ?", solution: ["Posisi ke-2 di urutan (0°,30°,45°,60°,90°)","sin 30° = √1/2 = 1/2"], answer: "1/2" },
      { level: 2, levelName: "Latihan", question: "cos 60° = ?", solution: ["Cos = kebalikan sin. Posisi 60° di sin = ke-4 → di cos = ke-2","cos 60° = √1/2 = 1/2"], answer: "1/2" },
      { level: 3, levelName: "Tantangan", question: "sin 120° = ?", solution: ["120° = 180° - 60° (kuadran II)","Sin di kuadran II = positif","sin 120° = sin 60° = √3/2"], answer: "√3/2" },
      { level: 4, levelName: "Ujian", question: "cos 225° = ?", solution: ["225° = 180° + 45° (kuadran III)","Cos di kuadran III = negatif","cos 225° = -cos 45° = -√2/2"], answer: "-√2/2" },
      { level: 5, levelName: "Olimpiade", question: "sin²60° + cos²60° = ?", solution: ["sin 60° = √3/2 → sin²60° = 3/4","cos 60° = 1/2 → cos²60° = 1/4","3/4 + 1/4 = 1 (identitas Pythagoras!)"], answer: "1" }
    ],
    interactive: true, inputs: ["deg"], inputLabels: ["Sudut (derajat)"],
    solve: (i) => Math.round(Math.sin(i.deg * Math.PI / 180) * 10000) / 10000
  },
  {
    id: "metode-vertex-instan",
    title: "Metode Rata-Rata Akar",
    subtitle: "Titik Puncak Parabola Tanpa Rumus Ribet",
    category: "Fungsi Kuadrat",
    level: "SMA",
    difficulty: 3,
    formula: "x_v = \\frac{x_1 + x_2}{2} = -\\frac{b}{2a}",
    formulaExplain: "Titik puncak selalu di TENGAH kedua akar. Rata-ratakan akar → substitusi → selesai.",
    logic: "Parabola itu simetris. Puncaknya PASTI di tengah-tengah kedua titik potong sumbu x.",
    why: "Rumus -b/2a sering dihafalkan tanpa paham kenapa. Metode ini menjelaskan: puncak = titik tengah akar.",
    steps: [
      "Cari kedua akar: x₁ dan x₂ (faktorisasi/abc)",
      "Rata-ratakan: xᵥ = (x₁+x₂)/2",
      "Substitusi xᵥ ke persamaan untuk dapat yᵥ",
      "Titik puncak = (xᵥ, yᵥ)"
    ],
    mustWrite: true,
    notebook: [
      { title: "Vertex = Tengah Akar", content: [
        "Untuk y = ax²+bx+c:",
        "xᵥ = -b/(2a) = rata-rata kedua akar",
        "yᵥ = a(xᵥ)² + b(xᵥ) + c",
        "Jika a > 0: parabola buka ke atas (minimum)",
        "Jika a < 0: parabola buka ke bawah (maksimum)"
      ], formula: "x_v = -\\frac{b}{2a}", important: true }
    ],
    teaching: {
      prerequisites: ["Persamaan kuadrat","Faktorisasi atau rumus ABC"],
      analogy: "Lempar bola ke atas. Titik tertinggi (puncak) PASTI di tengah-tengah antara saat bola dilempar dan saat jatuh. Itulah vertex.",
      stepsFromZero: ["Fungsi kuadrat y=ax²+bx+c menghasilkan kurva parabola","Parabola punya titik tertinggi/terendah = vertex","Karena simetris, vertex ada di tengah kedua akar","Akar = nilai x saat y=0 (kurva menyentuh sumbu x)","Rata-ratakan kedua akar → dapat x vertex → substitusi → dapat y vertex"],
      ahaMoment: "Vertex bukan rumus hafalan — tapi fakta geometri: puncak SELALU di tengah!"
    },
    progressiveExamples: [
      { level: 1, levelName: "Pemanasan", question: "y = x²-4x+3. Vertex?", solution: ["Akar: (x-1)(x-3)=0 → x=1,3","xᵥ = (1+3)/2 = 2","yᵥ = 4-8+3 = -1","Vertex: (2,-1)"], answer: "(2, -1)" },
      { level: 2, levelName: "Latihan", question: "y = x²-6x+5. Vertex?", solution: ["Akar: (x-1)(x-5)=0 → x=1,5","xᵥ = (1+5)/2 = 3","yᵥ = 9-18+5 = -4","Vertex: (3,-4)"], answer: "(3, -4)" },
      { level: 3, levelName: "Tantangan", question: "y = 2x²+8x+6. Vertex?", solution: ["xᵥ = -8/(2×2) = -2","yᵥ = 2(4)+8(-2)+6 = 8-16+6 = -2","Vertex: (-2,-2)"], answer: "(-2, -2)" },
      { level: 4, levelName: "Ujian", question: "y = -x²+4x+5. Maksimum?", solution: ["a=-1 (buka bawah → ada maksimum)","xᵥ = -4/(2×-1) = 2","yᵥ = -(4)+8+5 = 9","Vertex: (2,9), Maks = 9"], answer: "Maksimum = 9 di x = 2" },
      { level: 5, levelName: "Olimpiade", question: "Bola dilempar: h=-5t²+20t+1. Tinggi maks?", solution: ["a=-5, b=20, c=1","tᵥ = -20/(2×-5) = 2 detik","hᵥ = -5(4)+20(2)+1 = -20+40+1 = 21","Tinggi maks = 21 meter"], answer: "21 meter (t=2s)" }
    ],
    interactive: true, inputs: ["a","b","c"], inputLabels: ["a","b","c"],
    solve: (i) => { const xv = -i.b/(2*i.a); const yv = i.a*xv*xv+i.b*xv+i.c; return `(${Math.round(xv*100)/100}, ${Math.round(yv*100)/100})`; }
  },
  {
    id: "metode-tangga-log",
    title: "Metode Tangga Log",
    subtitle: "Logaritma = Menghitung Anak Tangga",
    category: "Logaritma",
    level: "SMA",
    difficulty: 4,
    formula: "\\log_a b = n \\;\\Leftrightarrow\\; a^n = b",
    formulaExplain: "Log base a dari b = berapa kali kamu naik tangga (×a) dari 1 sampai b.",
    logic: "Logaritma bukan operasi misterius — cuma menghitung langkah tangga dari 1 ke target.",
    why: "Siswa takut logaritma karena diajarkan sebagai 'kebalikan eksponen'. Metode Tangga menjelaskan secara visual.",
    steps: [
      "Mulai dari 1",
      "Naik tangga: kalikan a setiap langkah",
      "Hitung berapa langkah sampai ke b",
      "Jumlah langkah = log_a(b)"
    ],
    mustWrite: true,
    notebook: [
      { title: "Sifat Tangga Log", content: [
        "log(a×b) = log a + log b (naik tangga a LALU naik tangga b)",
        "log(a/b) = log a - log b (naik lalu turun)",
        "log(aⁿ) = n×log a (naik n kali lipat)",
        "log_a(a) = 1 (satu langkah)",
        "log_a(1) = 0 (tidak bergerak)"
      ], formula: "\\log(ab) = \\log a + \\log b", important: true }
    ],
    teaching: {
      prerequisites: ["Eksponen (pangkat)","Perkalian berulang"],
      analogy: "Kamu di lantai 1 gedung. Setiap naik 1 tangga = dikalikan basis. log₂(8): mulai dari 1, naik ×2 → 2, naik ×2 → 4, naik ×2 → 8. Butuh 3 tangga. Jadi log₂(8) = 3.",
      stepsFromZero: ["Eksponen: 2³ = 8 artinya 2 dikali sendiri 3 kali","Logaritma: 'berapa kali 2 dikali sendiri supaya jadi 8?' → 3","log₂(8) = 3 karena 2³ = 8","Logaritma = KEBALIKAN eksponen","Bukan hal baru — cuma cara bertanya yang beda!"],
      ahaMoment: "Log itu cuma bertanya 'berapa anak tangga?' — yang selama ini kamu sudah bisa jawab!"
    },
    progressiveExamples: [
      { level: 1, levelName: "Pemanasan", question: "log₂(8) = ?", solution: ["2¹=2, 2²=4, 2³=8","3 langkah → jawaban = 3"], answer: "3" },
      { level: 2, levelName: "Latihan", question: "log₁₀(1000) = ?", solution: ["10¹=10, 10²=100, 10³=1000","3 langkah → jawaban = 3"], answer: "3" },
      { level: 3, levelName: "Tantangan", question: "log₃(81) = ?", solution: ["3¹=3, 3²=9, 3³=27, 3⁴=81","4 langkah → jawaban = 4"], answer: "4" },
      { level: 4, levelName: "Ujian", question: "log₂(32) + log₂(4) = ?", solution: ["log₂(32) = 5 (2⁵=32)","log₂(4) = 2 (2²=4)","5 + 2 = 7","Cek: log₂(128) = 7 ✓ (karena 32×4=128)"], answer: "7" },
      { level: 5, levelName: "Olimpiade", question: "Jika log₂(x) + log₂(x-2) = 3, cari x", solution: ["log₂(x(x-2)) = 3","x(x-2) = 2³ = 8","x²-2x-8=0 → (x-4)(x+2)=0","x=4 (x=-2 ditolak karena log negatif)"], answer: "x = 4" }
    ],
    interactive: true, inputs: ["base","num"], inputLabels: ["Basis","Angka"],
    solve: (i) => i.base > 0 && i.base !== 1 && i.num > 0 ? Math.round(Math.log(i.num)/Math.log(i.base)*1000)/1000 : "Error"
  },
  {
    id: "metode-kupu-kupu-matriks",
    title: "Metode Kupu-Kupu",
    subtitle: "Determinan Matriks dalam 5 Detik",
    category: "Matriks",
    level: "SMA",
    difficulty: 4,
    formula: "\\det\\begin{pmatrix}a&b\\\\c&d\\end{pmatrix} = ad - bc",
    formulaExplain: "Kalikan diagonal utama (↘) dikurangi diagonal silang (↗). Bentuknya seperti sayap kupu-kupu.",
    logic: "Determinan cuma 2 perkalian dan 1 pengurangan. Pola kupu-kupu membuatnya visual dan tak terlupakan.",
    why: "Matriks terlihat menakutkan karena bentuknya kotak-kotak. Dengan pola kupu-kupu, determinan jadi refleks.",
    steps: [
      "Gambar diagonal ↘ (kiri-atas ke kanan-bawah): kalikan → ad",
      "Gambar diagonal ↗ (kiri-bawah ke kanan-atas): kalikan → bc",
      "Kurangi: ad - bc",
      "Untuk 3×3: gunakan metode Sarrus (3 kupu-kupu)"
    ],
    mustWrite: true,
    notebook: [
      { title: "Pola Kupu-Kupu 2×2", content: [
        "|a b| = ad - bc",
        "|c d|",
        "Diagonal ↘ (utama) MINUS diagonal ↗ (silang)"
      ], formula: "\\det(A) = ad - bc", important: true },
      { title: "Invers 2×2", content: [
        "A⁻¹ = (1/det) × [d, -b / -c, a]",
        "Tukar diagonal utama, negatifkan diagonal silang, bagi det"
      ], important: true }
    ],
    teaching: {
      prerequisites: ["Perkalian bilangan bulat","Konsep tabel/grid"],
      analogy: "Matriks itu tabel angka. Determinan = 'DNA' matriks — satu angka yang merangkum semua informasi. Pola kupu-kupu = cara baca DNA-nya.",
      stepsFromZero: ["Matriks = tabel angka berukuran m×n","Matriks 2×2 punya 4 angka: a,b,c,d","Determinan = ukuran 'kekuatan' matriks","Cara hitung: kalikan diagonal ↘, kurangi diagonal ↗","Jika det=0, matriks 'lemah' (singular, tidak punya invers)"],
      ahaMoment: "Determinan bukan rumus aneh — cuma perkalian silang yang sudah kamu bisa di pecahan!"
    },
    progressiveExamples: [
      { level: 1, levelName: "Pemanasan", question: "det |2 1 / 3 4| = ?", solution: ["2×4 - 1×3 = 8-3 = 5"], answer: "5" },
      { level: 2, levelName: "Latihan", question: "det |5 3 / 2 7| = ?", solution: ["5×7 - 3×2 = 35-6 = 29"], answer: "29" },
      { level: 3, levelName: "Tantangan", question: "det |-1 4 / 3 -2| = ?", solution: ["(-1)(-2) - (4)(3) = 2-12 = -10"], answer: "-10" },
      { level: 4, levelName: "Ujian", question: "Invers dari |2 1 / 5 3|?", solution: ["det = 2(3)-1(5) = 1","Invers = (1/1) × |3 -1 / -5 2|","= |3 -1 / -5 2|"], answer: "|3 -1 / -5 2|" },
      { level: 5, levelName: "Olimpiade", question: "Jika det |x 2 / 3 x| = 0, cari x", solution: ["x² - 6 = 0","x² = 6","x = ±√6"], answer: "x = ±√6" }
    ],
    interactive: true, inputs: ["a","b","c","d"], inputLabels: ["a","b","c","d"],
    solve: (i) => i.a * i.d - i.b * i.c
  },
  {
    id: "metode-teleskop-deret",
    title: "Metode Teleskop",
    subtitle: "Jumlah Deret Aritmatika = Pasangan × Rata-Rata",
    category: "Barisan & Deret",
    level: "SMA",
    difficulty: 3,
    formula: "S_n = \\frac{n}{2}(a + U_n) = n \\times \\bar{x}",
    formulaExplain: "Pasangkan suku pertama dengan terakhir, kedua dengan kedua terakhir — semua sama! Kali jumlah pasangan.",
    logic: "Gauss kecil menemukan ini: 1+2+...+100 = 50 pasang × 101 = 5050. Kita generalisasi untuk semua deret.",
    why: "Menjumlahkan ratusan bilangan satu per satu = gila. Metode Teleskop: 2 langkah selesai.",
    steps: [
      "Pasangkan: suku ke-1 + suku terakhir = S",
      "Semua pasangan nilainya sama = S",
      "Jumlah pasangan = n/2",
      "Total = (n/2) × S"
    ],
    mustWrite: true,
    notebook: [
      { title: "Rumus Deret Aritmatika", content: [
        "Sn = n/2 × (a + Un) dimana a=suku pertama, Un=suku terakhir",
        "Atau Sn = n/2 × (2a + (n-1)b) dimana b=beda",
        "Un = a + (n-1)b"
      ], formula: "S_n = \\frac{n}{2}(a + U_n)", important: true }
    ],
    teaching: {
      prerequisites: ["Penjumlahan","Pola bilangan sederhana"],
      analogy: "Ada 100 anak baris berbaris. Pasangkan anak ke-1 dengan ke-100 (tinggi gabungan 101). Anak ke-2 dengan ke-99 (juga 101). Ada 50 pasang. Total = 50 × 101 = 5050.",
      stepsFromZero: ["Deret aritmatika = bilangan yang naik/turun dengan beda tetap","Contoh: 2,5,8,11,14 (beda = 3)","Untuk jumlahkan semua, pasangkan ujung-ujungnya","Setiap pasangan nilainya sama → tinggal kali jumlah pasangan"],
      ahaMoment: "Kamu tidak pernah perlu menjumlahkan satu per satu lagi — cukup pasangkan dan kalikan!"
    },
    progressiveExamples: [
      { level: 1, levelName: "Pemanasan", question: "1 + 2 + 3 + ... + 10 = ?", solution: ["n=10, a=1, Un=10","S = (10/2)(1+10) = 5×11 = 55"], answer: "55" },
      { level: 2, levelName: "Latihan", question: "2 + 4 + 6 + ... + 20 = ?", solution: ["n=10, a=2, Un=20","S = (10/2)(2+20) = 5×22 = 110"], answer: "110" },
      { level: 3, levelName: "Tantangan", question: "3 + 7 + 11 + ... + 43 = ?", solution: ["b=4, a=3, Un=43","n = (43-3)/4 + 1 = 11","S = (11/2)(3+43) = 5.5×46 = 253"], answer: "253" },
      { level: 4, levelName: "Ujian", question: "Jumlah 50 suku pertama: 5,8,11,14,...", solution: ["a=5, b=3, n=50","U50 = 5 + 49×3 = 152","S = (50/2)(5+152) = 25×157 = 3925"], answer: "3.925" },
      { level: 5, levelName: "Olimpiade", question: "1 + 2 + 3 + ... + 1000 = ?", solution: ["n=1000, a=1, Un=1000","S = (1000/2)(1+1000) = 500×1001 = 500.500"], answer: "500.500" }
    ],
    interactive: true, inputs: ["a","b","n"], inputLabels: ["Suku pertama","Beda","Jumlah suku"],
    solve: (i) => { const un = i.a + (i.n-1)*i.b; return (i.n/2)*(i.a + un); }
  }
];
