import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Footer from '../components/Footer';
import FormRegister from '../components/FormRegister';
import Header from '../components/Header';
import gamesContext from '../context/AppContext';
import Mario from '../img/Mario.png';
import { getUser } from '../services/gameLibraryApi';

const BigContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  min-height: 100vh;
  background: linear-gradient(90deg, #E5383B 0%, #660708 100%);
`;

const MainContainer = styled.main`
  @media screen and (max-width: 1100px) {
    position: absolute;
    width: 70%;
  }
  @media screen and (max-width: 350px) {
    position: absolute;
    width: 100%;
  }
  z-index: 1;
  display: flex;
  flex-direction: column;
  position: relative;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(8px);
  border-radius: 10px;
  max-width: 500px;
  padding: 45px;
  text-align: center;
  width: 100%;
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
  overflow: scroll;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`;

function Register() {
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
            <Container>
              <MainContainer>
                <h1>Cadastrar</h1>
                <FormRegister />
              </MainContainer>
              <img src={Mario} alt="mario" height="900px" />
            </Container>
          )
            : ''
        }
      <Footer />
    </BigContainer>
  );
}

export default Register;
