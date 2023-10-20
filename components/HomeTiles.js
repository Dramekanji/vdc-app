import React from "react";
import Image from "next/image";

const HomeTiles = () => {
  return (
    <div className="container mx-auto py-8">
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4">
        <div className="tile">
          <Image
            src="/images/man-with-laptop-orange.png"
            alt="First Image"
            className="w-full h-full object-cover"
            layout="responsive"
            width={800}
            height={600}
          />
          <h1 className="text-3xl font-semibold text-gray-800 mt-4 text-center">
            Une connexion internet haute vitesse.
          </h1>
        </div>
        <div className="tile">
          <Image
            src="/images/woman-green-phone.png"
            alt="Second Image"
            className="w-full h-full object-cover"
            layout="responsive"
            width={800}
            height={600}
          />
          <h1 className="text-3xl font-semibold text-gray-800 mt-4 text-center">
            Nos Services à Valeurs Ajoutées boostent la performance de votre
            entreprise !
          </h1>
        </div>
      </div>
    </div>
  );
};

export default HomeTiles;
