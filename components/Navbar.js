import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { FaAngleDown, FaAngleRight } from "react-icons/fa";
import Logo from "../public/images/vdclogo.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shopSubMenuVisible, setShopSubMenuVisible] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const toggleShopSubMenu = () => {
    setShopSubMenuVisible(!shopSubMenuVisible);
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
              onClick={toggleShopSubMenu}
            >
              <div className="text-white text-2xl cursor-pointer px-2 py-1 relative">
                Shop
                <div className="absolute w-full h-1 bg-[#F39419] bottom-0 left-0 transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100"></div>
              </div>

              <div
                className={`absolute left-0 w-60 bg-[#1EAB07] shadow-md shadow-gray-800 text-gray-800 mt-6 text-base py-8 ${
                  shopSubMenuVisible ? "block" : "hidden"
                }`}
                onMouseLeave={toggleShopSubMenu}
              >
                <div className="shadow-lg bg-[#1EAB07]">
                  {/* Add shadow container */}
                  <Link
                    href="/Internet"
                    className="block py-2 px-4 hover:bg-[#F39419]"
                  >
                    Internet
                  </Link>
                  <Link
                    href="/tv"
                    className="block py-2 px-4 mt-2 hover:bg-[#F39419]"
                  >
                    TV
                  </Link>
                  <Link
                    href="/phone"
                    className="block py-2 px-4 mt-2 hover:bg-[#F39419]"
                  >
                    Phone
                  </Link>
                </div>
              </div>
            </li>
            <a href="/support" className="relative group">
              <div className="text-white text-2xl cursor-pointer px-2 py-1">
                Support
              </div>
              <div className="absolute w-full h-1 bg-[#F39419] bottom-0 left-0 transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100"></div>
            </a>
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
        className={
          nav
            ? "sm:hidden fixed top-0 right-0 bottom-0 flex flex-col justify-center items-center w-full h-screen bg-[#228B22] text-center ease-in duration-300"
            : "hidden"
        }
      >
        <div
          className="container text-white text-2xl cursor-pointer shadow-xl bg-[#1EAB07] rounded px-6 py-2 border-b-2 border-black flex items-center justify-between"
          onClick={toggleShopSubMenu}
        >
          <button>Shop</button>
          <FaAngleDown />
        </div>

        <div className="container shadow-lg">
          <div
            className={`${
              shopSubMenuVisible ? "block" : "hidden"
            } text-white text-2xl cursor-pointer py-4 shadow-xl`}
          >
            <Link href="/internet">Internet</Link>
          </div>
          <div
            className={`${
              shopSubMenuVisible ? "block" : "hidden"
            } text-white text-2xl cursor-pointer py-4 shadow-xl`}
          >
            <Link href="/tv">TV</Link>
          </div>
          <div
            className={`${
              shopSubMenuVisible ? "block" : "hidden"
            } text-white text-2xl cursor-pointer py-4 shadow-xl`}
          >
            <Link href="/phone">Phone</Link>
          </div>
        </div>
        <div className="container text-white text-2xl cursor-pointer shadow-xl bg-[#1EAB07] rounded px-6 py-2 border-b-2 border-black flex items-center justify-between">
          <a href="/support">
            <div>Support</div>
          </a>
          <FaAngleRight />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
