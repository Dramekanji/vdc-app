import React, { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const HeroCarousel = () => {
  const carouselData = [
    {
      src: "/images/man-with-laptop.webp",
      alt: "Image 1",
      title: "Un Internet de meilleure qualité. Au meilleur prix.",
      buttonLabel: "Voir Plus",
    },
    {
      src: "https://www.westend61.de/images/0001194035pw/black-man-sitting-at-table-with-laptop-talking-on-cell-phone-BLEF05087.jpg",
      alt: "Image 2",
      title: "Le service de téléphone sur lequel vous pouvez compter.",
      buttonLabel: "Voir Plus",
    },
    {
      src: "/images/family-tv.jpeg",
      alt: "Image 3",
      title: "Profitez de l'IPTV en famille.",
      buttonLabel: "Voir Plus",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Increase the current slide by 1, and loop back to 0 after the last slide
      setCurrentSlide((prevSlide) => (prevSlide + 1) % carouselData.length);
    }, 5000); // Change images every 5 seconds (adjust as needed)

    return () => {
      clearInterval(interval);
    };
  }, []);

  const carouselWidth = "70%";
  const slideWidth = "100%";

  return (
    <div style={{ maxWidth: carouselWidth, margin: "0 auto" }}>
      <Carousel
        autoPlay={false}
        interval={7000}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        showArrows={false}
        onChange={(index) => setCurrentSlide(index)}
        selectedItem={currentSlide}
        className="relative"
      >
        {carouselData.map((item, index) => (
          <div className="mt-20 relative" key={index}>
            <img src={item.src} alt={item.alt} />
            <div
              className={`absolute inset-0 flex items-center justify-center lg:text-4xl font-bold text-white transition-opacity duration-[5s] z-10 ${
                currentSlide === index ? "opacity-100" : "opacity-0"
              }`}
            >
              {item.title}
            </div>
            <div
              className={`absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-[2s] ${
                currentSlide === index ? "opacity-100" : "opacity-0"
              }`}
            ></div>
            <div
              className={`absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white p-3 rounded-lg transition-opacity duration-[2s] z-10 ${
                currentSlide === index ? "opacity-100" : "opacity-0"
              }`}
            >
              <button className="lg:text-xl cursor-pointer bg-green-600 hover:bg-green-700 text-white font-semibold px-4 py-2 rounded-3xl mb-48 z-10">
                {item.buttonLabel}
              </button>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default HeroCarousel;
