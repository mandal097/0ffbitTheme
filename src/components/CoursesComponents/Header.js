import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import {
    ClockCircleOutlined,
    PhoneOutlined,
    EnvironmentOutlined,
    FacebookFilled,
    TwitterOutlined,
    YoutubeFilled,
    InstagramOutlined
} from '@ant-design/icons'
const Header = () => {
    const [bg, setBg] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                setBg(true)
            } else {
                setBg(false)
            }
            return () => {
                window.removeEventListener("scroll")
            }
        })

    }, [])
    return (
        <HeaderContainer>
            <HeaderContainerTop>
                <HeaderLeftImage>
                    <NavLink to="/">
                        <img src="Images/1HLogoWhiteLinesNoBG.png" alt="" />
                    </NavLink>
                </HeaderLeftImage>
                <HeaderRight>
                    <InfoDIv>
                        <Icon><ClockCircleOutlined /></Icon>
                        <InfoDIvRight>
                            <InfoDIvRightTop>HOURS</InfoDIvRightTop>
                            <InfoDIvRightBottom> Mon - Sat 8.00 - 18.0</InfoDIvRightBottom>
                        </InfoDIvRight>
                    </InfoDIv>
                    <InfoDIv>
                        <Icon><PhoneOutlined /></Icon>
                        <InfoDIvRight>
                            <InfoDIvRightTop>CALL</InfoDIvRightTop>
                            <InfoDIvRightBottom>+800 555 678</InfoDIvRightBottom>
                        </InfoDIvRight>
                    </InfoDIv>
                    <InfoDIv>
                        <Icon><EnvironmentOutlined /></Icon>
                        <InfoDIvRight>
                            <InfoDIvRightTop>ADDRESS</InfoDIvRightTop>
                            <InfoDIvRightBottom>Greenpoint, Brooklyn</InfoDIvRightBottom>
                        </InfoDIvRight>
                    </InfoDIv>
                </HeaderRight>
            </HeaderContainerTop>
            <HeaderContainerBottom b={bg}>
                <HeaderContainerBottomLeft>
                    {/* <HeaderContainerBottomRightNavs>HOME</HeaderContainerBottomRightNavs>
                    <HeaderContainerBottomRightNavs>ABOUT</HeaderContainerBottomRightNavs>
                    <HeaderContainerBottomRightNavs>PROGRAMS</HeaderContainerBottomRightNavs>
                    <HeaderContainerBottomRightNavs>BLOGS</HeaderContainerBottomRightNavs>
                    <HeaderContainerBottomRightNavs>SHOP</HeaderContainerBottomRightNavs>
                    <HeaderContainerBottomRightNavs>ELEMENTS</HeaderContainerBottomRightNavs> */}
                </HeaderContainerBottomLeft>
                <HeaderContainerBottomRight>
                    <FacebookFilled />
                    <TwitterOutlined />
                    <YoutubeFilled />
                    <InstagramOutlined />
                </HeaderContainerBottomRight>
            </HeaderContainerBottom>
        </HeaderContainer>
    )
}

const HeaderContainer = styled.div`
width: 100%;
padding: 1rem 0;
height: 8rem;
`
const HeaderContainerTop = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: space-between;
border-bottom: 0.5px solid grey;
margin-top: 1rem;
height: 100%;
`
const HeaderLeftImage = styled.div`
width: 50%;
height: 100%;
img{
    margin-left: 2rem;
    height: 100%;
    object-fit: cover;
    cursor: pointer;
}

`
const HeaderRight = styled.div`
width: 50%;
display: flex;
align-items: center;
justify-content: space-evenly;

`
const InfoDIv = styled.div`
font-size: 3rem;
display: flex;
align-items: center;

`
const Icon = styled.div`
color:  #fe0049;

`
const InfoDIvRight = styled.div`
display: flex;
flex-direction:column;
align-items: flex-start;
margin-left: 1rem;

`
const InfoDIvRightTop = styled.span`
font-size: 1.1rem;
font-weight: bold;
color:  #fe0049;

`
const InfoDIvRightBottom = styled.span`
font-size: 1.2rem;
font-weight:400;

`
const HeaderContainerBottom = styled.div`
width: 100%;
font-size: 1.2rem;
display: flex;
justify-content: space-between;
padding: 1rem 0;
top: 0px;
right: 0;
padding: 1rem 1rem;
transition: all 500ms;
background: ${props => props.b ? "white" : 'none'};
color: ${props => props.b ? "black" : 'none'};
position: ${props => props.b ? "fixed" : ''};
`
const HeaderContainerBottomLeft = styled.div`
width: 50%;
display: flex;
justify-content: space-between;

`
// const HeaderContainerBottomRightNavs = styled.span`
// font-size: 1.2rem;
// font-weight: 600;
// cursor: pointer;

// `
const HeaderContainerBottomRight = styled.div`
width: 10%;
display: flex;
justify-content: space-between;
font-size: 1.7rem;
& >*{
    transition: all 500ms;
    cursor: pointer;
    :hover{
        color: red;
    }
}
`

export default Header
