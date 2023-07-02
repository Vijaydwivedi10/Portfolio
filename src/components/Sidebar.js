import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaUser, FaHeart, FaTools, FaEnvelope } from 'react-icons/fa';
import { GiShoppingBag, GiSettingsKnobs } from 'react-icons/gi';
import { IoMdMusicalNotes } from 'react-icons/io';
import profileImage from '../components/images/dpdp.jpg';

const Sidebar = () => {
  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <aside className="bg-gray-800 text-white h-screen w-70 flex-shrink-0 flex flex-col justify-between">
      <div className="p-4 flex flex-col items-center">
        <img src={profileImage} alt="Profile" className="w-32 h-32 rounded-full mb-4" />
        <h1 className="text-2xl font-bold text-center">Vijay Dwivedi</h1>
      </div>
      <nav className="p-4 flex-grow">
        <ul className="space-y-4">
          <li>
            <a
              href="#home"
              onClick={(e) => scrollToSection(e, 'home')}
              className="flex items-center py-2 px-4 rounded-lg bg-gray-900 hover:bg-gray-700 transition-colors duration-300"
            >
              <FaUser size={24} className="mr-2" />
              <span className="text-lg">Profile</span>
            </a>
          </li>
          <li>
            <a
              href="#about"
              onClick={(e) => scrollToSection(e, 'about')}
              className="flex items-center py-2 px-4 rounded-lg bg-gray-900 hover:bg-gray-700 transition-colors duration-300"
            >
              <FaTools size={24} className="mr-2" />
              <span className="text-lg">Skills</span>
            </a>
          </li>
          <li>
            <a
              href="#skills"
              onClick={(e) => scrollToSection(e, 'skills')}
              className="flex items-center py-2 px-4 rounded-lg bg-gray-900 hover:bg-gray-700 transition-colors duration-300"
            >
              <FaHeart size={24} className="mr-2" />
              <span className="text-lg">Projects</span>
            </a>
          </li>
          <li>
            <a
              href="#projects"
              onClick={(e) => scrollToSection(e, 'projects')}
              className="flex items-center py-2 px-4 rounded-lg bg-gray-900 hover:bg-gray-700 transition-colors duration-300"
            >
              <GiShoppingBag size={24} className="mr-2" />
              <span className="text-lg">Experience</span>
            </a>
          </li>
          <li className="miscellaneous-item"> {/* Add CSS class to the list item */}
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, 'contact')}
              className="flex items-center py-2 px-4 rounded-lg bg-gray-900 hover:bg-gray-700 transition-colors duration-300"
            >
              <FaEnvelope size={24} className="mr-2" />
              <span className="text-lg">Contact</span>
            </a>
          </li>
          <li className="miscellaneous-item">
  <a
    href="#miscellaneous"
    onClick={(e) => scrollToSection(e, 'miscellaneous')}
    className="flex items-center py-2 px-4 rounded-lg bg-blue-600 hover:bg-blue-700 text-white transition-colors duration-300"
  >
    <IoMdMusicalNotes size={24} className="mr-2" />
    <span className="text-lg">Miscellaneous</span>
  </a>
</li>

        </ul>
      </nav>
      <div className="p-4 flex items-center justify-center space-x-2">
        <a
          href="https://github.com/your-github"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-300 transition-colors duration-300"
        >
          <FaGithub size={32} />
        </a>
        <a
          href="https://linkedin.com/your-linkedin"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-300 transition-colors duration-300"
        >
          <FaLinkedin size={32} />
        </a>
        <a
          href="https://instagram.com/your-instagram"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-300 transition-colors duration-300"
        >
          <FaInstagram size={32} />
        </a>
      </div>
      <div className="pb-4" />
    </aside>
  );
};

export default Sidebar;
