import React, { useState } from 'react'
import styled from 'styled-components'
import { data } from '../dummydatas/secondPageData'
import {
    PictureOutlined,
    UserAddOutlined,
    CustomerServiceOutlined,
    DingtalkOutlined
} from '@ant-design/icons'
const FullBanner = () => {

    const [count, setCount] = useState(0)
    setTimeout(() => {
        count < 3 ? setCount(count + 1) : setCount(0)
    }, 4000);

    const items = data[count]

    const handleClick1 = () => {
        setCount(0)
    }
    const handleClick2 = () => {
        setCount(1)
    }
    const handleClick3 = () => {
        setCount(2)
    }
    const handleClick4 = () => {
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
                    <RightH> <span>The Missing Note</span> <br />Music Academy</RightH>
                    <RightP>Our sole purpose is to make you love music as much as you love ice-cream!</RightP>
                    <RightPBottom>
                        <RightPBottomWrapper>
                            <RightPBottomIcons>
                                <PictureOutlined />
                            </RightPBottomIcons>
                            <RightPBottomContent>
                                <RightPBottomContentSpan>2021</RightPBottomContentSpan>
                                <RightPBottomContentSpanB>YEAR FOUNDED</RightPBottomContentSpanB>
                            </RightPBottomContent>
                        </RightPBottomWrapper>
                        <RightPBottomWrapper>
                            <RightPBottomIcons>
                                <UserAddOutlined />
                            </RightPBottomIcons>
                            <RightPBottomContent>
                                <RightPBottomContentSpan>50</RightPBottomContentSpan>
                                <RightPBottomContentSpanB>STUDENTS</RightPBottomContentSpanB>
                            </RightPBottomContent>
                        </RightPBottomWrapper>
                        <RightPBottomWrapper>
                            <RightPBottomIcons>
                                <CustomerServiceOutlined />
                            </RightPBottomIcons>
                            <RightPBottomContent>
                                <RightPBottomContentSpan>1524</RightPBottomContentSpan>
                                <RightPBottomContentSpanB>CLASSES HELD</RightPBottomContentSpanB>
                            </RightPBottomContent>
                        </RightPBottomWrapper>
                        <RightPBottomWrapper>
                            <RightPBottomIcons>
                                <DingtalkOutlined />
                            </RightPBottomIcons>
                            <RightPBottomContent>
                                <RightPBottomContentSpan>1</RightPBottomContentSpan>
                                <RightPBottomContentSpanB>CONCERTS</RightPBottomContentSpanB>
                            </RightPBottomContent>
                        </RightPBottomWrapper>
                    </RightPBottom>
                </Right>
            </Wrapper>
        </Container>
    )
}

const Container = styled.div`
height: auto;
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background:linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.9)), url('Images/background_Drums color.jpeg');
background-size: cover;
background-repeat: no-repeat;
margin-bottom: 8rem;
background-attachment: fixed;
font-family: 'Baloo 2', cursive;
`
const Wrapper = styled.div`
height: 100%;
width: 1200px;
display: flex;
justify-content: space-between;
padding: 3rem;
@media(max-width:1200px){
    width: 100%;
}
@media(max-width:850px){
    flex-direction: column;
}
`

const Left = styled.div`
width: 46%;
height: 90%;
display: flex;
flex-direction: column;
align-items: flex-end;
justify-content: center;
@media(max-width:850px){
   width: 90%;
   margin:0 auto;
}
`

const LeftH = styled.h2`
font-size: 3.5rem;
text-align: right;
line-height: 1.5;
font-weight: 400;
color: white;

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
color:tomato;
text-transform: uppercase;
`
const LeftStatus = styled.span`
font-size: 1.3rem;
font-weight: bold;
color: white;
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
background-color:  #fe0049;
cursor: pointer;
transition: all 300ms;
&:hover{
width: 1.4rem;
height: 1.4rem;
}
`

const Right = styled.div`
width: 46%;
height: auto;
display: flex;
flex-direction: column;
align-items: flex-start;
/* flex-wrap: wrap; */
justify-content: space-between;
@media(max-width:850px){
   width: 90%;
   margin:0 auto;
}
`
const RightH = styled.h1`
font-size: 6rem;
font-weight: 600;
line-height: 1.5;
span{
    font-weight: bold;
    color: red;
}
`
const RightP = styled.p`
font-size: 2rem;
line-height: 1.5;
font-weight:100;
color: white;
/* @media(max-width:1100px){
    font-size: 1.5rem;
    width: 80%;
}  */
`
const RightPBottom = styled.div`
width: 100%;
height: auto;
display: flex;
flex-wrap: wrap;
align-items: center;
`
const RightPBottomWrapper = styled.div`
flex: 1 0 200px;
height: auto;
color: white;
font-size: 2rem;
display: flex;
align-items: center;
justify-content: space-evenly;
margin: 1rem;
@media(max-width:1024px){
    font-size: 0.7rem;
}
`
const RightPBottomIcons = styled.div`
font-size: 4rem;
`
const RightPBottomContent = styled.div`
display: flex;
align-items: flex-end;
justify-content: space-around;
flex-direction: column;
`
const RightPBottomContentSpan = styled.span`
font-size: 4rem;
color:  #fe0049;
`
const RightPBottomContentSpanB = styled.span`
font-size: 1.3rem;
`
export default FullBanner
