"use client";
import React from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import Link from "next/link";
import { FiPhone, FiMail, FiMessageCircle, FiBook } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import FAQ from "@/components/FAQ";

const Support = () => {
  const supportOptions = [
    {
      icon: <FiPhone className="w-8 h-8" />,
      title: "Support Téléphonique",
      description: "Appelez-nous 24/7 pour une assistance immédiate",
      action: "Appeler",
      link: "tel:+224XXXXXXXXX",
      gradient: "from-vdc-green to-vdc-green-light",
    },
    {
      icon: <FaWhatsapp className="w-8 h-8" />,
      title: "WhatsApp",
      description: "Chattez avec nous sur WhatsApp",
      action: "Chatter",
      link: "https://wa.me/224XXXXXXXXX",
      gradient: "from-green-500 to-green-600",
    },
    {
      icon: <FiMail className="w-8 h-8" />,
      title: "Email Support",
      description: "Envoyez-nous un email, réponse sous 24h",
      action: "Envoyer",
      link: "mailto:support@vdctelecom.gn",
      gradient: "from-vdc-orange to-vdc-orange-light",
    },
    {
      icon: <FiMessageCircle className="w-8 h-8" />,
      title: "Chat en Direct",
      description: "Discutez en temps réel avec un agent",
      action: "Démarrer",
      link: "#",
      gradient: "from-blue-500 to-blue-600",
    },
  ];

  return (
    <div>
      <Head>
        <title>Support & Aide - VDC Telecom</title>
        <meta
          name="description"
          content="Centre d'aide VDC Telecom. Support 24/7, FAQ, tutoriels et assistance technique pour tous vos besoins."
        />
      </Head>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-vdc-green to-vdc-green-dark text-white">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Comment Pouvons-Nous Vous Aider ?
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Notre équipe de support est disponible 24/7 pour répondre à toutes vos questions
            </p>
          </motion.div>
        </div>
      </section>

      {/* Support Options */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportOptions.map((option, index) => (
              <motion.a
                key={index}
                href={option.link}
                target={option.link.startsWith("http") ? "_blank" : undefined}
                rel={option.link.startsWith("http") ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="block"
              >
                <div className={`bg-gradient-to-br ${option.gradient} rounded-2xl p-8 text-white h-full shadow-lg hover:shadow-2xl transition-all`}>
                  <div className="mb-6">{option.icon}</div>
                  <h3 className="text-2xl font-bold mb-3">{option.title}</h3>
                  <p className="text-white/90 mb-6">{option.description}</p>
                  <div className="inline-block bg-white/20 px-6 py-2 rounded-full font-semibold">
                    {option.action} →
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ />
    </div>
  );
};

export default Support;
