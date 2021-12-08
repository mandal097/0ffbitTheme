import React from 'react'
import styled from 'styled-components'
const ScheduleCards = ({ name, img }) => {
    return (
        <Card>
            <Img src={img} />
            <CardWrapper>
                <CardSpan>WEEKLY SCHEDULE</CardSpan>
                <CardHeader>{name}</CardHeader>
                <ScheduleDIV>
                    <Days>
                        <Day> monday</Day>
                        <Time>06 - 08 PM</Time>
                    </Days>
                    <Days>
                        <Day> monday</Day>
                        <Time>06 - 08 PM</Time>
                    </Days>
                    <Days>
                        <Day> monday</Day>
                        <Time>06 - 08 PM</Time>
                    </Days>
                    <Days>
                        <Day> monday</Day>
                        <Time>06 - 08 PM</Time>
                    </Days>
                    <Days>
                        <Day> monday</Day>
                        <Time>06 - 08 PM</Time>
                    </Days>
                    <Days>
                        <Day> monday</Day>
                        <Time>06 - 08 PM</Time>
                    </Days>
                </ScheduleDIV>
            </CardWrapper>
        </Card>
    )
}

const Card = styled.div`
flex: 1 1 380px;
min-width: 380px;
max-width: 380px;
height: auto;
font-size: 3rem;
font-family: Verdana, Geneva, Tahoma, sans-serif;
display: flex;
align-items: center;
justify-content: center;
position: relative;
background:linear-gradient(rgba(0,0,0,0.1),rgba(0,0,0,0.6));
`
const Img = styled.img`
position: absolute;
height: 100%;
width: 100%;
object-fit: cover;
z-index: -1;
`
const CardWrapper = styled.div`
width: 80%;
height: 90%;
`
const CardSpan = styled.span`
color: white;
font-size: 1.1rem;
text-transform: uppercase;
font-weight: bold;
`
const CardHeader = styled.h4`
color: white;
font-size: 3rem;
font-weight: 300;
`
const ScheduleDIV = styled.div`
width: 100%;
height: 80%;
margin-top: 4rem;
`
const Days = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: space-between;
color: white;
height: 6.3rem;
`
const Day = styled.div`
font-size: 1.2rem;
text-transform: uppercase;
font-weight: bold;
position: relative;
&::before{
    content: "";
    position: absolute;
    background-color: grey;
    height: 0.1px;
    width: 380px;
    left:-4rem;
    top:-2.1rem;
}
`
const Time = styled.div`
font-size: 1.3rem;
text-transform: uppercase;
font-weight: bold;
`


export default ScheduleCards
