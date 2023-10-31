import React from "react";
import Image from "next/image";

const PhoneBanner = () => {
  return (
    <div className="relative text-center">
      <div className="relative h-[480px] w-full mt-20">
        <div
          className="absolute inset-0"
          style={{
            // background: "rgba(0, 0, 0, 0.3)",
            zIndex: 1,
          }}
        ></div>
        <Image
          src="https://www.att.com/scmsassets/upper_funnel/other/1735850-offer-greatplan-dsk-retina.jpg"
          //   layout="fill" // This will make the image cover the whole container
          //   objectFit="cover" // This will make the image cover the entire space
          width={720}
          height={50}
        />
      </div>

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
        <h1 className="text-4xl font-bold text-black">
          Votre service de Téléphonie IP
        </h1>
        <p className="text-xl mt-4 text-black">Une expérience impeccable.</p>
      </div>
    </div>
  );
};

export default PhoneBanner;
