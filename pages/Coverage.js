"use client";
import React, { useState } from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import { FiMapPin, FiSearch, FiCheckCircle } from "react-icons/fi";

const Coverage = () => {
  const [address, setAddress] = useState("");

  const handleCheck = (e) => {
    e.preventDefault();
    alert("Vérification de la couverture pour: " + address);
  };

  return (
    <div>
      <Head>
        <title>Vérifier la Couverture - VDC Telecom</title>
        <meta
          name="description"
          content="Vérifiez la disponibilité de la fibre optique et nos services dans votre zone à Conakry."
        />
      </Head>

      <section className="pt-32 pb-20 min-h-screen bg-gradient-to-b from-vdc-gray-50 to-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h1 className="text-5xl font-bold text-vdc-gray-900 mb-6">
              Vérifier la Couverture
            </h1>
            <p className="text-xl text-vdc-gray-600">
              Entrez votre adresse pour vérifier si nos services sont disponibles dans votre zone
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-8 mb-12"
          >
            <form onSubmit={handleCheck} className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <input
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Entrez votre adresse (ex: Kaloum, Conakry)"
                  className="w-full px-6 py-4 border-2 border-vdc-gray-300 rounded-full focus:ring-2 focus:ring-vdc-green focus:border-transparent"
                  required
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-vdc text-white px-8 py-4 rounded-full font-bold shadow-vdc flex items-center justify-center"
              >
                <FiSearch className="mr-2" />
                Vérifier
              </motion.button>
            </form>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {["Kaloum", "Matam", "Ratoma", "Kipé", "Dixinn", "Landréah"].map((zone, index) => (
              <motion.div
                key={zone}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg border-2 border-vdc-green-100"
              >
                <div className="flex items-center gap-3 mb-4">
                  <FiCheckCircle className="text-vdc-green text-2xl" />
                  <h3 className="text-xl font-bold text-vdc-gray-900">{zone}</h3>
                </div>
                <p className="text-vdc-gray-600">Couverture Fibre Disponible</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Coverage;
