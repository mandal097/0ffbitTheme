import React from 'react'
import styled from 'styled-components'
import {
    FacebookFilled,
    YoutubeFilled,
    InstagramOutlined,
    WhatsAppOutlined
} from '@ant-design/icons'
const Social = () => {
    return (
        <Container>
            <FacebookFilled />
            <YoutubeFilled />
            <InstagramOutlined />
            <WhatsAppOutlined />
        </Container>
    )
}

const Container = styled.div`
position:fixed;
top:40%;
left:1rem;
width:3.5rem;
height:13rem;
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
    width: 3rem;
}
`

export default Social
