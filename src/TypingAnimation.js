import React, { useEffect, useRef } from 'react';

const TypingAnimation = () => {
  const typedItems = ['FullStack Developer.','Web Developer' ,'Programmer.','Data Analyst.','Tech Enthusiast!'];
  const typedRef = useRef(null);
  let itemIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  const type = () => {
    const currentText = typedItems[itemIndex];
    if (!isDeleting) {
      typedRef.current.innerHTML = currentText.slice(0, charIndex);
      charIndex++;
      if (charIndex > currentText.length) {
        isDeleting = true;
        charIndex = currentText.length;
      }
    } else {
      typedRef.current.innerHTML = currentText.slice(0, charIndex);
      charIndex--;
      if (charIndex < 0) {
        isDeleting = false;
        itemIndex = (itemIndex + 1) % typedItems.length;
        charIndex = 0;
      }
    }
  };

  useEffect(() => {
    const typingInterval = setInterval(type, 100);
    return () => clearInterval(typingInterval);
  },);

  return (
    <p style={{color : 'whitesmoke'}}>
I'm a <span className="typed lololol" ref={typedRef}></span>
    </p>
      


  );
};

export default TypingAnimation;
