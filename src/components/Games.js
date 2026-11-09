import "./../App.css";

import dungeon from "../images/dragon-dungeon.jpg";
import barracks from "../images/dragon-barracks.jpg";
import gardens from "../images/dragon-gardens.jpg";
import dragonIcon from "../images/DragonIco432.png";

const screenshots = [
  {
    id: 1,
    image: dungeon
  },
  {
    id: 2,
    image: barracks
  },
  {
    id: 3,
    image: gardens
  }
];

function Games() {
  return (
    <section className="section" id="games">
      <div className="container">
        <span className="hero-badge">Наша первая игра</span>

        <h2 className="section-title">
          Dragon Ascend
        </h2>

        <p className="section-text">
          <strong>Dragon Ascend</strong> — динамичная 2D-аркада
          о маленьком лесном драконе Дракоше. Магическая катастрофа превратила
          древний замок-башню в смертельную ловушку, а заколдованная стража
          похитила героя. Помогите Дракоше подняться на вершину, преодолеть
          ловушки и наконец раскрыть крылья.
        </p>

        <div className="game-highlight">
          <div className="game-highlight-info">
            <h3>Динамичный вертикальный паркур</h3>
            <p>
              Прыгайте от стены к стене, цепляйтесь за платформы, зависайте
              в воздухе и точно рассчитывайте каждый прыжок. В игре более
              60 разнообразных модулей с ловушками.
            </p>

            <h3>Четыре уникальные локации</h3>
            <p>
              Пройдите подземелье, казармы, тронный зал и сады на крыше замка. В каждой
              локации появляются новые противники, ловушки и способности Дракоши.
            </p>

            <h3>Элементы рогалика</h3>
            <p>
              Каждая попытка отличается от предыдущей: учитесь на ошибках,
              запоминайте опасные участки, сохраняйте прогресс и поднимайтесь
              всё выше.
            </p>

            <h3>Ночной режим</h3>
            <p>
              После победы замок преображается: ночью появляются опасные
              магические создания, а сложность заметно возрастает.
            </p>

            <a
              className="btn btn-primary"
              href="https://www.rustore.ru/catalog/app/com.TotmaGames.DragonAscend"
              target="_blank"
              rel="noopener noreferrer"
            >
              Скачать в RuStore
            </a>
          </div>

          <div className="game-highlight-card">
          <img
            className="game-cover-image"
            src={dragonIcon}
            alt="Логотип игры Dragon Ascend — На вершину!"
          />
            <h3>Dragon Ascend</h3>
            <p>
              2D-аркада · Экшен · Платформер · Фэнтези
            </p>
            <ul className="game-facts">
              <li>Платформа: Android</li>
              <li>Жанр: паркур, платформер</li>
              <li>Возраст: 6+</li>
              <li>Минимальная версия Android: 12</li>
            </ul>
          </div>
        </div>

        <h3 className="screenshots-title">Скриншоты игры</h3>

        <div className="screenshots-grid">
          {screenshots.map((screen) => (
            <article className="card screenshot-card" key={screen.id}>
              <img
                className="screenshot"
                src={screen.image}
                alt={`Скриншот игры Dragon Ascend: ${screen.title}`}
                loading="lazy"
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Games;