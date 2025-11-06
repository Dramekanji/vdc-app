"use client";
import React from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import Link from "next/link";
import { FiCheck, FiTv, FiPlay, FiClock, FiMonitor, FiFilm, FiStar, FiArrowRight } from "react-icons/fi";

const TV = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const packages = [
    {
      name: "Starter TV",
      channels: "80+",
      price: "150,000",
      description: "L'essentiel de l'IPTV pour toute la famille",
      features: [
        "80+ chaînes SD/HD",
        "Chaînes d'information internationales",
        "Divertissement familial",
        "Replay 3 jours",
        "1 écran simultané",
        "Guide TV électronique",
      ],
      popular: false,
      gradient: "from-blue-500 to-blue-600",
      checkColor: "text-blue-500",
      buttonGradient: "from-blue-500 to-blue-600",
    },
    {
      name: "Premium TV",
      channels: "200+",
      price: "300,000",
      description: "Le meilleur de la télévision en haute définition",
      features: [
        "200+ chaînes HD/4K",
        "Sports premium en direct",
        "Cinéma et séries exclusives",
        "Replay 7 jours",
        "2 écrans simultanés",
        "Enregistrement cloud",
        "Contrôle parental",
        "Application mobile",
      ],
      popular: true,
      gradient: "from-vdc-orange to-orange-600",
      checkColor: "text-vdc-orange",
      buttonGradient: "from-vdc-orange to-orange-600",
    },
    {
      name: "Ultra TV",
      channels: "300+",
      price: "500,000",
      description: "L'expérience IPTV ultime pour les passionnés",
      features: [
        "300+ chaînes HD/4K/8K",
        "Tous les sports en direct",
        "Bibliothèque VOD illimitée",
        "Replay 14 jours",
        "4 écrans simultanés",
        "Enregistrement illimité",
        "Contrôle parental avancé",
        "Support prioritaire 24/7",
        "Dolby Atmos",
      ],
      popular: false,
      gradient: "from-vdc-green to-emerald-600",
      checkColor: "text-vdc-green",
      buttonGradient: "from-vdc-green to-emerald-600",
    },
  ];

  const features = [
    {
      icon: <FiMonitor className="w-10 h-10" />,
      title: "Qualité 4K Ultra HD",
      description: "Profitez de vos émissions préférées en qualité cristalline avec support 4K et HDR pour une expérience visuelle immersive.",
    },
    {
      icon: <FiClock className="w-10 h-10" />,
      title: "Replay & Rattrapage",
      description: "Ne manquez plus jamais vos programmes favoris. Regardez jusqu'à 14 jours en arrière avec notre fonction replay.",
    },
    {
      icon: <FiPlay className="w-10 h-10" />,
      title: "Vidéo à la Demande",
      description: "Accédez à une bibliothèque de milliers de films et séries disponibles 24/7 à votre convenance.",
    },
    {
      icon: <FiFilm className="w-10 h-10" />,
      title: "Multi-écrans",
      description: "Regardez sur plusieurs appareils simultanément. TV, smartphone, tablette, ordinateur - partout chez vous.",
    },
  ];

  const channels = [
    { category: "Sports", description: "BeIN Sports, Canal+ Sport, Eurosport, RMC Sport" },
    { category: "Cinéma", description: "OCS, Canal+ Cinéma, TCM, Action" },
    { category: "Jeunesse", description: "Disney Channel, Nickelodeon, Cartoon Network, Gulli" },
    { category: "Information", description: "BFM TV, France 24, CNN, BBC World News" },
    { category: "Divertissement", description: "TF1, France 2, M6, W9, TMC" },
    { category: "Documentaires", description: "National Geographic, Discovery, Arte, Histoire" },
  ];

  return (
    <div>
      <Head>
        <title>IPTV Premium & Télévision HD - VDC Telecom</title>
        <meta
          name="description"
          content="Découvrez nos forfaits IPTV avec plus de 300 chaînes HD/4K, replay, VOD et multi-écrans. L'avenir de la télévision à Conakry."
        />
      </Head>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-vdc-green via-emerald-600 to-teal-700 overflow-hidden">
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
                <FiTv className="inline mr-2" />
                Technologie IPTV de Pointe
              </motion.span>

              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                L'IPTV Nouvelle Génération à Conakry
              </h1>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Plus de 300 chaînes HD/4K, sports en direct, VOD illimitée et replay.
                Profitez de la télévision intelligente sans publicité ni attente.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="#packages">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white text-vdc-green px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-xl transition-all"
                  >
                    Voir les forfaits
                  </motion.button>
                </Link>
                <Link href="/Contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full font-bold border-2 border-white/30 hover:bg-white/20 transition-all"
                  >
                    Demander une démo
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
                src="/images/family-tv.jpeg"
                alt="IPTV Premium"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section ref={ref} className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-vdc-gray-900 mb-4">
              Pourquoi Choisir Notre IPTV ?
            </h2>
            <p className="text-xl text-vdc-gray-600 max-w-3xl mx-auto">
              La conjugaison du matériel performant et du logiciel convivial vous permet de jouir
              des programmes haute définition et intelligents.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="bg-gradient-to-br from-vdc-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all"
              >
                <div className="text-vdc-green mb-6">{feature.icon}</div>
                <h3 className="text-xl font-bold text-vdc-gray-900 mb-4">{feature.title}</h3>
                <p className="text-vdc-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Channels Section */}
      <section className="py-20 bg-gradient-to-b from-vdc-gray-50 to-white">
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
              className="inline-block px-4 py-2 bg-vdc-green-50 text-vdc-green-600 rounded-full text-sm font-semibold mb-4"
            >
              Contenu Premium
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-bold text-vdc-gray-900 mb-4">
              Des Chaînes pour Tous les Goûts
            </h2>
            <p className="text-xl text-vdc-gray-600 max-w-3xl mx-auto">
              Accédez aux meilleures chaînes internationales et locales
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {channels.map((channel, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-xl p-6 shadow-lg border border-vdc-green-100"
              >
                <div className="flex items-center mb-3">
                  <FiStar className="text-vdc-green mr-2" size={20} />
                  <h3 className="text-xl font-bold text-vdc-gray-900">{channel.category}</h3>
                </div>
                <p className="text-vdc-gray-600 text-sm">{channel.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section id="packages" className="py-20 bg-white">
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
              Nos Forfaits IPTV
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-bold text-vdc-gray-900 mb-4">
              Choisissez Votre Forfait TV
            </h2>
            <p className="text-xl text-vdc-gray-600 max-w-3xl mx-auto">
              Des forfaits adaptés à tous les besoins, du divertissement familial à l'expérience premium
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -10, boxShadow: "0 20px 50px rgba(0,0,0,0.1)" }}
                className={`relative bg-white rounded-2xl overflow-hidden shadow-lg transition-all ${
                  pkg.popular ? "ring-4 ring-vdc-orange ring-opacity-50" : ""
                }`}
              >
                {pkg.popular && (
                  <motion.div
                    initial={{ x: 100 }}
                    whileInView={{ x: 0 }}
                    transition={{ delay: 0.5 }}
                    className="absolute top-6 -right-10 bg-gradient-vdc-orange text-white px-12 py-2 text-sm font-bold transform rotate-45 shadow-lg"
                  >
                    POPULAIRE
                  </motion.div>
                )}

                <div className={`bg-gradient-to-br ${pkg.gradient} p-8 text-white`}>
                  <div className="text-5xl mb-4">
                    <FiTv />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                  <p className="text-white/90 text-sm mb-6">{pkg.description}</p>

                  <div className="mb-6">
                    <div className="flex items-baseline mb-2">
                      <span className="text-5xl font-bold">{pkg.price}</span>
                      <span className="text-xl ml-2">GNF</span>
                    </div>
                    <p className="text-white/80 text-sm">/mois</p>
                  </div>

                  <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-3 inline-block">
                    <div className="flex items-baseline">
                      <span className="text-3xl font-bold">{pkg.channels}</span>
                      <span className="text-sm ml-2">chaînes</span>
                    </div>
                  </div>
                </div>

                <div className="p-8">
                  <ul className="space-y-4 mb-8">
                    {pkg.features.map((feature, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + idx * 0.1 }}
                        className="flex items-start"
                      >
                        <FiCheck className={`${pkg.checkColor} mt-1 mr-3 flex-shrink-0`} size={20} />
                        <span className="text-vdc-gray-700">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>

                  <Link href="/Contact">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-full bg-gradient-to-r ${pkg.buttonGradient} text-white py-4 rounded-xl font-bold flex items-center justify-center group transition-all shadow-lg`}
                    >
                      S'abonner maintenant
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
      <section className="py-20 bg-gradient-to-r from-vdc-green to-emerald-600">
        <div className="container mx-auto px-4 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Prêt pour l'Expérience IPTV ?
            </h2>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Rejoignez des milliers de clients qui ont déjà fait le choix de la télévision du futur.
            </p>
            <Link href="/Contact">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(0,0,0,0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-vdc-green px-10 py-5 rounded-full font-bold text-lg shadow-lg"
              >
                Commander Maintenant
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default TV;
