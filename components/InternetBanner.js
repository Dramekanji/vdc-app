import React from "react";
import Image from "next/image";

const InternetBanner = () => {
  return (
    <div className="relative text-center">
      <div className="relative h-screen w-full">
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
          src="/images/ppl-using-laptop.jpeg"
          layout="fill" // This will make the image cover the whole container
          objectFit="cover" // This will make the image cover the entire space
        />
      </div>

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
        <h1 className="text-4xl font-bold text-white">
          Welcome to Our Internet Services
        </h1>
        <p className="text-xl mt-4 text-white">
          Fast, reliable, and secure internet for your needs.
        </p>
      </div>
    </div>
  );
};

export default InternetBanner;
