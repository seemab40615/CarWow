import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  BackArrow,
  ForwardArrow,
} from "../../Svgs";

const slides = [
    {
      id: 1,
      ratting:"8/10",
      image: require("../Assets/redcar.png"),
      title: "New Citroen e-C3 revealed: bargain EV to cost less than £23,000",
    },
    {
      id: 2,
      ratting:"8/10",
      
      image: require("../Assets/whitecar.png"),
      title: "New Citroen e-C3 revealed: bargain EV to cost less than £23,000",
      description: "Electric cars with quick delivery times",
    },
    {
      id: 3,
      ratting:"8/10",
      image: require("../Assets/animatedcar.png"),
      title: "New Mini Cooper Electric revealed: everything we know about this dinky EV",
    },
    {
      id: 4,
      ratting:"8/10",

      image: require("../Assets/Screensh.png"),
      title: "Electric cars with quick delivery times",
    },
  ];

export default function SeventhSection() {
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
        <h2 className="fw-bold mb-2 fs-4">Latest car news</h2>
      
      </div>
      <Slider className="slider slider-nav mt-4" {...sliderNavSettings}>
        {slides.map((slide) => (
          <div key={slide.id} className="rounded">
            <img src={slide.image} alt="err" className="rounded w-100" />
            <p className="fs-55 fw-bold link-dark link-offset-2 image-slider mb-0 mt-2">
              {slide.title}
            </p>
          
          </div>
        ))}
      </Slider>
      <div className="mt-5 pt-2">
        <button className="btn button border px-3 py-2 fw-bold fs-6 radius">
          View more cars news
        </button>
      </div>
    </section>
  );
}
