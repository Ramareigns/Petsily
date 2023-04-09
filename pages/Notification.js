import React from "react";
import Head from "next/head";
import Image from "next/image";
import RW from "../public/Dog1.jpg";
import JB from "../public/JB.jpeg";
import BC from "../public/BC.jpg";

function Notification() {
  return (
    <div id="Notification" className="w-screen ">
      
        <div class="mx-auto h-screen flex-grow ">
          <div className="flex items-center bg-green-400 px-48 py-3 text-center justify-center mb-10">
          <h1 class="text-2xl font-bold my-4">Notifications</h1>
          </div>
          <ul className="pl-10">
            <li class="flex items-center my-4">
              <Image
                className="rounded-full md:h-[60px] md:w-[60px]"
                src={RW}
                alt=""
                width="600"
                height="600"
              />
              <div className="pl-8">
                <p class="font-bold">Rushini Weerasinghe</p>
                <p class="text-gray-600">
                  Liked your photo
                </p>
              </div>
              <p class="text-gray-400 ml-auto pr-10">1 hour ago</p>
            </li>
            <li class="flex items-center my-4">
              <Image
                className="rounded-full md:h-[60px] md:w-[60px]"
                src={JB}
                alt=""
                width="600"
                height="600"
              />
              <div className="pl-8">
                <p class="font-bold">Jack Black</p>
                <p class="text-gray-600">
                  Liked your photo 
                </p>
              </div>
              <p class="text-gray-400 ml-auto pr-10">1 hour ago</p>
            </li>
            <li class="flex items-center my-4">
              <Image
                className="rounded-full md:h-[60px] md:w-[60px]"
                src={BC}
                alt=""
                width="600"
                height="600"
              />
              <div className="pl-8">
                <p class="font-bold">Big chungus</p>
                <p class="text-gray-600">
                  Started following you
                </p>
              </div>
              <p class="text-gray-400 ml-auto pr-10">2 hours ago</p>
            </li>
          </ul>
        </div>
      
    </div>
  );
}

export default Notification;
