import React from 'react'
import styled from 'styled-components'
const SecondPage = ({ props }) => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Img src="http://tabula.bold-themes.com/shady/wp-content/uploads/sites/4/2019/03/inner_girl.png" />
                </Left>
                <Right>
                    <RightH> <span> Programs for every</span> level and need</RightH>
                    <RightP>Tabula Music School successfully raises the bar on music education, with a commitment to excellence, and a mission to help both music majors and non-music majors reach their creative potential. School period of music studies which can be 2 years for deep skills.</RightP>
                    <RightPBottom>Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X.</RightPBottom>
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
font-family: Verdana, Geneva, Tahoma, sans-serif;

`


const Wrapper = styled.div`
height: 100%;
width: 1200px;
display: flex;
justify-content: space-between;
padding: 3rem;

`
const Left = styled.div`
width: 46%;
height: 90%;
display: flex;
align-items: center;
justify-content: center;
`
const Img = styled.img`
height: 99%;
width: 99%;
border-radius: 50%;
object-fit: cover;
`


const Right = styled.div`
width: 46%;
height: 90%;
display: flex;
flex-direction: column;
align-items: flex-end;
justify-content: space-around;
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
