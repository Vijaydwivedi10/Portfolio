import React from 'react';

const Projects = () => {
  // Styling constants
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
    content: 'bg-white p-6 text-sm h-40' ,
    footer: 'bg-gray-100 px-6 py-4 flex items-center justify-between mt-auto',
    language: 'text-gray-600 text-xs',
    link: 'bg-blue-500 text-white text-xs px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300',
  };

  // Content constants
  const projects = [
    {
      title: 'Project 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing sum dolor sit amet, consectetur adipiscing sum dolor sit amet, consectetur adipiscing sum dolor sit amet, consectetur adipiscing elit.',
      languages: 'HTML, CSS, JavaScript',
      githubLink: 'https://github.com/project-1',
      liveSiteLink: 'https://example.com',
      videoLink: 'https://example.com/about-video',
    },
    {
      title: 'Project 2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      languages: 'React, Node.js',
      githubLink: 'https://github.com/project-2',
      liveSiteLink: 'https://example.com',
      videoLink: 'https://example.com/about-video',
    },
    {
      title: 'Project 3',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      languages: 'Python, Django',
      githubLink: 'https://github.com/project-3',
      liveSiteLink: 'https://example.com',
      videoLink: 'https://example.com/about-video',
    },
    {
      title: 'Project 4',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      languages: 'Java, Spring',
      githubLink: 'https://github.com/project-4',
      liveSiteLink: 'https://example.com',
      videoLink: 'https://example.com/about-video',
    },
  ];

  return (
    <section id="projects" className="flex items-center bg-green-200 py-10">
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
                <span className={projectStyles.language}>Languages used: {project.languages}</span>
                <div>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={projectStyles.link}
                  >
                    GitHub
                  </a>
                  <a
                    href={project.liveSiteLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${projectStyles.link} ml-4`}
                  >
                    Live Site
                  </a>
                  <a
                    href={project.videoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${projectStyles.link} ml-4`}
                  >
                    Video
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
