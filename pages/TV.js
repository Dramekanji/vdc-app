import TVBanner from "@/components/TVBanner";
import TVPkg from "@/components/TVPkg";
import React from "react";

const TV = () => {
  return (
    <div>
      <TVBanner />
      <p className="text-center md:text-left md:max-w-3xl mx-auto mt-10">
        IPTV vous permet de passer entre les programmes désirés en tout temps
        sans aucune attente ni publicité. La conjugaison du matériel performant
        et du logiciel convivial vous permet de jouir des programmes haute
        définition et intelligents. Notre système à source ouverte vous permet
        d’étendre la fonctionnalité sans limite et de développer le plein
        potentiel de l’appareil.
      </p>
      <TVPkg />
    </div>
  );
};

export default TV;
