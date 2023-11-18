
import React from 'react';
import Menu from './Menu';

// import Images 
import img1 from "../img/ProImg/PRO/img1.jpg"
import img2 from "../img/ProImg/PRO/img2.jpg"
import img3 from "../img/ProImg/PRO/img3.jpg"
import img4 from "../img/ProImg/PRO/img4.jpg"
import img5 from "../img/ProImg/PRO/img5.jpg"
import img6 from "../img/ProImg/PRO/img6.jpg"
import img7 from "../img/ProImg/PRO/img7.jpg"

const POR = () => {
  const images = [
    img1, img2, img3, img4, img5, img6, img7
  ];

  return (
    <div>
      <Menu
        title="PRO"
        images={images}
      />
    </div>
  );
};

export default POR;
