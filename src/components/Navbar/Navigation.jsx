import React from "react";
import logo from "../../assets/svg/logo.svg";

const Navigation = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="#">
          <img src={logo}></img>
        </a>
      </div>
      <ul>
        <li>
          <a href="#" className="btn-login">
            LOGIN
          </a>
        </li>
        <li>
          <a href="#">BENEFICIOS</a>
        </li>
        <li>
          <a href="#">INICIO</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
