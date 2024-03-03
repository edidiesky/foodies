"use client";

import Logo from "@/assets/svg/logo";
import { HiBars2 } from "react-icons/hi2";
import React from "react";
type HeaderProps = {
  sidebar?: boolean,
  setSidebar: (val: boolean) => void;
}
export const ProductHeader: React.FC<HeaderProps> = ({ sidebar, setSidebar }) => {
  return (
    <div className="py-4 border-b border-[rgba(0,0,0,.1)] w-full">
      <div className="px-8 m-auto max-w-custom flex items-center justify-between">
        <div className="flex items-center gap-x-4">
          <Logo />

        </div>
        <div className="flex-1 md:flex hidden item-center justify-end">
          <ul className="flex items-center justify-between gap-x-3 sm:gap-x-6">

            <li className="text-lg cursor-pointer hover:bg-gray-100 py-1 px-3 rounded-md font-medium font-font-light">
              Shop Now
            </li>
            <span onClick={() => setSidebar(!sidebar)} className="w-16 cursor-pointer rounded-full text-lg flex items-center justify-center h-16 bg-light_grey ">
              <HiBars2 fontSize={'30px'} color="black" />
            </span>
          </ul>

        </div>
       
      </div>
    </div>
  );
};
