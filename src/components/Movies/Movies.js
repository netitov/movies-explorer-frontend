import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';

function Movies() {

  return (
    <div className="movies">
      <Header
        headerLink="Фильмы"
        headerRoute="/movies"
        headerLink2="Сохранённые фильмы"
        headerRoute2="/saved-movies"
        headerLink3="Аккаунт"
        btnClass="header__account-btn"
        btnSignClass="header__account-text header__nav-list_bold"
        headerRoute3="/profile"
        accountLogoClass="header__account-logo"
        isPadding="header__nav-list_padding_on"
      />
      <SearchForm />
    </div>
  )
}

export default Movies;
