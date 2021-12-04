import React from 'react'
import styled from 'styled-components'
const Cards = ({img , title}) => {
    return (
        <Card>
            <CardImg src={img} />
            <CardTitle className="title">{title}</CardTitle>
        </Card>
    )
}

const Card = styled.div`
height:70vh ;
flex: 1 1 300px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
transition: all 200ms linear;
margin: 1rem;
cursor: pointer;
&:hover{
    transform: translateY(-2rem);
    .title{
        transform: translateY(-1rem);
    }
}
`
const CardImg = styled.img`
width: 100%;
height: 90%;
object-fit: cover;
`
const CardTitle = styled.span`
text-align: center;
font-size: 2.3rem;
font-weight: bolder;
text-transform: uppercase;
transition: all 100ms linear;
transition-delay: 200ms;
margin-top: 1rem;
`


export default Cards
