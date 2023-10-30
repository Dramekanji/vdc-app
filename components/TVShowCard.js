import React from "react";

const TVShowCard = () => {
  return (
    <div class="flex flex-col justify-center items-center  min-w-screen">
      <div class="bg-white rounded-2xl shadow-lg overflow-hidden max-w-3xl w-full">
        <img
          src="https://www.capitalkoala.com/project/public/media//canal-plus-serie-incluse.png"
          alt="Mountain"
          class="w-full h-64 object-cover"
        />
        <div class="p-6">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 text-center">
            Une expérience télévisuelle supérieure avec l'IPTV
          </h2>
          <p class="text-gray-700 leading-tight mb-4 text-center">
            Profitez de notre sélection de télévision en direct, de séries et de
            films.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TVShowCard;
