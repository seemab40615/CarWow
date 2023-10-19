import React from "react";
import icon1 from "../Assets/Screenshot1.png";
import icon2 from "../Assets/Screenshot2.png";
import icon3 from "../Assets/Screenshot3.png";
export default function FirstSection() {
  return (
    <section className="px-5 frist-sec my-5">
      <div className="mt-4 frist-sec-inner">
        <h2 className="pb-5">The free, easy way to change your car online </h2>
        <div className="card-main d-flex justify-content-between frist-sec-inner-ads">
          <div className="card-first">
            <div> <img src={icon1} alt="err" /></div>
            <h4 className="m-0">Free</h4>
            <p className="m-0">No haggling, no fees, just great prices  <br /><span className="hidden"> within a few
              clicks</span></p>
          </div>
          <div className="card-first">
             <div> <img src={icon2} alt="err" /></div>
            <h4 className="m-0">Convenient</h4>
            <p className="text-center m-0">
              thousands of trusted dealers to buy or sell <br /> within a few
              clicks
            </p>
          </div>
          <div className="card-first">
          <div> <img src={icon3} alt="err" /></div>
            <h4 className="m-0">Trusted</h4>
            <p className="text-center m-0">
              100s of independent reviews and the <br /> world’s most popular
              car <a href="/">YouTube channel.</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
