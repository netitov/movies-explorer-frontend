
import React from 'react';

//componenents
import Header from '../Header/Header';
import Promo from '../Promo/Promo';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';
import Portfolio from '../Portfolio/Portfolio';

function Main() {

  return (
    <main className="main">
      <Header
        headerLink="Регистрация"
        headerRoute="/signup"
        headerLink3="Войти"
        btnClass="header__account-btn_enter"
        btnSignClass="header__btn"
        headerRoute3="/signin"
      />
      <Promo />
      <AboutProject />
      <Techs />
      <AboutMe />
      <Portfolio />
    </main>
  )
}

export default Main;
