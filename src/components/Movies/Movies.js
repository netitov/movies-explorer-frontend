import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function Movies(props) {

  return (
    <div className="movies">
      <SearchForm
        searchMovie={props.searchMovie}
        handleChangeSwitcher={props.handleChangeSwitcher}
        shortMovie={props.shortMovie}
        setPreload={props.setPreload}
        />
      <MoviesCardList
        movies={props.movies}
        inSearch={props.inSearch}  />
    </div>
  )
}

export default Movies;
