
import img1 from "../img/welcome.jpg";
import BackgroundImg from "./BackgroundImg";

function Welcome() {
    return(
        <div className="welcome">
            <BackgroundImg 
                img={img1}
            />
        </div>
    )
}

export default Welcome;