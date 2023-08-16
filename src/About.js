import React from 'react';
import myPhoto from './pic.jpg'; // Import your photo here

const AboutMe = () => {
  return (
    <div style={{    marginBlock : '80px'}}>



    <h1 className="sub-title about-h1" style={{ fontSize : '100px', textAlign: 'center' }}>
    My Story
  </h1>
    <div className="container" style={{ display: 'flex', justifyContent: 'center' }}>
      
      <div className="about" style={{ maxWidth: '1000px', width: '100%', padding: '0 20px' }}>
       
        <div className="row">
    
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
              I am a graduate student @ UCR specializing in web development with a robust command of the MERN stack (MongoDB, Express,ReactJs and NodeJs ). My journey is marked by a keen enthusiasm for crafting seamless digital experiences and dynamic applications. Beyond my proficiency in web development, I am driven by a strong fascination for the world of data analysis and machine learning. I have a profound curiosity for harnessing the power of data to uncover insights and create impactful solutions. My journey is a fusion of technical expertise, creative problem-solving, and an unwavering commitment to expanding my horizons in both web development and the realm of data-driven innovation.
            </p>

            
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default AboutMe;
