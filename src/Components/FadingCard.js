import React, { useEffect, useState } from 'react';
import '../Styles/FadingCard.css'; // Create this CSS file to define the animations
import leopard from "../img/leopard-g8e51e57b3_1280.jpg"
import CardImageOverlay from './CardImageOverlay';
const FadingCard = () => {
    const [fadeIn, setFadeIn] = useState(false);
  
    useEffect(() => {
      setFadeIn(true);
    }, []);
  
    return (
      <div className={`fading-card ${fadeIn ? 'fade-in' : ''}`}>
        {/* Your card content goes here */}
        <div className="card">
          {/* Card content */}
          <CardImageOverlay
    imageUrl={leopard} // Replace with your image URL
    title="Image Title" // Replace with your desired title
    expandedText="The quick Brown fox jumped over the lazy dog. The quick Brown fox jumped over the lazy dog.The quick Brown fox jumped over the lazy dog." // Replace with your desired text
  />
         
        </div>
      </div>
    );
  };
  
  export default FadingCard;
  