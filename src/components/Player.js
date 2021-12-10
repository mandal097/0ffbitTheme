import React from 'react'
import ReactPlayerr from 'react-player'
import styled from 'styled-components'

const Player = () => {
    return (
        <Container>
            <ReactPlayerr 
            className="react-player"
              url="Video/tmnconcert.mp4"
              playing={true}
              controls={true}
            />
        </Container>
    )
}

const Container = styled.div`
width: 100%;
height: 100vh;
position: absolute;
top: 0;
left: 0;
right: 0;
bottom:0 ;
display: flex;
align-items: center;
justify-content: center;
@media(max-width:600px){
    height: 50vh;
} 
.react-player{
    animation: popUp 500ms linear;

}
`

export default Player
