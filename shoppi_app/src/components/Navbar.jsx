import React from 'react'
import styled from "styled-components";
import { FaSearch} from 'react-icons/fa'
import {RiShoppingCart2Fill} from 'react-icons/ri'





const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input/>
            <FaSearch style={{color:"gray",fontSize:16}} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>UVIE.</Logo>
        </Center>
        <Right>

        <MenuItem>REGISTER</MenuItem>
        <MenuItem>SIGN IN</MenuItem>

        <MenuItem>
        
        <RiShoppingCart2Fill />
        </MenuItem>
        {/* <Cart>4</Cart> */}
        </Right>
      </Wrapper>
    </Container>
  )
}



//******************** */ Styling *************** 
const Container = styled.div`
  height: 60px;
`;

const Wrapper = styled.div`
  padding : 10px 20px;
  display:flex;
  justify-content:space-between;
  align-items:center;
`;

const Left = styled.div`
  flex:1;
  display: flex;
  align-items:center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
`

const SearchContainer = styled.div`
  border: 0.5px solid lightgrey;
  display:flex;
  align-items:center;
  margin-left: 25px;
  padding:5px;
`

const Input = styled.input`
  border:none;
`


const Center = styled.div`
  flex:1;
  text-align:center;
`;

const Logo = styled.div`
  font-weight:bold;
`


const Right = styled.div`
  flex:1;
  display:flex;
  align-items:center;
  justify-content:flex-end;
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor:pointer;
  margin-left:25px;
`

// const Cart = styled.div`
//   font-size:10px;
//   padding:0;
//   margin-bottom:10px;

// `


export default Navbar