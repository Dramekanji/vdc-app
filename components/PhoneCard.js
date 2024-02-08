import React from "react";

const PhoneCard = () => {
  return (
    <div className="flex flex-col justify-center items-center  min-w-screen">
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden max-w-3xl w-full">
        <img
          src="https://us.123rf.com/450wm/kodda/kodda1709/kodda170900010/85834875-detail-of-green-call-centrum-with-ip-phones.jpg?ver=6"
          alt="Mountain"
          class="w-full h-64 object-cover"
        />
        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
            Une expérience télévisuelle supérieure avec l&apos;IPTV
          </h2>
          <p className="text-gray-700 leading-tight mb-4 text-center">
            Profitez de notre sélection de télévision en direct, de séries et de
            films.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PhoneCard;
