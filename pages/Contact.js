"use client";
import React, { useState } from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import { FiMail, FiPhone, FiMapPin, FiClock, FiSend } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic here
    alert("Merci pour votre message ! Nous vous contacterons bientôt.");
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: <FiPhone className="w-6 h-6" />,
      title: "Téléphone",
      details: ["+224 XXX XXX XXX", "+224 YYY YYY YYY"],
      link: "tel:+224XXXXXXXXX",
    },
    {
      icon: <FaWhatsapp className="w-6 h-6" />,
      title: "WhatsApp",
      details: ["+224 XXX XXX XXX"],
      link: "https://wa.me/224XXXXXXXXX",
    },
    {
      icon: <FiMail className="w-6 h-6" />,
      title: "Email",
      details: ["contact@vdctelecom.gn", "support@vdctelecom.gn"],
      link: "mailto:contact@vdctelecom.gn",
    },
    {
      icon: <FiMapPin className="w-6 h-6" />,
      title: "Adresse",
      details: ["Kaloum, Conakry", "République de Guinée"],
      link: "https://maps.google.com",
    },
    {
      icon: <FiClock className="w-6 h-6" />,
      title: "Heures d'ouverture",
      details: ["Lun - Ven: 8h - 18h", "Sam: 9h - 14h"],
      link: null,
    },
  ];

  return (
    <div>
      <Head>
        <title>Contactez-nous - VDC Telecom</title>
        <meta
          name="description"
          content="Contactez VDC Telecom pour toute question sur nos services Internet, IPTV et téléphonie. Support 24/7 disponible."
        />
      </Head>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-vdc-green to-vdc-green-dark text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Contactez-nous
            </h1>
            <p className="text-xl text-white/90">
              Notre équipe est disponible 24/7 pour répondre à toutes vos questions et vous accompagner dans votre projet de connectivité.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-2xl shadow-xl p-8"
              >
                <h2 className="text-3xl font-bold text-vdc-gray-900 mb-6">
                  Envoyez-nous un message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-vdc-gray-700 mb-2">
                        Nom complet *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-vdc-gray-300 rounded-lg focus:ring-2 focus:ring-vdc-green focus:border-transparent transition-all"
                        placeholder="Votre nom"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-vdc-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-vdc-gray-300 rounded-lg focus:ring-2 focus:ring-vdc-green focus:border-transparent transition-all"
                        placeholder="votre@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-vdc-gray-700 mb-2">
                        Téléphone *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-vdc-gray-300 rounded-lg focus:ring-2 focus:ring-vdc-green focus:border-transparent transition-all"
                        placeholder="+224 XXX XXX XXX"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-vdc-gray-700 mb-2">
                        Sujet *
                      </label>
                      <select
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-vdc-gray-300 rounded-lg focus:ring-2 focus:ring-vdc-green focus:border-transparent transition-all"
                      >
                        <option value="">Choisir un sujet</option>
                        <option value="internet">Forfait Internet</option>
                        <option value="tv">IPTV & Télévision</option>
                        <option value="phone">Téléphonie</option>
                        <option value="business">Solutions Entreprises</option>
                        <option value="support">Support Technique</option>
                        <option value="other">Autre</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-vdc-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows="6"
                      className="w-full px-4 py-3 border border-vdc-gray-300 rounded-lg focus:ring-2 focus:ring-vdc-green focus:border-transparent transition-all resize-none"
                      placeholder="Décrivez votre demande..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-vdc text-white px-8 py-4 rounded-full font-bold text-lg shadow-vdc hover:shadow-vdc-lg transition-all flex items-center justify-center"
                  >
                    <FiSend className="mr-2" />
                    Envoyer le message
                  </motion.button>
                </form>
              </motion.div>
            </div>

            {/* Contact Info Sidebar */}
            <div className="lg:col-span-1">
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="bg-gradient-to-br from-vdc-gray-50 to-white rounded-xl p-6 shadow-lg"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-vdc-green text-white rounded-lg flex items-center justify-center flex-shrink-0">
                        {info.icon}
                      </div>
                      <div>
                        <h3 className="font-bold text-vdc-gray-900 mb-2">
                          {info.title}
                        </h3>
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-vdc-gray-600">
                            {info.link && idx === 0 ? (
                              <a
                                href={info.link}
                                target={info.link.startsWith("http") ? "_blank" : undefined}
                                rel={info.link.startsWith("http") ? "noopener noreferrer" : undefined}
                                className="hover:text-vdc-green transition-colors"
                              >
                                {detail}
                              </a>
                            ) : (
                              detail
                            )}
                          </p>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Quick Actions */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="mt-8 bg-gradient-to-br from-vdc-orange to-vdc-orange-light rounded-2xl p-6 text-white"
              >
                <h3 className="text-xl font-bold mb-4">Support Urgent ?</h3>
                <p className="mb-6 text-white/90">
                  Notre équipe de support est disponible 24/7 pour les urgences.
                </p>
                <a href="tel:+224XXXXXXXXX">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-white text-vdc-orange px-6 py-3 rounded-full font-bold shadow-lg"
                  >
                    Appeler Maintenant
                  </motion.button>
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section - Placeholder */}
      <section className="h-96 bg-vdc-gray-200">
        <div className="w-full h-full flex items-center justify-center text-vdc-gray-600">
          <div className="text-center">
            <FiMapPin size={48} className="mx-auto mb-4" />
            <p className="text-lg">Google Maps Integration</p>
            <p className="text-sm">Kaloum, Conakry, Guinée</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
