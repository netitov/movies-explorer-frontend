
import React from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';

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
import { SHORT_MOVIE_DRT, MAIN_API } from '../../utils/config';
import Api from '../../utils/MainApi';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { IMG_URL, IMG_URL_NULL } from '../../utils/config'


function App() {

  const [movies, setMovies] = React.useState([]);
  const [foundMovies, setFoundMovies] = React.useState([]);
  const [foundSavedMovies, setFoundSavedMovies] = React.useState([]);
  const [savedMovies, setSavedMovies] = React.useState([]);
  const [shortMovie, setShortMovie] = React.useState(false);
  const [inSearch, setInSearch] = React.useState(false);
  const [inSaved, setInSaved] = React.useState(false);
  const [noResult, setNoResult] = React.useState(false);
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({ });
  const [userData, setUserData] = React.useState({
    name: "",
    email: "",
  });


  const history = useHistory();
  const token = localStorage.getItem('token');

  const api = new Api ({
    baseUrl: MAIN_API,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
  });

  React.useEffect(() => {
    Promise.all([
      moviesApi.getInitialMovies(),
      api.getSavedMovies()
    ])
    .then(([movies, savedMovies]) => {
      localStorage.setItem("movies", JSON.stringify(movies));
      setMovies(JSON.parse(localStorage.getItem("movies")));
      localStorage.setItem("savedMovies", JSON.stringify(savedMovies));
      setSavedMovies(JSON.parse(localStorage.getItem("savedMovies")));
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
      setFoundMovies(fountShortMovies)
    }
    else {
      const foundMovies = movies.filter((movie) => {
        return movie.nameRU.toLowerCase().includes(movieName.toLowerCase());
      });
      return setFoundMovies(foundMovies)
    }
  }

  function searchSavedMovie(movieName) {

    const filteredArray  = movies.filter(function(array_el){
       return savedMovies.find(function(anotherOne_el){
          return anotherOne_el.movieId == array_el.id;
       })
    });

    if (shortMovie) {
      const fountShortMovies = filteredArray.filter((movie) => {
        return (
          movie.duration <= SHORT_MOVIE_DRT &&
          movie.nameRU.toLowerCase().includes(movieName.toLowerCase())
          )
      });
      setFoundSavedMovies(fountShortMovies) /* setFoundMovies */
      setInSaved(true);
    }
    else {
      const foundMovies = filteredArray.filter((movie) => {
        return movie.nameRU.toLowerCase().includes(movieName.toLowerCase());
      });
      /* return */ setFoundSavedMovies(foundMovies); setInSaved(true);  /* setFoundMovies */
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
    const { name, email, password } = data;
    api.register(name, email, password)
      .then((res) => {
        if (res) {
          handleLogin({ email, password });
          setCurrentUser(res);
          history.push('/movies');
        }
      })
      .catch((err) => {
        console.log(err);
        setLoggedIn(false);
      })
  }

  function handleLogin(data) {
    const { email, password } = data;
    api.authorize(email, password)
      .then((res) => {
        if (res) {
          localStorage.setItem('token', res.token);
          setLoggedIn(true);
          history.push('/movies');
        }
      })
      .catch((err) => {console.log(err)})
  }

  function tokenCheck() {
    const token = localStorage.getItem('token');
    if (token) {
      api.getContent(token)
        .then((res) => {
          if (res) {
            setLoggedIn(true);
            history.push('/movies');
            const data = {
              name: res.name,
              email: res.email,
            };
            setUserData(data)
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  React.useEffect(() => {
    if (loggedIn) {
    Promise.all([
      api.getUserData()
    ])
    .then(([userInfo]) => {
      setCurrentUser(userInfo);
    })
    .catch((err) => {
      console.log(err);
    })
    }
  }, [loggedIn])

  React.useEffect(() => {
    tokenCheck();
  }, []);


  function handleCardLike(card) {

    const newMovie = {
      country: card.country,
      director: card.director,
      duration: card.duration,
      year: card.year,
      description: card.description,
      image: card.image.url
      ? `${IMG_URL}${card.image.url}`
      : IMG_URL_NULL,
      trailer: card.trailerLink,
      nameRU: card.nameRU,
      nameEN: card.nameEN,
      thumbnail: card.image.formats.thumbnail.url
      ? `${IMG_URL}${card.image.formats.thumbnail.url}`
      : IMG_URL_NULL,
      movieId: card.id }

    api.saveMovie(newMovie)
      .then((m) => {
        setSavedMovies([m, ...savedMovies]);
    })
      .catch((err) => {
      console.log(err)
      })
  }

  function handleDeleteLike(card) {

    const movieForDel = savedMovies.find((m) => m.movieId === card.id);

    api.deleteMovie(movieForDel._id)
      .then((m) => {
        const newCards = savedMovies.filter((c) => c.movieId !== card.id);
        const newFilteredCard = foundSavedMovies.filter((c) => c.id !== card.id);

        setSavedMovies(newCards);
        setFoundSavedMovies(newFilteredCard);
    })
      .catch((err) => {
      console.log(err)
      })
  }

  function handleUpdateUser(userInfo) {
    api.saveUserData(userInfo)
      .then((inputValues)=> {
        setCurrentUser(inputValues);
        alert('Данные изменены')
      })
      .catch((err) => {
        console.log(err)
        })
  }

  function handleSignOut() {
    localStorage.removeItem('token');
    setLoggedIn(false);
    history.push('/');
  }


  return (

    <div className="page">
      <CurrentUserContext.Provider value={currentUser}>
      <Header
        loggedIn={loggedIn} />
      <Switch>
        <Route path="/signin">
          <Login handleLogin={handleLogin} />
        </Route>
        <Route path="/signup">
          <Register onRegister={handleRegister} />
        </Route>
        <ProtectedRoute
          exact path="/profile"
          component={Profile}
          loggedIn={loggedIn}
          onUpdateUser={handleUpdateUser}
          onSignOut={handleSignOut}
        />
        <Route exact path="/">
          <Main />
        </Route>
        <ProtectedRoute
          exact path="/movies"
          component={Movies}
          loggedIn={loggedIn}
          movies={movies}
          searchMovie={searchMovie}
          handleChangeSwitcher={handleChangeSwitcher}
          shortMovie={shortMovie}
          inSearch={inSearch}
          setPreload={setPreload}
          foundMovies={foundMovies}
          noResult={noResult}
          showNoResult={showNoResult}
          onCardLike={handleCardLike}
          savedFilms={savedMovies}
          onCardLikeDelete={handleDeleteLike}
        />
        <ProtectedRoute
          exact path="/saved-movies"
          component={SavedMovies}
          loggedIn={loggedIn}
          movies={movies}
          searchMovie={searchSavedMovie}
          handleChangeSwitcher={handleChangeSwitcher}
          shortMovie={shortMovie}
          inSearch={inSearch}
          setPreload={setPreload}
          foundMovies={foundSavedMovies}/* foundMovies */
          noResult={noResult}
          showNoResult={showNoResult}
          onCardLike={handleCardLike}
          savedFilms={savedMovies}
          onCardLikeDelete={handleDeleteLike}
          inSaved={inSaved}
        />
        <Route path="*">
          <NotFound />
        </Route>

      </Switch>
      <Footer />
      </CurrentUserContext.Provider>
    </div>

  )
}

export default App;
