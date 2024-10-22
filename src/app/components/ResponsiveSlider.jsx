"use client";
import Image from "next/image";
import React, { useState } from "react";

const ResponsiveSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0); // Track main image index
  const [thumbnailStartIndex, setThumbnailStartIndex] = useState(0); // Track thumbnail view index
  const thumbnailsToShow = Math.min(3, images.length); // Show up to the available number of images

  const handleThumbnailClick = (index) => {
    setCurrentIndex(index); // Update main image to match the thumbnail clicked
  };

  const slideThumbnails = (direction) => {
    setCurrentIndex((prevIndex) => {
      const newIndex = (prevIndex + direction + images.length) % images.length;

      // Update thumbnailStartIndex based on the direction and new index
      const newStartIndex = Math.min(
        Math.max(newIndex - (thumbnailsToShow - 1), 0),
        images.length - thumbnailsToShow
      );

      setThumbnailStartIndex(newStartIndex); // Update thumbnail start index
      return newIndex;
    });
  };

  return (
    <div className="mx-auto">
      {/* Main Image */}
      <div className="main-image">
        <div className="md:h-[280px] h-[180px] md:mt-5 flex flex-col items-center justify-center">
          <Image
            className="mx-auto md:w-[320px] w-[220px] object-cover"
            width={400}
            height={100}
            src={images[currentIndex]}
            alt={`Slide ${currentIndex}`}
          />
        </div>
      </div>

      {/* Thumbnails Controls */}
      <div className="thumbnail-controls mt-5 flex items-center justify-center">
        {/* Left Button */}
        <button
          onClick={() => slideThumbnails(-1)}
          disabled={currentIndex === 0}
          className="bg-white h-[60px] px-1 rounded-md text-[#2C80EF] disabled:opacity-50"
        >
          &lt;
        </button>

        {/* Thumbnails Container */}
        <div
          className="thumbnails flex overflow-hidden "
          style={{
            width: `${thumbnailsToShow * 80}px`,
          }}
        >
          <div
            className="h-[51px] w-[70px] flex"
            style={{
              transition: "transform 0.5s ease-in-out", // Smooth sliding animation
              transform: `translateX(-${thumbnailStartIndex * 70}px)`, // Calculate slide distance
            }}
          >
            {images.map((image, index) => (
              <Image
                key={index}
                src={image}
                width={80}
                height={65}
                alt={`Thumbnail ${index}`}
                onClick={() => handleThumbnailClick(index)}
                className="mx-2 cursor-pointer rounded object-cover"
                style={{
                  border:
                    currentIndex === index
                      ? "1px solid #2C80EF"
                      : "1px solid #cfcfcf",
                  padding: "5px",
                  transition: "border 0.3s ease-in-out",
                }}
              />
            ))}
          </div>
        </div>

        {/* Right Button */}
        <button
          onClick={() => slideThumbnails(1)}
          disabled={currentIndex === images.length - 1}
          className="bg-white h-[60px] px-1 rounded-md text-[#2C80EF] disabled:opacity-50"
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default ResponsiveSlider;
