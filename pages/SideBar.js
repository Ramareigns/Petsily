import React, { useState } from "react";
import Head from "next/head";
import {
  HiHome,
  HiShoppingBag,
  HiUser,
  HiOutlineChat,
  HiHashtag,
  HiCog,
  HiDotsHorizontal,
  HiSearch,
  HiNewspaper,
} from "react-icons/hi";
import Image from "next/image";
import ProfPic from "../public/Dog1.jpg";
import LOGO from "../public/LOGO.jpg";
import Link from "next/link";
import { useSession } from "next-auth/react";

function SideBar() {
  const [showModal, setShowModal] = useState(false);
  const { data: session } = useSession();
  return (
    <div id="SideBar">
      <Head>
        <title>Home</title>
      </Head>
      <div className="sticky top-0 h-screen w-[300px] bg-gray-900 text-white px-4 py-8">
        {/* <div className="Sticky left-0 bg-gradient-to-b from-green-400 to-green-500 p-2 flex-grow  max-w-[400px]  xl:min-w-[300px] h-full border-r-4 border-black"> */}
        <div className="flex items-center justify-center hoverEffect p-0 mt-5 ">
          <Image
            className="rounded-3xl md:h-[100px] md:w-[100px]"
            src={LOGO}
            alt=""
            width="600"
            height="600"
          />
        </div>

        <div className="space-y-2 mt-10 mb-2 w-full rounded-xl hover:bg-green-600 ">
          <div className="flex items-center justify-center xl:justify-start text-xl space-x-3 px-4 py-2 w-fit hover:text-white cursor-pointer">
            <span className="icon flex gap-4 items-center">
              <HiHome size={25} />
              <span className="hidden xl:inline">
                <Link href={"/HomePage"}>Home</Link>
              </span>
            </span>
          </div>
        </div>
        <div className="space-y-2 mt-4 mb-2 w-full rounded-xl hover:bg-green-600 ">
          <div className="flex items-center justify-center xl:justify-start text-xl space-x-3 px-4 py-2 w-fit hover:text-white cursor-pointer">
            <span className="icon flex gap-4 items-center">
              <HiNewspaper size={25} />
              <span className="hidden xl:inline">
                <Link href={"/News"}>News & Facts</Link>
              </span>
            </span>
          </div>
        </div>
        <div className="space-y-2 mt-4 mb-2 w-full rounded-xl hover:bg-green-600 ">
          <div className="flex items-center justify-center xl:justify-start text-xl space-x-3 px-4 py-2 w-fit  hover:text-white cursor-pointer">
            <span className="icon flex gap-4 items-center ">
              <HiHashtag size={25} />
              <span className="hidden xl:inline">
                <Link href={"/Notification"}>Notifications</Link>
              </span>
            </span>
          </div>
        </div>
        <div className="space-y-2 mt-4 mb-2 w-full rounded-xl hover:bg-green-600 ">
          <div className="flex items-center justify-center xl:justify-start text-xl space-x-3 px-4 py-2 w-fit  hover:text-white cursor-pointer">
            <span className="icon flex gap-4 items-center ">
              <HiOutlineChat size={25} />
              <span className="hidden xl:inline">
                <Link href={"/ChatSideBar"}>Chat</Link>
              </span>
            </span>
          </div>
        </div>
        <div className="space-y-2 mt-4 mb-2 w-full rounded-xl hover:bg-green-600 ">
          <div className="flex items-center justify-center xl:justify-start text-xl space-x-3 px-4 py-2 w-fit  hover:text-white cursor-pointer">
            <span className="icon flex gap-4 items-center ">
              <HiShoppingBag size={25} />
              <span className="hidden xl:inline">
                <Link href={"/Store"}>Shop</Link>
              </span>
            </span>
          </div>
        </div>
        <div className="space-y-2 mt-4 mb-2 w-full rounded-xl hover:bg-green-600 ">
          <div className="flex items-center justify-center xl:justify-start text-xl space-x-3 px-4 py-2 w-fit  hover:text-white cursor-pointer">
            <span className="icon flex gap-4 items-center ">
              <HiCog size={25} />
              <span className="hidden xl:inline">
                <Link href={"/Settings"}>Settings</Link>
              </span>
            </span>
          </div>
        </div>
        <div className="flex items-center justify-center xl:justify-start text-xl space-x-3 mx-auto py-10 w-fit ">
          <button
            type="submit"
            className="w-full font-bold bg-white text-gray-800 text-lg py-2 rounded-xl px-10 hover:bg-green-400 hover:text-gray-800"
          >
            Post
          </button>
        </div>

        <div className="flex fixed bottom-4 text-gray-50 items-center p-2">
          <Image
            className="rounded-full h-12 w-12 object-contain border p-1 mr-3"
            src={ProfPic}
            alt=""
            width="600"
            height="600"
          />
          <div className="flex-1 font-bold">
            <h4 className="">Ramith Wijesinghe</h4>
            <p className="text-xs">rwijesin@terpmail.umd.edu</p>
          </div>

          <HiDotsHorizontal
            size={18}
            onClick={() => setShowModal(true)}
            className="cursor-pointer h-5"
          />

          {showModal ? (
            <div className="bg-white border-4 mt-10 flex justify-center items-center flex-col w-72 rounded-lg h-auto p-2 text-black">
              <Link
                // onClick={() => signOut()}
                href={"/Login"}
                className="font-bold hover:bg-gray-400 w-full text-center rounded-lg hover:text-white"
              >
                Logout
              </Link>
              <button
                className="font-bold hover:bg-gray-400 hover:text-white w-full text-center rounded-lg"
                onClick={() => setShowModal(false)}
              >
                Close
              </button>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default SideBar;
