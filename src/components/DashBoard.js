import React, { useState } from 'react'
import styled from 'styled-components'
import { data } from '../dummydatas/dashboarddata'
import {
    LeftOutlined,
    RightOutlined
} from '@ant-design/icons'

const DashBoard = () => {

    const [left ,setLeft] = useState(0)
    const [second ,setSecond] = useState(0)
    const [third ,setThird] = useState(0)

 
    return (
        <Container>
            <H2>Our dashboard</H2>
            <CardsContainer>
                {/* {
                    data.map((i => ( */}

                        <Cards>
                            <CardContainer style={{transform:`translateX(-${left}px)`}} >
                                <ImgDiv>
                                    <img src={data[0].img} alt="" />
                                    {/* <img src={i.img} alt="" /> */}
                                </ImgDiv>
                                <TextDiv>
                                    <p>{data[0].content}</p>
                                    {/* <p>{i.content}</p> */}
                                </TextDiv>
                            </CardContainer>
                            <ControlsLeft onClick={()=>setLeft(0)}><LeftOutlined /></ControlsLeft>
                            <ControlsRight onClick={()=>setLeft(350)}><RightOutlined /></ControlsRight>
                        </Cards>
                        <Cards>
                            <CardContainer style={{transform:`translateX(-${second}px)`}} >
                                <ImgDiv>
                                    <img src={data[1].img} alt="" />
                                    {/* <img src={i.img} alt="" /> */}
                                </ImgDiv>
                                <TextDiv>
                                    <p>{data[1].content}</p>
                                    {/* <p>{i.content}</p> */}
                                </TextDiv>
                            </CardContainer>
                            <ControlsLeft onClick={()=>setSecond(0)}><LeftOutlined /></ControlsLeft>
                            <ControlsRight onClick={()=>setSecond(350)}><RightOutlined /></ControlsRight>
                        </Cards>
                        <Cards>
                            <CardContainer style={{transform:`translateX(-${third}px)`}} >
                                <ImgDiv>
                                    <img src={data[2].img} alt="" />
                                    {/* <img src={i.img} alt="" /> */}
                                </ImgDiv>
                                <TextDiv>
                                    <p>{data[2].content}</p>
                                    {/* <p>{i.content}</p> */}
                                </TextDiv>
                            </CardContainer>
                            <ControlsLeft onClick={()=>setThird(0)}><LeftOutlined /></ControlsLeft>
                            <ControlsRight onClick={()=>setThird(350)}><RightOutlined /></ControlsRight>
                        </Cards>
                    {/* )))
                } */}
            </CardsContainer>
        </Container>
    )
}

const Container = styled.div`
height: auto;
width: 100%;
background-color: black;
display: flex;
flex-direction: column;
align-items: center;

`
const H2 = styled.h2`
color: goldenrod;
font-family: 'Alex Brush', cursive;
font-size: 10rem;
font-weight: 400;
text-align: center;
`
const CardsContainer = styled.div`
width:90vw;
height:auto;
display:flex;
align-items:center;
justify-content:space-evenly;
flex-wrap:wrap;
margin-top:3rem;
`
const Cards = styled.div`
flex:1 1 300px;
max-width:300px;
min-width:350px;
height:65vh;
border-left:1px solid red;
border-right:1px solid yellow;
border-top:1px solid red;
border-bottom:1px solid yellow;
margin-bottom:5rem;
overflow:hidden;
color:white;
position:relative;
`
const ControlsLeft = styled.div`
position:absolute;
top:45%;
left:0.3rem;
font-size:2rem;
height:3.5rem;
width:3.5rem;
background-color:rgba(0,0,0,0.7);
display:flex;
align-items:center;
justify-content:center;
border-radius:50%;
cursor:pointer;
`
const ControlsRight = styled.div`
position:absolute;
top:45%;
right:0.3rem;
font-size:2rem;
height:3.5rem;
width:3.5rem;
background-color:rgba(0,0,0,0.7);
display:flex;
align-items:center;
justify-content:center;
cursor:pointer;
border-radius:50%;
`
const CardContainer = styled.div`
height:65vh;
width:700px;
display:flex;
align-items:center;
transition:all 300ms linear;
`
const ImgDiv = styled.div`
width:350px;
height:65vh;
img{
    width:100%;
    height:100%;
    object-fit:cover;
}
`
const TextDiv = styled.div`
width:350px;
height:65vh;
color:white;
font-size:5rem;
display:flex:
align-items:center;
justify-content:center;
padding-top:6rem;
padding:3rem;
p{
    text-align:center;
}
`

export default DashBoard
