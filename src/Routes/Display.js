
import Footer from "../components/Footer";
import Navbar from "../components/Navbar"
import Welcome from "../components/Welcome";
import Quote from "../components/Quote";
import MenuData from "../components/MenuData";
import "../components/DisplayMenu.css";
import BackgroundImg from "../components/BackgroundImg";

import img1 from "../img/DisplayBackground/img2.jpg"

function Display() {
    return(
        <>
            <Navbar />
            <BackgroundImg 
                img={img1}
            />
            <h2 className="heading">
                Display
            </h2>
            <MenuData />
            <Quote />
            <Footer />
        </>
    )
}

export default Display;