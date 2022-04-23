import React from 'react'
import styled from "styled-components"

const Login = () => {
  return (
    <Container>
        <Wrapper>
            <Title>SIGN IN</Title>
            <Form>
                <Input placeholder="username"/>
                <Input placeholder="password "/>
               
                <Button>LOGIN</Button>
                <Link>DO NOT REMEMBER THE PASSWORD?</Link>
                <Link>CREATE A NEW ACCOUNT</Link>
            </Form>
        </Wrapper>
    </Container>
  )
}



const Container = styled.div`
    width: 100vw;
    height:100vh;
    background: linear-gradient(
        rgba(255,255,255,0.5),
        rgba(255,255,255,0.5)),
    url("https://media.istockphoto.com/photos/two-young-girl-friends-in-safety-medical-masks-during-shopping-in-the-picture-id1289001850?b=1&k=20&m=1289001850&s=170667a&w=0&h=C_ozZ6wIUEWl0Coj4UBYOj-Wjv3zsu7FB6Z6vCA7-aQ=") center;
    background-size:cover;
    display: flex;
    align-items: center;
    justify-content: center;
    
`

const Wrapper = styled.div`
    padding: 20px;
    width:25%;
    background-color:white;
`;

const Form = styled.form`
   display:flex;
   flex-direction:column;

`

const Title = styled.h1`
     font-size:24px;
    font-weight:300;
`

const Input = styled.input`
    flex:1;
    min-width:40%;
    margin:10px 0;
    padding:10px;
`

const Button  = styled.button`
    width:40%;
    border:none;
    padding:15px 20px;
    background-color:teal;
    color:white;
    margin-bottom:10px;
`

const Link = styled.a`
  margin:5px 0px;
  font-size:12px;
  text-decoration: underline;
  cursor:pointer;
`

export default Login