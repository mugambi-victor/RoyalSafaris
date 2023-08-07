import React from 'react';
import HeroSlider, {Slide} from 'hero-slider';
import animal from "../img/animal-safari.jpg";
import giraffe from "../img/mountain-g128d5b38d_1280.jpg";
import camping from "../img/camping-g03662fd9d_1280.jpg"
import Card from "./Card.js"
export const BasicSlider = () => {
  return (
    <HeroSlider
  height="70vh"
  
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
           <div> <h1>Royal safaris</h1>
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
            <div> <h1>Royal safaris</h1>
             <i>Where your journey begins..</i></div>
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
          <h3><i>Camp like you never camped before!</i></h3>
        ]}
        body={[
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