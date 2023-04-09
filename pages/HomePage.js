import React from "react";
import Head from "next/head";
import { HiOutlineHeart, HiHeart, HiDotsHorizontal, HiShare, HiChat } from "react-icons/hi";
import Image from "next/image";
import { DotsHorizontalIcon } from "@heroicons/react/outline";

import Story1 from "../public/Cat4.jpg";
import Story2 from "../public/Dog1.jpg";
import Story3 from "../public/Cat7.jpg";
import Story4 from "../public/A1.jpg";
import Story5 from "../public/A2.jpg";

import RW from "../public/Dog1.jpg";
import JB from "../public/JB.jpeg";
import BC from "../public/BC.jpg";

function HomePage() {
  return (
    <div id="Home" className="w-screen ">
      <div className="  flex items-center justify-between bg-green-400 px-48 py-3">
        <input
          type="text"
          name="cSearch"
          placeholder="Search"
          className="w-full py-2 px-5 rounded-xl bg-white"
        />
      </div>

      <div className="mx-20 bg-gray-50 my-7 border rounded-sm">
        <div className="flex items-center p-2">
          <Image
            className="rounded-full h-12 w-12 object-contain border p-1 mr-3"
            src={RW}
            alt=""
            width="600"
            height="600"
          />
          <p className=" flex-1 font-bold">Rushini Weerasinghe</p>
          <DotsHorizontalIcon className="h-5 text-gray-900" />
        </div>
        <Image
          className="object-cover w-[500px] h-[500px] mx-auto"
          src={Story1}
          alt=""
          width="600"
          height="600"
        />
        <div className="flex space-x-4 pl-5 pt-5">
          <HiOutlineHeart className="cursor-pointer hover:scale-150 transition-all duration-125 ease-out" />
          <HiChat className="cursor-pointer hover:scale-150 transition-all duration-150 ease-out" />
          <HiShare  className="cursor-pointer hover:scale-150 transition-all duration-150 ease-out" />
        </div>

        <p className="p-5 truncate">
          <span className ="font-bold text-lg mr-1">Ramith </span> 
          <span className="text-gray-600">Thats the Cutest Kitty Everrrrr</span>
        </p>

      </div>

      <div className="mx-20 bg-gray-50 my-7 border rounded-sm">
        <div className="flex items-center p-2">
          <Image
            className="rounded-full h-12 w-12 object-contain border p-1 mr-3"
            src={RW}
            alt=""
            width="600"
            height="600"
          />
          <p className=" flex-1 font-bold">Rushini Weerasinghe</p>
          <DotsHorizontalIcon className="h-5 text-gray-900" />
        </div>
        <Image
          className="object-cover w-[500px] h-[500px] mx-auto"
          src={Story2}
          alt=""
          width="600"
          height="600"
        />
        <div className="flex space-x-4 pl-5 pt-5">
          <HiOutlineHeart className="cursor-pointer hover:scale-150 transition-all duration-125 ease-out" />
          <HiChat className="cursor-pointer hover:scale-150 transition-all duration-150 ease-out" />
          <HiShare  className="cursor-pointer hover:scale-150 transition-all duration-150 ease-out" />
        </div>

        <p className="p-5 truncate">
          <span className ="font-bold text-lg mr-1">Nancy </span> 
          <span className="text-gray-600">Nice Puggy</span>
        </p>

      </div>

      <div className="mx-20 bg-gray-50 my-7 border rounded-sm">
        <div className="flex items-center p-2">
          <Image
            className="rounded-full h-12 w-12 object-contain border p-1 mr-3"
            src={JB}
            alt=""
            width="600"
            height="600"
          />
          <p className=" flex-1 font-bold">Jack Black</p>
          <DotsHorizontalIcon className="h-5 text-gray-900" />
        </div>
        <Image
          className="object-cover w-[500px] h-[500px] mx-auto"
          src={Story3}
          alt=""
          width="600"
          height="600"
        />
        <div className="flex space-x-4 pl-5 pt-5">
          <HiOutlineHeart className="cursor-pointer hover:scale-150 transition-all duration-125 ease-out" />
          <HiChat className="cursor-pointer hover:scale-150 transition-all duration-150 ease-out" />
          <HiShare  className="cursor-pointer hover:scale-150 transition-all duration-150 ease-out" />
        </div>

        <p className="p-5 truncate">
          <span className ="font-bold text-lg mr-1">Ramith </span> 
          <span className="text-gray-600">Elegant cat...XD</span>
        </p>

      </div>

      <div className="mx-20 bg-gray-50 my-7 border rounded-sm">
        <div className="flex items-center p-2">
          <Image
            className="rounded-full h-12 w-12 object-contain border p-1 mr-3"
            src={BC}
            alt=""
            width="600"
            height="600"
          />
          <p className=" flex-1 font-bold">Big Chungus</p>
          <DotsHorizontalIcon className="h-5 text-gray-900" />
        </div>
        <Image
          className="object-cover w-[500px] h-[500px] mx-auto"
          src={Story4}
          alt=""
          width="600"
          height="600"
        />
        <div className="flex space-x-4 pl-5 pt-5">
          <HiOutlineHeart className="cursor-pointer hover:scale-150 transition-all duration-125 ease-out" />
          <HiChat className="cursor-pointer hover:scale-150 transition-all duration-150 ease-out" />
          <HiShare  className="cursor-pointer hover:scale-150 transition-all duration-150 ease-out" />
        </div>

        <p className="p-5 truncate">
          <span className ="font-bold text-lg mr-1">James </span> 
          <span className="text-gray-600">I love when babies eat</span>
        </p>
        <p className="pl-5 pb-2 truncate">
          <span className ="font-bold text-lg mr-1">Jacky</span> 
          <span className="text-gray-600">Mee too</span>
        </p>

      </div>

      <div className="mx-20 bg-gray-50 my-7 border rounded-sm">
        <div className="flex items-center p-2">
          <Image
            className="rounded-full h-12 w-12 object-contain border p-1 mr-3"
            src={JB}
            alt=""
            width="600"
            height="600"
          />
          <p className=" flex-1 font-bold">Jack Black</p>
          <DotsHorizontalIcon className="h-5 text-gray-900" />
        </div>
        <Image
          className="object-cover w-[500px] h-[500px] mx-auto"
          src={Story5}
          alt=""
          width="600"
          height="600"
        />
        <div className="flex space-x-4 pl-5 pt-5">
          <HiOutlineHeart className="cursor-pointer hover:scale-150 transition-all duration-125 ease-out" />
          <HiChat className="cursor-pointer hover:scale-150 transition-all duration-150 ease-out" />
          <HiShare  className="cursor-pointer hover:scale-150 transition-all duration-150 ease-out" />
        </div>

        <p className="p-5 truncate">
          <span className ="font-bold text-lg mr-1">Ramith </span> 
          <span className="text-gray-600">Cute tattoo</span>
        </p>

      </div>
    </div>
  );
}

export default HomePage;
