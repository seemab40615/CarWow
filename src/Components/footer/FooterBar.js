/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import telegraph from "../Assets/telegraph.png";
import graph from "../Assets/graph.png";
import tele from "../Assets/tele.png";
import trustpilot from "../Assets/trustpilot.png";
import financial from "../Assets/financial.png";
import { Facebook, Insta, Tiktok, Twitter, Youtube } from "../../Svgs";

export default function FooterBar() {
  return (
    <section className="px-5">
      <div>
        <div className="image-featured mb-5">
          <p className="featured m-0">As featured on:</p>
          <div className="featured-main-img">
            <div className="featured-inner-img">
              <img src={telegraph} alt="err" />
              <img src={graph} alt="err" />
            </div>
            <div className="featured-inner-img">
              <img src={tele} alt="err" />
              <img src={financial} alt="err" />
            </div>
          </div>
        </div>
        <div className="featured-lower-main">
          <div className="featured-upper-inner">
            <div className="featured-lower">
              <div>
                <a href="/" className="featured-a">
                  {" "}
                  Help Center
                </a>
                <p className="mb-0 mt-4 featured-p">
                  Monday to Friday 9.00 - 18.00
                </p>
                <p className="mb-0 featured-p">Saturday 9.00 - 17.30</p>
                <p className="mb-0 featured-p">
                  Sundays and Bank Holidays CLOSED
                </p>
                <div>
                  <h5 className="icons">
                    {" "}
                    <Facebook /> <Twitter /> <Insta /> <Youtube /> <Tiktok />{" "}
                  </h5>
                </div>
              </div>
            </div>
            <div className="uls">
              <div>
                <ul class="footer__link-list">
                  <li class="footer__list-item">
                    <a
                      data-detail-element-name="new car deals"
                      data-interaction-type="footer"
                      href="https://www.carwow.co.uk/new-car-deals"
                    >
                      New car deals
                    </a>
                  </li>
                  <li class="footer__list-item">
                    <a
                      data-detail-element-name="nearly new cars"
                      data-interaction-type="footer"
                      href="https://www.carwow.co.uk/nearly-new-cars"
                    >
                      Nearly new cars
                    </a>
                  </li>
                  <li class="footer__list-item">
                    <a
                      data-detail-element-name="approved used cars"
                      data-interaction-type="footer"
                      href="https://www.carwow.co.uk/used-cars"
                    >
                      Used cars
                    </a>
                  </li>
                  <li class="footer__list-item">
                    <a
                      data-detail-element-name="car leasing"
                      data-interaction-type="footer"
                      href="https://www.carwow.co.uk/car-leasing"
                    >
                      Car leasing
                    </a>
                  </li>
                  <li class="footer__list-item">
                    <a
                      data-detail-element-name="car reviews"
                      data-interaction-type="footer"
                      href="https://www.carwow.co.uk/car-reviews"
                    >
                      Car reviews
                    </a>
                  </li>
                  <li class="footer__list-item">
                    <a
                      data-detail-element-name="news"
                      data-interaction-type="footer"
                      href="https://www.carwow.co.uk/editorial/news"
                    >
                      Car news
                    </a>
                  </li>
                  <li class="footer__list-item">
                    <a
                      data-detail-element-name="car chooser"
                      data-interaction-type="footer"
                      href="https://www.carwow.co.uk/car-chooser"
                    >
                      Car chooser
                    </a>
                  </li>
                  <li class="footer__list-item">
                    <a
                      data-detail-element-name="pcp calculator"
                      data-interaction-type="footer"
                      href="https://www.carwow.co.uk/pcp-calculator"
                    >
                      Car finance calculator
                    </a>
                  </li>
                  <li class="footer__list-item">
                    <a
                      data-detail-element-name="compare cars"
                      data-interaction-type="footer"
                      href="https://www.carwow.co.uk/compare-cars"
                    >
                      Compare cars
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <ul class="footer__link-list">
                  <li class="footer__list-item">
                    <a
                      data-detail-element-name="about carwow"
                      data-interaction-type="footer"
                      href="https://www.carwow.co.uk/about-us"
                    >
                      About us
                    </a>
                  </li>
                  <li class="footer__list-item">
                    <a
                      data-detail-element-name="how it works"
                      data-interaction-type="footer"
                      href="https://www.carwow.co.uk/how-it-works"
                    >
                      How it works
                    </a>
                  </li>
                  <li class="footer__list-item">
                    <a
                      data-detail-element-name="team"
                      data-interaction-type="footer"
                      href="https://www.carwow.co.uk/team"
                    >
                      Team
                    </a>
                  </li>
                  <li class="footer__list-item">
                    <a
                      data-detail-element-name="press"
                      data-interaction-type="footer"
                      href="https://www.carwow.co.uk/press"
                    >
                      Press
                    </a>
                  </li>
                  <li class="footer__list-item">
                    <a
                      data-detail-element-name="carwow newsroom"
                      data-interaction-type="footer"
                      href="https://www.carwow.co.uk/editorial/news/carwow-newsroom"
                    >
                      carwow newsroom
                    </a>
                  </li>
                  <li class="footer__list-item">
                    <a
                      data-detail-element-name="jobs"
                      data-interaction-type="footer"
                      href="https://www.carwow.co.uk/jobs"
                    >
                      Careers
                    </a>
                  </li>
                  <li class="footer__list-item">
                    <a
                      data-detail-element-name="dealers"
                      data-interaction-type="footer"
                      href="https://dealers.carwow.co.uk"
                    >
                      For dealers
                    </a>
                  </li>
                  <li class="footer__list-item">
                    <a
                      target="_blank"
                      rel="noreferrer"
                      data-detail-element-name="contact us"
                      data-interaction-type="footer"
                      href="https://www.carwow.co.uk/contact-us"
                    >
                      Contact us
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div
            class="trustpilot trustpilot--footer-layout"
            bis_skin_checked="1"
          >
            <div
              class="trustpilot__rating trustpilot__rating--dark-color"
              bis_skin_checked="1"
            >
              <div>
                <span>
                  Rated <strong>4.6/5</strong>
                  from <strong>46,227</strong> reviews
                </span>
              </div>
              <div className="trustpilot-ratting">
                <a
                  class="trustpilot__link"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Trustpilot"
                  href="https://uk.trustpilot.com/review/carwow.co.uk"
                >
                  <img src={trustpilot} alt="" />
                </a>
                <div class="trustpilot__stars" bis_skin_checked="1">
                  <svg
                    width="128"
                    height="24"
                    viewBox="0 0 128 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M24 0H0V24H24V0Z" fill="#00B67A"></path>
                    <path d="M50 0H26V24H50V0Z" fill="#00B67A"></path>
                    <path d="M76 0H52V24H76V0Z" fill="#00B67A"></path>
                    <path d="M102 0H78V24H102V0Z" fill="#00B67A"></path>
                    <path d="M128 0H116V24H128V0Z" fill="#DCDCE6"></path>
                    <path d="M116 0H104V24H116V0Z" fill="#00B67A"></path>
                    <path
                      d="M12.0016 16.175L15.6516 15.25L17.1766 19.95L12.0016 16.175ZM20.4016 10.1H13.9766L12.0016 4.04999L10.0266 10.1H3.60156L8.80156 13.85L6.82656 19.9L12.0266 16.15L15.2266 13.85L20.4016 10.1Z"
                      fill="white"
                    ></path>
                    <path
                      d="M38.0016 16.175L41.6516 15.25L43.1766 19.95L38.0016 16.175ZM46.4016 10.1H39.9766L38.0016 4.04999L36.0266 10.1H29.6016L34.8016 13.85L32.8266 19.9L38.0266 16.15L41.2266 13.85L46.4016 10.1Z"
                      fill="white"
                    ></path>
                    <path
                      d="M64.0016 16.175L67.6516 15.25L69.1766 19.95L64.0016 16.175ZM72.4016 10.1H65.9766L64.0016 4.04999L62.0266 10.1H55.6016L60.8016 13.85L58.8266 19.9L64.0266 16.15L67.2266 13.85L72.4016 10.1Z"
                      fill="white"
                    ></path>
                    <path
                      d="M90.0016 16.175L93.6516 15.25L95.1766 19.95L90.0016 16.175ZM98.4016 10.1H91.9766L90.0016 4.04999L88.0266 10.1H81.6016L86.8016 13.85L84.8266 19.9L90.0266 16.15L93.2266 13.85L98.4016 10.1Z"
                      fill="white"
                    ></path>
                    <path
                      d="M116.002 16.175L119.652 15.25L121.177 19.95L116.002 16.175ZM124.402 10.1H117.977L116.002 4.04999L114.027 10.1H107.602L112.802 13.85L110.827 19.9L116.027 16.15L119.227 13.85L124.402 10.1Z"
                      fill="white"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="py-4">
        <div class="footer-smallprint__legal">
          <div class="footer-smallprint__copyright" bis_skin_checked="1">
            © 2023 carwow Ltd. All rights reserved
          </div>
          <div class="footer-smallprint__legal-links" bis_skin_checked="1">
            <a
              class="footer-smallprint__legal-link"
              rel="nofollow"
              data-detail-element-name="terms of use"
              data-interaction-type="footer"
              href="https://www.carwow.co.uk/terms-and-conditions"
            >
              Terms &amp; conditions
            </a>
            <a
              class="footer-smallprint__legal-link cookie-management-center"
              rel="nofollow"
              data-detail-element-name="cookie management center"
              data-interaction-type="footer"
              href="#"
            >
              Manage cookies
            </a>
            <a
              class="footer-smallprint__legal-link"
              rel="nofollow"
              data-detail-element-name="fraud disclaimer"
              data-interaction-type="footer"
              href="https://www.carwow.co.uk/fraud-disclaimer"
            >
              Fraud disclaimer
            </a>
            <a
              class="footer-smallprint__legal-link"
              rel="nofollow"
              data-detail-element-name="privacy policy"
              data-interaction-type="footer"
              href="https://www.carwow.co.uk/privacy-policy"
            >
              Privacy policy
            </a>
            <a
              class="footer-smallprint__legal-link"
              rel="nofollow"
              data-detail-element-name="modern slavery statement"
              data-interaction-type="footer"
              href="https://carwow-photos.s3.eu-west-1.amazonaws.com/carwow_modern_slavery_statement.pdf"
            >
              Modern slavery statement
            </a>
            <a
              class="footer-smallprint__legal-link"
              data-detail-element-name="sitemap"
              data-interaction-type="footer"
              data-mobile-app="hide"
              href="https://www.carwow.co.uk/sitemap"
            >
              Sitemap
            </a>
          </div>
        </div>
        <div class="footer__international-sites" data-mobile-app="hide">
          <ul class="footer__international-site-list">
            <li class="footer__international-site">
              <a
                class="footer__international-site-link"
                data-detail-element-name="UK"
                data-interaction-type="footer"
                href="https://www.carwow.co.uk"
              >
                <span class="footer__international-site-icon flag--uk"></span>
                UK
              </a>
            </li>

            <li class="footer__international-site">
              <a
                class="footer__international-site-link"
                data-detail-element-name="Germany"
                data-interaction-type="footer"
                href="https://www.carwow.de"
              >
                <span class="footer__international-site-icon flag--de"></span>
                Germany
              </a>
            </li>

            <li class="footer__international-site">
              <a
                class="footer__international-site-link"
                data-detail-element-name="Spain"
                data-interaction-type="footer"
                href="https://www.carwow.es"
              >
                <span class="footer__international-site-icon flag--es"></span>
                Spain
              </a>
            </li>
          </ul>
        </div>
        <div class="footer__leasing-disclaimer-wrapper my-4">
          <p class="footer-leasing-disclaimer">
            <strong>*</strong>
            Please contact the dealer for a personalised quote, including terms
            and conditions. Quote is subject to dealer requirements, including
            status and availability. Illustrations are based on personal
            contract hire, 9 month upfront fee, 48 month term, 8000 miles
            annually, inc VAT, excluding fees. Vehicle returned at term end.
          </p>
        </div>
        <div class="footer__fca-wrapper">
          <p class="footer-fca">
            <a
              href="https://support.carwow.co.uk/s/article/How-do-we-calculate-the-average-savings-shown-on-carwow"
              rel="noopener noreferrer"
              target="_blank"
            >
              {" "}
              Average savings
            </a>{" "}
            are calculated daily based on the best dealer prices on carwow vs
            manufacturer RRP.&nbsp; carwow is the trading name of carwow
            Ltd,&nbsp;which is authorised and regulated by the Financial Conduct
            Authority for credit broking&nbsp;and insurance
            distribution&nbsp;activities (firm reference number: 767155). carwow
            is a credit broker and not a lender. carwow may receive a fee from
            retailers advertising finance and may receive a commission from
            partners (including dealers) for introducing customers. All finance
            offers and monthly payments shown are subject to application and
            status.&nbsp;carwow is covered by the Financial Ombudsman Service
            (please see&nbsp;
            <a
              href="https://www.financial-ombudsman.org.uk/"
              rel="noopener noreferrer"
              target="_blank"
            >
              www.financial-ombudsman.org.uk
            </a>
            &nbsp;for more information). carwow Ltd is registered in England
            (company number 07103079),&nbsp;registered office&nbsp;2nd Floor,
            Verde Building, 10 Bressenden Place, London, England, SW1E 5DH.
          </p>
        </div>
      </div>
    </section>
  );
}
