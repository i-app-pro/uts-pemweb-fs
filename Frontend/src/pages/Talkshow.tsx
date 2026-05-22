// src/pages/Talkshow.tsx
import { Button } from "../components/atoms/Button";
import { Heading } from "../components/atoms/Heading";
import { Collapse } from "../components/molecules/Collapse";
import { SpeakerCard } from "../components/molecules/SpeakerCard";

export default function Talkshow() {
  // Data 4 Pembicara untuk Talkshow
  const talkshowSpeakers = [
    {
      name: "Moh. Ichsan Maulana",
      role: "Human Capital Information System (HCIS), PT. Garuda Daya Pratama Sejahtera",
      imageUrl: "https://www.invofest-harkatnegeri.com/assets/talkshow/talkshow%20ichsan.png",
    },
    {
      name: "M. Zaim Zamzami",
      role: "Programmer, PT. Pertamina Drilling Service Indonesia",
      imageUrl: "https://www.invofest-harkatnegeri.com/assets/talkshow/talkshow%20zaim%20zamzami.png",
    },
    {
      name: "Daffa Zuhdan Muhtar",
      role: "Android Developer, PT. Astra Internasional",
      imageUrl: "https://www.invofest-harkatnegeri.com/assets/talkshow/talkshow%20daffa.png",
    },
    {
      name: "Expert Guest",
      role: "Software Engineer, KOMPAS.ID",
      imageUrl: "https://www.invofest-harkatnegeri.com/assets/talkshow/talkshow%20bayu.png", 
    },
  ];

    const faqsLeft = [
        { q: "Apa itu INVOFEST?", a: "Invofest (Informatics Vocational Festival) adalah festival tahunan yang diakan oleh program studi sarjana terapan teknik informatika Universitas Harkat Negeri..." },
        { q: "Kapan dan dimana INVOFEST dilaksanakan?", a: "INVOFEST diselenggarakan mulai tanggal 21 Oktober 2025 sampai dengan 27 November 2025. Untuk acara workshop, seminar, talkshow diadakan secara Offline di kampus 1..." },
        { q: "Apakah ada biaya pendaftaran di INVOFEST?", a: "Semua kegiatan dipastikan berbayar ya teman-teman." },
    ];

    const faqsRight = [
        { q: "Bagaimana saya mengetahui pemenang kompetisi?", a: "Pemenang akan diinformasikan melalui media sosial instagram dari invofest @invofest_harkatnegeri." },
        { q: "Apa yang didapat pemenang dalam kompetisi?", a: "Pemenang kompetisi akan mendapatkan hadiah trophy, uang pembinaan, dan e-sertifikat." },
        { q: "Bagaimana cara mendaftar event?", a: "Buka https://www.invofest-harkatnegeri.com lalu pergi ke halaman event yang anda ingin ikuti..." },
    ];


  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* 1. HERO SECTION TALKSHOW */}
      <section className="pt-32 pb-20 px-6 md:px-20 bg-white">
        <div className="flex flex-col md:flex-row items-center gap-12 max-w-7xl mx-auto">
          {/* Sisi Kiri: Teks */}
          <div className="md:w-3/5 space-y-6 text-left">
            <h1 className="text-5xl font-bold text-[#800000] leading-tight">IT Talkshow</h1>
            <div className="space-y-2">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-800 leading-snug">
                “Humanizing Technology: Kolaborasi Manusia dan AI di Masa Depan”
              </h2>
            </div>
            <p className="text-slate-600 text-lg leading-relaxed max-w-2xl">
              Talkshow <strong>“Humanizing Technology: Kolaborasi Manusia dan AI di Masa Depan”</strong> Sebuah diskusi interaktif yang mengeksplorasi cara mengintegrasikan nilai-nilai kemanusiaan seperti etika, empati, dan kreativitas ke dalam pengembangan kecerdasan buatan. yang bertujuan menginspirasi audiens untuk membangun dan memanfaatkan AI sebagai alat kolaboratif yang memperkuat potensi unik manusia, bukan sebagai penggantinya.
            </p>
            <div className="pt-4">
              <Button label="Daftar Sekarang" />
            </div>
          </div>

          {/* Sisi Kanan: Maskot */}
          <div className="md:w-2/5 flex justify-center relative">
            {/* Dekorasi Background */}
            <div className="absolute -z-10 w-64 h-64 bg-pink-100 rounded-full blur-3xl opacity-50"></div>
            <img 
              src="https://www.invofest-harkatnegeri.com/assets/Maskot-Talkshow.png" 
              alt="Talkshow Mascot" 
              className="w-full max-w-md drop-shadow-2xl transform hover:scale-105 transition-transform duration-500" 
            />
          </div>
        </div>
      </section>

      <section className="py-24 px-6 md:px-20 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto space-y-16">
          {/* Header Section */}
          <div className="text-center space-y-4">
            <span className="text-[#800000] font-bold tracking-[0.3em] uppercase text-xs">Guest Speakers</span>
            <Heading 
              title="Pembicara Kami" 
              level="h2" 
              className="text-4xl md:text-5xl font-black text-slate-900" 
            />
            <div className="w-24 h-1.5 bg-[#800000] mx-auto rounded-full"></div>
          </div>

          {/* Grid 4 Pembicara */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {talkshowSpeakers.map((speaker, index) => (
              <SpeakerCard 
                key={index}
                name={speaker.name}
                role={speaker.role}
                imageUrl={speaker.imageUrl}
              />
            ))}
          </div>
        </div>
      </section>
        <div className="text-center space-y-4 mb-20">
          <span className="text-[#991b1b] font-bold tracking-[0.2em] uppercase text-xs">FAQ</span>
          <Heading title="Punya Pertanyaan? Lihat Disini" level="h2" className="text-4xl md:text-5xl font-black text-[#0F172A]" />
          <div className="w-20 h-1.5 bg-[#991b1b] mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto px-4">
            <div className="space-y-6">
              {faqsLeft.map((faq, i) => (
                <Collapse key={i} question={faq.q} answer={faq.a} />
              ))}
            </div>
    
            <div className="space-y-6">
              {faqsRight.map((faq, i) => (
                <Collapse key={i} question={faq.q} answer={faq.a} />
              ))}
            </div>
          </div>
    </div>
  );
}