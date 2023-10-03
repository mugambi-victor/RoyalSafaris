import React from 'react'
import styled from 'styled-components'

function QuickLinks() {
  return (
    <Styleddiv>
        <div style={{width:'100%'}}>
            <h4>Quick Links</h4>
            <ul>
                <li>Facebook Link</li>
                <li>Youtube Link</li>
                <li>Instagram Link</li>
            </ul>
        </div>
       
        <div style={{width:'100%'}}>
            <h5>In Search of a Travel agent?</h5>
            <p >Reach out to us today</p>
        </div>
    </Styleddiv>
  )
}

const Styleddiv=styled.div`
display:flex;
margin-top: 2rem;
ul{
    line-height:2;
}
`

export default QuickLinks