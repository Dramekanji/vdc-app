"use client";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FiWifi,
  FiZap,
  FiShield,
  FiHeadphones,
  FiClock,
  FiTrendingUp,
  FiUsers,
  FiAward
} from "react-icons/fi";
import { useCountAnimation } from "../hooks/useCountAnimation";

const AnimatedStat = ({ value, suffix = "", label, inView, delay, decimals = 0 }) => {
  const count = useCountAnimation(value, 2000, inView);

  const formatNumber = (num) => {
    if (decimals > 0) {
      return num.toFixed(decimals);
    }
    return num.toLocaleString();
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, delay }}
      className="text-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: delay + 0.1 }}
        className="text-4xl md:text-5xl font-bold mb-2"
      >
        {formatNumber(count)}{suffix}
      </motion.div>
      <div className="text-white/90 font-medium">
        {label}
      </div>
    </motion.div>
  );
};

const Features = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [statsRef, statsInView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const features = [
    {
      icon: <FiWifi className="w-8 h-8" />,
      title: "Fibre Optique Ultra-Rapide",
      description: "Profitez de vitesses allant jusqu'à 1 Gbps pour télécharger, streamer et jouer sans interruption.",
      gradient: "from-vdc-green to-emerald-600",
    },
    {
      icon: <FiZap className="w-8 h-8" />,
      title: "Latence Minimale",
      description: "Une connexion stable avec une latence ultra-faible, idéale pour le gaming et les vidéoconférences.",
      gradient: "from-vdc-orange to-orange-600",
    },
    {
      icon: <FiShield className="w-8 h-8" />,
      title: "Sécurité Renforcée",
      description: "Protection avancée contre les cybermenaces avec pare-feu intégré et cryptage de données.",
      gradient: "from-blue-400 to-blue-600",
    },
    {
      icon: <FiHeadphones className="w-8 h-8" />,
      title: "Support 24/7",
      description: "Notre équipe d'experts est disponible jour et nuit pour répondre à toutes vos questions.",
      gradient: "from-purple-400 to-purple-600",
    },
    {
      icon: <FiClock className="w-8 h-8" />,
      title: "Sans Engagement",
      description: "Aucun contrat à long terme. Résiliez à tout moment sans frais supplémentaires.",
      gradient: "from-pink-400 to-pink-600",
    },
    {
      icon: <FiTrendingUp className="w-8 h-8" />,
      title: "99.9% de Disponibilité",
      description: "Un réseau fiable avec une disponibilité garantie et une compensation en cas de panne.",
      gradient: "from-green-400 to-green-600",
    },
    {
      icon: <FiUsers className="w-8 h-8" />,
      title: "Installation Professionnelle",
      description: "Nos techniciens certifiés assurent une installation rapide et une configuration optimale.",
      gradient: "from-yellow-400 to-yellow-600",
    },
    {
      icon: <FiAward className="w-8 h-8" />,
      title: "Meilleur Rapport Qualité-Prix",
      description: "Des tarifs compétitifs sans compromis sur la qualité du service ou des équipements.",
      gradient: "from-red-400 to-red-600",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-2 bg-vdc-orange-50 text-vdc-orange-600 rounded-full text-sm font-semibold mb-4"
          >
            Pourquoi VDC Telecom ?
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold text-vdc-gray-900 mb-4">
            Ce Qui Nous Distingue
          </h2>
          <p className="text-xl text-vdc-gray-600 max-w-3xl mx-auto">
            Une expérience internet exceptionnelle avec des services de qualité supérieure et un support incomparable
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              className="relative group"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 h-full border border-vdc-gray-100">
                {/* Icon with Gradient Background */}
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center text-white mb-6 shadow-lg`}
                >
                  {feature.icon}
                </motion.div>

                {/* Title */}
                <h3 className="text-xl font-bold text-vdc-gray-900 mb-3">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-vdc-gray-600 leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover Effect Line */}
                <motion.div
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                  className={`h-1 bg-gradient-to-r ${feature.gradient} mt-6 rounded-full`}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          ref={statsRef}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 bg-gradient-to-r from-vdc-green to-vdc-green-light rounded-3xl p-12 text-white"
        >
          <AnimatedStat
            value={50000}
            suffix="+"
            label="Clients Satisfaits"
            inView={statsInView}
            delay={0.5}
          />
          <AnimatedStat
            value={99.9}
            suffix="%"
            label="Disponibilité"
            inView={statsInView}
            delay={0.6}
            decimals={1}
          />
          <AnimatedStat
            value={24}
            suffix="/7"
            label="Support Client"
            inView={statsInView}
            delay={0.7}
          />
          <AnimatedStat
            value={15}
            suffix="+"
            label="Années d'Expérience"
            inView={statsInView}
            delay={0.8}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
