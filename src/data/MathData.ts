export interface MathItem {
  id: string;
  title: string;
  category: string;
  formula: string;
  logic: string;
  why: string;
  steps: string[];
  example: string;
  notes?: string[];
  practice?: { q: string; a: string }[];
  masterTheory?: {
    intro: string;
    derivation: string;
    notebookContent: string[];
  };
  interactive: boolean;
  inputs?: string[];
  solve: (inputs: any) => string | number;
}

export const mathData: MathItem[] = [
  {
    id: "perkalian-silang-universal",
    title: "Perkalian Silang (All-in-One)",
    category: "SD - Dasar",
    formula: "ab \\times cd = (a\\times c) | (a\\times d + b\\times c) | (b\\times d)",
    logic: "Ini adalah 'Ibu' dari semua perkalian. Kita tidak perlu menghitung bersusun panjang. Cukup hitung Depan, Silang, lalu Belakang.",
    why: "Secara aljabar, ini adalah (10a+b)(10c+d). Kita hanya menyederhanakan proses distribusi mental.",
    steps: [
      "1. Belakang: b x d",
      "2. Tengah (Silang): (a x d) + (b x c)",
      "3. Depan: a x c",
      "4. Gabungkan (simpan puluhan ke depan jika ada)"
    ],
    example: "23 x 12. Depan: 2x1=2. Tengah: (2x2)+(3x1)=7. Belakang: 3x2=6. Hasil: 276.",
    notes: [
      "Tuliskan pola: (D) | (S) | (B)",
      "Selalu hitung dari belakang (B) ke depan (D) jika ada simpanan angka.",
      "Latih 5 soal setiap hari untuk kecepatan mental."
    ],
    practice: [
      { q: "13 x 21 = ?", a: "273" },
      { q: "42 x 11 = ?", a: "462" }
    ],
    masterTheory: {
      intro: "Metode ini dikenal sebagai 'Urdhva-Tiryakbhyam' dalam Matematika Veda. Ini adalah algoritma perkalian paling efisien di dunia karena memproses angka secara paralel, bukan sekuensial seperti cara sekolah.",
      derivation: "Bayangkan dua angka (10a + b) and (10c + d). Jika kita kalikan: (10a+b)(10c+d) = 100(ac) + 10(ad + bc) + (bd). Perhatikan polanya: (ac) adalah angka depan, (ad+bc) adalah angka tengah (silang), and (bd) adalah angka belakang. Rumus ini hanyalah bentuk ringkas dari distribusi aljabar murni.",
      notebookContent: [
        "BAGIAN 1: KONSEP DASAR - Tuliskan bahwa perkalian adalah distribusi luas area. Gambar persegi panjang yang dibagi 4 bagian.",
        "BAGIAN 2: ALGORITMA SILANG - Tuliskan simbol I - X - I. I pertama adalah perkalian satuan (belakang). X adalah perkalian silang dan penjumlahan. I terakhir adalah perkalian puluhan (depan).",
        "BAGIAN 3: ATURAN SIMPANAN - Jika hasil perkalian satuan > 9, angka puluhannya WAJIB ditambahkan ke hasil tengah. Jika hasil tengah > 9, tambahkan ke hasil depan.",
        "BAGIAN 4: ANALISIS ERROR - Catat kesalahan umum: lupa menjumlahkan hasil kali silang. Pastikan selalu menjumlahkan ad dan bc terlebih dahulu sebelum menggabungkan.",
        "BAGIAN 5: EKSTENSI 3 DIGIT - Jelaskan pola untuk 3 digit: I - X - * - X - I (Pola Bintang). Ini adalah level lanjut untuk perkalian ribuan."
      ]
    },
    interactive: true,
    inputs: ["n1", "n2"],
    solve: (inputs) => {
      const { n1, n2 } = inputs;
      return `${n1} x ${n2} = ${n1 * n2}`;
    }
  },
  {
    id: "akar-kuadrat-cepat",
    title: "Akar Kuadrat 2 Detik",
    category: "SMP - Menengah",
    formula: "\\sqrt{x} = \\text{Estimasi Puluhan} | \\text{Cek Satuan}",
    logic: "Akar kuadrat itu punya pola unik pada angka terakhirnya. Kita cukup lihat angka depan untuk puluhan dan angka belakang untuk satuannya.",
    why: "Setiap angka kuadrat 1-9 memiliki pasangan satuan yang tetap (1&9 -> 1, 2&8 -> 4, 3&7 -> 9, 4&6 -> 6).",
    steps: [
      "1. Pisahkan 2 angka terakhir.",
      "2. Cari kuadrat terdekat di bawah angka depan (itu puluhannya).",
      "3. Lihat angka paling belakang, tentukan 2 kemungkinan satuannya.",
      "4. Uji dengan angka tengah (5) untuk menentukan mana yang benar."
    ],
    example: "sqrt(729). Pisah 29, sisa 7. Kuadrat bawah 7 adalah 2 (2^2=4). Belakangnya 9, kemungkinan satuan 3 atau 7. Jadi 23 atau 27. Cek 25^2=625. Karena 729 > 625, maka hasilnya 27.",
    notes: [
      "Hafalkan tabel satuan kuadrat (1->1,9; 4->2,8; 9->3,7; 6->4,6).",
      "Angka tengah (5) adalah kunci pemisah.",
      "Gunakan metode ini hanya untuk akar sempurna."
    ],
    practice: [
      { q: "√529 = ?", a: "23" },
      { q: "√1024 = ?", a: "32" }
    ],
    masterTheory: {
      intro: "Mencari akar kuadrat sering dianggap sulit karena kita terbiasa dengan cara 'coba-coba'. Dengan memahami 'Digit Terakhir' dan 'Rentang Puluhan', kita bisa menebak akar sempurna dalam hitungan detik tanpa kalkulator.",
      derivation: "Setiap angka dari 1-9 memiliki satuan kuadrat yang unik. Perhatikan: 1^2=1, 2^2=4, 3^2=9, 4^2=16(6), 5^2=25(5), 6^2=36(6), 7^2=49(9), 8^2=64(4), 9^2=81(1). Angka satuan 2, 3, 7, and 8 TIDAK PERNAH muncul di akhir angka kuadrat sempurna. Ini adalah filter pertama kita.",
      notebookContent: [
        "BAGIAN 1: TABEL SATUAN - Buat tabel 1-9 dan pasangkan dengan angka satuannya. Soroti pasangan kembar (1&9, 2&8, 3&7, 4&6).",
        "BAGIAN 2: TEKNIK ELIMINASI - Jelaskan kenapa kita harus membuang 2 angka terakhir. Karena 2 angka terakhir hanya menentukan satuan, sedangkan angka sisanya menentukan puluhan.",
        "BAGIAN 3: UJI TITIK TENGAH (PANDUAN 5) - Ini bagian terpenting. Jika hasilmu antara 20 dan 30, gunakan 25^2 (625) sebagai patokan. Jika angka soal > 625, ambil yang besar (27), jika < 625, ambil yang kecil (23).",
        "BAGIAN 4: PEMBUKTIAN VISUAL - Gambar persegi besar untuk menjelaskan bahwa akar adalah sisi dari sebuah luasan.",
        "BAGIAN 5: LIMITASI - Catat bahwa cara ini hanya berlaku untuk 'Akar Sempurna' (bilangan bulat). Untuk akar tidak sempurna, gunakan metode pendekatan linear (Newton-Raphson)."
      ]
    },
    interactive: true,
    inputs: ["angka"],
    solve: (inputs) => {
      const res = Math.sqrt(inputs.angka);
      return res % 1 === 0 ? `√${inputs.angka} = ${res}` : `√${inputs.angka} ≈ ${res.toFixed(2)}`;
    }
  },
  {
    id: "turunan-kekuatan",
    title: "Turunan: 'Turun & Kurangi'",
    category: "SMA - Lanjut",
    formula: "\\frac{d}{dx}x^n = nx^{n-1}",
    logic: "Anggap pangkat itu 'Beban'. Untuk menurunkan beban, pangkatnya harus lompat ke depan (kali) lalu pangkat yang tersisa berkurang satu karena sudah 'lelah'.",
    why: "Ini berasal dari limit fungsi saat perubahan (h) mendekati nol. Secara visual, ini adalah kemiringan garis di satu titik.",
    steps: [
      "1. Kalikan pangkat ke koefisien depan.",
      "2. Kurangi nilai pangkat asli dengan 1."
    ],
    example: "Turunan dari 3x^4 adalah (4 * 3)x^(4-1) = 12x^3.",
    notes: [
      "Turunan angka konstanta (tanpa x) selalu 0.",
      "Pangkat negatif juga ikut aturan yang sama (dikurangi 1).",
      "Visualisasikan sebagai kemiringan sebuah bukit."
    ],
    practice: [
      { q: "Turunan dari 5x^2 = ?", a: "10x" },
      { q: "Turunan dari x^3 + 5 = ?", a: "3x^2" }
    ],
    interactive: true,
    inputs: ["koefisien", "pangkat"],
    solve: (inputs) => {
      const { koefisien, pangkat } = inputs;
      return `f'(x) = ${koefisien * pangkat}x^${pangkat - 1}`;
    }
  }
];
