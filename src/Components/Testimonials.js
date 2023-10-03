import React from 'react'
import styled from 'styled-components'
import TestimonialsCard from './TestimonialsCard'
function Testimonials() {
  return (
    <StyledDiv>
       <h3>What our customers say about us</h3>
       <div>
       <TestimonialsCard/>
       </div>
      
    </StyledDiv>

  )
}

const StyledDiv=styled.div`
div{
  display:flex;
  justify-content:center;
}
h3{
  display:flex;
  justify-content:center;
  margin-top: 4rem;
}
 
`

export default Testimonials