import React from "react";
import flexibilidad from "../../assets/svg/flexibilidad.svg";
import home from "../../assets/svg/home.svg";
import workshops from "../../assets/svg/workshops.svg";
import snacks from "../../assets/svg/snacks.svg";
import left from "../../assets/svg/left.svg";
import rigth from "../../assets/svg/rigth.svg";
import slides from "../../assets/svg/slides.svg";
function BenefitsIcons() {
  return (
    <>
      <div className="BenefitsIconsGrid">
        <div className="BenefitsArrow">
          <img src={left}></img>
        </div>
        <div className="BenefitsIcons">
          <div className="ItemBenefit">
            <img src={flexibilidad}></img>
            <p>Flexibilidad Horaria</p>
          </div>
          <div className="ItemBenefit">
            <img src={home}></img>
            <p>Home Office</p>
          </div>
          <div className="ItemBenefit">
            <img src={workshops}></img>
            <p>Capacitaciones y Workshops</p>
          </div>
          <div className="ItemBenefit">
            <img src={snacks}></img>
            <p>Snacks, frutas y verduras grátis</p>
          </div>
        </div>
        <div className="BenefitsArrow">
          <img src={rigth}></img>
        </div>
      </div>
      <div className="BenefitsIconsSlides">
        <img src={slides}></img>
      </div>
    </>
  );
}

export default BenefitsIcons;
