import { Outlet } from "react-router-dom";
import { Navbar } from "../components/organisms/Header";
import { Mail, MapPin, Camera, Globe } from "lucide-react";

export default function MainLayout(){
    return(
        <div className="min-h-screen flex flex-col justify-between">
            <Navbar />

            <main className="max-w-7xl mx-auto py-6">
                <Outlet /> 
            </main>

      {/* FOOTER SECTION */}
      <footer className="bg-[#eeb1bf] text- pt-24 pb-12 border-t-8 border-[#eeb1bf]">
        <div className="max-w-7xl mx-auto px-8 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-20">
          <div className="space-y-8">
            <img 
              src="https://www.invofest-harkatnegeri.com/assets/nav-logo.png" 
              alt="Invofest Logo" 
              className="h-14 w-auto brightness-0 invert" 
            />
            <p className="text-gray-600 text-sm leading-relaxed">
              Informatics Vocational Festival merupakan perayaan teknologi dan kreativitas tahunan bagi pengembang masa depan Indonesia.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-8 text-white border-l-4 border-[#ee7f7f] pl-4">Navigasi</h4>
            <ul className="space-y-4 text-sm text-gray-600">
              <li><a href="#home" className="hover:text-[#991b1b] transition-colors">Beranda</a></li>
              <li><a href="#competition" className="hover:text-[#991b1b] transition-colors">Kompetisi</a></li>
              <li><a href="#seminar" className="hover:text-[#991b1b] transition-colors">Seminar</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-8 text-white border-l-4 border-[#ee7f7f] pl-4">Hubungi Kami</h4>
            <div className="space-y-5 text-sm text-gray-600">
              <p className="flex items-center gap-4 hover:text-white transition-colors cursor-pointer group">
                <Mail size={20} className="text-[#ee7f7f] group-hover:scale-110 transition-transform"/> info@invofest.com
              </p>
              <p className="flex items-center gap-4 hover:text-white transition-colors cursor-pointer group">
                <MapPin size={20} className="text-[#ee7f7f] group-hover:scale-110 transition-transform"/> Politeknik Harapan Bersama
              </p>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-8 text-white border-l-4 border-[#ee7f7f] pl-4">Ikuti Kami</h4>
            <div className="flex gap-4">
              <a href="#" className="bg-slate-200 p-4 rounded-2xl hover:bg-[#ee7f7f] transition-all duration-300 hover:-translate-y-2">
                <Camera size={22} />
              </a>
              <a href="#" className="bg-slate-200 p-4 rounded-2xl hover:bg-[#ee7f7f] transition-all duration-300 hover:-translate-y-2">
                <Globe size={22} />
              </a>
            </div>
          </div>
        </div>

        <div className="text-center mt-24 pt-8 border-t border-slate-800/50 text-slate-500 text-[10px] uppercase tracking-[0.3em] font-bold">
          © 2024 - 2026 INVOFEST. All rights reserved.
        </div>
      </footer>
        </div>
    )
}