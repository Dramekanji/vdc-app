"use client";
import React from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { FiAward, FiUsers, FiTrendingUp, FiShield, FiHeart, FiZap } from "react-icons/fi";
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
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay }}
    >
      <div className="text-5xl md:text-6xl font-bold mb-2">
        {formatNumber(count)}{suffix}
      </div>
      <div className="text-lg text-white/90">{label}</div>
    </motion.div>
  );
};

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [statsRef, statsInView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const values = [
    {
      icon: <FiAward className="w-8 h-8" />,
      title: "Excellence",
      description: "Nous visons l'excellence dans chaque aspect de nos services, de la technologie au support client.",
    },
    {
      icon: <FiUsers className="w-8 h-8" />,
      title: "Orientation Client",
      description: "Nos clients sont au cœur de tout ce que nous faisons. Leur satisfaction est notre priorité absolue.",
    },
    {
      icon: <FiShield className="w-8 h-8" />,
      title: "Fiabilité",
      description: "Une infrastructure robuste et un réseau stable pour garantir une connectivité sans interruption.",
    },
    {
      icon: <FiHeart className="w-8 h-8" />,
      title: "Engagement Social",
      description: "Nous nous engageons à connecter toute la Guinée et à réduire la fracture numérique.",
    },
    {
      icon: <FiZap className="w-8 h-8" />,
      title: "Innovation",
      description: "Adoption continue des dernières technologies pour offrir les meilleures solutions.",
    },
    {
      icon: <FiTrendingUp className="w-8 h-8" />,
      title: "Croissance Durable",
      description: "Un développement responsable qui bénéficie à nos clients, employés et à la communauté.",
    },
  ];

  return (
    <div>
      <Head>
        <title>À Propos de VDC Telecom - Leader Télécom en Guinée</title>
        <meta
          name="description"
          content="VDC Telecom, leader guinéen des télécommunications depuis plus de 15 ans. Découvrez notre histoire, nos valeurs et notre engagement."
        />
      </Head>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-vdc-green to-vdc-green-dark text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-vdc-orange rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Connecter la Guinée au Monde
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Depuis plus de 15 ans, VDC Telecom est le partenaire de confiance de milliers de guinéens et d'entreprises pour leurs besoins en connectivité Internet, IPTV et téléphonie.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Image
                src="/images/engineer.webp"
                alt="Équipe VDC Telecom"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-vdc-gray-900 mb-6">
                Notre Mission
              </h2>
              <p className="text-lg text-vdc-gray-700 mb-6 leading-relaxed">
                VDC Telecom s'engage à fournir des services de télécommunications de classe mondiale en Guinée. Notre mission est de connecter chaque foyer, chaque entreprise et chaque citoyen aux opportunités infinies qu'offre Internet.
              </p>
              <p className="text-lg text-vdc-gray-700 mb-6 leading-relaxed">
                Nous croyons que l'accès à Internet haut débit n'est pas un luxe, mais un droit fondamental dans le monde moderne. C'est pourquoi nous investissons continuellement dans notre infrastructure pour étendre notre couverture et améliorer nos services.
              </p>
              <p className="text-lg text-vdc-gray-700 leading-relaxed">
                Avec une équipe de professionnels passionnés et dévoués, nous travaillons sans relâche pour garantir que nos clients bénéficient d'une connectivité fiable, rapide et accessible.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="py-20 bg-gradient-to-r from-vdc-green to-vdc-green-light">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-white text-center">
            <AnimatedStat
              value={15}
              suffix="+"
              label="Années d'Expérience"
              inView={statsInView}
              delay={0}
            />
            <AnimatedStat
              value={50000}
              suffix="+"
              label="Clients Satisfaits"
              inView={statsInView}
              delay={0.1}
            />
            <AnimatedStat
              value={99.9}
              suffix="%"
              label="Disponibilité Réseau"
              inView={statsInView}
              delay={0.2}
              decimals={1}
            />
            <AnimatedStat
              value={24}
              suffix="/7"
              label="Support Technique"
              inView={statsInView}
              delay={0.3}
            />
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section ref={ref} className="py-20 bg-gradient-to-b from-white to-vdc-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-vdc-gray-900 mb-4">
              Nos Valeurs
            </h2>
            <p className="text-xl text-vdc-gray-600 max-w-3xl mx-auto">
              Les principes qui guident notre action quotidienne et notre vision pour l'avenir
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-vdc-green to-vdc-green-light rounded-xl flex items-center justify-center text-white mb-6">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold text-vdc-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-vdc-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-vdc-orange to-vdc-orange-light">
        <div className="container mx-auto px-4 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Rejoignez la Famille VDC
            </h2>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Devenez l'un de nos 50,000+ clients satisfaits et découvrez la différence VDC Telecom.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/Contact"
                whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(0,0,0,0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="inline-block bg-white text-vdc-orange px-10 py-5 rounded-full font-bold text-lg shadow-lg"
              >
                Contactez-nous
              </motion.a>
              <motion.a
                href="/Internet"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block bg-white/10 backdrop-blur-sm text-white px-10 py-5 rounded-full font-bold text-lg border-2 border-white/30 hover:bg-white/20 transition-all"
              >
                Nos Forfaits
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
