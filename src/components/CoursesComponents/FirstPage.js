import React from 'react'
import styled from 'styled-components'

const FirstPage = ({ u }) => {
    const image = u.courseFirstPageImg
    return (
        <>
            <Container >
                <ImgDiv>
                    <img src={'/' + image} alt="" />
                </ImgDiv>
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
/* margin-top:3rem; */
/* font-family: Verdana, Geneva, Tahoma, sans-serif; */
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
font-weight: 600;
margin-bottom: 1rem;
font-family: 'Spartan';
`
const ContentP = styled.p`
font-size: 2rem;
line-height: 1.5;
font-weight: 400;
text-align:justify;
font-family: 'Spartan';
`
export default FirstPage
