import { Link } from 'react-router-dom';
import React from 'react';

function HamburgerMenu() {

  const [openedMenu, setOpenMenu] = React.useState(false);


  const menuClass = openedMenu ? "menu" : "menu_none";
  const menuBtnClass = openedMenu ? "menuBurger menuBurger_closed" : "menuBurger";
  const overlayClass = openedMenu ? "wrapper" : "wrapper_closed";

  //Попробовать задать изначальный класс со свойством. В итогом классе оставить свойство только в транзите

  function handleMenuClick() {
    openedMenu ? setOpenMenu(false) : setOpenMenu(true);
  }

  return (

      <div className="burgMenu">
        <div className={menuBtnClass} onClick={handleMenuClick}>
        </div>
        <div className={overlayClass}></div>
        <ul className={menuClass} >
          <li className="menu__li"><Link to="/" className="menu__li" onClick={handleMenuClick}>Главная</Link></li>
          <li className="menu__li"><Link to="/movies" className="menu__li" onClick={handleMenuClick}>Фильмы</Link></li>
          <li className="menu__li"><Link to="/saved-movies" className="menu__li" onClick={handleMenuClick}>Сохраненные фильмы</Link></li>
          <li className="menu__li"><Link to="/profile" className="menu__li" onClick={handleMenuClick}>Аккаунт</Link></li>
        </ul>
       </div>

  )
}

export default HamburgerMenu;
