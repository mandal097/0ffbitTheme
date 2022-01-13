import React, { useState } from 'react'
import styled from 'styled-components'
import Header from '../components/CoursesComponents/Header'
import MainFooter from '../components/MainFooter'
import Social from '../components/Social'
const Register = (props) => {

    const [checked, setChecked] = useState(false)

    const [inputField, setInputField] = useState({
        name: '',
        email: '',
        age: '',
        gender: '',
        enrolling: '',
        dlf: '',
        flatNo: '',
        studentMobile: '',
        gaurdianName: '',
        gaurdianMobile: ''
    })

    const handlechange = (e) => {
        setInputField({
            ...inputField,
            [e.target.name]: e.target.value
        })
    }

    console.log(inputField);


    const handleCheck = (e) => {
        switch (checked) {
            case false:
                setChecked(true);
                break;
            case true:
                setChecked(false);
                break;
            default:
                setChecked(false)
        }
    }

    const submit = (e) => {
        e.preventDefault()
        // if (checked) {
        console.log('chedke');
    }
    // }

    return (
        <Container>
            <Header left='6rem' />
            <Wrapper>
                <Form onSubmit={submit}>
                    <P>REGISTRATION FORM - FOR ENROLLED STUDENTS ONLY</P>
                    <InputDiv>
                        <InputDivs>
                            <Label>Student Name :</Label>
                            <Input
                                type="text"
                                name="name"
                                onChange={handlechange}
                            />
                        </InputDivs>
                        <InputDivs>
                            <Label>Email Address :</Label>
                            <Input
                                type="text"
                                name="email"
                                onChange={handlechange}
                            />
                        </InputDivs>
                        <InputDivs>
                            <Label>Age Group :</Label>
                            <Select name='age'>
                                <Option value=""></Option>
                                <Option value='3-7 years'>3-7 yrs</Option>
                                <Option value='8-15 years'>8-15 yrs</Option>
                                <Option value='16-25 years'>16-25 yrs</Option>
                                <Option value='26+ years'>26+ yrs</Option>
                            </Select>
                        </InputDivs>
                        {/* <InputDivs>
                            <Label>Age Group :</Label>
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
                            <Label>Gender :</Label>
                            <Input
                                type="text"
                                name="gender"
                                onChange={handlechange}
                            />
                        </InputDivs>
                        <InputDivs>
                            <Label>Enrolling for :</Label>
                            <Input
                                type="text"
                                name='enrolling'
                                onChange={handlechange}
                            />
                        </InputDivs>
                        <InputDivs>
                            <Label>DLF Tower :</Label>
                            <Input
                                type="text"
                                name='dlf'
                                onChange={handlechange}
                            />
                        </InputDivs>
                        <InputDivs>
                            <Label>Flat No. :</Label>
                            <Input
                                type="text"
                                name='flatNo'
                                onChange={handlechange}
                            />
                        </InputDivs>
                        <InputDivs>
                            <Label>Student Mobile Number*</Label>
                            <Input
                                type="text"
                                name='studentMobile'
                                onChange={handlechange}
                            />
                        </InputDivs>
                        <InputDivs>
                            <Label>Guardian Name*</Label>
                            <Input
                                type="text"
                                name='gaurdianName'
                                onChange={handlechange}
                            />
                        </InputDivs>
                        <InputDivs>
                            <Label>Guardian Mobile Number *</Label>
                            <Input
                                type="text"
                                name='gaurdianMobile'
                                onChange={handlechange}
                            />
                        </InputDivs>
                        {/* <InputDivs>
                            <Label>Address*</Label>
                            <Input type="text" />
                        </InputDivs> */}
                        {/* onChange={handlechange} */}
                    </InputDiv>
                    {/* <InputDivs className='buttonDiv'>
                        <Input type="button" value='SUBMIT' className='button' />
                    </InputDivs> */}
                    {/* onChange={handlechange} */}
                    {/* <InputDiv>
                    </InputDiv> */}
                    <TermsCondition>Terms & and Condition :</TermsCondition>
                    <Terms>
                        <TermsText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit exercitationem, eius libero minus qui sunt consectetur cupiditate. Autem quo quisquam perspiciatis vitae atque expedita sequi tempora aliquid repellat? Modi ducimus dignissimoorem ipsum dolor sit amet consectetur adipisicing elit. Odit exercitationem, eius libero minus qui sunt consectetur cupiditate. Autem quo quisquam perspiciatis vitae atque expedita sequi tempora aliquid repellat? Modi ducimus dignissimoorem ipsum dolor sit amet consectetur adipisicing elit. Odit exercitationem, eius libero minus qui sunt consectetur cupiditate. Autem quo quisquam perspiciatis vitae atque expedita sequi tempora aliquid repellat? Modi ducimus dignissimoorem ipsum dolor sit amet consectetur adipisicing elit. Odit exercitationem, eius libero minus qui sunt consectetur cupiditate. Autem quo quisquam perspiciatis vitae atque expedita sequi tempora aliquid repellat? Modi ducimus dignissimos commodi magni pariatur debitis deserunt ipsum labore eum doloribus?</TermsText>
                        <CheckboxDiv>
                            <Checkbox type='checkbox' onChange={handleCheck} />
                            <CheckboxText>I Agree to the Terms & conditions</CheckboxText>
                        </CheckboxDiv>
                    </Terms>
                    {/* {
                        checked && */}
                    <ButtonDiv>
                        <Button type="submit" disabled={!checked ? true : false}> {checked ? 'signup' : 'first agree terms and conditions to signup'}</Button>
                    </ButtonDiv>
                    {/* } */}
                </Form>
            </Wrapper>
            <Social />
            <MainFooter />
        </Container>

    )
}

const Container = styled.div`
width:100%;
height:100vh;
background-color:black;
color:white;
font-family: 'Baloo 2', cursive;
overflow-y:scroll;
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

@media (max-width:700px ){
  align-items:center;
  jsutify-content:center;
}

`
const InputDivs = styled.div`
flex:1 1 180px;
min-width:180px;
max-width:250px;
height:6rem;
border:none;
margin:1rem 5rem;
display:flex;
flex-direction:column;
width:100%;
@media (max-width:600px ){
    /* flex:1 1 180px; */
    margin:1rem auto;
    min-width:80%;
    max-width:80%;
}
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
const Select = styled.select`
width:100%;
height:100%;
/* max-width:500px; */
/* background-color:transparent; */
border:1px solid white;
outline:none;
color:black;
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
const ButtonDiv = styled.div`
width:91%;
height:5.5rem;
border:2px solid white;
margin:2rem 5rem;
`
const Button = styled.button`
width:100%;
height:100%;
background-color:teal;
border:none;
cursor:pointer;
color:white;
font-size:${(props) => (props.disabled ? '1.5rem' : '3rem')};
text-transform:uppercase;
font-weight:100;
transition:all 300ms linear;
display:flex;
align-items:center;
justify-content:center;
cursor: ${(props) => (props.disabled ? "not-allowed" : " pointer")};
background: ${(props) => (props.disabled ? "rgba(0,0,0,0.7)" : " #0a66c2")};
&:hover{
    background: ${(props) => (props.disabled ? "rgba(0,0,0,0.7)" : "green")};
}
`
export default Register
