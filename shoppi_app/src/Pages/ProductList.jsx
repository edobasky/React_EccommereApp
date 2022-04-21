import React from 'react'
import styled from "styled-components"
import { Announcement } from '../components/Announcement'
import Navbar from '../components/Navbar'
import {Products} from "../components/Products"
import NewsLetter from "../components/Newsletter"
import Footer from "../components/Footer"

export const ProductList = () => {
  return (
    <Container>
        <Navbar />
        <Announcement />
        <Title>Dresses</Title>
        <FilterContainer>
            <Filter>
            <FilterText>Filter Products:</FilterText>
            <Select>
                <Option disabled selected>Color</Option>
                <Option>White</Option>
                <Option>Black</Option>
                <Option>Red</Option>
                <Option>Blue</Option>
                <Option>Yellow</Option>
                <Option>Green</Option>
            </Select>

            <Select>
                <Option disabled selected>Size</Option>
                <Option>XS</Option>
                <Option>S</Option>
                <Option>M</Option>
                <Option>L</Option>
                <Option>XL</Option>
            </Select>
            </Filter>
            <Filter>
            <FilterText>Sort Products:</FilterText>
            <Select>
                <Option selected>Newest</Option>
                <Option selected>Price (asc)</Option>
                <Option selected>Price (desc)</Option>
            </Select>
            </Filter>
            
        </FilterContainer>
        <Products />
        <NewsLetter/>
        <Footer/>
    </Container>
  )
}


const Container = styled.div``

const Title = styled.h1`
    margin:20px;
`

const FilterContainer = styled.div`
    display:flex;
    justify-content:space-between;
`

const Filter = styled.div`
    margin:20px;
`

const FilterText = styled.div`
    font-size: 20px;
    font-weight: 600;
`

const Select = styled.select`
    padding:10px;
    margin-right:20px;
`
const Option = styled.option``
