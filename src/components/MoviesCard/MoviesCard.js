import { IMG_URL, IMG_URL_NULL } from '../../utils/config'


function MoviesCard({ movie }) {

  function getTimeFromMins(mins) {
    let hours = Math.trunc(mins/60);
	  let minutes = mins % 60;
	  return hours + 'ч ' + minutes + 'м';
  };

  return (
    <>

    <li className="moviesCard">
      <img className="moviesCard__img" alt={`Изображение ${movie.nameRU}`}
        src={movie.image == null ? IMG_URL_NULL : `${IMG_URL}${movie.image.url}`}>
      </img>
      <div className="moviesCard__container">
        <p className="moviesCard__name">{movie.nameRU}</p>
        <div className="moviesCard__duration-container">
          <p className="moviesCard__duration">{getTimeFromMins(movie.duration)}</p>
        </div>
      </div>
      <button className="moviesCard__btn link-btn">Сохранить</button>
    </li>

    </>
  )
}

export default MoviesCard;
