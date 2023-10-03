import React from 'react'
import styled from 'styled-components'
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
function QuickLinks() {
  return (
    <>
    <Styleddiv>
        <div style={{width:'100%'}}>
            <h2>RoyalSafaris</h2>
            </div>
       
       
        <Contactdiv>
        <h3>In Search of a Travel agent?</h3>
            <p>Tel: 0715708417</p>
        </Contactdiv>
        <Qlinks>
            <h1>Quick Links</h1>
            <ul>
                <li><a href=''><BsFacebook className='ico'/></a></li>
                <li><a href=''>  <BsInstagram className='ico'/></a></li>
            </ul>
         
        </Qlinks>
    </Styleddiv>
     <div style={copyy}>
     <p> < AiOutlineCopyrightCircle className='icos'/> 2023 RoyalSafaris. All rights reserved</p>
     </div>
     </>
  )
}

const Styleddiv=styled.div`
display:flex;
margin-top: 5rem;
ul {
    line-height:2;
    
    list-style-type: none;
    display:flex;
}
a{
    color:black;
}
a:hover{
    color:green;
}
h2{
    font-size:2rem;
    padding-top:1rem;
    padding-left:3rem;
    padding-bottom:4rem;
}
h1{
    font-size:3rem;
}
.ico{
    font-size:4rem;
    padding: .3rem;
}
.icos{
    font-size:.7rem;   
}

h3{
    font-size:2rem;
}
p{
    font-size:1.2rem;
    font-weight: bold;
}
@media(max-width:997px)
{
    display:block;
   h2{
    padding-left: 0;
    display:flex;
    justify-content: center;
   }
}
`

const copyy={
    display:'flex',
    justifyContent:'center',
    backgroundColor:'whitesmoke',
    padding:'2rem'
}
const Qlinks=styled.div`
    width: 100%;
    padding-left: 2rem;
    @media (max-width: 997px) {
      display: 'block';
      h1 {
        display:flex;
        justify-content:center;
      }
      ul{
        display:flex;
        justify-content:center;
      }
    }
  `
  const Contactdiv=styled.div`
  width:100%;
  @media(max-width:997px)
  {
    h3{
        font-size:1.8rem;
        display: flex;
        justify-content:center;
    }
    p{
        display: flex;
        justify-content:center;
    }
  }
  `
export default QuickLinks