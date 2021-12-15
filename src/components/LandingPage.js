import React, { useState ,useEffect} from 'react'
import styled from 'styled-components'
import { CloseOutlined } from '@ant-design/icons'
import Player from './Player'
import Header from './CoursesComponents/Header'

const LandingPage = () => {

    const [showPopUp, setShowPopUp] = useState(false);
    const [bg, setBg] = useState(false);
    
    const hide = {
        zIndex: "-111"
    }
    const show = {
        zIndex: "111"
    }
    const [cancel, setCancel] = useState(hide);

    const handleClick = () => {
        switch (showPopUp) {
            case false:
                setShowPopUp(true);
                setCancel(show)
                break;
            case true:
                setShowPopUp(false);
                setCancel(hide)
                break;
            default:
                setShowPopUp(false);
                setCancel(show)
        }
    }
    const hidevideo = () => {
        setShowPopUp(false);
        setCancel(hide)
    }

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 400) {
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
        <>
            <Container >
                <HeaderDiv b={bg}
                style={{
                    width: "100%",
                    position:'fixed',
                    top:"0" ,
                    zIndex:10,
                    color: 'white',
                }}
                >
                <div className='headerDiv'
                style={{
                    width: "90%",
                    margin: "0 auto"
                }}
                >
                    <Header image="none"/>
                </div>
                </HeaderDiv>
                <Logo src='Images/1HLogoWhiteLinesNoBG.png' />
                <Img src="Images/watchbutton.jpg" alt="" onClick={handleClick} />
                <FistImg src="Images/yo.jpeg" alt="" className="img" onClick={handleClick} />
                <CancelDiv style={cancel} onClick={hidevideo}><CloseOutlined /></CancelDiv>
            </Container>
            {
                showPopUp && <Player />
            }
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

@media(max-width:600px){
    width: 100%;
    background-size: contain;
    background-position: center;
    height: 50vh;
} 
`
const HeaderDiv = styled.div`
transition:all 500ms linear;
background: ${props => props.b ? "black" : 'none'};
`

const Logo = styled.img`
height: auto ;
width: 20rem;
object-fit: contain;
position: absolute;
bottom: 7rem;
left: 7rem;
@media(max-width:600px){
   width: 13rem;
} 
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
@media(max-width:600px){
    height: 10rem;
    width: 10rem;
} 

`
const FistImg = styled.img`
height: 9rem;
width:9rem;
position: absolute;
bottom: 8rem;
right:12rem;
border: 1px solid white;
border-radius: 50%;
object-fit: cover;
opacity: 0.9;
filter: contrast(1.7);
cursor: pointer;
z-index: 1;
@media(max-width:600px){
    height: 6rem;
    width: 6rem;
    bottom: 7.1rem;
    right:11rem;
} 

`


const CancelDiv = styled.div`
height: 5rem;
width: 5rem; 
font-size: 5rem;
position: absolute;
top: 13rem;
right: 16rem;
color: white;
cursor: pointer;
text-shadow: 1px 2px 10px 20px red;
transition-delay: 500ms;

@media(max-width:600px){
    right: 4rem;
} 
`

export default LandingPage
