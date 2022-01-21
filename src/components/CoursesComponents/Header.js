// import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import {  useNavigate } from 'react-router-dom'
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
                {/* <HeaderLeftImage >
                    <NavLink to="/">
                        <img
                         src="/Images/1HLogoWhiteLinesNoBG.png"
                         alt=""
                         style={{marginLeft:`${left}`}}
                         />
                    </NavLink>
                </HeaderLeftImage> */}
                <HeaderLeft >
                    <HeaderLeftSpan onClick={() => navigate('/')}>Home</HeaderLeftSpan>
                    <HeaderLeftSpan onClick={() => navigate('/course')}>Our Story</HeaderLeftSpan>
                    <HeaderLeftSpan >Join Our Team</HeaderLeftSpan>
                    <HeaderLeftSpan onClick={() => navigate('/register')}>Register Here</HeaderLeftSpan>
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
height: 7.8rem;
font-family: 'Spartan';
color:white;
`
const HeaderContainerTop = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: space-between;
height: 100%;
padding: 0 1rem;
`
// const HeaderLeftImage = styled.div`
// width: 10%;
// height: 100%;

// display: flex;
// justify-content: space-between;
// img{
//     height: 100%;
//     object-fit: cover;
//     cursor: pointer;
// }
// @media(max-width:510px){
//     width: 30%;
// }

// `

const HeaderLeft = styled.div`
width: 50%;
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
font-size:1.8rem;
font-weight:400;
cursor:pointer;
padding-bottom:0.5rem;
transition:all 300ms linear;
&:hover{
border-bottom:2px solid white;
}
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
font-size: 3.5rem;
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
font-size: 1.4rem;
font-weight: bold;
color:  #fe0049;

`
const InfoDIvRightBottom = styled.span`
font-size: 1.3rem;
font-weight:400;

`

export default Header
