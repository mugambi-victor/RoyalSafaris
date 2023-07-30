import React from 'react'
import { styled } from 'styled-components'

function ServicesCard(props) {
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
border-radius: 10rem;
width:100%;
@media(max-width:997px){
  width:100%;
  margin-top:2rem;
}
div{
  transition: all .6s;
  padding:1rem;
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
export default ServicesCard
