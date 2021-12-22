import React from 'react'
import styled from 'styled-components'
import Header from '../components/CoursesComponents/Header'
import MainFooter from '../components/MainFooter'
import Social from '../components/Social'
const Register = () => {
    return (
        <Container>
            <Header left='6rem'/>
            <Wrapper>
                <Form>
                    <P>REGISTRATION FORM - FOR ENROLLED STUDENTS ONLY</P>
                    <InputDiv>
                        <InputDivs>
                            <Label>Student Name :</Label>
                            <Input type="text" />
                        </InputDivs>
                        <InputDivs>
                            <Label>Student Age :</Label>
                            <Input type="number" />
                        </InputDivs>
                        <InputDivs>
                            <Label>Gender :</Label>
                            <Input type="text" />
                        </InputDivs>
                        <InputDivs>
                            <Label>Enrolling for :</Label>
                            <Input type="text" />
                        </InputDivs>
                        <InputDivs>
                            <Label>DLF Tower :</Label>
                            <Input type="text" />
                        </InputDivs>
                        <InputDivs>
                            <Label>Flat No. :</Label>
                            <Input type="text" />
                        </InputDivs>
                        <InputDivs>
                            <Label>Student Mobile Number*</Label>
                            <Input type="text" />
                        </InputDivs>
                        {/* <InputDivs>
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
                        </InputDivs> */}
                        <InputDivs>
                            <Label>Guardian Name*</Label>
                            <Input type="text" />
                        </InputDivs>
                        <InputDivs>
                            <Label>Guardian Mobile Number *</Label>
                            <Input type="text" />
                        </InputDivs>
                        {/* <InputDivs>
                            <Label>Address*</Label>
                            <Input type="text" />
                        </InputDivs> */}
                    </InputDiv>
                    {/* <InputDivs className='buttonDiv'>
                        <Input type="button" value='SUBMIT' className='button' />
                    </InputDivs> */}
                    {/* <InputDiv>
                    </InputDiv> */}
                    <TermsCondition>Terms & and Condition :</TermsCondition>
                    <Terms>
                        <TermsText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit exercitationem, eius libero minus qui sunt consectetur cupiditate. Autem quo quisquam perspiciatis vitae atque expedita sequi tempora aliquid repellat? Modi ducimus dignissimoorem ipsum dolor sit amet consectetur adipisicing elit. Odit exercitationem, eius libero minus qui sunt consectetur cupiditate. Autem quo quisquam perspiciatis vitae atque expedita sequi tempora aliquid repellat? Modi ducimus dignissimoorem ipsum dolor sit amet consectetur adipisicing elit. Odit exercitationem, eius libero minus qui sunt consectetur cupiditate. Autem quo quisquam perspiciatis vitae atque expedita sequi tempora aliquid repellat? Modi ducimus dignissimoorem ipsum dolor sit amet consectetur adipisicing elit. Odit exercitationem, eius libero minus qui sunt consectetur cupiditate. Autem quo quisquam perspiciatis vitae atque expedita sequi tempora aliquid repellat? Modi ducimus dignissimos commodi magni pariatur debitis deserunt ipsum labore eum doloribus?</TermsText>
                        <CheckboxDiv>
                            <Checkbox type='checkbox' />
                            <CheckboxText>I Agree to the Terms & conditions</CheckboxText>
                        </CheckboxDiv>
                    </Terms>
                    <ButtonDiv>
                        <Button  type="submit" > signup</Button>
                    </ButtonDiv>
                </Form>
            </Wrapper>
            <Social />
            <MainFooter/>
        </Container>

    )
}

const Container = styled.div`
width:100%;
height:100vh;
background-color:black;
color:white;
font-family: 'Baloo 2', cursive;
`
const Wrapper = styled.div`
height:auto;
width:100%;
background-color:white;
`
const Form = styled.form`
width:1100px;
margin:0 auto;
height:100%;
padding-bottom:4rem;
/* border:0.1px solid red; */
background-color:goldenrod;
@media(max-width:1100px){
    width:100%;
}
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
const P = styled.p`
font-size:2.5rem;
font-weight:100;
font-family: 'Baloo 2', cursive;
text-align:center;
position:relative;
padding:4rem 0;
&::before{
    content:'';
    position:absolute;
    width:60rem;
    height:2px;
    background-color:white;
    bottom:4rem;
}
`
const InputDiv = styled.div`
width:100%;
height:100%;
display:flex;
margin-bottom:3rem;
/* justify-content:space-between; */
flex-wrap:wrap;

`
const InputDivs = styled.div`
flex:1 1 180px;
height:6rem;
border:none;
margin:1rem 5rem;
display:flex;
flex-direction:column;
width:100%;
`
const Label = styled.label`
font-size:1.4rem;
color:black;
font-weight:600;
`
const Input = styled.input`
width:100%;
height:100%;
/* max-width:500px; */
/* background-color:transparent; */
border:0.1px solid white;
outline:none;
color:black;
font-size:2rem;
`
// const Select = styled.select`
// width:100%;
// height:100%;
// /* max-width:500px; */
// background-color:transparent;
// border:1px solid white;
// outline:none;
// color:white;
// font-size:2rem;
// `
// const Option = styled.option`
// width:100%;
// height:100%;
// /* max-width:500px; */
// /* background-color:transparent;
// border:1px solid white;
// outline:none;
//  */
// color:black;
// font-size:1.5rem;
// `

const TermsCondition = styled.small`
font-size:1.5rem;
font-weight:600;
color:black;
margin:5rem 5rem;
`
const Terms = styled.div`
width:91%;
height:30vh;
border:2px solid white;
margin:2rem 5rem;
background-color:gray;
padding:2rem;
overflow-Y:scroll;
&::-webkit-scrollbar {
    width: 8px;
} 
&::-webkit-scrollbar-track {
    background: #f1f1f1;
}

/* Handle */
&::-webkit-scrollbar-thumb {
    background:yellow;
}

/* Handle on hover */
&::-webkit-scrollbar-thumb:hover {
    background: goldenrod;
}
`

const TermsText = styled.div`
font-size:1.5rem;
color:black;
`
const CheckboxDiv = styled.div`
width:40%;
height:3rem;
display:flex;
align-items:center;
`

const Checkbox = styled.input`
height:2rem;
width:2rem;
background:red;
margin-right:1rem;
`
const CheckboxText = styled.p`
font-size:1.4rem;
color:black;
font-weight:900;
`
const ButtonDiv  =styled.div`
width:91%;
height:5.5rem;
border:2px solid white;
margin:2rem 5rem;
`
const Button  = styled.div`
width:100%;
height:100%;
background-color:teal;
border:none;
cursor:pointer;
color:white;
font-size:3rem;
text-transform:uppercase;
font-weight:100;
transition:all 300ms linear;
display:flex;
align-items:center;
justify-content:center;
&:hover{
    background:green;
}
`
export default Register
