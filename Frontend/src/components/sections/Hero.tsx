import { Button } from "../atoms/Button";

export const Hero = () => {
  return (
    <section id="home" className="pt-40 pb-20 bg-linear-to-b from-red-50 to-white text-center">
      <div className="container mx-auto px-4">
        {/* Badge - Sekarang menggunakan nuansa Maroon */}
        <span className="bg-red-100 text-[#991b1b] px-5 py-1.5 rounded-full text-xs font-black uppercase tracking-[0.2em] shadow-sm">
          Seminar Nasional 2026
        </span>
        
        <h1 className="text-5xl md:text-7xl font-black text-slate-900 mt-8 mb-6 leading-tight max-w-5xl mx-auto tracking-tighter">
          Digitalization of the <span className="text-[#991b1b]">Entrepreneurial</span> Ecosystem
        </h1>
        
        <p className="max-w-2xl mx-auto text-slate-500 text-lg md:text-xl mb-12 leading-relaxed">
          Ayo bergabung bersama ribuan mahasiswa lainnya dalam festival teknologi terbesar untuk menginspirasi generasi inovator masa depan.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-5">
          {/* Tombol akan otomatis Maroon karena kita sudah mengubah komponen Button-nya */}
          <Button 
            label="Daftar Sekarang" 
            // className="px-10 py-4 shadow-xl shadow-red-100" 
          />
          <Button 
            label="Lihat Jadwal" 
            variant="outline" 
            // className="px-10 py-4" 
          />
        </div>
      </div>
    </section>
  );
};