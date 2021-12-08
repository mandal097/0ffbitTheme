import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const Cards = ({ img, title }) => {
    return (
        <Card>
            <CardImg src={img} />
            <Content>
                <H3>our courses</H3>
                <H1>Guitar Lessons</H1>
                <P>All the image blocks that are on the next page will have this text written over them. We can .</P>
                <NavLink to='course' className="nav"><Span>view more &rarr; </Span></NavLink>
            </Content>
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
position: relative;
font-family: Verdana, Geneva, Tahoma, sans-serif;
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
height: 88%;
bottom: 4.5rem;
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: space-evenly;
background: linear-gradient(rgba(0,0,0,0.1),rgba(0,0,0,.6));
`
const H3 = styled.h3`
font-size:1.7rem;
color: white;
font-weight: bold;
text-transform: uppercase;
`

const H1 = styled.h1`
font-size: 3.2rem;
color: white;
font-weight: bold;
`

const P = styled.p`
font-size: 1.5rem;
color: white;
font-weight: 600;
line-height: 1.8;

`
const Span = styled.span`
font-size: 2rem;
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
