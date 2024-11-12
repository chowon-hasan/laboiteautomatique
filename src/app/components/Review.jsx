"use client";

import { useState, useEffect } from "react";
import Slider from "react-slick";
import { FcGoogle } from "react-icons/fc";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ReviewSlider = () => {
  const [reviews, setReviews] = useState([]);
  const [selectedReview, setSelectedReview] = useState(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch("/reviews.json");
        const data = await response.json();
        setReviews(data);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    };

    fetchReviews();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const stringToColor = (str) => {
    let hash = 0;
    for (let i = 0; i < str?.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    const color = `hsl(${hash % 360}, 60%, 70%)`;
    return color;
  };

  const handleSeeMoreClick = (review) => {
    setSelectedReview(review);
  };

  return (
    <div className="container mx-auto p-4 mb-16">
      <h2 className="text-xl mb-5 font-semibold text-center">
        What our clients say
      </h2>
      <Slider {...settings}>
        {reviews?.map((review, index) => (
          <div key={index} className="p-4">
            <div className="bg-white rounded-lg shadow-md p-4">
              <div className="flex items-center mb-2 relative">
                <div
                  className="w-10 h-10 flex items-center justify-center rounded-full text-white font-bold"
                  style={{
                    backgroundColor: stringToColor(review?.name),
                  }}
                >
                  {review?.name.charAt(0).toUpperCase()}
                </div>
                <div className="ml-3">
                  <h2 className="text-[17px] font-semibold">{review?.name}</h2>
                  <p className="text-gray-500 text-sm">{review?.date}</p>
                </div>
                <div className="absolute right-0 top-1">
                  <FcGoogle />
                </div>
              </div>
              <div className="mb-2">
                {Array.from({ length: review?.rating }).map((_, idx) => (
                  <span key={idx} className="text-yellow-500">
                    ★
                  </span>
                ))}
                {Array.from({ length: 5 - review?.rating }).map((_, idx) => (
                  <span key={idx} className="text-gray-300">
                    ★
                  </span>
                ))}
              </div>
              {/* Sliced Review? Text */}
              <p className="text-gray-700 text-[15px]">
                {review?.review.split(" ").slice(0, 13).join(" ")}...
              </p>
              {/* "See More" Button */}
              <label
                htmlFor="reviewPopup"
                className="text-blue-500 cursor-pointer mt-2 text-[14px]"
                onClick={() => handleSeeMoreClick(review)}
              >
                See more
              </label>
            </div>
          </div>
        ))}
      </Slider>

      {/* DaisyUI Popup */}
      <input type="checkbox" id="reviewPopup" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box bg-white">
          <div className="flex items-center mb-2 relative">
            <div
              className="w-10 h-10 flex items-center justify-center rounded-full text-white font-bold"
              style={{
                backgroundColor: stringToColor(selectedReview?.name),
              }}
            >
              {selectedReview?.name.charAt(0).toUpperCase()}
            </div>
            <div className="ml-3">
              <h2 className="text-[18px] font-semibold">
                {selectedReview?.name}
              </h2>
              <p className="text-gray-500 text-sm">{selectedReview?.date}</p>
            </div>
            <div className="absolute right-0 top-1">
              <FcGoogle />
            </div>
          </div>
          <div className="mb-1">
            {Array.from({ length: selectedReview?.rating }).map((_, idx) => (
              <span key={idx} className="text-yellow-500">
                ★
              </span>
            ))}
            {Array.from({ length: 5 - selectedReview?.rating }).map(
              (_, idx) => (
                <span key={idx} className="text-gray-300">
                  ★
                </span>
              )
            )}
          </div>
          <p className="pb-1 text-[15px]">{selectedReview?.review}</p>
          <div className="modal-action ">
            <label htmlFor="reviewPopup" className="text-[14px]">
              Close
            </label>
          </div>
        </div>
        <label className="modal-backdrop" htmlFor="reviewPopup"></label>
      </div>
    </div>
  );
};

export default ReviewSlider;