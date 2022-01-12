import React from 'react'
import styled from 'styled-components'
import CardsContainer from '../components/CardsContainer'
import DashBoard from '../components/DashBoard'
import FullBanner from '../components/FullBanner'
import LandingPage from '../components/LandingPage'
import MainFooter from '../components/MainFooter'
import MarqueeComp from '../components/MarqueeComp'
import Social from '../components/Social'
const Home = () => {
    return (
        <Container>
            <LandingPage />
            <DashBoard />
            <CardsContainer />
            <FullBanner />
            <MarqueeComp />
            <MainFooter />
            <Social />
        </Container>
    )
}

const Container = styled.div`
`
export default Home
