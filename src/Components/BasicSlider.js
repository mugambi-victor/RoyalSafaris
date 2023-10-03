import React from 'react';
import HeroSlider, {Slide} from 'hero-slider';
import animal from "../img/animal-safari.jpg";
import giraffe from "../img/mountain-g128d5b38d_1280.jpg";
import camping from "../img/camping-g03662fd9d_1280.jpg"
import Card from "./Card.js"
export const BasicSlider = () => {
  return (
    <HeroSlider
  height="90vh"

  autoplay 
  controller={{
   
    initialSlide: 1,
    slidingDuration: 800,
    slidingDelay: 0,
    // onSliding: (nextSlide:2) =>
    //   console.debug('onSliding(nextSlide): ', nextSlide),
    // onBeforeSliding: (previousSlide: 1, nextSlide: 3) =>
    //   console.debug('onBeforeSliding(previousSlide, nextSlide): ', previousSlide, nextSlide ),
    // onAfterSliding: (nextSlide: 1) =>
    //   console.debug('onAfterSliding(nextSlide): ', nextSlide)
  }}
  animations={{
    slidingAnimation:'wipe',
    shouldManageAnimationSequence:'true',
    
  }}
>
        <Slide 
        
        background={{
          backgroundImageSrc: animal,
            backgroundAttachment: "fixed"
        }}
       
        > 
          <Card 
          title={[
           <div> <h3>RoyalSafaris</h3>
            </div>
          ]}
          body={[
            <i>Your Gateway to Adventure in Isiolo!
            </i>
          ]}
         />
        </Slide>

        <Slide background={{
         
            backgroundImageSrc: giraffe,
            backgroundAttachment: "fixed"
        }}
        >
          <Card 
         title={[
          <div> <h3>RoyalSafaris</h3>
           </div>
         ]}
         body={[
           <i>Your Gateway to Adventure in Isiolo!
           </i>
         ]}
         
         />
        </Slide>
        <Slide background={{
         
         backgroundImageSrc: camping,
         backgroundAttachment: "fixed"
     }}
     >
       <Card 
        title={[
          <div> <h3>RoyalSafaris</h3>
           </div>
         ]}
         body={[
           <i>Your Gateway to Adventure in Isiolo!
           </i>
         ]}
      />
     </Slide>
         
       
    </HeroSlider>
  )
}

export default BasicSlider;