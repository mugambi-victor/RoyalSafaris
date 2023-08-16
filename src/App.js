import React from "react";
import {ImageWithTextOverlay} from "./Styles/ImageWithTextOverlay.css";
import Home from "./Components/Home";
import MBody from "./Components/MBody";
import {BasicSlider} from "./Components/BasicSlider"

function App() {

 
  return (
    <div className="App">
    <Home/>
    <BasicSlider/>
    <MBody/>
    </div>
  );
}

export default App;
