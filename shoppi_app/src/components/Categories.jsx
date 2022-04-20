import React from 'react'
import styled from 'styled-components'
import CategoryItem from './CategoryItem'
import { categories } from '../data'

const Categories = () => {
  return (
    <Container>
        {categories.map((item) =>(
            <CategoryItem item={item}/>
        ))}
    </Container>
  )
}



// *************styling***************

const Container = styled.div`
    display:flex;
    padding:20px;
    justify-content:space-between;
`

export default Categories