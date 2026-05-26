import { NavLink } from 'react-router';
import { ArrowRight } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

const team = [
  {
    name: 'Dr. Carlos Arteta',
    role: 'Socio Fundador',
    specialty: 'Derecho Corporativo & Civil',
    bio: 'Abogado con más de 20 años de trayectoria en litigios corporativos y consultoría empresarial. Especialista en derecho mercantil y arbitraje internacional.',
    image: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXd5ZXIlMjBtYW4lMjBwb3J0cmFpdCUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NzkyMjYzNDF8MA&ixlib=rb-4.1.0&q=80&w=800',
  },
  {
    name: 'Dra. Valentina Forero',
    role: 'Socia Fundadora',
    specialty: 'Derecho Penal & Laboral',
    bio: 'Especialista en derecho penal con amplia experiencia en litigios laborales y defensa de derechos fundamentales. Magíster en Ciencias Penales y Criminológicas.',
    image: 'https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxsYXd5ZXIlMjB3b21hbiUyMHBvcnRyYWl0JTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc3OTIyNjM0MXww&ixlib=rb-4.1.0&q=80&w=800',
  },
  {
    name: 'Dr. Andrés Mora',
    role: 'Socio Senior',
    specialty: 'Derecho Inmobiliario',
    bio: 'Experto en transacciones inmobiliarias y propiedad horizontal. Más de 15 años asesorando a constructoras, fondos de inversión y propietarios particulares.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxsYXd5ZXIlMjBtYW4lMjBwb3J0cmFpdCUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NzkyMjYzNDF8MA&ixlib=rb-4.1.0&q=80&w=800',
  },
  {
    name: 'Dra. Mariana Gómez',
    role: 'Abogada Senior',
    specialty: 'Derecho de Familia',
    bio: 'Especialista en derecho de familia y menores, con enfoque en la protección de derechos fundamentales y mediación familiar. Certificada en resolución de conflictos.',
    image: 'https://images.unsplash.com/photo-1580894732444-8ecded7900cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXd5ZXIlMjB3b21hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc3OTIyNjM0MXww&ixlib=rb-4.1.0&q=80&w=800',
  },
];

const values = [
  { title: 'Integridad', description: 'Actuamos con total transparencia y honestidad en cada relación con nuestros clientes.' },
  { title: 'Excelencia', description: 'Nos exigimos los más altos estándares de calidad jurídica en todo lo que hacemos.' },
  { title: 'Compromiso', description: 'Cada caso es asumido con dedicación plena y responsabilidad hacia el cliente.' },
  { title: 'Confidencialidad', description: 'Protegemos la información de nuestros clientes con rigurosos protocolos de privacidad.' },
];

export function Nosotros() {
  return (
    <main style={{ paddingTop: '72px' }}>
      {/* Page header */}
      <section className="bg-[#1C2B3A] py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-[#B89A4C] text-xs tracking-[0.3em] uppercase mb-4">La firma</p>
          <h1 className="text-white text-4xl md:text-6xl font-light leading-tight max-w-2xl">
            Quiénes<br />
            <span className="text-[#B89A4C]">Somos</span>
          </h1>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[#B89A4C] text-xs tracking-[0.3em] uppercase mb-4">Nuestra historia</p>
              <h2 className="text-[#1C2B3A] text-3xl md:text-4xl font-light mb-6 leading-tight">
                Más de dos décadas<br />construyendo confianza
              </h2>
              <p className="text-[#6b6b6b] text-base font-light leading-relaxed mb-6">
                Arteta & Forero nació en 2004 de la visión compartida de dos abogados bogotanos con un propósito claro: ofrecer servicios legales de primer nivel con un trato cercano y transparente.
              </p>
              <p className="text-[#6b6b6b] text-base font-light leading-relaxed mb-6">
                A lo largo de los años, hemos consolidado un equipo multidisciplinario de juristas comprometidos con la defensa de los derechos de nuestros clientes, tanto en el ámbito privado como en el corporativo.
              </p>
              <p className="text-[#6b6b6b] text-base font-light leading-relaxed">
                Hoy somos una firma de referencia en Bogotá, con presencia en litigios de alto impacto y asesorías estratégicas para empresas líderes en Colombia.
              </p>
            </div>
            <div className="aspect-[4/3] bg-[#f5f4f0] overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXclMjBvZmZpY2UlMjBtb2Rlcm58ZW58MXx8fHwxNzc5MjI2MzQwfDA&ixlib=rb-4.1.0&q=80&w=1200"
                alt="Oficinas Arteta & Forero"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-[#f5f4f0]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <p className="text-[#B89A4C] text-xs tracking-[0.3em] uppercase mb-3">Nuestros valores</p>
            <h2 className="text-[#1C2B3A] text-3xl font-light">Lo que nos define</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[#ddd9d0]">
            {values.map((v, i) => (
              <div key={i} className="bg-white p-8">
                <div className="text-[#B89A4C] text-4xl font-light mb-4 opacity-30">0{i + 1}</div>
                <h3 className="text-[#1C2B3A] text-base font-light mb-3">{v.title}</h3>
                <p className="text-[#6b6b6b] text-sm leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-16">
            <p className="text-[#B89A4C] text-xs tracking-[0.3em] uppercase mb-3">El equipo</p>
            <h2 className="text-[#1C2B3A] text-3xl md:text-4xl font-light">
              Nuestros abogados
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, i) => (
              <div key={i} className="group">
                <div className="aspect-[3/4] overflow-hidden bg-[#f5f4f0] mb-4">
                  <ImageWithFallback
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                <div className="border-l-2 border-[#B89A4C] pl-4">
                  <h3 className="text-[#1C2B3A] text-base font-light mb-0.5">{member.name}</h3>
                  <p className="text-[#B89A4C] text-xs tracking-wide mb-2">{member.role}</p>
                  <p className="text-[#6b6b6b] text-xs">{member.specialty}</p>
                </div>
                <p className="text-[#6b6b6b] text-xs leading-relaxed mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {member.bio}
                </p>
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
              Trabaje con los mejores
            </h2>
            <p className="text-white/50 text-sm">
              Nuestro equipo está listo para asumir su caso con dedicación y profesionalismo.
            </p>
          </div>
          <NavLink
            to="/contacto"
            className="flex-shrink-0 inline-flex items-center gap-2 px-8 py-4 bg-[#B89A4C] text-white text-xs tracking-widest uppercase hover:bg-[#a68a3c] transition-colors"
          >
            Agendar Consulta <ArrowRight className="w-4 h-4" />
          </NavLink>
        </div>
      </section>
    </main>
  );
}
