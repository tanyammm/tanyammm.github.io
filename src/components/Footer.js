function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>© {new Date().getFullYear()} Totma Games. Все права защищены.</p>
        <p>Мобильные игры · Разработка · Геймдизайн. Контакт для связи: houk.da@mail.ru</p>
      </div>
    </footer>
  );
}

export default Footer;