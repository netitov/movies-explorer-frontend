
import React from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';

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
import { SHORT_MOVIE_DRT, MAIN_API } from '../../utils/config';
import Api from '../../utils/MainApi';


function App() {

  const [movies, setMovies] = React.useState([]);
  const [foundMovies, setFoundMovies] = React.useState([]);
  const [shortMovie, setShortMovie] = React.useState(false);
  const [inSearch, setInSearch] = React.useState(false);
  const [noResult, setNoResult] = React.useState(false);
  const [registered, setRegistered] = React.useState(false);

  const history = useHistory();
  const token = localStorage.getItem('token');


  React.useEffect(() => {
    Promise.all([
      moviesApi.getInitialMovies()
    ])
    .then(([movies]) => {
      localStorage.setItem("movies", JSON.stringify(movies));
      setMovies(JSON.parse(localStorage.getItem("movies")));
    })
    .catch((err) => {
      console.log(err);
    })
  }, [])

  const api = new Api ({
    baseUrl: MAIN_API,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
  });


  function searchMovie(movieName) {
    if (shortMovie) {
      const fountShortMovies = movies.filter((movie) => {
        return (
          movie.duration <= SHORT_MOVIE_DRT &&
          movie.nameRU.toLowerCase().includes(movieName.toLowerCase())
          )
      });
      setFoundMovies(fountShortMovies)
    }
    else {
      const foundMovies = movies.filter((movie) => {
        return movie.nameRU.toLowerCase().includes(movieName.toLowerCase());
      });
      return setFoundMovies(foundMovies)
    }
  }

  function handleChangeSwitcher() {
    setShortMovie(!shortMovie);
  }

  function setPreload() {
    setInSearch(true);
    setTimeout(() => {
      setInSearch(false);
    }, 1000);
  }

  function showNoResult() {
    setNoResult(true);
  }


  function handleRegister(data) {
    const {name, email, password} = data;
    api.register(name, email, password)
      .then((res) => {
        if (res) {
          setRegistered(true);
          history.push('/signin');
        }
      })
      .catch((err) => {
        console.log(err);
        setRegistered(false);
      })
  }




  return (

    <div className="page">
      <Header />
      <Switch>
{/*         <Route path="/signin">
          <Login handleLogin={handleLogin} />
        </Route> */}
        <Route path="/signup">
          <Register onRegister={handleRegister} />
        </Route>
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
            setPreload={setPreload}
            foundMovies={foundMovies}
            noResult={noResult}
            showNoResult={showNoResult} />
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
