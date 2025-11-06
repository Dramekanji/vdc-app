"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FiWifi, FiZap, FiTrendingUp, FiArrowRight, FiTv } from "react-icons/fi";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      image: "/images/man-with-laptop.webp",
      title: "Internet Ultra-Rapide pour Conakry",
      subtitle: "Connectez-vous à l'avenir avec nos plans fibre optique jusqu'à 1 Gbps",
      cta: "Découvrir nos offres",
      ctaLink: "/Internet",
      badge: "Nouveau",
      features: ["Fibre optique", "Sans engagement", "Installation gratuite"],
    },
    {
      id: 2,
      image: "/images/family-tv.jpeg",
      title: "IPTV Premium pour Toute la Famille",
      subtitle: "Plus de 200 chaînes HD et 4K, sports en direct, et divertissement sans limite",
      cta: "Voir les forfaits TV",
      ctaLink: "/TV",
      badge: "Populaire",
      features: ["200+ chaînes", "4K Ultra HD", "Replay 7 jours"],
    },
    {
      id: 3,
      image: "/images/man-with-laptop-orange.png",
      title: "Solutions Internet pour Entreprises",
      subtitle: "Des connexions professionnelles fiables avec support technique 24/7",
      cta: "Solutions Business",
      ctaLink: "/Business",
      badge: "Pro",
      features: ["Support 24/7", "IP statique", "SLA garanti"],
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className="relative h-screen min-h-[600px] overflow-hidden bg-gradient-to-br from-vdc-gray-900 via-vdc-gray-800 to-vdc-green-700">
      {/* Background Slides */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 z-0"
        >
          <Image
            src={slides[currentSlide].image}
            alt={slides[currentSlide].title}
            fill
            priority
            className="object-cover"
            quality={90}
          />
          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 h-full flex items-center">
        <div className="max-w-3xl pt-20">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6 }}
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-block mb-6"
              >
                <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-gradient-vdc-orange text-white shadow-vdc-orange">
                  <FiZap className="mr-2" />
                  {slides[currentSlide].badge}
                </span>
              </motion.div>

              {/* Title */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight"
              >
                {slides[currentSlide].title}
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-lg md:text-xl lg:text-2xl text-gray-200 mb-8 leading-relaxed"
              >
                {slides[currentSlide].subtitle}
              </motion.p>

              {/* Features List */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="flex flex-wrap gap-4 mb-10"
              >
                {slides[currentSlide].features.map((feature, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 + idx * 0.1 }}
                    className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20"
                  >
                    {slides[currentSlide].id === 2 ? (
                      <FiTv className="text-vdc-orange mr-2" />
                    ) : (
                      <FiWifi className="text-vdc-orange mr-2" />
                    )}
                    <span className="text-white text-sm font-medium">{feature}</span>
                  </motion.div>
                ))}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link href={slides[currentSlide].ctaLink}>
                  <motion.button
                    whileHover={{ scale: 1.05, boxShadow: "0 10px 40px rgba(30, 171, 7, 0.4)" }}
                    whileTap={{ scale: 0.95 }}
                    className="group bg-gradient-vdc text-white px-8 py-4 rounded-full font-bold text-lg shadow-vdc-lg flex items-center justify-center transition-all"
                  >
                    {slides[currentSlide].cta}
                    <motion.span
                      className="ml-2"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ repeat: Infinity, duration: 1.5 }}
                    >
                      <FiArrowRight />
                    </motion.span>
                  </motion.button>
                </Link>

                <Link href="/Coverage">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full font-bold text-lg border-2 border-white/30 hover:bg-white/20 transition-all"
                  >
                    Vérifier la couverture
                  </motion.button>
                </Link>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
        {slides.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all ${
              currentSlide === index
                ? "w-12 bg-vdc-orange"
                : "w-3 bg-white/40 hover:bg-white/60"
            } h-3 rounded-full`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, repeat: Infinity, duration: 2 }}
        className="absolute bottom-32 left-1/2 transform -translate-x-1/2 z-20 hidden md:block"
      >
        <div className="flex flex-col items-center text-white/60">
          <span className="text-sm mb-2">Faire défiler</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <FiTrendingUp className="rotate-90 text-2xl" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
