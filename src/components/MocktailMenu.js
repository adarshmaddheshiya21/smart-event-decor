
import React from 'react';
import Menu from './Menu';

// import Images 
import img1 from "../img/MocktailImg/img1.jpg"
// import img2 from "../img/MocktailImg/img2.jpg"
import img3 from "../img/MocktailImg/img3.jpg"
import img4 from "../img/MocktailImg/img4.jpg"


const MocktailMenu = () => {
  const images = [
    img1, img3, img4
  ];

  return (
    <div>
      <Menu
        title="Molecular Mocktail"
        images={images}
      />
      {/* <Menu
        title="Thick Sake"
        images={images}
      /> */}
    </div>
  );
};

export default MocktailMenu;
