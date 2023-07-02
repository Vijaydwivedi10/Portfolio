import React, { useEffect, useRef, useState } from 'react';
import Image from '../components/images/imim.png';
import { Scrollama, Step } from 'react-scrollama';
import scrollama from 'scrollama';

const About = () => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const stepRef = useRef();

  const headingStyles2 = {
    fontSize: '3.5rem',
    marginBottom: '1rem',
    fontFamily: 'Lobster, Roboto, sans-serif',
    textAlign: 'left',
    color: '#FFDB58', // Mustard yellow color
    opacity: '0.9',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
  };

  const headingStyles = {
    fontSize: '2rem',
    marginBottom: '1rem',
    fontFamily: "'Kalam','Caveat', 'Roboto', sans-serif",
    textAlign: 'center',
    color: '#F5F5DC',
    opacity: currentStepIndex === 1 ? '0.9' : '1', // Show the text only when currentStepIndex is 1
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
    letterSpacing: '0.1rem',
    paddingRight: '80px', // Right padding of 100px
  };

  useEffect(() => {
    const handleStepEnter = ({ index }) => {
      setCurrentStepIndex(index);
    };

    const scroller = scrollama();
    scroller
      .setup({
        step: '.step',
        offset: 0.5,
      })
      .onStepEnter(handleStepEnter);

    return () => {
      scroller.disable();
    };
  }, []);

  return (
    <section id="about" className="h-screen flex items-center justify-center bg-blue-600">
      <div className="container mx-auto flex">
        <div className="w-2/5 flex justify-end">
          <img
            src={Image}
            alt="Profile"
            className="max-w-full h-auto transform scaleX(-1)"
            style={{ width: '2000px' }}
          />
        </div>
        <div className="w-3/5 flex flex-col justify-center items-center">
          <div className="text-center">
            <Scrollama>
              <Step data={0} key={0} className="step">
                <h3 style={headingStyles2}>About Me</h3>
              </Step>
              <Step data={1} key={1} className="step">
              <p style={headingStyles}>
              Hi, I'm Vijay, a 4th Year CSE undergrad at Indian Institute of Technology (IIT Ropar 🎓). 👨‍🎓 <br />
              I believe in exploring 🏌️‍♂️ new things and also believe that nothing exists as talent until you dedicate 🧗 enough
              time to it, after which people start calling it your talent. 🚀
            </p>
              </Step>
            </Scrollama>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
