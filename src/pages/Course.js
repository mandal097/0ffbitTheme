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
            <ThirdPage />
            <Schedules />
            <Footer/>
        </Container>
    )
}

const Container = styled.div`

`

export default Course
