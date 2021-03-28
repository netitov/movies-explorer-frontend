import { Link } from 'react-router-dom';

//componenents


function NavTab() {

  return (
    <nav className="navTab">
      <ul className="navTab__ul">
        <a className="navTab__link link" href="#aboutProject"><li className="navTab__list">О проекте</li></a>
        <a className="navTab__link link" href="#techs"><li className="navTab__list">Технологии</li></a>
        <a className="navTab__link link" href="#aboutme"><li className="navTab__list">Студент</li></a>
      </ul>
    </nav>
  )
}

export default NavTab;
