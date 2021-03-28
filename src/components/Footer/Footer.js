function Footer() {

  return (
    <footer className="footer">
      <h3 className="footer__heading">Учебный проект Яндекс.Практикум х BeatFilm.</h3>
      <div className="footer__container">
        <p className="footer__copyright">&copy;2021</p>
        <nav>
          <ul className="footer__nav">
            <li>
              <a className="footer__link" href="">Яндекс.Практикум</a>
            </li>
            <li>
              <a className="footer__link" href="">Github</a>
            </li>
            <li>
              <a className="footer__link" href="">Facebook</a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  )
}

export default Footer;
