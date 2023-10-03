import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import '../Styles/ImageWithTextOverlay.css';

const CardImageOverlay = ({ imageUrl, title, amt, expandedText }) => {
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

  useEffect(() => {
    return () => clearTimeout(timer.current);
  }, []);

  const expandedClassName = isExpanded ? 'expanded' : '';

  return (
    <div
      className="image-container"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={`image ${expandedClassName}`}
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      >
        <div className={`overlay ${expandedClassName}`}>
          <h6 className={`title ${expandedClassName}`}>
            {title}
            <br />
            <span>{amt}</span>
          </h6>
          {isExpanded && (
            <div className="expanded-text">
              {Array.isArray(expandedText) ? (
                <ul >
                  {expandedText.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              ) : (
                <p>{expandedText}</p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

CardImageOverlay.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  amt: PropTypes.number.isRequired,
  expandedText: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]).isRequired,
};


export default CardImageOverlay;
