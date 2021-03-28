
function Portfolio() {

  return (
    <section className="portfolio">
      <h2 className="portfolio__heading">Портфолио</h2>
      <div className="portfolio__links">
        <div className="portfolio__container">
          <a className="portfolio__app-type link" href="https://t-nick-13.github.io/mesto/">Статичный сайт</a>
          <a href="https://t-nick-13.github.io/mesto/"><div className="portfolio__img-link link"></div></a>
        </div>
        <div className="portfolio__container">
          <a className="portfolio__app-type link" href="https://t-nick-13.github.io/russian-travel/">Адаптивный сайт</a>
          <a href="https://t-nick-13.github.io/russian-travel/"><div className="portfolio__img-link link"></div></a>
        </div>
        <div className="portfolio__container">
          <a href="https://ntitov.students.nomoredomains.monster/" className="portfolio__app-type link">Одностраничное приложение</a>
          <a href="https://ntitov.students.nomoredomains.monster/"><div className="portfolio__img-link link"></div></a>
        </div>
      </div>

    </section>

  )
}

export default Portfolio;
