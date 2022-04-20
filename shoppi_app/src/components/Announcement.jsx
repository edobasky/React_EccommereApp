import styled from "styled-components"
import React from 'react'

 


export const Announcement = () => {
  return (
    <Container>
        Supper Deal! Free Shipping on Orders Over $50
    </Container>
  )
}


// *****************styling*************

const Container = styled.div`
    height:30px;
    background-color: teal;
    color:white;
    display:flex;
    justify-content:center;
    align-items:center;
    font-size:14px;
    font-weight:bolder;
`


