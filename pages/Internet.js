"use client";
import React from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import Link from "next/link";
import { FiCheck, FiWifi, FiZap, FiShield, FiTrendingUp } from "react-icons/fi";
import PricingPlans from "@/components/PricingPlans";

const Internet = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div>
      <Head>
        <title>Internet Haut Débit & Fibre Optique - VDC Telecom</title>
        <meta
          name="description"
          content="Découvrez nos forfaits Internet fibre optique ultra-rapide à Conakry. De 50 Mbps à 1 Gbps, connexion fiable et sans engagement."
        />
      </Head>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-vdc-green via-vdc-green-light to-vdc-green-dark overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-vdc-orange rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Internet Ultra-Rapide pour Conakry
              </h1>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Profitez de la technologie fibre optique avec des vitesses allant jusqu'à 1 Gbps.
                Une connexion stable, fiable et sans engagement pour toute la famille.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="#plans">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white text-vdc-green px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-xl transition-all"
                  >
                    Voir les forfaits
                  </motion.button>
                </Link>
                <Link href="/Coverage">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full font-bold border-2 border-white/30 hover:bg-white/20 transition-all"
                  >
                    Vérifier la couverture
                  </motion.button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <Image
                src="/images/man-with-laptop.webp"
                alt="Internet ultra-rapide"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section ref={ref} className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-vdc-gray-900 mb-4">
              Technologies de Pointe
            </h2>
            <p className="text-xl text-vdc-gray-600 max-w-3xl mx-auto">
              VDC Telecom utilise plusieurs technologies pour vous garantir une connexion Internet
              haute vitesse adaptée à votre localisation et vos besoins.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Fibre Optique",
                icon: <FiZap className="w-12 h-12" />,
                description: "La technologie la plus rapide et fiable, avec des vitesses allant jusqu'à 1 Gbps. Parfaite pour le streaming 4K, gaming et télétravail.",
                features: ["Jusqu'à 1 Gbps", "Latence minimale", "Ultra-fiable"],
              },
              {
                title: "WiMAX",
                icon: <FiWifi className="w-12 h-12" />,
                description: "Connexion sans fil haut débit, idéale pour les zones où la fibre n'est pas encore disponible. Déploiement rapide.",
                features: ["Installation rapide", "Large couverture", "Flexible"],
              },
              {
                title: "Satellite",
                icon: <FiTrendingUp className="w-12 h-12" />,
                description: "Solution pour les zones éloignées de Conakry, garantissant l'accès Internet même dans les régions reculées.",
                features: ["Partout en Guinée", "Toujours connecté", "Zones rurales"],
              },
            ].map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="bg-gradient-to-br from-vdc-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all"
              >
                <div className="text-vdc-green mb-6">{tech.icon}</div>
                <h3 className="text-2xl font-bold text-vdc-gray-900 mb-4">{tech.title}</h3>
                <p className="text-vdc-gray-600 mb-6">{tech.description}</p>
                <ul className="space-y-2">
                  {tech.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-vdc-gray-700">
                      <FiCheck className="text-vdc-green mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <div id="plans">
        <PricingPlans />
      </div>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-vdc-green to-vdc-green-light">
        <div className="container mx-auto px-4 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Prêt à Passer à la Vitesse Supérieure ?
            </h2>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Rejoignez plus de 50,000 clients satisfaits et profitez d'Internet sans limite.
            </p>
            <Link href="/Contact">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(0,0,0,0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-vdc-green px-10 py-5 rounded-full font-bold text-lg shadow-lg"
              >
                Commencer Maintenant
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Internet;
