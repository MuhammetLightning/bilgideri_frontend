import { useState } from "react";
import About from "./components/about/About";
import Intro from "./components/intro/Intro";
import Product from "./components/product/Product";
import Topbar from "./components/topbar/Topbar";
import Menu from "./components/menu/Menu";
import { BrowserRouter } from "react-router-dom";
import Production from "./components/production/Production";
import Certifications from "./components/certifications/Certifications";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <BrowserRouter>
      <div className="App">
        <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Intro />
        <About />
        <Product />
        <Production />
        <Certifications />
        <Contact />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
