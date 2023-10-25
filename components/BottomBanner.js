// BottomBanner.js
import React from "react";
import Image from "next/image";
import BannerCard from "./BannerCard"; // Import the BannerCard component

const BottomBanner = () => {
  return (
    <div className="relative">
      <Image
        src="/images/engineer.webp"
        alt="Bottom Banner"
        width={1400}
        height={550}
        className="lg:ml-40 rounded-2xl mb-10"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <BannerCard />
      </div>
    </div>
  );
};

export default BottomBanner;
