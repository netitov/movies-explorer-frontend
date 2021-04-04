import { Link } from 'react-router-dom';
import logoPath from '../../images/logo.svg';

function Login() {

  return(
    <div className="auth">
      <img className="auth__logo link" src={logoPath} alt="Лого Movies-explorer"/>
      <p className="auth__heading">Рады видеть!</p>
      <form className="auth__form">
        <label className="auth__label">E-mail
          <input id="username" className="auth__input" required name="email" type="email" />
        </label>
        <label className="auth__label">Пароль
          <input id="password" className="auth__input" required name="password" type="password" />
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
