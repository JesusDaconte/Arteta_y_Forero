import { Briefcase, Users, Building2, FileText, Scale, ShieldCheck } from 'lucide-react';

const services = [
  {
    icon: Briefcase,
    title: 'Derecho Corporativo',
    description: 'Asesoría integral para empresas en contratos, fusiones y adquisiciones.',
  },
  {
    icon: Users,
    title: 'Derecho Familiar',
    description: 'Acompañamiento legal en divorcios, custodia y herencias.',
  },
  {
    icon: Building2,
    title: 'Derecho Inmobiliario',
    description: 'Gestión de compraventa, arrendamientos y litigios de propiedades.',
  },
  {
    icon: FileText,
    title: 'Derecho Civil',
    description: 'Solución de conflictos contractuales y responsabilidad civil.',
  },
  {
    icon: Scale,
    title: 'Derecho Penal',
    description: 'Defensa penal con experiencia en casos complejos.',
  },
  {
    icon: ShieldCheck,
    title: 'Derecho Laboral',
    description: 'Protección de derechos laborales y asesoría empresarial.',
  },
];

export function Services() {
  return (
    <section id="servicios" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-neutral-900 mb-4 tracking-tight">
            Áreas de Práctica
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Servicios legales especializados adaptados a tus necesidades
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-8 border border-neutral-200 hover:border-neutral-900 transition-all group"
            >
              <service.icon className="w-10 h-10 text-neutral-900 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl text-neutral-900 mb-3">
                {service.title}
              </h3>
              <p className="text-neutral-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
