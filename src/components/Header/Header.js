import { Link } from 'react-router-dom';
import logoPath from '../../images/logo.svg';

function Header(props) {

  return (
    <header className="header">
      <div className="header__container">
        <Link to="/">
          <img className="header__logo link" src={logoPath} alt="Лого Movies-explorer"/>
        </Link>
        <div className="header__nav-container">
          <nav className="header__nav">
            <ul className="header__nav-ul">
              <Link className={`header__nav-list header__nav-list_bold  link ${props.isPadding}`} to={props.headerRoute}>
                <li>{props.headerLink}</li>
              </Link>
              <Link className={`header__nav-list link ${props.isVisible} ${props.isPadding}`}  to={props.headerRoute2}>
                <li>{props.headerLink2}</li>
              </Link>
            </ul>
          </nav>
          <Link className="header__link link" to={props.headerRoute3}>
            <div className={props.btnClass}> {/* header__account-btn */} {/* header__account-btn_enter */}
              <p className={props.btnSignClass}>{props.headerLink3}</p> {/* header__account-text header__nav-list_bold */}{/* header__btn */}
              <div className={props.accountLogoClass}></div> {/* header__account-logo */}
            </div>
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header;
