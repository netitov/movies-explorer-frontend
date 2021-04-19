import { Link } from 'react-router-dom';

import React from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function Profile(props) {

  const currentUser = React.useContext(CurrentUserContext);
  const [error, setError] = React.useState({});
  const [isValid, setIsValid] = React.useState(false);
  const [data, setData] = React.useState({
    name: "",
    email: "",
  });

  const btnClass = `${
    isValid ? "profile__btn profile__btn-sbt link" : "profile__btn profile__btn-sbt profile__btn_inactive"
  }`;

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({ ...data, [name]: value });
    setError({ ...error, [name]: e.target.validationMessage });
    setIsValid(e.target.closest("form").checkValidity());
  };

  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateUser(data);
  }

  React.useEffect(() => {
    setData({
      name: currentUser.name,
      email: currentUser.email,
    });
  }, [currentUser]);


  return(
    <div className="profile">
      <p className="profile__heading auth__heading">{`Привет, ${data.name}!`}</p>
        <form className="profile__container" onSubmit={handleSubmit} id="form">
          <label className="profile__label profile__text profile__text_bold">Имя</label>
          <input className="profile__name profile__text" value={data.name}
            onChange={handleChange} required name="name" id="name" minLength="2" maxLength="30" />
        </form>
        <p className="profile__error profile__error-name">{error.name}</p>
        <form className="profile__container">
          <label className="profile__label profile__text profile__text_bold">E-mail</label>
          <input className="profile__name profile__text" value={data.email} onChange={handleChange}
            required name="email" type="email" id="email" />
        </form>

        <p className="profile__error">{error.email}</p>
        <button className={btnClass} type="submit" form="form">Редактировать</button>
        <Link to="/" className="profile__btn profile__btn_red link" onClick={props.onSignOut}>Выйти из аккаунта</Link>
    </div>
  )
}

export default Profile;
