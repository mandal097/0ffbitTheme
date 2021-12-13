import React from 'react'
import styled from 'styled-components'
import Header from '../components/CoursesComponents/Header'
const Register = () => {
    return (
        <Container>
            <Wrapper>
                <Header hide="none" />
                <Form>
                    <H>Registration</H>
                    <InputDiv>
                        <InputDivs>
                            <Label>Student Name*</Label>
                            <Input type="text" />
                        </InputDivs>
                        <InputDivs>
                            <Label>Student Mobile Number*</Label>
                            <Input type="text" />
                        </InputDivs>
                        <InputDivs>
                            <Label>Student Age*</Label>
                            <Input type="number" />
                        </InputDivs>
                        <InputDivs>
                            <Label>Session</Label>
                            <Select>
                                <Option></Option>
                                <Option>Guitar</Option>
                                <Option>Ukulele</Option>
                                <Option>Keyboard</Option>
                                <Option>Tabla</Option>
                                <Option>Drums</Option>
                                <Option>Vocals</Option>
                            </Select>
                        </InputDivs>
                        <InputDivs>
                            <Label>Guardian Name*</Label>
                            <Input type="text" />
                        </InputDivs>
                        <InputDivs>
                            <Label>Guardian Mobile Number *</Label>
                            <Input type="text" />
                        </InputDivs>
                        <InputDivs>
                            <Label>Address*</Label>
                            <Input type="text" />
                        </InputDivs>
                    </InputDiv>
                    <InputDivs className='buttonDiv'>
                        <Input type="button" value='SUBMIT' className='button' />
                    </InputDivs>
                </Form>
            </Wrapper>
        </Container>

    )
}

const Container = styled.div`
width:100%;
height:auto;
background-color:black;
color:white;
`
const Wrapper = styled.div`
width:1100px;
height:90%;
margin:0 auto;
@media(max-width:1100px){
    width:100%;
}
`
const Form = styled.form`
width:100%;
height:100%;
margin-top:4rem;
border:0.1px solid red;
.button{
    background-color:green;
    width:20rem;
    height:5rem;
    margin:0 auto;
    border:none;
    cursor:pointer;
}
.buttonDIv{
    height:4rem;
}
@media(max-width:770px){
    height:auto;
    .button{
        width:94%;
        margin:1rem;
    }
    .buttonDIv{
        /* width:100%; */
}
}
`
const H = styled.h2`
font-size:3rem;
text-align:center;
`
const InputDiv = styled.div`
width:100%;
height:100%;
display:flex;
/* justify-content:space-between; */
flex-wrap:wrap;

`
const InputDivs = styled.div`
flex:1 1 350px;
height:6rem;
border:none;
margin:2rem;
display:flex;
flex-direction:column;
width:100%;
`
const Label = styled.label`
font-size:1.4rem;
`
const Input = styled.input`
width:100%;
height:100%;
/* max-width:500px; */
background-color:transparent;
border:0.1px solid white;
outline:none;
color:white;
font-size:2rem;
`
const Select = styled.select`
width:100%;
height:100%;
/* max-width:500px; */
background-color:transparent;
border:1px solid white;
outline:none;
color:white;
font-size:2rem;
`
const Option = styled.option`
width:100%;
height:100%;
/* max-width:500px; */
/* background-color:transparent;
border:1px solid white;
outline:none;
 */
color:black;
font-size:1.5rem;
`


export default Register
