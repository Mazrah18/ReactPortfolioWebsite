import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Projects = () => {
  const projectsData = [
    {
      title: 'Multi Genre Blog Website',
      description: 'Designed and Developed a fully functional blogging portal using the MERN stack.',
      image: './image.jpg',
      githubLink: 'https://github.com/Mazrah18/BlogNest',
      technologies: ['React','Express' ,'Node.js', 'MongoDb'],
    },
    {
      title: 'Portfolio Website',
      description: 'Utilized ReactJs with NodeJs to create a custom portfolio website from scratch.',
      image: './portfolio.png',
      githubLink: 'https://github.com/Mazrah18/ReactPortfolioWebsite',
      technologies: ['React', 'Node.js', 'HTML', 'CSS'],
    },
    {
      title: 'Customized Web Based Video Player',
      description: 'Utilized vanilla javascript with HTML and CSS to design a video player.',
      image: './image.jpg',
      githubLink: 'https://github.com/your-username/social-media-app',
      technologies: ['JavaScript', 'Bootstrap', 'HTML', 'CSS'],
    },
    {
      title: 'TechSift: Tech Reviews Search Engine',
      description: 'A web application that provides with reviews of various technology.',
      image: './image.jpg',
      githubLink: 'https://github.com/Mazrah18/TechreviewSearchEngine',
      technologies: ['Python', 'Flask', 'HTML', 'CSS', 'JavaScript', 'BERT' , 'Lucene'],
    },
    {
      title: 'Image Colorization using Inception V3 deep learning model',
      description: 'Deep learning Model to provide colorful and vibrant images from B/W images as an input.',
      image: './image.jpg',
      githubLink: 'https://github.com/Mazrah18/ImageColorizationusingInceptionV3',
      technologies: ['Deep learning', 'python', 'ML', 'Data Visualization'],
    }
   ,

    {
      title: 'Transformer Based Network Traffic Classification ',
      description: 'Bert based Network classification on real world data obtained using wireshark',
      image: './image.jpg',
      githubLink: 'https://github.com/Mazrah18/Network-Traffic-Classification-using-BERTtransformer',
      technologies: ['python', 'BERT', 'pytorch', 'matplotlib'],
    }

  ];

  return (
    <div className="projects">
      <h1 className="sub-title">My Projects</h1>
      <div className="project-list">
        {projectsData.map((project, index) => (
          <div className="project" key={index}>
            <img src={project.image} alt={project.title} />
            <div className="project-details">
              <h2>{project.title}</h2>
              <div className="technologies">
                {project.technologies.map((technology, techIndex) => (
                  <div key={techIndex} className="technology">
                    <FontAwesomeIcon icon={faCode} />
                    <span>{technology}</span>
                  </div>
                ))}
              </div>
              <p>{project.description}</p>
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} />
                View on GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="add-more-container">
  <a href="https://github.com/Mazrah18" target="_blank" rel="noopener noreferrer" className="github btn">
    View More
  </a>
</div>

    </div>
  );
};

export default Projects;
