import React, { useState } from 'react'
import styled from 'styled-components'
import {
    ArrowLeftOutlined,
    ExclamationCircleOutlined
} from '@ant-design/icons'

const GetInTouch = ({ setShowPopUp }) => {

    const [mobile, setMobile] = useState('');
    const [address, setAddress] = useState('');
    const [interest, setInterest] = useState('');
    const [query, setQuery] = useState('')

    const [errField, setErrField] = useState({
        mobileErr: '',
        addressErr: '',
        interestErr: ''
    })

    const submit = (e) => {
        e.preventDefault()
        if (validform) {
            validform()
            console.log('sdhglka');
        } else {
            console.log('Here is an error');
        }

    }

    const validform = () => {
        setErrField({
            mobileErr: '',
            addressErr: '',
            interestErr: ''
        })
        let formIsValid = true;
        if (mobile === "") {
            formIsValid = false;
            setErrField(pre => ({
                ...pre, mobileErr: 'Please Enter Your Mobile no.'
            }))
        }
        if (address === "") {
            formIsValid = false;
            setErrField(pre => ({
                ...pre, addressErr: 'Please Enter Your  Address correctly'
            }))
        }
        if (interest === "") {
            formIsValid = false;
            setErrField(pre => ({
                ...pre, interestErr: 'Please Enter Your Interest'
            }))
        }
        return formIsValid;
    }

    return (
        <Container>
            <Form onSubmit={submit}>
                <H3>Submit Your Details</H3>
                <InputDiv>
                    <Label>Mobile No. :</Label>
                    <Input
                        type='text'
                        placeholder='Enter  your contact Number'
                        onChange={(e) => setMobile(e.target.value)}
                    />
                    {
                        errField.mobileErr.length > 0 && <ErrorField><ExclamationCircleOutlined />&nbsp; {errField.mobileErr} !</ErrorField>
                    }
                </InputDiv>
                <InputDiv>
                    <Label>Residential Address :</Label>
                    <Input
                        type='text'
                        placeholder='eg., J-16B Lajpat Nagar , New Delhi '
                        onChange={(e) => setAddress(e.target.value)}
                    />
                    {
                        errField.addressErr.length > 0 && <ErrorField> <ExclamationCircleOutlined /> &nbsp; {errField.addressErr} !</ErrorField>
                    }
                </InputDiv>
                <InputDiv>
                    <Label>Interested in learning :</Label>
                    <Input
                        type='text'
                        placeholder='eg., Drums , Guitar , etc. '
                        onChange={(e) => setInterest(e.target.value)}
                    />
                    {
                        errField.interestErr.length > 0 && <ErrorField> <ExclamationCircleOutlined />&nbsp;{errField.interestErr} !</ErrorField>
                    }
                </InputDiv>
                <InputDiv>
                    <Label>Any other request :</Label>
                    <TextArea
                        placeholder='If any other request write here.....'
                        onChange={(e) => setQuery(e.target.value)}
                    ></TextArea>
                </InputDiv>
                <InputDiv>
                    <Submit type='submit'>submit</Submit>
                </InputDiv>
                <BackBtn onClick={() => setShowPopUp(false)}><ArrowLeftOutlined /></BackBtn>
            </Form>
        </Container>
    )
}

const Container = styled.div`
position:fixed;
top:0;
bottom:0;
left:0;
right:0;
height:100vh;
width:100%;
background:white;
opacity:1;
z-index:1000;
display:flex;
align-items:center;
justify-content:center;
color:black;
font-family: 'Baloo 2', cursive;
animation: fade 700ms linear  ;
`
const Form = styled.form`
width:45%;
height:85vh;
background-color:#fe0049;
display:flex;
flex-direction:column;
align-items:center;
justify-content:space-evenly;
position:relative;
`
const BackBtn = styled.div`
position:absolute;
top:1rem;
right:1rem;
font-size:3rem;
height:4rem;
width:5rem;
background-color:white;
display:flex;
align-items:center;
justify-content:center;
border-radius:3px;
cursor:pointer;
`

const H3 = styled.h3`
font-size:2.5rem;
text-align:center;
color:white;
text-transform:uppercase;
border-bottom:2px solid white;
`


const InputDiv = styled.div`
width:80%;
height:auto;
display:flex;
flex-direction:column;
align-items:flex-start;
justify-content:center;
`
const Label = styled.label`
font-size:1.7rem;
color:white;
font-weight:400;
`
const Input = styled.input`
width:100%;
background-color:white;
font-size:1.6rem;
outline:none;
border:1px solid black;
padding:0.5rem;
color:black;
height:4rem;
border-radius:5px;
`

const ErrorField = styled.span`
font-size:1.6rem;
color:yellow;
margin-bottom:-1rem;
`


const TextArea = styled.textarea`
width:100%;
resize:none;
height:15vh;
font-size:1.6rem;
outline:none;
border-radius:5px;
padding:0.5rem;
`

const Submit = styled.button`
width:100%;
height:4rem;
background-color:teal;
cursor:pointer;
text-transform:uppercase;
border:none;
border-radius:5px;
color:white;
font-weight:400;
font-size:2rem;
`

export default GetInTouch
