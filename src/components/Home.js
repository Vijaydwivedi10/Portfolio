import React from 'react';
import profileImage from '../components/images/boy.png';

const Home = () => {
  const customFontStyle = {
    fontFamily: "'Kalam', cursive",
    color: 'black',
    fontSize: '2rem',
    marginTop: '20px',
    marginBottom: '20px',
  };
  
  

  const customFontStyle2 = {
    fontFamily: 'Lobster, cursive',
    color: 'black',
  };

  const hiStyle = {
    color: 'black',
    fontSize: '3rem',
  };

  const vijayStyle = {
    color: 'blue',
    fontSize: '4rem'
  };

  const emojiStyle = {
    fontSize: '1.8em',
    marginLeft: '0.2em',
    color: 'blue',
  };


  return (
    <section id="home" className="h-screen flex items-center bg-gray-200">
      <div className="container mx-auto flex">
        <div className="w-1/2 relative">
          <div className="pl-16 absolute left-0 top-1/2 transform -translate-y-1/2">
            <h1 className="text-4xl font-bold mb-4" style={customFontStyle}>
              <span style={hiStyle}>Hi, I'm </span>
              <span style={vijayStyle}>Vijay</span>{' '}
              <span className="emoji" role="img" aria-label="sparkles" style={emojiStyle}>
                ✨
              </span>
            </h1>
            <p className="text-lg" style={customFontStyle}>
              CSE UnderGrad Student at IIT Ropar{' '}
              
            </p>
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 mt-4 rounded">
              Contact Me
            </button>
          </div>
        </div>
        <div className="w-1/2 flex justify-end">
          <img src={profileImage} alt="Profile" className="w-96 h-128 mr-16" />
        </div>
      </div>
    </section>
  );
};

export default Home;
