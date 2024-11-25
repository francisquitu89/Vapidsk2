import React, { useState } from 'react';
import { Instagram, Facebook, Twitter } from 'lucide-react';
import ProductGrid from './components/ProductGrid';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <main className="pt-16">
        <Hero />
        <ProductGrid />
        
        <footer className="bg-neutral-950 text-white py-16 mt-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="font-medium text-lg mb-4">Sobre KIKLI</h3>
                <p className="text-neutral-400 text-sm">
                  Moda minimalista y atemporal para el estilo contemporáneo. Diseñamos piezas que perduran más allá de las tendencias.
                </p>
              </div>
              <div>
                <h3 className="font-medium text-lg mb-4">Ayuda</h3>
                <ul className="space-y-2 text-neutral-400 text-sm">
                  <li>Guía de Tallas</li>
                  <li>Envíos y Entregas</li>
                  <li>Devoluciones</li>
                  <li>Contacto</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-lg mb-4">Legal</h3>
                <ul className="space-y-2 text-neutral-400 text-sm">
                  <li>Términos y Condiciones</li>
                  <li>Política de Privacidad</li>
                  <li>Política de Cookies</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-lg mb-4">Síguenos</h3>
                <div className="flex items-center space-x-4">
                  <Instagram className="w-5 h-5 hover:text-neutral-400 cursor-pointer" />
                  <Facebook className="w-5 h-5 hover:text-neutral-400 cursor-pointer" />
                  <Twitter className="w-5 h-5 hover:text-neutral-400 cursor-pointer" />
                </div>
                <p className="mt-4 text-neutral-400 text-sm">Newsletter</p>
                <div className="mt-2 flex">
                  <input
                    type="email"
                    placeholder="Tu email"
                    className="bg-neutral-900 text-white px-4 py-2 flex-grow"
                  />
                  <button className="bg-white text-black px-4 py-2 hover:bg-neutral-100">
                    Suscribir
                  </button>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;