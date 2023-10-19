import React, { useState } from "react";

export default function FooterLower() {
  const [firstFaq, setFirstFaq] = useState(false);
  const [firstFaq2, setFirstFaq2] = useState(false);
  const [firstFaq3, setFirstFaq3] = useState(false);
  return (
    <section className="px-5 mb-5 pb-5">
      <div className="accordian">
        <div className="mt-4 frist-sec-inner">
          <h2 className="fw-bold mb-4 fs-3">FAQ</h2>
        </div>
        <div class="accordion" id="accordionPanelsStayOpenExample">
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class={`accordion-button ${firstFaq ? "" : "collapsed"}`}
                type="button"
                onClick={() => {
                  setFirstFaq(!firstFaq);
                }}
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseOne"
                aria-expanded="true"
                aria-controls="panelsStayOpen-collapseOne"
              >
                What is carwow?
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseOne"
              class={`accordion-collapse collapse ${firstFaq ? "show" : ""}`}
            >
              <div class="accordion-body">
                <p>
                  carwow is an online platform for buying a new car or selling
                  your old one! We bring you great offers from thousands of
                  trusted partners so you can buy or sell your car in just a few
                  clicks. No haggling and no fees.
                </p>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class={`accordion-button ${firstFaq2 ? "" : "collapsed"}`}
                type="button"
                onClick={() => {
                  setFirstFaq2(!firstFaq2);
                }}
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseTwo"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseTwo"
              >
                How does carwow work?
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseOne"
              class={`accordion-collapse collapse ${firstFaq2 ? "show" : ""}`}
            >
              <div class="accordion-body">
                <p>
                  It only takes a few minutes to get started. Whether you are
                  buying or selling, you answer a few questions, we send your
                  information out to local and national partners and they come
                  back to you with great offers.
                </p>
                <p>
                  If buying a new car, once you receive an offer you are happy
                  with, you can contact your chosen dealer with ease. If you are
                  selling your car, simply accept the offer and we’ll reach out
                  to arrange a collection. We’re here to help if you need us at
                  any step of the journey.
                </p>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
               class={`accordion-button ${firstFaq3 ? "" : "collapsed"}`}
                type="button"
                onClick={() => {
                  setFirstFaq3(!firstFaq3);
                }}
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseThree"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseThree"
              >
                Does it cost me anything to use carwow?
              </button>
            </h2>{" "}
            <div
              id="panelsStayOpen-collapseOne"
              class={`accordion-collapse collapse ${firstFaq3 ? "show" : ""}`}
            >
              <div class="accordion-body">
                <p>
                  No, it’s completely free! Whether buying or selling, you won’t
                  face any costs - just great offers!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
