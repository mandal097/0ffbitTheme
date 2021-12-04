import React from 'react'
import styled from 'styled-components'
import Cards from './Cards'
import { data } from '../dummydatas/cardsData'
const CardsContainer = () => {
    return (
        <Container>
            <H3>Fire up your</H3>
            <H1>NIGHTLIFE WEBSITE WITH OFFBEAT.</H1>
            <CardContainer>
                {
                    data.map((i => (
                        <Cards items  key={i.id} img={i.img} title={i.title}/>
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
font-size: 10rem;
font-family: 'Alex Brush', cursive;
letter-spacing: 1rem;
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
