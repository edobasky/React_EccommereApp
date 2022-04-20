import React, { useState } from 'react'
import styled from "styled-components"
import {AiFillCaretLeft,AiFillCaretRight} from "react-icons/ai"

import { sliderItems } from '../data'




const Slider = () => {
    const[slideIndex, setSlideIndex] = useState(0);

    const handleClick = (direction) => {
        if(direction === "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex-1 : 2)
        }else{
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0)
        }
    }
    return (
        <Container>
            <Arrow direction ="left" onClick={()=>handleClick("left")}>
                <AiFillCaretLeft />
            </Arrow>
            <Wrapper slideIndex={slideIndex}>
             {sliderItems.map((items) => (
                <Slide bg={items.bg} key={items.id}>
               <ImageContainer>
                    <Image src={items.img}/>
                </ImageContainer>
                <InfoContainer>
                    <Title>{items.title}</Title>
                    <Desc>{items.desc}</Desc>
                    <Button>SHOW NOW</Button>
                </InfoContainer>
               </Slide>
             ))}
              
            </Wrapper>
            <Arrow direction="right" onClick={()=>handleClick("right")}>
            <AiFillCaretRight />
            </Arrow>
        </Container>
    )
}




// ********styling**********

const Container = styled.div`
    width:100%;
    height:100vh;
    display:flex;
    ${'' /* background-color:coral; */}
    position:relative;
    overflow:hidden;
`

const Arrow = styled.div`
    width:50px;
    height:50px;
    background-color:#fff7f7;
    border-radius:50%;
    display:flex;
    align-items:center;
    justify-content:center;
    position:absolute;
    top:0;
    bottom:0;
    left:${props=> props.direction === "left" && "10px"};
    right:${props=> props.direction === "right" && "10px"};
    margin:auto;
    cursor:pointer;
    opacity:0.5; 
    z-index:2;
   
`

const Wrapper = styled.div`
    height:100%;
    display:flex;
    transform:translateX(${props => props.slideIndex * -100}vw);
    transition:all 1.5s ease;
`

const Slide=styled.div`
    display:flex;
    align-items:center;
    width:100vw;
    height:100vh;
    background-color:${prop => prop.bg};
`
const ImageContainer = styled.div`
    flex:1;
    height:100%;
`
const InfoContainer = styled.div`
    flex:1;
`
const Image = styled.img`
    height:80%;
`

const Title = styled.h1`
    font-size:78px;
`
const Desc = styled.p`
    margin:50px 0px;
    font-size:20px;
    font-weight:500;
    letter-spacing:3px;
`
const Button = styled.button`
    padding:10px;
    font-size:20px;
    background-color:transparent;
    cursor:pointer;
`

export default Slider