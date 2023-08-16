import React from 'react'
import { styled } from 'styled-components'

function Card(props) {
  return (
    <Styledddiv className='card-container'>
     <div>
      <h1>{props.icon}{props.title}</h1>
      {/* <img src={props.imageurl} alt='img'/> */}
      <p>{props.body}</p>
      </div>
    </Styledddiv>
  
   
  )
}
const Styledddiv=styled.div`
margin:10rem;
display: flex;
float:right;
background: rgba(0,0,0,0.5);
width:40%;
color:white;
@media(max-width:997px){
  margin:0;
  margin-top:5rem;
  
  flex-direction: column;
  width:70%;
  height: 100%;
  font-size: 1rem;

  div{
    padding-left:5rem;
  }
 

}
div{
 
  padding:1rem;
}
ul{
  padding-left:3em
}

h1{
  display:flex;
    justify-content:center;

}
p{
  
    font-weight: bold;
}


`
export default Card
