import React from "react";
import Link from "next/link";
import { FaWifi, FaTv, FaPhone, FaTags } from "react-icons/fa";

const Navtab = () => {
  return (
    <div className="bg-gray-800 text-white mt-20">
      <div className="container mx-auto py-4">
        <ul className="flex justify-center space-x-20">
          <Link href="/internet">
            <li className="cursor-pointer flex flex-col items-center hover:text-blue-500 mx-4">
              <FaWifi className="text-5xl mb-6" />{" "}
              {/* Add mb-2 for margin-bottom */}
              Internet
            </li>
          </Link>
          <Link href="/tv">
            <li className="cursor-pointer flex flex-col items-center hover:text-blue-500 mx-4">
              <FaTv className="text-5xl mb-6" />{" "}
              {/* Add mb-2 for margin-bottom */}
              TV
            </li>
          </Link>
          <Link href="/phone">
            <li className="cursor-pointer flex flex-col items-center hover:text-blue-500 mx-4">
              <FaPhone className="text-5xl mb-6" />{" "}
              {/* Add mb-2 for margin-bottom */}
              Phone
            </li>
          </Link>
          <Link href="/promotions">
            <li className="cursor-pointer flex flex-col items-center hover:text-blue-500 mx-4">
              <FaTags className="text-5xl mb-6" />{" "}
              {/* Add mb-2 for margin-bottom */}
              Promotions
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navtab;
