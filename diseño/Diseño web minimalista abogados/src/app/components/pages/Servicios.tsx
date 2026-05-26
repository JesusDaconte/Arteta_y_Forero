import { NavLink } from 'react-router';
import { ArrowRight, Briefcase, Users, Building2, FileText, Scale, ShieldCheck, Landmark, BookOpen } from 'lucide-react';

const services = [
  {
    icon: Briefcase,
    title: 'Derecho Corporativo',
    description: 'Asesoría integral para empresas: constitución, contratos comerciales, fusiones, adquisiciones, gobierno corporativo y reestructuraciones empresariales.',
    areas: ['Contratos mercantiles', 'Fusiones y adquisiciones', 'Gobierno corporativo', 'Due diligence'],
  },
  {
    icon: Scale,
    title: 'Derecho Civil',
    description: 'Representación y asesoría en conflictos civiles, responsabilidad contractual y extracontractual, sucesiones y procesos declarativos.',
    areas: ['Responsabilidad civil', 'Contratos civiles', 'Sucesiones y herencias', 'Procesos declarativos'],
  },
  {
    icon: ShieldCheck,
    title: 'Derecho Laboral',
    description: 'Protección efectiva de derechos laborales tanto para trabajadores como para empleadores, en procesos ordinarios y administrativos.',
    areas: ['Despidos y liquidaciones', 'Acoso laboral', 'Contratos de trabajo', 'Asesoría sindical'],
  },
  {
    icon: FileText,
    title: 'Derecho Penal',
    description: 'Defensa penal calificada en todas las etapas del proceso, desde la indagación hasta la etapa de juicio oral, con enfoque estratégico.',
    areas: ['Defensa penal', 'Delitos económicos', 'Habeas corpus', 'Medidas cautelares'],
  },
  {
    icon: Building2,
    title: 'Derecho Inmobiliario',
    description: 'Gestión legal de transacciones inmobiliarias, contratos de arrendamiento, propiedad horizontal y procesos de titulación.',
    areas: ['Compraventa de inmuebles', 'Propiedad horizontal', 'Arrendamientos', 'Titulación predial'],
  },
  {
    icon: Users,
    title: 'Derecho de Familia',
    description: 'Acompañamiento sensible y profesional en procesos de familia: divorcios, custodia de menores, alimentos y adopciones.',
    areas: ['Divorcios', 'Custodia de menores', 'Alimentos', 'Adopciones'],
  },
  {
    icon: Landmark,
    title: 'Derecho Administrativo',
    description: 'Representación ante entidades del Estado, recursos de tutela, acciones de cumplimiento y nulidades administrativas.',
    areas: ['Tutelas y acciones', 'Contratos estatales', 'Sanciones administrativas', 'Nulidades'],
  },
  {
    icon: BookOpen,
    title: 'Propiedad Intelectual',
    description: 'Protección y registro de marcas, patentes, derechos de autor y asesoría en contratos de licencia y transferencia de tecnología.',
    areas: ['Registro de marcas', 'Patentes', 'Derechos de autor', 'Licencias'],
  },
];

export function Servicios() {
  return (
    <main style={{ paddingTop: '72px' }}>
      {/* Page header */}
      <section className="bg-[#1C2B3A] py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-[#B89A4C] text-xs tracking-[0.3em] uppercase mb-4">Áreas de práctica</p>
          <h1 className="text-white text-4xl md:text-6xl font-light leading-tight max-w-2xl">
            Servicios<br />
            <span className="text-[#B89A4C]">Legales</span> Especializados
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 bg-white border-b border-[#e8e4dc]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <p className="text-[#6b6b6b] text-lg font-light leading-relaxed">
              En Arteta & Forero ofrecemos asesoría legal de alto nivel en múltiples áreas del derecho. Cada caso es atendido de manera personalizada por abogados especializados, garantizando resultados efectivos.
            </p>
            <div className="flex flex-wrap gap-3">
              {services.map((s, i) => (
                <span key={i} className="px-4 py-2 border border-[#e8e4dc] text-[#6b6b6b] text-xs tracking-wide">
                  {s.title}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-20 bg-[#f5f4f0]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#ddd9d0]">
            {services.map((service, i) => (
              <div key={i} className="bg-white p-10">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-10 h-10 bg-[#f5f4f0] flex items-center justify-center flex-shrink-0">
                    <service.icon className="w-5 h-5 text-[#B89A4C]" />
                  </div>
                  <div>
                    <div className="text-[#B89A4C] text-xs tracking-[0.2em] uppercase mb-1">
                      0{i + 1}
                    </div>
                    <h2 className="text-[#1C2B3A] text-xl font-light">{service.title}</h2>
                  </div>
                </div>
                <p className="text-[#6b6b6b] text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.areas.map((area, j) => (
                    <li key={j} className="flex items-center gap-2 text-xs text-[#6b6b6b]">
                      <div className="w-1 h-1 bg-[#B89A4C] flex-shrink-0" />
                      {area}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#1C2B3A]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-white text-2xl md:text-3xl font-light mb-2">
              ¿No encuentra el servicio que necesita?
            </h2>
            <p className="text-white/50 text-sm font-light">
              Contáctenos y le orientaremos con el abogado adecuado para su caso.
            </p>
          </div>
          <NavLink
            to="/contacto"
            className="flex-shrink-0 inline-flex items-center gap-2 px-8 py-4 bg-[#B89A4C] text-white text-xs tracking-widest uppercase hover:bg-[#a68a3c] transition-colors"
          >
            Contactar <ArrowRight className="w-4 h-4" />
          </NavLink>
        </div>
      </section>
    </main>
  );
}
