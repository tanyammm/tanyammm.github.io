const services = [
  {
    id: 1,
    icon: "🧩",
    title: "Геймдизайн",
    text: "Разработка концепции, игровых механик, экономики и документации."
  },
  {
    id: 2,
    icon: "📱",
    title: "Разработка под iOS и Android",
    text: "Создание кроссплатформенных мобильных приложений на языке C# движке Unity."
  },
  {
    id: 3,
    icon: "🎨",
    title: "Графика и анимация",
    text: "Игровая 2D-графика, продумывание художественного стиля игры, анимация персонажей и создание интерфейса."
  },
  {
    id: 4,
    icon: "🚀",
    title: "Прототипирование",
    text: "Быстрая проверка идеи: играбельный прототип, метрики и оценка потенциала проекта."
  },
  {
    id: 5,
    icon: "📊",
    title: "Настройка под продакшен",
    text: "Интеграция аналитики и настройка рекламы."
  },
  {
    id: 6,
    icon: "🎹",
    title: "Музыка для игры",
    text: "Написание фоновой музыки для игры и подбор звуков."
  }
];

function Services() {
  return (
    <section className="section" id="services">
      <div className="container">
        <h2 className="section-title">Что мы делаем?</h2>
        <p className="section-text">
          Полный цикл создания мобильной игры - от идеи и прототипа до релиза
          и дальнейшей поддержки.
        </p>

        <div className="services-grid">
          {services.map((service) => (
            <article className="card" key={service.id}>
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;