"use client";
import React from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import Link from "next/link";
import { FiCheck, FiWifi, FiTv, FiPhone, FiZap, FiGift, FiArrowRight, FiTrendingUp } from "react-icons/fi";

const Bundles = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const bundles = [
    {
      name: "Bundle Starter",
      tagline: "L'essentiel pour démarrer",
      price: "350,000",
      savings: "50,000",
      description: "Internet + IPTV pour toute la famille",
      features: [
        "Internet 50 Mbps fibre optique",
        "80+ chaînes TV SD/HD",
        "Modem Wi-Fi inclus",
        "Décodeur IPTV inclus",
        "Installation gratuite",
        "Support technique standard",
        "Sans engagement",
      ],
      popular: false,
      gradient: "from-blue-500 to-blue-600",
      checkColor: "text-blue-500",
      buttonGradient: "from-blue-500 to-blue-600",
      icon: <FiWifi />,
      includes: {
        internet: "50 Mbps",
        tv: "80+ chaînes",
        phone: null,
      },
    },
    {
      name: "Bundle Premium",
      tagline: "Le choix de la famille",
      price: "650,000",
      savings: "100,000",
      description: "Internet ultra-rapide + IPTV Premium + Téléphonie",
      features: [
        "Internet 200 Mbps fibre optique",
        "200+ chaînes TV HD/4K",
        "Téléphonie illimitée en Guinée",
        "Modem Wi-Fi 6 inclus",
        "Décodeur 4K inclus",
        "Replay 7 jours",
        "2 écrans TV simultanés",
        "Installation & configuration gratuites",
        "Support prioritaire 24/7",
      ],
      popular: true,
      gradient: "from-vdc-orange to-orange-600",
      checkColor: "text-vdc-orange",
      buttonGradient: "from-vdc-orange to-orange-600",
      icon: <FiZap />,
      includes: {
        internet: "200 Mbps",
        tv: "200+ chaînes",
        phone: "Illimité GN",
      },
    },
    {
      name: "Bundle Ultra",
      tagline: "L'expérience complète",
      price: "1,100,000",
      savings: "200,000",
      description: "Le pack ultime pour les utilisateurs exigeants",
      features: [
        "Internet 1 Gbps fibre optique",
        "300+ chaînes TV HD/4K/8K",
        "Téléphonie illimitée internationale",
        "Routeur Wi-Fi 6E premium",
        "Décodeur 8K inclus",
        "VOD illimitée",
        "Replay 14 jours",
        "4 écrans TV simultanés",
        "IP statique gratuite",
        "Support VIP dédié 24/7",
        "Garantie de vitesse",
      ],
      popular: false,
      gradient: "from-vdc-green to-emerald-600",
      checkColor: "text-vdc-green",
      buttonGradient: "from-vdc-green to-emerald-600",
      icon: <FiTrendingUp />,
      includes: {
        internet: "1 Gbps",
        tv: "300+ chaînes",
        phone: "Illimité monde",
      },
    },
  ];

  const advantages = [
    {
      icon: <FiGift className="w-12 h-12" />,
      title: "Économies Garanties",
      description: "Économisez jusqu'à 200,000 GNF par mois en regroupant vos services. Un seul abonnement, une seule facture.",
      gradient: "from-green-400 to-green-600",
    },
    {
      icon: <FiZap className="w-12 h-12" />,
      title: "Installation Simplifiée",
      description: "Un seul technicien installe tous vos services en même temps. Rapide, efficace et gratuit.",
      gradient: "from-vdc-orange-400 to-vdc-orange-600",
    },
    {
      icon: <FiPhone className="w-12 h-12" />,
      title: "Support Unifié",
      description: "Un seul numéro pour tous vos services. Notre équipe gère tout de A à Z, 24/7.",
      gradient: "from-purple-400 to-purple-600",
    },
    {
      icon: <FiTrendingUp className="w-12 h-12" />,
      title: "Évolutif à Souhait",
      description: "Changez de forfait ou ajoutez des options à tout moment selon vos besoins.",
      gradient: "from-blue-400 to-blue-600",
    },
  ];

  const comparison = [
    { service: "Internet 200 Mbps", individual: "450,000", bundle: "Inclus", save: true },
    { service: "IPTV Premium 200+", individual: "300,000", bundle: "Inclus", save: true },
    { service: "Téléphonie illimitée", individual: "150,000", bundle: "Inclus", save: true },
    { service: "Total mensuel", individual: "900,000", bundle: "650,000", save: true },
    { service: "Économies mensuelles", individual: "-", bundle: "250,000 GNF", save: false },
  ];

  return (
    <div>
      <Head>
        <title>Bundles & Forfaits Combinés - VDC Telecom</title>
        <meta
          name="description"
          content="Économisez jusqu'à 200,000 GNF avec nos bundles Internet + TV + Téléphonie. Installation gratuite et support unifié 24/7."
        />
      </Head>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-vdc-green via-teal-600 to-blue-700 overflow-hidden">
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
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-semibold mb-6"
              >
                <FiGift className="inline mr-2" />
                Économisez jusqu'à 200,000 GNF/mois
              </motion.span>

              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Bundles Tout-en-Un à Prix Imbattable
              </h1>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Internet ultra-rapide + IPTV Premium + Téléphonie illimitée.
                Un seul abonnement, des économies maximales et un confort absolu.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="#bundles">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white text-vdc-green px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-xl transition-all"
                  >
                    Voir les bundles
                  </motion.button>
                </Link>
                <Link href="#savings">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full font-bold border-2 border-white/30 hover:bg-white/20 transition-all"
                  >
                    Calculer mes économies
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
                src="/images/ppl-using-laptop.jpeg"
                alt="Bundles VDC Telecom"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section ref={ref} className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              className="inline-block px-4 py-2 bg-vdc-green-50 text-vdc-green-600 rounded-full text-sm font-semibold mb-4"
            >
              Pourquoi Choisir un Bundle ?
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-bold text-vdc-gray-900 mb-4">
              Les Avantages des Forfaits Combinés
            </h2>
            <p className="text-xl text-vdc-gray-600 max-w-3xl mx-auto">
              Plus qu'une simple économie, c'est une expérience client simplifiée et optimisée
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="bg-gradient-to-br from-vdc-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className={`w-16 h-16 bg-gradient-to-br ${advantage.gradient} rounded-xl flex items-center justify-center text-white mb-6 shadow-lg`}
                >
                  {advantage.icon}
                </motion.div>
                <h3 className="text-xl font-bold text-vdc-gray-900 mb-4">{advantage.title}</h3>
                <p className="text-vdc-gray-600 leading-relaxed">{advantage.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Savings Comparison Section */}
      <section id="savings" className="py-20 bg-gradient-to-b from-vdc-gray-50 to-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-vdc-gray-900 mb-4">
              Comparez et Économisez
            </h2>
            <p className="text-xl text-vdc-gray-600 max-w-3xl mx-auto">
              Exemple avec le Bundle Premium : économisez 250,000 GNF par mois
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden"
            >
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gradient-vdc text-white">
                    <tr>
                      <th className="px-6 py-4 text-left font-bold">Service</th>
                      <th className="px-6 py-4 text-right font-bold">Prix Individuel</th>
                      <th className="px-6 py-4 text-right font-bold">Prix Bundle</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparison.map((row, index) => (
                      <motion.tr
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className={`border-b border-vdc-gray-100 ${
                          row.service === "Total mensuel" ? "bg-vdc-gray-50 font-bold" : ""
                        } ${
                          row.service === "Économies mensuelles" ? "bg-vdc-green-50 font-bold text-vdc-green-700" : ""
                        }`}
                      >
                        <td className="px-6 py-4">{row.service}</td>
                        <td className="px-6 py-4 text-right">
                          {row.individual !== "-" ? `${row.individual} GNF` : row.individual}
                        </td>
                        <td className="px-6 py-4 text-right font-semibold text-vdc-orange-600">
                          {row.bundle.includes("GNF") ? row.bundle : row.bundle !== "Inclus" ? `${row.bundle} GNF` : row.bundle}
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bundles Section */}
      <section id="bundles" className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="inline-block px-4 py-2 bg-vdc-orange-50 text-vdc-orange-600 rounded-full text-sm font-semibold mb-4"
            >
              Nos Bundles
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-bold text-vdc-gray-900 mb-4">
              Choisissez Votre Bundle Idéal
            </h2>
            <p className="text-xl text-vdc-gray-600 max-w-3xl mx-auto">
              Tous les bundles incluent installation gratuite et support 24/7
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {bundles.map((bundle, index) => (
              <motion.div
                key={bundle.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -10, boxShadow: "0 20px 50px rgba(0,0,0,0.1)" }}
                className={`relative bg-white rounded-2xl overflow-hidden shadow-lg transition-all ${
                  bundle.popular ? "ring-4 ring-vdc-orange ring-opacity-50" : ""
                }`}
              >
                {bundle.popular && (
                  <motion.div
                    initial={{ x: 100 }}
                    whileInView={{ x: 0 }}
                    transition={{ delay: 0.5 }}
                    className="absolute top-6 -right-10 bg-gradient-vdc-orange text-white px-12 py-2 text-sm font-bold transform rotate-45 shadow-lg"
                  >
                    MEILLEUR CHOIX
                  </motion.div>
                )}

                <div className={`bg-gradient-to-br ${bundle.gradient} p-8 text-white`}>
                  <div className="text-5xl mb-4">{bundle.icon}</div>
                  <h3 className="text-2xl font-bold mb-2">{bundle.name}</h3>
                  <p className="text-white/90 text-sm mb-6">{bundle.tagline}</p>

                  <div className="flex items-baseline mb-2">
                    <span className="text-5xl font-bold">{bundle.price}</span>
                    <span className="text-xl ml-2">GNF</span>
                  </div>
                  <p className="text-white/80 text-sm mb-4">/mois</p>

                  <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2 inline-block">
                    <p className="text-sm font-semibold">Économie: {bundle.savings} GNF/mois</p>
                  </div>
                </div>

                <div className="p-8">
                  <p className="text-vdc-gray-600 mb-6">{bundle.description}</p>

                  <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-vdc-gray-50 rounded-lg">
                    <div className="text-center">
                      <FiWifi className="text-vdc-green mx-auto mb-2" size={24} />
                      <p className="text-xs text-vdc-gray-600 font-semibold">{bundle.includes.internet}</p>
                    </div>
                    <div className="text-center">
                      <FiTv className="text-purple-600 mx-auto mb-2" size={24} />
                      <p className="text-xs text-vdc-gray-600 font-semibold">{bundle.includes.tv}</p>
                    </div>
                    {bundle.includes.phone && (
                      <div className="text-center">
                        <FiPhone className="text-vdc-orange mx-auto mb-2" size={24} />
                        <p className="text-xs text-vdc-gray-600 font-semibold">{bundle.includes.phone}</p>
                      </div>
                    )}
                  </div>

                  <ul className="space-y-3 mb-8">
                    {bundle.features.map((feature, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + idx * 0.05 }}
                        className="flex items-start"
                      >
                        <FiCheck className={`${bundle.checkColor} mt-1 mr-3 flex-shrink-0`} size={18} />
                        <span className="text-vdc-gray-700 text-sm">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>

                  <Link href="/Contact">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-full bg-gradient-to-r ${bundle.buttonGradient} text-white py-4 rounded-xl font-bold flex items-center justify-center group transition-all shadow-lg`}
                    >
                      Choisir ce bundle
                      <FiArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" />
                    </motion.button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-vdc-green to-teal-600">
        <div className="container mx-auto px-4 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Prêt à Économiser avec Nos Bundles ?
            </h2>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Contactez-nous dès aujourd'hui pour bénéficier d'une offre exclusive et d'une installation gratuite.
            </p>
            <Link href="/Contact">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(0,0,0,0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-vdc-green px-10 py-5 rounded-full font-bold text-lg shadow-lg"
              >
                Commander Mon Bundle
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Bundles;
