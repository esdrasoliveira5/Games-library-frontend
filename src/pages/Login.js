import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Footer from '../components/Footer';
import FormsLogin from '../components/FormsLogin';
import Header from '../components/Header';
import gamesContext from '../context/AppContext';
import Battlefield from '../img/Battlefield.png';
import { getUser } from '../services/gameLibraryApi';
import Logo from '../img/Logo3.png';

const BigContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  min-height: 100vh;
  background: linear-gradient(90deg, #0B090A 0%, #660708 100%);
`;
const Container = styled.main`
  @media screen and (max-width: 350px) {
    position: absolute;
    width: 100%;
  }
  @media screen and (max-width: 1100px) {
    position: absolute;
    width: 70%;
  }
  position: relative;
  z-index: 1;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(8px);
  border-radius: 10px;
  max-width: 350px;
  width: 100%;
  margin: 0 auto 100px;
  padding: 45px;
  text-align: center;
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
  img {
    width: 100%;
  }
`;
const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`;

function Login() {
  const navigate = useNavigate();
  const { logged, setLogged } = useContext(gamesContext);
  useEffect(() => {
    const userLogged = async () => {
      const localResponse = JSON.parse(localStorage.getItem('game-library'));
      if (localResponse !== null) {
        const { token } = localResponse;
        const response = await getUser(token);
        if (!response.error) {
          setLogged(true);
          navigate('/home');
        } else {
          setLogged(false);
        }
      } else {
        setLogged(false);
      }
    };
    userLogged();
  }, [logged]);
  return (
    <BigContainer>
      <Header />
      {
        !logged ? (
          <MainContainer>
            <img src={Battlefield} alt="" height="800px" />
            <Container>
              <img src={Logo} alt="logo" width="300px" />
              <FormsLogin />
            </Container>
          </MainContainer>
        ) : ''

      }

      <Footer />
    </BigContainer>
  );
}

export default Login;
