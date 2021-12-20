// import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { NavLink, useNavigate } from 'react-router-dom'
import {
    ClockCircleOutlined,
    PhoneOutlined,
    EnvironmentOutlined,
    // FacebookFilled,
    // YoutubeFilled,
    // InstagramOutlined
} from '@ant-design/icons'
const Header = ({black,left}) => {
    const navigate = useNavigate()
    // const [bg, setBg] = useState(false);

    const goToCourses =()=>{
        navigate('/course/1')
    }
    const goToRegister =()=>{
        navigate('/register')
    }


    // useEffect(() => {
    //     window.addEventListener("scroll", () => {
    //         if (window.scrollY > 200) {
    //             setBg(true)
    //         } else {
    //             setBg(false)
    //         }
    //         return () => {
    //             window.removeEventListener("scroll")
    //         }
    //     })

    // }, [])

    return (
        <HeaderContainer>
            <HeaderContainerTop 
           style={{backgroundColor:`${black}`}} 
            >
                <HeaderLeftImage >
                    <NavLink to="/">
                        <img 
                         src="/Images/1HLogoWhiteLinesNoBG.png" 
                         alt=""
                         style={{marginLeft:`${left}`}}
                         />
                    </NavLink>
                </HeaderLeftImage>
                <HeaderLeft >
                    <HeaderLeftSpan onClick={goToCourses}>Our Story</HeaderLeftSpan>
                    <HeaderLeftSpan onClick={goToRegister} >Register Here</HeaderLeftSpan>
                </HeaderLeft>
                <HeaderRight>
                    <InfoDIv>
                        <Icon><ClockCircleOutlined /></Icon>
                        <InfoDIvRight>
                            <InfoDIvRightTop>HOURS</InfoDIvRightTop>
                            <InfoDIvRightBottom>Mon - Sun</InfoDIvRightBottom>
                            <InfoDIvRightBottom>11 am - 09 pm</InfoDIvRightBottom>
                        </InfoDIvRight>
                    </InfoDIv>
                    <InfoDIv>
                        <Icon><PhoneOutlined /></Icon>
                        <InfoDIvRight>
                            <InfoDIvRightTop>CALL</InfoDIvRightTop>
                            <InfoDIvRightBottom>9711010750</InfoDIvRightBottom>
                            <InfoDIvRightBottom>9711983158</InfoDIvRightBottom>
                        </InfoDIvRight>
                    </InfoDIv>
                    <InfoDIv>
                        <Icon><EnvironmentOutlined /></Icon>
                        <InfoDIvRight>
                            <InfoDIvRightTop>ADDRESS</InfoDIvRightTop>
                            <InfoDIvRightBottom>DLF Capital Green</InfoDIvRightBottom>
                            <InfoDIvRightBottom>Moti Nagar, New Delhi</InfoDIvRightBottom>
                        </InfoDIvRight>
                    </InfoDIv>
                </HeaderRight>
            </HeaderContainerTop>
        </HeaderContainer>
    )
}

const HeaderContainer = styled.div`
width: 100%;
height: 7.2rem;
font-family: 'Baloo 2', cursive;
`
const HeaderContainerTop = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: space-between;
height: 100%;
padding:1rem;
`
const HeaderLeftImage = styled.div`
width: 20%;
height: 100%;

display: flex;
justify-content: space-between;
img{
    height: 100%;
    object-fit: cover;
    cursor: pointer;
}
@media(max-width:510px){
    width: 30%;
}

`

const HeaderLeft = styled.div`
width: 25%;
height: 100%;
display:flex;
    align-items: center;
justify-content:space-between;
@media(max-width:1345px){
    width: 20%;
}
@media(max-width:1245px){
    width: 30%;
}
@media(max-width:680px){
    width: 40%;
    font-size:1.4rem;
}
`
const HeaderLeftSpan = styled.span`
font-size:2rem;
cursor:pointer;
@media(max-width:680px){
    font-size:1.4rem;
}
`

const HeaderRight = styled.div`
width: 50%;
display: flex;
align-items: center;
justify-content: space-evenly;
@media(max-width:510px){
    width: 70%;
}

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

export default Header
