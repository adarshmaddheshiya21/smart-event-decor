
import DisplayMenu from "../components/DisplayMenu";
import Footer from "../components/Footer";
import MenuData from "../components/MenuData";
import Navbar from "../components/Navbar"
import Welcome from "../components/Welcome";
import Quote from "../components/Quote";
import { Component } from "react";
class Home extends Component {
    render() {
        return (
            <>
                <Navbar />
                <Welcome />
                <DisplayMenu />
                <Quote />
                <Footer />
            </>
        )
    }
}

export default Home;