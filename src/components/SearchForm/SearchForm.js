import React from 'react';

function SearchForm(props) {

  const [movieName, setMovieName] = React.useState([]);

  function handleChangeName(e) {
    setMovieName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.setPreload();
    props.searchMovie(movieName);
    props.showNoResult();
  }


  return (
    <section className="serachForm">
      <form
        className="serachForm__form"
        onSubmit={handleSubmit}>
        <input
          className="serachForm__input"
          type="text"
          placeholder="Фильмы"
          required
          onChange={handleChangeName}
          value={movieName}>
        </input>
        <button className="serachForm__btn link" type="submit">Найти</button>
      </form>

      <div className="serachForm__filter">
        <label class="switch">
          <input
            type="checkbox"
            onChange={props.handleChangeSwitcher}
            checked={props.shortMovie}>
          </input>
          <span class="slider round"></span>
        </label>
        <p className="serachForm__filter-name">Короткометражки</p>
      </div>

    </section>
  )
}

export default SearchForm;
