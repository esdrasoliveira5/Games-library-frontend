import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import gamesContext from '../context/AppContext';
import Logo from '../img/Logo2.png';

const HeaderS = styled.header`
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 10;
  background-color: #161A1D;
  color: #F5F3F4;
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
  img {
    width: 200px;
  }
`;

const NavS = styled.nav`
  a {
    margin: 10px;
    text-decoration: none;
    text-transform: uppercase;
    outline: 0;
    background: #E5383B;
    width: 80px;
    height: 50px;
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
  button {
    margin: 10px;
    text-decoration: none;
    text-transform: uppercase;
    outline: 0;
    background: #E5383B;
    width: 80px;
    height: 40px;
    border: 0;
    border-radius: 5px;
    padding: 10px;
    color: #FFFFFF;
    font-size: 14px;
    -webkit-transition: all 0.3 ease;
    transition: all 0.3 ease;
    cursor: pointer;
  }
  button:hover {
    background-color: #660708;
  }
`;

function Header() {
  const { logged, setLogged } = useContext(gamesContext);

  function handleSignOff() {
    localStorage.removeItem('game-library');
    setLogged(false);
    window.location.reload();
  }
  return (
    <HeaderS>
      <Link to="/home">
        <img src={Logo} alt="logo" />
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
              <button
                type="button"
                onClick={handleSignOff}
              >
                Logout
              </button>
            </NavS>
          )
      }
    </HeaderS>
  );
}

export default Header;
