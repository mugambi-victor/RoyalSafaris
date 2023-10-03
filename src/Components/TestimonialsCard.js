import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import bg1 from '../img/bg.jpg'; // Change image imports as needed
import bg2 from '../img/giraffe.jpg';
import bg3 from '../img/tz.jpg';

const testimonialsData = [
  {
    name: 'Victor Mugambi',
    text: 'My day at Buffalo Springs with Royal Safaris was an absolute triumph. The combination of expert guides, breathtaking scenery, and a dedication to sustainable tourism made for an adventure that exceeded all expectations. I wholeheartedly recommend Royal Safaris to anyone seeking a premium safari experience that not only showcases the wonders of nature but also contributes to their conservation. This was more than just a safari; it was an immersive journey into the heart of Africa\'s untamed beauty.',
    image: bg1,
  },
  // Add more testimonials as needed
  {
    name: 'Hussein Mohammed',
    text: 'My day at Buffalo Springs with Royal Safaris was an absolute triumph...',
    image: bg2,
  },
  {
    name: 'Aisha Coder',
    text: 'My day at Buffalo Springs with Royal Safaris was an absolute triumph...',
    image: bg3,
  },
];

function TestimonialsCard() {
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  useEffect(() => {
    // Automatically advance to the next testimonial every 5 seconds
    const intervalId = setInterval(() => {
      setCurrentTestimonialIndex((prevIndex) =>
        prevIndex === testimonialsData.length - 1 ? 0 : prevIndex + 1
      );
    }, 10000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  const currentTestimonial = testimonialsData[currentTestimonialIndex];

  return (
    <StyledDiv>
      <div className='parent'>
        <div className='img'>
          <img src={currentTestimonial.image} alt='' />
          <p>{currentTestimonial.name}</p>
        </div>
        <div className='content'>{currentTestimonial.text}</div>
      </div>
    </StyledDiv>
  );
}




const StyledDiv=styled.div`
padding: 2rem;
width:100%;
display:flex;
flex-direction: column;
background-color: whitesmoke;
box-shadow: 0 1px 2px 0 rgba(0, 0, 0, .4), 0 1px 2px 0 rgba(0, 0, 0, 0.12);
.img{
    display:flex;
   justify-content:start;
   img{
    height:150px;
    width:150px;
    border-radius: 40rem;
   }
   p{
    margin-top: 5rem;
    margin-left: 1rem;
    font-weight: bold;
    line-height: 2;
   }
}
.content{
    margin-top: 1rem;
}
.parent{
    display:block;
    margin-left: 10rem;
    margin-right: 10rem;
}
@media(max-width:997px)
{
    width:100%;
    display:block;
    padding:1rem;
    .parent{
        display:block;
        margin-left:0;
        margin-right:0;
    }
    .img{
        display:flex;
        flex-direction: column;
        p{
        margin-top:1rem;
    }
    }
    
}
`
export default TestimonialsCard