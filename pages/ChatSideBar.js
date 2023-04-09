import React from "react";
import Head from "next/head";
import Image from "next/image";
import RW from "../public/Dog1.jpg";
import JB from "../public/JB.jpeg";
import BC from "../public/BC.jpg";

function ChatSideBar() {
  return (
    <div>
      <Head>
        <title>Chat Side Bar</title>
      </Head>

      <div className="flex flex-col h-screen w-[1000]">
        <div className="flex items-center justify-between bg-green-400 px-48 py-3">
          <input
            type="text"
            name="cSearch"
            placeholder="Who are you looking for?"
            className="w-full py-2 px-5 rounded-xl bg-white"
          />
        </div>

        <div className="flex flex-1 overflow-hidden">
          <div className="w-1/4 bg-gray-100 p-4 overflow-y-auto">
            <h2 className="text-lg font-bold mb-4">Messages</h2>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <Image
                  className="rounded-full md:h-[40px] md:w-[40px]"
                  src={RW}
                  alt=""
                  width="600"
                  height="600"
                />
                <p className="font-medium">Rushini Weerasinghe</p>
              </li>
              <li className="flex items-center space-x-2">
                <Image
                  className="rounded-full md:h-[40px] md:w-[40px]"
                  src={JB}
                  alt=""
                  width="600"
                  height="600"
                />
                <p className="font-medium">Jack Black</p>
              </li>
              <li className="flex items-center space-x-2">
                <Image
                  className="rounded-full md:h-[40px] md:w-[40px]"
                  src={BC}
                  alt=""
                  width="600"
                  height="600"
                />
                <p className="font-medium">Big CHungus</p>
              </li>
            </ul>
          </div>

          <div className="flex-col w-full bg-white overflow-y-auto">
            <div className="flex text-lg font-bold mb-4 p-5 bg-green-400 items-center">
              <Image
                className="rounded-full md:h-[40px] md:w-[40px] mr-5"
                src={RW}
                alt=""
                width="600"
                height="600"
              />
              <h2 className="items-center justify-center">Rushini Weerasinghe</h2>
            </div>

            <div className="flex flex-col p-4">
              <div className="flex items-start mb-4">
                <div className="bg-gray-100 rounded-lg p-3">
                  <p className="text-gray-800 font-medium">
                    Hi, how are you? And How is Patches
                  </p>
                </div>
              </div>

              <div className="flex items-end mb-4">
                <div className="bg-green-500 rounded-lg p-3">
                  <p className="text-white font-medium">
                    I'm good, thanks for asking! Patches is also doing good
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center px-4 py-3 bg-gray-200">
          <input
            type="text"
            placeholder="Type a message..."
            className="flex-1 mr-2 py-2 px-4 rounded-full bg-white"
          />
          <button className="bg-green-500 text-white font-bold py-2 px-4 rounded-full">
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default ChatSideBar;
