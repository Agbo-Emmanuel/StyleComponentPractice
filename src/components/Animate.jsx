import React from 'react'
import styled, { keyframes } from 'styled-components'
const Breathe = () => {
 return (
  <Container>
   <Circle />
  </Container>
 )
}
export default Breathe

const breatheAnimation = keyframes`
    /* from { background-color: yellow; margin-bottom: 1px}
    to { background-color: blue; margin-bottom: 50px}  */
 0% { margin-bottom:  50px }
 20% { margin-top: 100px}
 100% { margin-bottom: 50px }
 /* 0% { height: 100px; width: 100px; }
 30% { height: 300px; width: 300px; opacity: 1 }
 40% { height: 350px; width: 405px; opacity: 0.3;background-color: red }
 100% { height: 100px; width: 100px; opacity: 0.6; } */
`
const Circle = styled.div`
 height: 300px;
 width: 300px;
 background-color: yellow;
 /* border-style: solid;
 border-width: 5px;
 border-radius: 50%; */
 /* border-color: blue; */
 animation-name: ${breatheAnimation};
 animation-duration: 5s;
 animation-iteration-count: infinite;
`
const Container = styled.div`
 display: flex;
 align-items: center;
 justify-content: center;
 flex-direction: column;
 background-color: red;
 height: 100vh;
`