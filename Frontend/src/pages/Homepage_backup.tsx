// import { Navbar } from "./components/organisms/Navbar";
// import { Button } from "./components/atoms/Button";
// import { Heading } from "./components/atoms/Heading";
// import { SpeakerCard } from "./components/molecules/SpeakerCard";
// import { Collapse } from "../components/molecules/Collapse";
// import { InfoCard } from "../components/molecules/InfoCard";
// import { Globe, Mail, MapPin, Camera, ArrowRight } from "lucide-react";

// function App() {
//   const speakers = [
//     {
//       name: "Dery Agung Triyadi",
//       role: "Aws Indonesia",
//       imageUrl: "https://www.invofest-harkatnegeri.com/assets/seminar/Seminar%20Dery.png",
//     },
//     {
//       name: "Sowam Habibi",
//       role: "Google Indonesia",
//       imageUrl: "https://www.invofest-harkatnegeri.com/assets/seminar/seminar%20sowam.png",
//     },
//     {
//       name: "Lhuqita Fazry",
//       role: "Mobile Development Developer, Founder Rumah Coding Indonesia",
//       imageUrl: "https://www.invofest-harkatnegeri.com/assets/workshop/workshop%20mobile.png",
//     },
//   ];

//   const collapseItems = [
//     {
//       title: "Apa itu Invofest?",
//       description: "Invofest (Informatics Vocational Festival) adalah festival tahunan yang bertujuan untuk menginspirasi dan memberdayakan generasi muda Indonesia melalui kompetisi dan seminar teknologi.",
//     },
//     {
//       title: "Kapan dan di mana Invofest akan diselenggarakan?",
//       description: "Invofest diselenggarakan secara rutin sebagai wadah bagi mahasiswa informatika untuk berkompetisi dan belajar langsung dari praktisi industri global.",
//     },
//     {
//       title: "Siapa saja yang dapat mengikuti Invofest?",
//       description: "Invofest terbuka untuk mahasiswa, pelajar, dan profesional muda yang memiliki minat besar dalam pengembangan teknologi digital.",
//     },
//   ];

//   const cardItems = [
//     { title: "IT Seminar", description: "Seminar nasional yang menghadirkan pembicara ahli di bidang teknologi terkini." },
//     { title: "IT Talkshow", description: "Diskusi santai tapi berisi bersama para praktisi startup dan industri tech." },
//     { title: "IT Competition", description: "Ajang unjuk kemampuan dalam berbagai kategori kompetisi IT yang bergengsi." },
//     { title: "IT Workshop", description: "Sesi praktik langsung (hands-on) untuk mengasah skill teknis kamu secara intensif." },
//   ];

//   return (
//     <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-red-100 selection:text-[#991b1b]">
//       <Navbar />

//       <main className="max-w-7xl mx-auto px-6 md:px-12">
//         {/* HERO SECTION */}
        // <section id="home" className="pt-44 pb-24 flex flex-col md:flex-row gap-12 justify-between items-center">
        //   <div className="md:w-3/5 space-y-8 animate-fade-in">
        //     <img 
        //       src="https://www.invofest-harkatnegeri.com/assets/text-image.png" 
        //       alt="Invofest Text" 
        //       className="w-125 h-auto drop-shadow-sm" 
        //     />
        //     <p className="text-slate-500 text-xl leading-relaxed max-w-xl font-medium">
        //       Wadah inovasi bagi talenta digital muda Indonesia. Bergabunglah dalam festival informatika vokasi terbesar tahun ini!
        //     </p>
        //     <div className="flex flex-wrap gap-4">
        //       <Button 
        //         label="Info Selengkapnya" 
        //         className="bg-[#991b1b] hover:bg-[#7f1616] text-white px-10 py-4 rounded-full shadow-xl shadow-red-100 transition-all font-bold" 
        //       />
        //       <Button 
        //         label="Hubungi Panitia" 
        //         variant="outline" 
        //         className="border-2 border-[#991b1b] text-[#991b1b] hover:bg-red-50 px-10 py-4 rounded-full transition-all font-bold" 
        //       />
        //     </div>
        //   </div>
        //   <div className="md:w-2/5 relative">
        //     <div className="absolute -z-10 w-72 h-72 bg-red-50 rounded-full blur-3xl opacity-60 -top-10 -right-5 animate-pulse"></div>
        //     <img 
        //       src="https://www.invofest-harkatnegeri.com/assets/Maskot-Hero.png" 
        //       alt="Invofest Mascot" 
        //       className="w-full h-auto drop-shadow-2xl transform hover:scale-105 transition-transform duration-700 ease-out" 
        //     />
        //   </div>
        // </section>

        // {/* SPEAKERS SECTION */}
        // <section id="seminar" className="py-24 border-t border-slate-50">
        //   <div className="text-center space-y-4 mb-20">
        //     <span className="text-[#991b1b] font-bold tracking-[0.2em] uppercase text-xs">Expert Panelists</span>
        //     <Heading title="Pembicara Kami" level="h2" className="text-4xl md:text-5xl font-black text-[#0F172A]" />
        //     <div className="w-20 h-1.5 bg-[#991b1b] mx-auto rounded-full"></div>
        //   </div>
        //   <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        //     {speakers.map((s, i) => (
        //       <SpeakerCard key={i} name={s.name} role={s.role} imageUrl={s.imageUrl} />
        //     ))}
        //   </div>
        // </section>

