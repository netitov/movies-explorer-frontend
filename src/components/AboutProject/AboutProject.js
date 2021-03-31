
//componenents

function AboutProject() {



  return (
    <section className="aboutProject">
      <a name="aboutProject"></a>
      <h2 className="aboutProject__heading">О проекте</h2>
      <div className="aboutProject__section">
        <h3 className="aboutProject__caption">Дипломный проект включал 5 этапов</h3>
        <h3 className="aboutProject__caption">На выполнение диплома ушло 5 недель</h3>
        <p className="aboutProject__description aboutProject__description_possiton_2">Составление плана, работу над бэкендом, вёрстку,
            добавление функциональности и финальные доработки.
        </p>
        <p className="aboutProject__description">У каждого этапа был мягкий и жёсткий дедлайн,
          которые нужно было соблюдать, чтобы успешно защититься.
        </p>
      </div>
      <div className="aboutProject__duration">
        <div className="aboutProject__line">
          <div className="aboutProject__line-general aboutProject__line_size_s aboutProject__line_color_gr">
            <p className="aboutProject__line-text aboutProject__line-text_color_bl">1 неделя</p>
          </div>
          <div className="aboutProject__line-general aboutProject__line_size_l aboutProject__line_color_bl">
            <p className="aboutProject__line-text">4 недели</p>
          </div>
        </div>
        <div className="aboutProject__line">
          <p className="aboutProject__line-general aboutProject__line_size_s aboutProject__line-text_caption">Back-end</p>
          <p className="aboutProject__line-general aboutProject__line_size_l aboutProject__line-text_caption">Front-end</p>
        </div>
      </div>
    </section>
  )
}

export default AboutProject;
