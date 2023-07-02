import React, { useState, useEffect } from 'react';

const Projects = () => {
  // Styling constants and state
  const headingStyles2 = {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    marginBottom: '4rem',
    marginLeft: '2rem',
    fontFamily: 'YourSketchyFont, cursive',
    textAlign: 'left',
    color: '#333',
    opacity: '0.6',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
  };

  const projectStyles = {
    container: 'rounded-lg shadow-md overflow-hidden flex flex-col',
    content: 'bg-white p-6 text-sm h-40', // Increase Height of the content according to you the content is available
    footer: 'bg-gray-100 px-6 py-4 flex items-center justify-between',
    language: 'text-gray-600 text-xs',
    link:
      'bg-blue-500 text-white text-xs px-4 py-2 ml-4 rounded-md hover:bg-blue-600 transition-colors duration-300',
  };

  const alertStyles = {
    container: 'fixed bottom-8 right-16 bg-red-400 text-white text-center p-2 rounded-md',
    fadeOut: 'opacity-0 transition-opacity duration-1000',
  };

  // Content constants
  const projects = [
    {
      title: 'PHD Job portal',
      description:
        'Created a MERN stack platform for PHD students to apply for academic jobs. Utilized Tailwind CSS for styling and Figma for UI design. Integrated filters, subscription notifications, and a comprehensive profile section with personal, educational, work experience, publication, and document details.',
      languages: 'MERN stack',
      githubLink: 'https://github.com/Vijaydwivedi10/PhdJobPortal.git',
      liveSiteLink: 'https://phd-portal-job.netlify.app/',
      videoLink: 'https://drive.google.com/file/d/1HQnK1vQ4nga7dEpfn8Yd9zjCslfcrx1d/view?usp=share_link',
    },
    {
      title: 'Habit-Tracker App',
      description:
        'Created a goal-tracking web app using React, Firebase, and Material UI, enabling goal creation, editing, deletion, progress tracking, reminders, and analytics. Ensured code quality through comprehensive unit testing with Jest framework.',
      languages: 'React Native, Firebase',
      githubLink: 'https://github.com/Vijaydwivedi10/Habit_Tracker_App.git',
      liveSiteLink: '',
      videoLink: '',
    },
    {
      title: 'Academic Course Management System',
      description: 'Developed a Java system using Gradle, integrated with a Postgresql database. Implemented course management, enrollment, evaluation, and grade submission features. Ensured software quality through extensive JUnit testing, facilitating graduation evaluation based on credit requirements.',
      languages: 'JAVA, SQL , Postgres',
      githubLink: 'https://github.com/Vijaydwivedi10/Academic_Course_Management_System.git',
      liveSiteLink: '',
      videoLink: '',
    },
    {
      title: ' UCP based cache partitioning on Champsim',
      description: 'Implemented Utility Based Cache (UCP) partitioning on ChampSim. UCP is a low-overhead, runtime mechanism that effectively partitions a shared cache among multiple applications based on their cache miss reduction potential for a given cache resource allocation.',
      languages: 'Champsim',
      githubLink: 'https://github.com/Vijaydwivedi10/UCP-based-Cache-implementation-in-champsim.git',
      liveSiteLink: '',
      videoLink: '',
    },
  ];

  // State to track the visibility of the notification alert
  const [showAlert, setShowAlert] = useState(false);

  // Function to handle the click event on a link
  const handleClick = () => {
    setShowAlert(true);
  };

  // Automatically hide the alert after 2 seconds
  useEffect(() => {
    if (showAlert) {
      const timer = setTimeout(() => {
        setShowAlert(false);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [showAlert]);

  return (
    <section id="projects" className="h-screen flex items-center bg-green-200 py-10">
      <div className="container mx-auto ml-20 mr-20">
        <h3 style={headingStyles2}>Projects</h3>
        <div className="grid grid-cols-2 gap-4">
          {projects.map((project, index) => (
            <div key={index} className={projectStyles.container}>
              <div className={projectStyles.content}>
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-700 mb-4">{project.description}</p>
              </div>
              <div className={projectStyles.footer}>
                <span className={projectStyles.language}>Tech Stack: {project.languages}</span>
                <div>
                  {project.githubLink ? (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={projectStyles.link}
                    >
                      GitHub
                    </a>
                  ) : (
                    <button className={projectStyles.link} onClick={handleClick}>
                      GitHub
                    </button>
                  )}
                  {project.liveSiteLink ? (
                    <a
                      href={project.liveSiteLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${projectStyles.link} ml-4`}
                    >
                      Live Site
                    </a>
                  ) : (
                    <button className={projectStyles.link} onClick={handleClick}>
                      Live Site
                    </button>
                  )}
                  {project.videoLink ? (
                    <a
                      href={project.videoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${projectStyles.link} ml-4`}
                    >
                      Video
                    </a>
                  ) : (
                    <button className={projectStyles.link} onClick={handleClick}>
                      Video
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {showAlert && (
        <div className={`${alertStyles.container} ${showAlert ? '' : alertStyles.fadeOut}`}>
          Link not available at the moment
        </div>
      )}
    </section>
  );
};

export default Projects;
