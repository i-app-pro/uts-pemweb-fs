interface BaseInputProps { 
  label: string; 
  name: string; 
  register: any; 
  error?: string; 
  type?: string; 
  placeholder?: string; 
} 
 
export const Input: React.FC<BaseInputProps> = ({ 
  label, 
  name, 
  register, 
  error, 
  type = "text", 
  placeholder 
}) => { 
  return ( 
    <div className="flex flex-col gap-1"> 
      <label className="font-medium">{label}</label> 
 
      <input 
        type={type} 
        placeholder={placeholder} 
        {...register(name)} 
        className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#991b1b]" 
      /> 
 
      {error && <p className="text-red-500 text-sm">{error}</p>} 
    </div> 
  ); 
}; 