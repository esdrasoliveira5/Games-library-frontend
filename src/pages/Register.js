import React from 'react';
import styled from 'styled-components';
import Footer from '../components/Footer';
import FormRegister from '../components/FormRegister';
import Header from '../components/Header';

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
  display: flex;
  flex-direction: column;
  position: relative;
  background: #FFFFFF;
  border-radius: 10px;
  max-width: 500px;
  padding: 45px;
  text-align: center;
  width: 100%;
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
`;
function Register() {
  return (
    <BigContainer>
      <Header />
      <MainContainer>
        <h1>Cadastrar</h1>
        <FormRegister />
      </MainContainer>
      <Footer />
    </BigContainer>
  );
}

export default Register;
