import InternetBanner from "@/components/InternetBanner";
import PhoneBanner from "@/components/PhoneBanner";
import PhoneCard from "@/components/PhoneCard";
import PhonePkg from "@/components/PhonePkg";
import React from "react";

const Phone = () => {
  return (
    <div className="text-black">
      <PhoneBanner />

      <p className="text-center font-light md:text-left md:max-w-3xl mx-auto mt-10 mb-2">
        Nous adoptons la technologie de la voix sur IP pour vous fournir un
        service de téléphonie abordable et de bonne qualité. Un large éventail
        de forfaits téléphoniques vous permet d’appeler votre destination de
        façon illimitée. Vous pouvez profiter des tarifs inférieurs à ceux
        conventionnels.
      </p>
      <p className="text-center font-light md:text-left md:max-w-3xl mx-auto  mb-10">
        Notre matériel téléphonique avancé, doté de nombreuses fonctions qui
        n’existent pas dans le téléphone conventionnel, vous permet de librement
        personnaliser votre téléphone et d’avoir une expérience impeccable.
      </p>
      <PhoneCard />
      <PhonePkg />
    </div>
  );
};

export default Phone;
