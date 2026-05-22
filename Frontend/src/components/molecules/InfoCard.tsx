import type { ReactNode } from 'react';
import { Button } from '../atoms/Button';

interface InfoCardProps {
  title: string;
  description: string;
  icon?: ReactNode;     
  imageUrl?: string;  
  buttonLabel?: string; 
  className?: string;
}

export const InfoCard = ({ 
  icon, 
  title, 
  description, 
  imageUrl, 
  buttonLabel, 
  className = "" 
}: InfoCardProps) => {
  return (
    <div className={`bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 group flex flex-col h-full border-r-[6px] border-b-[6px] ${className}`}>
      
      {imageUrl && (
        <div className="w-full h-56 overflow-hidden bg-slate-50">
          <img 
            src={imageUrl} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
          />
        </div>
      )}

      <div className="p-8 flex flex-col flex-3">
        {icon && !imageUrl && (
          <div className="w-14 h-14 bg-red-50 text-[#991b1b] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#991b1b] group-hover:text-white transition-colors duration-300">
            <div className="scale-110">
              {icon}
            </div>
          </div>
        )}

        <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-[#991b1b] transition-colors">
          {title}
        </h3>
        
        <p className="text-gray-500 leading-relaxed text-sm">
          {description}
        </p>
        
        <div className="mt-6">
          {buttonLabel ? (
            <Button label={buttonLabel}/>
          ) : (
            <div className="flex items-center text-[#991b1b] text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity">
              SELENGKAPNYA →
            </div>
          )}
        </div>
      </div>
    </div>
  );
};