import React from 'react'
import Navbar from './Navbar'
import { styled } from 'styled-components'
import MBody from "./MBody";
import {BasicSlider} from "./BasicSlider"
import QuickLinks from './QuickLinks';
import Testimonials from './Testimonials';
import { InnerLayout } from '../Styles/Layouts'

const Home = () => {
  return (
    <StyledHome>
    <Navbar/>
    <BasicSlider />
    <InnerLayout>
    <MBody/>
    <Testimonials/>
    <QuickLinks/>
    </InnerLayout>
    </StyledHome>
  )
}
const StyledHome=styled.section`
display:block;

`
export default Home