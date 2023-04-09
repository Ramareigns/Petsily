import React from "react";
import Image from "next/image";

import News1 from "../public/Dog1.jpg";
import News2 from "../public/Cat3.jpg";
import News3 from "../public/News1.jpeg";
import News4 from "../public/News2.jpeg";

function News() {
  return (
    <div id="News" className="w-screen ">
      <div className="w-screen flex items-center justify-between bg-green-400 px-48 py-3">
        <input
          type="text"
          name="cSearch"
          placeholder="Search"
          className="w-full py-2 px-5 rounded-xl bg-white"
        />
      </div>

      <div class="flex items-center mx-20 gap-4 bg-gray-50 my-7 p-4 rounded-lg">
        <Image
          class="rounded-lg h-36 w-36 object-contain border"
          src={News1}
          alt=""
        />
        <div className="flex-1">
          <h1 class="font-bold text-xl">Top 10 Facts about Pugs</h1>
          <p className="cursor-pointer hover:text-blue-600">
            <a
              href="https://www.akc.org/expert-advice/lifestyle/things-you-didnt-know-about-the-pug/"
              target="_blank"
            >
              Click Here for More
            </a>
          </p>
        </div>
        <p className="text-xs text-right mt-0 mr-0">Posted Today</p>
      </div>

      <div class="flex items-center mx-20 gap-4 bg-gray-50 my-7 p-4 rounded-lg">
        <Image
          class="rounded-lg h-36 w-36 object-contain border"
          src={News3}
          alt=""
        />
        <div className="flex-1">
          <h1 class="font-bold text-xl">
            Animal rescue efforts continue around newly-built dam
          </h1>
          <p className="cursor-pointer hover:text-blue-600">
            <a
              href="https://www.hurriyetdailynews.com/animal-rescue-efforts-continue-around-newly-built-dam-182208"
              target="_blank"
            >
              Click Here for More
            </a>
          </p>
        </div>
        <p className="text-xs text-right mt-0 mr-0">Posted 2 Days ago</p>
      </div>

      <div class="flex items-center mx-20 gap-4 bg-gray-50 my-7 p-4 rounded-lg">
        <Image
          class="rounded-lg h-36 w-36 object-contain border"
          src={News2}
          alt=""
        />
        <div className="flex-1">
          <h1 class="font-bold text-xl">Top 10 Facts about Cats</h1>
          <p className="cursor-pointer hover:text-blue-600">
            <a
              href="https://www.funkidslive.com/learn/top-10-facts/top-10-facts-about-cats/"
              target="_blank"
            >
              Click Here for More
            </a>
          </p>
        </div>
        <p className="text-xs text-right mt-0 mr-0">Posted 1 Week ago</p>
      </div>

      <div class="flex items-center mx-20 gap-4 bg-gray-50 my-7 p-4 rounded-lg">
        <Image
          class="rounded-lg h-36 w-36 object-contain border"
          src={News4}
          alt=""
        />
        <div className="flex-1">
          <h1 class="font-bold text-xl">
            CMPD Animal Care and Control in need of help finding forever homes
            for dogs
          </h1>
          <p className="cursor-pointer hover:text-blue-600">
            <a
              href="https://www.wsoctv.com/news/local/cmpd-animal-care-control-need-help-finding-forever-homes-dogs/5UDAOOI7YJH4NEIJZLJPZVVVYU/"
              target="_blank"
            >
              Click Here for More
            </a>
          </p>
        </div>
        <p className="text-xs text-right mt-0 mr-0">Posted 2 Weeks ago</p>
      </div>
      
    </div>
  );
}

export default News;
