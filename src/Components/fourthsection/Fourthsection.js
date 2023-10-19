import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BackArrow, Facebook, ForwardArrow, Insta, Twitter, Youtube } from "../../Svgs";
import image1 from "../Assets/Screenshotbolt.png";

const slides = [
  {
    id: 1,
    image: require("../Assets/Screenshot10.png"),
    title: "Electric cars with quick delivery times",
  },
  {
    id: 2,
    image: require("../Assets/Screenshot11.png"),
    title: "Electric cars with quick delivery times",
    description: "Electric cars with quick delivery times",
  },
  {
    id: 3,
    image: require("../Assets/Screenshot12.png"),
    title: "Electric car costs comparison",
  },
  {
    id: 4,
    image: require("../Assets/Screenshotslider1.png"),
    title: "Electric cars with quick delivery times",
  },
];

export default function Fourthsection() {
  var sliderNav =null
  const sliderNavSettings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: sliderNav,
    dots: false,
    prevArrow: (
      <button className="buttonback">
        <BackArrow />
      </button>
    ),
    nextArrow: (
      <button className="buttonforward">
        <ForwardArrow />
      </button>
    ),
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1024, // Adjust this breakpoint as needed
        settings: {
          slidesToShow: 2, // Adjust the number of slides to show at this breakpoint
        },
      },
      {
        breakpoint: 768, // Adjust this breakpoint as needed
        settings: {
          prevArrow:false,
          nextArrow:false,
          slidesToShow: 1, // Adjust the number of slides to show at this breakpoint
        },
      },
    ],
  };

  return (
    <section className="main-2 px-5">
      <div className="mt-5 pt-2 frist-sec-inner">
        <h2 className="fw-bold mb-2">
          Join the electric revolution!
          <img src={image1} alt="err" />
        </h2>
        <p className="m-0 fs-55">
          Check out our electric car tools and other helpful advice
        </p>
      </div>
      <Slider className="slider slider-nav mt-5" {...sliderNavSettings}>
        {slides.map((slide) => (
          <div key={slide.id} className="rounded">
            <img src={slide.image} alt="err" className="rounded w-100" />
            <p className="fs-55 mt-2 fw-bold link-dark link-offset-2 image-slider">{slide.title}</p>
          </div>
        ))}
      </Slider>
      <div className="mt-5 pt-2" > 
      <button className="btn button border px-3 py-2 fw-bold  fs-6 radius">
        Compare the best electric cars
        </button>
        <div className="mt-5 frist-sec-inner">
        <h2 className="fw-bold mb-2">
        Impartial reviews from our experts
        
        </h2>
        <p className="m-0 fs-55">
        With over 70+ million views a month, there’s a review for everyone
        </p>
      </div>
        <div className="mt-4 d-flex gap-3 frist-sec-inner-so">
      <h5 className="fw-bold d-flex align-items-center gap-2"><Youtube/> 8.61M</h5>
      <h5 className="fw-bold d-flex align-items-center gap-2"><Insta/> 1.41M</h5>
      <h5 className="fw-bold d-flex align-items-center gap-2"><Facebook/> 1.33M</h5>
      <h5 className="fw-bold d-flex align-items-center gap-2"><Twitter/> 81.6M</h5>
      
      </div>
      </div>
    </section>
  );
}
