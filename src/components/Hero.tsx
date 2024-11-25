import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative h-[90vh] bg-neutral-100">
      <img
        src="https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&q=80"
        alt="Fashion collection showcase"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-5xl md:text-7xl font-light mb-6">Otoño 2024</h1>
          <p className="text-xl md:text-2xl mb-8 font-light">Minimalismo en cada detalle</p>
          <button className="bg-white text-black px-8 py-3 text-lg hover:bg-neutral-100 transition-colors">
            Ver Colección
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;