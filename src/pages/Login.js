import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import loginValidate from '../helpers/loginValidate';
import { loginUser } from '../services/gameLibraryApi';

function Login() {
  const navigate = useNavigate();
  const [loginValues, setLoginValues] = useState({
    email: '',
    password: '',
  });

  function handleLogin({ target }) {
    const { name, value } = target;
    setLoginValues({
      ...loginValues,
      [name]: value,
    });
  }

  async function sendLogin() {
    const validation = loginValidate(loginValues);
    if (validation === 'Logando Usuario') {
      const result = await loginUser(loginValues);
      if (result.token) {
        localStorage.setItem('game-library', JSON.stringify({ token: result.token }));
        global.alert('Bem Vindo!');
        navigate('/home');
      } else {
        global.alert(result.error);
      }
    }
  }

  const { email, password } = loginValues;
  return (
    <div>
      <Header />
      <div>
        <h1>Login</h1>
        <label htmlFor="email">
          <input
            name="email"
            type="text"
            value={email}
            onChange={(event) => handleLogin(event)}
          />
          email
        </label>
        <label htmlFor="password">
          <input
            name="password"
            type="text"
            value={password}
            onChange={(event) => handleLogin(event)}
          />
          password
        </label>
        <button
          type="button"
          onClick={sendLogin}
        >
          Login
        </button>
      </div>
      <Link to="/register">
        <button
          type="button"
        >
          Cadastrar

        </button>
      </Link>
      <Footer />
    </div>
  );
}

export default Login;
