import { Component } from "react";
import "./navbar.css";
// import MainHome from "../../../pages/MainHome";
// import { MenuList } from "./MenuList";
// import { RightEnd } from "./RightEnd";

class Navbar extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <>
      <nav className="NavbarItems">
        <h1 className="navbar-logo">
          <a href="/">
            <img
              className="socialMedia"
              src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_120,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/brand-logo/vman-and-white-cult-text.png"
            ></img>
          </a>
        </h1>
        <div className="menu-icon" onClick={this.handleClick}>
          <i
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>
        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          <li>
            <a className="nav-links" href="/fitness">
              FITNESS
            </a>
          </li>
          <li>
            <a className="nav-links" href="/care">
              CARE
            </a>
          </li>
          <li>
            <a className="nav-links" href="/mind">
              MIND
            </a>
          </li>
          <li>
            <a className="nav-links" href="/store">
              STORE
            </a>
          </li>
          <li>
            <a className="nav-links" href="/sign">
              SIGN UP
            </a>
          </li>
          <li>
            <a className="nav-links" href="/cart">
              CART
            </a>
          </li>
        </ul>
      </nav>
      </>
    );
  }
}
export default Navbar;
