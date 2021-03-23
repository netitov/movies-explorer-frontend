function Techs() {


  return (
    <section className="techs">
      <h2 className="techs__headng aboutProject__heading">Технологии</h2>
      <h3 className="techs__caption promo__heading">7 технологий</h3>
      <p className="techs__description">На курсе веб-разработки мы освоили технологии,
        которые применили в дипломном проекте.</p>
      <ul className="techs__ul navTab__ul">
        <a className="techs__link navTab__link" href="https://html.spec.whatwg.org/">
          <li className="navTab__list">HTML</li>
        </a>
        <a className="techs__link navTab__link" href="https://www.w3.org/Style/CSS/specs.ru.html">
          <li className="navTab__list">CSS</li>
        </a>
        <a className="techs__link navTab__link" href="https://developer.mozilla.org/ru/docs/Web/JavaScript">
          <li className="navTab__list">JS</li>
        </a>
        <a className="techs__link navTab__link" href="https://ru.reactjs.org/">
          <li className="navTab__list">React</li>
        </a>
        <a className="techs__link navTab__link" href="https://git-scm.com/docs">
          <li className="navTab__list">Git</li>
        </a>
        <a className="techs__link navTab__link" href="https://expressjs.com/ru/">
          <li className="navTab__list">Express.js</li>
        </a>
        <a className="techs__link navTab__link" href="https://www.mongodb.com/">
          <li className="navTab__list">mongoDB</li>
        </a>
      </ul>
    </section>
  )
}

export default Techs;
