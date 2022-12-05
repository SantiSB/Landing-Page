import React from "react";
import instagram from "../../assets/svg/instagram.svg"
import logo from "../../assets/svg/logo.svg"

const Footer = () => {
  return (
    <div className="Main-Footer">
      <div className="text-footer">
        <h4>Gracias por <b className="text-color">completar el ejercicio</b></h4>
        <p>Te invitamos a ver más información</p>
      </div>
      <div className="social-media">
        <a href="#">
          <img src={instagram} className="instagram-icon"></img>
        </a>
        <a href="#">
          <button>Conocer Más</button>
        </a>
        
      </div>
      <hr></hr>
        <a href="#">
          <img src={logo} className="logo-footer"></img>
        </a>
    </div>
  );
};

export default Footer;
