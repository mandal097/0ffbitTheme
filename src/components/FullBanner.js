import React from 'react'
import styled from 'styled-components'
const FullBanner = () => {
    return (
        <Container>
            <H2>With Offbeat you can</H2>
            <H1>CREATE UNIQUE ATMOSPHERE. SIMPLY A MUST FOR EVERY BAR, PUB & CLUB.</H1>
        </Container>
    )
}

const Container = styled.div`
height: 80vh;
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background:linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.4)), url('https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500');
background-size: cover;
background-repeat: no-repeat;
margin-bottom: 8rem;
background-attachment: fixed;
`
const H2 = styled.h2`
font-family: 'Alex Brush', cursive;
font-size: 4rem;
letter-spacing:1rem;
text-align: center;
`
const H1 = styled.h1`
text-align: center;
font-size: 6rem;
color: white;
`

export default FullBanner
