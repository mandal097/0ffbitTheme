import React, { useEffect } from 'react'
import styled from 'styled-components'
import 'aos/dist/aos.css'
import Aos from 'aos'

const LandingPage = () => {
    useEffect(() => {
        Aos.init({ duration: 700 })
    })
    return (
        <>
            <Container >
                {/* <div> */}
                <Img data-aos="fade-up" data-aos-offset="100" data-aos-easing="linear" src='https://offbeat.qodeinteractive.com/wp-content/uploads/2018/04/landing-slider-img-3.png' />
                <Iframe data-aos="fade-up" data-aos-offset="100" data-aos-easing="linear" src="https://www.youtube.com/embed/k4ixAfJ1LuI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></Iframe>
                {/* </div> */}
            </Container>
        </>
    )
}

const Container = styled.div`
height: 100vh;
background:url('https://media.istockphoto.com/photos/web-banner-hobby-and-lifestyle-activity-in-holiday-from-beauty-asian-picture-id1167491954?b=1&k=20&m=1167491954&s=170667a&w=0&h=Si5YT6bZ7aYnR3hCAJ9MRyVWG2IkkA36nfBE_-lcSAs=');
background-repeat: no-repeat;
object-fit:cover;
width: 100%;
background-size: cover;
display: flex;
align-items: center;
justify-content: center;
`
const Img = styled.img`
height: 45vh ;
width: 38vw;
position: relative;
`
const Iframe = styled.iframe`
position: absolute;
height: 36vh;
width: 28vw;
border: none;
`

export default LandingPage
