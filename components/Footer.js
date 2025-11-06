"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiFacebook,
  FiTwitter,
  FiInstagram,
  FiLinkedin,
  FiYoutube,
  FiArrowUp,
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import Logo from "../public/images/vdclogo.png";

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Get the Hero section height (assuming it's the first section)
      const heroSection = document.querySelector("section");
      if (heroSection) {
        const heroBottom = heroSection.offsetHeight;
        // Show button when user has scrolled past the Hero section
        setShowScrollTop(window.scrollY > heroBottom);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const footerLinks = {
    services: [
      { label: "Internet Résidentiel", href: "/Internet" },
      { label: "IPTV & Télévision", href: "/TV" },
      { label: "Téléphonie Mobile", href: "/Phone" },
      { label: "Solutions Entreprises", href: "/Business" },
      { label: "Packages Combinés", href: "/Bundles" },
    ],
    support: [
      { label: "Centre d'Aide", href: "/Support" },
      { label: "Vérifier Couverture", href: "/Coverage" },
      { label: "État du Réseau", href: "/Network-Status" },
      { label: "FAQ", href: "/#faq" },
      { label: "Tutoriels Vidéo", href: "/Tutorials" },
    ],
    company: [
      { label: "À Propos de Nous", href: "/About" },
      { label: "Nos Valeurs", href: "/About#values" },
      { label: "Carrières", href: "/Careers" },
      { label: "Blog", href: "/Blog" },
      { label: "Presse", href: "/Press" },
    ],
    legal: [
      { label: "Conditions d'Utilisation", href: "/Terms" },
      { label: "Politique de Confidentialité", href: "/Privacy" },
      { label: "Politique de Cookies", href: "/Cookies" },
      { label: "Mentions Légales", href: "/Legal" },
    ],
  };

  const socialLinks = [
    { icon: <FiFacebook size={20} />, href: "https://facebook.com/vdctelecom", label: "Facebook" },
    { icon: <FiInstagram size={20} />, href: "https://instagram.com/vdctelecom", label: "Instagram" },
    { icon: <FiTwitter size={20} />, href: "https://twitter.com/vdctelecom", label: "Twitter" },
    { icon: <FiLinkedin size={20} />, href: "https://linkedin.com/company/vdctelecom", label: "LinkedIn" },
    { icon: <FiYoutube size={20} />, href: "https://youtube.com/@vdctelecom", label: "YouTube" },
    { icon: <FaWhatsapp size={20} />, href: "https://wa.me/224XXXXXXXXX", label: "WhatsApp" },
  ];

  const contactInfo = [
    {
      icon: <FiPhone />,
      label: "Téléphone",
      value: "+224 XXX XXX XXX",
      href: "tel:+224XXXXXXXXX",
    },
    {
      icon: <FiMail />,
      label: "Email",
      value: "contact@vdctelecom.gn",
      href: "mailto:contact@vdctelecom.gn",
    },
    {
      icon: <FiMapPin />,
      label: "Adresse",
      value: "Kaloum, Conakry, République de Guinée",
      href: "https://maps.google.com",
    },
  ];

  return (
    <footer className="bg-gradient-to-b from-vdc-gray-900 to-black text-white pt-20 pb-8">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <Link href="/">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="mb-6"
              >
                <Image
                  src={Logo}
                  alt="VDC Telecom"
                  width={200}
                  height={60}
                  className="brightness-0 invert"
                />
              </motion.div>
            </Link>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Leader guinéen des télécommunications, VDC Telecom offre des solutions Internet haut débit, IPTV et téléphonie pour particuliers et entreprises à Conakry et ses environs.
            </p>

            {/* Social Links */}
            <div className="flex gap-3 mb-8">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-white/10 hover:bg-vdc-green rounded-full flex items-center justify-center transition-colors"
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>

            {/* App Download Badges - Placeholder */}
            <div className="space-y-3">
              <p className="text-sm text-gray-400 mb-3">Téléchargez notre app</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg cursor-pointer transition-colors"
                >
                  <div className="text-xs text-gray-400">Disponible sur</div>
                  <div className="font-semibold">App Store</div>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg cursor-pointer transition-colors"
                >
                  <div className="text-xs text-gray-400">Disponible sur</div>
                  <div className="font-semibold">Google Play</div>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-bold mb-6 text-white">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <Link href={link.href}>
                    <motion.span
                      whileHover={{ x: 5 }}
                      className="text-gray-400 hover:text-vdc-orange transition-colors inline-block"
                    >
                      {link.label}
                    </motion.span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-lg font-bold mb-6 text-white">Support</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <Link href={link.href}>
                    <motion.span
                      whileHover={{ x: 5 }}
                      className="text-gray-400 hover:text-vdc-orange transition-colors inline-block"
                    >
                      {link.label}
                    </motion.span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-lg font-bold mb-6 text-white">Entreprise</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <Link href={link.href}>
                    <motion.span
                      whileHover={{ x: 5 }}
                      className="text-gray-400 hover:text-vdc-orange transition-colors inline-block"
                    >
                      {link.label}
                    </motion.span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-lg font-bold mb-6 text-white">Contact</h3>
            <ul className="space-y-4">
              {contactInfo.map((info, index) => (
                <li key={index}>
                  <a
                    href={info.href}
                    target={info.href.startsWith("http") ? "_blank" : undefined}
                    rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="group"
                  >
                    <div className="flex items-start gap-3">
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                        className="w-8 h-8 bg-vdc-green/20 rounded-lg flex items-center justify-center flex-shrink-0 text-vdc-green group-hover:bg-vdc-green group-hover:text-white transition-colors"
                      >
                        {info.icon}
                      </motion.div>
                      <div>
                        <div className="text-xs text-gray-500 mb-1">{info.label}</div>
                        <div className="text-sm text-gray-400 group-hover:text-vdc-orange transition-colors">
                          {info.value}
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-white/10 py-12 mb-12">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">Restez Informé</h3>
            <p className="text-gray-400 mb-6">
              Inscrivez-vous à notre newsletter pour recevoir nos dernières offres et actualités
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Votre adresse email"
                className="flex-1 px-6 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-vdc-green"
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(30, 171, 7, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-vdc text-white rounded-full font-semibold shadow-vdc"
              >
                S'inscrire
              </motion.button>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="text-sm text-gray-400 text-center md:text-left">
              <p>© {new Date().getFullYear()} VDC Telecom. Tous droits réservés.</p>
              <p className="mt-1">Licence d'exploitation délivrée par l'ARPT Guinée</p>
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              {footerLinks.legal.map((link, index) => (
                <Link key={index} href={link.href}>
                  <motion.span
                    whileHover={{ y: -2 }}
                    className="text-gray-400 hover:text-vdc-orange transition-colors"
                  >
                    {link.label}
                  </motion.span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            onClick={scrollToTop}
            initial={{ opacity: 0, scale: 0, rotate: -180 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 0, rotate: 180 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
              rotate: { duration: 0.6 }
            }}
            whileHover={{ scale: 1.1, y: -5, rotate: 360 }}
            whileTap={{ scale: 0.9 }}
            className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-vdc text-white rounded-full shadow-vdc-lg flex items-center justify-center z-40"
            aria-label="Scroll to top"
          >
            <FiArrowUp size={24} />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
};

export default Footer;
