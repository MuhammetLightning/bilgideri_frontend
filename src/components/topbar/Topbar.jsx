import { HashLink } from "react-router-hash-link";
import "./topbar.css";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="topbarWrapper">
        <div className="topbarLeft">
          <HashLink to="/</div>#intro" className="logo">
            bilgideri.
          </HashLink>
          <div className="itemContainer">
            <img src={Phone} alt="" className="c-icon" />
            <span>+1 1234 556 75</span>
          </div>
          <div className="itemContainer">
            <img className="c-icon" src={Email} alt="" />
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
