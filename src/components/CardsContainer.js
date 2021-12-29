import React from 'react'
import styled from 'styled-components'
import Cards from './Cards'
import { data } from '../dummydatas/cardsData'
const CardsContainer = () => {
    return (
        <Container>
        {/* <H1>Grab a pick or press a key</H1>
        <H3>Music will always set you free!</H3>
        <H3>If your life's song is sounding a bit funny!</H3>
        <H3>Then we are 'The Missing Note' in your Symphony. </H3> */}
            <CardContainer>
                {
                    data.map((i => (
                        <Cards items  key={i.id} i={i}/>
                    )))
                }
            </CardContainer>
        </Container>
    )
}

const Container = styled.div`
margin-bottom: 5rem;
`
const H3 = styled.h3`
text-align: center;
margin-top: 3rem;
margin-left:8rem;
margin-right:8rem;
font-size: 3rem;
font-family: 'Montserrat', sans-serif;
letter-spacing: .5rem;
color: orangered;
font-weight: 400;
`
const H1 = styled.h1`
text-align: center;
font-size: 6rem;
width: 90%;
margin: 1rem auto;
`
const CardContainer = styled.div`
height: auto;
width: 85%;
margin: 0 auto;
margin-top: 5rem;
display: flex;
justify-content: space-between;
flex-wrap: wrap;
`


export default CardsContainer
