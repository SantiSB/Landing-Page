import React from "react";
import mockup from "../../assets/svg/mockup.png"
function Product() {
  return <div className="Main-Product">
    <h2>Trabajamos para <b>Convertir ideas</b> en <b>productos.</b></h2>
    <img src={mockup}></img>
  </div>;
}

export default Product;
