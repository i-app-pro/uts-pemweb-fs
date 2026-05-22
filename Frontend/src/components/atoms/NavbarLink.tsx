import type { ReactNode } from 'react';
import { NavLink } from 'react-router-dom';

interface NavLinkProps { 
  label: string; 
  href: string; 
  icon?: ReactNode; 
  isActive?: boolean; 
}

export const NavbarLink = ({ label, href, icon, isActive = false }: NavLinkProps) => { 
  const activeStyle = "text-[#991b1b] border-[#991b1b]";

  const defaultStyle = "text-gray-500 border-transparent hover:text-[#991b1b] hover:border-[#991b1b]";

  return ( 
    <NavLink 
      to={href} 
      className={`flex items-center gap-2 px-4 py-3 font-semibold transition-all duration-300 ${isActive ? activeStyle : defaultStyle}`}
    > 
      {icon && (
        <span className={`flex items-center transition-colors duration-300 ${isActive ? 'text-[#991b1b]' : 'text-gray-400 group-hover:text-[#991b1b]'}`}>
          {icon}
        </span>
      )} 
      
      <span className="text-sm tracking-wide">{label}</span> 
    </NavLink> 
  ); 
};