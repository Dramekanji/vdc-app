import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="fixed left-0 top-0 z-10 w-full bg-green-500">
      <div className="container mx-auto flex justify-start items-center p-4">
        <Link href="/">
          <div className="text-white text-5xl font-bold cursor-pointer">
            Logo
          </div>
        </Link>
        <ul className="flex space-x-4 text-2xl">
          <Link href="/shop">
            <li className="text-white cursor-pointer ml-6 px-4 py-1">Shop</li>
          </Link>
          <Link href="/support">
            <li className="text-white cursor-pointer px-2 py-1">Support</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
