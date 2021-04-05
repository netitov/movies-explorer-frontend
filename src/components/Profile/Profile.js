import { Link } from 'react-router-dom';
import logoPath from '../../images/logo.svg';

function Profile() {

  return(
    <div className="profile">
{/*       <img className="auth__logo link" src={logoPath} alt="Лого Movies-explorer"/> */}
      <p className="profile__heading auth__heading">Привет, Виталий!</p>

        <div className="profile__container">
          <label className="profile__label profile__text profile__text_bold">Имя</label>
          <p className="profile__name profile__text">Виталий</p>
        </div>

        <div className="profile__container">
          <label className="profile__label profile__text profile__text_bold">E-mail</label>
          <p className="profile__name profile__text">pochta@yandex.ru</p>
        </div>


        <Link to="/profile" className="profile__btn link">Редактировать</Link>
        <Link to="/signin" className="profile__btn profile__btn_red link">Выйти из аккаунта</Link>

    </div>
  )
}

export default Profile;
