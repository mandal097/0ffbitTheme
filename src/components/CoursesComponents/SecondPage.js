import React from 'react'
import styled from 'styled-components'
const SecondPage = ({ u }) => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Img src={u.courseSecondPageImg} />
                    <Hash>#</Hash>
                    <HashSecond>#</HashSecond>
                </Left>
                <Right>
                    <RightH> <span>{u.secondPageContentTopRed} <br /></span>{u.secondPageContentTopBlack}</RightH>
                    <RightP>{u.secondPageContentMiddle}</RightP>
                    <RightPBottom>{u.secondPageContentBottom}</RightPBottom>
                </Right>
            </Wrapper>
        </Container>
    )
}

const Container = styled.div`
height: 100vh;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
/* font-family: Verdana, Geneva, Tahoma, sans-serif; */
@media(max-width:922px){
    height: auto;
}
`


const Wrapper = styled.div`
height: 100%;
width: 1200px;
display: flex;
justify-content: space-between;
padding: 3rem;
@media(max-width:922px){
    flex-direction: column;
    width: 100%;
}

`
const Left = styled.div`
width: 46%;
height: 90%;
display: flex;
align-items: center;
justify-content: center;
position: relative;
@media(max-width:922px){
    margin: 0 auto;
    width: 50%;
    height: 100%;
}
`
const Hash =styled.span`
position: absolute;
color: lightgrey;
top: 3rem;
left:-4rem;
font-size: 20rem;
z-index: -2;
transform: skewX(30deg);
font-weight: 100;
@media(max-width:922px){
   top: 3rem;
   left: -13rem;
}
`
const HashSecond =styled.span`
position: absolute;
color: lightgrey;
top: 12rem;
left:-12rem;
font-size: 20rem;
z-index: -2;
font-weight: 100;
transform: skewX(30deg);
@media(max-width:922px){
   top: 9rem;
   left: -17rem;
}
`
const Img = styled.img`
height: 99%;
width: 99%;
border-radius: 50%;
object-fit: cover;
@media(max-width:922px){
    height: 40rem;
    width: 40rem;
}
`


const Right = styled.div`
width: 46%;
height: 90%;
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: space-around;
@media(max-width:922px){
    width: 100%;
    height: 100%;
}
`
const RightH = styled.h1`
font-size: 4rem;
font-weight: 400;
line-height: 1.5;
span{
    font-weight: bold;
    color: red;
}
`
const RightP = styled.p`
font-size: 2rem;
line-height: 1.5;
font-weight:400;
color: grey;
`
const RightPBottom = styled.p`
color: black;
font-size: 1.2rem;
line-height: 1.9;
`


export default SecondPage
