import React, { useState } from 'react'
import styled from 'styled-components'

const LandingPage = () => {

    const [showPopUp, setShowPopUp] = useState(false);

    const styels = {
        position: 'absolute',
        height: '8.4rem',
        width: '8.4rem',
        borderRadius: '50%',
        right: '4.8rem',
        bottom: ' 4.7rem',
        zIndex: '3'

    }
    const styels2 = {
        position: ' absolute',
        height: '100%',
        width: '100%',
        border: 'none',
        transition: ' all 1s',
    }
    const [s, setS] = useState(styels);

    const handleClick = () => {
        switch (showPopUp) {
            case false:
                setShowPopUp(true);
                setS(styels2)
                break;
            case true:
                setShowPopUp(false);
                setS(styels)
                break;
            default:
                setShowPopUp(false);
                setS(styels2)
        }
    }


    return (
        <>
            <Container >
                <div className="after" onClick={handleClick} ></div>
                <Logo src='Images/missingnotelogo.jpeg' />
                <CircleDiv >
                    <Img src="Images/watchbtn.jpg" alt="" />
                </CircleDiv>
                <Iframe onClick={handleClick}
                    src={`Video/tmnconcert.mp4?autoplay=1`}
                    autoplay
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
bottom: 6rem;
left: 2rem;
`
const CircleDiv = styled.div`
height: 100vh;
width: 100%; 
position: relative;
`

const Img = styled.img`
height: 12rem;
width: 12rem;
position: absolute;
bottom:3rem;
right: 3rem;
border-radius: 50%;
object-fit: cover;
opacity: 0.9;
filter: contrast(1.2);
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
