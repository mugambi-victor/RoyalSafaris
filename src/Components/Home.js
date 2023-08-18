import React from 'react'
import Navbar from './Navbar'
import { styled } from 'styled-components'
import MBody from "./MBody";
import {BasicSlider} from "./BasicSlider"
const Home = () => {
  return (
    <StyledHome>
    <Navbar/>
    <BasicSlider />
    <MBody/>
    </StyledHome>
  )
}
const StyledHome=styled.section`
display:block;

`
export default Home