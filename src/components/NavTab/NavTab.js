import { Link } from 'react-router-dom';

//componenents


function NavTab() {

  return (
    <nav className="navTab">
      <ul className="navTab__ul">
        <Link className="navTab__link" to="/movies"><li className="navTab__list">О проекте</li></Link>
        <Link className="navTab__link" to="/saved-movies"><li className="navTab__list">Технологии</li></Link>
        <Link className="navTab__link" to="/saved-movies"><li className="navTab__list">Студент</li></Link>
      </ul>
    </nav>
  )
}

export default NavTab;
