import React, { useState, useRef} from 'react';
import '../Styles/ImageWithTextOverlay.css'; // Import the CSS file for styling

const CardImageOverlay = ({ imageUrl, title, expandedText }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const timer = useRef(null);
  const handleMouseEnter = () => {
   
    timer.current = setTimeout(() => {
        setIsExpanded(true);
      }, 100);
    
  };

  const handleMouseLeave = () => {
    setIsExpanded(false);
  };


  
  return (
    <div
      className="image-container"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={`image ${isExpanded ? 'expanded' : '' }`}
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      >
        <div className={`overlay ${isExpanded ? 'expanded' : ''}`}>
          <h2 className={`title ${isExpanded ? 'expanded' : ''}`}>{title}</h2>
          {isExpanded && <p className="expanded-text">{expandedText}</p>}
        </div>
      </div>
    </div>
  );
};

export default CardImageOverlay;
