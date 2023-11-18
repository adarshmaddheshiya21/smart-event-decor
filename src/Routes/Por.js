
import Footer from "../components/Footer";
import Navbar from "../components/Navbar"
import Quote from "../components/Quote";
import PorStaff from "../components/PorStaff";
import BackgroundImg from "../components/BackgroundImg";
import img1 from "../img/ProImg/proBack.jpg"
function Por() {
    return(
        <>
            <Navbar />
            <BackgroundImg 
                img={img1}
            />
            <h2 className="heading">
                PRO Staff
            </h2>
            <PorStaff />
            <Quote />
            <Footer />
        </>
    )
}

export default Por;