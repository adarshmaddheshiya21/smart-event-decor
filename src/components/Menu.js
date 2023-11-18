
import React, { useState, useEffect } from 'react';
import "./Menu.css"


const Menu = ({ images, title }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const handlMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (!isHovered) {
        goToNextImage();
      }
    }, 2500);
    return () => clearInterval(intervalId);
  }, [currentImageIndex, isHovered]);


  return (
    <div className='slider-img' onMouseEnter={handlMouseEnter} onMouseLeave={handleMouseLeave}>
      <h1>{title}</h1>
      <button className='prev' onClick={goToPrevImage}>&lt;</button>
      <img
        src={images[currentImageIndex]}
        alt={`Image ${currentImageIndex + 1}`}
        style={{ maxWidth: '100%' }}
      />
      <button className='next' onClick={goToNextImage}>&gt;</button>
    </div>
  );
};

export default Menu;
