interface ButtonProps { 
  label: string; 
  type?: "button" | "submit"; 
  variant?: "primary" | "outline"; 
  isLoading?: boolean;
  onClick?: () => void; 
} 
 
export const Button: React.FC<ButtonProps> = ({ 
  label, 
  type = "submit", 
  variant = "primary", 
  isLoading = false,
  onClick 
}) => { 
  const base = "px-4 py-2 rounded font-medium"; 
 
  const styles = { 
    primary: "bg-[#991b1b] text-white hover:bg-[#7f1616] shadow-md hover:shadow-lg shadow-red-100", 
    outline: "border-2 border-[#991b1b] text-[#991b1b] hover:bg-[#991b1b] hover:text-white" 
  }; 
 
  return ( 
    <button 
      type={type}
      onClick={onClick} 
      disabled={isLoading} 
      className={`${base} ${styles[variant]}`} 
    > 
      {isLoading ? "Loading..." : label} 
    </button> 
  ); 
};