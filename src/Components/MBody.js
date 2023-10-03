import React from 'react'

import leopard from "../img/leopard-g8e51e57b3_1280.jpg"
import tz from "../img/tanzania-gc4c8dffce_1280.jpg"
import camping from "../img/camping-g03662fd9d_1280.jpg"
import CardImageOverlay from "./CardImageOverlay";
import AlilAbout from './AlilAbout'

function MBody() {
  return (
    <div>
       
        <AlilAbout/>
          <div style={whoWeAre}>
            <p style={header2}>Our Packages</p>
         
          </div>
            <div className='cardss'>
              
            <CardImageOverlay
    imageUrl={tz} // Replace with your image URL
    title="Buffalo Springs Game Drive"
    amt="KES 5,000"
    expandedText={
      <ul>
        <li>One day Game drive</li>
        <li>Food and Drinks</li>
        <li>Photoshoot</li>
      </ul>
    } // Replace with your desired text
  />
  <CardImageOverlay
    imageUrl={camping} // Replace with your image URL
    title="Camping and Bonfires" // Replace with your desired title
    expandedText="The quick Brown fox jumped over the lazy dog. The quick Brown fox jumped over the lazy dog.The quick Brown fox jumped over the lazy dog." // Replace with your desired text
  />
  <CardImageOverlay
    imageUrl={leopard} // Replace with your image URL
    title="Image Title" // Replace with your desired title
    expandedText="The quick Brown fox jumped over the lazy dog. The quick Brown fox jumped over the lazy dog.The quick Brown fox jumped over the lazy dog." // Replace with your desired text
  />
  
            </div>
        
           </div>
  )
}
const whoWeAre={
  paddingTop:'1.5em',
  display:"block",
  
}
const header2={
  display:'flex',
  justifyContent:'center',
  fontSize:'2.5em',
  fontWeight:'bold',
  backgroundColor:'whitesmoke'
}
export default MBody