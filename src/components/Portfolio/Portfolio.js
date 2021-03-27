
function Portfolio() {

  return (
    <section className="portfolio">
      <h2 className="portfolio__heading">Портфолио</h2>
      <div className="portfolio__links">
        <div className="portfolio__container">
          <a className="portfolio__app-type" href="">Статичный сайт</a>
          <a href=""><div className="portfolio__img-link"></div></a>
        </div>
        <div className="portfolio__container">
          <a className="portfolio__app-type" href="">Адаптивный сайт</a>
          <a href=""><div className="portfolio__img-link"></div></a>
        </div>
        <div className="portfolio__container">
          <a className="portfolio__app-type">Одностраничное приложение</a>
          <a href=""><div className="portfolio__img-link"></div></a>
        </div>
      </div>

    </section>

  )
}

export default Portfolio;
