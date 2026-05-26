import { BrowserRouter, Routes, Route } from 'react-router';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Inicio } from './components/pages/Inicio';
import { Servicios } from './components/pages/Servicios';
import { Nosotros } from './components/pages/Nosotros';
import { Contacto } from './components/pages/Contacto';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white flex flex-col" style={{ fontFamily: 'Inter, -apple-system, sans-serif' }}>
        <Header />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/servicios" element={<Servicios />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/contacto" element={<Contacto />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
