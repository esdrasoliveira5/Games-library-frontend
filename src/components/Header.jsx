import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import gamesContext from '../context/AppContext';
import Logo from '../img/Logo2.png';

const HeaderS = styled.header`
@media screen and (max-width: 768px) {
  flex-direction: column;
  height: 10%;
}
padding: 10px;
display: flex;
justify-content: space-between;
align-items: center;
position: fixed;
top: 0;
width: 100%;
height: 60px;
z-index: 1;
background-color: #161A1D;
color: #F5F3F4;
`;

const NavS = styled.nav`
  a {
    margin: 10px;
    text-decoration: none;
    text-transform: uppercase;
    outline: 0;
    background: #E5383B;
    width: 100%;
    border: 0;
    border-radius: 5px;
    padding: 10px;
    color: #FFFFFF;
    font-size: 14px;
    -webkit-transition: all 0.3 ease;
    transition: all 0.3 ease;
    cursor: pointer;
  }
  a:hover {
    background-color: #660708;
  }
`;

function Header() {
  const { logged } = useContext(gamesContext);
  return (
    <HeaderS>
      <Link to="/home">
        <img src={Logo} alt="logo" width="300px" />
      </Link>
      {
        !logged
          ? (
            <NavS>
              <Link to="/">
                Login
              </Link>
            </NavS>
          )
          : (
            <NavS>
              <Link to="profile">
                Perfil
              </Link>
              <Link to="logout">
                Logout
              </Link>
            </NavS>
          )
      }
    </HeaderS>
  );
}

export default Header;
