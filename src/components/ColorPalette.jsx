export default function ColorPalette() {
  return (
    <section className="rang-section">
      <div className="dabba andar-dabba">
        <h2 className="madhyam-sheersh">Color Palette</h2>
        <p className="section-desc">Prakriti se inspired rang jo aapke design ko fresh aur lively banayenge.</p>

        <div className="rang-grid">
          <div className="rang-card">
            <div className="rang-sample hara-primary"></div>
            <div className="rang-info">
              <h3>Hara (Primary)</h3>
              <p className="rang-code">--hara-primary</p>
            </div>
          </div>

          <div className="rang-card">
            <div className="rang-sample hara-light"></div>
            <div className="rang-info">
              <h3>Light Hara</h3>
              <p className="rang-code">--hara-light</p>
            </div>
          </div>

          <div className="rang-card">
            <div className="rang-sample hara-dark"></div>
            <div className="rang-info">
              <h3>Dark Hara</h3>
              <p className="rang-code">--hara-dark</p>
            </div>
          </div>

          <div className="rang-card">
            <div className="rang-sample neela-primary"></div>
            <div className="rang-info">
              <h3>Neela (Secondary)</h3>
              <p className="rang-code">--neela-primary</p>
            </div>
          </div>

          <div className="rang-card">
            <div className="rang-sample neela-light"></div>
            <div className="rang-info">
              <h3>Light Neela</h3>
              <p className="rang-code">--neela-light</p>
            </div>
          </div>

          <div className="rang-card">
            <div className="rang-sample bhura-primary"></div>
            <div className="rang-info">
              <h3>Bhura (Accent)</h3>
              <p className="rang-code">--bhura-primary</p>
            </div>
          </div>

          <div className="rang-card">
            <div className="rang-sample lal-primary"></div>
            <div className="rang-info">
              <h3>Lal (Warning)</h3>
              <p className="rang-code">--lal-primary</p>
            </div>
          </div>

          <div className="rang-card">
            <div className="rang-sample safed"></div>
            <div className="rang-info">
              <h3>Safed</h3>
              <p className="rang-code">--safed</p>
            </div>
          </div>

          <div className="rang-card">
            <div className="rang-sample kala"></div>
            <div className="rang-info">
              <h3>Kaala</h3>
              <p className="rang-code">--kala</p>
            </div>
          </div>
        </div>

        <div className="mausam-rang">
          <h3 className="chota-sheersh">Season Themes</h3>
          <div className="rang-grid">
            <div className="rang-card">
              <div className="rang-sample garmi-bg"></div>
              <div className="rang-info">
                <h3>Garmi Background</h3>
                <p className="rang-code">--garmi-bg</p>
              </div>
            </div>

            <div className="rang-card">
              <div className="rang-sample garmi-text"></div>
              <div className="rang-info">
                <h3>Garmi Text</h3>
                <p className="rang-code">--garmi-text</p>
              </div>
            </div>

            <div className="rang-card">
              <div className="rang-sample sardi-bg"></div>
              <div className="rang-info">
                <h3>Sardi Background</h3>
                <p className="rang-code">--sardi-bg</p>
              </div>
            </div>

            <div className="rang-card">
              <div className="rang-sample sardi-text"></div>
              <div className="rang-info">
                <h3>Sardi Text</h3>
                <p className="rang-code">--sardi-text</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
