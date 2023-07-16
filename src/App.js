import { useState } from "react";
import About from "./components/about/About";
import Intro from "./components/intro/Intro";
import Product from "./components/product/Product";
import Topbar from "./components/topbar/Topbar";
import Menu from "./components/menu/Menu";
import { BrowserRouter } from "react-router-dom";

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
      </div>
    </BrowserRouter>
  );
}

export default App;
