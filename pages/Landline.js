"use client";
import React from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import Link from "next/link";
import { FiCheck, FiPhone, FiHome, FiShield, FiBriefcase, FiClock, FiArrowRight, FiPhoneCall } from "react-icons/fi";

const Landline = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const plans = [
    {
      name: "Résidentiel Basic",
      price: "75,000",
      description: "Téléphonie fixe pour la maison",
      features: [
        "Ligne fixe analogique",
        "Appels illimités en Guinée",
        "Messagerie vocale gratuite",
        "Affichage du numéro",
        "Transfert d'appel",
        "Double appel",
        "Installation gratuite",
      ],
      popular: false,
      gradient: "from-blue-500 to-blue-600",
      checkColor: "text-blue-500",
      buttonGradient: "from-blue-500 to-blue-600",
      icon: <FiHome />,
    },
    {
      name: "Résidentiel Premium",
      price: "120,000",
      description: "La téléphonie fixe complète",
      features: [
        "Ligne VoIP haute qualité",
        "Appels illimités nationaux",
        "500 minutes internationales",
        "Messagerie vocale visuelle",
        "Conférence à 3",
        "Ne pas déranger",
        "Application mobile",
        "Téléphone HD inclus",
        "Support prioritaire",
      ],
      popular: true,
      gradient: "from-vdc-green to-emerald-600",
      checkColor: "text-vdc-green",
      buttonGradient: "from-vdc-green to-emerald-600",
      icon: <FiPhoneCall />,
    },
    {
      name: "Business Pro",
      price: "250,000",
      description: "Ligne professionnelle avancée",
      features: [
        "Ligne VoIP professionnelle",
        "Appels illimités Guinée",
        "1000 minutes internationales",
        "Standard téléphonique virtuel",
        "Multi-lignes (jusqu'à 5)",
        "Musique d'attente personnalisée",
        "Enregistrement d'appels",
        "Reporting détaillé",
        "Support VIP 24/7",
        "SLA garanti",
      ],
      popular: false,
      gradient: "from-vdc-orange to-orange-600",
      checkColor: "text-vdc-orange",
      buttonGradient: "from-vdc-orange to-orange-600",
      icon: <FiBriefcase />,
    },
  ];

  const advantages = [
    {
      icon: <FiShield className="w-12 h-12" />,
      title: "Fiabilité Garantie",
      description: "Une ligne fixe stable avec 99.9% de disponibilité. Même en cas de coupure d'électricité, restez joignable.",
      gradient: "from-blue-500 to-blue-600",
    },
    {
      icon: <FiPhone className="w-12 h-12" />,
      title: "Qualité Supérieure",
      description: "Son cristallin HD pour des conversations claires. Technologie VoIP de dernière génération.",
      gradient: "from-vdc-green to-emerald-600",
    },
    {
      icon: <FiClock className="w-12 h-12" />,
      title: "Support 24/7",
      description: "Notre équipe technique est disponible jour et nuit pour résoudre vos problèmes rapidement.",
      gradient: "from-vdc-orange to-orange-600",
    },
    {
      icon: <FiBriefcase className="w-12 h-12" />,
      title: "Solutions Business",
      description: "Fonctions professionnelles avancées : standard virtuel, multi-lignes, reporting détaillé.",
      gradient: "from-purple-500 to-purple-600",
    },
  ];

  const businessFeatures = [
    {
      title: "Standard Virtuel Intelligent",
      description: "Menu vocal professionnel avec routage des appels vers différents départements",
      details: ["Menu multi-niveaux", "Routage intelligent", "Heures d'ouverture"],
    },
    {
      title: "Numérotation Abrégée",
      description: "Configurez des numéros courts pour appeler rapidement vos contacts fréquents",
      details: ["99 numéros abrégés", "Annuaire partagé", "Groupes d'appel"],
    },
    {
      title: "Renvoi d'Appel Avancé",
      description: "Transférez vos appels vers mobile, autre fixe ou messagerie selon vos règles",
      details: ["Renvoi conditionnel", "Renvoi sur occupation", "Renvoi planifié"],
    },
    {
      title: "Conférence Multi-participants",
      description: "Organisez des réunions téléphoniques avec jusqu'à 10 participants simultanés",
      details: ["Jusqu'à 10 personnes", "Code d'accès sécurisé", "Enregistrement optionnel"],
    },
  ];

  const useCases = [
    {
      title: "Pour la Maison",
      icon: <FiHome size={32} />,
      description: "Ligne fixe fiable pour toute la famille avec appels illimités en Guinée",
      benefits: ["Économique", "Facile à utiliser", "Toujours joignable"],
    },
    {
      title: "Pour les Entreprises",
      icon: <FiBriefcase size={32} />,
      description: "Standard professionnel avec fonctions avancées pour votre activité",
      benefits: ["Image professionnelle", "Multi-lignes", "Reporting détaillé"],
    },
  ];

  return (
    <div>
      <Head>
        <title>Téléphonie Fixe & Ligne Fixe - VDC Telecom</title>
        <meta
          name="description"
          content="Ligne fixe résidentielle et professionnelle avec appels illimités en Guinée. Standard virtuel, VoIP HD et support 24/7."
        />
      </Head>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-300 rounded-full blur-3xl" />
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
                <FiPhone className="inline mr-2" />
                Ligne Fixe Fiable et Stable
              </motion.span>

              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Téléphonie Fixe Moderne pour Conakry
              </h1>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Une ligne fixe fiable avec appels illimités en Guinée. Pour la maison comme
                pour l'entreprise, restez connecté avec la meilleure qualité.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="#plans">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white text-blue-700 px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-xl transition-all"
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
                    Obtenir un devis
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
                src="/images/engineer.webp"
                alt="Téléphonie fixe VDC"
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
              className="inline-block px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-semibold mb-4"
            >
              Pourquoi Choisir Nos Lignes Fixes ?
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-bold text-vdc-gray-900 mb-4">
              Les Avantages de la Téléphonie Fixe VDC
            </h2>
            <p className="text-xl text-vdc-gray-600 max-w-3xl mx-auto">
              Fiabilité, qualité et fonctionnalités avancées pour particuliers et professionnels
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

      {/* Use Cases Section */}
      <section className="py-20 bg-gradient-to-b from-vdc-gray-50 to-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-vdc-gray-900 mb-4">
              Une Solution pour Tous
            </h2>
            <p className="text-xl text-vdc-gray-600 max-w-3xl mx-auto">
              Que ce soit pour votre domicile ou votre entreprise, nous avons la solution adaptée
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-2xl p-8 shadow-xl"
              >
                <div className="text-vdc-green mb-6">{useCase.icon}</div>
                <h3 className="text-2xl font-bold text-vdc-gray-900 mb-4">{useCase.title}</h3>
                <p className="text-vdc-gray-600 mb-6">{useCase.description}</p>
                <ul className="space-y-2">
                  {useCase.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-vdc-gray-700">
                      <FiCheck className="text-vdc-green mr-2" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section id="plans" className="py-20 bg-white">
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
              Nos Forfaits
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-bold text-vdc-gray-900 mb-4">
              Choisissez Votre Forfait Ligne Fixe
            </h2>
            <p className="text-xl text-vdc-gray-600 max-w-3xl mx-auto">
              Installation gratuite et activation sous 48h pour tous les forfaits
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -10, boxShadow: "0 20px 50px rgba(0,0,0,0.1)" }}
                className={`relative bg-white rounded-2xl overflow-hidden shadow-lg transition-all ${
                  plan.popular ? "ring-4 ring-vdc-green ring-opacity-50" : ""
                }`}
              >
                {plan.popular && (
                  <motion.div
                    initial={{ x: 100 }}
                    whileInView={{ x: 0 }}
                    transition={{ delay: 0.5 }}
                    className="absolute top-6 -right-10 bg-gradient-vdc text-white px-12 py-2 text-sm font-bold transform rotate-45 shadow-lg"
                  >
                    RECOMMANDÉ
                  </motion.div>
                )}

                <div className={`bg-gradient-to-br ${plan.gradient} p-8 text-white`}>
                  <div className="text-5xl mb-4">{plan.icon}</div>
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-white/90 text-sm mb-6">{plan.description}</p>

                  <div className="flex items-baseline mb-2">
                    <span className="text-5xl font-bold">{plan.price}</span>
                    <span className="text-xl ml-2">GNF</span>
                  </div>
                  <p className="text-white/80 text-sm">/mois</p>
                </div>

                <div className="p-8">
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + idx * 0.1 }}
                        className="flex items-start"
                      >
                        <FiCheck className={`${plan.checkColor} mt-1 mr-3 flex-shrink-0`} size={20} />
                        <span className="text-vdc-gray-700">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>

                  <Link href="/Contact">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-full bg-gradient-to-r ${plan.buttonGradient} text-white py-4 rounded-xl font-bold flex items-center justify-center group transition-all shadow-lg`}
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

      {/* Business Features Section */}
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
              className="inline-block px-4 py-2 bg-purple-50 text-purple-600 rounded-full text-sm font-semibold mb-4"
            >
              Fonctionnalités Business
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-bold text-vdc-gray-900 mb-4">
              Standard Téléphonique Professionnel
            </h2>
            <p className="text-xl text-vdc-gray-600 max-w-3xl mx-auto">
              Toutes les fonctionnalités dont votre entreprise a besoin
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {businessFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg"
              >
                <h3 className="text-2xl font-bold text-vdc-gray-900 mb-3">{feature.title}</h3>
                <p className="text-vdc-gray-600 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center text-vdc-gray-700 text-sm">
                      <FiCheck className="text-vdc-green mr-2 flex-shrink-0" size={16} />
                      {detail}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="container mx-auto px-4 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Prêt pour une Ligne Fixe Fiable ?
            </h2>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Installation sous 48h. Contactez-nous dès aujourd'hui pour obtenir votre ligne fixe.
            </p>
            <Link href="/Contact">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(0,0,0,0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-700 px-10 py-5 rounded-full font-bold text-lg shadow-lg"
              >
                Commander Ma Ligne
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Landline;
