import React from 'react';

const Projects = () => {

  const headingStyles2 = {
    fontSize: '3.5rem',
    fontWeight: 'bold',
    marginBottom: '4rem',
    marginLeft: '2rem',
    fontFamily: 'YourSketchyFont, cursive',
    textAlign: 'left',
    color: '#333',
    opacity: '0.6',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
  };

  return (
    <section id="projects" className="h-screen flex items-center bg-green-200 py-10">
      <div className="container mx-auto">
        <h3 style={headingStyles2}>Projects</h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-lg shadow-md overflow-hidden">
            <div className="bg-white p-6">
              <h3 className="text-xl font-bold mb-2">Project 1</h3>
              <p className="text-gray-700 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit..</p>
            </div>
            <div className="bg-gray-100 px-6 py-4 flex items-center justify-between">
              <span className="text-gray-600">Languages used: HTML, CSS, JavaScript</span>
              <div>
                <a href="https://github.com/project-1" target="_blank" rel="noopener noreferrer" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300">GitHub</a>
                <a href="https://example.com" target="_blank" rel="noopener noreferrer" className="ml-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300">Live Site</a>
                <a href="https://example.com/about-video" target="_blank" rel="noopener noreferrer" className="ml-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300">Video</a>
              </div>
            </div>
          </div>
          <div className="rounded-lg shadow-md overflow-hidden">
            <div className="bg-white p-6">
              <h3 className="text-xl font-bold mb-2">Project 2</h3>
              <p className="text-gray-700 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="bg-gray-100 px-6 py-4 flex items-center justify-between">
              <span className="text-gray-600">Languages used: React, Node.js</span>
              <div>
                <a href="https://github.com/project-2" target="_blank" rel="noopener noreferrer" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300">GitHub</a>
                <a href="https://example.com" target="_blank" rel="noopener noreferrer" className="ml-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300">Live Site</a>
                <a href="https://example.com/about-video" target="_blank" rel="noopener noreferrer" className="ml-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300">Video</a>
              </div>
            </div>
          </div>
          <div className="rounded-lg shadow-md overflow-hidden">
            <div className="bg-white p-6">
              <h3 className="text-xl font-bold mb-2">Project 3</h3>
              <p className="text-gray-700 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="bg-gray-100 px-6 py-4 flex items-center justify-between">
              <span className="text-gray-600">Languages used: Python, Django</span>
              <div>
                <a href="https://github.com/project-3" target="_blank" rel="noopener noreferrer" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300">GitHub</a>
                <a href="https://example.com" target="_blank" rel="noopener noreferrer" className="ml-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300">Live Site</a>
                <a href="https://example.com/about-video" target="_blank" rel="noopener noreferrer" className="ml-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300">Video</a>
              </div>
            </div>
          </div>
          <div className="rounded-lg shadow-md overflow-hidden">
            <div className="bg-white p-6">
              <h3 className="text-xl font-bold mb-2">Project 4</h3>
              <p className="text-gray-700 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="bg-gray-100 px-6 py-4 flex items-center justify-between">
              <span className="text-gray-600">Languages used: Java, Spring</span>
              <div>
                <a href="https://github.com/project-4" target="_blank" rel="noopener noreferrer" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300">GitHub</a>
                <a href="https://example.com" target="_blank" rel="noopener noreferrer" className="ml-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300">Live Site</a>
                <a href="https://example.com/about-video" target="_blank" rel="noopener noreferrer" className="ml-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300">Video</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
