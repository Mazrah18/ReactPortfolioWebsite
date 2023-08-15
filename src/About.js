import React from 'react';
import myPhoto from './pic.jpg'; // Import your photo here

const AboutMe = () => {
  return (
    <div>



    <h1 className="sub-title about-h1" style={{ fontSize : '100px', textAlign: 'center' }}>
    My Story
  </h1>
    <div className="container" style={{ display: 'flex', justifyContent: 'center' }}>
      
      <div className="about" style={{ maxWidth: '1000px', width: '100%', padding: '0 20px' }}>
       
        <div className="row" style={{ display: 'flex', flexWrap: 'wrap' }}>
          {/* Left Half - Your Photo */}
          <div className="about-col-1" style={{ flex: '1 1 300px', display: 'flex', justifyContent: 'center' }}>
          <div
          className="circular-image-container"
          style={{
            width: '250px',
            height: '250px',
            borderRadius: '50%',
            overflow: 'hidden',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            display: 'inline-block', // Add this line
          }}
        >
          <img src={myPhoto} alt="Parth Bhatt" className="circular-image" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
          </div>

          {/* Right Half - About Me */}
          <div className="about-col-2" style={{ flex: '1 1 400px', marginLeft: '40px' }}>
            <p className="about-para">
              As a Software Developer with a focus on Web Frontend and Android application development, I've honed a diverse
              set of skills and amassed a broad base of knowledge in the tech sphere. I earned my Master's degree in Computer
              Engineering from the prestigious University of California, Riverside, a feat I'm immensely proud of. I am
              well-versed in a variety of programming languages and technologies, including but not limited to JavaScript,
              Java, Kotlin, and TypeScript. I particularly excel in working with the MERN Stack and Bootstrap for web
              development. Beyond my development capabilities, I have a keen interest in Natural Language Processing, which
              has propelled me towards groundbreaking research projects and publications in this field. Complementing my
              technical abilities, I have substantial experience as a mentor and organizer for coding bootcamps and
              hackathons, and I cherish the opportunity to tutor undergraduates in Python, JavaScript, and Object-Oriented
              programming fundamentals.
            </p>

            
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default AboutMe;
