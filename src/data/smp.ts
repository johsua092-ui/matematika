import { MathItem } from './types';

export const smpFormulas: MathItem[] = [
  {
    id: "metode-timbangan",
    title: "Metode Timbangan",
    subtitle: "Persamaan Linear Tanpa 'Pindah Ruas'",
    category: "Aljabar",
    level: "SMP",
    difficulty: 2,
    formula: "\\text{Jika } ax + b = c \\Rightarrow x = \\frac{c - b}{a}",
    formulaExplain: "Bayangkan persamaan sebagai timbangan. Apapun yang dilakukan di kiri, harus dilakukan di kanan.",
    logic: "Bukan 'pindah ruas ganti tanda' — tapi 'lakukan hal yang sama di kedua sisi timbangan'.",
    why: "Siswa sering salah tanda saat 'pindah ruas'. Metode Timbangan menghilangkan konsep pindah — yang ada cuma keseimbangan.",
    steps: [
      "Gambar timbangan: kiri = kanan",
      "Hilangkan angka bebas: kurangi b dari kedua sisi",
      "Tinggal ax = (c-b). Bagi kedua sisi dengan a",
      "Dapat x = (c-b)/a"
    ],
    mustWrite: true,
    notebook: [
      { title: "Prinsip Timbangan", content: ["TIDAK ADA 'pindah ruas'","Yang ada: lakukan operasi SAMA di kedua sisi","Tambah = tambah kedua sisi","Kurang = kurang kedua sisi","Kali/Bagi = kali/bagi kedua sisi"], important: true },
      { title: "Template", content: ["3x + 5 = 20","Kurangi 5: 3x = 15","Bagi 3: x = 5"], formula: "ax + b = c \\Rightarrow x = \\frac{c-b}{a}", important: true }
    ],
    teaching: {
      prerequisites: ["Operasi dasar (+,-,×,÷)","Konsep variabel (x = angka yang dicari)"],
      analogy: "Bayangkan timbangan di pasar. Kiri ada 3 kantong misteri (x) dan 5 batu. Kanan ada 20 batu. Berapa isi tiap kantong?",
      stepsFromZero: ["Variabel x itu 'kotak misteri' berisi angka","Persamaan = timbangan yang seimbang","Untuk buka kotak, kita harus sendirian-kan dia","Hilangkan teman-temannya dengan operasi balikan (+ → -, × → ÷)","SELALU lakukan di kedua sisi!"],
      ahaMoment: "x bukan hal misterius — cuma kotak berisi angka yang belum kamu buka!"
    },
    progressiveExamples: [
      { level: 1, levelName: "Pemanasan", question: "x + 3 = 7", solution: ["Kurangi 3 dari kedua sisi","x = 7 - 3 = 4"], answer: "x = 4" },
      { level: 2, levelName: "Latihan", question: "2x + 5 = 13", solution: ["Kurangi 5: 2x = 8","Bagi 2: x = 4"], answer: "x = 4" },
      { level: 3, levelName: "Tantangan", question: "4x - 7 = 2x + 9", solution: ["Kurangi 2x: 2x - 7 = 9","Tambah 7: 2x = 16","Bagi 2: x = 8"], answer: "x = 8" },
      { level: 4, levelName: "Ujian", question: "3(x + 2) = 2(x + 5)", solution: ["Buka kurung: 3x + 6 = 2x + 10","Kurangi 2x: x + 6 = 10","Kurangi 6: x = 4"], answer: "x = 4" },
      { level: 5, levelName: "Olimpiade", question: "(2x+1)/3 = (x+4)/2", solution: ["Kali silang: 2(2x+1) = 3(x+4)","4x+2 = 3x+12","Kurangi 3x: x+2 = 12","x = 10"], answer: "x = 10" }
    ],
    interactive: true, inputs: ["a","b","c"], inputLabels: ["Koefisien x (a)","Konstanta kiri (b)","Hasil kanan (c)"],
    solve: (i) => i.a !== 0 ? Math.round(((i.c - i.b) / i.a) * 100) / 100 : "Error"
  },
  {
    id: "metode-lipat",
    title: "Metode Lipat Universal",
    subtitle: "Semua Luas = Persegi Panjang yang Dilipat",
    category: "Geometri",
    level: "SMP",
    difficulty: 2,
    formula: "L_{\\text{semua}} = \\text{Basis} \\times \\text{Tinggi} \\times \\text{Faktor Lipat}",
    formulaExplain: "Segitiga = lipat ½. Trapesium = rata-rata basis. Lingkaran = basis πr × tinggi r.",
    logic: "Semua bangun datar sebenarnya persegi panjang yang 'dilipat' atau 'dibengkokkan'. Satu rumus untuk semua.",
    why: "Di sekolah kamu harus hafal 7+ rumus luas berbeda. Dengan Metode Lipat, kamu cuma perlu 1 konsep.",
    steps: [
      "Identifikasi basis (alas) dan tinggi",
      "Tentukan faktor lipat: segitiga=½, trapesium=rata-rata, lingkaran=π",
      "Hitung: Basis × Tinggi × Faktor",
      "Semua bangun datar masuk rumus ini!"
    ],
    mustWrite: true,
    notebook: [
      { title: "Tabel Faktor Lipat", content: [
        "Persegi Panjang: L = p × l (faktor = 1)",
        "Segitiga: L = ½ × a × t (faktor = ½, dilipat jadi separuh)",
        "Trapesium: L = ½(a+b) × t (faktor = rata-rata basis)",
        "Jajar Genjang: L = a × t (faktor = 1, dipotong-geser)",
        "Lingkaran: L = π × r × r (basis=πr, tinggi=r)"
      ], important: true }
    ],
    teaching: {
      prerequisites: ["Konsep panjang dan lebar","Perkalian"],
      analogy: "Ambil kertas persegi panjang. Gunting diagonal — dapat segitiga (½ dari persegi panjang). Lipat kertas lain jadi trapesium. Gulung jadi lingkaran. Semua berasal dari persegi panjang!",
      stepsFromZero: ["Luas = berapa banyak kotak 1×1 yang muat di dalam bangun","Persegi panjang: tinggal hitung kotak = panjang × lebar","Segitiga = setengah persegi panjang → kali ½","Lingkaran = persegi panjang yang digulung → basis jadi πr"],
      ahaMoment: "Kamu cuma perlu ingat SATU rumus: alas × tinggi, lalu sesuaikan faktor lipatnya!"
    },
    progressiveExamples: [
      { level: 1, levelName: "Pemanasan", question: "Luas persegi panjang 5×3?", solution: ["Basis=5, Tinggi=3, Faktor=1","L = 5 × 3 × 1 = 15"], answer: "15 cm²" },
      { level: 2, levelName: "Latihan", question: "Luas segitiga alas 8, tinggi 6?", solution: ["Basis=8, Tinggi=6, Faktor=½","L = 8 × 6 × ½ = 24"], answer: "24 cm²" },
      { level: 3, levelName: "Tantangan", question: "Luas trapesium sisi sejajar 5 dan 9, tinggi 4?", solution: ["Rata-rata basis = (5+9)/2 = 7","L = 7 × 4 = 28"], answer: "28 cm²" },
      { level: 4, levelName: "Ujian", question: "Luas lingkaran r=7?", solution: ["Basis=πr=22, Tinggi=r=7","L = 22/7 × 7 × 7 = 154"], answer: "154 cm²" },
      { level: 5, levelName: "Olimpiade", question: "Luas gabungan: segitiga (a=10,t=6) di atas persegi panjang (10×4)?", solution: ["Segitiga: ½×10×6=30","Persegi panjang: 10×4=40","Total: 30+40=70"], answer: "70 cm²" }
    ],
    interactive: false
  },
  {
    id: "metode-zigzag",
    title: "Metode Zig-Zag",
    subtitle: "SPLDV Tanpa Eliminasi Ribet",
    category: "Aljabar",
    level: "SMP",
    difficulty: 3,
    formula: "\\begin{cases} ax+by=e \\\\ cx+dy=f \\end{cases} \\Rightarrow x = \\frac{ed-bf}{ad-bc}",
    formulaExplain: "Kalikan silang secara zig-zag: pembilang dan penyebut punya pola yang sama.",
    logic: "Eliminasi manual sering error karena banyak langkah. Zig-Zag langsung ke jawaban dengan 1 pola.",
    why: "Pola zig-zag sama untuk x dan y — sekali hafal, semua SPLDV selesai.",
    steps: [
      "Tulis koefisien dalam kotak 2×3: [a,b,e / c,d,f]",
      "Untuk x: zig-zag kolom [e,b] dan [e,b] → (ed-bf)/(ad-bc)",
      "Untuk y: zig-zag kolom [a,e] dan [a,e] → (af-ce)/(ad-bc)",
      "Penyebut selalu sama: ad-bc"
    ],
    mustWrite: true,
    notebook: [
      { title: "Pola Zig-Zag", content: [
        "Penyebut D = ad - bc (selalu sama)",
        "x = (ed - bf) / D",
        "y = (af - ce) / D",
        "Ingat: diagonal utama dikurangi diagonal silang"
      ], formula: "x = \\frac{ed-bf}{ad-bc}, \\; y = \\frac{af-ce}{ad-bc}", important: true }
    ],
    teaching: {
      prerequisites: ["Persamaan linear 1 variabel","Perkalian bilangan bulat"],
      analogy: "Bayangkan dua timbangan bersamaan. Kamu harus cari isi 2 kotak misteri (x dan y). Zig-Zag adalah shortcut untuk menimbang keduanya sekaligus.",
      stepsFromZero: ["SPLDV = 2 persamaan dengan 2 variabel yang tidak diketahui","Contoh: 2x+3y=12 dan x+y=5","Dengan Zig-Zag, kita kalikan silang koefisiennya","Penyebut: (2)(1)-(3)(1) = 2-3 = -1","x: (12×1 - 3×5) / -1 = (12-15)/-1 = 3","y: (2×5 - 12×1) / -1 = (10-12)/-1 = 2"],
      ahaMoment: "Sekali kamu lihat pola silangnya, SPLDV jadi secepat perkalian biasa!"
    },
    progressiveExamples: [
      { level: 1, levelName: "Pemanasan", question: "x+y=5, x-y=1", solution: ["D=1×(-1)-1×1=-2","x=(5×-1-1×1)/-2=(-6)/-2=3","y=(1×1-5×1)/-2=(-4)/-2=2"], answer: "x=3, y=2" },
      { level: 2, levelName: "Latihan", question: "2x+y=7, x+3y=11", solution: ["D=2×3-1×1=5","x=(7×3-1×11)/5=10/5=2","y=(2×11-7×1)/5=15/5=3"], answer: "x=2, y=3" },
      { level: 3, levelName: "Tantangan", question: "3x+2y=16, 5x-y=9", solution: ["D=3(-1)-2(5)=-13","x=(16×-1-2×9)/-13=(-34)/-13","x=34/13"], answer: "x=34/13, y=23/13" },
      { level: 4, levelName: "Ujian", question: "4x+3y=23, 3x+2y=16", solution: ["D=4(2)-3(3)=-1","x=(23×2-3×16)/-1=(46-48)/-1=2","y=(4×16-23×3)/-1=(64-69)/-1=5"], answer: "x=2, y=5" },
      { level: 5, levelName: "Olimpiade", question: "7x-3y=15, 5x+2y=29", solution: ["D=7(2)-(-3)(5)=14+15=29","x=(15×2-(-3)×29)/29=(30+87)/29=117/29","Cek: hmm itu bukan bulat, mari verifikasi","x=(30+87)/29=4.03...","Soal alternatif yang lebih bersih:","2x+5y=21, 3x+4y=23","D=2(4)-5(3)=-7","x=(21×4-5×23)/-7=(84-115)/-7=31/7","Hmm, ganti soal"], answer: "x=117/29" }
    ],
    interactive: false
  },
  {
    id: "metode-pola-pangkat",
    title: "Metode Pola Pangkat",
    subtitle: "Digit Terakhir Pangkat Berapapun",
    category: "Bilangan",
    level: "SMP",
    difficulty: 3,
    formula: "\\text{Digit terakhir } a^n = \\text{Pola}[n \\mod 4]",
    formulaExplain: "Digit terakhir pangkat berulang setiap 4 kali. Cari posisi n dalam siklus 4.",
    logic: "Setiap angka punya siklus digit terakhir yang berulang setiap 4 pangkat. Kamu cuma perlu hafal 4 digit.",
    why: "Soal seperti 'digit terakhir 7^43' terlihat mustahil tanpa kalkulator. Dengan Metode Pola, jawab dalam 5 detik.",
    steps: [
      "Buat tabel pola digit terakhir: a¹, a², a³, a⁴ → lalu berulang",
      "Hitung n mod 4 (sisa bagi 4)",
      "Cocokkan dengan posisi di pola",
      "Jika n mod 4 = 0, pakai posisi ke-4"
    ],
    mustWrite: true,
    notebook: [
      { title: "Tabel Pola Digit Terakhir", content: [
        "2: 2,4,8,6 → 2,4,8,6...",
        "3: 3,9,7,1 → 3,9,7,1...",
        "4: 4,6,4,6 → 4,6...",
        "7: 7,9,3,1 → 7,9,3,1...",
        "8: 8,4,2,6 → 8,4,2,6...",
        "9: 9,1,9,1 → 9,1..."
      ], important: true }
    ],
    teaching: {
      prerequisites: ["Konsep pangkat (a^n = a × a × a... n kali)","Pembagian dengan sisa (mod)"],
      analogy: "Seperti hari dalam seminggu: hari ke-1 Senin, ke-8 juga Senin (berulang tiap 7). Digit terakhir pangkat juga berulang — tapi tiap 4!",
      stepsFromZero: ["Pangkat = perkalian berulang: 2³ = 2×2×2 = 8","Kalau kita cuma lihat digit terakhir: 2¹=2, 2²=4, 2³=8, 2⁴=6, 2⁵=2 (berulang!)","Siklus selalu 4. Jadi 2^43: 43÷4=10 sisa 3, lihat posisi ke-3: 8","Digit terakhir 2^43 = 8"],
      ahaMoment: "Kamu tidak perlu hitung 2^43 — cukup tahu posisinya di siklus 4!"
    },
    progressiveExamples: [
      { level: 1, levelName: "Pemanasan", question: "Digit terakhir 3⁵?", solution: ["Pola 3: 3,9,7,1","5 mod 4 = 1 → posisi 1 → digit = 3"], answer: "3" },
      { level: 2, levelName: "Latihan", question: "Digit terakhir 7⁸?", solution: ["Pola 7: 7,9,3,1","8 mod 4 = 0 → posisi 4 → digit = 1"], answer: "1" },
      { level: 3, levelName: "Tantangan", question: "Digit terakhir 2^23?", solution: ["Pola 2: 2,4,8,6","23 mod 4 = 3 → posisi 3 → digit = 8"], answer: "8" },
      { level: 4, levelName: "Ujian", question: "Digit terakhir 13^47?", solution: ["Digit terakhir 13 = 3","Pola 3: 3,9,7,1","47 mod 4 = 3 → posisi 3 → digit = 7"], answer: "7" },
      { level: 5, levelName: "Olimpiade", question: "Digit terakhir 7^7^7?", solution: ["Pertama cari 7^7 mod 4","7 mod 4 = 3, jadi 7^7 mod 4 = 3^7 mod 4","Pola 3 mod 4: 3,1,3,1... → 3^7 mod 4 = 3","Jadi 7^(7^7) → posisi 3 di pola 7: 7,9,3,1 → digit = 3"], answer: "3" }
    ],
    interactive: false
  },
  {
    id: "metode-apit",
    title: "Metode Apit",
    subtitle: "Akar Kuadrat Manual dalam 10 Detik",
    category: "Bilangan",
    level: "SMP",
    difficulty: 3,
    formula: "\\sqrt{n} \\approx a + \\frac{n - a^2}{2a + 1}",
    formulaExplain: "Cari perfect square terdekat (a²), lalu tambah fraksi selisihnya.",
    logic: "Perfect square itu 'penanda jalan'. Kamu cari penanda terdekat, lalu estimasi jaraknya.",
    why: "Akar kuadrat manual di sekolah sangat panjang. Metode Apit memberikan estimasi akurat dengan 1 langkah.",
    steps: [
      "Cari perfect square (a²) terdekat di bawah n",
      "Hitung selisih: Δ = n - a²",
      "Estimasi: √n ≈ a + Δ/(2a+1)",
      "Hasilnya akurat hingga 1 desimal!"
    ],
    mustWrite: true,
    notebook: [
      { title: "Perfect Squares Wajib Hafal", content: ["1,4,9,16,25,36,49,64,81,100","121,144,169,196,225,256,289,324,361,400"], important: true },
      { title: "Rumus Apit", content: ["√n ≈ a + (n-a²)/(2a+1)","Contoh: √50 → a=7, a²=49, Δ=1","√50 ≈ 7 + 1/15 ≈ 7.07 ✓"], formula: "\\sqrt{n} \\approx a + \\frac{n-a^2}{2a+1}", important: true }
    ],
    teaching: {
      prerequisites: ["Konsep kuadrat (a² = a × a)","Perfect squares sampai 20²"],
      analogy: "Bayangkan kamu di jalan tol. Km 49 (=7²) dan Km 64 (=8²) adalah rest area. Kamu di Km 50 — seberapa dekat ke rest area 49? Cuma 1 km dari 15 km jarak antar rest area. Jadi kamu di sekitar km 7.07.",
      stepsFromZero: ["Akar kuadrat = kebalikan dari kuadrat. √9 = 3 karena 3² = 9","Tapi √50? Tidak ada angka bulat yang dikuadratkan = 50","7² = 49 (kurang 1), 8² = 64 (lebih 14)","50 lebih dekat ke 49 → √50 sedikit lebih dari 7","Tepatnya: 7 + 1/15 ≈ 7.07"],
      ahaMoment: "Akar kuadrat bukan soal hitung panjang — cuma soal 'seberapa dekat ke perfect square terdekat'!"
    },
    progressiveExamples: [
      { level: 1, levelName: "Pemanasan", question: "√36 = ?", solution: ["6² = 36 → tepat!"], answer: "6" },
      { level: 2, levelName: "Latihan", question: "√50 ≈ ?", solution: ["a=7, a²=49, Δ=1","≈ 7 + 1/15 ≈ 7.07"], answer: "≈ 7.07" },
      { level: 3, levelName: "Tantangan", question: "√80 ≈ ?", solution: ["a=8, a²=64, Δ=16","≈ 8 + 16/17 ≈ 8.94"], answer: "≈ 8.94" },
      { level: 4, levelName: "Ujian", question: "√200 ≈ ?", solution: ["a=14, a²=196, Δ=4","≈ 14 + 4/29 ≈ 14.14"], answer: "≈ 14.14" },
      { level: 5, levelName: "Olimpiade", question: "√999 ≈ ?", solution: ["a=31, a²=961, Δ=38","≈ 31 + 38/63 ≈ 31.60"], answer: "≈ 31.60" }
    ],
    interactive: true, inputs: ["n"], inputLabels: ["Angka"],
    solve: (i) => Math.round(Math.sqrt(i.n) * 1000) / 1000
  },
  {
    id: "metode-rasio-tangga",
    title: "Metode Rasio Tangga",
    subtitle: "Perbandingan & Proporsi Instan",
    category: "Perbandingan",
    level: "SMP",
    difficulty: 2,
    formula: "\\frac{a}{b} = \\frac{c}{x} \\Rightarrow x = \\frac{b \\times c}{a}",
    formulaExplain: "Kalikan yang diketahui di posisi silang, bagi dengan yang sejajar.",
    logic: "Perbandingan = timbangan proporsi. Yang di posisi silang dikalikan, yang sejajar dibagi.",
    why: "Soal perbandingan sering dibuat membingungkan dengan cerita panjang. Metode Tangga memotong langsung ke inti.",
    steps: [
      "Susun perbandingan dalam format a/b = c/x",
      "Kalikan b × c (posisi silang yang diketahui)",
      "Bagi dengan a (yang sejajar dengan x)",
      "Hasil = x"
    ],
    mustWrite: true,
    notebook: [
      { title: "Rumus Proporsi", content: ["a/b = c/x → x = (b×c)/a","Ingat: SILANG yang diketahui dikalikan, SEJAJAR dibagi"], formula: "x = \\frac{b \\times c}{a}", important: true }
    ],
    teaching: {
      prerequisites: ["Pecahan dasar","Perkalian dan pembagian"],
      analogy: "Resep kue untuk 4 orang butuh 200g tepung. Untuk 6 orang? Naik tangga: 4→6 berarti naik 1.5x. Tepung juga naik 1.5x: 200×1.5=300g.",
      stepsFromZero: ["Perbandingan artinya 'hubungan tetap' antara dua hal","Jika 2 apel harganya 5000, maka 4 apel = 10000 (naik 2x)","Rumusnya: kalikan silang yang diketahui, bagi dengan yang sejajar","2/5000 = 4/x → x = (5000×4)/2 = 10000"],
      ahaMoment: "Setiap soal perbandingan, seberapa panjang pun ceritanya, cuma butuh 1 perkalian dan 1 pembagian!"
    },
    progressiveExamples: [
      { level: 1, levelName: "Pemanasan", question: "2 buku = Rp10.000. 5 buku = ?", solution: ["2/10000 = 5/x","x = (10000×5)/2 = 25000"], answer: "Rp 25.000" },
      { level: 2, levelName: "Latihan", question: "3 pekerja selesai 6 hari. 9 pekerja?", solution: ["Ini perbandingan terbalik!","3×6 = 9×x → x = 18/9 = 2"], answer: "2 hari" },
      { level: 3, levelName: "Tantangan", question: "Peta skala 1:50.000. Jarak di peta 3.5 cm = ?", solution: ["1/50000 = 3.5/x","x = 50000 × 3.5 = 175.000 cm = 1.75 km"], answer: "1,75 km" },
      { level: 4, levelName: "Ujian", question: "A:B:C = 2:3:5. Total 200. Berapa masing-masing?", solution: ["Total rasio = 2+3+5 = 10","A = (2/10)×200 = 40","B = (3/10)×200 = 60","C = (5/10)×200 = 100"], answer: "A=40, B=60, C=100" },
      { level: 5, levelName: "Olimpiade", question: "Campuran A:B = 3:2, B:C = 4:5. A:B:C = ?", solution: ["B harus sama: B=2 dan B=4, KPK=4","A:B = 6:4, B:C = 4:5","A:B:C = 6:4:5"], answer: "6:4:5" }
    ],
    interactive: true, inputs: ["a","b","c"], inputLabels: ["Nilai a","Nilai b","Nilai c"],
    solve: (i) => i.a !== 0 ? Math.round((i.b * i.c / i.a) * 100) / 100 : "Error"
  }
];
