import React from 'react';


const Skills = () => {
  const Frontend = {
    'HTML': "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg",
    'CSS': "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg",
    'Bootstrap': "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
    'React': "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  };

  const Backend = {
    'Node.js': "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg",
    'MongoDB': "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg",
    'Express': "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    'MySQL': "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg",
    'Flask': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg',
  };

  const languages = {
    'JavaScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    'Python': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    'C++': "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-plain.svg",
    'TypeScript': "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  };

  const frameworks = {
    'GitHub': "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" 
  ,
  
    'VSCode': "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
    
    "<Linux" : "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" ,
          
  
    'PyTorch': "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-plain-wordmark.svg",
  };

  // Function to render the Devicon items for a given category
  const renderSkillBoxes = (icons) => {
    return Object.keys(icons).map((iconKey, index) => (
      <div className="skill--box" key={index} data-text={iconKey}>
        <img src={icons[iconKey]} alt={`Icon ${iconKey}`} />
      </div>
    ));
  };

  return (
    <div className="skills-container">
      <h1 className="skills-heading">Skills</h1>
    <div className="skills-grid">
      {/* Languages */}
      <div className="skills-section">
        <div className="skillsHeader">
          <h2>Languages</h2>
        </div>
        <div className="skillsIcons">{renderSkillBoxes(languages)}</div>
      </div>

      {/* Frontend */}
      <div className="skills-section">
        <div className="skillsHeader">
          <h2>Front End</h2>
        </div>
        <div className="skillsIcons">{renderSkillBoxes(Frontend)}</div>
      </div>

      {/* Backend */}
      <div className="skills-section">
        <div className="skillsHeader">
          <h2>Back End</h2>
        </div>
        <div className="skillsIcons" style={{width : '100%'}}>{renderSkillBoxes(Backend)}</div>
      </div>

      {/* Frameworks */}
      <div className="skills-section">
        <div className="skillsHeader">
          <h2>Tools & Frameworks</h2>
        </div>
        <div className="skillsIcons">{renderSkillBoxes(frameworks)}</div>
      </div>
    </div>
    </div>
  );
};

export default Skills;