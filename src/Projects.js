import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import "./assets/projects/Workout-app.png"
import workoutImage from './assets/projects/Workout-app.png';
import BlogImage from './assets/projects/blognest-app.png';
import PortImage from './assets/projects/portfolio website.png';


const Projects = () => {
  const projectsData = [
    {
      title: 'Workout Buddy',
      description: 'Full Stack Workout tracking application that utlizies MERN stack with JWT authentication',
      image: workoutImage,
      githubLink: 'https://github.com/Mazrah18/BlogNest',
      technologies: ['React','Express' ,'Node.js', 'MongoDb','JWT authentication'],
      DirectLink: 'https://parth-workout.netlify.app/',
      isLive: true
    },
    {

      title: 'BlogNest : Multi Genre Blog Website',
      description: 'Designed and Developed a fully functional blogging portal using the MERN stack.',
      image: BlogImage,
      githubLink: 'https://github.com/Mazrah18/BlogNest',
      technologies: ['React','Express' ,'Node.js', 'MongoDb'],
      DirectLink: 'https://parth-blognest.netlify.app/',
      isLive: true

    },
    {
      title: 'Portfolio Website',
      description: 'Utilized ReactJs with NodeJs to create a custom portfolio website from scratch.',
      image: PortImage,
      githubLink: 'https://github.com/Mazrah18/ReactPortfolioWebsite',
      technologies: ['React', 'Node.js', 'HTML', 'CSS'],
      DirectLink: 'https://parth-bhatt.netlify.app/',
      isLive: true
    },
    {
      title: 'Image Colorization using Inception V3 deep learning model',
      description: 'Deep learning Model to provide colorful and vibrant images from B/W images as an input.',
      image: './image.jpg',
      githubLink: 'https://github.com/Mazrah18/ImageColorizationusingInceptionV3',
      technologies: ['Deep learning', 'python', 'ML', 'Data Visualization'],
    },
    {
      title: 'TechSift: Tech Reviews Search Engine',
      description: 'A web application that provides with reviews of various technology.',
      image: './image.jpg',
      githubLink: 'https://github.com/Mazrah18/TechreviewSearchEngine',
      technologies: ['Python', 'Flask', 'HTML', 'CSS', 'JavaScript', 'BERT' , 'Lucene'],
    },
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
              <div className="redirects" style={{display:'flex', flexDirection:'row' , gap: '20px'}}>
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} />
                View on GitHub
              </a>
              { project.isLive && <a href={project.DirectLink} target="_blank" rel="noopener noreferrer">
                View Live
              </a> }
              </div>

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
