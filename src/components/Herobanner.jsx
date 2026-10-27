function Herobanner() {
  return (
    <>
      {/* =========================
          HERO BANNER
          ========================= */}

      <section id="home" className="hero">
        {/* Linker pijl */}
        <button className="hero-arrow hero-arrow-left">‹</button>

        {/* Inhoud van de Hero */}
        <div className="hero-content">
          {/* Hoofdtitel */}
          <h1>BUSINESS YOUR SATISFICTION</h1>

          {/* Beschrijving */}
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

          {/* Knoppen */}
          <div className="hero-buttons">
            <button>LOGIN</button>
            <button>REGISTER</button>
          </div>
        </div>

        {/* Rechter pijl */}
        <button className="hero-arrow hero-arrow-right">›</button>
      </section>
    </>
  );
}

export default Herobanner;
