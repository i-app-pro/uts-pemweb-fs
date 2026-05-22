import { useState } from "react";
import { Home, Trophy, BookOpen, Laptop, Mic, UserCircle } from "lucide-react"; 
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState("/");

  const menuItems = [
    { label: "Beranda", href: "/", icon: <Home size={18} /> },
    { label: "Competition", href: "/competition", icon: <Trophy size={18} /> },
    { label: "Seminar", href: "/seminar", icon: <BookOpen size={18} /> },
    { label: "Workshop", href: "/workshop", icon: <Laptop size={18} /> },
    { label: "Talkshow", href: "/talkshow", icon: <Mic size={18} /> },
  ];

  const activeStyle = "text-[#991b1b] border-[#991b1b]";

  const defaultStyle = "text-gray-500 border-transparent hover:text-[#991b1b] hover:border-[#991b1b]";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-10 py-3 bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100">
      <div className="flex items-center">
        <a href="/">
          <img 
            src="https://www.invofest-harkatnegeri.com/assets/nav-logo.png" 
            alt="Invofest Logo" 
            className="h-10 w-auto transition-transform hover:scale-105" 
          />
        </a>
      </div>

      <div className="flex gap-1 items-center">
        {menuItems.map((item) => (
          <div key={item.label} onClick={() => setActiveMenu(item.href)}>
            <NavLink 
              to={item.href} 
              className={`flex items-center gap-2 px-4 py-3 font-semibold  ${item.href === activeMenu ? activeStyle : defaultStyle}`}
            > 
              {item.icon && (
                <span className={`flex items-center  ${item.href === activeMenu ? 'text-[#991b1b]' : 'text-gray-400 group-hover:text-[#991b1b]'}`}>
                  {item.icon}
                </span>
              )} 
              
              <span className="text-sm tracking-wide">{item.label}
              </span> 
            </NavLink> 
          </div>
        ))}
        <NavLink
            to="/loginform"
            className={({ isActive }) => 
              `flex items-center gap-2 px-4 py-2 font-medium
               transition-all duration-200 
               ${isActive ? activeStyle : defaultStyle
              }`}>
            <span className="w-5 h-5">
              <UserCircle size={24} />
            </span>
        </NavLink >
        

      </div>
    </header>
  );
};