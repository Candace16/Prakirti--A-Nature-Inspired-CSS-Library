export default function ComponentsDemo() {
  return (
    <section className="components-section">
      <div className="dabba andar-dabba">
        <h2 className="madhyam-sheersh">Reusable Components</h2>
        <p className="section-desc">
          Prakriti UI mein kai reusable components milte hain jo aap apne projects mein easily use kar sakte ho.
        </p>

        <div className="components-grid">
          {/* Buttons */}
          <div className="component-demo">
            <h3 className="chota-sheersh">Buttons</h3>
            <div className="component-example">
              <button className="btn mukhya-btn">Main Button</button>
              <button className="btn gaun-btn">Secondary Button</button>
              <button className="btn outline-btn">Outline Button</button>
              <button className="btn text-btn">Text Button</button>
              <button className="btn mukhya-btn" disabled>
                Disabled Button
              </button>
              <button className="phool-button">Text Button</button>
            </div>
            <div className="code-example">
              <pre>
                <code>{`<button class="btn mukhya-btn">Main Button</button>
<button class="btn gaun-btn">Secondary Button</button>
<button class="btn outline-btn">Outline Button</button>
<button class="phool-button">Flower Button</button>`}</code>
              </pre>
            </div>
          </div>

          {/* Card */}
          <div className="component-demo">
            <h3 className="chota-sheersh">Card</h3>
            <div className="component-example">
              <div className="card patta-card"> {/* New Patta Card */}
                <div className="card-header">
                  <h3 className="card-title">Patta Card Title</h3>
                </div>
                <div className="card-body">
                  <p>Yeh ek patta themed card component hai jise aap kahi bhi use kar sakte ho.</p>
                </div>
                <div className="card-footer">
                  <button className="btn mukhya-btn">Jaankari Lo</button>
                </div>
              </div>
            </div>
            <div className="code-example">
              <pre>
                <code>{`<div class="card patta-card">
  <div class="card-header">
    <h3 class="card-title">Patta Card Title</h3>
  </div>
  <div class="card-body">
    <p>Card content yahan hoga...</p>
  </div>
  <div class="card-footer">
    <button class="btn mukhya-btn">Jaankari Lo</button>
  </div>
</div>`}</code>
              </pre>
            </div>
          </div>

          {/* Alerts */}
          <div className="component-demo">
            <h3 className="chota-sheersh">Alerts</h3>
            <div className="component-example">
              <div className="alert alert-safalta">
                <p>Success! Kaam ho gaya hai.</p>
              </div>
              <div className="alert alert-chinta">
                <p>Warning! Dhyan dena zaroori hai.</p>
              </div>
              <div className="alert alert-khatre">
                <p>Danger! Kuch gadbad ho gayi hai.</p>
              </div>
              <div className="alert alert-suchna">
                <p>Info! Zaroori jaankari di ja rahi hai.</p>
              </div>
            </div>
            <div className="code-example">
              <pre>
                <code>{`<div class="alert alert-safalta">
  <p>Success! Kaam ho gaya hai.</p>
</div>`}</code>
              </pre>
            </div>
          </div>


          {/* Badges */}
          <div className="component-demo">
            <h3 className="chota-sheersh">Badges</h3>
            <div className="component-example">
              <span className="badge badge-mukhya">Main</span>
              <span className="badge badge-gaun">Secondary</span>
              <span className="badge badge-safalta">Success</span>
              <span className="badge badge-khatre">Danger</span>
              <span className="badge badge-chinta">Warning</span>
              <span className="badge badge-suchna">Info</span>
            </div>
            <div className="code-example">
              <pre>
                <code>{`<span class="badge badge-mukhya">Main</span>
<span class="badge badge-safalta">Success</span>`}</code>
              </pre>
            </div>
          </div>

          {/* Pahaad Header */}
          <div className="component-demo">
            <h3 className="chota-sheersh">Pahaad Header</h3>
            <div className="component-example">
              <header className="pahaad-header">
                <h1>Pahaadi Vibes</h1>
                <p>Welcome to the serene beauty of the mountains!</p>
              </header>
            </div>
            <div className="code-example">
              <pre>
                <code>{`<header className="pahaad-header">
  <h1>Pahaadi Vibes</h1>
  <p>Welcome to the serene beauty of the mountains!</p>
</header>`}</code>
              </pre>
            </div>
          </div>

          {/* Patjhad Animation Section */}
<div className="component-demo patjhad-section">
  <h2 className="chota-sheersh">Patjhad Animation</h2>
  
  {/* Animation Display */}
  <div className="animation-box">
    <span className="patjhad-leaf">🍂</span>
  </div>

  {/* Reusable Code Box */}
  <div className="code-example">
    <pre>
      <code>{`
<span className="patjhad-leaf">🍂</span>

<style>
  .patjhad-leaf {
    position: absolute;
    top: -50px;
    left: 50%;
    font-size: 2rem;
    animation: patjhad 6s linear infinite;
  }

  @keyframes patjhad {
    0% {
      transform: translateX(0) translateY(0) rotate(0deg);
      opacity: 1;
    }
    50% {
      transform: translateX(-50px) translateY(300px) rotate(180deg);
      opacity: 0.7;
    }
    100% {
      transform: translateX(50px) translateY(600px) rotate(360deg);
      opacity: 0;
    }
  }
</style>`}
      </code>
    </pre>
  </div>
</div>


          {/* Bijli Loader */}
          <div className="component-demo">
            <h3 className="chota-sheersh">Bijli Loader</h3>
            <div className="component-example">
              <div className="bijli-loader">
                <div className="bijli"></div>
              </div>
            </div>
            <div className="code-example">
              <pre>
                <code>{`<div className="bijli-loader">
  <div className="bijli"></div>
</div>`}</code>
              </pre>
            </div>
          </div>

{/* Suraj-Patti Toggle */}
<div className="component-demo" style={{ marginTop: "5rem" }}>
  <h2 className="chota-sheersh" style={{ marginBottom: "5rem" }}>
    Suraj-Patti Toggle
  </h2>

  <div className="component-example" style={{ marginBottom: "0.01rem" }}>
    <label className="suraj-patti-toggle">
      <input type="checkbox" />
      <span className="slider"></span>
    </label>
  </div>

  <div className="code-example">
    <pre>
      <code>{`<label className="suraj-patti-toggle">
  <input type="checkbox" />
  <span className="slider"></span>
</label>`}</code>
    </pre>
  </div>
</div>

{/* Ghass List */} 
<div className="component-demo">
  <h3 className="chota-sheersh">Ghass List</h3>
  <div className="component-example">
    <ul className="ghass-list">
      <li>Hari Ghass</li>
      <li>Neem ki Patti</li>
      <li>Tulsi ke Patte</li>
    </ul>
  </div>
  <div className="code-example">
    <pre>
      <code>{`<ul className="ghass-list">
  <li>Hari Ghass</li>
  <li>Neem ki Patti</li>
  <li>Tulsi ke Patte</li>
</ul>`}</code>
    </pre>
  </div>
</div>

{/* Tehni Timeline */}
<div className="component-demo">
  <h3 className="chota-sheersh">Tehni Timeline</h3>
  <div className="component-example">
    <div className="tehni-timeline">
      <div className="event">
        <p>Beej boya gaya</p>
      </div>
      <div className="event">
        <p>Paudha uga</p>
      </div>
      <div className="event">
        <p>Phal laga</p>
      </div>
    </div>
  </div>
  <div className="code-example">
    <pre>
      <code>{`<div className="tehni-timeline">
  <div className="event">
    <p>Beej boya gaya</p>
  </div>
  <div className="event">
    <p>Paudha uga</p>
  </div>
  <div className="event">
    <p>Phal laga</p>
  </div>
</div>`}</code>
    </pre>
  </div>
</div>

{/* Beej Avatar */}
<div className="component-demo">
  <h3 className="chota-sheersh">Beej Avatar</h3>
  <div className="component-example">
    <div className="beej-avatar">A</div>
    <div className="beej-avatar">B</div>
    <div className="beej-avatar">🌰</div>
  </div>
  <div className="code-example">
    <pre>
      <code>{`<div className="beej-avatar">A</div>
<div className="beej-avatar">B</div>
<div className="beej-avatar">🌰</div>`}</code>
    </pre>
  </div>
</div>


        {/* Dynamic Column Container */}
        <div className="component-demo">
          <h3 className="chota-sheersh">Column Layout</h3>
          <div className="component-example" id="column-container">
            <div className="column-item">Neem</div>
            <div className="column-item">Tulsi</div>
            <div className="column-item">Giloy</div>
            <div className="column-item">Aloe Vera</div>
            <div className="column-item">Ashwagandha</div>
          </div>
          </div>

          {/* Pahadi Notification Bell */}
          <div className="component-demo">
            <h3 className="chota-sheersh">Pahadi Notification Bell</h3>
            <div className="component-example">
              <div className="pahadi-bell">
                <div className="bell"></div>
                <div className="badge">1</div>
              </div>
            </div>
            <div className="code-example">
              <pre>
                <code>{`<div className="pahadi-bell">
  <div className="bell"></div>
  <div className="badge">1</div>
</div>`}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}