import React from 'react';
import { Link } from 'react-router-dom';
import logoPath from '../../images/logo.svg';

function Register(props) {

  const [error, setError] = React.useState({});
  const [isValid, setIsValid] = React.useState(false);
  const [data, setData] = React.useState({
    name: '',
    email: '',
    password: ''
  });

  const btnClass = `${
    isValid ? "auth__btn link" : "auth__btn auth__btn_inactive"}`;

  function handleChange(e) {
    const {name, value} = e.target;
    setData({
      ...data,
      [name]: value
    });
    setError({ ...error, [name]: e.target.validationMessage });
    setIsValid(e.target.closest("form").checkValidity());
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.onRegister(data)
  }

  return(
    <div className="auth">
      <img className="auth__logo link" src={logoPath} alt="Лого Movies-explorer"/>
      <p className="auth__heading">Добро пожаловать!</p>
      <form className="auth__form" onSubmit={handleSubmit} >
        <label className="auth__label">Имя
          <input id="name" className="auth__input" required name="name" type="string" onChange={handleChange}
             value={data.name} minLength="2" maxLength="30" />
        </label>
        <p className="profile__error profile__error-name">{error.name}</p>
        <label className="auth__label">E-mail
          <input id="username" className="auth__input" required name="email" type="email" onChange={handleChange}
             value={data.email} />
        </label>
        <p className="profile__error profile__error-name">{error.email}</p>
        <label className="auth__label">Пароль
          <input id="password" className="auth__input" required name="password" type="password" onChange={handleChange}
             value={data.password} minLength="2" />
        </label>
        <p className="profile__error profile__error-name">{error.password}</p>
        <button type="submit" className={btnClass}>Зарегистрироваться</button>
        <p className="auth__text">Уже зарегистрированы?&nbsp;
          <Link to="/signin" className="auth__link link">Войти</Link>
        </p>
      </form>
    </div>
  )
}

export default Register;
