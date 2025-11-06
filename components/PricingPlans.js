"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiCheck, FiWifi, FiZap, FiAward, FiArrowRight } from "react-icons/fi";
import Link from "next/link";

const PricingPlans = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedCategory, setSelectedCategory] = useState("residentiel");

  const categories = [
    { id: "residentiel", label: "Résidentiel" },
    { id: "business", label: "Entreprises" },
  ];

  const plans = {
    residentiel: [
      {
        name: "Starter",
        speed: "50",
        unit: "Mbps",
        price: "250,000",
        currency: "GNF",
        period: "/mois",
        description: "Parfait pour la navigation et le streaming léger",
        features: [
          "Téléchargement jusqu'à 50 Mbps",
          "Téléversement jusqu'à 10 Mbps",
          "Idéal pour 1-2 appareils",
          "Support technique standard",
          "Modem Wi-Fi inclus",
        ],
        popular: false,
        icon: <FiWifi />,
        gradient: "from-blue-500 to-blue-600",
        checkColor: "text-blue-500",
        buttonGradient: "from-blue-500 to-blue-600",
      },
      {
        name: "Premium",
        speed: "200",
        unit: "Mbps",
        price: "450,000",
        currency: "GNF",
        period: "/mois",
        description: "Le choix idéal pour les familles connectées",
        features: [
          "Téléchargement jusqu'à 200 Mbps",
          "Téléversement jusqu'à 50 Mbps",
          "Idéal pour 3-5 appareils",
          "Support prioritaire 24/7",
          "Modem Wi-Fi 6 inclus",
          "Installation gratuite",
        ],
        popular: true,
        icon: <FiZap />,
        gradient: "from-vdc-orange to-orange-600",
        checkColor: "text-vdc-orange",
        buttonGradient: "from-vdc-orange to-orange-600",
      },
      {
        name: "Ultra",
        speed: "1",
        unit: "Gbps",
        price: "750,000",
        currency: "GNF",
        period: "/mois",
        description: "Vitesse maximale pour les utilisateurs exigeants",
        features: [
          "Téléchargement jusqu'à 1 Gbps",
          "Téléversement jusqu'à 200 Mbps",
          "Appareils illimités",
          "Support VIP dédié 24/7",
          "Routeur Wi-Fi 6E premium inclus",
          "Installation & configuration gratuites",
          "Garantie de vitesse",
        ],
        popular: false,
        icon: <FiAward />,
        gradient: "from-vdc-green to-emerald-600",
        checkColor: "text-vdc-green",
        buttonGradient: "from-vdc-green to-emerald-600",
      },
    ],
    business: [
      {
        name: "Business Starter",
        speed: "100",
        unit: "Mbps",
        price: "500,000",
        currency: "GNF",
        period: "/mois",
        description: "Solution professionnelle pour petites entreprises",
        features: [
          "Téléchargement jusqu'à 100 Mbps",
          "Téléversement jusqu'à 50 Mbps",
          "IP statique incluse",
          "Support technique prioritaire",
          "SLA 99.5% de disponibilité",
          "Équipement professionnel",
        ],
        popular: false,
        icon: <FiWifi />,
        gradient: "from-slate-500 to-slate-600",
        checkColor: "text-slate-500",
        buttonGradient: "from-slate-500 to-slate-600",
      },
      {
        name: "Business Pro",
        speed: "500",
        unit: "Mbps",
        price: "1,200,000",
        currency: "GNF",
        period: "/mois",
        description: "Performance optimale pour entreprises en croissance",
        features: [
          "Téléchargement jusqu'à 500 Mbps",
          "Téléversement jusqu'à 200 Mbps",
          "IP statique dédiée",
          "Support VIP 24/7",
          "SLA 99.9% de disponibilité",
          "Équipement haute performance",
          "Bande passante garantie",
          "Supervision proactive",
        ],
        popular: true,
        icon: <FiZap />,
        gradient: "from-vdc-orange to-orange-600",
        checkColor: "text-vdc-orange",
        buttonGradient: "from-vdc-orange to-orange-600",
      },
      {
        name: "Enterprise",
        speed: "Sur mesure",
        unit: "",
        price: "Sur devis",
        currency: "",
        period: "",
        description: "Solutions personnalisées pour grandes organisations",
        features: [
          "Bande passante personnalisée",
          "Connexions redondantes",
          "IPs statiques multiples",
          "Gestionnaire de compte dédié",
          "SLA 99.99% garanti",
          "Infrastructure sur mesure",
          "Sécurité renforcée",
          "Intégration réseau complexe",
        ],
        popular: false,
        icon: <FiAward />,
        gradient: "from-vdc-green to-emerald-600",
        checkColor: "text-vdc-green",
        buttonGradient: "from-vdc-green to-emerald-600",
      },
    ],
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section ref={ref} className="py-20 bg-gradient-to-b from-white to-vdc-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-2 bg-vdc-green-50 text-vdc-green-600 rounded-full text-sm font-semibold mb-4"
          >
            Nos Plans Internet
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold text-vdc-gray-900 mb-4">
            Choisissez Votre Vitesse Idéale
          </h2>
          <p className="text-xl text-vdc-gray-600 max-w-3xl mx-auto">
            Des forfaits adaptés à tous vos besoins, de la navigation quotidienne aux usages professionnels intensifs
          </p>
        </motion.div>

        {/* Category Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mb-12"
        >
          <div className="inline-flex bg-vdc-gray-100 rounded-full p-1">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-8 py-3 rounded-full font-semibold transition-all ${
                  selectedCategory === category.id
                    ? "bg-gradient-vdc text-white shadow-vdc"
                    : "text-vdc-gray-700 hover:text-vdc-green"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
        >
          {plans[selectedCategory].map((plan, index) => (
            <motion.div
              key={plan.name}
              variants={cardVariants}
              whileHover={{ y: -10, boxShadow: "0 20px 50px rgba(0,0,0,0.1)" }}
              className={`relative bg-white rounded-2xl overflow-hidden shadow-lg transition-all ${
                plan.popular ? "ring-4 ring-vdc-orange ring-opacity-50" : ""
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <motion.div
                  initial={{ x: 100 }}
                  animate={{ x: 0 }}
                  transition={{ delay: 0.5 }}
                  className="absolute top-6 -right-10 bg-gradient-vdc-orange text-white px-12 py-2 text-sm font-bold transform rotate-45 shadow-lg"
                >
                  POPULAIRE
                </motion.div>
              )}

              {/* Card Header */}
              <div className={`bg-gradient-to-br ${plan.gradient} p-8 text-white`}>
                <div className="text-5xl mb-4">{plan.icon}</div>
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-white/90 text-sm mb-6">{plan.description}</p>

                {/* Price Display */}
                <div className="mb-6">
                  <div className="flex items-baseline mb-2">
                    <span className="text-5xl font-bold">{plan.price}</span>
                    {plan.currency && <span className="text-xl ml-2">{plan.currency}</span>}
                  </div>
                  {plan.period && <p className="text-white/80 text-sm">{plan.period}</p>}
                </div>

                {/* Speed Badge */}
                <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-3 inline-block">
                  <div className="flex items-baseline">
                    <span className="text-3xl font-bold">{plan.speed}</span>
                    {plan.unit && <span className="text-sm ml-2">{plan.unit}</span>}
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-8">
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.3 + idx * 0.1 }}
                      className="flex items-start"
                    >
                      <FiCheck className={`${plan.checkColor} mt-1 mr-3 flex-shrink-0`} size={20} />
                      <span className="text-vdc-gray-700">{feature}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Link href={selectedCategory === "business" ? "/Business" : "/Internet"}>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full bg-gradient-to-r ${plan.buttonGradient} text-white py-4 rounded-xl font-bold flex items-center justify-center group transition-all shadow-lg`}
                  >
                    Choisir ce plan
                    <FiArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" />
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-vdc-gray-600 mb-6">
            Besoin d'aide pour choisir le bon plan ?
          </p>
          <Link href="/Contact">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(30, 171, 7, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-vdc-green border-2 border-vdc-green px-8 py-4 rounded-full font-bold hover:bg-vdc-green hover:text-white transition-all"
            >
              Parler à un conseiller
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingPlans;
