
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
import { CurrentUserContext } from '../../contexts/CurrentUserContext';


function App() {

  const [movies, setMovies] = React.useState([]);
  const [foundMovies, setFoundMovies] = React.useState([]);
  const [shortMovie, setShortMovie] = React.useState(false);
  const [inSearch, setInSearch] = React.useState(false);
  const [noResult, setNoResult] = React.useState(false);
  const [registered, setRegistered] = React.useState(false);
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [email, setEmail] = React.useState('');
  const [name, setName] = React.useState('');
  const [currentUser, setCurrentUser] = React.useState({ });

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
          setEmail(email);
          setName(name);
          history.push('/movies');
        }
      })
      .catch((err) => {
        console.log(err);
        setRegistered(false);
      })
  }

  function handleLogin(data) {
    const {email, password} = data;
    api.authorize(email, password)
      .then((res) => {
        if (res) {
          setLoggedIn(true);
          localStorage.setItem('token', res.token);
          setEmail(email);
          setName(name);
          history.push("/movies");
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
            history.push("/movies");
            setEmail(res.email);
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




  return (

    <div className="page">
      <CurrentUserContext.Provider value={currentUser}>
      <Header />
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
          name={name}
          email={email}
          loggedIn={loggedIn}
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
        />
        <ProtectedRoute
          exact path="/saved-movies"
          component={SavedMovies}
          loggedIn={loggedIn}
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
