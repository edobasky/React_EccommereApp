import React from 'react'
import styled from 'styled-components'
import Navbar from "../components/Navbar"
import {Announcement} from "../components/Announcement"
import Newsletter from "../components/Newsletter"
import Footer from "../components/Footer"
import { IoMdRemove} from "react-icons/io"
import {MdAdd} from "react-icons/md"

const Product = () => {
  return (
    <Container>
        <Navbar /> 
        <Announcement />
        <Wrapper>
            <ImageContainer>
                <Image src="https://image.made-in-china.com/2f0j00fUZYyIlmOGuR/Hot-2020-Latest-OEM-Fashion-Denim-Jeans-Women.jpg"/>
            </ImageContainer>
            <InfoContainer>
                <Title>Denim Jumpsuit</Title>
                <Desc>
                All the Lorem Ipsum generators on the Internet tend to repeat predefined 
                chunks as necessary, making this the first true generator on the Internet. 
                It uses a dictionary of over 200 Latin words, combined with a handful of model
                sentence structures, to generate Lorem Ipsum which looks reasonable.
                </Desc>
                <Price>$ 20</Price>
                <FilterContainer>
                    <Filter>
                        <FilterTitle>Color</FilterTitle>
                        <FilterColor color="black"/>
                        <FilterColor color="darkblue"/>
                        <FilterColor color="grey"/>
                        

                    </Filter>
                    <Filter>
                        <FilterTitle>Size</FilterTitle>
                        <FilterSize>
                        <FilterSizeOption>XS</FilterSizeOption>
                        <FilterSizeOption>S</FilterSizeOption>
                        <FilterSizeOption>M</FilterSizeOption>
                        <FilterSizeOption>L</FilterSizeOption>
                        <FilterSizeOption>XL</FilterSizeOption>
                        </FilterSize>
                        
                    </Filter>
                </FilterContainer>
                <AddContainer>
                    <AmountContainer>
                        <IoMdRemove />
                        <Amount>1</Amount>
                        <MdAdd />
                    </AmountContainer>
                    <Button>ADD TO CART</Button>
                </AddContainer>
            </InfoContainer>
        </Wrapper>
        <Newsletter />
        <Footer />
    </Container>
  )
}

const Container = styled.div``
const Wrapper = styled.div`
    padding:50px;
    display:flex;
`

const ImageContainer = styled.div`
    flex:1;
`

const Image = styled.img`
    width:100%;
    height:85vh;
    object-fit:cover;
`

const InfoContainer = styled.div`
    flex:1;
    padding:0px 50px;
`;

const Title = styled.h1`
    font-weight:200;
`;

const Desc = styled.p`
    margin:20px 0 ; 
`;

const Price = styled.span`
    font-weight:100;
    font-size:40px;
`;

const FilterContainer = styled.div`
    width:50%;
    margin:30px 0px;
    display:flex;
    justify-content:space-between;
`
const Filter = styled.div`
    display:flex;
    align-items:center;
`
const FilterTitle = styled.span`
    font-size:20px;
    font-weight:200;
`
const FilterColor = styled.div`
     width:20px;
     height:20px;
     border-radius:50%;
     background-color:${props=>props.color};
     margin:0 5px;
     cursor:pointer;
`
const FilterSize = styled.select`
    margin-left:  10px;
    padding:5px;
`
const FilterSizeOption = styled.option``
const AddContainer = styled.div`
    width:50%;
    display:flex;
    align-items:center;
    justify-content:space-between;
`
const AmountContainer = styled.div` 
    display:flex;
    justify-content:center;
    align-items:center;
    font-weight: 700;
`
const Amount = styled.span`
    width:30px;
    height:30px;
    border-radius:10px;
    border:1px solid teal;
    display:flex;
    justify-content:center;
    align-items:center;
    margin:0 5px;
`
const Button = styled.button`
    padding:10px;
    border:1px solid teal;
    background-color:white;
    cursor:pointer;
    font-weight:500;

    &:hover {
        background-color:#f8f4f4;
    }
`

export default Product