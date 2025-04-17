export default function GridDemo() {
  return (
    <section className="grid-section">
      <div className="dabba andar-dabba">
        <h2 className="madhyam-sheersh">Grid Pranali</h2>
        <p className="section-desc">
          12-column responsive grid pranali jo sabhi device sizes pe acche se kaam karti hai.
        </p>

        <div className="grid-demo">
          <h3 className="chota-sheersh">Basic Grid</h3>
          <div className="pankti">
            <div className="stambh-12">
              <div className="grid-box">stambh-12</div>
            </div>
          </div>

          <div className="pankti">
            <div className="stambh-6">
              <div className="grid-box">stambh-6</div>
            </div>
            <div className="stambh-6">
              <div className="grid-box">stambh-6</div>
            </div>
          </div>

          <div className="pankti">
            <div className="stambh-4">
              <div className="grid-box">stambh-4</div>
            </div>
            <div className="stambh-4">
              <div className="grid-box">stambh-4</div>
            </div>
            <div className="stambh-4">
              <div className="grid-box">stambh-4</div>
            </div>
          </div>

          <div className="pankti">
            <div className="stambh-3">
              <div className="grid-box">stambh-3</div>
            </div>
            <div className="stambh-3">
              <div className="grid-box">stambh-3</div>
            </div>
            <div className="stambh-3">
              <div className="grid-box">stambh-3</div>
            </div>
            <div className="stambh-3">
              <div className="grid-box">stambh-3</div>
            </div>
          </div>

          <div className="pankti">
            <div className="stambh-2">
              <div className="grid-box">stambh-2</div>
            </div>
            <div className="stambh-2">
              <div className="grid-box">stambh-2</div>
            </div>
            <div className="stambh-2">
              <div className="grid-box">stambh-2</div>
            </div>
            <div className="stambh-2">
              <div className="grid-box">stambh-2</div>
            </div>
            <div className="stambh-2">
              <div className="grid-box">stambh-2</div>
            </div>
            <div className="stambh-2">
              <div className="grid-box">stambh-2</div>
            </div>
          </div>
        </div>

        <div className="grid-demo">
          <h3 className="chota-sheersh">Responsive Grid</h3>
          <p>Screen size change karte hi grid ka behavior check karo:</p>

          <div className="pankti">
            <div className="stambh-12 stambh-md-6 stambh-lg-4">
              <div className="grid-box">Responsive</div>
            </div>
            <div className="stambh-12 stambh-md-6 stambh-lg-4">
              <div className="grid-box">Responsive</div>
            </div>
            <div className="stambh-12 stambh-md-6 stambh-lg-4">
              <div className="grid-box">Responsive</div>
            </div>
          </div>
        </div>

        <div className="grid-demo">
          <h3 className="chota-sheersh">Grid Offset</h3>

          <div className="pankti">
            <div className="stambh-6 offset-3">
              <div className="grid-box">stambh-6 offset-3</div>
            </div>
          </div>

          <div className="pankti">
            <div className="stambh-4 offset-2">
              <div className="grid-box">stambh-4 offset-2</div>
            </div>
            <div className="stambh-4 offset-2">
              <div className="grid-box">stambh-4 offset-2</div>
            </div>
          </div>
        </div>

        <div className="code-example">
          <h3 className="chota-sheersh">Use Example</h3>
          <pre>
            <code>{`<div class="pankti">
  <div class="stambh-12 stambh-md-6 stambh-lg-4">
    <!-- content -->
  </div>
  <div class="stambh-12 stambh-md-6 stambh-lg-4">
    <!-- content -->
  </div>
  <div class="stambh-12 stambh-md-6 stambh-lg-4">
    <!-- content -->
  </div>
</div>`}</code>
          </pre>
        </div>
      </div>
    </section>
  )
}
