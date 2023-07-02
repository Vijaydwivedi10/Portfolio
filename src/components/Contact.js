import React from 'react';

const Contact = () => {
  
  return (
    <section id="contact" className=" flex items-center bg-yellow-200 py-5 px-4">
      <div className="container mx-auto">
        <div className="flex items-stretch">
          <div className="w-1/4">
            <div className="bg-gray-800 text-white rounded-lg px-8 py-20 h-full">
              <h2 className="text-3xl font-bold mb-4">
                <span className="font-cursive">Get in touch</span>
              </h2>
              <p className="text-lg text-white mb-2">Name: Vijay Dwivedi</p>
              <p className="text-lg text-white mb-2">
                Email: <a href="mailto:vijaynews50785@gmail.com" className="text-blue-300 hover:text-blue-400">2020csb1140@iitrpr.ac.in</a>
              </p>
              <p className="text-lg text-white mb-2">
                LinkedIn: <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-blue-400">LinkedIn Profile</a>
              </p>
            </div>
          </div>
          <div className="w-3/4">
            <div className="bg-white p-8 rounded-lg shadow-md h-full">
              <h2 className="text-3xl font-bold mb-4">Contact Form</h2>
              <form>
                <div className="mb-4">
                  <label className="block text-lg text-gray-700 mb-2" htmlFor="name">
                    Name
                  </label>
                  <input className="border border-gray-400 rounded-lg p-2 w-full" type="text" id="name" />
                </div>
                <div className="mb-4">
                  <label className="block text-lg text-gray-700 mb-2" htmlFor="email">
                    Email
                  </label>
                  <input className="border border-gray-400 rounded-lg p-2 w-full" type="email" id="email" />
                </div>
                <div className="mb-4">
                  <label className="block text-lg text-gray-700 mb-2" htmlFor="message">
                    Message
                  </label>
                  <textarea className="border border-gray-400 rounded-lg p-2 w-full" id="message" rows="4"></textarea>
                </div>
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg" type="submit">
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
