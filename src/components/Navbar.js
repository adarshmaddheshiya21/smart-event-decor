import react, { Component, useState } from "react"
import "./Navbar.css"
const navbarItems = [
    {
        title: "Home",
        url: "/",
        cName: "navItems"
    },
    {
        title: "Display",
        url: "./display",
        cName: "navItems"
    },
    {
        title: "Moctail",
        url: "/moctail",
        cName: "navItems"
    },
    {
        title: "Fruits Art",
        url: "/fruit",
        cName: "navItems"
    },
    {
        title: "PRO",
        url: "/por",
        cName: "navItems"
    },
    {
        title: "About Us",
        url: "/about",
        cName: "navItems"
    }
]

class Navbar extends Component {
    state = { clicked: false };
    handleClick = () => {
        this.setState({ clicked: !this.state.clicked });
    }
    render() {
        return (
            <>
                <div className="navbar">
                    <div className="logo">
                        <h1>Smart Event Decor</h1>
                    </div>
                    <div className="hamburger-menu" onClick={this.handleClick}>
                        <i id="bars" className={this.state.clicked ? "fas fa-times": "fas fa-bars"}></i>
                    </div>
                    <ul id="nav-menu" className={this.state.clicked ? "#nav-menu active" : "#nav-menu"}>
                        {navbarItems.map((item, index) => {
                            return (
                                <li><a className={item.cName} href={item.url}>{item.title}</a></li>
                            )
                        })}
                    </ul>
                </div>
            </>
        )
    }
}

export default Navbar;