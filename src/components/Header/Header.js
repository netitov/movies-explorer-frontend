import { Link } from 'react-router-dom';
import logoPath from '../../images/logo.svg';

function Header() {



  return (
    <header className="header">
      <div className="header__container">
        <Link to="/">
          <img className="header__logo" src={logoPath} alt="Лого Movies-explorer"/>
        </Link>
        <div className="header__nav-container">
          <nav className="header__nav">
            <ul className="header__nav-ul">
              <Link className="header__nav-list header__nav-list_bold" to="/movies"><li>Фильмы</li></Link>
              <Link className="header__nav-list" to="/saved-movies"><li>Сохранённые фильмы</li></Link>
            </ul>
          </nav>
          <Link className="header__link" to="/profile">
            <div className="header__account-btn">
              <p className="header__account-text header__nav-list_bold">Аккаунт</p>
              <div className="header__account-logo"></div>
            </div>
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header;
