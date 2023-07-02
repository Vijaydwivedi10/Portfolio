import React from 'react';
import yourCustomImage from '../components/images/aboutme.png';

const Experience = () => {
  const headingStyles2 = {
    fontSize: '3.5rem',
    fontWeight: 'bold',
    marginBottom: '4rem',
    marginLeft: '2rem',
    fontFamily: 'YourSketchyFont, cursive',
    textAlign: 'left',
    color: '#333',
    opacity: '0.',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
  };

  return (
    <section id="experience" className=" flex items-center bg-gray-200 py-10">
      <div className="container mx-auto flex">
        <div className="w-3/4 pr-4">
          <h3 style={headingStyles2}>Experiences</h3>
          <div className="w-full bg-white rounded-lg overflow-hidden shadow-md my-2">
            <div className="p-6">
            
              <h3 className="text-3xl font-bold mb-4 opacity-70">Strand Life Sciences</h3>
              <p className="text-gray-600 mb-2">Position: Software Developer</p>
              <p className="text-gray-600 mb-4">Duration: Jan 2020 - Dec 2021</p>

              
              <p className="text-gray-700">
                Description: I worked on the analysis of Tissue images, specifically focusing on ST (Spatial Transcriptomics) analysis. My tasks involved extracting pathologists' annotations from the images and implementing hover functionality to display data for specific cells.
                This experience allowed me to gain a deep understanding of image processing techniques and develop skills in data visualization and user interface design.
              </p>
              <p className="text-gray-700">
                During my time at Strand Life Sciences, I collaborated with a team of talented developers and domain experts to create innovative solutions for image analysis. I actively contributed to the development and enhancement of the company's flagship image analysis platform, leveraging technologies such as Python, JavaScript, and various image processing libraries.
              </p>
            </div>
            <div className="bg-gray-100 p-4 flex justify-end items-end">
              <a
                href="https://www.aboutcompanya.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300 mr-2"
              >
                About Company
              </a>
              <a
                href="https://github.com/your-username/project-code"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300 mr-2"
              >
                GitHub Repository
              </a>
              <a
                href="https://github.com/your-username/project-presentation"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300"
              >
                Work Presentation
              </a>
            </div>
          </div>
        </div>
        <div className="w-1/4">
          <img src={yourCustomImage} alt="MyImage" className="w-90 h-auto" />
        </div>
      </div>
    </section>
  );
};

export default Experience;
