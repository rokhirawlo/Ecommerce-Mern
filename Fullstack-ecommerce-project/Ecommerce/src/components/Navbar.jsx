import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import styled from "styled-components";
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import {mobile} from "../responsive";
import {useSelector,useDispatch} from "react-redux";
import {Link} from "react-router-dom";
import {logOut}  from "../redux/userRedux";
import {  useNavigate } from "react-router-dom";



const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;

    ${mobile({ padding: "10px 0px" })}


`; 

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`;

const Language = styled.span`
   font-size: 14px;
   cursor: pointer;
   ${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
   border: 0.5px solid lightgray;
   display: flex;
   align-items: center;
   margin-left: 25px;
   padding: 5px;
`;


const Input = styled.input`
  border: none; 
  outline: none;
  ${mobile({ width: "50px" })}
`;


const Center = styled.div`
    flex: 1;
    text-align: center;
`;


const  Logo = styled.h1`
font-weight: bold;
${mobile({ fontSize: "24px" })}
`;

const Right = styled.div`
     flex: 1;
     display: flex;
     align-items: center;
     justify-content: flex-end;
     ${mobile( { flex:2,   justifyContent:'center', marginLeft:'10px' }  )}
`;

const MenuItem = styled.div`
      font-size: 14px;
      cursor: pointer;
      margin-left: 25px;
      ${mobile( {fontSize:'12px'}  )}
`;

const Navbar = () => {
    
    const abc = useSelector(state=> state.cart.quantity);
    const user = useSelector(state => state.user.currentUser);
    const dispatch =  useDispatch();
    const navigate = useNavigate();
      
           
    const handleClick = () => {
        
        if(user) {
            dispatch(logOut());    
            navigate("/login");
        }
      
           
          
    }

  return (
    < Container>
        <Wrapper>
            <Left>
                <Language>Eng</Language>
                <SearchContainer>
                    <Input placeholder="Search"    />
                    <SearchIcon style={{color:"gray", fontsize: 16}} />
                </SearchContainer>
            </Left>
            <Center>  <Link to ="/" style={{textDecoration: 'none',color: "black"     }}><Logo>Rawlo Shop.</Logo></Link></Center>
            <Right>
            <Link to ="/register"  style={{textDecoration: 'none',color: "black"     }}><MenuItem>REGISTER</MenuItem> </Link>
                   <MenuItem onClick={handleClick}  > {user  && <>LOGOUT</> }   </MenuItem> 
                <MenuItem>{user?user.username.toUpperCase() : (<> <Link to={"/login"}  style ={{ textDecoration: "none", color: "black" }} >SIGN IN </Link></> )}</MenuItem>
               <Link to ="/cart">
                <MenuItem>
                <Badge badgeContent={abc} color="primary">
                   <ShoppingCartOutlinedIcon color="action" />
                   </Badge>
                </MenuItem>
                </Link>
            </Right>
                  

        </Wrapper>
         
   </ Container>
  )
}

export default Navbar