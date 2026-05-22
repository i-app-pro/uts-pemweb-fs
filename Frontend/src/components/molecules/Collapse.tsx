import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface CollapseProps {
  question: string;
  answer: string;
}

export const Collapse = ({ question, answer }: CollapseProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-6 bg-white rounded-xl border border-[#800000] shadow-sm overflow-hidden transition-all duration-300 border-r-[6px] border-b-[6px] ">
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="w-full px-6 py-5 flex justify-between items-start text-left hover:bg-pink-50/50 transition-colors"
      >
        <div className="flex gap-4">
          <div className={`mt-1 p-1 rounded-md transition-colors ${isOpen ? 'bg-[#800000] text-white' : 'bg-gray-100 text-gray-500'}`}>
            <ChevronDown size={18} className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
          </div>
          <span className={`font-bold text-lg ${isOpen ? 'text-[#800000]' : 'text-slate-700'}`}>
            {question}
          </span>
        </div>
      </button>

      <div className={`px-16 overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-120 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}>
        <p className="text-slate-500 leading-relaxed text-sm md:text-base">
          {answer}
        </p>
      </div>
    </div>
  );
};