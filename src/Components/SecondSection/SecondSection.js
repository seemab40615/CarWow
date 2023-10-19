import React from "react";
import { GBP } from "../../Svgs";

export default function SecondSection() {
  return (
    <section className="px-5">
      <div className="Second-main">
        <div className="second-first__main">
          <div>
            <h2 className="text-white">
              Sell your car for what <br />
              it's really worth
            </h2>

            <p className="text-white worth">
              The free easy way to get 3000+ dealers <br /> all over the UK
              bidding on your car
            </p>
          </div>
          <div>
            <label className="text-white worth">
              Your vehicle registration
            </label>
            <div className="d-flex w-100 form">
              <div className="flag-input d-flex align-items-center w-100">
                <span className="flag-icon">
                  <GBP /> GB
                </span>
                <input placeholder="ENTER REG" />
              </div>
              <div className="flag-input-button d-flex align-items-center w-100">
                <button>Value my car</button>
              </div>
            </div>
          </div>
          <div>
            <p className="text-white worth mb-0 mt-3">
              Learn how to{" "}
              <a href="/" className="text-white sell-car">
                sell your car
              </a>{" "}
              with carwow
            </p>
          </div>
        </div>
        <div className="second-first__second">
          <div class="video-background">
            <video loop muted>
              <source src="https://carwow-uk-3.imgix.net/homepage/video/youtube.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div class="content"></div>
          </div>
          <div className="text-onvedio">
            <div>
              <h2 className="text-white">
                Sell your car for what <br />
                it's really worth
              </h2>

              <p className="text-white worth">
                The free easy way to get 3000+ dealers <br /> all over the UK
                bidding on your car
              </p>
            </div>

            <div>
              <p className="text-white worth mb-0 mt-3">
                Learn how to{" "}
                <a href="/" className="text-white sell-car">
                  sell your car
                </a>{" "}
                with carwow
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
