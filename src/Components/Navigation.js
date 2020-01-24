import React from 'react';
import styled from 'styled-components';

const Nasa =styled.img`
width:100px;
height:100px;
position:relative;
right: 45%;
`;
const Background =styled.div`
background: #2a2727;
`

const NavBar = () => {

  return (
    <Background>
       <Nasa className = "nasaLogo" src = "/img/nasa-icon.png" alt = "Nasa's logo on the navigation bar."></Nasa>
    </Background>
  );
}

export default NavBar;
