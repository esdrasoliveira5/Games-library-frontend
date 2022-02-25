import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import registerValues from '../helpers/registerValues';
import { createUser } from '../services/gameLibraryApi';

function Register() {
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
    }
  }

  const {
    name, lastName, email, password, passwordConfirm,
  } = registerInfo;
  return (
    <div>
      <Header />
      <div>Cadastrar</div>
      <form>
        <label htmlFor="name">
          Nome :
          <input
            type="text"
            name="name"
            value={name}
            onChange={(event) => handleInfo(event)}
          />
        </label>
        <label htmlFor="lastName">
          Sobrenome :
          <input
            type="text"
            name="lastName"
            value={lastName}
            onChange={(event) => handleInfo(event)}
          />
        </label>
        <label htmlFor="email">
          Email :
          <input
            type="text"
            name="email"
            value={email}
            onChange={(event) => handleInfo(event)}
          />
        </label>
        <label htmlFor="password">
          Senha :
          <input
            type="password"
            name="password"
            value={password}
            onChange={(event) => handleInfo(event)}
          />
        </label>
        <label htmlFor="passwordConfirm">
          Confirme a senha :
          <input
            type="password"
            name="passwordConfirm"
            value={passwordConfirm}
            onChange={(event) => handleInfo(event)}
          />
        </label>
      </form>
      <div>
        <button
          type="button"
          onClick={(event) => handleInfo(event)}
        >
          <img
            src="https://avatarfiles.alphacoders.com/183/183310.jpg"
            alt="avatar"
            width="100px"
            name="avatar"
            value="https://avatarfiles.alphacoders.com/183/183310.jpg"
          />
        </button>
        <button
          type="button"
          onClick={sendInfo}
        >
          Salvar
        </button>
      </div>
      <Footer />
    </div>
  );
}

export default Register;
