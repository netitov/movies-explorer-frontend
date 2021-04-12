import MoviesCard from '../MoviesCard/MoviesCard'
import Preloader from '../Preloader/Preloader'

function MoviesCardList(props) {

  return (
    <main>
      {props.inSearch ? <Preloader /> :
      <>
            <ul className="moviesCardList">
            { props.movies.map((movie)=>{
                return (
                  <MoviesCard
                    key={movie._id}
                    movie={movie}
                  />
                )
              })
            }
            </ul>
            <button className="moviesCardList__btn link">Ещё</button>
      </>

      }


    </main>
  )
}

export default MoviesCardList;
