import React  from 'react'
import styled from 'styled-components'
import FirstPage from '../components/CoursesComponents/FirstPage'
import Footer from '../components/CoursesComponents/Footer'
import Schedules from '../components/CoursesComponents/Schedules'
import SecondPage from '../components/CoursesComponents/SecondPage'
import ThirdPage from '../components/CoursesComponents/ThirdPage'
import { useLocation } from 'react-router-dom'
import { data } from '../dummydatas/cardsData'
import Social from '../components/Social'
const Course = () => {

    const location = useLocation()
    const path = location.pathname
    const course = path.split('/')[2]
    const u = data[course - 1]

    return (
        <Container>
            <FirstPage u={u} />
            <SecondPage u={u} />
            <Schedules u={u} />
            <ThirdPage u={u} />
            <Footer u={u} />
            <Social/>
        </Container>
    )
}

const Container = styled.div`
height: 100vh;
overflow-y: scroll;
font-family: 'Baloo 2', cursive;
`

export default Course
