import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shopSubMenuVisible, setShopSubMenuVisible] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const openShopSubMenu = () => {
    setShopSubMenuVisible(true);
  };

  const closeShopSubMenu = () => {
    setShopSubMenuVisible(false);
  };

  return (
    <div className="fixed left-0 top-0 z-10 w-full bg-green-500">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="flex items-center ml-20">
          <a href="/">
            <div className="text-white text-5xl font-bold cursor-pointer">
              Logo
            </div>
          </a>
          <ul className="hidden sm:flex space-x-1 ">
            <li
              className="text-white cursor-pointer px-6 py-1 relative group"
              onClick={openShopSubMenu}
            >
              <Link
                href={"/"}
                className="text-white text-2xl cursor-pointer px-2 py-1"
              >
                Shop
              </Link>
              <div
                className={`absolute left-0 w-60 bg-green-500 shadow-xl text-gray-800 mt-6 text-base py-8 ${
                  shopSubMenuVisible ? "block" : "hidden"
                }`}
                onClick={openShopSubMenu}
                onMouseLeave={closeShopSubMenu}
              >
                <a
                  href="/internet"
                  className="block py-2 px-4 hover:bg-orange-500"
                >
                  Internet
                </a>
                <a
                  href="/tv"
                  className="block py-2 px-4 mt-2 hover:bg-orange-500"
                >
                  TV
                </a>
                <a
                  href="/phone"
                  className="block py-2 px-4 mt-2 hover:bg-orange-500"
                >
                  Phone
                </a>
              </div>
            </li>
            <a href="/support">
              <li className="text-white text-2xl cursor-pointer px-2 py-1">
                Support
              </li>
            </a>
          </ul>
        </div>
        <div
          onClick={handleNav}
          className="sm:hidden z-10 cursor-pointer ml-auto"
        >
          {nav ? (
            <AiOutlineClose size={30} style={{ color: "#FFD700" }} />
          ) : (
            <AiOutlineMenu size={30} style={{ color: "#FFD700" }} />
          )}
        </div>
      </div>
      <div
        className={
          nav
            ? "sm:hidden fixed top-0 right-0 bottom-0 flex flex-col justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
            : "hidden"
        }
      >
        <button
          className="text-white text-2xl my-4 cursor-pointer"
          onClick={openShopSubMenu}
        >
          Shop
        </button>
        <a href="/support">
          <div className="text-white text-2xl my-4 cursor-pointer">Support</div>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
