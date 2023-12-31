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
            <Link href="/Internet">
              <li className="cursor-pointer p-4 hover:bg-[#F39419] mx-4 bg-[#1EAB07] rounded-full">
                <div className="w-20 h-20 flex items-center justify-center">
                  <FaWifi className="text-5xl" />
                </div>
              </li>
              <div className=" mt-2 font-medium text-black hover:text-[#F39419]">
                Internet
              </div>
            </Link>
            <Link href="/TV">
              <li className="cursor-pointer p-4  hover:bg-[#F39419] mx-4 bg-[#1EAB07] rounded-full">
                <div className="w-20 h-20 flex items-center justify-center">
                  <FaTv className="text-5xl" />
                </div>
              </li>
              <div className=" mt-2 font-medium text-black hover:text-[#F39419]">
                TV
              </div>
            </Link>
            <Link href="/phone">
              <li className="cursor-pointer p-4  hover:bg-[#F39419] mx-4 bg-[#1EAB07] rounded-full">
                <div className="w-20 h-20 flex items-center justify-center">
                  <FaPhone className="text-5xl" />
                </div>
              </li>
              <div className=" mt-2 font-medium text-black hover:text-[#F39419]">
                Phone
              </div>
            </Link>
            <Link href="/promotions">
              <li className="cursor-pointer p-4  hover:bg-[#F39419] mx-4 bg-[#1EAB07] rounded-full">
                <div className="w-20 h-20 flex items-center justify-center">
                  <FaTags className="text-5xl" />
                </div>
              </li>
              <div className=" mt-2 font-medium text-black hover:text-[#F39419]">
                Promotions
              </div>
            </Link>
            <Link href="/promotions">
              <li className="cursor-pointer p-4  hover:bg-[#F39419] mx-4 bg-[#1EAB07] rounded-full">
                <div className="w-20 h-20 flex items-center justify-center">
                  <FaBuilding className="text-5xl" />
                </div>
              </li>
              <div className=" mt-2 font-medium text-black hover:text-[#F39419]">
                Business
              </div>
            </Link>
            <Link href="/promotions">
              <li className="cursor-pointer p-4  hover:bg-[#F39419] mx-4 bg-[#1EAB07] rounded-full">
                <div className="w-20 h-20 flex items-center justify-center">
                  <FaFileContract className="text-5xl" />
                </div>
              </li>
              <div className=" mt-2 font-medium text-black hover:text-[#F39419]">
                Plans
              </div>
            </Link>
            <Link href="/promotions">
              <li className="cursor-pointer p-4  hover:bg-[#F39419] mx-4 bg-[#1EAB07] rounded-full">
                <div className="w-20 h-20 flex items-center justify-center">
                  <MdDevicesOther className="text-5xl" />
                </div>
              </li>
              <div className=" mt-2 font-medium text-black hover:text-[#F39419]">
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
