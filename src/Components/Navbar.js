import React, {useState} from 'react';
import { styled } from 'styled-components'
import {AiFillCloseSquare} from "react-icons/ai";
import {FaAlignJustify} from "react-icons/fa";
const Navbar = () => {
    const [isHidden, setIsHidden] = useState(false);

    function toggleHidden() {
      setIsHidden(!isHidden);
    }
  return (
    <StyledNavbar>
        <div className='logo'>
            <h1>RoyalSafaris</h1>
            <button onClick={toggleHidden}>
        {isHidden ? [<FaAlignJustify size={30} style={ai}/>] : [<AiFillCloseSquare size={30} style={ai}/>]}
      </button>
     </div>
     
              {!isHidden && <Nav>
        <span><a href='#'>Home</a> </span>
        <span><a href='#'>Events</a></span>
        <span><a href='#'>Services</a></span>
        <span><a href='#'>About</a></span>
        </Nav>}
    </StyledNavbar>
  )
}
const ai={
    color:'black',
    border:'0',
    }

const StyledNavbar=styled.nav`
display:flex;
width:100%;
justify-content: space-between;
background: white;
position: fixed;
z-index: 8;


.logo{
    padding:2rem;
    color:black;
}
button{
    visibility:hidden;
}
@media(max-width:992px){
    display:block;
   
    height:auto;
    button{
    visibility:visible;
    margin-right:1rem;
    margin-bottom:2rem;
  
    top:.5rem;
    }
    .logo{
        padding:2rem;
        display:flex;
        justify-content: space-between;
    }


}

`
const Nav=styled.section`

    margin-right:11px;
    display:flex;
    float:right;
    padding-top:1.5rem;
    padding-bottom:1.5rem;

    span{
    margin-right:2rem;

a{
    
    text-decoration: none;
    font-weight: 400;
    color:black;
    position:relative;
    font-size:1rem;
    transition: .5 ease-in-out;
    padding:1rem;
        
       }
       a:hover{
        background-color: black;
        color:white;
        width:100%;
        
  }

}


@media(max-width:992px){
       
display: block;
float:none;
  a{
    position:absolute;
    float:none;
    padding-left:2rem;
    display:flex;
    flex-direction: column;
    width:100%;
    height:100%;
    }
    
    }
`
export default Navbar