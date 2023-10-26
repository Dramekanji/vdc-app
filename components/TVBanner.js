import React from "react";
import Image from "next/image";

const TVBanner = () => {
  return (
    <div className="relative text-center">
      <div className="relative h-[560px] w-full">
        {" "}
        {/* Adjust the height here (e.g., h-96 for 24rem) */}
        <div
          className="absolute inset-0"
          style={{
            background: "rgba(0, 0, 0, 0.6)", // Adjust the opacity (0.6) here
            zIndex: 1,
          }}
        >
          {/* Semi-transparent black background overlay */}
        </div>
        <Image
          src="/images/tv-banner-image.jpeg" // Replace with the actual TV banner image
          layout="fill" // This will make the image cover the whole container
          objectFit="cover" // This will make the image cover the entire space
        />
      </div>

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
        <h1 className="text-4xl font-bold text-white">Votre Service TV</h1>
        <p className="text-xl mt-4 text-white">
          La meilleure expérience télévisuelle avec VDC Telecom.
        </p>
      </div>
    </div>
  );
};

export default TVBanner;
