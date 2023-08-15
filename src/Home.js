
import React from 'react';
import TypingAnimation from './TypingAnimation';


const Home = () => {

  const emailAddress = 'parthbhatt1810@gmail.com';

  return (
    <div id="header" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>

      
      <div className="header-text" style={{ textAlign: 'center', marginBottom: '20px' }}>
      
        <h2>
       <span className="chava">Parth Bhatt</span>
          <br />
          <TypingAnimation />
        </h2>
      </div>
      <div className="social-icons">
      <a href="https://github.com/Mazrah18" target="_blank" rel="noopener noreferrer">
           <i className="fab fa-github"></i>
         </a>
         <a href="https://www.linkedin.com/in/parthbhatt1810/" target="_blank" rel="noopener noreferrer">
           <i className="fab fa-linkedin"></i>
         </a>
         <a href={`mailto:${emailAddress}`} target="_blank" rel="noopener noreferrer">
         <i class="fa-regular fa-envelope"></i>
         </a>
      </div>
      <div style={{ marginBottom: '20px' }}>
      <a href="https://drive.google.com/file/d/1485kkC6iMA3GYbpWde2x500sM2uR5WSa/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="btn homie">
           View Resume
         </a>
      </div>
    </div>
  );
};

export default Home;
