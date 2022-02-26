import React from 'react';
import styled from 'styled-components';
import Footer from '../components/Footer';
import FormsLogin from '../components/FormsLogin';
import Header from '../components/Header';

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
  position: relative;
  z-index: 1;
  background: #FFFFFF;
  border-radius: 10px;
  max-width: 330px;
  width: 100%;
  margin: 0 auto 100px;
  padding: 45px;
  text-align: center;
`;

function Login() {
  return (
    <BigContainer>
      <Header />
      <MainContainer>
        <h1>Login</h1>
        <FormsLogin />
      </MainContainer>
      <Footer />
    </BigContainer>
  );
}

export default Login;
