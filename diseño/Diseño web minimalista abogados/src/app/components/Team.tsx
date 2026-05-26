import { ImageWithFallback } from './figma/ImageWithFallback';

const team = [
  {
    name: 'María Fernández',
    role: 'Socia Fundadora',
    specialty: 'Derecho Corporativo',
    image: 'https://images.unsplash.com/photo-1685760259914-ee8d2c92d2e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXd5ZXIlMjBwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdCUyMGJ1c2luZXNzfGVufDF8fHx8MTc3OTIyNjM0MXww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    name: 'Carlos Mendoza',
    role: 'Socio Senior',
    specialty: 'Derecho Penal',
    image: 'https://images.unsplash.com/photo-1665224752561-85f4da9a5658?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxsYXd5ZXIlMjBwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdCUyMGJ1c2luZXNzfGVufDF8fHx8MTc3OTIyNjM0MXww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    name: 'Roberto Silva',
    role: 'Socio',
    specialty: 'Derecho Civil',
    image: 'https://images.unsplash.com/photo-1734159350022-0acc5f934da5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxsYXd5ZXIlMjBwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdCUyMGJ1c2luZXNzfGVufDF8fHx8MTc3OTIyNjM0MXww&ixlib=rb-4.1.0&q=80&w=1080',
  },
];

export function Team() {
  return (
    <section id="equipo" className="py-24 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-neutral-900 mb-4 tracking-tight">
            Nuestro Equipo
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Profesionales comprometidos con la excelencia
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div key={index} className="bg-white overflow-hidden group">
              <div className="aspect-[3/4] overflow-hidden">
                <ImageWithFallback
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                />
              </div>
              <div className="p-6 border border-t-0 border-neutral-200">
                <h3 className="text-xl text-neutral-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-sm text-neutral-500 mb-2">{member.role}</p>
                <p className="text-sm text-neutral-600">{member.specialty}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
