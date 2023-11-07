import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { FaAngleDown, FaAngleRight } from "react-icons/fa";
import Logo from "../public/images/vdclogo.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shopSubMenuVisible, setShopSubMenuVisible] = useState(false);
  const [supportSubMenuVisible, setSupportSubMenuVisible] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const toggleShopSubMenu = () => {
    setShopSubMenuVisible(!shopSubMenuVisible);
    setSupportSubMenuVisible(false); // Close support submenu when opening shop submenu
  };

  const toggleSupportSubMenu = () => {
    setSupportSubMenuVisible(!supportSubMenuVisible);
    setShopSubMenuVisible(false); // Close shop submenu when opening support submenu
  };

  const toggleShopSubmenuOnClick = () => {
    // Toggle the Shop submenu when clicking on the Shop item
    setShopSubMenuVisible(!shopSubMenuVisible);
    setSupportSubMenuVisible(false); // Close support submenu when opening shop submenu
  };

  const closeNav = () => {
    setNav(false);
  };

  return (
    <div className="fixed left-0 top-0 z-20 w-full bg-[#1EAB07]">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="flex items-center ml-20">
          <a href="/">
            <div>
              <Image src={Logo} alt="VDC Logo" style={{ width: "200px" }} />
            </div>
          </a>
          <ul className="hidden sm:flex space-x-1">
            <li
              className="text-white cursor-pointer px-6 py-1 relative group"
              // onMouseEnter={toggleShopSubMenu}
              // onMouseLeave={toggleShopSubMenu}
              onClick={toggleShopSubmenuOnClick} // Toggle Shop submenu on click
            >
              <div className="text-white text-2xl cursor-pointer px-2 py-1 relative">
                Shop
                <div
                  className={`absolute w-full h-1 bottom-0 left-0 transition-all duration-300 origin-left ${
                    shopSubMenuVisible ? "w-full" : "w-0"
                  }`}
                  style={{ background: "#F39419" }}
                ></div>
              </div>

              <div
                className={`absolute left-0 w-60 bg-[#1EAB07] shadow-md shadow-gray-800 text-gray-800 mt-6 text-base py-8 ${
                  shopSubMenuVisible ? "block" : "hidden"
                }`}
              >
                {/* Normal SubMenu */}
                <div className="shadow-lg bg-[#1EAB07]">
                  <Link
                    href="/Internet"
                    className="block py-2 px-4 hover:bg-[#F39419]"
                    onClick={closeNav}
                  >
                    Internet
                  </Link>
                  <Link
                    href="/TV"
                    className="block py-2 px-4 hover-bg-[#F39419]"
                    onClick={closeNav}
                  >
                    TV
                  </Link>
                  <Link
                    href="/Phone"
                    className="block py-2 px-4 mt-2 hover:bg-[#F39419]"
                    onClick={closeNav}
                  >
                    Phone
                  </Link>
                </div>
              </div>
            </li>
            <li
              className="text-white cursor-pointer px-6 py-1 relative group"
              onMouseEnter={toggleSupportSubMenu}
              onMouseLeave={toggleSupportSubMenu}
            >
              <Link
                href="/Support"
                className="text-white text-2xl cursor-pointer px-2 py-1 relative"
              >
                Support
                <div
                  className={`absolute w-full h-1 bottom-0 left-0 transition-all duration-300 origin-left ${
                    supportSubMenuVisible ? "w-full" : "w-0"
                  }`}
                  style={{ background: "#F39419" }}
                ></div>
              </Link>
            </li>
          </ul>
        </div>
        <div
          onClick={handleNav}
          className="sm:hidden z-10 cursor-pointer ml-auto"
        >
          {nav ? (
            <AiOutlineClose size={30} style={{ color: "#F39419" }} />
          ) : (
            <AiOutlineMenu size={30} style={{ color: "#F39419" }} />
          )}
        </div>
      </div>
      <div
        className={`${
          nav
            ? "sm:hidden fixed top-0 right-0 bottom-0 flex flex-col justify-center items-center w-full h-screen bg-[#228B22] text-center ease-in duration-300 transform translate-x-0"
            : "sm:hidden fixed top-0 right-0 bottom-0 flex flex-col justify-center items-center w-full h-screen bg-[#228B22] text-center ease-in duration-300 transform translate-x-full"
        }`}
      >
        <div
          className={`container text-white text-2xl cursor-pointer shadow-xl bg-[#1EAB07] rounded px-6 py-2 border-b-2 border-black flex items-center justify-between transform ${
            nav ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={toggleShopSubMenu}
        >
          <button>Shop</button>
          {shopSubMenuVisible ? <FaAngleDown /> : <FaAngleRight />}
        </div>

        <div className="container shadow-lg">
          <div
            className={`${
              shopSubMenuVisible ? "block" : "hidden"
            } text-white text-2xl cursor-pointer py-4 shadow-xl`}
          >
            <Link href="/Internet" onClick={closeNav}>
              Internet
            </Link>
          </div>
          <div
            className={`${
              shopSubMenuVisible ? "block" : "hidden"
            } text-white text-2xl cursor-pointer py-4 shadow-xl`}
          >
            <Link href="/TV" onClick={closeNav}>
              TV
            </Link>
          </div>
          <div
            className={`${
              shopSubMenuVisible ? "block" : "hidden"
            } text-white text-2xl cursor-pointer py-4 shadow-xl`}
          >
            <Link href="/Phone" onClick={closeNav}>
              Phone
            </Link>
          </div>
        </div>
        <div
          className={`container text-white text-2xl cursor-pointer shadow-xl bg-[#1EAB07] rounded px-6 py-2 border-b-2 border-black flex items-center justify-between transform ${
            nav ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <Link href="/support" onClick={closeNav}>
            <div>Support</div>
          </Link>
          <FaAngleRight />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
