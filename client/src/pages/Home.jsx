import React from 'react';
import { Link } from 'react-router-dom';
import cover2 from '../assets/cover2.jpg';

function Home() {
  return (
    <div className="relative w-full h-screen">
      <img src={cover2} alt="cover page" className="w-full h-full object-cover" />

      <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center bg-black bg-opacity-50 text-white text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Our Store</h1>
        <p className="text-lg md:text-xl mb-6">Discover the best collections for your home</p>
        
        <Link to="/collections" className="bg-red-500 px-6 py-3 text-lg font-semibold rounded shadow hover:bg-red-600 transition">
          Explore Collections
        </Link>
      </div>
    </div>
  );
}

export default Home;
