import { NavLink } from 'react-router';
import { Linkedin, Instagram, Facebook } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#1C2B3A] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <svg width="32" height="32" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="36" height="36" fill="#B89A4C" />
                <text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle" fill="#ffffff" fontFamily="Inter, sans-serif" fontSize="13" fontWeight="600" letterSpacing="0.5">A&amp;F</text>
              </svg>
              <span className="text-sm tracking-widest uppercase font-light">
                Arteta <span className="text-[#B89A4C]">&</span> Forero
              </span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed max-w-sm">
              Firma de abogados con experiencia comprobada, comprometida con la defensa de sus derechos y la solución efectiva de sus asuntos legales.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs tracking-widest uppercase text-[#B89A4C] mb-4">Navegación</h4>
            <ul className="space-y-2 text-sm text-white/50">
              {[['/', 'Inicio'], ['/servicios', 'Servicios'], ['/nosotros', 'Nosotros'], ['/contacto', 'Contacto']].map(([to, label]) => (
                <li key={to}>
                  <NavLink to={to} className="hover:text-white transition-colors">{label}</NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs tracking-widest uppercase text-[#B89A4C] mb-4">Contacto</h4>
            <ul className="space-y-2 text-sm text-white/50">
              <li>info@artetaforero.com</li>
              <li>+57 (601) 123 4567</li>
              <li>Bogotá, Colombia</li>
            </ul>
            <div className="flex gap-3 mt-6">
              {[Linkedin, Instagram, Facebook].map((Icon, i) => (
                <a key={i} href="#" className="w-8 h-8 border border-white/20 flex items-center justify-center hover:border-[#B89A4C] hover:text-[#B89A4C] transition-colors">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/30 tracking-wide">
            © 2026 Arteta & Forero Abogados. Todos los derechos reservados.
          </p>
          <div className="flex gap-6 text-xs text-white/30">
            <a href="#" className="hover:text-white/70 transition-colors">Política de Privacidad</a>
            <a href="#" className="hover:text-white/70 transition-colors">Términos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
