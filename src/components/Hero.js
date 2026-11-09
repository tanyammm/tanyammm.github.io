import dragonLogo from "../images/dragon-ascend-logo.png";

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container hero-inner">
        <div>
          <span className="hero-badge">Команда разработчиков игр</span>

          <h1>
            Создаём мобильные игры, <span>в которые возвращаются</span>
          </h1>

          <p>
            Totma Games - инди-команда разработчиков, художников и геймдизайнеров.
            Наша первая мобильная фэнтези-игра "Dragon Ascend" уже доступна
            в RuStore.
          </p>

          <div className="hero-actions">
            <a href="#games" className="btn btn-primary">
              Наши игры
            </a>
          </div>
        </div>

        <div>
          <img
            className="hero-game-logo"
            src={dragonLogo}
            alt="Логотип студии Totma Games"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;