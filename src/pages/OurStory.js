import React from 'react'
import styled from 'styled-components'
import Header from '../components/CoursesComponents/Header'
import MainFooter from '../components/MainFooter'
import { data } from '../dummydatas/cardsData'
const OurStory = () => {
    return (
        <Container>
            <Header black='black' left='6rem' />
            <Wrapper>
                <Top>
                    <TopH>how it all began...</TopH>
                </Top>
                <StoryDiv>
                    <StoryDivLeft>
                        <Card>
                            <Img src={'/' + data[0].img} />
                            <CardWrapper>
                                <CardSpan>WEEKLY SCHEDULE</CardSpan>
                                <CardHeader>{data[0].title} lessons  </CardHeader>
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
                    </StoryDivLeft>
                    <StoryDivRight>
                        <StoryDivRightP>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit cupiditate, beatae maxime commodi corporis sed dolore libero! Nostrum cum, dolore aliquid necessitatibus ullam consequatur consequuntur sit, reiciendis aperiam, veritatis distinctio ad accusantium! Tenetur sunt adipisci debitis. Alias quibusdam cumque praesentium obcaecati, molestias ut aspernatur dolores fugit soluta porro labore, reiciendis, officia excepturi perferendis? Optio molestiae aspernatur dolorum numquam minima fugiat accusamus! Quia, expedita? Expedita nam esse, cupiditate aliquid animi nemo alias recusandae laboriosam, sed dicta architecto tempora voluptatum voluptatibus corrupti exercitationem aperiam quibusdam pariatur fuga fugiat reiciendis voluptates! Eligendi corporis placeat itaque deleniti consequuntur voluptate qui? Qui esse quibusdam quae.</StoryDivRightP>
                    </StoryDivRight>
                </StoryDiv>
                <StoryDiv>
                    <StoryDivLeft>
                        <Card>
                            <Img src={'/' + data[1].img} />
                            <CardWrapper>
                                <CardSpan>WEEKLY SCHEDULE</CardSpan>
                                <CardHeader>{data[1].title} lessons  </CardHeader>
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
                    </StoryDivLeft>
                    <StoryDivRight>
                        <StoryDivRightP>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit cupiditate, beatae maxime commodi corporis sed dolore libero! Nostrum cum, dolore aliquid necessitatibus ullam consequatur consequuntur sit, reiciendis aperiam, veritatis distinctio ad accusantium! Tenetur sunt adipisci debitis. Alias quibusdam cumque praesentium obcaecati, molestias ut aspernatur dolores fugit soluta porro labore, reiciendis, officia excepturi perferendis? Optio molestiae aspernatur dolorum numquam minima fugiat accusamus! Quia, expedita? Expedita nam esse, cupiditate aliquid animi nemo alias recusandae laboriosam, sed dicta architecto tempora voluptatum voluptatibus corrupti exercitationem aperiam quibusdam pariatur fuga fugiat reiciendis voluptates! Eligendi corporis placeat itaque deleniti consequuntur voluptate qui? Qui esse quibusdam quae.</StoryDivRightP>
                    </StoryDivRight>
                </StoryDiv>
            </Wrapper>
            <MainFooter />
        </Container>
    )
}

const Container = styled.div`
color:white;
width:100%;
font-family: 'Baloo 2', cursive;
`
const Wrapper = styled.div`
width:1100px;
margin:0 auto;
color:black;
`
const Top = styled.div`
width:100%;
height:auto;
display:flex;
align-items:center;
justify-content:center;
padding:3rem;
`
const TopH = styled.h2`
font-size:5rem;
font-weight:100;
text-transform:uppercase;
`

const StoryDiv = styled.div`
width:100%;
height:80vh;
display:flex;
align-items:center;
justify-content:space-between;
margin:4rem 0;
`
const StoryDivLeft = styled.div`
width:30%;
height:100%;
`

const Card = styled.div`
width:100%;
height: auto;
font-size: 3rem;
font-family: Verdana, Geneva, Tahoma, sans-serif;
display: flex;
align-items: center;
justify-content: center;
position: relative;
background:linear-gradient(rgba(0,0,0,0.1),rgba(0,0,0,0.6));
margin: 1rem 0;
font-family: 'Baloo 2', cursive;
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
/* margin-top: 4rem; */
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
    width: 32rem;
    left:-3rem;
    top:-2.1rem;
}
`
const Time = styled.div`
font-size: 1.3rem;
text-transform: uppercase;
font-weight: bold;
`

const StoryDivRight = styled.div`
width:68%;
height:100%;
display:flex;
align-items:center;
justify-content:center;
`
const StoryDivRightP = styled.p`
font-size:1.9rem;
padding:3rem;
`

export default OurStory
