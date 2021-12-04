import React from 'react'
import styled from 'styled-components'
import CardsContainer from '../components/CardsContainer'
import FullBanner from '../components/FullBanner'
import LandingPage from '../components/LandingPage'
import MarqueeComp from '../components/MarqueeComp'
import Purchase from '../components/Purchase'
const Home = () => {
    return (
        <Container>
            <LandingPage />
            <CardsContainer />
            <FullBanner />
            <MarqueeComp />
            <Purchase />
        </Container>
    )
}

const Container = styled.div`

`
export default Home
