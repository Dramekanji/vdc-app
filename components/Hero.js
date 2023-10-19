import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";

const Hero = () => {
  const carouselData = [
    {
      src: "/images/man-with-laptop.webp",
      alt: "Image 1",
      width: 1200,
      height: 450,
      caption: "Caption for Image 1",
    },
    {
      src: "/images/orange-laptop1.jpeg",
      alt: "Image 2",
      width: 1200,
      height: 450,
      caption: "Caption for Image 2",
    },
    {
      src: "/images/family-tv.jpeg",
      alt: "Image 3",
      width: 1200,
      height: 450,
      caption: "Caption for Image 3",
    },
  ];

  return (
    <Carousel
      autoPlay={true}
      interval={5000}
      infiniteLoop={true}
      showThumbs={false}
      showStatus={false}
      showArrows={false}
    >
      {carouselData.map((item, index) => (
        <div key={index} className="flex">
          <div className="banner-content flex flex-col justify-center w-1/2 p-8 ">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-800">
              VDC Telecom
            </h1>
            <p className="mt-4 text-lg md:text-xl lg:text-2xl text-gray-600">
              {item.caption}
            </p>
          </div>
          <div className="w-1/2 mt-20">
            <Image src={item.src} alt={item.alt} width={1200} height={450} />
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default Hero;
