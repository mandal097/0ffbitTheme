import React from 'react'
import styled from 'styled-components'
import ScheduleCards from './ScheduleCards'
const Schedules = ({ u }) => {

    return (
        <Container>
            <Wrapper>
                <ScheduleCards title={u.title}  image={u.scheduleCardImg1} stat='begginer' />
                <ScheduleCards title={u.title}  image={u.scheduleCardImg2} stat='intermediate' />
                <ScheduleCards title={u.title}  image={u.scheduleCardImg3} stat='advanced' />
            </Wrapper>
        </Container>
    )
}

const Container = styled.div`
width: 100%;
height: auto;
display: flex;
align-items: center;
justify-content: center;
margin: 4rem 0;
`
const Wrapper = styled.div`
width: 1200px;
font-size: 3rem;
display: flex;
align-items: center;
justify-content: space-evenly;
flex-wrap: wrap;
`
export default Schedules
