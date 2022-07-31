import React from 'react'
import styled from "styled-components";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import RoomIcon from '@mui/icons-material/Room';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import {mobile} from "../responsive";


const Container = styled.div`
  display: flex;
  ${mobile( {flexDirection:'column'}  )}

`;

const Left = styled.div`
flex: 1;
display: flex;
flex-direction: column;
padding: 20px;



`;

const Logo =  styled.h1`
 
   
`;

const Desc =  styled.p`
margin : 20px 0px;
   
`;

const SocialContainer =  styled.div`
    display: flex;
   
`;

const SocialIcon =  styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
   background-color: #${props => props.color};
   display: flex;
   align-items: center;
   justify-content: center;
   margin-right: 20px;
`;

const Center = styled.div`
flex: 1;
padding: 20px;
${mobile( {display:'none'}  )}

`;
const Title = styled.h3`
    margin-bottom: 30px;
    

`;

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;

`;

const ListItem = styled.li`
   width: 50%;
   margin-bottom: 10px;
`;


const Right = styled.div`
flex: 1;
padding: 20px;
${mobile( {backgroundColor:'#fff8f8'}  )}

`;

const ContactItem = styled.div`
   margin-bottom: 20px;
   display: flex;
   align-items: center;

`;

const Payment = styled.img`
width: 50%;
`;

const Footer = () => {
  return (
    <Container>
       
       <Left>
             
             <Logo>Rawlo</Logo>
             <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime necessitatibus earum non! Ratione veniam neque, perspiciatis laboriosam, quae eum modi magni eaque voluptas ipsa, ab doloremque inventore exercitationem natus molestiae?
             Minus quas quibusdam tempora consectetur aliquid explicabo ea possimus sit voluptate nesciunt in aut hic qui impedit animi, voluptas similique voluptatem! Similique recusandae officia hic ipsam rerum. At, iure nulla?
             Dolorum culpa in placeat voluptatem officiis consectetur accusantium aliquam amet libero facere dolor optio tempore illo, reprehenderit praesentium, aperiam fuga dolorem recusandae dolores possimus. Voluptatem incidunt mollitia voluptatum laudantium eligendi.
             </Desc>
            <SocialContainer>
                  <SocialIcon color="3B5999"  >
                        <FacebookIcon />
                  </SocialIcon>

                  <SocialIcon color="E4405F" >
                        <InstagramIcon  />
                  </SocialIcon>

                  <SocialIcon color="55ACEE">
                        < TwitterIcon/>
                  </SocialIcon>

                  <SocialIcon color="E60023">
                        <PinterestIcon />
                  </SocialIcon>

            </SocialContainer>
        
        </Left>   
       <Center>
          <Title>Useful Links</Title>

          <List>
               <ListItem>Home</ListItem>
               <ListItem>Cart</ListItem>
               <ListItem>Man Fashion</ListItem>
               <ListItem>Women Fashion</ListItem>
               <ListItem>Accessories</ListItem>
               <ListItem>My Account</ListItem>
               <ListItem>Order Tracking</ListItem>
               <ListItem>Wishlist</ListItem>
               <ListItem>Terms</ListItem>
          </List>
       </Center>
       <Right>
              <Title>Contact </Title>
              <ContactItem>
                    <RoomIcon style={{marginRight:"10px"}} /> 622 SunBun, Mumbai West 400102
              </ContactItem>

              <ContactItem>
                    <PhoneIcon style={{marginRight:"10px"}} />  +91 88 500 16554
              </ContactItem>

              <ContactItem>
                    <EmailOutlinedIcon style={{marginRight:"10px"}} /> rokhirawlo@gmail.com
              </ContactItem>
               
            <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />   

        </Right>      


    </Container>
  )
}

export default Footer;