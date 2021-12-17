import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'


const Cards = ({ i }) => {

    const course = i.id
    return (
        <Card>
            <CardImg src={i.img} />
            <Content>
                <Small>our courses</Small>
                <GuitarLessons>{i.title}</GuitarLessons>
                <P>{i.content}</P>
                <NavLink to={`course/${course}`} className="nav"><Span>view more &rarr; </Span></NavLink>
            </Content>
            <CardTitle className="title">{i.title}</CardTitle>
        </Card>
    )
}

const Card = styled.div`
height:75vh ;
flex: 1 1 300px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
transition: all 200ms linear;
margin: 1rem;
position: relative;
font-family: 'Baloo 2', cursive;
.nav{
    text-decoration: none;
}
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
const Content = styled.div`
position: absolute;
padding: 4rem;
width: 100%;
height: 35%;
bottom: 5.9rem;
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: space-evenly;
/* background: linear-gradient(rgba(0,0,0,0.1),rgba(0,0,0,.6)); */
`
const Small = styled.small`
font-size:1.4rem;
color: white;
text-transform: uppercase;
`

const GuitarLessons = styled.span`
font-size: 2.5rem;
color: white;
font-weight: bold;
`

const P = styled.span`
font-size: 1.5rem;
color: white;
font-weight: 400;
line-height: 1.8;
text-shadow: 1px 10px 2px 1px black;

`
const Span = styled.span`
font-size: 1.4rem;
color: lightpink;
text-transform: uppercase;
font-weight: bold;
cursor: pointer;
text-decoration: none;
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
