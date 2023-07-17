import "./menu.css";
import { HashLink } from "react-router-hash-link";

export default function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={"menu " + (menuOpen && "active")}>
      <ul>
        <li onClick={() => setMenuOpen(false)}>
          <HashLink to="/#intro">Home</HashLink>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <HashLink to="/#about">About Us</HashLink>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <HashLink to="/#product">Products</HashLink>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <HashLink to="/#production">Production</HashLink>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <HashLink to="/#certifications">Certifications</HashLink>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <HashLink to="/#contact">Contact</HashLink>
        </li>
      </ul>
    </div>
  );
}
