export default function UtilityDemo() {
  return (
    <section className="utility-section">
      <div className="dabba andar-dabba">
        <h2 className="madhyam-sheersh">Upyogi Classes</h2>
        <p className="section-desc">
          Prakriti UI mein spacing, flexbox aur kuch aur helpful utility classes milti hain.
        </p>

        <div className="utility-demo">
          <h3 className="chota-sheersh">Spacing (Margin aur Padding)</h3>

          <div className="spacing-examples">
            <div className="spacing-example">
              <div className="demo-box m-1">
                <span>m-1</span>
              </div>
              <p className="type-info">
                Class: <code>m-1</code> (margin: 0.25rem)
              </p>
            </div>

            <div className="spacing-example">
              <div className="demo-box m-2">
                <span>m-2</span>
              </div>
              <p className="type-info">
                Class: <code>m-2</code> (margin: 0.5rem)
              </p>
            </div>

            <div className="spacing-example">
              <div className="demo-box m-3">
                <span>m-3</span>
              </div>
              <p className="type-info">
                Class: <code>m-3</code> (margin: 1rem)
              </p>
            </div>

            <div className="spacing-example">
              <div className="demo-box m-4">
                <span>m-4</span>
              </div>
              <p className="type-info">
                Class: <code>m-4</code> (margin: 1.5rem)
              </p>
            </div>

            <div className="spacing-example">
              <div className="demo-box m-5">
                <span>m-5</span>
              </div>
              <p className="type-info">
                Class: <code>m-5</code> (margin: 3rem)
              </p>
            </div>
          </div>

          <div className="spacing-examples">
            <div className="spacing-example">
              <div className="demo-box p-1">
                <span>p-1</span>
              </div>
              <p className="type-info">
                Class: <code>p-1</code> (padding: 0.25rem)
              </p>
            </div>

            <div className="spacing-example">
              <div className="demo-box p-2">
                <span>p-2</span>
              </div>
              <p className="type-info">
                Class: <code>p-2</code> (padding: 0.5rem)
              </p>
            </div>

            <div className="spacing-example">
              <div className="demo-box p-3">
                <span>p-3</span>
              </div>
              <p className="type-info">
                Class: <code>p-3</code> (padding: 1rem)
              </p>
            </div>

            <div className="spacing-example">
              <div className="demo-box p-4">
                <span>p-4</span>
              </div>
              <p className="type-info">
                Class: <code>p-4</code> (padding: 1.5rem)
              </p>
            </div>

            <div className="spacing-example">
              <div className="demo-box p-5">
                <span>p-5</span>
              </div>
              <p className="type-info">
                Class: <code>p-5</code> (padding: 3rem)
              </p>
            </div>
          </div>

          <p className="note">
            Note: Direction-specific classes bhi available hain jaise <code>mt-*</code> (top margin),{" "}
            <code>mb-*</code> (bottom margin), <code>ml-*</code> (left margin), <code>mr-*</code>{" "}
            (right margin) — same padding ke liye bhi.
          </p>
        </div>

        <div className="utility-demo">
          <h3 className="chota-sheersh">Flexbox</h3>

          <div className="flex-examples">
            <div className="flex-example">
              <div className="lachila">
                <div className="flex-item">1</div>
                <div className="flex-item">2</div>
                <div className="flex-item">3</div>
              </div>
              <p className="type-info">
                Class: <code>lachila</code> (display: flex)
              </p>
            </div>

            <div className="flex-example">
              <div className="lachila lachila-stambh">
                <div className="flex-item">1</div>
                <div className="flex-item">2</div>
                <div className="flex-item">3</div>
              </div>
              <p className="type-info">
                Class: <code>lachila lachila-stambh</code> (flex-direction: column)
              </p>
            </div>

            <div className="flex-example">
              <div className="lachila madhya-sanrakhit">
                <div className="flex-item">1</div>
                <div className="flex-item">2</div>
                <div className="flex-item">3</div>
              </div>
              <p className="type-info">
                Class: <code>lachila madhya-sanrakhit</code> (justify-content: center)
              </p>
            </div>

            <div className="flex-example">
              <div className="lachila antim-sanrakhit">
                <div className="flex-item">1</div>
                <div className="flex-item">2</div>
                <div className="flex-item">3</div>
              </div>
              <p className="type-info">
                Class: <code>lachila antim-sanrakhit</code> (justify-content: flex-end)
              </p>
            </div>

            <div className="flex-example">
              <div className="lachila beech-jagah">
                <div className="flex-item">1</div>
                <div className="flex-item">2</div>
                <div className="flex-item">3</div>
              </div>
              <p className="type-info">
                Class: <code>lachila beech-jagah</code> (justify-content: space-between)
              </p>
            </div>
          </div>
        </div>

        <div className="utility-demo">
          <h3 className="chota-sheersh">Other Useful Classes</h3>

          <div className="other-examples">
            <div className="other-example">
              <div className="gol demo-box">
                <span>gol</span>
              </div>
              <p className="type-info">
                Class: <code>gol</code> (border-radius: 50%)
              </p>
            </div>

            <div className="other-example">
              <div className="chaya demo-box">
                <span>chhoti chhaya</span>
              </div>
              <p className="type-info">
                Class: <code>chaya</code> (box-shadow)
              </p>
            </div>

            <div className="other-example">
              <div className="chaya-badi demo-box">
                <span>badi chhaya</span>
              </div>
              <p className="type-info">
                Class: <code>chaya-badi</code> (larger box-shadow)
              </p>
            </div>

            <div className="other-example">
              <div className="chhupa">
                <span>chhupa hua</span>
              </div>
              <p className="type-info">
                Class: <code>chhupa</code> (display: none)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
