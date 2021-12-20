import React from 'react'
import styled from 'styled-components'
import CardsContainer from '../components/CardsContainer'
import FullBanner from '../components/FullBanner'
import LandingPage from '../components/LandingPage'
import MainFooter from '../components/MainFooter'
import MarqueeComp from '../components/MarqueeComp'
import Purchase from '../components/Purchase'
import Social from '../components/Social'
const Home = () => {
    return (
        <Container>
            <LandingPage />
            <CardsContainer />
            <FullBanner />
            <MarqueeComp />
            <Purchase />
            <MainFooter />
            <Social/>
        </Container>
    )
}

const Container = styled.div`

`
export default Home
