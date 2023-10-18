import React from "react";
import Link from "next/link";
import {
  FaWifi,
  FaTv,
  FaPhone,
  FaTags,
  FaBuilding,
  FaFileContract,
} from "react-icons/fa";
import { MdDevicesOther } from "react-icons/md";

const Navtab = () => {
  return (
    <div className="text-white mt-20 mb-8 text-center ">
      <div className="container mx-auto py-4">
        <div className="overflow-x-auto flex flex-row">
          <ul className="flex  space-x-20">
            <Link href="/internet">
              <li className="cursor-pointer p-4 hover:bg-orange-500 mx-4 bg-green-500 rounded-full">
                <div className="w-20 h-20 flex items-center justify-center">
                  <FaWifi className="text-5xl" />
                </div>
              </li>
              <div className="text-xl mt-2 text-green-500 hover:text-orange-500">
                Internet
              </div>
            </Link>
            <Link href="/tv">
              <li className="cursor-pointer p-4  hover:bg-orange-500 mx-4 bg-green-500 rounded-full">
                <div className="w-20 h-20 flex items-center justify-center">
                  <FaTv className="text-5xl" />
                </div>
              </li>
              <div className="text-xl mt-2 text-green-500 hover:text-orange-500">
                TV
              </div>
            </Link>
            <Link href="/phone">
              <li className="cursor-pointer p-4  hover:bg-orange-500 mx-4 bg-green-500 rounded-full">
                <div className="w-20 h-20 flex items-center justify-center">
                  <FaPhone className="text-5xl" />
                </div>
              </li>
              <div className="text-xl mt-2 text-green-500 hover:text-orange-500">
                Phone
              </div>
            </Link>
            <Link href="/promotions">
              <li className="cursor-pointer p-4  hover:bg-orange-500 mx-4 bg-green-500 rounded-full">
                <div className="w-20 h-20 flex items-center justify-center">
                  <FaTags className="text-5xl" />
                </div>
              </li>
              <div className="text-xl mt-2 text-green-500 hover:text-orange-500">
                Promotions
              </div>
            </Link>
            <Link href="/promotions">
              <li className="cursor-pointer p-4  hover:bg-orange-500 mx-4 bg-green-500 rounded-full">
                <div className="w-20 h-20 flex items-center justify-center">
                  <FaBuilding className="text-5xl" />
                </div>
              </li>
              <div className="text-xl mt-2 text-green-500 hover:text-orange-500">
                Business
              </div>
            </Link>
            <Link href="/promotions">
              <li className="cursor-pointer p-4  hover:bg-orange-500 mx-4 bg-green-500 rounded-full">
                <div className="w-20 h-20 flex items-center justify-center">
                  <FaFileContract className="text-5xl" />
                </div>
              </li>
              <div className="text-xl mt-2 text-green-500 hover:text-orange-500">
                Plans
              </div>
            </Link>
            <Link href="/promotions">
              <li className="cursor-pointer p-4  hover:bg-orange-500 mx-4 bg-green-500 rounded-full">
                <div className="w-20 h-20 flex items-center justify-center">
                  <MdDevicesOther className="text-5xl" />
                </div>
              </li>
              <div className="text-xl mt-2 text-green-500 hover:text-orange-500">
                Bundles
              </div>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navtab;
