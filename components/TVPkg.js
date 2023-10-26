import React, { useState } from "react";
import { FiArrowDownCircle, FiArrowUpCircle } from "react-icons/fi";
import { FaTv, FaRegHdd } from "react-icons/fa";
import { MdLiveTv } from "react-icons/md";

const TVPkg = () => {
  // Define an array of package objects with details
  const packages = [
    {
      name: "VDC Starter",
      channel: "20 Chaînes",
      channelPremium: "5 Chaînes Premium",
      price: 100000, // Price as a number
    },
    {
      name: "VDC Good",
      channel: "40 Chaînes",
      channelPremium: "10 Chaînes Premium",
      price: 200000, // Price as a number
    },
    {
      name: "VDC Best",
      channel: "60 Chaînes",
      channelPremium: "15 Chaînes Premium",
      price: 300000, // Price as a number
    },
  ];
  const [isMensuelActive, setIsMensuelActive] = useState(true);
  const [isAnnuelActive, setIsAnnuelActive] = useState(false);

  const handleMensuelClick = () => {
    setIsMensuelActive(true);
    setIsAnnuelActive(false);
  };

  const handleAnnuelClick = () => {
    setIsMensuelActive(false);
    setIsAnnuelActive(true);
  };

  // Define activePackage based on the toggle state
  const activePackage = isMensuelActive
    ? packages
    : packages.map((pkg) => ({ ...pkg, price: pkg.price * 12 }));

  // Define the unit based on the toggle state
  const unit = isMensuelActive ? "/mo" : "/an";

  return (
    <div>
      <div className="flex flex-col text-center w-full my-8">
        <div className="w-40 mx-auto">
          <h2 className="font-heading mb-4 bg-orange-100 text-orange-800 px-4 py-2 rounded-lg md:w-36 md:mx-auto text-xs font-semibold tracking-widest uppercase title-font">
            Nos Prix
          </h2>
        </div>

        <div className="flex mx-auto border-2 border-orange-500 rounded overflow-hidden mt-6">
          <button
            className={`py-1 px-4 ${
              isMensuelActive
                ? "bg-orange-500 text-white active"
                : "bg-white text-black"
            } focus:outline-none`}
            onClick={handleMensuelClick}
          >
            Mensuel
          </button>
          <button
            className={`py-1 px-4 ${
              isAnnuelActive
                ? "bg-orange-500 text-white active"
                : "bg-white text-black"
            } focus:outline-none`}
            onClick={handleAnnuelClick}
          >
            Annuel
          </button>
        </div>
      </div>

      {/* Package Cards */}
      <div className="flex flex-wrap lg:ml-80">
        {activePackage.map((pkg, index) => (
          <div key={index} className="p-4 xl:w-1/4 md:w-1/2 w-full">
            <div
              className={`h-full p-6 rounded-lg border-2 ${
                pkg.name === "VDC Good"
                  ? "border-orange-500"
                  : "border-gray-300"
              } flex flex-col relative overflow-hidden`}
            >
              {pkg.name === "VDC Good" && (
                <span className="bg-orange-500 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">
                  POPULAIRE
                </span>
              )}
              <h2 className="text-sm tracking-widest title-font mb-1 font-medium">
                {pkg.name}
              </h2>
              <h1 className="text-2xl text-gray-900 pb-4 mb-4 border-b border-gray-200 leading-none">
                {pkg.price.toLocaleString("en-US")} GNF
                <span class="text-lg ml-1 font-normal text-gray-500">
                  {unit}
                </span>
              </h1>
              <p className="flex items-center text-gray-600 gap-4">
                <FaTv size={30} />
                {pkg.channel}
              </p>
              <p className="flex items-center text-gray-600 mb-2 text-[9px] ml-10">
                Avec ce forfait vous aurez toutes les chaînes stardard.
              </p>
              <p className="flex items-center text-gray-600 gap-4">
                <MdLiveTv size={30} />
                {pkg.channelPremium}
              </p>
              <p className="flex items-center text-gray-600 mb-2 text-[9px] ml-10">
                Avec ce forfait vous aurez toutes les chaînes premium.
              </p>
              <p className="flex items-center text-gray-600 gap-4">
                <FaRegHdd size={30} />
                VDC Box
              </p>
              <p className="flex items-center text-gray-600 mb-4 text-[9px] ml-10">
                La VDC Box vous offres toutes vos chaînes preferées.
              </p>
              <button
                className={`flex items-center mt-auto text-white ${
                  pkg.name === "VDC Good" ? "bg-orange-500" : "bg-gray-400"
                } border-0 py-2 px-4 w-full focus:outline-none ${
                  pkg.name === "VDC Good"
                    ? "hover:bg-orange-600"
                    : "hover:bg-gray-500"
                } rounded mb-4`}
              >
                Vérifier La Disponibilité{" "}
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-4 h-4 ml-auto"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>{" "}
              </button>
              <p className="text-xs text-gray-500 mt-3">
                Naviguez d'un site à l'autre, partagez vos photos, faites vos
                achats en ligne, consultez vos comptes bancaires, et savourez
                votre musique préférée grâce à nos tout nouveaux services
                Internet.
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TVPkg;
