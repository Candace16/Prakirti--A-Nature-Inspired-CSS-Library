"use client"

import { useState } from "react"
import "./styles/prakriti-ui.css"
import ColorPalette from "./components/ColorPalette"
import GridDemo from "./components/GridDemo"
import TypographyDemo from "./components/TypographyDemo"
import ComponentsDemo from "./components/ComponentsDemo"
import UtilityDemo from "./components/UtilityDemo"
import { Leaf, Sun, Moon, Flower, TreePine } from "lucide-react"

export default function App() {
  const [mausam, setMausam] = useState("garmi") // Default: summer mode

  const toggleMausam = () => {
    setMausam((prev) => (prev === "garmi" ? "sardi" : "garmi"))
  }

  return (
    <div className={`prakriti ${mausam}`}>
      <header className="sheersh">
        <div className="dabba andar-dabba">
          <div className="logo">
            <Leaf className="patta-icon" />
            <h1>प्रकृति UI</h1>
          </div>
          <button
            className="mausam-btn"
            onClick={toggleMausam}
            aria-label={mausam === "garmi" ? "Switch to Winter Mode" : "Switch to Summer Mode"}
          >
            {mausam === "garmi" ? <Moon /> : <Sun />}
            {mausam === "garmi" ? "Switch to सर्दी" : "Switch to गर्मी"}
          </button>
        </div>
      </header>

      <main className="mukhya">
        <section className="swagat-section">
          <div className="dabba andar-dabba">
            <div className="vishay-vastu">
              <h1 className="bada-sheersh">प्रकृति UI</h1>
              <p className="upsheersh">Ek khoobsurat nature-inspired CSS library - Hindi class names ke saath</p>
              <div className="btn-samooh">
                <a href="#features" className="btn mukhya-btn">
                  Features dekhein
                </a>
                <a href="https://github.com/prakriti-ui" className="btn gaun-btn">
                  GitHub pe dekhein
                </a>
              </div>
            </div>
            <div className="chitra">
              <div className="patta-samooh">
                <Leaf className="patta patta-1" />
                <Leaf className="patta patta-2" />
                <Leaf className="patta patta-3" />
                <Flower className="phool phool-1" />
                <Flower className="phool phool-2" />
                <TreePine className="ped" />
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="visheshta-section">
          <div className="dabba andar-dabba">
            <h2 className="madhyam-sheersh">Features</h2>
            <div className="visheshta-grid">
              <div className="visheshta-card">
                <h3>Color Palette</h3>
                <p>Nature se inspired rangon ka collection</p>
              </div>
              <div className="visheshta-card">
                <h3>Grid System</h3>
                <p>12-column responsive layout</p>
              </div>
              <div className="visheshta-card">
                <h3>Utility Classes</h3>
                <p>Spacing, typography, flexbox aur zyada</p>
              </div>
              <div className="visheshta-card">
                <h3>Mausam Themes</h3>
                <p>Summer (गर्मी) aur Winter (सर्दी) ke modes</p>
              </div>
              <div className="visheshta-card">
                <h3>Reusable Components</h3>
                <p>Modular aur reusable UI components</p>
              </div>
              <div className="visheshta-card">
                <h3>Hindi Naming</h3>
                <p>Simplified aur meaningful class names</p>
              </div>
            </div>
          </div>
        </section>

        <ColorPalette />
        <GridDemo />
        <TypographyDemo />
        <UtilityDemo />
        <ComponentsDemo />

        <section className="upyog-section">
          <div className="dabba andar-dabba">
            <h2 className="madhyam-sheersh">Use Kaise Karein</h2>
            <div className="code-block">
              <pre>
                <code>{`<!-- HTML mein Prakriti UI use karein -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/prakriti-ui/dist/prakriti-ui.min.css">

<!-- Ya phir NPM se install karein -->
npm install prakriti-ui

<!-- React mein import karein -->
import 'prakriti-ui/dist/prakriti-ui.min.css';`}</code>
              </pre>
            </div>
          </div>
        </section>
      </main>

      <footer className="padtal">
        <div className="dabba andar-dabba">
          <p>© 2025 Prakriti UI. Sabhi rights reserved.</p>
          <div className="sampark">
            <a href="#" className="sampark-link">
              GitHub
            </a>
            <a href="#" className="sampark-link">
              NPM
            </a>
            <a href="#" className="sampark-link">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
