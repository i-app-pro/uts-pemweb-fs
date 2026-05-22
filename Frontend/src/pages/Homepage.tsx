import { Button } from "../components/atoms/Button";
import { Collapse } from "../components/molecules/Collapse";

export default function Homepage() {
  const categories = [
    { title: "IT Seminar", desc: "Seminar nasional membahas Human-AI Integration...", label: "INFO SELENGKAPNYA" },
    { title: "IT Talkshow", desc: "Talkshow Humanizing Technology: Kolaborasi Manusia...", label: "INFO SELENGKAPNYA" },
    { title: "IT Competition", desc: "Kompetisi 'From Creation to Innovation' mengajak...", label: "INFO SELENGKAPNYA" },
    { title: "IT Workshop", desc: "Workshop AI for a Sustainable Future: Role of Gen Z...", label: "INFO SELENGKAPNYA" },
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
    <div className="space-y-32 mb-20">
      <section id="home" className="pt-44 pb-24 flex flex-col md:flex-row gap-12 justify-between items-center px-4 md:px-20">
        <div className="md:w-3/5 space-y-8 animate-fade-in">
          <img 
            src="https://www.invofest-harkatnegeri.com/assets/text-image.png" 
            alt="Invofest Text" 
            className="w-125 h-auto drop-shadow-sm" 
          />
          <p className="text-slate-500 text-xl leading-relaxed max-w-xl font-medium">
            Wadah inovasi bagi talenta digital muda Indonesia. Bergabunglah dalam festival informatika vokasi terbesar tahun ini!
          </p>
          <div className="flex flex-wrap gap-4">
            <Button label="Info Selengkapnya" />
            <Button label="Hubungi Panitia" variant="outline" />
          </div>
        </div>
        <div className="md:w-2/5 relative">
          <div className="absolute -z-10 w-72 h-72 bg-red-50 rounded-full blur-3xl opacity-60 -top-10 -right-5 animate-pulse"></div>
          <img 
            src="https://www.invofest-harkatnegeri.com/assets/Maskot-Hero.png" 
            alt="Invofest Mascot" 
            className="w-full h-auto drop-shadow-2xl transform hover:scale-105 transition-transform duration-700 ease-out" 
          />
        </div>
      </section>

      <section className="bg-[#FDF2F4] py-20 px-4 md:px-20 rounded-[40px]">
        <div className="max-w-4xl">
          <h2 className="text-4xl font-bold text-[#800000] mb-6">Tentang INVOFEST</h2>
          <p className="text-slate-600 leading-relaxed text-lg mb-12">
            Invofest 2025, yang diselenggarakan oleh sarjana terapan Teknik Informatika Universitas Harkat Negeri, 
            adalah festival tahunan yang bertujuan untuk menginspirasi dan memberdayakan generasi muda Indonesia...
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {categories.map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm border-r-4 border-b-4 border-[#800000] flex flex-col justify-between h-full">
              <div>
                <h3 className="text-[#800000] font-bold text-xl mb-4">{item.title}</h3>
                <p className="text-sm text-slate-500 mb-6">{item.desc}</p>
              </div>
              <Button label={item.label} variant="primary" />
            </div>
          ))}
        </div>
      </section>

      <section className="px-4 md:px-20 space-y-40">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-5xl font-bold text-[#800000]">IT Seminar</h2>
            <p className="text-slate-600 leading-relaxed text-lg">
              Seminar Nasional Teknologi Informasi ini mengangkat tema <strong>"Human-AI Integration: Merancang Arsitektur Kolaboratif, Bukan Kompetitif."</strong>
            </p>
            <Button label="DAFTAR IT SEMINAR" />
          </div>
          <div className="md:w-1/2">
            <img src="https://www.invofest-harkatnegeri.com/assets/Maskot-Hero.png" alt="Seminar" className="w-full max-w-md mx-auto" />
          </div>
        </div>
      </section>

      <section className="px-4 md:px-20 space-y-40">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-5xl font-bold text-[#800000]">IT Talkshow</h2>
            <p className="text-slate-600 leading-relaxed text-lg">
              Talkshow berskala nasional: “Humanizing Technology: Kolaborasi Manusia dan AI di Masa Depan.” 
              Acara ini dirancang bukan untuk membahas teknologi sebagai entitas yang dingin dan terpisah, 
              melainkan untuk menggali bagaimana kita dapat menanamkan nilai-nilai kemanusiaan—seperti empati, etika, dan kreativitas—ke dalam inti pengembangan AI. 
              Kami akan mengupas tuntas visi masa depan di mana AI tidak menjadi pesaing, 
              tetapi menjadi mitra kolaboratif yang memperkuat potensi unik manusia. 
              Talkshow ini bertujuan untuk menginspirasi generasi muda dan para penggiat teknologi untuk tidak hanya menjadi pengguna, 
              tetapi juga menjadi arsitek masa depan digital yang lebih manusiawi. Mari bergabung untuk meningkatkan pengetahuan, 
              mengembangkan potensi diri, dan menjadi bagian dari dialog penting dalam membentuk era kolaborasi manusia dan AI.
            </p>
            <Button label="DAFTAR IT TALKSHOW" />
          </div>
          <div className="md:w-1/2">
            <img src="https://www.invofest-harkatnegeri.com/assets/Maskot-Hero.png" alt="Seminar" className="w-full max-w-md mx-auto" />
          </div>
        </div>
      </section>

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