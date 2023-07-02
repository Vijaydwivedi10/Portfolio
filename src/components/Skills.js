import React from 'react';
import { FaHtml5, FaCss3, FaJs, FaReact, FaCss3Alt, FaDatabase, FaMobileAlt, FaNodeJs, FaPython, FaJava, FaCode, FaPaintBrush, FaLaptopCode, FaPalette, FaImage, FaFilm } from 'react-icons/fa';

const Skills = () => {
  const headingStyles = {
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '0.5rem',
    fontFamily: 'Comic Sans MS, cursive',
    color: 'black',
  };

  const headingStyles2 = {
    fontSize: '3.5rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
    fontFamily: 'YourSketchyFont, cursive',
    textAlign: 'left',
    color: '#333',
    opacity: '0.6',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
  };
  

  return (
    <section id="skills" className="h-screen flex items-center py-8 bg-gray-200">
      <div className="container mx-auto">
        <h3 style={headingStyles2}>Skills</h3>

        {/* Programming Skills */}
        <div className="mb-8 pt-8">
          <div className="grid grid-cols-5 gap-4">
            <div className="col-span-1 flex items-center">
              <h4 style={headingStyles} className="text-2xl font-bold mb-4 font-cursive text-black">Programming</h4>
            </div>
            <div className="col-span-4 grid grid-cols-4 gap-4">
              <a href="https://en.wikipedia.org/wiki/Java" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center hover:scale-110">
                <FaJava className="text-6xl text-blue-800" />
                <span className="text-lg font-medium text-black">Java</span>
              </a>
              <a href="https://en.wikipedia.org/wiki/C%2B%2B" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center hover:scale-110">
                <FaCode className="text-6xl text-indigo-600" />
                <span className="text-lg font-medium text-black">C++</span>
              </a>
              <a href="https://en.wikipedia.org/wiki/Python_(programming_language)" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center hover:scale-110">
                <FaPython className="text-6xl text-yellow-500" />
                <span className="text-lg font-medium text-black">Python</span>
              </a>
            </div>
          </div>
        </div>

        {/* Development Skills */}
        <div className="mb-8 pt-8">
          <div className="grid grid-cols-5 gap-4">
            <div className="col-span-1 flex items-center">
              <h4 style={headingStyles} className="text-2xl font-bold mb-4 font-cursive text-black">Development</h4>
            </div>
            <div className="col-span-4 grid grid-cols-4 gap-4">
              <a href="https://en.wikipedia.org/wiki/React_(JavaScript_library)" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center hover:scale-110">
                <FaReact className="text-6xl text-blue-500" />
                <span className="text-lg font-medium text-black">ReactJS</span>
              </a>
              <a href="https://en.wikipedia.org/wiki/React_Native" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center hover:scale-110">
                <FaMobileAlt className="text-6xl text-purple-600" />
                <span className="text-lg font-medium text-black">React Native</span>
              </a>
              <a href="https://en.wikipedia.org/wiki/Node.js" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center hover:scale-110">
                <FaNodeJs className="text-6xl text-green-600" />
                <span className="text-lg font-medium text-black">Node.js</span>
              </a>
              <a href="https://en.wikipedia.org/wiki/Django_(web_framework)" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center hover:scale-110">
                <FaPython className="text-6xl text-yellow-500" />
                <span className="text-lg font-medium text-black">Django</span>
              </a>
            </div>
          </div>
        </div>

        {/* Design Skills */}
        <div className="mb-8 pt-8">
          <div className="grid grid-cols-5 gap-4">
            <div className="col-span-1 flex items-center">
              <h4 style={headingStyles} className="text-2xl font-bold mb-4 font-cursive text-black">Designing</h4>
            </div>
            <div className="col-span-4 grid grid-cols-4 gap-4">
              <a href="https://en.wikipedia.org/wiki/CSS" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center hover:scale-110">
                <FaCss3 className="text-6xl text-blue-600" />
                <span className="text-lg font-medium text-black">CSS</span>
              </a>
              <a href="https://en.wikipedia.org/wiki/Tailwind_CSS" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center hover:scale-110">
                <FaCss3Alt className="text-6xl text-blue-400" />
                <span className="text-lg font-medium text-black">Tailwind CSS</span>
              </a>
              <a href="https://en.wikipedia.org/wiki/Figma" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center hover:scale-110">
                <FaPaintBrush className="text-6xl text-pink-600" />
                <span className="text-lg font-medium text-black">Figma</span>
              </a>
              <a href="https://www.canva.com/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center hover:scale-110">
                <FaLaptopCode className="text-6xl text-teal-600" />
                <span className="text-lg font-medium text-black">Canva</span>
              </a>
            </div>
          </div>
        </div>

        {/* Editing Skills */}
        <div className="mb-8 pt-8">
          <div className="grid grid-cols-5 gap-4">
            <div className="col-span-1 flex items-center">
              <h4 style={headingStyles} className="text-2xl font-bold mb-4 font-cursive text-black">Editing</h4>
            </div>
            <div className="col-span-4 grid grid-cols-4 gap-4">
              <a href="https://www.adobe.com/products/photoshop.html" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center hover:scale-110">
                <FaPalette className="text-6xl text-red-600" />
                <span className="text-lg font-medium text-black">Photoshop</span>
              </a>
              <a href="https://www.adobe.com/products/illustrator.html" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center hover:scale-110">
                <FaImage className="text-6xl text-purple-500" />
                <span className="text-lg font-medium text-black">Illustrator</span>
              </a>
              <a href="https://www.adobe.com/products/premiere.html" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center hover:scale-110">
                <FaFilm className="text-6xl text-pink-600" />
                <span className="text-lg font-medium text-black">Premiere Pro</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
