import React from "react";

export default function AdsHead() {
  return (
    <div className="bg-white ads-main ">
      <div className="ads-inner px-5">
        <div className="ads-inner-img px-4 py-3">
            <div>
          <h4 className="text-white">Get a lot MORE with carwow's</h4>
          <h4 className="text-white m-0">Car of the Year 2023 - The MG4 EV.</h4>
          <p className="text-white p-miles">
            With up to 323 miles of electric range* plus a 7 year warranty{" "}
            <br />
            Get more with MG. A lot MORE.
          </p>
          <h4 className="text-white mt-3 pt-3">From £26,995</h4>
          </div>
          <div>
            <button className="Discover">Discover more</button>
           </div>
           <div>
            <p>
              <small className="text-white"> Advertisement </small>
            </p>
            <p>
              <small className="text-white"> *Terms & Conditions apply </small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
