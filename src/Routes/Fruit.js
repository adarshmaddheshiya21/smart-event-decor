
import Footer from "../components/Footer";
import Navbar from "../components/Navbar"
import Quote from "../components/Quote";
import FruitsArt from "../components/FruitsArt";
import "../components/DisplayMenu.css";
import BackgroundImg from "../components/BackgroundImg";
import img1 from "../img/FruitsARt/fruit.jpg"
import VideoPlayer from "../components/videoPlayer";
import fVideo from "../img/FruitsARt/fruitVideo/fVideo.mp4";

function Fruit() {
    const videoUrl = fVideo;
    return(
        <>
            <Navbar />
            <BackgroundImg 
                img={img1}
            />
            <h2 className="heading">
                Fruits Art
            </h2>
            <FruitsArt />
            <VideoPlayer 
                videoUrl={videoUrl}
            />
            <Quote />
            <Footer />
        </>
    )
}

export default Fruit;