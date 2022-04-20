import React from 'react'
import {RiSendPlane2Fill} from "react-icons/ri"
import styled from 'styled-components'

function Newsletter() {
  return (
        <Container>
            <Title>Newsletter</Title>
            <Desc>Description</Desc>
            <InputContainer>
                <Input placeholder='Your email'/>
                <Button>
                    <RiSendPlane2Fill />
                </Button>
            </InputContainer>
        </Container>
  )
}


const Container = styled.div`
    height:60vh;
    background-color:#fcf5f5;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
`

const Title = styled.h1`
    font-size:70px;
`

const Desc = styled.div`
    font-size:24px;
    font-weight:300;
    margin-bottom:20px;
`

const InputContainer = styled.div`
    width: 50%;
    height:40px;
    background-color:white;
    display:flex;
    justify-content:space-between;
    border:1px solid lightgrey;
`

const Input = styled.input`
    border:none;
    flex:8;
    padding-left:20px;
`

const Button = styled.button`
    flex:1;
    background-color:teal;
    color:white;
    border:none;
`

export default Newsletter