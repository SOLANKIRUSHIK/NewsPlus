import React, { useState, useEffect } from 'react';
import '../index.css'; // Assuming you have the CSS file for styling



const Typewriter = ({ textArray }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const handleTyping = () => {
      const currentText = textArray[currentTextIndex];
      if (!isDeleting && currentIndex < currentText.length) {
        setDisplayText((prevText) => prevText + currentText[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      } else if (isDeleting && currentIndex > 0) {
        setDisplayText((prevText) => prevText.slice(0, -1));
        setCurrentIndex((prevIndex) => prevIndex - 1);
      } else if (!isDeleting && currentIndex === currentText.length) {
        setIsDeleting(true);
        setTimeout(() => {}, 1000); // Pause at the end of each word
      } else if (isDeleting && currentIndex === 0) {
        setIsDeleting(false);
        setCurrentTextIndex((prevIndex) => (prevIndex + 1) % textArray.length);
      }
    };

    const timer = setTimeout(handleTyping, 100); // Adjust the speed of typing here (e.g., 100ms)

    return () => clearTimeout(timer);
  }, [currentIndex, isDeleting, textArray, currentTextIndex]);

  return( 
    <>
  <span className="typewriter-container">{displayText}</span>
   
  </>
  )


};

export default Typewriter;