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
margin:10em;
display: flex;
float:right;
background: rgba(0,0,0,0.5);
width:40%;
color:white;
@media(max-width:997px){
  width:100%;
  margin-top:2rem;
}
div{
 
  padding:1rem;
}
ul{
  padding-left:3em
}
div:hover{
  transform:scale(1.1);

  
}
h1{
  display:flex;
    justify-content:center;

}
p{
  
    padding-top: 1rem;
}


`
export default Card
