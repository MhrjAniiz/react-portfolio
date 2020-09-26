import "./navbar.css";
import React, { Component } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
    };
  }

  handleClick = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };
  render() {
    return (
      <div className="navbar">
        <h1>
          <Link className="nav-link" to="/">portfolio</Link>
        </h1>

        <div className={this.state.isOpen ? "nav-text show-text" : "nav-text "}>
          <p>
            <a
              className="nav-link"
              href="https://mhrjanish.pythonanywhere.com/static/image/anishcv-converted.pdf"
            >
              resume
            </a>
          </p>
          <p>
           
           <Link className="nav-link" to="/projects">projects </Link>
         </p>
         <p>
           
            <Link className="nav-link" to="/skills">skills </Link>
          </p>

          <p>
           
            <Link className="nav-link" to="/about">about me </Link>
          </p>
        </div>

        <div className="burger" onClick={this.handleClick}>
          <MenuIcon />
        </div>
      </div>
    );
  }
}
