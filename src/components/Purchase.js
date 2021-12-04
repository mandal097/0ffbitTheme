import React from 'react'
import styled from 'styled-components'
const Purchase = () => {
    return (
        <Container>
            <H2>staye woke-with</H2>
            <H1>offbit  <Span></Span></H1>
            <Button>purchase offbit</Button>
        </Container>
    )
}

const Container = styled.div`
height: 100vh;
width: 100%;
background-color: black;
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-start;
`
const H2 = styled.h2`
color: goldenrod;
font-family: 'Alex Brush', cursive;
font-size: 10rem;
font-weight: 400;
text-align: center;
margin-top: 3rem;
`
const H1 = styled.h1`
margin: 3rem 0;
position: relative;
text-align: center;
color: white;
font-size: 18rem;
text-transform: uppercase;
font-family: Verdana, Geneva, Tahoma, sans-serif;
font-stretch: narrower;
`
const Button = styled.button`
margin-top: 3rem;
padding: 2.3rem 2.8rem;
font-size:1.8rem;
font-weight: 600;
text-transform: uppercase;
color: white;
background-color: red;
border: none;
border-radius: 5px;
cursor: pointer;
`
const Span = styled.span`
position: absolute;
height:2.5rem;
width:2.5rem;
background-color: orangered;
bottom:4rem;
`

export default Purchase
