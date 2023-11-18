import { Route, Routes } from "react-router-dom";
import Home from "./Routes/Home"
import Display from "./Routes/Display";
import Moctail from "./Routes/Moctail";
import Fruit from "./Routes/Fruit";
import Por from "./Routes/Por";
import "./style.css"
import About from "./Routes/About";


function App() {
    return(
        <div className="App">
            <Routes>
                <Route exact path="/" element={<Home />}/>
                <Route path="/display" element={<Display />}/>
                <Route path="/moctail" element={<Moctail />}/>
                <Route path="/fruit" element={<Fruit />}/>
                <Route path="/por" element={<Por />}/>
                <Route path="/about" element={<About />}/>
            </Routes>
        </div>
    )
}

export default App;