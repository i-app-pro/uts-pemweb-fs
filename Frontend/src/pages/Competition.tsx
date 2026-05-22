// src/pages/Competition.tsx
import { Heading } from "../components/atoms/Heading";
import { InfoCard } from "../components/molecules/InfoCard";
import { Button } from "../components/atoms/Button";
import { Collapse } from "../components/molecules/Collapse";

export default function Competition() {
  const competitionList = [
    {
      title: "Poster Design Competition",
      description: "Poster Design Competition ini adalah kompetisi untuk menciptakan suatu karya dalam bentuk poster digital yang komunikatif dan inspiratif, guna menyuarakan gagasan atau solusi visual terhadap permasalahan yang ada sekarang ini.",
      imageUrl: "https://www.invofest-harkatnegeri.com/assets/competition-card/software_dev.png",
    },
    {
      title: "UI/UX Design Competition",
      description: "UI/UX Design Competition ini adalah kompetisi untuk menciptakan dan merancang inovasi sebuah produk digital yang dapat berupa website maupun mobile apps serta dapat membuat nyaman calon pengguna.",
      imageUrl: "https://www.invofest-harkatnegeri.com/assets/competition-card/ui_ux.png",
    },
    {
      title: "Web Design Competition",
      description: "Web Design Competition ini adalah kompetisi untuk menciptakan suatu perangkat lunak berbasis website yang menggunakan desain menarik, unik, dan responsive pada semua device serta sesuai dengan tema kompetisi.",
      imageUrl: "https://www.invofest-harkatnegeri.com/assets/competition-card/web_design.png",
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
    <div className="min-h-screen bg-white">
      <section className="pt-32 pb-20 px-6 md:px-20 bg-white">
        <div className="flex flex-col md:flex-row items-center gap-12 max-w-7xl mx-auto">
          <div className="md:w-1/2 flex justify-center">
            <img 
              src="https://www.invofest-harkatnegeri.com/assets/Maskot-Hero.png" 
              alt="Competition Mascot" 
              className="w-full max-w-md drop-shadow-xl" 
            />
          </div>
          <div className="md:w-1/2 space-y-6 text-left">
            <h1 className="text-5xl font-bold text-[#800000] leading-tight">IT Competition</h1>
            <h2 className="text-2xl font-bold text-[#800000]">"From Creation to Innovation"</h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              Kompetisi dalam INVOFEST ini mengusung tema <strong>"From Creation to Innovation"</strong>. Tema ini bertujuan mengajak generasi muda untuk mengembangkan inovasi dan kreativitas guna membentuk kelompok yang memiliki potensi luar biasa, yang mampu mewujudkan masa depan yang berkelanjutan.
            </p>
            <div className="flex gap-4">
              <Button label="INFO SELENGKAPNYA" />
              <Button label="HUBUNGI PANITIA" variant="outline"  />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 md:px-20">
        <div className="max-w-6xl mx-auto text-center space-y-8">
          <Heading 
            title="DESKRIPSI KOMPETISI" 
            level="h2" 
            className="text-4xl md:text-5xl font-bold text-[#800000] uppercase tracking-tight" 
          />
          <div className="space-y-6">
            <p className="text-slate-600 text-lg md:text-xl leading-relaxed">
              Kompetisi atau perlombaan yang ada dalam kegiatan <span className="font-bold">INVOFEST (Informatics Vocational Festival) 2025</span> adalah diantaranya 
              National Poster Design Competition, UI UX Design Competition, dan juga Web Design Competition.
            </p>
            <p className="text-slate-600 text-lg md:text-xl leading-relaxed">
              Melalui pendekatan ini, diharapkan generasi ini akan berperan dalam menciptakan solusi-solusi baru untuk tantangan masa kini dan mendatang, baik dalam hal teknologi, lingkungan, pendidikan, maupun tanggung jawab sosial.
            </p>
          </div>
        </div>
      </section>
      <section className="py-24 px-6 md:px-20 bg-white">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <Heading 
              title="DAFTAR KOMPETISI" 
              level="h2" 
              className="text-4xl md:text-5xl font-bold text-[#800000]" 
            />
            <p className="text-slate-500 text-lg">Berikut Adalah Daftar Kompetisi Yang Ada Pada Event INVOFEST.</p>
            <div className="w-24 h-1.5 bg-[#800000] mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {competitionList.map((item, index) => (
              <div key={index} className="flex justify-center">
                <InfoCard 
                  title={item.title}
                  description={item.description}
                  imageUrl={item.imageUrl}
                  buttonLabel="INFO SELENGKAPNYA"
                />
              </div>
            ))}
          </div>
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