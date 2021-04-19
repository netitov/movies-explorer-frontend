import React from 'react';

import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader';
import { useWindowSize } from '../../utils/utils';
import {
  MOVIES_AMOUNT_MAX,
  MOVIES_AMOUNT_MID,
  MOVIES_AMOUNT_MIN,
  MOVIES_ADD_MIN,
  MOVIES_ADD_MAX,
  SCR_WIDTH_MAX,
  SCR_WIDTH_MID,
  SCR_WIDTH_MIN } from '../../utils/config'

function MoviesCardList(props) {

  const windowWidth = useWindowSize();
  const [initialMovies, setInitialMovies] = React.useState(0);
  const [moreMovies, setMoreMovies] = React.useState(0);

  function handleBtnClick() {
    setInitialMovies(initialMovies + moreMovies);
  }

  React.useEffect(() => {
    if (windowWidth >= SCR_WIDTH_MAX) {
      setInitialMovies(MOVIES_AMOUNT_MAX);
      setMoreMovies(MOVIES_ADD_MAX);
    }
    if (windowWidth < SCR_WIDTH_MAX && windowWidth >= SCR_WIDTH_MID) {
      setInitialMovies(MOVIES_AMOUNT_MAX);
      setMoreMovies(MOVIES_ADD_MIN);
    }
    if (windowWidth < SCR_WIDTH_MID && windowWidth >= SCR_WIDTH_MIN) {
      setInitialMovies(MOVIES_AMOUNT_MID);
      setMoreMovies(MOVIES_ADD_MIN);
    }
    if (windowWidth < SCR_WIDTH_MIN) {
      setInitialMovies(MOVIES_AMOUNT_MIN);
      setMoreMovies(MOVIES_ADD_MIN);
    }
  }, [windowWidth]);

  const leftMovies = props.foundMovies.length - initialMovies


  return (
    <main>
      {props.inSearch ? <Preloader /> :
        props.foundMovies.length === 0 && props.noResult ?
          <p className="moviesCardList__noResult">Ничего не найдено</p> :

      <>
            <ul className="moviesCardList">
            { props.foundMovies.slice(0, initialMovies).map((movie)=>{
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
            <button className={leftMovies <= 0 ?
              "moviesCardList__btn link moviesCardList__btn_visible_hidden" : "moviesCardList__btn link" }
              onClick={handleBtnClick} >
            Ещё</button>
      </>
      }
    </main>
  )
}

export default MoviesCardList;
