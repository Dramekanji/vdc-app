"use client";
import React, { useState } from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FiMail, FiLock, FiEye, FiEyeOff, FiUser, FiShield, FiArrowRight, FiCheckCircle } from "react-icons/fi";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    phone: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic here
    alert(isLogin ? "Connexion en cours..." : "Inscription en cours...");
  };

  const features = [
    {
      icon: <FiCheckCircle className="w-6 h-6" />,
      text: "Gérez vos forfaits en ligne",
    },
    {
      icon: <FiCheckCircle className="w-6 h-6" />,
      text: "Consultez vos factures",
    },
    {
      icon: <FiCheckCircle className="w-6 h-6" />,
      text: "Suivez votre consommation",
    },
    {
      icon: <FiCheckCircle className="w-6 h-6" />,
      text: "Support client prioritaire",
    },
  ];

  const benefits = [
    "Accès à votre espace client 24/7",
    "Gestion complète de vos services",
    "Historique de facturation détaillé",
    "Modification de forfaits en ligne",
    "Demandes de support rapides",
    "Notifications SMS/Email",
  ];

  return (
    <div>
      <Head>
        <title>{isLogin ? "Connexion" : "Inscription"} - Espace Client VDC Telecom</title>
        <meta
          name="description"
          content="Accédez à votre espace client VDC Telecom pour gérer vos services Internet, IPTV et téléphonie."
        />
      </Head>

      <section className="min-h-screen bg-gradient-to-br from-vdc-gray-50 via-white to-vdc-green-50 py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            {/* Left Side - Branding and Benefits */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="hidden lg:block"
            >
              <div className="relative">
                {/* Background Decoration */}
                <div className="absolute -top-10 -left-10 w-64 h-64 bg-vdc-green/10 rounded-full blur-3xl" />
                <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-vdc-orange/10 rounded-full blur-3xl" />

                <div className="relative z-10">
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="mb-8"
                  >
                    <h1 className="text-5xl font-bold text-vdc-gray-900 mb-4">
                      Bienvenue sur VDC Telecom
                    </h1>
                    <p className="text-xl text-vdc-gray-600 leading-relaxed">
                      Gérez tous vos services de télécommunications en un seul endroit
                    </p>
                  </motion.div>

                  {/* Features Grid */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="grid grid-cols-2 gap-4 mb-8"
                  >
                    {features.map((feature, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 + index * 0.1 }}
                        className="flex items-center bg-white rounded-lg p-4 shadow-md"
                      >
                        <div className="text-vdc-green mr-3">{feature.icon}</div>
                        <span className="text-sm font-medium text-vdc-gray-700">
                          {feature.text}
                        </span>
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* Illustration */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 }}
                    className="relative rounded-2xl overflow-hidden shadow-2xl"
                  >
                    <Image
                      src="/images/man-with-laptop1.webp"
                      alt="Espace Client VDC"
                      width={600}
                      height={400}
                      className="w-full h-auto"
                    />
                  </motion.div>

                  {/* Additional Benefits */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="mt-8 bg-gradient-to-r from-vdc-green to-vdc-green-light rounded-2xl p-6 text-white"
                  >
                    <h3 className="text-xl font-bold mb-4 flex items-center">
                      <FiShield className="mr-2" />
                      Espace Sécurisé
                    </h3>
                    <ul className="space-y-2 text-sm">
                      {benefits.slice(0, 3).map((benefit, index) => (
                        <li key={index} className="flex items-center">
                          <FiCheckCircle className="mr-2 flex-shrink-0" size={16} />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Right Side - Login/Signup Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
                {/* Toggle Buttons */}
                <div className="flex gap-2 mb-8 bg-vdc-gray-100 rounded-full p-1">
                  <button
                    onClick={() => setIsLogin(true)}
                    className={`flex-1 py-3 rounded-full font-semibold transition-all ${
                      isLogin
                        ? "bg-gradient-vdc text-white shadow-vdc"
                        : "text-vdc-gray-600 hover:text-vdc-green"
                    }`}
                  >
                    Connexion
                  </button>
                  <button
                    onClick={() => setIsLogin(false)}
                    className={`flex-1 py-3 rounded-full font-semibold transition-all ${
                      !isLogin
                        ? "bg-gradient-vdc text-white shadow-vdc"
                        : "text-vdc-gray-600 hover:text-vdc-green"
                    }`}
                  >
                    Inscription
                  </button>
                </div>

                {/* Form Header */}
                <motion.div
                  key={isLogin ? "login" : "signup"}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mb-8"
                >
                  <h2 className="text-3xl font-bold text-vdc-gray-900 mb-2">
                    {isLogin ? "Bon retour parmi nous !" : "Créez votre compte"}
                  </h2>
                  <p className="text-vdc-gray-600">
                    {isLogin
                      ? "Connectez-vous pour accéder à votre espace client"
                      : "Inscrivez-vous pour gérer vos services en ligne"}
                  </p>
                </motion.div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Field (Signup only) */}
                  {!isLogin && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      transition={{ duration: 0.3 }}
                    >
                      <label className="block text-sm font-medium text-vdc-gray-700 mb-2">
                        Nom complet *
                      </label>
                      <div className="relative">
                        <FiUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-vdc-gray-400" />
                        <input
                          type="text"
                          name="name"
                          required={!isLogin}
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full pl-12 pr-4 py-4 border-2 border-vdc-gray-200 rounded-xl focus:ring-2 focus:ring-vdc-green focus:border-transparent transition-all"
                          placeholder="Votre nom complet"
                        />
                      </div>
                    </motion.div>
                  )}

                  {/* Email Field */}
                  <div>
                    <label className="block text-sm font-medium text-vdc-gray-700 mb-2">
                      Adresse email *
                    </label>
                    <div className="relative">
                      <FiMail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-vdc-gray-400" />
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full pl-12 pr-4 py-4 border-2 border-vdc-gray-200 rounded-xl focus:ring-2 focus:ring-vdc-green focus:border-transparent transition-all"
                        placeholder="vous@exemple.com"
                      />
                    </div>
                  </div>

                  {/* Phone Field (Signup only) */}
                  {!isLogin && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      transition={{ duration: 0.3 }}
                    >
                      <label className="block text-sm font-medium text-vdc-gray-700 mb-2">
                        Téléphone *
                      </label>
                      <div className="relative">
                        <FiUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-vdc-gray-400" />
                        <input
                          type="tel"
                          name="phone"
                          required={!isLogin}
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full pl-12 pr-4 py-4 border-2 border-vdc-gray-200 rounded-xl focus:ring-2 focus:ring-vdc-green focus:border-transparent transition-all"
                          placeholder="+224 XXX XXX XXX"
                        />
                      </div>
                    </motion.div>
                  )}

                  {/* Password Field */}
                  <div>
                    <label className="block text-sm font-medium text-vdc-gray-700 mb-2">
                      Mot de passe *
                    </label>
                    <div className="relative">
                      <FiLock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-vdc-gray-400" />
                      <input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        required
                        value={formData.password}
                        onChange={handleChange}
                        className="w-full pl-12 pr-12 py-4 border-2 border-vdc-gray-200 rounded-xl focus:ring-2 focus:ring-vdc-green focus:border-transparent transition-all"
                        placeholder="••••••••"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-vdc-gray-400 hover:text-vdc-green transition-colors"
                      >
                        {showPassword ? <FiEyeOff /> : <FiEye />}
                      </button>
                    </div>
                  </div>

                  {/* Confirm Password (Signup only) */}
                  {!isLogin && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      transition={{ duration: 0.3 }}
                    >
                      <label className="block text-sm font-medium text-vdc-gray-700 mb-2">
                        Confirmer le mot de passe *
                      </label>
                      <div className="relative">
                        <FiLock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-vdc-gray-400" />
                        <input
                          type={showPassword ? "text" : "password"}
                          name="confirmPassword"
                          required={!isLogin}
                          value={formData.confirmPassword}
                          onChange={handleChange}
                          className="w-full pl-12 pr-4 py-4 border-2 border-vdc-gray-200 rounded-xl focus:ring-2 focus:ring-vdc-green focus:border-transparent transition-all"
                          placeholder="••••••••"
                        />
                      </div>
                    </motion.div>
                  )}

                  {/* Remember Me / Forgot Password (Login only) */}
                  {isLogin && (
                    <div className="flex items-center justify-between">
                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          className="w-4 h-4 text-vdc-green border-vdc-gray-300 rounded focus:ring-vdc-green"
                        />
                        <span className="ml-2 text-sm text-vdc-gray-600">
                          Se souvenir de moi
                        </span>
                      </label>
                      <Link
                        href="/forgot-password"
                        className="text-sm text-vdc-green hover:text-vdc-green-dark font-medium"
                      >
                        Mot de passe oublié ?
                      </Link>
                    </div>
                  )}

                  {/* Terms (Signup only) */}
                  {!isLogin && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <label className="flex items-start">
                        <input
                          type="checkbox"
                          required
                          className="w-4 h-4 mt-1 text-vdc-green border-vdc-gray-300 rounded focus:ring-vdc-green"
                        />
                        <span className="ml-2 text-sm text-vdc-gray-600">
                          J'accepte les{" "}
                          <Link href="/terms" className="text-vdc-green hover:underline">
                            conditions d'utilisation
                          </Link>{" "}
                          et la{" "}
                          <Link href="/privacy" className="text-vdc-green hover:underline">
                            politique de confidentialité
                          </Link>
                        </span>
                      </label>
                    </motion.div>
                  )}

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-vdc text-white py-4 rounded-xl font-bold text-lg shadow-vdc hover:shadow-vdc-lg transition-all flex items-center justify-center group"
                  >
                    {isLogin ? "Se connecter" : "Créer mon compte"}
                    <FiArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" />
                  </motion.button>
                </form>

                {/* Divider */}
                <div className="relative my-8">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-vdc-gray-200" />
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-4 bg-white text-vdc-gray-500">Ou</span>
                  </div>
                </div>

                {/* Alternative Action */}
                <div className="text-center">
                  <p className="text-vdc-gray-600">
                    {isLogin ? "Pas encore de compte ?" : "Vous avez déjà un compte ?"}{" "}
                    <button
                      onClick={() => setIsLogin(!isLogin)}
                      className="text-vdc-green hover:text-vdc-green-dark font-semibold"
                    >
                      {isLogin ? "Créer un compte" : "Se connecter"}
                    </button>
                  </p>
                </div>

                {/* Support Link */}
                <div className="mt-8 pt-8 border-t border-vdc-gray-200 text-center">
                  <p className="text-sm text-vdc-gray-600">
                    Besoin d'aide ?{" "}
                    <Link
                      href="/Contact"
                      className="text-vdc-green hover:text-vdc-green-dark font-medium"
                    >
                      Contactez notre support
                    </Link>
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
