"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineDown,
  AiOutlineUser,
  AiOutlineShoppingCart
} from "react-icons/ai";
import { FiPhone, FiMonitor, FiWifi } from "react-icons/fi";
import Logo from "../public/images/vdclogo.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNav = () => {
    setNav(!nav);
  };

  const closeNav = () => {
    setNav(false);
    setActiveDropdown(null);
  };

  const toggleDropdown = (menu) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  const menuItems = [
    {
      id: "internet",
      label: "Internet",
      icon: <FiWifi className="mr-2" />,
      submenu: [
        { label: "Plans résidentiels", href: "/Internet", desc: "Connexion rapide et fiable" },
        { label: "Plans d'affaires", href: "/Business", desc: "Solutions professionnelles" },
        { label: "Couverture réseau", href: "/Coverage", desc: "Vérifiez votre zone" },
      ],
    },
    {
      id: "tv",
      label: "Télévision",
      icon: <FiMonitor className="mr-2" />,
      submenu: [
        { label: "Plans IPTV", href: "/TV", desc: "Chaînes HD et 4K" },
        { label: "Packages combinés", href: "/Bundles", desc: "Internet + TV + Téléphone" },
      ],
    },
    {
      id: "phone",
      label: "Téléphone",
      icon: <FiPhone className="mr-2" />,
      submenu: [
        { label: "Téléphonie mobile", href: "/Phone", desc: "Plans voix et données" },
        { label: "Téléphone fixe", href: "/Landline", desc: "Service résidentiel" },
      ],
    },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? "bg-white shadow-lg"
            : "bg-gradient-to-r from-vdc-green to-vdc-green-light"
        }`}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" onClick={closeNav}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative z-50"
              >
                <Image
                  src={Logo}
                  alt="VDC Telecom Logo"
                  width={180}
                  height={50}
                  priority
                  className="object-contain"
                />
              </motion.div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-8">
              {menuItems.map((item) => (
                <div
                  key={item.id}
                  className="relative group"
                  onMouseEnter={() => setActiveDropdown(item.id)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button
                    className={`flex items-center text-base font-medium py-2 transition-colors ${
                      scrolled
                        ? "text-vdc-gray-700 hover:text-vdc-green"
                        : "text-white hover:text-vdc-orange-light"
                    }`}
                  >
                    {item.label}
                    <AiOutlineDown className="ml-1 text-xs" />
                  </button>

                  <AnimatePresence>
                    {activeDropdown === item.id && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-0 mt-2 w-80 bg-white rounded-lg shadow-2xl overflow-hidden"
                      >
                        <div className="p-2">
                          {item.submenu.map((subItem, idx) => (
                            <Link
                              key={idx}
                              href={subItem.href}
                              onClick={closeNav}
                            >
                              <motion.div
                                whileHover={{ x: 5 }}
                                className="flex items-start p-4 rounded-lg hover:bg-vdc-green-50 transition-colors cursor-pointer"
                              >
                                {item.icon}
                                <div>
                                  <div className="font-semibold text-vdc-gray-800">
                                    {subItem.label}
                                  </div>
                                  <div className="text-sm text-vdc-gray-600">
                                    {subItem.desc}
                                  </div>
                                </div>
                              </motion.div>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}

              <Link href="/Support">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`text-base font-medium py-2 transition-colors ${
                    scrolled
                      ? "text-vdc-gray-700 hover:text-vdc-green"
                      : "text-white hover:text-vdc-orange-light"
                  }`}
                >
                  Support
                </motion.button>
              </Link>

              <Link href="/About">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`text-base font-medium py-2 transition-colors ${
                    scrolled
                      ? "text-vdc-gray-700 hover:text-vdc-green"
                      : "text-white hover:text-vdc-orange-light"
                  }`}
                >
                  À propos
                </motion.button>
              </Link>
            </div>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-4">
              <Link href="/Login">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex items-center px-4 py-2 rounded-full font-medium transition-colors ${
                    scrolled
                      ? "text-vdc-green hover:bg-vdc-green-50"
                      : "text-white hover:bg-white/10"
                  }`}
                >
                  <AiOutlineUser className="mr-2" />
                  Mon compte
                </motion.button>
              </Link>

              <Link href="/Contact">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 8px 30px rgba(243, 148, 25, 0.3)" }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-vdc-orange text-white px-6 py-2.5 rounded-full font-semibold shadow-vdc-orange"
                >
                  Contactez-nous
                </motion.button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={handleNav}
              className="lg:hidden z-50 p-2"
              aria-label="Toggle menu"
            >
              {nav ? (
                <AiOutlineClose
                  size={28}
                  className={scrolled ? "text-vdc-green" : "text-white"}
                />
              ) : (
                <AiOutlineMenu
                  size={28}
                  className={scrolled ? "text-vdc-green" : "text-white"}
                />
              )}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {nav && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={closeNav}
              className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            />

            {/* Mobile Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-full sm:w-96 bg-white z-40 lg:hidden overflow-y-auto shadow-2xl"
            >
              <div className="pt-24 pb-8 px-6">
                {/* Mobile Menu Items */}
                {menuItems.map((item) => (
                  <div key={item.id} className="mb-4">
                    <button
                      onClick={() => toggleDropdown(item.id)}
                      className="flex items-center justify-between w-full py-4 px-4 bg-vdc-gray-50 rounded-lg font-semibold text-vdc-gray-800"
                    >
                      <span className="flex items-center text-lg">
                        {item.icon}
                        {item.label}
                      </span>
                      <motion.div
                        animate={{ rotate: activeDropdown === item.id ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <AiOutlineDown />
                      </motion.div>
                    </button>

                    <AnimatePresence>
                      {activeDropdown === item.id && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="pl-4 pt-2 space-y-2">
                            {item.submenu.map((subItem, idx) => (
                              <Link
                                key={idx}
                                href={subItem.href}
                                onClick={closeNav}
                              >
                                <motion.div
                                  whileTap={{ scale: 0.98 }}
                                  className="py-3 px-4 hover:bg-vdc-green-50 rounded-lg transition-colors"
                                >
                                  <div className="font-medium text-vdc-gray-800">
                                    {subItem.label}
                                  </div>
                                  <div className="text-sm text-vdc-gray-600">
                                    {subItem.desc}
                                  </div>
                                </motion.div>
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}

                {/* Mobile Support & About Links */}
                <Link href="/Support" onClick={closeNav}>
                  <motion.div
                    whileTap={{ scale: 0.98 }}
                    className="py-4 px-4 bg-vdc-gray-50 rounded-lg font-semibold text-vdc-gray-800 mb-4 text-lg"
                  >
                    Support
                  </motion.div>
                </Link>

                <Link href="/About" onClick={closeNav}>
                  <motion.div
                    whileTap={{ scale: 0.98 }}
                    className="py-4 px-4 bg-vdc-gray-50 rounded-lg font-semibold text-vdc-gray-800 mb-6 text-lg"
                  >
                    À propos
                  </motion.div>
                </Link>

                {/* Mobile CTA Buttons */}
                <div className="space-y-3 mt-8">
                  <Link href="/Login" onClick={closeNav}>
                    <motion.button
                      whileTap={{ scale: 0.98 }}
                      className="w-full flex items-center justify-center py-3 px-6 border-2 border-vdc-green text-vdc-green rounded-full font-semibold"
                    >
                      <AiOutlineUser className="mr-2" />
                      Mon compte
                    </motion.button>
                  </Link>

                  <Link href="/Contact" onClick={closeNav}>
                    <motion.button
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-gradient-vdc-orange text-white py-3 px-6 rounded-full font-semibold shadow-vdc-orange"
                    >
                      Contactez-nous
                    </motion.button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
