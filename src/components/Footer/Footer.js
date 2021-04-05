import { Link, Route } from 'react-router-dom';

function Footer() {

  return (
    <Route exact path={['/saved-movies', '/movies', '/']}>
    <footer className="footer">
      <h3 className="footer__heading">Учебный проект Яндекс.Практикум х BeatFilm.</h3>
      <div className="footer__container">
        <p className="footer__copyright">&copy;2021</p>
        <nav>
          <ul className="footer__nav">
            <li className="footer__list">
              <a className="footer__link link" href="https://praktikum.yandex.ru/">Яндекс.Практикум</a>
            </li>
            <li className="footer__list">
              <a className="footer__link link" href="https://github.com/T-Nick-13">Github</a>
            </li>
            <li className="footer__list">
              <a className="footer__link link" href="https://www.facebook.com/">Facebook</a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
    </Route>
  )
}

export default Footer;
