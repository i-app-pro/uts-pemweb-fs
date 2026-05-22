import { Button } from "../components/atoms/Button";
import { Heading } from "../components/atoms/Heading";
import { Collapse } from "../components/molecules/Collapse";
import { SpeakerCard } from "../components/molecules/SpeakerCard";

export default function Seminar() {
    const speakers = [
        {
        name: "Dery Agung Triyadi",
        role: "Aws Indonesia",
        imageUrl: "https://www.invofest-harkatnegeri.com/assets/seminar/Seminar%20Dery.png",
        },
        {
        name: "Sowam Habibi",
        role: "Google Indonesia",
        imageUrl: "https://www.invofest-harkatnegeri.com/assets/seminar/seminar%20sowam.png",
        }
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
        <div className="pt-32 pb-20 px-6 md:px-20 min-h-screen">
        <div className="flex flex-col md:flex-row items-center gap-12 max-w-7xl mx-auto">
            <div className="md:w-1/2 space-y-6">
            <h1 className="text-5xl font-bold text-[#800000] leading-tight">IT Seminar</h1>
            <p className="text-slate-600 text-lg leading-relaxed">
                Seminar Nasional Teknologi Informasi ini mengangkat tema <strong className="text-slate-800">"Human-AI Integration: Merancang Arsitektur Kolaboratif, Bukan Kompetitif."</strong> Kami bertujuan untuk menggeser fokus dari ketakutan akan kompetisi menjadi eksplorasi peluang kolaborasi.
            </p>
            <div className="bg-red-50 p-6 rounded-xl border-l-4 border-[#800000]">
                <p className="text-sm text-slate-500 italic">"Seminar ini akan mengupas tuntas bagaimana kita dapat merancang sistem, etika, dan lingkungan kerja di mana AI berfungsi sebagai mitra."</p>
            </div>
            <Button label="DAFTAR IT SEMINAR" />
            </div>
            <div className="md:w-1/2 flex justify-center">
            <img 
                src="https://www.invofest-harkatnegeri.com/assets/Maskot-Hero.png" 
                alt="Seminar Mascot" 
                className="w-full max-w-md drop-shadow-2xl animate-bounce-slow" 
            />
            </div>
        </div>
        <section className="py-24 px-6 md:px-20">
            <div className="max-w-6xl mx-auto text-center space-y-8">
            <Heading 
                title="IT Seminar" 
                level="h2" 
                className="text-4xl md:text-5xl font-bold text-[#800000] uppercase tracking-tight" 
            />
            <div className="space-y-6">
                <p className="text-slate-600 text-lg md:text-xl leading-relaxed">Seminar bertajuk “Human-AI Integration: Merancang Arsitektur Kolaboratif, 
                    Di tengah pesatnya kemajuan kecerdasan buatan (AI), narasi yang sering muncul adalah tentang persaingan antara manusia dan mesin. 
                    Kekhawatiran akan penggantian peran manusia oleh teknologi cerdas menjadi diskusi utama di berbagai sektor. 
                    Namun, bagaimana jika kita mengubah paradigma tersebut? Seminar Nasional Teknologi Informasi ini hadir 
                    untuk menjawab tantangan itu dengan mengangkat tema "Human-AI Integration: Merancang Arsitektur Kolaboratif, Bukan Kompetitif.” 
                    Kami bertujuan untuk menggeser fokus dari ketakutan akan kompetisi menjadi eksplorasi peluang kolaborasi. 
                    Seminar ini akan mengupas tuntas bagaimana kita dapat merancang sistem, etika, dan lingkungan kerja di mana 
                    AI berfungsi sebagai mitra yang memperkuat kecerdasan, kreativitas, dan produktivitas manusia—bukan sebagai pengganti.</p>
            </div>
            </div>
        </section>
        <section id="workshop-speakers" className="py-24 border-t border-slate-50 max-w-7xl mx-auto">
            <div className="text-center space-y-4 mb-20">
            <span className="text-[#991b1b] font-bold tracking-[0.2em] uppercase text-xs">Expert Panelists</span>
            <Heading title="Pembicara Kami" level="h2" className="text-4xl md:text-5xl font-black text-[#0F172A]" />
            <div className="w-20 h-1.5 bg-[#991b1b] mx-auto rounded-full"></div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
        <section>
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
        </section>
    </div>
  );
}