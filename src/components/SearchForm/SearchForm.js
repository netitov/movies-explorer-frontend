function SearchForm() {

  return (
    <section className="serachForm">
      <form className="serachForm__form">
        <input className="serachForm__input" type="text" placeholder="Фильмы"></input>
        <button className="serachForm__btn link">Найти</button>
      </form>

      <div className="serachForm__filter">
        <label class="switch">
          <input type="checkbox"></input>
          <span class="slider round"></span>
        </label>
        <p className="serachForm__filter-name">Короткометражки</p>
      </div>

    </section>
  )
}

export default SearchForm;
