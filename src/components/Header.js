import React from 'react';

const Header = () => {
  return (
    <header className="bg-gray-800 py-4">
      <nav className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-xl font-bold">My Portfolio</h1>
        <ul className="flex space-x-4">
          <li><a href="#home" className="text-white hover:text-gray-300">Home</a></li>
          <li><a href="#about" className="text-white hover:text-gray-300">About</a></li>
          <li><a href="#skills" className="text-white hover:text-gray-300">Skills</a></li>
          <li><a href="#projects" className="text-white hover:text-gray-300">Projects</a></li>
          <li><a href="#contact" className="text-white hover:text-gray-300">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
