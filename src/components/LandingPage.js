import React, { useState } from 'react'
import styled from 'styled-components'
import { CloseOutlined } from '@ant-design/icons'

const LandingPage = () => {

    const [showPopUp, setShowPopUp] = useState(false);

    const styels = {
        position: 'absolute',
        height: '0rem',
        width: '0rem',
        borderRadius: '50%',
        right: '14rem',
        bottom: ' 14rem',
        zIndex: '3',
        // display:"none"
        
    }
    const styels2 = {
        position: ' absolute',
        height: '100%',
        width: '100%',
        right: 0,
        bottom: 0,
        border: 'none',
        transition: ' all 1s',
    }
    const hide = {
        zIndex: "-111"
    }
    const show = {
        zIndex: "111"
    }
    const [s, setS] = useState(styels);
    const [cancel, setCancel] = useState(hide);

    const handleClick = () => {
        switch (showPopUp) {
            case false:
                setShowPopUp(true);
                setS(styels2)
                setCancel(show)
                break;
            case true:
                setShowPopUp(false);
                setS(styels)
                setCancel(hide)
                break;
            default:
                setShowPopUp(false);
                setS(styels2)
                setCancel(show)
        }
    }
    const hidevideo = () => {
        setS(styels)
        setCancel(hide)
    }


    return (
        <>
            <Container >
                {/* <ReactPlayer
                    url="Video/tmnconcert.mp4?autoplay=1"
                    style={s}
                    playing={true}
                    controls={true}
                    
                    width='1000px'
                    height='1000px'
                /> */}
                <div className="after"  ></div>
                <Logo src='Images/1HLogoWhiteLinesNoBG.png' />
                <CircleDiv >
                    <Img src="Images/watchbtn.jpg" alt="" onClick={handleClick} />
                    <FistImg src="Images/yo.jpeg" alt="" className="img" onClick={handleClick} />
                </CircleDiv>
                <CancelDiv style={cancel} onClick={hidevideo}><CloseOutlined /></CancelDiv>
                <Iframe
                    src={`Video/tmnconcert.mp4?autoplay=1`}
                    autoplay="false"
                    sandbox
                    style={s}
                    allowfullscreen
                >
                </Iframe>
            </Container>
        </>
    )
}


const Container = styled.div`
height: 100vh;
background:linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.8)) , url('Images/missingnote.jpeg');
background-repeat: no-repeat;
object-fit:cover;
width: 100%;
background-size: cover;
display: flex;
align-items: center;
justify-content: center;
position: relative;
overflow-y: hidden;
.after{
    content: "";
    position: absolute;
    height: 13rem;
    width: 13rem;
    border-radius: 50%;
    cursor: pointer;
    bottom: 3rem;
    right: 3rem;
    z-index:2;
}

`
const Logo = styled.img`
height: auto ;
width: 20rem;
object-fit: contain;
position: absolute;
bottom: 7rem;
left: 7rem;
`
const CircleDiv = styled.div`
height: 100vh;
width: 100%; 
position: relative;
`
const FistImg = styled.img`
height: 10.25rem;
width:10.25rem;
position: absolute;
bottom: 7.36rem;
right: 11.365rem;
border-radius: 50%;
object-fit: cover;
opacity: 0.9;
filter: contrast(1.7);
cursor: pointer;
z-index: 1;
`

const CancelDiv = styled.div`
height: 5rem;
width: 5rem; 
font-size: 5rem;
position: absolute;
top: 5rem;
right: 12rem;
color: white;
transition-delay: 500ms;
`

const Img = styled.img`
height: 15rem;
width: 15rem;
position: absolute;
bottom:5rem;
right: 9rem;
border-radius: 50%;
object-fit: cover;
opacity: 0.9;
filter: contrast(1.7);
cursor: pointer;
z-index: 1;
animation: watchbtn 6s linear infinite;
`

const Iframe = styled.iframe`
position: absolute;
height: 100%;
width: 100%;
border: none;
transition: all 1s;
`
export default LandingPage
