import movie1 from '../../images/33-words.png';
import movie2 from '../../images/movie-2.png';
import movie3 from '../../images/movie-3.png';
import movie4 from '../../images/movie-4.png';
import movie5 from '../../images/movie-5.png';
import movie6 from '../../images/movie-6.png';
import movie7 from '../../images/movie-7.png';
import movie8 from '../../images/movie-8.png';
import movie9 from '../../images/movie-9.png';
import movie10 from '../../images/movie-10.png';
import movie11 from '../../images/movie-11.png';
import movie12 from '../../images/movie-12.png';


function MoviesCard() {

  return (
    <>

    <li className="moviesCard">
      <img className="moviesCard__img" alt="Изображение фильма" src={movie1}></img>
      <div className="moviesCard__container">
        <p className="moviesCard__name">33 слова о дизайне</p>
        <div className="moviesCard__duration-container">
          <p className="moviesCard__duration">1ч 17м</p>
        </div>
      </div>
      <button className="moviesCard__btn link-btn">Сохранить</button>
    </li>

    <li className="moviesCard">
      <img className="moviesCard__img" alt="Изображение фильма" src={movie2}></img>
      <div className="moviesCard__container">
        <p className="moviesCard__name">Киноальманах «100 лет дизайна»</p>
        <div className="moviesCard__duration-container">
          <p className="moviesCard__duration">1ч 17м</p>
        </div>
      </div>
      <button className="moviesCard__btn link-btn">Сохранить</button>
    </li>

    <li className="moviesCard">
      <img className="moviesCard__img" alt="Изображение фильма" src={movie3}></img>
      <div className="moviesCard__container">
        <p className="moviesCard__name">В погоне за Бенкси</p>
        <div className="moviesCard__duration-container">
          <p className="moviesCard__duration">1ч 17м</p>
        </div>
      </div>
      <button className="moviesCard__btn link-btn">Сохранить</button>
    </li>

    <li className="moviesCard">
      <img className="moviesCard__img" alt="Изображение фильма" src={movie4}></img>
      <div className="moviesCard__container">
        <p className="moviesCard__name">Баския: Взрыв реальности</p>
        <div className="moviesCard__duration-container">
          <p className="moviesCard__duration">1ч 17м</p>
        </div>
      </div>
      <button className="moviesCard__btn link-btn">Сохранить</button>
    </li>

    <li className="moviesCard">
      <img className="moviesCard__img" alt="Изображение фильма" src={movie5}></img>
      <div className="moviesCard__container">
        <p className="moviesCard__name">Бег это свобода</p>
        <div className="moviesCard__duration-container">
          <p className="moviesCard__duration">1ч 17м</p>
        </div>
      </div>
      <button className="moviesCard__btn link-btn">Сохранить</button>
    </li>

    <li className="moviesCard">
      <img className="moviesCard__img" alt="Изображение фильма" src={movie6}></img>
      <div className="moviesCard__container">
        <p className="moviesCard__name">Книготорговцы</p>
        <div className="moviesCard__duration-container">
          <p className="moviesCard__duration">1ч 17м</p>
        </div>
      </div>
      <button className="moviesCard__btn link-btn">Сохранить</button>
    </li>

    <li className="moviesCard">
      <img className="moviesCard__img" alt="Изображение фильма" src={movie7}></img>
      <div className="moviesCard__container">
        <p className="moviesCard__name">Когда я думаю о Германии ночью</p>
        <div className="moviesCard__duration-container">
          <p className="moviesCard__duration">1ч 17м</p>
        </div>
      </div>
      <button className="moviesCard__btn link-btn">Сохранить</button>
    </li>

    <li className="moviesCard">
      <img className="moviesCard__img" alt="Изображение фильма" src={movie8}></img>
      <div className="moviesCard__container">
        <p className="moviesCard__name">Gimme Danger: История Игги и The Stooges</p>
        <div className="moviesCard__duration-container">
          <p className="moviesCard__duration">1ч 17м</p>
        </div>
      </div>
      <button className="moviesCard__btn link-btn">Сохранить</button>
    </li>

    <li className="moviesCard">
      <img className="moviesCard__img" alt="Изображение фильма" src={movie9}></img>
      <div className="moviesCard__container">
        <p className="moviesCard__name">Дженис: Маленькая девочка грустит</p>
        <div className="moviesCard__duration-container">
          <p className="moviesCard__duration">1ч 17м</p>
        </div>
      </div>
      <button className="moviesCard__btn link-btn">Сохранить</button>
    </li>

    <li className="moviesCard">
      <img className="moviesCard__img" alt="Изображение фильма" src={movie10}></img>
      <div className="moviesCard__container">
        <p className="moviesCard__name">Соберись перед прыжком</p>
        <div className="moviesCard__duration-container">
          <p className="moviesCard__duration">1ч 17м</p>
        </div>
      </div>
      <button className="moviesCard__btn link-btn">Сохранить</button>
    </li>

    <li className="moviesCard">
      <img className="moviesCard__img" alt="Изображение фильма" src={movie11}></img>
      <div className="moviesCard__container">
        <p className="moviesCard__name">Пи Джей Харви: A dog called money</p>
        <div className="moviesCard__duration-container">
          <p className="moviesCard__duration">1ч 17м</p>
        </div>
      </div>
      <button className="moviesCard__btn link-btn">Сохранить</button>
    </li>

    <li className="moviesCard">
      <img className="moviesCard__img" alt="Изображение фильма" src={movie12}></img>
      <div className="moviesCard__container">
        <p className="moviesCard__name">По волнам: Искусство звука в кино</p>
        <div className="moviesCard__duration-container">
          <p className="moviesCard__duration">1ч 17м</p>
        </div>
      </div>
      <button className="moviesCard__btn link-btn">Сохранить</button>
    </li>

    </>
  )
}

export default MoviesCard;
