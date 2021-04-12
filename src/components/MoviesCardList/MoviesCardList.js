import MoviesCard from '../MoviesCard/MoviesCard'
import Preloader from '../Preloader/Preloader'

function MoviesCardList(props) {

  return (
    <main>
      {props.inSearch ? <Preloader /> :
        props.foundMovies.length === 0 && props.noResult ?

          <p className="moviesCardList__noResult">Ничего не найдено</p> :
      <>
            <ul className="moviesCardList">
            { props.foundMovies.map((movie)=>{
                return (
                  <MoviesCard
                    key={movie._id}
                    movie={movie}
                  />
                )
              })
            }
            </ul>
            <button className={props.foundMovies.length !== 0 ? "moviesCardList__btn link" :
              "moviesCardList__btn link moviesCardList__btn_visible_hidden"}>
              Ещё</button>
      </>

      }


    </main>
  )
}

export default MoviesCardList;
