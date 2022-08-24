import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavBar = () => {

return (

    <NavBarContainer>
        <SiteHeading>CO2 CALCULATOR</SiteHeading>
          {/* <Lottie options={defaultOptions} height={200} width={200} /> */}
        <NavLinks>
          <Link to="/" style={linkStyle}><LinkStyle>Quiz</LinkStyle></Link>
          <Link to="/table" style={linkStyle}><LinkStyle>Table</LinkStyle></Link>
        </NavLinks>
    </NavBarContainer>
);
}

export default NavBar;

const linkStyle = {
  "font-size": "30px",
  margin: "1rem",
  textDecoration: "none",
  color: 'white',
  
  
};

const LinkStyle = styled.p`
  display: flex;
  flex-direction: row;
:hover {
    color: lightblue;
  }
`



const NavBarContainer = styled.nav`
  padding-left: 50px;
  padding-right: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 120px;
  background-color: #0A1128;
  border-bottom: solid black 3px;
  flex-direction: row;


`
const NavLinks = styled.ul`
  display: flex;
  list-style-type: none;
  flex-direction: row;


`

const SiteHeading = styled.h1`
  color: white ;
  letter-spacing: 3px;
  font-family: 'Covered By Your Grace';
  font-family: 'Rubik Dirt';
`

