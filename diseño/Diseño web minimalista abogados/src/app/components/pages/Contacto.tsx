import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

export function Contacto() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', area: '', message: '' });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  const contactInfo = [
    { icon: Phone, label: 'Teléfono', value: '+57 (601) 123 4567' },
    { icon: Mail, label: 'Correo electrónico', value: 'info@artetaforero.com' },
    { icon: MapPin, label: 'Dirección', value: 'Calle 93 # 11-28, Piso 5\nBogotá D.C., Colombia' },
    { icon: Clock, label: 'Horario de atención', value: 'Lun – Vie: 8:00 am – 6:00 pm\nSáb: 9:00 am – 1:00 pm' },
  ];

  return (
    <main style={{ paddingTop: '72px' }}>
      {/* Page header */}
      <section className="bg-[#1C2B3A] py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-[#B89A4C] text-xs tracking-[0.3em] uppercase mb-4">Contáctenos</p>
          <h1 className="text-white text-4xl md:text-6xl font-light leading-tight max-w-2xl">
            Estamos aquí<br />
            para <span className="text-[#B89A4C]">ayudarle</span>
          </h1>
        </div>
      </section>

      {/* Contact grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            {/* Info column */}
            <div className="lg:col-span-2 space-y-10">
              <div>
                <p className="text-[#B89A4C] text-xs tracking-[0.3em] uppercase mb-4">Información de contacto</p>
                <p className="text-[#6b6b6b] text-sm font-light leading-relaxed">
                  Comuníquese con nosotros a través de cualquiera de los siguientes canales. Le responderemos en el menor tiempo posible.
                </p>
              </div>

              <div className="space-y-8">
                {contactInfo.map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-10 h-10 bg-[#f5f4f0] flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-4 h-4 text-[#B89A4C]" />
                    </div>
                    <div>
                      <p className="text-[#B89A4C] text-xs tracking-wide uppercase mb-1">{item.label}</p>
                      <p className="text-[#1C2B3A] text-sm font-light whitespace-pre-line">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Map placeholder */}
              <div className="aspect-video bg-[#f5f4f0] border border-[#e8e4dc] flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-8 h-8 text-[#B89A4C] mx-auto mb-2" />
                  <p className="text-[#6b6b6b] text-xs">Calle 93 # 11-28, Bogotá</p>
                </div>
              </div>
            </div>

            {/* Form column */}
            <div className="lg:col-span-3">
              <p className="text-[#B89A4C] text-xs tracking-[0.3em] uppercase mb-6">Envíenos un mensaje</p>

              {sent ? (
                <div className="border border-[#B89A4C] bg-[#B89A4C]/5 p-10 text-center">
                  <div className="w-12 h-12 bg-[#B89A4C] flex items-center justify-center mx-auto mb-4">
                    <Send className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-[#1C2B3A] text-xl font-light mb-2">Mensaje enviado</h3>
                  <p className="text-[#6b6b6b] text-sm font-light">
                    Gracias por contactarnos. Un miembro de nuestro equipo se comunicará con usted pronto.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[#6b6b6b] text-xs tracking-wide uppercase mb-2">
                        Nombre completo *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Su nombre"
                        className="w-full px-4 py-3 border border-[#e8e4dc] bg-white text-[#1C2B3A] text-sm font-light placeholder:text-[#c0bdb8] focus:border-[#B89A4C] focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-[#6b6b6b] text-xs tracking-wide uppercase mb-2">
                        Correo electrónico *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="su@correo.com"
                        className="w-full px-4 py-3 border border-[#e8e4dc] bg-white text-[#1C2B3A] text-sm font-light placeholder:text-[#c0bdb8] focus:border-[#B89A4C] focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[#6b6b6b] text-xs tracking-wide uppercase mb-2">
                        Teléfono
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+57 300 000 0000"
                        className="w-full px-4 py-3 border border-[#e8e4dc] bg-white text-[#1C2B3A] text-sm font-light placeholder:text-[#c0bdb8] focus:border-[#B89A4C] focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-[#6b6b6b] text-xs tracking-wide uppercase mb-2">
                        Área de consulta
                      </label>
                      <select
                        name="area"
                        value={form.area}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-[#e8e4dc] bg-white text-[#1C2B3A] text-sm font-light focus:border-[#B89A4C] focus:outline-none transition-colors appearance-none"
                      >
                        <option value="">Seleccione un área</option>
                        <option>Derecho Corporativo</option>
                        <option>Derecho Civil</option>
                        <option>Derecho Laboral</option>
                        <option>Derecho Penal</option>
                        <option>Derecho Inmobiliario</option>
                        <option>Derecho de Familia</option>
                        <option>Derecho Administrativo</option>
                        <option>Propiedad Intelectual</option>
                        <option>Otro</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[#6b6b6b] text-xs tracking-wide uppercase mb-2">
                      Mensaje *
                    </label>
                    <textarea
                      name="message"
                      required
                      value={form.message}
                      onChange={handleChange}
                      rows={6}
                      placeholder="Descríbanos brevemente su situación legal..."
                      className="w-full px-4 py-3 border border-[#e8e4dc] bg-white text-[#1C2B3A] text-sm font-light placeholder:text-[#c0bdb8] focus:border-[#B89A4C] focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-[#1C2B3A] text-white text-xs tracking-widest uppercase hover:bg-[#B89A4C] transition-colors flex items-center justify-center gap-2"
                  >
                    Enviar mensaje <Send className="w-4 h-4" />
                  </button>

                  <p className="text-[#6b6b6b] text-xs text-center font-light">
                    Al enviar este formulario, acepta nuestra política de privacidad. Responderemos en un plazo máximo de 24 horas hábiles.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Bottom strip */}
      <section className="py-12 bg-[#f5f4f0] border-t border-[#e8e4dc]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-[#B89A4C] text-xs tracking-widest uppercase mb-2">Respuesta garantizada</p>
              <p className="text-[#6b6b6b] text-sm font-light">En menos de 24 horas hábiles</p>
            </div>
            <div>
              <p className="text-[#B89A4C] text-xs tracking-widest uppercase mb-2">Primera consulta</p>
              <p className="text-[#6b6b6b] text-sm font-light">Sin costo ni compromiso</p>
            </div>
            <div>
              <p className="text-[#B89A4C] text-xs tracking-widest uppercase mb-2">Confidencialidad</p>
              <p className="text-[#6b6b6b] text-sm font-light">Total discreción garantizada</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
