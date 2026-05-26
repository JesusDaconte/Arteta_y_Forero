import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NavLink, useLocation } from 'react-router';

const navItems = [
  { label: 'Inicio', to: '/' },
  { label: 'Servicios', to: '/servicios' },
  { label: 'Nosotros', to: '/nosotros' },
  { label: 'Contacto', to: '/contacto' },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#1C2B3A]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-18" style={{ height: '72px' }}>
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-3 select-none" onClick={() => setOpen(false)}>
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="36" height="36" fill="#B89A4C" />
            <text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle" fill="#ffffff" fontFamily="Inter, sans-serif" fontSize="13" fontWeight="600" letterSpacing="0.5">A&amp;F</text>
          </svg>
          <div className="flex flex-col leading-none">
            <span className="text-white tracking-widest text-xs font-light uppercase">Arteta</span>
            <span className="text-[#B89A4C] tracking-widest text-xs font-light uppercase">& Forero</span>
          </div>
        </NavLink>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `text-sm tracking-widest uppercase transition-colors ${
                  isActive
                    ? 'text-[#B89A4C]'
                    : 'text-white/70 hover:text-white'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <NavLink
            to="/contacto"
            className="ml-4 px-6 py-2.5 bg-[#B89A4C] text-white text-xs tracking-widest uppercase hover:bg-[#a68a3c] transition-colors"
          >
            Consulta
          </NavLink>
        </nav>

        {/* Mobile toggle */}
        <button className="md:hidden text-white p-2" onClick={() => setOpen(!open)}>
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#1C2B3A] border-t border-white/10">
          <nav className="flex flex-col px-6 py-4 gap-4">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `text-sm tracking-widest uppercase py-2 border-b border-white/10 transition-colors ${
                    isActive ? 'text-[#B89A4C]' : 'text-white/70'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <NavLink
              to="/contacto"
              onClick={() => setOpen(false)}
              className="mt-2 px-6 py-3 bg-[#B89A4C] text-white text-xs tracking-widest uppercase text-center"
            >
              Consulta Gratuita
            </NavLink>
          </nav>
        </div>
      )}
    </header>
  );
}
