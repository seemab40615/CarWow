import React from "react";
import { Ddown } from "../../Svgs";

export default function Header() {
  return (
    <header className="padding-head px-5">
        <div className="button-heading" > 
      <h1 class="hero-campaign__title hero-campaign__title--large ">
        Buy. Sell. Wow.
      </h1>
      <div>
        <button className="header-button">
            Sell my car   <span>   <Ddown/></span>
        </button>
        
      </div>
      <div>
        <button className="header-button ">
            Buy a car
         <span className="ml-0">   <Ddown/></span>
        </button>
      </div>
      
      </div>
    </header>
  );
}
