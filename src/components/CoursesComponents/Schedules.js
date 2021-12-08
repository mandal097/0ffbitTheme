import React from 'react'
import styled from 'styled-components'
import ScheduleCards from './ScheduleCards'
const Schedules = () => {
    return (
        <Container>
            <Wrapper>
             <ScheduleCards
             name="Violin Lessons Beginner"
             img="https://images.pexels.com/photos/1010519/pexels-photo-1010519.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
             />
             <ScheduleCards
             name="Violin Lessons Intermediate"
             img="https://images.pexels.com/photos/164729/pexels-photo-164729.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
             />
             <ScheduleCards
             name="Violin Lessons Advanced"
             img="https://images.pexels.com/photos/1183095/pexels-photo-1183095.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
             />
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
