import React from "react";

const BannerCard = () => {
  return (
    <div className="bg-white rounded-lg p-4 shadow-md mx-4 lg:mx-80 mt-96 lg:mt-0 lg:h-80 lg:w-60 lg:mr-4">
      <h2 className="text-2xl font-semibold text-gray-800">Card Title</h2>
      <p className="text-gray-600 mt-2">
        Notre mission première est de fournir à nos clients un accès fiable et
        de grande qualité aux nouvelles technologies de télécommunication ainsi
        que tout autre service d’interconnexion grâce aux innovations basées sur
        IP
      </p>
      <div className="h-40"></div> {/* Add some height */}
    </div>
  );
};

export default BannerCard;
