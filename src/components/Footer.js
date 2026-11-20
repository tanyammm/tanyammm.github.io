function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>
          © {new Date().getFullYear()} Totma Games. Все права защищены.
        </p>

        <a
          href={`${process.env.PUBLIC_URL}/Политика конфиденциальности.pdf`}
        >
          Политика конфиденциальности
        </a>

        <p>
          Контакт для связи:{" "}
          <a href="mailto:houk.da@mail.ru">houk.da@mail.ru</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;