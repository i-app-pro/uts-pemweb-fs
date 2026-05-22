import { Button } from "../components/atoms/Button";
import { Heading } from "../components/atoms/Heading";
import { SpeakerCard } from "../components/molecules/SpeakerCard";
import { Collapse } from "../components/molecules/Collapse";

export default function Workshop() {
    const speakers = [
        {
        name: "Lhuqita Fazry",
        role: "Mobile Development Developer, Founder Rumah Coding Indonesia",
        imageUrl: "https://www.invofest-harkatnegeri.com/assets/workshop/workshop%20mobile.png",
        },
        {
        name: "M. Dendi Purwanto",
        role: "Artificial Intelligence Software Engineer, PT. Mayar Kernel Supernova",
        imageUrl: "https://www.invofest-harkatnegeri.com/assets/workshop/workshop%20AI.png",
        },
        {
        name: "Danang Avan M",
        role: "Cyber Security Security Analyst, Founder | Contributor TegalSec",
        imageUrl: "https://www.invofest-harkatnegeri.com/assets/workshop/talkshow%20cyber.png",
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
    <div className="pt-32 pb-20 px-6 md:px-20 min-h-screen bg-white">
      <section id="workshop-speakers" className="py-24 border-t border-slate-50 max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-20">
          <span className="text-[#991b1b] font-bold tracking-[0.2em] uppercase text-xs">Expert Panelists</span>
          <Heading title="Pembicara Kami" level="h2" className="text-4xl md:text-5xl font-black text-[#0F172A]" />
          <div className="w-20 h-1.5 bg-[#991b1b] mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
          {speakers.map((s, i) => (
            <SpeakerCard 
              key={i} 
              name={s.name} 
              role={s.role} 
              imageUrl={s.imageUrl} 
            />
          ))}
        </div>
      </section>

      <section className="flex flex-col md:flex-row items-center gap-12 max-w-7xl mx-auto mb-32">
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-5xl font-bold text-[#800000] leading-tight">IT Workshop</h1>
          <p className="text-slate-600 text-lg leading-relaxed">
            Workshop <strong className="text-slate-800">"AI for a Sustainable Future: The Role of Z Generation in the Digital Era"</strong> ini menjembatani antara potensi Generasi Z dan kekuatan AI untuk menciptakan masa depan yang berkelanjutan.
          </p>
          <Button label="DAFTAR IT WORKSHOP" />
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img 
            src="https://www.invofest-harkatnegeri.com/assets/Maskot-Hero.png" 
            alt="Workshop Mascot" 
            className="w-full max-w-md drop-shadow-2xl" 
          />
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