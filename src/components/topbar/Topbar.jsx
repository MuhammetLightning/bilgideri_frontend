import { HashLink } from "react-router-hash-link";
import "./topbar.css";

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="topbarWrapper">
        <div className="topbarLeft">
          <HashLink to="/</div>#intro" className="logo">
            bilgideri.
          </HashLink>
          <div className="itemContainer">
            <span>+90 544 370 70 16</span>
          </div>
          <div className="itemContainer">
            <span>contact@bilgideri.com</span>
          </div>
        </div>

        <div className="topbarRight">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
