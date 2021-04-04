import { Link, Route } from 'react-router-dom';
import logoPath from '../../images/logo.svg';

function Header() {

  return (
    <>
    <Route exact path="/">
      <header className="header">
        <div className="header__container">
          <Link to="/">
            <img className="header__logo link" src={logoPath} alt="Лого Movies-explorer"/>
          </Link>
          <div className="header__nav-container">
            <nav className="header__nav">
              <ul className="header__nav-ul">
                <Link className="header__nav-list header__nav-list_bold  link" to="/signup">
                  <li>Регистрация</li>
                </Link>
              </ul>
            </nav>
            <Link className="header__link link" to="/signin">
              <div className="header__account-btn_enter">
                <p className="header__btn">Войти</p>
              </div>
            </Link>
          </div>
        </div>
      </header>
    </Route>

    <Route exact path={['/saved-movies', '/movies', '/profile']}>
      <header className="header">
        <div className="header__container">
          <Link to="/">
            <img className="header__logo link" src={logoPath} alt="Лого Movies-explorer"/>
          </Link>
          <div className="header__nav-container header__nav-container_visible_none">
            <nav className="header__nav">
              <ul className="header__nav-ul">
                <Link className="header__nav-list header__nav-list_bold header__nav-list_padding_on link" to="/movies">
                  <li>Фильмы</li>
                </Link>
                <Link className="header__nav-list link" to="/saved-movies">
                  <li>Сохранённые фильмы</li>
                </Link>
              </ul>
            </nav>
            <Link className="header__link link" to="/profile">
              <div className="header__account-btn">
                <p className="header__account-text header__nav-list_bold">Аккаунт</p>
                <div className="header__account-logo"></div>
              </div>
            </Link>
          </div>

          <div className="hamburger-menu">
            <input id="menu__toggle" type="checkbox" />
            <label className="menu__btn link" for="menu__toggle">
              <span></span>
            </label>

            <ul className="menu__box">
              <div>
              <Link className="menu__item link" to="/">
                <li>Главная</li>
              </Link>
              <Link className="menu__item link" to="/movies">
                <li>Фильмы</li>
              </Link>
              <Link className="menu__item link" to="/saved-movies">
                <li>Сохранённые фильмы</li>
              </Link>
              </div>
              <Link className="header__link link" to="/profile">
                <li className="header__account-btn header__account-btn_menu">
                  <p className="header__account-text header__nav-list_bold">Аккаунт</p>
                  <div className="header__account-logo"></div>
                </li>
              </Link>
            </ul>


          </div>


        </div>
      </header>
    </Route>





    </>
  )
}

export default Header;