//         {/* EVENTS SECTION */}
//         <section id="competition" className="py-24 bg-slate-50/50 rounded-[48px] px-8 md:px-16 border-y border-red-50/50">
//           <div className="text-center space-y-4 mb-16">
//             <span className="text-[#991b1b] font-bold tracking-[0.2em] uppercase text-xs">Event Highlights</span>
//             <Heading title="Rangkaian Acara" level="h2" className="text-4xl font-black text-[#0F172A]" />
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
//             {cardItems.map((item, i) => (
//               <InfoCard 
//                 key={i} 
//                 title={item.title} 
//                 description={item.description} 
//                 icon={<ArrowRight className="text-white" size={20} />}
//                 className="border-none shadow-md"
//               />
//             ))}
//           </div>
//         </section>

//         {/* FAQ SECTION */}
//         <section id="faq" className="py-24 max-w-4xl mx-auto">
//           <div className="text-center mb-16 space-y-4">
//             <Heading title="F.A.Q" level="h2" className="text-3xl font-black text-[#0F172A]" />
//             <p className="text-slate-400">Pertanyaan yang sering diajukan mengenai acara kami.</p>
//           </div>
//           <div className="space-y-4">
//             {collapseItems.map((item, i) => (
//               <Collapse key={i} question={item.title} answer={item.description} />
//             ))}
//           </div>
//         </section>
//       </main>

//       {/* FOOTER SECTION */}
//       <footer className="bg-[#eeb1bf] text- pt-24 pb-12 border-t-8 border-[#eeb1bf]">
//         <div className="max-w-7xl mx-auto px-8 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-20">
//           <div className="space-y-8">
//             <img 
//               src="https://www.invofest-harkatnegeri.com/assets/nav-logo.png" 
//               alt="Invofest Logo" 
//               className="h-14 w-auto brightness-0 invert" 
//             />
//             <p className="text-gray-600 text-sm leading-relaxed">
//               Informatics Vocational Festival merupakan perayaan teknologi dan kreativitas tahunan bagi pengembang masa depan Indonesia.
//             </p>
//           </div>
          
//           <div>
//             <h4 className="font-bold text-lg mb-8 text-white border-l-4 border-[#ee7f7f] pl-4">Navigasi</h4>
//             <ul className="space-y-4 text-sm text-gray-600">
//               <li><a href="#home" className="hover:text-[#991b1b] transition-colors">Beranda</a></li>
//               <li><a href="#competition" className="hover:text-[#991b1b] transition-colors">Kompetisi</a></li>
//               <li><a href="#seminar" className="hover:text-[#991b1b] transition-colors">Seminar</a></li>
//             </ul>
//           </div>

//           <div>
//             <h4 className="font-bold text-lg mb-8 text-white border-l-4 border-[#ee7f7f] pl-4">Hubungi Kami</h4>
//             <div className="space-y-5 text-sm text-gray-600">
//               <p className="flex items-center gap-4 hover:text-white transition-colors cursor-pointer group">
//                 <Mail size={20} className="text-[#ee7f7f] group-hover:scale-110 transition-transform"/> info@invofest.com
//               </p>
//               <p className="flex items-center gap-4 hover:text-white transition-colors cursor-pointer group">
//                 <MapPin size={20} className="text-[#ee7f7f] group-hover:scale-110 transition-transform"/> Politeknik Harapan Bersama
//               </p>
//             </div>
//           </div>

//           <div>
//             <h4 className="font-bold text-lg mb-8 text-white border-l-4 border-[#ee7f7f] pl-4">Ikuti Kami</h4>
//             <div className="flex gap-4">
//               <a href="#" className="bg-slate-200 p-4 rounded-2xl hover:bg-[#ee7f7f] transition-all duration-300 hover:-translate-y-2">
//                 <Camera size={22} />
//               </a>
//               <a href="#" className="bg-slate-200 p-4 rounded-2xl hover:bg-[#ee7f7f] transition-all duration-300 hover:-translate-y-2">
//                 <Globe size={22} />
//               </a>
//             </div>
//           </div>
//         </div>

//         <div className="text-center mt-24 pt-8 border-t border-slate-800/50 text-slate-500 text-[10px] uppercase tracking-[0.3em] font-bold">
//           © 2024 - 2026 INVOFEST. All rights reserved.
//         </div>
//       </footer>
//     </div>
//   );
// }

// export default App;