import React from 'react';
import f1Image from '../assets/banner.jpg'; // Import the image
import Header from './Header';
import search from '../assets/searcch.png';
import './hero.css'

function Hero() {
  return (
    <div
    className="bg-cover-responsive h-[600px] lg:h-[500px] relative"
    style={{ backgroundImage: `url(${f1Image})` }}
  >
      <header className="top-0 p-4 md:px-6 lg:px-10 xl:px-20 2xl:px-32 flex flex-col md:flex-row items-center justify-between max-w-4xl mx-auto z-20">
        {/* Logo */}
        <div className="flex space-x-2 font-bold md:mb-0">
          <h5>LOREM</h5>
          <h5 className="text-blue-500 font-bold">IPSUM</h5>
        </div>
        {/* Navigation */}
        <div className="flex items-center justify-center space-x-2 md:space-x-4 font-bold md:items-end">
  <p className="md:mb-2 nav-link">Home</p>
  <p className="md:mb-2 nav-link">About us</p>
  <p className="md:mb-2 nav-link">Services</p>
  <p className="md:mb-2 nav-link">Our Clients</p>
  <p className="md:mb-2 nav-link">Testimonials</p>
</div>

        {/* Contact */}
        <div className="flex items-center space-x-2">
          <img className="h-8 w-8 p-2 lg:p-0 " src={search} alt="Logo" />
          <button className="bg-blue-500 rounded px-4 py-2 text-white">Contact Us</button>
        </div>
      </header>
      <div className="h-[300px]">
        <Header />
      </div>
    </div>
  );
}

export default Hero;
