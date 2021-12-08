import React from 'react'
import styled from 'styled-components'
import {
    PhoneOutlined,
    EnvironmentOutlined,
    ClockCircleOutlined,
    TwitterOutlined,
    InstagramOutlined,
    FacebookFilled,
    YoutubeFilled
} from '@ant-design/icons'

const Footer = () => {
    return (
        <Container>
            <Top>
                <TopWrapper>
                    <TopH>Can't find what you're looking for?</TopH>
                    <TopBtnDiv>
                        <BtnTxt className="txt">Get in touch</BtnTxt>
                        <TopBtnInnerDiv className="innnerdiv"></TopBtnInnerDiv>
                    </TopBtnDiv>
                </TopWrapper>
            </Top>
            <Bottom>
                <BottomWrapper>
                    <FooterDivs>
                        <FooterH>Contact Us</FooterH>
                        <FooterWrap>
                            <FooterWrapIcon><EnvironmentOutlined className="icon" /></FooterWrapIcon>
                            <FooterWrapP>Franklin St, Greenpoint Ave</FooterWrapP>
                        </FooterWrap>
                        <FooterWrap>
                            <FooterWrapIcon><PhoneOutlined className="icon" /></FooterWrapIcon>
                            <FooterWrapP>Franklin St, Greenpoint Ave</FooterWrapP>
                        </FooterWrap>
                        <FooterWrap>
                            <FooterWrapIcon><ClockCircleOutlined className="icon" /></FooterWrapIcon>
                            <FooterWrapP>Franklin St, Greenpoint Ave</FooterWrapP>
                        </FooterWrap>
                        <FooterWrap>
                            <FooterWrapIcon className="socialLinks">
                                <TwitterOutlined className="icons" />
                                <InstagramOutlined className="icons" />
                                <FacebookFilled className="icons" />
                                <YoutubeFilled className="icons" />
                            </FooterWrapIcon>
                        </FooterWrap>
                    </FooterDivs>
                    <FooterDivs>
                        <FooterH>Quick Links</FooterH>
                        <FooterWrap>
                            <FooterWrapP>Home</FooterWrapP>
                        </FooterWrap>
                        <FooterWrap>
                            <FooterWrapP>Blog</FooterWrapP>
                        </FooterWrap>
                        <FooterWrap>
                            <FooterWrapP>Contact</FooterWrapP>
                        </FooterWrap>
                        <FooterWrap>
                            <FooterWrapP>Shop</FooterWrapP>
                        </FooterWrap>
                    </FooterDivs>
                    <FooterDivs>
                        <FooterH>About</FooterH>
                        <FooterWrap>
                            <FooterWrapP>About Us</FooterWrapP>
                        </FooterWrap>
                        <FooterWrap>
                            <FooterWrapP>History</FooterWrapP>
                        </FooterWrap>
                        <FooterWrap>
                            <FooterWrapP>Programs</FooterWrapP>
                        </FooterWrap>
                        <FooterWrap>
                            <FooterWrapP>Schedule</FooterWrapP>
                        </FooterWrap>
                    </FooterDivs>
                    <FooterDivs>
                        <FooterH>Newsletter</FooterH>
                        <FooterWrap>
                            <EmailInput type="email" placeholder="your email" />
                        </FooterWrap>
                        <FooterWrap>
                            <Button>subscribe</Button>
                        </FooterWrap>

                    </FooterDivs>
                </BottomWrapper>
            </Bottom>
        </Container>
    )
}

const Container = styled.div`
width: 100%;
font-family: Verdana, Geneva, Tahoma, sans-serif;
color: white;
`
const Top = styled.div`
width: 100%;
height: 30vh;
background-color: #fe0049;
`
const TopWrapper = styled.div`
width: 1200px;
height: 100%;
margin: 0 auto;
display: flex;
align-items: center;
justify-content: space-between;
@media (max-width:1210px){
    width: 100%;
} 
`
const TopH = styled.h1`
font-size: 4rem;
color: white;
`
const TopBtnDiv = styled.h1`
border: 1px solid white;
height: 7rem;
border-radius: 10rem;
width: 20rem;
display: flex;
align-items: center;
justify-content: center;
position: relative;
overflow: hidden;
transition: all 200ms;
background-color:white;
cursor: pointer;
&:hover{
    .innnerdiv{
        width: 10%;
        height: 0;
    }
    .txt{
        color: red;
    }
}
`
const TopBtnInnerDiv = styled.h1`
width: 100%;
height: 100%;
background-color:  #fe0049;
transition: all 200ms;
position: relative;
border-radius:10rem;
`
const BtnTxt = styled.span`
color: white;
font-size: 1.6rem;
position: absolute;
/* margin-top: 2rem; */
top: 2.4rem;
text-transform: uppercase;
z-index:99;
`
// bottom styling for footer

const Bottom = styled.div`
width: 100%;
height: 70vh;
background: linear-gradient(rgba(0,0,0,0.9), rgba(0,0,0,0.8));
background-image:  url("https://images.pexels.com/photos/33597/guitar-classical-guitar-acoustic-guitar-electric-guitar.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500");
background-position: center;
background-repeat: no-repeat;
background-size: cover;
background-attachment: fixed;
display: flex;
align-items: center;
justify-content: center;
@media(max-width:1000px){
    height: auto;
}
`
const BottomWrapper = styled.div`
width: 1200px;
height: 50%;
margin: 0 auto;
display: flex;
justify-content: space-evenly;
flex-wrap: wrap;

`
const FooterDivs = styled.div`
flex:1 1 250px;
min-width:250px;
max-width:250px;
height: 40%;
`
const FooterH = styled.span`
color:  #fe0049;
font-size: 2.5rem;
font-weight: bolder;
`
const FooterWrap = styled.div`

display: flex;
width: 100%;
align-items: center;
justify-content: flex-start;
margin-top: 1.9rem;
.icon{
    color:  #fe0049;
}
&:hover{
    .icon{
        color: white;
    }
}
.icons{
    margin-right: 1.4rem;
    &:hover{
        color:  #fe0049;
    }
}
`
const FooterWrapIcon = styled.div`
font-size: 1.6rem;
font-weight: bold;
transition: all 200ms linear;
`
const FooterWrapP = styled.div`
font-size: 1.4rem;
font-weight: 200;
margin-left: 1rem;
`
const EmailInput = styled.input`
margin-top: 3rem;
width: 100%;
padding: 1.3rem ;
background-color: transparent;
border: 1px solid grey;
border-radius: 10rem;
font-size: 2rem;
color: white;
outline: none;
font-weight: 100;
&[placeholder]{
    font-size: 1.3rem;
}
`
const Button = styled.button`
width: 100%;
padding: 1.3rem ;
background-color:   #fe0049;
border: 1px solid   #fe0049;
border-radius: 10rem;
font-size: 1.3rem;
color: white;
outline: none;
text-transform: uppercase;
font-weight: 400;
cursor: pointer;
transition: all 200ms;
&:hover{
    background-color: transparent;
}
`

export default Footer
