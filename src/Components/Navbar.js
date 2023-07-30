import React from 'react'
import { styled } from 'styled-components'

const Navbar = () => {
  return (
    <StyledNavbar>
        <div className='logo'>
            <h1>RoyalSafaris</h1>
        </div>
        <ul>
        <li>Home</li>
        <li>Events</li>
        <li>Services</li>
        <li>About</li>
        </ul>
    </StyledNavbar>
  )
}

const StyledNavbar=styled.nav`
display:flex;
justify-content: space-between;
ul{
    margin-right:11px;
    display:flex;
    float:right;
}
li{
    display:flex;
    float:right;
    padding: 13px;
    color:white;
}
.logo{
    padding:13px;
    color:white;
}
`
export default Navbar