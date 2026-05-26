import { Mail, Phone, MapPin } from 'lucide-react';

export function Contact() {
  return (
    <section id="contacto" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl md:text-5xl text-neutral-900 mb-6 tracking-tight">
              Contacta con Nosotros
            </h2>
            <p className="text-lg text-neutral-600 mb-8">
              Estamos aquí para ayudarte. Agenda una consulta gratuita y descubre cómo podemos resolver tu caso.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-neutral-900 mt-1" />
                <div>
                  <p className="text-sm text-neutral-500 mb-1">Teléfono</p>
                  <p className="text-lg text-neutral-900">+34 91 123 45 67</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-neutral-900 mt-1" />
                <div>
                  <p className="text-sm text-neutral-500 mb-1">Email</p>
                  <p className="text-lg text-neutral-900">contacto@lexpartners.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-neutral-900 mt-1" />
                <div>
                  <p className="text-sm text-neutral-500 mb-1">Dirección</p>
                  <p className="text-lg text-neutral-900">
                    Paseo de la Castellana, 123
                    <br />
                    28046 Madrid, España
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-neutral-50 p-8">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm text-neutral-700 mb-2">
                  Nombre completo
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 border border-neutral-300 focus:border-neutral-900 focus:outline-none transition-colors"
                  placeholder="Tu nombre"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm text-neutral-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border border-neutral-300 focus:border-neutral-900 focus:outline-none transition-colors"
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm text-neutral-700 mb-2">
                  Teléfono
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-3 border border-neutral-300 focus:border-neutral-900 focus:outline-none transition-colors"
                  placeholder="+34 600 00 00 00"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm text-neutral-700 mb-2">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 border border-neutral-300 focus:border-neutral-900 focus:outline-none transition-colors resize-none"
                  placeholder="Cuéntanos sobre tu caso..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-neutral-900 text-white hover:bg-neutral-800 transition-colors text-sm"
              >
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
