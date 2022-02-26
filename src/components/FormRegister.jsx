import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import registerValues from '../helpers/registerValues';
import { createUser } from '../services/gameLibraryApi';
import Avatar from './Avatar';

const FormRegisters = styled.form`
  display: flex;
  flex-direction: column;
  input {
    outline: 0;
    background: #f2f2f2;
    width: 100%;
    border: 0;
    border-radius: 5px;
    margin: 0 0 15px;
    padding: 15px;
    box-sizing: border-box;
    font-size: 14px;
  }
  input:focus {
    background: #dbdbdb;
  }
`;
const ButtonRed = styled.button`
    outline: 0;
    background: #E5383B;
    border: 0;
    border-radius: 5px;
  button {
    text-transform: uppercase;
    outline: 0;
    background: #E5383B;
    width: 100%;
    border: 0;
    border-radius: 5px;
    padding: 15px;
    color: #FFFFFF;
    font-size: 14px;
    -webkit-transition: all 0.3 ease;
    transition: all 0.3 ease;
    cursor: pointer;
  }
`;

function FormRegister() {
  const navigate = useNavigate();
  const [registerInfo, setRegisterInfo] = useState({
    name: '',
    lastName: '',
    email: '',
    password: '',
    passwordConfirm: '',
    picture: 'masterchief',
  });

  function handleInfo({ target }) {
    const { name, value } = target;
    setRegisterInfo({
      ...registerInfo,
      [name]: value,
    });
  }
  async function sendInfo() {
    const validation = registerValues(registerInfo);
    if (validation === 'Criando Usuario') {
      const result = await createUser(registerInfo);
      if (result.token) {
        global.alert('Usuario Criado');
        navigate('/');
      } else {
        global.alert(result.error);
      }
    } else {
      global.alert(validation);
    }
  }

  const {
    name, lastName, email, password, passwordConfirm,
  } = registerInfo;
  return (
    <FormRegisters>
      <Avatar />
      <label htmlFor="name">
        <input
          type="text"
          name="name"
          value={name}
          placeholder="Nome"
          onChange={(event) => handleInfo(event)}
        />
      </label>
      <label htmlFor="lastName">
        <input
          type="text"
          name="lastName"
          value={lastName}
          placeholder="Sobrenome"
          onChange={(event) => handleInfo(event)}
        />
      </label>
      <label htmlFor="email">
        <input
          type="text"
          name="email"
          value={email}
          placeholder="Email"
          onChange={(event) => handleInfo(event)}
        />
      </label>
      <label htmlFor="password">
        <input
          type="password"
          name="password"
          value={password}
          placeholder="Senha"
          onChange={(event) => handleInfo(event)}
        />
      </label>
      <label htmlFor="passwordConfirm">
        <input
          type="password"
          name="passwordConfirm"
          value={passwordConfirm}
          placeholder="Confirme a Senha"
          onChange={(event) => handleInfo(event)}
        />
      </label>
      <ButtonRed>
        <button
          type="button"
          onClick={sendInfo}
        >
          Salvar
        </button>
      </ButtonRed>
    </FormRegisters>
  );
}

export default FormRegister;
