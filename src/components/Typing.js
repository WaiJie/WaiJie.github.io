import React, { useState, useEffect } from 'react';

const TypingEffect = ({ text }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (currentIndex < text.length) {
        setDisplayText(text.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      } else {
        clearInterval(intervalId);
      }
    }, 80); // Adjust the typing speed by changing the interval delay

    return () => clearInterval(intervalId);
  }, [currentIndex, text]);

  return <p>{displayText}</p>;
};

export default TypingEffect;