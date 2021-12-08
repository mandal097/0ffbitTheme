import React, { useState } from 'react'
import styled from 'styled-components'
import { data } from '../../dummydatas/secondPageData'
const SecondPage = ({ props }) => {
    const [count, setCount] = useState(0)
    setTimeout(() => {
        count < 3 ? setCount(count + 1) : setCount(0)
    }, 4000);

    const items = data[count]

    const handleClick1 =() =>{
        setCount(0)
    }
    const handleClick2 =() =>{
        setCount(1)
    }
    const handleClick3 =() =>{
        setCount(2)
    }
    const handleClick4 =() =>{
        setCount(3)
    }
    return (
        <Container>
            <Wrapper>
                <Left>
                    <LeftH>{items.content}</LeftH>
                    <LeftImg src={items.img} />
                    <LeftName>{items.name}</LeftName>
                    <LeftStatus>{items.status}</LeftStatus>
                    <AcitveDivs>
                        <Acitve onClick={handleClick1}  ></Acitve>
                        <Acitve onClick={handleClick2}  ></Acitve>
                        <Acitve onClick={handleClick3}  ></Acitve>
                        <Acitve onClick={handleClick4}  ></Acitve>
                    </AcitveDivs>
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
flex-direction: column;
align-items: flex-end;
justify-content: center;
`
const LeftH = styled.h2`
font-size: 3.5rem;
text-align: right;
line-height: 1.5;
font-weight: 400;
color: grey;

`
const LeftImg = styled.img`
height: 15rem;
width:15rem;
object-fit: cover;
border-radius: 50%;
margin: 3.4rem 0;
`
const LeftName = styled.span`
font-size: 1.5rem;
font-weight: bold;
color: rgba(0,0,0,0.8);
text-transform: uppercase;
`
const LeftStatus = styled.span`
font-size: 1.3rem;
font-weight: bold;
color: grey;
`
const AcitveDivs = styled.div`
margin-top: 1rem;
height: 3rem;
width: 16%;
display: flex;
justify-content: space-between;
`
const Acitve = styled.div`
width: 1.2rem;
height: 1.2rem;
border-radius: 50%;
background-color: black;
cursor: pointer;
transition: all 300ms;
&:hover{
width: 1.4rem;
height: 1.4rem;
background-color:  #fe0049;
}
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
