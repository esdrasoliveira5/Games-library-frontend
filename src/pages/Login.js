import React from 'react';
import styled from 'styled-components';
import Footer from '../components/Footer';
import FormsLogin from '../components/FormsLogin';
import Header from '../components/Header';
import Battlefield from '../img/Battlefield.png';

const BigContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  min-height: 100vh;
  background: linear-gradient(90deg, #0B090A 0%, #660708 100%);
`;
const MainContainer = styled.main`
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
  background: #FFFFFF;
  border-radius: 10px;
  max-width: 350px;
  width: 100%;
  margin: 0 auto 100px;
  padding: 45px;
  text-align: center;
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
`;
const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`;

function Login() {
  return (
    <BigContainer>
      <Header />
      <Container>
        <img src={Battlefield} alt="" height="800px" />
        <MainContainer>
          <h1>Login</h1>
          <FormsLogin />
        </MainContainer>
      </Container>
      <Footer />
    </BigContainer>
  );
}

export default Login;
