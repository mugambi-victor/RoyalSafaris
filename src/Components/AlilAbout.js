import React from 'react'
import { styled } from 'styled-components'

function AlilAbout() {
  return (
    <StyledDiv>
       
        <p >
        
        At RoyalSafaris, we invite you to embark on a journey of discovery and wonder, where breathtaking landscapes, thrilling wildlife encounters, and unforgettable memories await. Established in 2022, our passion for travel and our commitment to providing exceptional experiences have made us your trusted partner in exploring the hidden treasures of Isiolo and beyond.
        </p>
    </StyledDiv>
  )
}

export default AlilAbout

const StyledDiv=styled.div`
padding-top:2rem;
    text-align:justify;
    font-weight:bold;
    line-height:2;
    @media(max-width:997px){

    }
`

const StyledHeader=styled.div`
display:flex;
justify-content:center;
font-weight:bold;
font-size: 3rem;

@media(max-width:997px){
    font-size: 3.5rem;
}
`

