import React from 'react'
import enterprise from '../../assets/svg/enterprise.svg'
function Banner() {
  return (
    <div className="Banner">
        <h1>Bienvenido a tu <b>Entrevista Tecnica</b> en <a href="#">
          <img src={enterprise} className="enterprise-icon-banner"></img>
        </a></h1>
    </div>
  );
}

export default Banner;
