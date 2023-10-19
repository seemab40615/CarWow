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
      image: "//img.youtube.com/vi/d5OXWL6DWMM/mqdefault.jpg",
      title: "This is the most pointless button in a Skoda!",
      time: "17 oct 2023",
    },
    {
      id: 2,
      ratting:"8/10",
      image: "//img.youtube.com/vi/m50QtcCxZ18/mqdefault.jpg",
      title: "Why is this Tesla dancing?! 👀🤔",
      description: "Electric cars with quick delivery times",
      time: "17 oct 2023",
    },
    {
      id: 3,
      ratting:"8/10",
      image:"//img.youtube.com/vi/eAeon4jt7Cw/mqdefault.jpg",
      title: "Bugatti Chiron Super Sport v 1,000hp BMW M4 and M5: DRAG RACE",
      time: "17 oct 2023",
    },
    {
      id: 4,
      ratting:"8/10",
      image: require("../Assets/Screensho.png"),
      title: "Electric cars with quick delivery times",
      time: "17 oct 2023",
    },
  ];

export default function EightSection() {
  var sliderNav =null;
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
        <h2 className="fw-bold mb-2 fs-4">Latest carwow videos</h2>
      
      </div>
      <Slider className="slider slider-nav mt-4" {...sliderNavSettings}>
        {slides.map((slide) => (
          <div key={slide.id} className="rounded">
           <img alt="This is the most pointless button in a Skoda!" className="video-preview-link__thumbnail rounded-3 w-100" data-lazy-srcset="//img.youtube.com/vi/d5OXWL6DWMM/mqdefault.jpg" srcset={slide.image} src={slide.image}/>
            <p className="fs-55 fw-bold link-dark link-offset-2 image-slider mb-0 mt-2">
              {slide.title}
            </p>
          
          </div>
        ))}
      </Slider>
      <div className="mt-5 pt-2">
        <button className="btn button border px-3 py-2 fw-bold  fs-6 radius">
          View more videos
        </button>
      </div>
    </section>
  );
}
