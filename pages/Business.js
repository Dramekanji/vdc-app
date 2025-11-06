"use client";
import React from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import PricingPlans from "@/components/PricingPlans";

const Business = () => {
  return (
    <div>
      <Head>
        <title>Solutions Internet pour Entreprises - VDC Telecom</title>
        <meta
          name="description"
          content="Solutions Internet professionnelles pour entreprises en Guinée. Connexions dédiées, IP statique, support 24/7 et SLA garantis."
        />
      </Head>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-vdc-gray-900 via-vdc-gray-800 to-vdc-green-700 text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Solutions Internet pour Votre Entreprise
              </h1>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Des connexions professionnelles fiables avec support dédié, IP statique et garantie de disponibilité pour propulser votre activité.
              </p>
              <Link href="/Contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-vdc-orange text-white px-8 py-4 rounded-full font-bold shadow-lg"
                >
                  Demander un Devis
                </motion.button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Image
                src="/images/ppl-using-laptop.jpeg"
                alt="Solutions Business"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <PricingPlans />
    </div>
  );
};

export default Business;
