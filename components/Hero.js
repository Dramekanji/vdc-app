import React, { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { FaRegHdd } from "react-icons/fa";

const Hero = () => {
  const carouselData = [
    {
      src: "/images/man-with-laptop.webp",
      alt: "Image 1",
      text: "Caption for Image 1",
    },
    {
      src: "/images/orange-laptop1.jpeg",
      alt: "Image 2",
      text: "Caption for Image 2",
    },
    {
      src: "/images/family-tv.jpeg",
      alt: "Image 3",
      text: "Caption for Image 3",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const carouselWidth = "70%";
  const slideWidth = "100%";
  const containerHeight = "700px";

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      // Increase the current slide by 1, and loop back to 0 after the last slide
      setCurrentSlide((prevSlide) => (prevSlide + 1) % carouselData.length);
    }, 5000); // Change images every 5 seconds (adjust as needed)

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div style={{ maxWidth: carouselWidth, margin: "0 auto" }}>
      <Carousel
        autoPlay={false} // Disable autoplay to handle it manually
        interval={5000}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        showArrows={false}
        width={slideWidth}
        style={{ height: containerHeight }}
        onChange={handleSlideChange}
        selectedItem={currentSlide}
      >
        {carouselData.map((item, index) => (
          <div key={index} className="relative">
            <img src={item.src} alt={item.alt} width="1200" height="450" />
            <div
              className={`absolute inset-0 flex items-center justify-center text-3xl font-bold text-white bg-black bg-opacity-70 p-4 transition-opacity duration-2000 ${
                currentSlide === index ? "opacity-100" : "opacity-0"
              }`}
            >
              {item.text}
            </div>
            {currentSlide === 0 && (
              <div
                className={`absolute bottom-4 left-4 text-white flex items-center bg-black bg-opacity-70 p-2 transition-opacity duration-[2s] ${
                  currentSlide === index ? "opacity-100" : "opacity-0"
                }`}
              ></div>
            )}
            <div className="bg-green-200 flex">
              <FaRegHdd size={30} className="mr-4" />
              Internet rapide, fiable et sécurisé
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Hero;
