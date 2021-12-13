import React from 'react'
import styled from 'styled-components'
import FirstPage from '../components/CoursesComponents/FirstPage'
import Footer from '../components/CoursesComponents/Footer'
import Schedules from '../components/CoursesComponents/Schedules'
import SecondPage from '../components/CoursesComponents/SecondPage'
import ThirdPage from '../components/CoursesComponents/ThirdPage'
const Course = () => {
    return (
        <Container>
            <FirstPage />
            <SecondPage />
            <Schedules />
            <ThirdPage />
            <Footer />
        </Container>
    )
}

const Container = styled.div`
height: 100vh;
overflow-y: scroll;
font-family: 'Baloo 2', cursive;
`

export default Course
