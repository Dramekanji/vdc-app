"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiStar, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { BsChatQuote } from "react-icons/bs";

const Testimonials = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Aminata Diallo",
      role: "Propriétaire de restaurant",
      location: "Kaloum, Conakry",
      rating: 5,
      text: "Depuis que j'ai souscrit à VDC Telecom, je peux enfin gérer mon restaurant efficacement. La connexion est stable et rapide, même aux heures de pointe. Le service client est exceptionnel !",
      image: "https://i.pravatar.cc/150?img=5",
    },
    {
      name: "Ibrahim Sylla",
      role: "Développeur web",
      location: "Matam, Conakry",
      rating: 5,
      text: "En tant que développeur, j'ai besoin d'une connexion fiable. VDC Telecom dépasse toutes mes attentes. Les vitesses de téléchargement sont impressionnantes et la latence est minimale.",
      image: "https://i.pravatar.cc/150?img=12",
    },
    {
      name: "Fatoumata Camara",
      role: "Directrice d'école",
      location: "Ratoma, Conakry",
      rating: 5,
      text: "Notre école utilise VDC pour nos cours en ligne et notre administration. Le support technique est réactif et professionnel. Un excellent investissement pour l'éducation !",
      image: "https://i.pravatar.cc/150?img=9",
    },
    {
      name: "Mamadou Bah",
      role: "Entrepreneur",
      location: "Kaloum, Conakry",
      rating: 5,
      text: "J'ai testé plusieurs fournisseurs, mais VDC est de loin le meilleur. La fibre optique a transformé la façon dont nous travaillons. Plus de coupures, plus d'attente !",
      image: "https://i.pravatar.cc/150?img=13",
    },
    {
      name: "Aissatou Kouyaté",
      role: "Architecte",
      location: "Kipé, Conakry",
      rating: 5,
      text: "Le transfert de fichiers volumineux est maintenant un jeu d'enfant grâce à VDC. L'installation a été rapide et les techniciens étaient très professionnels.",
      image: "https://i.pravatar.cc/150?img=10",
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section ref={ref} className="py-20 bg-gradient-to-b from-vdc-gray-50 to-white overflow-hidden">
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
            className="inline-block px-4 py-2 bg-vdc-green-50 text-vdc-green-600 rounded-full text-sm font-semibold mb-4"
          >
            Témoignages Clients
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold text-vdc-gray-900 mb-4">
            Ce Que Disent Nos Clients
          </h2>
          <p className="text-xl text-vdc-gray-600 max-w-3xl mx-auto">
            Plus de 50,000 clients satisfaits à travers Conakry nous font confiance pour leurs besoins en connectivité
          </p>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 lg:p-16">
                {/* Quote Icon */}
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.2, type: "spring" }}
                  className="absolute top-8 right-8 text-vdc-green-100"
                >
                  <BsChatQuote size={80} />
                </motion.div>

                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.3 + i * 0.1 }}
                    >
                      <FiStar className="fill-vdc-orange text-vdc-orange" size={24} />
                    </motion.div>
                  ))}
                </div>

                {/* Testimonial Text */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-xl md:text-2xl text-vdc-gray-700 mb-8 leading-relaxed relative z-10"
                >
                  "{testimonials[currentIndex].text}"
                </motion.p>

                {/* Author Info */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="flex items-center gap-4"
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="relative w-16 h-16 rounded-full overflow-hidden border-4 border-vdc-green shadow-lg"
                  >
                    <img
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].name}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  <div>
                    <h4 className="text-xl font-bold text-vdc-gray-900">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-vdc-gray-600">
                      {testimonials[currentIndex].role}
                    </p>
                    <p className="text-sm text-vdc-gray-500">
                      {testimonials[currentIndex].location}
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex justify-between items-center mt-8">
            <motion.button
              whileHover={{ scale: 1.1, x: -5 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevTestimonial}
              className="w-14 h-14 bg-vdc-green text-white rounded-full flex items-center justify-center shadow-vdc hover:shadow-vdc-lg transition-all"
              aria-label="Previous testimonial"
            >
              <FiChevronLeft size={24} />
            </motion.button>

            {/* Dots Indicator */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  className={`transition-all ${
                    currentIndex === index
                      ? "w-10 h-3 bg-vdc-orange rounded-full"
                      : "w-3 h-3 bg-vdc-gray-300 rounded-full hover:bg-vdc-gray-400"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1, x: 5 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextTestimonial}
              className="w-14 h-14 bg-vdc-green text-white rounded-full flex items-center justify-center shadow-vdc hover:shadow-vdc-lg transition-all"
              aria-label="Next testimonial"
            >
              <FiChevronRight size={24} />
            </motion.button>
          </div>
        </div>

        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-6 bg-white rounded-full px-8 py-4 shadow-lg">
            <div className="flex -space-x-3">
              {testimonials.slice(0, 4).map((testimonial, index) => (
                <motion.img
                  key={index}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full border-4 border-white"
                />
              ))}
            </div>
            <div className="text-left">
              <div className="font-bold text-vdc-gray-900">50,000+ Clients Satisfaits</div>
              <div className="text-sm text-vdc-gray-600">Note moyenne: 4.9/5</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
