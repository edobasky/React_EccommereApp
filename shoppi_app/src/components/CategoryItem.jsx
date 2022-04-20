import React from 'react'
import styled from 'styled-components'

const CategoryItem = ({item}) => {
  return (
    <Container>
        <Image src={item.img}/>
        <Info>
            <Title>{item.title}</Title>
            <Button>SHOP NOW</Button>
        </Info>
    </Container>
  )
}


// **************styled components*************

const Container = styled.div`
    flex:1;
    margin:5px;
    height:90vh;
    position:relative;
`;
const Image = styled.img`
    width:100%;
    height:100%;
    object-fit:cover;
`;
const Info = styled.div`
    position:absolute;
    width:100%;
    height:100%;
    left:0;
    top:0;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    
`;
const Title = styled.h1`
    color:white;
    margin-bottom:20px;
    
`;
const Button = styled.button`
    border:none;
    padding:20px;
    background-color:white;
    color:gray;
    font-weight:600;
`;

export default CategoryItem