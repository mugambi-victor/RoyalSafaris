import React from 'react'
import { styled } from 'styled-components'

function Card(props) {
  return (
    <Styledddiv className='card-container'>
     <div>
      <h3>{props.icon}{props.title}</h3>
      {/* <img src={props.imageurl} alt='img'/> */}
      <p>{props.body}</p>
      </div>
    </Styledddiv>
  
   
  )
}
const Styledddiv=styled.div`
margin-top:10rem;
display: flex;
float:right;
background: rgba(0,0,0,0.5);
width:40%;
color:white;
@media(max-width:997px){
  margin:0;
  /* margin-top:8rem; */
  
  flex-direction: column;
  width:100%;
  height: 100%;
  justify-content: center;
  align-items: center;
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

h3{
  display:flex;
   

}
p{
  
    font-weight: bold;
}


`
export default Card
