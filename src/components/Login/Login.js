import React from 'react';
import { Link } from 'react-router-dom';
import logoPath from '../../images/logo.svg';

function Login(props) {

  const [data, setData] = React.useState({
    email: '',
    password: ''
  })

  function handleChange(e) {
    const {name, value} = e.target;
    setData({
      ...data,
      [name]: value
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.handleLogin(data);
  }

  return(
    <div className="auth">
      <img className="auth__logo link" src={logoPath} alt="Лого Movies-explorer"/>
      <p className="auth__heading">Рады видеть!</p>
      <form className="auth__form" onSubmit={handleSubmit}>
        <label className="auth__label">E-mail
          <input id="username" className="auth__input" required name="email" type="email"
            value={data.email} onChange={handleChange} />
        </label>
        <label className="auth__label">Пароль
          <input id="password" className="auth__input" required name="password" type="password"
            value={data.password} onChange={handleChange} />
        </label>
        <button type="submit" className="auth__btn link">Войти</button>
        <p className="auth__text">Ещё не зарегистрированы?&nbsp;
          <Link to="/signup" className="auth__link link">Регистрация</Link>
        </p>
      </form>
    </div>
  )
}

export default Login;
