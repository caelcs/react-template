import React from "react";
import "./navbar.css";

import logo from "./logo.svg";
import search from "./search.svg";
import menu from "./menu.png";
import arrow from "./right-arrow.svg";
import close from "./close.svg";

export default class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openMenu: false
    };
    this.handleMenu = this.handleMenu.bind(this);
  }

  componentDidMount() {
    if (window.innerWidth >= 768) this.setState({ openMenu: true });
  }

  handleMenu(e) {
    e.preventDefault();
    this.setState(({ openMenu }) => ({ openMenu: !openMenu }));
  }

  render() {
    const width = window.innerWidth;
    const { openMenu } = this.state;
    return (
      <div className="navbarContainer">
        <img src={logo} alt="logo" className="navbarLogo" />
        {openMenu ? (
          <div className="navbarSections">
            <div className="navbarSection">
              about us
              <img src={arrow} alt="arrow" className="arrow" />
            </div>
            <div className="navbarSection">
              products
              <img src={arrow} alt="arrow" className="arrow" />
            </div>
            <div className="navbarSection">
              support
              <img src={arrow} alt="arrow" className="arrow" />
            </div>
            <div className="navbarSection">
              contact
              <img src={arrow} alt="arrow" className="arrow" />
            </div>
          </div>
        ) : null}
        <div className="navbarSearch">
          <div className="dividerInput" />
          <img src={search} alt="search" className="search" />
          <input type="text" placeholder="VM-HL28" />
        </div>
        {width < 768 ? (
          <div>
            <img src={search} alt="search" className="searchMobile" />
            <img
              src={openMenu ? close : menu}
              alt={openMenu ? "close" : "menu"}
              className={openMenu ? "close" : "menu"}
              onClick={this.handleMenu}
            />
          </div>
        ) : null}
      </div>
    );
  }
}
