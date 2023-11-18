
import Footer from "../components/Footer";
import Navbar from "../components/Navbar"
import Welcome from "../components/Welcome";
import Quote from "../components/Quote";
import MocktailMenu from "../components/MocktailMenu";
import "../components/DisplayMenu.css";
import BackgroundImg from "../components/BackgroundImg";
import img1 from "../img/MocktailImg/mocktailBack.jpg"
import VideoPlayer from "../components/videoPlayer";
import video from "../img/MocktailImg/mocktailVideo/mocktailVideo.mp4"


function Moctail() {
    const videoUrl = video;
    return(
        <>
            <Navbar />
            <BackgroundImg 
                img={img1}
            />
            <h2 className="heading">
                Mocktail
            </h2>
            <MocktailMenu />
            <VideoPlayer 
                videoUrl={videoUrl}
            />
            <Quote />
            <Footer />
        </>
    )
}

export default Moctail;