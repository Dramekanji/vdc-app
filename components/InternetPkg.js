import React from "react";
import { FiArrowDownCircle, FiArrowUpCircle } from "react-icons/fi";
import { FaRegHdd } from "react-icons/fa";

const InternetPkg = () => {
  // Define an array of package objects with details
  const packages = [
    {
      name: "WIMAX",
      speed: "100 Mbps",
      price: "1,000,000GNF/mois",
    },
    {
      name: "FIBRE",
      speed: "250 Mbps",
      price: "2,000,000GNF/mois",
    },
    {
      name: "VSAT",
      speed: "500 Mbps",
      price: "3,000,000GNF/mois",
    },
  ];

  return (
    <div>
      <div className="flex flex-col text-center w-full my-8">
        <div className="w-40 mx-auto">
          <h2 className="font-heading mb-4 bg-orange-100 text-orange-800 px-4 py-2 rounded-lg md:w-36 md:mx-auto text-xs font-semibold tracking-widest uppercase title-font">
            Nos Prix
          </h2>
        </div>

        {/* <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">
          We get paid only if you get paid!
        </h1>

        <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-500">
          Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical.
        </p> */}

        <div className="flex mx-auto border-2 border-orange-500 rounded overflow-hidden mt-6">
          <button className="py-1 px-4 bg-orange-500 text-white focus:outline-none">
            Mensuel
          </button>
          <button className="py-1 px-4 focus:outline-none">Annuel</button>
        </div>
      </div>
      {/* Card 1 */}
      <div className="flex flex-wrap lg:ml-80">
        <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
          <div className="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden">
            <h2 className="text-sm tracking-widest title-font mb-1 font-medium">
              {packages[0].name}
            </h2>
            <h1 className="text-3xl text-gray-900 pb-4 mb-4 border-b border-gray-200 leading-none">
              {packages[0].price}
            </h1>
            <p className="flex items-center text-gray-600 gap-4">
              {/* Check SVG */}
              <FiArrowDownCircle size={30} />2 Gbps
            </p>
            <p className="flex items-center text-gray-600 mb-2 text-[9px] ml-10">
              Vitesse de download à votre modem VDC Hub
            </p>

            <p className="flex items-center text-gray-600 gap-4">
              <FiArrowUpCircle size={30} />2 Gbps
            </p>
            <p className="flex items-center text-gray-600 mb-2 text-[9px] ml-10">
              Vitesse de upload à votre modem VDC Hub
            </p>
            <p className="flex items-center text-gray-600 gap-4">
              <FaRegHdd size={30} />
              VDC Hub
            </p>
            <p className="flex items-center text-gray-600 mb-4 text-[9px] ml-10">
              Modem à haute vitesse de VDC Telecom
            </p>
            <button className="flex items-center mt-auto text-white bg-gray-400 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-500 rounded mb-4">
              Buy now{" "}
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-4 h-4 ml-auto"
                viewBox="0 0 24 24"
              >
                {" "}
                <path d="M5 12h14M12 5l7 7-7 7"></path>{" "}
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

        {/* Card 2 */}

        <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
          <div className="h-full p-6 rounded-lg border-2 border-orange-500 flex flex-col relative overflow-hidden">
            <span className="bg-orange-500 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">
              POPULAR
            </span>
            <h2 className="text-sm tracking-widest title-font mb-1 font-medium">
              {packages[1].name}
            </h2>
            <h1 className="text-3xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
              {packages[1].price}
              {/* <span className="text-lg ml-1 font-normal text-gray-500">
                /mo
              </span> */}
            </h1>
            <p className="flex items-center text-gray-600 gap-4">
              {/* Check SVG */}
              <FiArrowDownCircle size={30} />3 Gbps
            </p>
            <p className="flex items-center text-gray-600 mb-2 text-[9px] ml-10">
              Vitesse de download à votre modem VDC Hub
            </p>
            <p className="flex items-center text-gray-600 gap-4">
              <FiArrowUpCircle size={30} />3 Gbps
            </p>
            <p className="flex items-center text-gray-600 mb-2 text-[9px] ml-10">
              Vitesse de upload à votre modem VDC Hub
            </p>
            <p className="flex items-center text-gray-600 gap-4">
              <FaRegHdd size={30} />
              VDC Hub
            </p>
            <p className="flex items-center text-gray-600 mb-4 text-[9px] ml-10">
              Modem à haute vitesse de VDC Telecom
            </p>
            <button className="flex items-center mt-auto text-white bg-orange-500 border-0 py-2 px-4 w-full focus:outline-none hover:bg-orange-600 rounded mb-4">
              Buy now{" "}
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-4 h-4 ml-auto"
                viewBox="0 0 24 24"
              >
                {" "}
                <path d="M5 12h14M12 5l7 7-7 7"></path>{" "}
              </svg>{" "}
            </button>
            <p className="text-xs text-gray-500 mt-3">
              Obtenez une connexion Internet ultra-rapide grâce à notre réseau à
              fibre optique haute vitesse et à notre technologie FTTH avancée,
              offrant le meilleur en technologie LAN et Wi-Fi pour votre plaisir
              !
            </p>
          </div>
        </div>
        {/* Card  3 */}
        <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
          <div className="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden">
            <h2 className="text-sm tracking-widest title-font mb-1 font-medium">
              {packages[0].name}
            </h2>
            <h1 className="text-3xl text-gray-900 pb-4 mb-4 border-b border-gray-200 leading-none">
              {packages[0].price}
            </h1>
            <p className="flex items-center text-gray-600 gap-4">
              {/* Check SVG */}
              <FiArrowDownCircle size={30} />
              500 Mbps
            </p>
            <p className="flex items-center text-gray-600 mb-2 text-[9px] ml-10">
              Vitesse de download à votre modem VDC Hub
            </p>

            <p className="flex items-center text-gray-600 gap-4">
              <FiArrowUpCircle size={30} />
              500 Mbps
            </p>
            <p className="flex items-center text-gray-600 mb-2 text-[9px] ml-10">
              Vitesse de upload à votre modem VDC Hub
            </p>
            <p className="flex items-center text-gray-600 gap-4">
              <FaRegHdd size={30} />
              VDC Hub
            </p>
            <p className="flex items-center text-gray-600 mb-4 text-[9px] ml-10">
              Modem à haute vitesse de VDC Telecom
            </p>
            <button className="flex items-center mt-auto text-white bg-gray-400 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-500 rounded mb-4">
              Buy now{" "}
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-4 h-4 ml-auto"
                viewBox="0 0 24 24"
              >
                {" "}
                <path d="M5 12h14M12 5l7 7-7 7"></path>{" "}
              </svg>{" "}
            </button>
            <p className="text-xs text-gray-500 mt-3">
              Peu importe où se trouve votre entreprise en Guinée, notre
              solution VSAT de VDC|Telecom garantit une connectivité Internet
              sans interruption pour tous les utilisateurs de votre réseau
              local.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InternetPkg;
