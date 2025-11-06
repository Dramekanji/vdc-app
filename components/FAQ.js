"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiChevronDown, FiHelpCircle } from "react-icons/fi";

const FAQ = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "Quelles sont les vitesses Internet disponibles ?",
      answer: "VDC Telecom propose des vitesses allant de 50 Mbps à 1 Gbps. Nos plans résidentiels incluent le Starter (50 Mbps), Premium (200 Mbps) et Ultra (1 Gbps). Pour les entreprises, nous proposons des solutions personnalisées avec des vitesses adaptées à vos besoins professionnels.",
    },
    {
      question: "Y a-t-il des frais d'installation ?",
      answer: "L'installation est GRATUITE pour tous les plans Premium et Ultra. Pour le plan Starter, des frais d'installation de 150,000 GNF s'appliquent. Nos techniciens certifiés assurent une installation professionnelle incluant la configuration du modem Wi-Fi et l'optimisation de votre réseau.",
    },
    {
      question: "Puis-je résilier mon abonnement à tout moment ?",
      answer: "Oui, absolument ! VDC Telecom ne vous engage pas dans des contrats à long terme. Vous pouvez résilier votre abonnement à tout moment avec un préavis de 30 jours, sans frais de résiliation. Nous croyons en la satisfaction client plutôt qu'en les contrats contraignants.",
    },
    {
      question: "Comment puis-je vérifier si la fibre est disponible chez moi ?",
      answer: "Vous pouvez vérifier la disponibilité de la fibre dans votre zone de trois façons : 1) Utilisez notre outil de vérification en ligne sur la page Couverture, 2) Appelez notre service client au +224 XXX XXX XXX, ou 3) Visitez l'un de nos points de vente. Nous couvrons actuellement Kaloum, Matam, Ratoma, Kipé et d'autres quartiers de Conakry.",
    },
    {
      question: "Que faire en cas de panne Internet ?",
      answer: "En cas de panne, suivez ces étapes : 1) Redémarrez votre modem en le débranchant pendant 30 secondes, 2) Vérifiez si tous les câbles sont bien connectés, 3) Si le problème persiste, contactez notre support 24/7 au +224 XXX XXX XXX ou via WhatsApp. Nos techniciens interviennent rapidement, généralement sous 4 heures pour les pannes.",
    },
    {
      question: "Le modem Wi-Fi est-il inclus dans l'abonnement ?",
      answer: "Oui ! Tous nos plans incluent un modem Wi-Fi moderne. Les plans Starter incluent un modem Wi-Fi standard, le plan Premium inclut un modem Wi-Fi 6, et le plan Ultra inclut un routeur Wi-Fi 6E premium haute performance. Vous n'avez rien à acheter séparément.",
    },
    {
      question: "Puis-je upgrader mon plan à tout moment ?",
      answer: "Absolument ! Vous pouvez upgrader votre plan à tout moment sans frais supplémentaires. Il suffit de nous contacter et le changement sera effectif sous 24-48 heures. Si vous passez à un plan supérieur, vous ne payez que la différence au prorata pour le mois en cours.",
    },
    {
      question: "Y a-t-il une limite de données ?",
      answer: "Non, tous nos plans offrent une bande passante ILLIMITÉE. Téléchargez, streamez et naviguez autant que vous le souhaitez sans vous soucier de dépassements ou de frais supplémentaires. Nous ne bridons jamais votre vitesse, même en cas d'utilisation intensive.",
    },
    {
      question: "Comment fonctionne le support technique ?",
      answer: "Notre support technique est disponible 24/7 par téléphone, WhatsApp, email et chat en ligne. Les clients Premium et Ultra bénéficient d'un support prioritaire avec des temps de réponse garantis. Nous proposons également une assistance à distance pour résoudre la plupart des problèmes sans déplacement.",
    },
    {
      question: "Proposez-vous des forfaits combinés (Internet + TV + Téléphone) ?",
      answer: "Oui ! Nous proposons des forfaits combinés avantageux qui incluent Internet haut débit, IPTV avec 200+ chaînes, et service téléphonique. Ces packages offrent une réduction de 15-20% par rapport aux services individuels. Contactez-nous pour découvrir nos offres bundles personnalisées.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
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
            className="inline-flex items-center px-4 py-2 bg-vdc-green-50 text-vdc-green-600 rounded-full text-sm font-semibold mb-4"
          >
            <FiHelpCircle className="mr-2" />
            Questions Fréquentes
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold text-vdc-gray-900 mb-4">
            Tout Ce Que Vous Devez Savoir
          </h2>
          <p className="text-xl text-vdc-gray-600 max-w-3xl mx-auto">
            Vous avez des questions ? Nous avons les réponses. Si vous ne trouvez pas ce que vous cherchez, n'hésitez pas à nous contacter.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="mb-4"
            >
              <motion.button
                onClick={() => toggleFAQ(index)}
                className={`w-full text-left bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 ${
                  activeIndex === index ? "ring-2 ring-vdc-green" : ""
                }`}
                whileHover={{ scale: 1.01 }}
              >
                <div className="p-6 flex justify-between items-start gap-4">
                  <h3 className="text-lg md:text-xl font-bold text-vdc-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: activeIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      activeIndex === index
                        ? "bg-vdc-green text-white"
                        : "bg-vdc-gray-100 text-vdc-gray-600"
                    }`}>
                      <FiChevronDown size={20} />
                    </div>
                  </motion.div>
                </div>

                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 text-vdc-gray-700 leading-relaxed border-t border-vdc-gray-100 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center bg-gradient-to-r from-vdc-green to-vdc-green-light rounded-3xl p-12 text-white"
        >
          <h3 className="text-3xl font-bold mb-4">
            Vous n'avez pas trouvé votre réponse ?
          </h3>
          <p className="text-xl mb-8 text-white/90">
            Notre équipe est là pour vous aider 24/7
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="/Contact"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(0,0,0,0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-white text-vdc-green px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-xl transition-all"
            >
              Contactez-nous
            </motion.a>
            <motion.a
              href="tel:+224XXXXXXXXX"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full font-bold border-2 border-white/30 hover:bg-white/20 transition-all"
            >
              +224 XXX XXX XXX
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
