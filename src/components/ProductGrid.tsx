import React from 'react';
import { Heart } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Vestido Minimal',
    price: 89990,
    image: 'https://images.unsplash.com/photo-1550639525-c97d455acf70?auto=format&fit=crop&q=80',
    category: 'Vestidos',
  },
  {
    id: 2,
    name: 'Blazer Oversize',
    price: 129990,
    image: 'https://images.unsplash.com/photo-1591369822096-ffd140ec948f?auto=format&fit=crop&q=80',
    category: 'Chaquetas',
  },
  {
    id: 3,
    name: 'Pantalón Alto',
    price: 69990,
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&q=80',
    category: 'Pantalones',
  },
  {
    id: 4,
    name: 'Blusa Seda',
    price: 79990,
    image: 'https://images.unsplash.com/photo-1604336732494-766187b5790f?auto=format&fit=crop&q=80',
    category: 'Blusas',
  },
];

const ProductGrid: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="flex justify-between items-center mb-12">
        <h2 className="text-3xl font-light">Nueva Colección</h2>
        <div className="flex gap-4">
          <select className="px-4 py-2 border border-neutral-200 rounded-none bg-white">
            <option>Ordenar por</option>
            <option>Precio: Menor a mayor</option>
            <option>Precio: Mayor a menor</option>
            <option>Más nuevos</option>
          </select>
          <select className="px-4 py-2 border border-neutral-200 rounded-none bg-white">
            <option>Filtrar</option>
            <option>Vestidos</option>
            <option>Chaquetas</option>
            <option>Pantalones</option>
            <option>Blusas</option>
          </select>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div key={product.id} className="group">
            <div className="relative aspect-[3/4] mb-4 bg-neutral-50 overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <button className="absolute top-4 right-4 w-8 h-8 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Heart className="w-4 h-4" />
              </button>
              <div className="absolute bottom-0 left-0 right-0 bg-white/90 backdrop-blur-sm py-4 px-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <button className="w-full bg-black text-white py-2 hover:bg-neutral-800 transition-colors">
                  Agregar al Carrito
                </button>
              </div>
            </div>
            <div className="space-y-1">
              <p className="text-sm text-neutral-500">{product.category}</p>
              <h3 className="text-lg">{product.name}</h3>
              <p className="text-neutral-900 font-light">${product.price.toLocaleString()}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;