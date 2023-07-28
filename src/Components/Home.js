import React from 'react'
import Navbar from './Navbar'
import { styled } from 'styled-components'
import animal from '../img/animal-safari.jpg'
const Home = () => {
  return (
    <StyledHome>
    <Navbar/>
  
    </StyledHome>
  )
}
const StyledHome=styled.section`
background-image:url(${animal});
background-repeat:no-repeat;
background-size:cover;
background-position:center;
height: 100vh;
`
export default Home