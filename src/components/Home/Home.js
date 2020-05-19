import React from "react";
import "./home.scss";
import Carousel from "../Carousel/Carousel";

export default function Home() {
  return (
    <div className="homeContainer">
      <div className="hero-copy">
        SITE TITLE CONNECTS YOU WITH AUSTRALIA’S BEST QUEER ARTISTS. LOREM IPSUM
        DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT. SED SOLLICITUDIN VULPUTATE
        ENIM IN SCELERISQUE. UT LAOREET GRAVIDA ELIT, UT VOLUTPAT DIAM AUCTOR
        QUIS.
      </div>
      <img className="asset-smiley" src="static/assets/smiley.png" alt="smiley icon"></img>
      
      <div className="carouselWrapper">
      <h3>FEATURED ARTISTS</h3>
        <Carousel class="featuredContainer" />
      </div>
      <div className="applyContainer">
        <h3>WANT TO GET FEATURED? BUILD YOUR PROFILE NOW!</h3>
        <img src="static/assets/arrowHoleL.png" alt="squiggly arrow decoration"></img>
      </div>

      <p>
        MORBI SIT AMET MI LACUS. PELLENTESQUE VITAE LIGULA FAUCIBUS METUS DICTUM
        VARIUS NON ET MAGNA. QUISQUE SED MATTIS NEQUE. SED VULPUTATE ANTE AUGUE,
        UT PORTA DOLOR FERMENTUM NON. ETIAM GRAVIDA VESTIBULUM ULLAMCORPER. UT
        AUGUE AUGUE, POSUERE IACULIS MALESUADA EGET, CONDIMENTUM A RISUS.
      </p>
    </div>
  );
}
