import { Link } from 'react-router-dom';
import logoPath from '../../images/logo.svg';

function Register() {

  return(
    <div className="auth">
      <img className="auth__logo link" src={logoPath} alt="Лого Movies-explorer"/>
      <p className="auth__heading">Добро пожаловать!</p>
      <form className="auth__form">
        <label className="auth__label">Имя
          <input id="name" className="auth__input" required name="name" type="string" />
        </label>
        <label className="auth__label">E-mail
          <input id="username" className="auth__input" required name="email" type="email" />
        </label>
        <label className="auth__label">Пароль
          <input id="password" className="auth__input" required name="password" type="password" />
        </label>
        <button type="submit" className="auth__btn link">Зарегистрироваться</button>
        <p className="auth__text">Уже зарегистрированы?&nbsp;
          <Link to="/signin" className="auth__link link">Войти</Link>
        </p>
      </form>
    </div>
  )
}

export default Register;
