import React from 'react'
import styled from 'styled-components'
import {BsFacebook, BsInstagram, BsTwitter,BsPinterest} from "react-icons/bs"
import {GrMail} from "react-icons/gr"
import {FaMapMarker, FaPhoneAlt} from "react-icons/fa"

export default function Footer() {
  return (
    <Container>
        <Left>
            <Logo>UVIE.</Logo>
            <Desc>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC, 
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more obscure
            Latin words, consectetur, from a Lorem Ipsum passage, and going through 
            the cites of the word in classical literature, discovered the undoubtable source
            </Desc>
            <SocialContainer>
                <SocialIcon color="3b5999">
                    <BsFacebook/>
                </SocialIcon>
                <SocialIcon color="e4405f">
                    <BsInstagram/>
                </SocialIcon>
                <SocialIcon color="55acee">
                    <BsTwitter/>
                </SocialIcon>
                <SocialIcon color="e60023">
                    <BsPinterest/>
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>
            <Title>Useful Links</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Man Fashion</ListItem>
                <ListItem>Woman Fashion</ListItem>
                <ListItem>Accessories</ListItem>
                <ListItem>MyAccount</ListItem>
                <ListItem>Order Tracking</ListItem>
                <ListItem>WishList</ListItem>
                <ListItem>WishList</ListItem>
                <ListItem>Terms</ListItem>
            </List>
        </Center>
        <Right>
            <Title>Contact</Title>
            <ContactItem><FaMapMarker style={{marginRight:"10px"}}/>737 Tropical, South island 464</ContactItem>
            <ContactItem><FaPhoneAlt style={{marginRight:"10px"}}/>+234 8168419911</ContactItem>
            <ContactItem><GrMail style={{marginRight:"10px"}}/>contact@uvie.dev</ContactItem>
            <Payment src="https://i.ibb.co/Qfvn4z6/payment.png"/>
        </Right>
    </Container>
  )
}





const Container = styled.div`
    display:flex;
`

const Left = styled.div`
    flex:1;
    display:flex;
    flex-direction:column;
    padding:20px;
`
const Logo = styled.h1``

const Desc = styled.p`
    margin:20px 0;
`

const SocialContainer = styled.div`
    display:flex;
`

const SocialIcon = styled.div`
    width:40px;
    height:40px;
    border-radius:50%;
    color:white;
    background-color:#${props => props.color};
    display:flex;
    justify-content:center;
    align-items:center;
    margin-right:20px;
`

const Center = styled.div`
    flex:1;
    padding:20px;
`

const Title = styled.h3`
    margin-bottom:30px;

`

const List = styled.ul`
    margin:0;
    padding:0;
    list-style:none;
    display:flex;
    flex-wrap:wrap;
`

const ListItem = styled.li`
    width:50%;
    margin-bottom:10px;
`

const Right = styled.div`
    flex:1;
    padding:20px;
`

const ContactItem = styled.div`
    margin-bottom:20px;
    display:flex;
    align-items: center;
`

const Payment = styled.img`
    width:50%;
`

