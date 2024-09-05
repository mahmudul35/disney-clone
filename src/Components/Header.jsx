import React from "react";
import logo from "./../assets/Images/logo.png";
import profile from "./../assets/Images/profile.png";
import {
  HiHome,
  HiMagnifyingGlass,
  HiStar,
  HiPlayCircle,
  HiTv,
} from "react-icons/hi2";
import { HiPlus, HiDotsVertical } from "react-icons/hi";
export const Header = () => {
  const menu = [
    {
      name: "HOME",
      icon: HiHome,
    },
    {
      name: "SEARCH",
      icon: HiMagnifyingGlass,
    },
    {
      name: "WATCH LIST",
      icon: HiPlus,
    },
    {
      name: "ORIGINALS",
      icon: HiStar,
    },
    {
      name: "MOVIES",
      icon: HiPlayCircle,
    },
    {
      name: "SERIES",
      icon: HiTv,
    },
  ];
  return (
    <div className=" flex justify-between p-4 items-center">
      <img className="w-[90px] lg:w-[115px] object-cover" src={logo} alt="" />

      <div className="flex  items-center space-x-8">
        {menu.map((item) => {
          return (
            <div className="flex items-center gap-2 text-white cursor-pointer font-semibold text-[15px] hover:underline underline-offset-8 ">
              {<item.icon />}
              <h2>{item.name}</h2>
            </div>
          );
        })}
      </div>
      <img className="w-[60px]" src={profile} alt="" />
    </div>
  );
};
