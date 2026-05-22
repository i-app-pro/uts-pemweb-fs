interface SpeakerProps { 
  name: string; 
  role: string; 
  imageUrl: string; 
} 

export const SpeakerCard = ({ name, role, imageUrl }: SpeakerProps) => { 
  return ( 
    <div className="group bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 text-center"> 
      {/* Frame Foto dengan aksen Maroon muda */}
      <div className="w-40 h-40 rounded-full mx-auto mb-6 overflow-hidden border-4 border-red-50 shadow-inner">
        <img 
          src={imageUrl || "/default-avatar.png"} 
          alt={name} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
        /> 
      </div>

      {/* Nama Pembicara - Berubah Maroon saat Hover */}
      <h3 className="text-xl font-bold text-gray-800 group-hover:text-[#991b1b] transition-colors mb-2">
        {name}
      </h3> 

      {/* Role - Menggunakan warna Maroon */}
      <p className="text-[#991b1b] font-bold text-sm uppercase tracking-widest">
        {role}
      </p>

      {/* Garis dekoratif kecil saat hover agar tidak terlihat kosong tanpa tombol */}
      <div className="w-0 h-1 bg-[#991b1b] mx-auto mt-4 group-hover:w-16 transition-all duration-500 rounded-full"></div>
    </div> 
  ); 
};