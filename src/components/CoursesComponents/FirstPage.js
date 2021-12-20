import React from 'react'
import styled from 'styled-components'
import Header from './Header'

const FirstPage = ({ u }) => {
    const image = u.courseFirstPageImg
    return (
        <>
            <Container >
                <ImgDiv>
                    <img src={'/' + image} alt="" />
                </ImgDiv>
                    <Header black='black' left="5rem" />
                <Wrapper>
                    <Content>
                        <ContentH>{u.title}</ContentH>
                        <ContentP>{u.content2}</ContentP>
                    </Content>
                </Wrapper>
            </Container>
        </>
    )
}

const Container = styled.div`
height: 85vh;
width: 100%;
background: linear-gradient(rgba(0,0,0,0.1),rgba(0,0,0,0.1));
background-attachment:fixed;
background-repeat: no-repeat;
background-size: cover;
background-position: center;
color: white;
font-family: Verdana, Geneva, Tahoma, sans-serif;
position:relative;
/* padding-top:1rem; */
@media (max-width:1210px){
    height: 90vh;
}
`

const ImgDiv = styled.div`
position:absolute;
top:0;
height:85vh;
width:100%;
z-index:-1;
@media (max-width:1210px){
    height: 90vh;
}
img{
    height:100%;
    width:100%;
    z-index:-91;
    object-fit:cover;
}
`


const Wrapper = styled.div`
display: flex;
height: 100%;
flex-direction: column;
justify-content: center;
width: 1200px;
font-size: 3rem;
margin: 0 auto;
@media (max-width:1210px){
    width: 100%;
}
`


const Content = styled.div`
width: 50%;
height: 50%;
padding:0 4rem;
@media(max-width:500px){
    width: 100%;
}
`
const ContentH = styled.h2`
font-size: 6rem;
font-weight: 400;
margin-bottom: 1rem;
font-family: 'Baloo 2', cursive;
`
const ContentP = styled.p`
font-size: 1.8rem;
line-height: 1.5;
font-weight: 400;
font-family: 'Baloo 2', cursive;
`
export default FirstPage
