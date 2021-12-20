import React from 'react'
import styled from 'styled-components'
import {
    FacebookFilled,
    YoutubeFilled,
    InstagramOutlined
} from '@ant-design/icons'
const Social = () => {
    return (
        <Container>
            <FacebookFilled />
            <YoutubeFilled />
            <InstagramOutlined />
        </Container>
    )
}

const Container = styled.div`
position:fixed;
top:40%;
left:1rem;
width:5rem;
height:10rem;
display: flex;
flex-direction:column;
justify-content: space-between;
font-size: 1.7rem;
background-color:black;
padding:0.5rem;
border-radius:1rem;
z-index:1000;
& >*{
    color:white;
    transition: all 500ms;
    cursor: pointer;
    :hover{
        color: red;
    }
}
@media(max-width:510px){
    width: 22%;
}
`

export default Social
