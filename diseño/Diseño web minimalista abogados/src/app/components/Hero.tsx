import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  return (
    <section id="inicio" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-neutral-900">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1767786330387-5cef0327b6c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXclMjBmaXJtJTIwb2ZmaWNlJTIwbW9kZXJuJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc3OTIyNjM0MHww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Modern law office"
          className="w-full h-full object-cover opacity-40"
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-7xl text-white mb-6 tracking-tight">
          Excelencia Legal
          <br />
          <span className="text-neutral-300">a tu Servicio</span>
        </h1>
        <p className="text-lg md:text-xl text-neutral-300 mb-12 max-w-2xl mx-auto">
          Más de 25 años de experiencia defendiendo tus derechos con profesionalismo y dedicación
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-4 bg-white text-neutral-900 hover:bg-neutral-100 transition-colors text-sm">
            Agendar Consulta
          </button>
          <button className="px-8 py-4 border border-white text-white hover:bg-white/10 transition-colors text-sm">
            Conocer Más
          </button>
        </div>
      </div>
    </section>
  );
}
