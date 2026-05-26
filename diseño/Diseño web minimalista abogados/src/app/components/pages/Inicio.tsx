import { NavLink } from 'react-router';
import { ArrowRight, Scale, ShieldCheck, Users } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

const stats = [
  { value: '+20', label: 'Años de experiencia' },
  { value: '+500', label: 'Casos resueltos' },
  { value: '98%', label: 'Satisfacción del cliente' },
  { value: '+12', label: 'Abogados especializados' },
];

const highlights = [
  {
    icon: Scale,
    title: 'Asesoría Integral',
    description: 'Acompañamiento legal completo desde el análisis inicial hasta la resolución de su caso.',
  },
  {
    icon: ShieldCheck,
    title: 'Confidencialidad Total',
    description: 'Su información está protegida bajo estrictos protocolos de privacidad y ética profesional.',
  },
  {
    icon: Users,
    title: 'Equipo Especializado',
    description: 'Contamos con abogados expertos en cada área del derecho para atender su situación.',
  },
];

export function Inicio() {
  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-screen flex items-end bg-[#1C2B3A]" style={{ paddingTop: '72px' }}>
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXclMjBvZmZpY2UlMjBtaW5pbWFsaXN0fGVufDF8fHx8MTc3OTIyNjM0MHww&ixlib=rb-4.1.0&q=80&w=1920"
            alt="Arteta & Forero"
            className="w-full h-full object-cover"
            style={{ opacity: 0.18 }}
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pb-24 pt-32 w-full">
          <div className="max-w-3xl">
            <p className="text-[#B89A4C] text-xs tracking-[0.3em] uppercase mb-6">Firma de Abogados · Bogotá, Colombia</p>
            <h1 className="text-white text-5xl md:text-7xl font-light leading-tight mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
              Excelencia<br />
              <span className="text-[#B89A4C]">Legal</span> a su<br />
              Servicio
            </h1>
            <p className="text-white/60 text-lg font-light max-w-xl mb-10 leading-relaxed">
              Arteta & Forero es una firma de abogados con más de 20 años de trayectoria, comprometida con soluciones legales efectivas y personalizadas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <NavLink
                to="/contacto"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#B89A4C] text-white text-xs tracking-widest uppercase hover:bg-[#a68a3c] transition-colors"
              >
                Agendar Consulta <ArrowRight className="w-4 h-4" />
              </NavLink>
              <NavLink
                to="/servicios"
                className="inline-flex items-center gap-2 px-8 py-4 border border-white/30 text-white text-xs tracking-widest uppercase hover:border-white/60 transition-colors"
              >
                Nuestros Servicios
              </NavLink>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="absolute bottom-0 left-0 right-0 bg-[#B89A4C]/10 border-t border-white/10 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s, i) => (
              <div key={i} className="text-center">
                <div className="text-[#B89A4C] text-2xl font-light mb-1">{s.value}</div>
                <div className="text-white/50 text-xs tracking-wide uppercase">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-16">
            <p className="text-[#B89A4C] text-xs tracking-[0.3em] uppercase mb-3">Por qué elegirnos</p>
            <h2 className="text-[#1C2B3A] text-3xl md:text-4xl font-light">
              Un compromiso con<br />la excelencia jurídica
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-[#e8e4dc]">
            {highlights.map((item, i) => (
              <div key={i} className={`p-10 ${i < 2 ? 'md:border-r border-[#e8e4dc]' : ''}`}>
                <div className="w-10 h-10 mb-6 flex items-center justify-center bg-[#f5f4f0]">
                  <item.icon className="w-5 h-5 text-[#B89A4C]" />
                </div>
                <h3 className="text-[#1C2B3A] text-lg font-light mb-3">{item.title}</h3>
                <p className="text-[#6b6b6b] text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Areas preview */}
      <section className="py-24 bg-[#f5f4f0]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <p className="text-[#B89A4C] text-xs tracking-[0.3em] uppercase mb-3">Áreas de práctica</p>
              <h2 className="text-[#1C2B3A] text-3xl md:text-4xl font-light">
                Soluciones legales<br />especializadas
              </h2>
            </div>
            <NavLink
              to="/servicios"
              className="inline-flex items-center gap-2 text-[#B89A4C] text-xs tracking-widest uppercase hover:gap-3 transition-all"
            >
              Ver todos los servicios <ArrowRight className="w-4 h-4" />
            </NavLink>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#ddd9d0]">
            {[
              'Derecho Corporativo',
              'Derecho Civil',
              'Derecho Laboral',
              'Derecho Penal',
              'Derecho Inmobiliario',
              'Derecho de Familia',
            ].map((area, i) => (
              <div key={i} className="bg-white p-8 group hover:bg-[#1C2B3A] transition-colors cursor-pointer">
                <div className="text-[#B89A4C] text-3xl font-light mb-4 opacity-40">0{i + 1}</div>
                <h3 className="text-[#1C2B3A] group-hover:text-white text-base font-light transition-colors">{area}</h3>
                <div className="mt-4 w-6 h-px bg-[#B89A4C] group-hover:w-10 transition-all" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#1C2B3A]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-[#B89A4C] text-xs tracking-[0.3em] uppercase mb-4">Contáctenos hoy</p>
          <h2 className="text-white text-3xl md:text-5xl font-light mb-6">
            ¿Necesita asesoría legal?
          </h2>
          <p className="text-white/50 text-base font-light max-w-xl mx-auto mb-10 leading-relaxed">
            Nuestro equipo está disponible para analizar su caso y ofrecer la orientación jurídica que necesita.
          </p>
          <NavLink
            to="/contacto"
            className="inline-flex items-center gap-2 px-10 py-4 bg-[#B89A4C] text-white text-xs tracking-widest uppercase hover:bg-[#a68a3c] transition-colors"
          >
            Solicitar Consulta <ArrowRight className="w-4 h-4" />
          </NavLink>
        </div>
      </section>
    </main>
  );
}
