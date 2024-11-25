import React from 'react';
import { Menu, X, ShoppingBag, Heart, User } from 'lucide-react';

interface NavbarProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
}

const Navbar: React.FC<NavbarProps> = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <nav className="fixed w-full bg-white z-50 border-b border-neutral-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
          
          <div className="hidden lg:flex items-center space-x-8">
            <a href="#" className="text-neutral-600 hover:text-black">Nuevo</a>
            <a href="#" className="text-neutral-600 hover:text-black">Mujer</a>
            <a href="#" className="text-neutral-600 hover:text-black">Hombre</a>
            <a href="#" className="text-neutral-600 hover:text-black">Accesorios</a>
          </div>

          <a href="/" className="text-2xl font-light tracking-widest">KIKLI</a>

          <div className="flex items-center space-x-6">
            <a href="#" className="hidden lg:block hover:text-neutral-500">
              <User className="w-5 h-5" />
            </a>
            <a href="#" className="hidden lg:block hover:text-neutral-500">
              <Heart className="w-5 h-5" />
            </a>
            <button className="relative hover:text-neutral-500">
              <ShoppingBag className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 bg-black text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
                0
              </span>
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden absolute w-full bg-white border-b border-neutral-100">
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col space-y-4">
              <a href="#" className="text-neutral-600 hover:text-black">Nuevo</a>
              <a href="#" className="text-neutral-600 hover:text-black">Mujer</a>
              <a href="#" className="text-neutral-600 hover:text-black">Hombre</a>
              <a href="#" className="text-neutral-600 hover:text-black">Accesorios</a>
              <a href="#" className="text-neutral-600 hover:text-black">Mi Cuenta</a>
              <a href="#" className="text-neutral-600 hover:text-black">Favoritos</a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;