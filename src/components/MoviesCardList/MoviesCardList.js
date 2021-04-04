import MoviesCard from '../MoviesCard/MoviesCard'

function MoviesCardList() {

  return (
    <main>
      <ul className="moviesCardList">
        <MoviesCard />
      </ul>
      <button className="moviesCardList__btn link">Ещё</button>
    </main>
  )
}

export default MoviesCardList;
