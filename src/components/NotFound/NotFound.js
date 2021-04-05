import { Link } from 'react-router-dom';

function NotFound() {

  return(
    <div className="notFound">
      <h2 className="notFound__heading">404</h2>
      <p className="notFound__text">Страница не найдена</p>
      <Link to="/" className="notFound__btn">Назад</Link>
    </div>
  )
}

export default NotFound;
