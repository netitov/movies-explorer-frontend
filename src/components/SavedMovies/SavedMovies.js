import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function SavedMovies(props) {

  return (
    <div className="movies">
      <SearchForm
        searchMovie={props.searchMovie}
        handleChangeSwitcher={props.handleChangeSwitcher}
        shortMovie={props.shortMovie}
        setPreload={props.setPreload}
        showNoResult={props.showNoResult}
        />
      <MoviesCardList
        movies={props.movies}
        inSearch={props.inSearch}
        foundMovies={props.foundMovies}
        noResult={props.noResult}
        onCardLike={props.onCardLike}
        savedMovies={props.savedMovies}
        isSaved={props.isSaved}
        savedFilms={props.savedFilms}
        onCardLikeDelete={props.onCardLikeDelete}
        inSaved={props.inSaved}
        />
    </div>
  )
}

export default SavedMovies;
