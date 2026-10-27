function Footer() {
  return (
    <>
      {/* =========================
          FOOTER
          ========================= */}
      <footer className="footer">
        {/* Contactgegevens */}
        <div className="footer-contact">
          <p>info@yoursite@mail.com</p>
          <p>+77 000 453</p>
        </div>

        {/* Logo / bedrijfsnaam */}
        <h2>ALTECO</h2>

        {/* Footer navigatie */}
        <nav className="footer-nav">
          {/* Home */}
          <a href="#home">HOME</a>

          {/* About Us */}
          <a href="#about">ABOUT US</a>

          {/* Services */}
          <a href="#services">SERVICES</a>

          {/* Pages */}
          <a href="#offers">PAGES</a>

          {/* Shop */}
          <a href="#offers">SHOP</a>

          {/* Blog */}
          <a href="#services">BLOG</a>

          {/* Contact */}
          <a href="#contact">CONTACT US</a>
        </nav>

        {/* Copyright */}
        <p className="copyright">© 2026 Alteco. All rights reserved.</p>
      </footer>
    </>
  );
}

export default Footer;
