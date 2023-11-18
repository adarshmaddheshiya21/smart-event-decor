
import React from 'react';
import Menu from './Menu';

// import Images 
import img1 from "../img/display img/img1.jpg"
import img2 from "../img/display img/img2.jpg"
import img3 from "../img/display img/img3.jpg"
import img4 from "../img/display img/img4.jpg"
import img5 from "../img/display img/img5.jpg"
import img6 from "../img/display img/img6.jpg"
import img7 from "../img/display img/img7.jpg"
import img8 from "../img/display img/img8.jpg"
import img9 from "../img/display img/img9.jpg"
import img10 from "../img/display img/img10.jpg"

import img11 from "../img/display img/white gold/img11.jpg"
import img12 from "../img/display img/white gold/img12.jpg"
import img13 from "../img/display img/white gold/img13.jpg"
import img14 from "../img/display img/white gold/img14.jpg"

import img21 from "../img/display img/Steel gold rose/img21.jpg"

const MenuData = () => {
  const images = [
    img1, img2, img3, img4, img5, img6, img7, img8, img9, img10
  ];

  const images2 = [
    img11, img12, img13, img14
  ]

  const images3 = [
    img21
  ]

  return (
    <div>
      <Menu
        title="Rajwadu Counter Display"
        images={images}
      />
      <Menu
        title="Steel Rose Gold Display"
        images={images3}
      />
      <Menu
        title="White Gold Display"
        images={images2}
      />
    </div>
  );
};

export default MenuData;
