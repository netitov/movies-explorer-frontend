import React from 'react';
import { useState, useEffect, useLocation } from 'react-router-dom';

import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader';
import useCurrentSize from '../../utils/utils';

function MoviesCardList(props) {

  let location = useLocation();


  const SIZE_WIDTH_LARGE = 1024;
  const SIZE_WIDTH_MEDIUM = 768;
  const SIZE_WIDTH_SMALL = 320;

  const NUMBER_MOVIES_TO_RENDER_LARGE = 12;
  const NUMBER_MOVIES_TO_RENDER_MEDIUM = 8;
  const NUMBER_MOVIES_TO_RENDER_SMALL = 5;

  const NUMBER_MOVIES_TO_ADD_LARGE = 3;
  const NUMBER_MOVIES_TO_ADD_MEDIUM = 2;
  const ZERO_NUMBER = 0;

  const [moviesToRender, setMoviesToRender] = React.useState([]);
  const [numberMoviesToRender, setNumberMoviesToRender] = React.useState(0);
  const [numberMoviesToAdd, setNumberMoviesToAdd] = React.useState(0);
  const [isShowButtonActive, setIsShowButtonActive] = React.useState(false);

  const size = useCurrentSize();

  const countNumberMoviesToRender = () => {
    if (size.width >= SIZE_WIDTH_LARGE) {
      setNumberMoviesToRender(NUMBER_MOVIES_TO_RENDER_LARGE);
      setNumberMoviesToAdd(NUMBER_MOVIES_TO_ADD_LARGE);
    } else if (size.width < SIZE_WIDTH_LARGE && size.width >= SIZE_WIDTH_MEDIUM) {
      setNumberMoviesToRender(NUMBER_MOVIES_TO_RENDER_MEDIUM);
      setNumberMoviesToAdd(NUMBER_MOVIES_TO_ADD_MEDIUM);
    } else if (size.width < SIZE_WIDTH_MEDIUM && size.width >= SIZE_WIDTH_SMALL) {
      setNumberMoviesToRender(NUMBER_MOVIES_TO_RENDER_SMALL);
      setNumberMoviesToAdd(NUMBER_MOVIES_TO_ADD_MEDIUM);
    };
  };

  const handleShowMoreMoviesButtonClick = () => {
    setMoviesToRender(props.foundMovies.slice(ZERO_NUMBER, moviesToRender.length + numberMoviesToAdd));
    if (moviesToRender.length >= props.foundMovies.length - numberMoviesToAdd) {
      setIsShowButtonActive(false);
    }
  }

  React.useEffect(() => {
    countNumberMoviesToRender();
  }, [size.width])

  React.useEffect(() => {
    if (location.pathname === '/movies') {
      setMoviesToRender(props.foundMovies.slice(ZERO_NUMBER, numberMoviesToRender));
      if (props.foundMovies.length <= numberMoviesToRender) {
        setIsShowButtonActive(false);
      } else {
        setIsShowButtonActive(true);
      };
    } else if (location.pathname === '/saved-movies') {
      setMoviesToRender(props.foundMovies);
      setIsShowButtonActive(false);
    }
  }, [props.foundMovies, numberMoviesToRender])


  return (
    <main>
      {props.inSearch ? <Preloader /> :
        props.foundMovies.length === 0 && props.noResult ?
          <p className="moviesCardList__noResult">Ничего не найдено</p> :
          !props.savedMovies ?
      <>
            <ul className="moviesCardList">
            { props.foundMovies.map((movie)=>{
                return (
                  <MoviesCard
                    key={movie.id}
                    movie={movie}
                    onCardLike={props.onCardLike}
                    isSaved={props.isSaved}
                    savedFilms={props.savedFilms}
                    onCardLikeDelete={props.onCardLikeDelete}
                  />
                )
              })

            }
            </ul>
            <button className={props.foundMovies.length !== 0 ? "moviesCardList__btn link" :
              "moviesCardList__btn link moviesCardList__btn_visible_hidden"}
              onClick={handleShowMoreMoviesButtonClick} >
              Ещё</button>
      </>
          :
      <>
          <ul className="moviesCardList">
          { props.savedMovies.map((movie)=>{
              return (
                <MoviesCard
                  key={movie.id}
                  movie={movie}
                  onCardLike={props.onCardLike}
                  savedMovies={props.savedMovies}

                />
              )
            })

          }
          </ul>
          <button className={props.foundMovies.length !== 0 ? "moviesCardList__btn link" :
            "moviesCardList__btn link moviesCardList__btn_visible_hidden"}
            onClick={handleShowMoreMoviesButtonClick} >
            Ещё</button>
      </>






      }

    </main>
  )
}

export default MoviesCardList;
