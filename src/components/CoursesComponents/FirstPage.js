import React from 'react'
import styled from 'styled-components'
import Header from './Header'

const FirstPage = () => {
    return (
        <Container>
            <Wrapper>
                <Header/>
                <Content>
                    <ContentH>Violin Lessons</ContentH>
                    <ContentP>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti aspernatur tenetur porro neque modi obcaecati impedit cumque facilis doloremque excepturi.</ContentP>
                </Content>
            </Wrapper>
        </Container>
    )
}

const Container = styled.div`
height: 85vh;
width: 100%;
background: linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.5)), url('https://images.pexels.com/photos/1482476/pexels-photo-1482476.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500');
background-attachment:fixed;
background-repeat: no-repeat;
background-size: cover;
background-position: center;
color: white;
font-family: Verdana, Geneva, Tahoma, sans-serif;
@media (max-width:1210px){
    height: auto;
}
`

const Wrapper = styled.div`
display: flex;
height: 100%;
flex-direction: column;
justify-content: space-between;
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
`
const ContentH = styled.h2`
font-size: 6rem;
font-weight: 400;
margin-bottom: 1rem;
`
const ContentP= styled.p`
font-size: 1.8rem;
line-height: 1.5;
font-weight: 400;
`
export default FirstPage
