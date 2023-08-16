import React from 'react';
import HeroSlider, {Slide} from 'hero-slider';
import animal from "../img/animal-safari.jpg";
import giraffe from "../img/mountain-g128d5b38d_1280.jpg";
import camping from "../img/camping-g03662fd9d_1280.jpg"
import Card from "./Card.js"
export const BasicSlider = () => {
  return (
    <HeroSlider
  height="80vh"

  autoplay 
  controller={{
   
    initialSlide: 1,
    slidingDuration: 800,
    slidingDelay: 100,
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
           <div> <h3>Royal safaris</h3>
            <i>Where your journey begins..</i></div>
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
            <div> <h3>Royal safaris</h3>
             </div>
           ]}
           body={[
            <i>Ultimate traveling experience at an affordable package</i>
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
          <h3>Lets Go Camping </h3>
        ]}
        body={[
          <i>Camp like you never camped before!</i>,
          <ul>
            <li>Barbecues and Bonfires</li>
            <li>Fresh Outdoors</li>
            <li>Greetings from the Wild</li>
          </ul>
        ]}
      />
     </Slide>
         
       
    </HeroSlider>
  )
}

export default BasicSlider;