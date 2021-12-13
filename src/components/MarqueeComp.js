import React from 'react'
import styled from 'styled-components'
import { images } from '../dummydatas/marqueeImagedata'

const MarqueeComp = () => {
    return (
        <Container>
            <H2>Start the party</H2>
            <H1>WITH READY-TO-GO INNER PAGES</H1>
            <Marquee behavior="alternate" >
                <MainMarqueeContainer>
                    {
                        images.map((image) => (
                            <>
                                <ImgDiv>
                                    <Img src={image.img} />
                                    <Img1 src={image.img} />
                                    <Img2 src={image.img} />
                                </ImgDiv>
                                <ImgDiv>
                                    <Img2 src={image.img} />
                                    <Img1 src={image.img} />
                                    <Img3 src={image.img} />
                                </ImgDiv>
                                
                            </>
                        ))
                    }
                </MainMarqueeContainer>
            </Marquee>
        </Container>
    )
}

const Container = styled.div`
`
const Marquee = styled.marquee`
display: flex;
height: 95vh;
margin-bottom: 2rem;
@media(max-width:600px){
    height: 60vh;
}
`

const H2 = styled.h2`
font-family: 'Alex Brush', cursive;
font-size: 8rem;
text-align: center;
letter-spacing: 1.5rem;
color: goldenrod;
font-weight: 400;
`
const H1 = styled.h1`
margin-bottom: 8rem;
font-size: 6rem;
text-align: center;
`
const MainMarqueeContainer = styled.div`
height: 100%;
display: flex;
`
const ImgDiv = styled.div`
justify-content: space-between;
display: flex;
flex-direction: column;
height: 100%;
`

const Img = styled.img`
object-fit:cover;
width: 20vw;
height: 45%;
margin: 0.8rem;
@media(max-width:600px){
    width: 20rem;
}
`
const Img1 = styled.img`
object-fit:cover;
width: 20vw;
margin: 0.8rem;
height: 30vh;
@media(max-width:600px){
    width: 20rem;
}
`
const Img2 = styled.img`
object-fit:cover;
width: 20vw;
margin: 0.8rem;
height: 20vh;
@media(max-width:600px){
    width: 20rem;
}
`
const Img3 = styled.img`
object-fit:cover;
width: 20vw;
margin: 0.8rem;
height: 50vh;
@media(max-width:600px){
    width: 20rem;
}
`



export default MarqueeComp
