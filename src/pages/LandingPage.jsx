function LandingPage() {
  return (
    <>
      <div className="landing-page">
        <section className="hero-section">
          <div className="hero-content">
            <div className="hero-text">
              <h1>Fortschritt beginnt hier.</h1>
              <p>Ihr Ansprechpartner für Webentwicklung im Mittelstand.</p>
              <button className="cta-button">Jetzt starten</button>
            </div>
            <div className="hero-image">
              <img src="/Pictures/HeroPicture1.png" alt="Hero Bild" />
            </div>
          </div>
        </section>
      </div>
      
      <div className="landing-page-main">
        <section className="services-section">
          <div className="services-content">
            <div className="services-text">
              <h2>Unsere Dienstleistungen</h2>
              <p>Wir bieten maßgeschneiderte Weblösungen für Ihr Unternehmen im digitalen Zeitalter.</p>
              <button className="services-button">Mehr erfahren</button>
            </div>
            <div className="services-features">
              <div className="feature-card">
                <h3>Webentwicklung</h3>
                <p>Moderne, responsive Websites</p>
              </div>
              <div className="feature-card">
                <h3>E-Commerce</h3>
                <p>Online-Shops die verkaufen</p>
              </div>
              <div className="feature-card">
                <h3>Beratung</h3>
                <p>Strategische Digitalberatung</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default LandingPage