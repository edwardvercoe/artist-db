import React from "react";
import "./home.scss";
import Carousel from "../Carousel/Carousel";
import Button from "@material-ui/core/Button";


export default function Home() {
  return (
    <div className="homeContainer">
      <div className="hero-copy">
        <h1>SITE TITLE CONNECTS YOU WITH AUSTRALIA’S BEST LGBT+ PRO DJ'S.</h1> 
        
        <p>ARE YOU A PERFORMER, COMEDIAN, ARTIST, MC OR ANYTHING IN BETWEEN? WE WANT TO HEAR FROM YOU.</p>
        
        <h3>APPLICATIONS HAVE NOW OPENED GLOBALLY.</h3>
        <Button
        size="large"
        color="primary"
        variant="contained"
        className="btn-search"
      >
        <img
          className="asset-shine"
          src="static/assets/shine.png"
          alt="shine"
        />
        APPLY NOW!
      </Button>
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
