import React from 'react';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Sidebar from './components/Sidebar';
import Experience from './components/Experience';

const App = () => {
  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <div style={{ position: 'fixed', top: 0, left: 0, bottom: 0, width: '250px', backgroundColor: '#333', color: '#fff' }}>
        <Sidebar />
      </div>
      <div style={{ flex: 1, overflowY: 'auto', padding: '0px', marginLeft: '250px' }}>
        {/* <Header /> */}
        <Home />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </div>
    </div>
  );
};

export default App;
