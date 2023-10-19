import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BackArrow, ForwardArrow, Ratting, Tick } from "../../Svgs";
import image from "../Assets/Screenshot4.png";

const reviewsData = [
  {
    id: 1,
    author: "LUKE TUNSTALL",
    rating: 5,
    title: "Achieved significantly hi…",
    text: "Achieved significantly higher price than other offers. Selling process was efficient...",
    time: "12 hours ago",
  },
  {
    id: 2,
    author: "Another Author",
    rating: 4,
    title: "Achieved significantly hi…",
    text: "Cannot fault the experience with Carwow. Very professional and helpful both in the bu...",
    time: "1 day ago",
  },
  {
    id: 3,
    author: "Another Author",
    rating: 4,
    title: "Achieved significantly hi…",
    text: "Cannot fault the experience with Carwow. Very professional and helpful both in the bu...",
    time: "1 day ago",
  },
  {
    id: 4,
    author: "Another Author",
    rating: 4,
    text: "Very good service, easy sale 👏",
    time: "1 day ago",
  },
  {
    id: 5,
    author: "Another Author",
    rating: 4,
    title: "Achieved significantly hi…",
    text: "Cannot fault the experience with Carwow. Very professional and helpful both in the bu...",
    time: "1 day ago",
  },
  {
    id: 6,
    author: "Another Author",
    rating: 4,
    title: "Achieved significantly hi…",
    text: "Cannot fault the experience with Carwow. Very professional and helpful both in the bu...",
    time: "1 day ago",
  },
];

export default function ThirdSection() {
  var sliderNav = null 

  const sliderNavSettings = {
    slidesToShow: 4,
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
          slidesToShow: 3, // Adjust the number of slides to show at this breakpoint
        },
      },
      {
        breakpoint: 768, // Adjust this breakpoint as needed
        settings: {
          slidesToShow: 2, // Adjust the number of slides to show at this breakpoint
        },
      },
      {
        breakpoint: 468, // Adjust this breakpoint as needed
        settings: {
          slidesToShow: 1, // Adjust the number of slides to show at this breakpoint
        },
      },
    ],
  };

  return (
    <div className="main">
      <div className="mt-5 pt-2 frist-sec-inner">
        <h2 className="pb-4 fw-bold text-center">Rated ‘Excellent’ on Trustpilot </h2>
      </div>
      <Slider className="slider slider-nav" {...sliderNavSettings}>
        {reviewsData.map((review) => (
          <div key={review.id} className="card-mian-sec__3">
            <div className="d-flex ratting-main">
              {Array.from({ length: review.rating }, (_, i) => ( // Corrected this line
                <span key={5} className="ratting">
                  <Ratting />
                </span>
              ))}
              <span className="verified ms-2">
                <Tick />
              </span>
              <span className="p">Verified</span>
            </div>
            <div>
              <h6>{review.title}</h6>
              <p className="p">
                {review.text} <br /> 
              </p>
            </div>
            <div>
              <p className="p">{review.author}, {review.time}</p>
            </div>
          </div>
        ))}
      </Slider>
      <div id="footer" className="wrapper-bottom">
        <div id="rating-long" className="tp-widget-rating tp-widget-rating-long text-center p">Rated <strong>4.6</strong> / 5 based on <a className="a" target="_blank" rel="noreferrer" href="https://uk.trustpilot.com/review/carwow.co.uk?utm_medium=trustbox&utm_source=Slider">46,131 reviews</a>. <span>Show our 5 star reviews</span></div>
        <p className="img text-center mt-2"> <img src={image} alt=""/></p>
      </div>
    </div>
  );
}
