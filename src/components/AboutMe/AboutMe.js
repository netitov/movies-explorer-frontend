import picPath from '../../images/testpic.png';


function AboutMe() {

  return (
    <section className="aboutMe">
      <a name="aboutme"></a>
      <h2 className="aboutMe__headng aboutProject__heading">Студент</h2>
      <div className="aboutMe__section">
        <div className="aboutMe__info">
          <h3 className="aboutMe__name">Никита</h3>
          <p className="aboutMe__occupation">Фронтенд-разработчик, 27 лет</p>
          <p className="aboutMe__disciption">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена
          и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал
          в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами
          и ушёл с постоянной работы.</p>
          <ul className="aboutMe__contacts">
            <a className="aboutMe__link link" href="https://www.facebook.com/">
              <li className="">Facebook</li>
            </a>
            <a className="aboutMe__link link" href="https://github.com/T-Nick-13">
              <li className="">Github</li>
            </a>
          </ul>
        </div>

        <img className="aboutMe__pic" src={picPath} alt="Фото студента"/>
      </div>

    </section>

  )
}

export default AboutMe;
