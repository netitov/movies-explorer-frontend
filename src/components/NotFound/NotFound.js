import { Link } from 'react-router-dom';

function NotFound() {


  return(
    <div className="notFound">
      <div className="notFound__container">
      <h2 className="notFound__heading">404</h2>
      <p className="notFound__text">Страница не найдена</p>
      </div>
      <Link to="/" className="notFound__btn">Назад</Link>
    </div>
  )
}

export default NotFound;
