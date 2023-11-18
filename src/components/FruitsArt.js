
import React from 'react';
import Menu from './Menu';

// import Images 
import img1 from "../img/FruitsARt/img1.jpg"
import img2 from "../img/FruitsARt/img2.jpg"


const FruitsArt = () => {
  const images = [
    img1, img2
  ];

  return (
    <div>
      <Menu
        title="Fruits Art"
        images={images}
      />
    </div>
  );
};

export default FruitsArt;
