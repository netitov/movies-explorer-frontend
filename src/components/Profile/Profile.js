import { Link } from 'react-router-dom';

function Profile(props) {

  return(
    <div className="profile">
      <p className="profile__heading auth__heading">{`Привет, ${props.name}!`}</p>
        <div className="profile__container">
          <label className="profile__label profile__text profile__text_bold">Имя</label>
          <p className="profile__name profile__text">{props.name}</p>
        </div>
        <div className="profile__container">
          <label className="profile__label profile__text profile__text_bold">E-mail</label>
          <p className="profile__name profile__text">{props.email}</p>
        </div>
        <Link to="/profile" className="profile__btn link">Редактировать</Link>
        <Link to="/signin" className="profile__btn profile__btn_red link">Выйти из аккаунта</Link>
    </div>
  )
}

export default Profile;
