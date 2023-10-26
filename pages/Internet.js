import InternetPkg from "@/components/InternetPkg";
import React from "react";
import InternetBanner from "../components/InternetBanner"; // Import the InternetBanner component

const Internet = () => {
  return (
    <div>
      <InternetBanner />
      {/* <h1 className="text-3xl font-bold text-center mt-6">
        Votre Connexion Internet
      </h1> */}
      <p className="text-center md:text-left md:max-w-3xl mx-auto mt-10">
        Trois technologies permettent aujourd’hui de fournir à nos clients une
        connexion internet haute vitesse. Derrière le Wimax qui est de loin la
        plus répandue, la Fibre Optique dans une moindre mesure, les satellites
        Géostationnaires standards ont aussi leurs atouts à l’intérieur du pays.
        Sans parler des technologies radio qui peuvent avoir leurs intérêts dans
        certains cas, voici toutes les solutions que nous vous offrons pour
        bénéficier d’internet.
      </p>
      <InternetPkg />
    </div>
  );
};

export default Internet;
