import React from 'react'
import styled from 'styled-components'
import {
    UserOutlined,
    BookOutlined,
    ApartmentOutlined
} from '@ant-design/icons'

const ThirdPage = () => {
    return (
        <Container>
            <Wrapper>
                <Cards>
                    <CardTopDiv>
                        <Icon>
                            <UserOutlined className="icon" />
                        </Icon>
                    </CardTopDiv>
                    <div></div>
                    <CardSpan>STUDENTS</CardSpan>
                    <CardP>Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional.</CardP>
                </Cards>
                <Cards>
                    <CardTopDiv><Icon><ApartmentOutlined className="icon" /></Icon></CardTopDiv>
                    <CardSpan>LEVELS</CardSpan>
                    <CardP>Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal.</CardP>
                </Cards>
                <Cards>
                    <CardTopDiv><Icon><BookOutlined className="icon" /></Icon></CardTopDiv>
                    <CardSpan>CERTIFICATE</CardSpan>
                    <CardP>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster.</CardP>
                </Cards>
            </Wrapper>
        </Container>
    )
}


const Container = styled.div`
width: 100%;
color: black;
margin-bottom: 5rem;
font-size: 3rem;
display: flex;
align-items: center;
justify-content: center;
font-family:Verdana, Geneva, Tahoma, sans-serif;
`
const Wrapper = styled.div`
width: 1200px;
display: flex;
align-items: center;
justify-content: space-around;
flex-wrap:wrap;
`

const Cards = styled.div`
flex: 1 1 300px;
max-width: 350px;
min-width: 350px;
height: 40vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-evenly;
padding: 1rem;
`
const CardTopDiv = styled.div`
width: 9rem;
height: 9rem;
background-color:   #fe0049;
border: 0.5px solid   #fe0049;
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
transition: all 500ms linear;
&:hover{
    background-color: white;
    .icon{
        color: #fe0049;
    }
}
`
const Icon = styled.div`
font-size: 5.6rem;
color: white;
transition: all 500ms linear;
`

const CardSpan = styled.span`
font-size: 1.3rem;
font-weight: 600;
`
const CardP = styled.p`
text-align: center;
font-size: 1.4rem;
font-weight: 100;
color: rgba(0,0,0,0.9);
line-height: 1.5;
`

export default ThirdPage
