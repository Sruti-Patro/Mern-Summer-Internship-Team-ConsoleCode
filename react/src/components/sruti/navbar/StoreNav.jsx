import { Component } from "react";
import "./Store.css";
import { RightEnd } from "./RightEnd";

class StoreNav extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <nav className="NavbarItems">
        <div className="menu-icon" onClick={this.handleClick}>
          <i
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>
        <label htmlFor="menu-icon"></label>
        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          <h1 className="navbar-logo">
                    <a href="/">
                      <img
                        className="socialMedia"
                        src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_135,ar_3.87,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/brand-logo/new_cultsport_black.svg"
                      ></img>
                    </a>
                  </h1>
          <div className="header">
            <div className="navbar">
              <ul>
                <li>
                  <a href="">New Arrivals</a>
                      <ul>
                        <li><a href="#">ALL</a></li>
                        <li><a href="#">RECOVERY</a></li>
                        <li><a href="#">MEN</a></li>
                        <li><a href="#">WOMEN</a></li>
                        <li><a href="#">SMARTWATCH</a></li>
                        <li><a href="#">SPORTS SHOES</a></li>
                        <li><a href="#">CARDIO</a></li>
                      </ul>
                </li>
                <li>
                  <a href=""> Men</a>
                  <ul>
                        <li><a href="#">ALL</a></li>
                        <li><a href="#">FOOTWEAR</a></li>
                        <li><a href="#">T-SHIRTS</a></li>
                        <li><a href="#">SHORTS</a></li>
                        <li><a href="#">SHIRTS & PANTS</a></li>
                        <li><a href="#">JOGGERS & TRACK PANTS</a></li>
                        <li><a href="#">JACKETS & SWEATSHIRTS</a></li>
                      </ul>
                </li>
                <li>
                  <a href=""> Women</a>
                  <ul>
                        <li><a href="#">ALL</a></li>
                        <li><a href="#">FOOTWEAR</a></li>
                        <li><a href="#">T-SHIRTS</a></li>
                        <li><a href="#">KURTI</a></li>
                        <li><a href="#">CO-ORDS</a></li>
                        <li><a href="#">SPORTS BRA</a></li>
                        <li><a href="#">TIGHTS</a></li>
                        <li><a href="#">SHORTS</a></li>
                        <li><a href="#">JOGGERS & TRACK PANTS</a></li>
                        <li><a href="#">JACKETS & SWEATSHIRTS</a></li>
                        <li><a href="#">BOYSHORTS</a></li>
                        <li><a href="#">PANTS</a></li>
                      </ul>
                </li>
                <li>
                  <a href="">Cardio</a>
                  <ul>
                        <li><a href="#">ALL</a></li>
                        <li><a href="#">SPINBIKES</a></li>
                        <li><a href="#">TREADMILLS</a></li>
                        <li><a href="#">ELLIPTICAL</a></li>
                        <li><a href="#">ROWER</a></li>
                      </ul>
                </li>
                <li>
                  <a href="">Cycles</a>
                  <ul>
                        <li><a href="#">ALL</a></li>
                        <li><a href="#">GEARED CYCLES</a></li>
                        <li><a href="#">NON-GEARED</a></li>
                      </ul>
                </li>
                <li>
                  <a href="">Accessories</a>
                  <ul>
                        <li><a href="#">ALL</a></li>
                        <li><a href="#">TOWEL</a></li>
                        <li><a href="#">GLOVES</a></li>
                        <li><a href="#">MASK</a></li>
                        <li><a href="#">DUFFLEBAG</a></li>
                        <li><a href="#">SOCKS</a></li>
                        <li><a href="#">YOGA MAT</a></li>
                        <li><a href="#">JUMPING ROPE</a></li>
                      </ul>
                </li>
                <li>
                  <a href=""> Equipment</a>
                  <ul>
                        <li><a href="#">ALL</a></li>
                        <li><a href="#">STRENGTH</a></li>
                        <li><a href="#">RECOVERY</a></li>
                        <li><a href="#">OTHERS</a></li>
                      </ul>
                </li>
                <li>
                  <a href="">Supplements</a>
                  <ul>
                        <li><a href="#">ALL</a></li>
                        <li><a href="#">PERSONAL CARE</a></li>
                        <li><a href="#">PROTEIN</a></li>
                        <li><a href="#">SNACKS</a></li>
                        <li><a href="#">STAPLES</a></li>
                        <li><a href="#">VITAMINS</a></li>
                        <li><a href="#">WEIGHT LOSS</a></li>
                        <li><a href="#">IMMUNITY</a></li>
                        <li><a href="#">MUSCLE RECOVERY</a></li>
                      </ul>
                </li>
                <li>
                  <a href=""> Watch</a>
                  <ul>
                        <li><a href="#">SMART WATCH</a></li>
                      </ul>
                </li>
                <li>
                  <a href=""> News</a>
                </li>
              </ul>
            </div>
          </div>
        </ul>
        <ul className="nav-menu">
          {RightEnd.map((item, index) => {
            return (
              <li key={index}>
                <a className={item.cName} href={item.url}>
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}
export default StoreNav;
