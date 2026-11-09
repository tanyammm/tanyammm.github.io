const team = [
  { id: 1, name: "Дмитрий Орлов", role: "Художник, повелитель анимации и композитор", initials: "🕺" },
  { id: 2, name: "Елизавета Козлова", role: "Магистр кода и ловец багов", initials: "🦊" },
  { id: 3, name: "Виктор Коваль", role: "Капитан проекта", initials: "💼" },
  { id: 4, name: "Татьяна Максимова", role: "Хранитель данных", initials: "📊" }
];

function Team() {
  return (
    <section className="section" id="team">
      <div className="container">
        <h2 className="section-title">Команда</h2>
        <p className="section-text">
          Небольшая междисциплинарная команда, которая умеет быстро превращать
          идеи в играбельные продукты.
        </p>

        <div className="team-grid">
          {team.map((member) => (
            <article className="card" key={member.id}>
              <div className="avatar">{member.initials}</div>
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Team;