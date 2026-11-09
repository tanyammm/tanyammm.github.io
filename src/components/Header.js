function Header() {
  return (
    <header className="header">
      <div className="container header-inner">
        <a href="#top" className="logo">
          Totma<span>Games</span>
        </a>

        <nav className="nav">
          <a href="#games">Игры</a>
          <a href="#services">О нас</a>
          <a href="#team">Команда</a>
        </nav>

      </div>
    </header>
  );
}

export default Header;