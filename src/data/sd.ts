import { MathItem } from './types';

export const sdFormulas: MathItem[] = [
  {
    id: "metode-tumpah",
    title: "Metode Tumpah",
    subtitle: "Penjumlahan Kilat dari Kiri ke Kanan",
    category: "Aritmatika",
    level: "SD",
    difficulty: 1,
    formula: "\\overrightarrow{d_1 + d_2} \\;\\text{jika} \\geq 10 \\Rightarrow \\text{tumpah +1 ke kiri}",
    formulaExplain: "Jumlahkan dari digit terbesar (kiri). Jika hasil ≥ 10, tumpahkan 1 ke kiri.",
    logic: "Otak membaca angka dari kiri. Metode ini mengikuti arah alami otak — bukan melawan seperti cara sekolah.",
    why: "Cara sekolah (kanan ke kiri) memaksa otak menyimpan carry sambil mundur. Metode Tumpah maju terus, lebih cepat dan minim error.",
    steps: [
      "Jumlahkan digit paling kiri (ratusan)",
      "Lirik digit berikutnya — jumlahkan",
      "Jika hasil ≥ 10: tumpahkan 1 ke digit kiri, sisa = hasil - 10",
      "Ulangi sampai digit terakhir"
    ],
    mustWrite: true,
    notebook: [
      { title: "Aturan Tumpah", content: ["Hitung dari KIRI ke KANAN","Jika digit ≥ 10 → tumpah 1 ke kiri, tulis sisa","Jika digit < 10 → tulis langsung"], formula: "d_i \\geq 10 \\Rightarrow \\text{tumpah}", important: true },
      { title: "Contoh Wajib Catat", content: ["456 + 278: Ratusan 4+2=6, Puluhan 5+7=12 (tumpah→7), Satuan 6+8=14 (tumpah→3+1=4) → 734"], important: true }
    ],
    teaching: {
      prerequisites: ["Mengenal angka 0-9","Tahu konsep satuan, puluhan, ratusan"],
      analogy: "Bayangkan kamu punya 3 gelas bertingkat (ratusan, puluhan, satuan). Isi gelas ratusan dulu. Kalau gelas puluhan tumpah (isi ≥ 10), tuang 1 ke gelas ratusan.",
      stepsFromZero: ["Angka seperti 456 artinya 4 ratusan + 5 puluhan + 6 satuan","Saat menjumlahkan, kita isi setiap gelas satu per satu dari kiri","Kalau satu gelas isinya 10 atau lebih, kita 'tumpahkan' 1 ke gelas di kirinya","Sisa setelah tumpah = isi gelas dikurangi 10"],
      ahaMoment: "Kamu tidak perlu mengingat 'simpan 1' di kepala — cukup tumpahkan langsung saat ketemu!"
    },
    progressiveExamples: [
      { level: 1, levelName: "Pemanasan", question: "23 + 14 = ?", solution: ["Puluhan: 2+1 = 3","Satuan: 3+4 = 7","Gabung: 37"], answer: "37" },
      { level: 2, levelName: "Latihan", question: "156 + 237 = ?", solution: ["Ratusan: 1+2=3","Puluhan: 5+3=8","Satuan: 6+7=13 (tumpah→8+1=9, sisa 3)","Hasil: 393"], answer: "393" },
      { level: 3, levelName: "Tantangan", question: "678 + 456 = ?", solution: ["Ratusan: 6+4=10 (tumpah, tulis 0 carry 1→jadi 1)","Puluhan: 7+5=12 (tumpah→0+1=1, carry 1) → depan jadi 11","Satuan: 8+6=14 (tumpah→1+1=2, sisa 4)","Hasil: 1134"], answer: "1134" },
      { level: 4, levelName: "Ujian", question: "8.765 + 4.389 = ?", solution: ["Ribuan: 8+4=12 (tumpah)","Ratusan: 7+3=10 (tumpah)","Puluhan: 6+8=14 (tumpah)","Satuan: 5+9=14 (tumpah)","Cascade: 13.154"], answer: "13.154" },
      { level: 5, levelName: "Olimpiade", question: "99.999 + 88.888 = ?", solution: ["Setiap digit tumpah: 9+8=17, semua tumpah cascade","Hasil: 188.887"], answer: "188.887" }
    ],
    visualBoard: { title: "Visual Tumpah", num1: "456", num2: "278", operation: "+", steps: [
      { label: "Ratusan", calc: "4 + 2", result: "6", color: "blue", note: "Lirik 5+7=12 → tumpah! 6 naik jadi 7" },
      { label: "Puluhan", calc: "5 + 7", result: "12→2", color: "green", note: "Tumpah 1 ke ratusan. Lirik 6+8=14 → tumpah!" },
      { label: "Satuan", calc: "6 + 8", result: "14→4", color: "amber", note: "Tumpah 1 ke puluhan. Final: 734" }
    ]},
    interactive: true, inputs: ["a","b"], inputLabels: ["Angka 1","Angka 2"],
    solve: (i) => i.a + i.b
  },
  {
    id: "metode-bulatkan",
    title: "Metode Bulatkan-Kembalikan",
    subtitle: "Pengurangan Tanpa Pinjam-Meminjam",
    category: "Aritmatika",
    level: "SD",
    difficulty: 1,
    formula: "A - B = A - \\lceil B \\rceil + (\\lceil B \\rceil - B)",
    formulaExplain: "Bulatkan pengurang ke atas, kurangi, lalu kembalikan selisihnya.",
    logic: "Mengurangi angka bulat jauh lebih mudah daripada angka acak. Otak bisa langsung hitung.",
    why: "Metode pinjam-meminjam sekolah membuat bingung. Bulatkan dulu, baru kembalikan — zero confusion.",
    steps: [
      "Bulatkan pengurang (B) ke angka bulat terdekat ke atas",
      "Hitung selisih pembulatan: berapa yang ditambahkan",
      "Kurangi A dengan angka bulat tadi",
      "Tambahkan kembali selisih pembulatan ke hasil"
    ],
    mustWrite: true,
    notebook: [
      { title: "Rumus Bulatkan", content: ["743 - 268: bulatkan 268→270 (tambah 2)","743 - 270 = 473","Kembalikan: 473 + 2 = 475"], formula: "A - B = (A - \\lceil B \\rceil) + \\Delta", important: true }
    ],
    teaching: {
      prerequisites: ["Bisa menghitung pengurangan sederhana","Tahu cara membulatkan angka"],
      analogy: "Kamu bayar Rp 743 tapi cuma punya uang Rp 270. Kasir kembalikan Rp 473. Tapi ternyata harganya cuma 268 (2 lebih murah), jadi kamu dapat kembalian 473 + 2 = 475.",
      stepsFromZero: ["Pengurangan = mencari selisih dua angka","Angka bulat (270, 300, 500) lebih mudah dikurangi","Bulatkan pengurang ke angka bulat terdekat","Kurangi, lalu tambah kembali selisih pembulatannya"],
      ahaMoment: "Kamu mengubah soal susah jadi soal gampang, lalu perbaiki hasilnya!"
    },
    progressiveExamples: [
      { level: 1, levelName: "Pemanasan", question: "53 - 18 = ?", solution: ["Bulatkan 18→20 (tambah 2)","53 - 20 = 33","Kembalikan: 33 + 2 = 35"], answer: "35" },
      { level: 2, levelName: "Latihan", question: "412 - 197 = ?", solution: ["Bulatkan 197→200 (tambah 3)","412 - 200 = 212","Kembalikan: 212 + 3 = 215"], answer: "215" },
      { level: 3, levelName: "Tantangan", question: "1.000 - 467 = ?", solution: ["Bulatkan 467→470 (tambah 3)","1000 - 470 = 530","Kembalikan: 530 + 3 = 533"], answer: "533" },
      { level: 4, levelName: "Ujian", question: "5.432 - 2.768 = ?", solution: ["Bulatkan 2768→2800 (tambah 32)","5432 - 2800 = 2632","Kembalikan: 2632 + 32 = 2664"], answer: "2.664" },
      { level: 5, levelName: "Olimpiade", question: "10.000 - 3.746 = ?", solution: ["Bulatkan 3746→4000 (tambah 254)","10000 - 4000 = 6000","Kembalikan: 6000 + 254 = 6254"], answer: "6.254" }
    ],
    interactive: true, inputs: ["a","b"], inputLabels: ["Angka awal","Pengurang"],
    solve: (i) => i.a - i.b
  },
  {
    id: "metode-gerbang",
    title: "Metode Gerbang",
    subtitle: "Perkalian 2 Digit Tanpa Bersusun",
    category: "Aritmatika",
    level: "SD",
    difficulty: 2,
    formula: "\\underbrace{a \\times c}_{\\text{Kepala}} \\;|\\; \\underbrace{a{\\times}d + b{\\times}c}_{\\text{Tengah}} \\;|\\; \\underbrace{b \\times d}_{\\text{Ekor}}",
    formulaExplain: "Pecah ab × cd jadi 3 bagian: kepala (a×c), tengah (ad+bc), ekor (b×d). Gabungkan dengan cascade.",
    logic: "Setiap perkalian 2 digit sebenarnya cuma 3 perkalian 1 digit yang digabung. Seperti gerbang 3 pintu.",
    why: "Perkalian bersusun lambat dan rawan salah tulis. Metode Gerbang bisa dihitung mental.",
    steps: [
      "Pecah angka: ab dan cd → a,b,c,d",
      "Kepala: a × c",
      "Tengah: (a × d) + (b × c)",
      "Ekor: b × d",
      "Cascade: jika ekor ≥ 10, tumpah ke tengah. Jika tengah ≥ 10, tumpah ke kepala"
    ],
    mustWrite: true,
    notebook: [
      { title: "Pola Gerbang", content: ["Kepala = digit depan × digit depan","Tengah = silang (depan×belakang + belakang×depan)","Ekor = digit belakang × digit belakang","Cascade dari kanan ke kiri"], formula: "ab \\times cd = [ac]\\;[ad+bc]\\;[bd]", important: true }
    ],
    teaching: {
      prerequisites: ["Perkalian 1 digit (1-9)","Penjumlahan dasar"],
      analogy: "Bayangkan gerbang dengan 3 pintu: Kepala, Tengah, Ekor. Setiap pintu punya tugas masing-masing. Setelah semua pintu selesai, kita buka gerbangnya (gabungkan).",
      stepsFromZero: ["Angka 23 itu artinya a=2, b=3","Angka 45 itu artinya c=4, d=5","Kepala: 2×4=8","Tengah: 2×5 + 3×4 = 10+12 = 22","Ekor: 3×5=15","Cascade: 15→tulis 5, tumpah 1. 22+1=23→tulis 3, tumpah 2. 8+2=10","Baca: 1035"],
      ahaMoment: "Kamu cuma perlu hafal perkalian 1 digit — sisanya cuma tempel dan cascade!"
    },
    progressiveExamples: [
      { level: 1, levelName: "Pemanasan", question: "12 × 13 = ?", solution: ["K:1×1=1 | T:1×3+2×1=5 | E:2×3=6","Gabung: 156"], answer: "156" },
      { level: 2, levelName: "Latihan", question: "23 × 31 = ?", solution: ["K:2×3=6 | T:2×1+3×3=11 | E:3×1=3","Cascade: 6|11|3 → 713"], answer: "713" },
      { level: 3, levelName: "Tantangan", question: "45 × 67 = ?", solution: ["K:4×6=24 | T:4×7+5×6=58 | E:5×7=35","Cascade: 35→5 carry 3. 58+3=61→1 carry 6. 24+6=30","Hasil: 3015"], answer: "3015" },
      { level: 4, levelName: "Ujian", question: "78 × 89 = ?", solution: ["K:7×8=56 | T:7×9+8×8=127 | E:8×9=72","Cascade: 72→2 carry 7. 127+7=134→4 carry 13. 56+13=69","Hasil: 6942"], answer: "6942" },
      { level: 5, levelName: "Olimpiade", question: "99 × 99 = ?", solution: ["K:9×9=81 | T:9×9+9×9=162 | E:9×9=81","Cascade: 81→1 carry 8. 162+8=170→0 carry 17. 81+17=98","Hasil: 9801"], answer: "9801" }
    ],
    interactive: true, inputs: ["a","b"], inputLabels: ["Angka 1","Angka 2"],
    solve: (i) => i.a * i.b
  },
  {
    id: "metode-cermin",
    title: "Metode Cermin 100",
    subtitle: "Perkalian Dekat 100 dalam 3 Detik",
    category: "Aritmatika",
    level: "SD",
    difficulty: 2,
    formula: "a \\times b = (a - \\delta_b) \\times 100 + \\delta_a \\times \\delta_b",
    formulaExplain: "δ = jarak ke 100. Kurangi silang, kalikan selisih, gabungkan.",
    logic: "Angka dekat 100 punya 'bayangan cermin' kecil. Kita pakai bayangan itu untuk hitung kilat.",
    why: "97 × 96 terlihat susah, tapi selisihnya cuma 3 dan 4. Jauh lebih mudah kerja dengan angka kecil.",
    steps: [
      "Hitung selisih masing-masing ke 100: δa dan δb",
      "Kepala: ambil salah satu angka, kurangi selisih lawannya",
      "Ekor: kalikan kedua selisih (harus 2 digit, tambah 0 di depan jika perlu)",
      "Gabungkan Kepala dan Ekor"
    ],
    mustWrite: true,
    notebook: [
      { title: "Rumus Cermin", content: ["δa = 100 - a, δb = 100 - b","Kepala = a - δb (atau b - δa)","Ekor = δa × δb (selalu 2 digit)","Hasil = Kepala × 100 + Ekor"], formula: "\\delta = 100 - n", important: true }
    ],
    teaching: {
      prerequisites: ["Pengurangan dari 100","Perkalian 1 digit"],
      analogy: "Setiap angka dekat 100 punya 'bayangan' kecil. 97 bayangannya 3, 96 bayangannya 4. Kita main dengan bayangan, bukan angka aslinya!",
      stepsFromZero: ["100 itu angka spesial — bulat sempurna","97 itu '100 kurang 3' → bayangannya 3","96 itu '100 kurang 4' → bayangannya 4","Kepala: 97 - 4 = 93 (atau 96 - 3 = 93)","Ekor: 3 × 4 = 12","Gabung: 9312"],
      ahaMoment: "Perkalian angka besar berubah jadi pengurangan dan perkalian angka kecil!"
    },
    progressiveExamples: [
      { level: 1, levelName: "Pemanasan", question: "99 × 99 = ?", solution: ["δ: 1,1","Kepala: 99-1=98","Ekor: 1×1=01","Hasil: 9801"], answer: "9801" },
      { level: 2, levelName: "Latihan", question: "97 × 96 = ?", solution: ["δ: 3,4","Kepala: 97-4=93","Ekor: 3×4=12","Hasil: 9312"], answer: "9312" },
      { level: 3, levelName: "Tantangan", question: "93 × 91 = ?", solution: ["δ: 7,9","Kepala: 93-9=84","Ekor: 7×9=63","Hasil: 8463"], answer: "8463" },
      { level: 4, levelName: "Ujian", question: "88 × 87 = ?", solution: ["δ: 12,13","Kepala: 88-13=75","Ekor: 12×13=156 (3 digit!)","Hati-hati: 75×100+156 = 7656"], answer: "7656" },
      { level: 5, levelName: "Olimpiade", question: "103 × 107 = ?", solution: ["δ: +3,+7 (di atas 100!)","Kepala: 103+7=110","Ekor: 3×7=21","Hasil: 11021"], answer: "11021" }
    ],
    interactive: true, inputs: ["a","b"], inputLabels: ["Angka 1","Angka 2"],
    solve: (i) => i.a * i.b
  },
  {
    id: "metode-gandakan",
    title: "Metode Gandakan-Belah",
    subtitle: "Pembagian Tanpa Pembagian Panjang",
    category: "Aritmatika",
    level: "SD",
    difficulty: 2,
    formula: "A \\div B = \\sum 2^k \\;\\text{dimana}\\; B \\times 2^k \\leq A",
    formulaExplain: "Gandakan pembagi terus sampai lewat. Lalu ambil kombinasi yang pas.",
    logic: "Menggandakan (×2) itu gampang — tinggal tambah angka dengan dirinya sendiri. Lalu tinggal pilih kombinasi.",
    why: "Pembagian panjang itu prosedur paling membingungkan di SD. Metode ini menghilangkan semua kebingungan.",
    steps: [
      "Tulis pembagi dan gandakan terus: ×1, ×2, ×4, ×8, ×16...",
      "Berhenti saat hasil gandakan melebihi angka yang dibagi",
      "Pilih kombinasi gandakan yang jumlahnya = angka yang dibagi",
      "Jumlahkan pengali dari kombinasi yang dipilih"
    ],
    mustWrite: true,
    notebook: [
      { title: "Tabel Gandakan", content: ["156 ÷ 12:","12×1=12, 12×2=24, 12×4=48, 12×8=96","156 = 96+48+12 = 12×(8+4+1) = 12×13","Jawaban: 13"], important: true }
    ],
    teaching: {
      prerequisites: ["Perkalian dasar","Penjumlahan"],
      analogy: "Seperti menimbang beras. Kamu punya anak timbangan 1kg, 2kg, 4kg, 8kg. Mau timbang 13kg? Pakai 8+4+1 = 13!",
      stepsFromZero: ["Pembagian = berapa kali pembagi muat di dalam bilangan","Menggandakan = mengalikan 2 (gampang, tinggal tambah diri sendiri)","Buat daftar: pembagi × 1, ×2, ×4, ×8...","Pilih yang kalau dijumlah = bilangan awal"],
      ahaMoment: "Pembagian cuma jadi penjumlahan dan perkalian 2 — yang sudah kamu kuasai!"
    },
    progressiveExamples: [
      { level: 1, levelName: "Pemanasan", question: "24 ÷ 6 = ?", solution: ["6×1=6, 6×2=12, 6×4=24","24 = 6×4 → Jawaban: 4"], answer: "4" },
      { level: 2, levelName: "Latihan", question: "84 ÷ 7 = ?", solution: ["7×1=7, 7×2=14, 7×4=28, 7×8=56","84 = 56+28 = 7×(8+4) → Jawaban: 12"], answer: "12" },
      { level: 3, levelName: "Tantangan", question: "256 ÷ 16 = ?", solution: ["16×1=16, 16×2=32, 16×4=64, 16×8=128, 16×16=256","256 = 16×16 → Jawaban: 16"], answer: "16" },
      { level: 4, levelName: "Ujian", question: "450 ÷ 18 = ?", solution: ["18×1=18, ×2=36, ×4=72, ×8=144, ×16=288","450 = 288+144+18 = 18×(16+8+1) → Jawaban: 25"], answer: "25" },
      { level: 5, levelName: "Olimpiade", question: "1.728 ÷ 12 = ?", solution: ["12×1=12, ×2=24, ×4=48, ×8=96, ×16=192, ×32=384, ×64=768, ×128=1536","1728 = 1536+192 = 12×(128+16) → Jawaban: 144"], answer: "144" }
    ],
    interactive: true, inputs: ["a","b"], inputLabels: ["Bilangan","Pembagi"],
    solve: (i) => i.b !== 0 ? Math.round((i.a / i.b) * 100) / 100 : "Error: bagi 0"
  },
  {
    id: "metode-tangga-pecahan",
    title: "Metode Tangga Pecahan",
    subtitle: "KPK & Pecahan Tanpa Faktorisasi",
    category: "Pecahan & Desimal",
    level: "SD",
    difficulty: 2,
    formula: "\\frac{a}{m} + \\frac{b}{n} = \\frac{a \\times n + b \\times m}{m \\times n}",
    formulaExplain: "Kalikan silang pembilang dengan penyebut lawan, lalu kali kedua penyebut.",
    logic: "Tidak perlu cari KPK. Langsung kalikan silang — selalu berhasil, selalu benar.",
    why: "Mencari KPK sering bikin error. Metode Tangga menghilangkan langkah itu sepenuhnya.",
    steps: [
      "Kalikan pembilang pertama × penyebut kedua",
      "Kalikan pembilang kedua × penyebut pertama",
      "Jumlahkan kedua hasil (pembilang baru)",
      "Kalikan kedua penyebut (penyebut baru)",
      "Sederhanakan jika perlu"
    ],
    mustWrite: true,
    notebook: [
      { title: "Rumus Tangga", content: ["a/m + b/n = (a×n + b×m) / (m×n)","Contoh: 2/3 + 3/4 = (2×4 + 3×3) / (3×4) = (8+9)/12 = 17/12"], formula: "\\frac{a}{m} + \\frac{b}{n} = \\frac{an+bm}{mn}", important: true }
    ],
    teaching: {
      prerequisites: ["Konsep pecahan (pembilang/penyebut)","Perkalian dasar"],
      analogy: "Bayangkan 2 tangga dengan anak tangga berbeda ukuran. Untuk membandingkan, kita buat tangga baru yang ukurannya cocok untuk keduanya — caranya kalikan silang.",
      stepsFromZero: ["Pecahan a/b artinya 'a bagian dari b bagian total'","Untuk menjumlahkan pecahan, penyebutnya harus sama","Cara tercepat: kalikan silang (setiap pembilang × penyebut lawan)","Penyebut baru = kedua penyebut dikalikan"],
      ahaMoment: "Kamu tidak perlu hafal KPK lagi — kalikan silang itu SELALU benar!"
    },
    progressiveExamples: [
      { level: 1, levelName: "Pemanasan", question: "1/2 + 1/3 = ?", solution: ["(1×3 + 1×2) / (2×3)","= (3+2) / 6 = 5/6"], answer: "5/6" },
      { level: 2, levelName: "Latihan", question: "2/5 + 1/4 = ?", solution: ["(2×4 + 1×5) / (5×4)","= (8+5) / 20 = 13/20"], answer: "13/20" },
      { level: 3, levelName: "Tantangan", question: "3/7 + 5/9 = ?", solution: ["(3×9 + 5×7) / (7×9)","= (27+35) / 63 = 62/63"], answer: "62/63" },
      { level: 4, levelName: "Ujian", question: "5/8 - 2/5 = ?", solution: ["(5×5 - 2×8) / (8×5)","= (25-16) / 40 = 9/40"], answer: "9/40" },
      { level: 5, levelName: "Olimpiade", question: "7/12 + 11/18 = ?", solution: ["(7×18 + 11×12) / (12×18)","= (126+132) / 216 = 258/216 = 43/36"], answer: "43/36 atau 1 7/36" }
    ],
    interactive: false
  }
];
