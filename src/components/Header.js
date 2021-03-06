import React, { Component } from "react";
import Navigation from "./Navigation";
import { Link } from "react-router-dom";
import throttle from "lodash.throttle";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasScrolled: false,
    };
  }

  // componentDidMount() {
  //   window.addEventListener("scroll", this.handleScroll);
  // }

  // componentWillUnmount() {
  //   window.removeEventListener("scroll", this.handleScroll);
  // }

  handleScroll = (event) => {
    const scrollTop = window.pageYOffset;
    console.log(scrollTop);
    if (scrollTop > 50) {
      this.setState({ hasScrolled: true });
    } else {
      this.setState({ hasScrolled: false });
    }
  };

  render() {
    return (
      <header
        className={
          this.state.hasScrolled ? "header header--scrolled" : "header"
        }
      >
        <Link to="/">
          <span className="header__logo">Mikaela Gurney</span>
        </Link>
        <Navigation
          modifier={this.state.hasScrolled ? " navigation__icon--scrolled" : ""}
        />
      </header>
    );
  }
}
export default Header;
