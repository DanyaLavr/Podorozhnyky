import "./_historia.scss";

export default function Historia({
  title,
  author,
  date,
  continent,
  imgURL,
  description,
}: {
  title: string;
  author: string;
  date: string;
  continent: string;
  imgURL: string;
  description: string;
}) {
  return (
    <section className="historia">
      <div className="historia-content">
        <h2 className="historia-title">{title}</h2>
        <div className="historia-details">
          <p className="historia-author">
            <span className="heading">Автор статті</span> {author}
          </p>
          <p className="historia-date">
            <span className="heading">Опубліковано</span> {date}
          </p>
          <div className="continent-block">
            <p className="continent-block__name">{continent}</p>
          </div>
          <img src={imgURL} alt={title} className="historia-image" />
        </div>
          <p className="historia-description">{description}</p>

        <div className="save-story">
          <h3 className="save-story__title">Зберегти історію</h3>
          <p className="save-story__description">
            Вона буде доступна у вашому профілі у розділі збережене
          </p>
          <button className="save-story__button">Зберегти</button>
        </div>
      </div>
    </section>
  );
}
