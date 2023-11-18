import MenuData from "./MenuData"
import "./DisplayMenu.css"
import MocktailMenu from "./MocktailMenu";
import FruitsArt from "./FruitsArt";
import PorStaff from "./PorStaff"

function DisplayMenu() {
    return (
        <>
            <div className="display-menu">
                <h2 className="heading">
                    Display
                </h2>
                <MenuData />
                <h2 className="heading">
                    Mocktail
                </h2>
                <MocktailMenu />
                <h2 className="heading">
                    Fruits Art
                </h2>
                <FruitsArt />
                <h2 className="heading">
                    PRO
                </h2>
                <PorStaff />
            </div>
        </>
    )
}

export default DisplayMenu;