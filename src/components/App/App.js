
import React from 'react';
import { Route, Switch } from 'react-router-dom';

//components
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies';
import Header from '../Header/Header';
import SavedMovies from '../SavedMovies/SavedMovies';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import NotFound from '../NotFound/NotFound';
import * as moviesApi from '../../utils/MoviesApi';
import ProtectedRoute from '../ProtectedRoute';
import Preloader from '../Preloader/Preloader';
import { SHORT_MOVIE_DRT } from '../../utils/config'


function App() {

  const [movies, setMovies] = React.useState([]);
  const [shortMovie, setShortMovie] = React.useState(false);
  const [inSearch, setInSearch] = React.useState(false);


  React.useEffect(() => {
    Promise.all([
      moviesApi.getInitialMovies()
    ])
    .then(([movies]) => {
      setMovies(movies)
    })
    .catch((err) => {
      console.log(err);
    })
  }, [])


  function searchMovie(movieName) {
    if (shortMovie) {
      const fountShortMovies = movies.filter((movie) => {
        return (
          movie.duration <= SHORT_MOVIE_DRT &&
          movie.nameRU.toLowerCase().includes(movieName.toLowerCase())
          )
      });
      setMovies(fountShortMovies)
    }
    else {
      const foundMovies = movies.filter((movie) => {
        return movie.nameRU.toLowerCase().includes(movieName.toLowerCase());
      });
      return setMovies(foundMovies)
    }
  }

  function handleChangeSwitcher() {
    setShortMovie(!shortMovie);
  }

  function setPreload () {
    setInSearch(true);
    setTimeout(() => {
      setInSearch(false);
    }, 1000);
  }


  return (

    <div className="page">
      <Header />
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route exact path="/movies">
          <Movies
            movies={movies}
            searchMovie={searchMovie}
            handleChangeSwitcher={handleChangeSwitcher}
            shortMovie={shortMovie}
            inSearch={inSearch}
            setPreload={setPreload} />
        </Route>
        <Route exact path="/saved-movies">
          <SavedMovies />
        </Route>
        <Route exact path="/signup">
          <Register />
        </Route>
        <Route exact path="/signin">
          <Login />
        </Route>
        <Route exact path="/profile">
          <Profile />
        </Route>
        <Route exact path="/pr">
          <Preloader />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>

      </Switch>
      <Footer />
    </div>

  )
}

export default App;
