import React from "react";
import { HiShoppingCart } from "react-icons/hi";
import storePic from "../public/Dog1.jpg";
import storePic2 from "../public/PetFood1.jpg";
import storePic3 from "../public/PetFood2.jpg";
import storePic4 from "../public/PetToy1.jpg";
import storePic5 from "../public/PetToy4.jpg";
import storePic6 from "../public/PetToy2.jpg";
import storePic7 from "../public/PetBed1.jpg";
import storePic8 from "../public/PetHouse1.jpg";
import Image from "next/image";

function Store() {
  return (
    <div className="flex-grow min-h-screen flex-col w-screen">
      <div>
        <div className="flex items-center justify-between bg-green-400 px-48 py-3">
          <input
            type="text"
            name="fSearch"
            placeholder="What are you looking for?"
            className="w-full py-2 px-5 rounded-xl bg-white"
          />
          <div className=" flex ml-48 hover:text-white cursor-pointer">
            <span className="icon flex items-center px-4">
              <HiShoppingCart size={25} />
            </span>
            <span className="items-center text-right justify-end font-bold ">
              Cart
            </span>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 mt-10">
        <div className="rounded-xl shadow-md mx-auto">
          <Image
            className="rounded-xl mx-auto md:h-[150px] md:w-[200px]"
            src={storePic}
            alt=""
            width="600"
            height="600"
          />
          <div>
            <div className="flex flex-col items-center justify-center p-5">
              <h2>Pug</h2>
              <p>A Beautiful Pug Baby</p>
              <p>$Free</p>
              <button
                type="submit"
                className=" bg-green-700 text-gray-50 text-lg py-2 px-10 rounded-xl hover:bg-gray-50 hover:text-black"
              >
                Add To Cart
              </button>
            </div>
          </div>
        </div>

        <div className="rounded-xl shadow-md mx-auto mt-10">
          <Image
            className="rounded-xl mx-auto md:h-[150px] md:w-[200px]"
            src={storePic2}
            alt=""
            width="600"
            height="600"
          />
          <div>
            <div className="flex flex-col items-center justify-center p-5">
              <h2>Dog Food</h2>
              <p>High Quality Nutritianal Dog Food</p>
              <p>$20</p>
              <button
                type="submit"
                className=" bg-green-700 text-gray-50 text-lg py-2 px-10 rounded-xl hover:bg-gray-50 hover:text-black"
              >
                Add To Cart
              </button>
            </div>
          </div>
        </div>
        <div className="rounded-xl shadow-md mx-auto mt-10">
          <Image
            className="rounded-xl  mx-auto md:h-[150px] md:w-[200px]"
            src={storePic3}
            alt=""
            width="600"
            height="600"
          />
          <div>
            <div className="flex flex-col items-center justify-center p-5">
              <h2>Cat Food</h2>
              <p>High Quality Nutritianal Cat Food</p>
              <p>$15</p>
              <button
                type="submit"
                className=" bg-green-700 text-gray-50 text-lg py-2 px-10 rounded-xl hover:bg-gray-50 hover:text-black"
              >
                Add To Cart
              </button>
            </div>
          </div>
        </div><div className="rounded-xl shadow-md mx-auto mt-10">
          <Image
            className="rounded-xl mx-auto md:h-[150px] md:w-[200px]"
            src={storePic4}
            alt=""
            width="600"
            height="600"
          />
          <div>
            <div className="flex flex-col items-center justify-center p-5">
              <h2>Toys</h2>
              <p>For All Pet Toys</p>
              <p>$25</p>
              <button
                type="submit"
                className=" bg-green-700 text-gray-50 text-lg py-2 px-10 rounded-xl hover:bg-gray-50 hover:text-black"
              >
                Add To Cart
              </button>
            </div>
          </div>
        </div>

        <div className="rounded-xl shadow-md mx-auto mt-10">
          <Image
            className="rounded-xl mx-auto md:h-[150px] md:w-[200px]"
            src={storePic5}
            alt=""
            width="600"
            height="600"
          />
          <div>
            <div className="flex flex-col items-center justify-center p-5">
              <h2>Dog Bones</h2>
              <p>Plastic bone for your Dog</p>
              <p>$10</p>
              <button
                type="submit"
                className=" bg-green-700 text-gray-50 text-lg py-2 px-10 rounded-xl hover:bg-gray-50 hover:text-black"
              >
                Add To Cart
              </button>
            </div>
          </div>
        </div>

        <div className="rounded-xl shadow-md mx-auto mt-10">
          <Image
            className="rounded-xl mx-auto md:h-[150px] md:w-[200px]"
            src={storePic6}
            alt=""
            width="600"
            height="600"
          />
          <div>
            <div className="flex flex-col items-center justify-center p-5">
              <h2>Pug</h2>
              <p>A Beautiful Pug Baby</p>
              <p>$Free</p>
              <button
                type="submit"
                className=" bg-green-700 text-gray-50 text-lg py-2 px-10 rounded-xl hover:bg-gray-50 hover:text-black"
              >
                Add To Cart
              </button>
            </div>
          </div>
        </div>

        <div className="rounded-xl shadow-md mx-auto mt-10">
          <Image
            className="rounded-xl mx-auto md:h-[150px] md:w-[200px]"
            src={storePic7}
            alt=""
            width="600"
            height="600"
          />
          <div>
            <div className="flex flex-col items-center justify-center p-5">
              <h2>Dog Bed</h2>
              <p>Comfy Sleeping Bed for dogs</p>
              <p>$50</p>
              <button
                type="submit"
                className=" bg-green-700 text-gray-50 text-lg py-2 px-10 rounded-xl hover:bg-gray-50 hover:text-black"
              >
                Add To Cart
              </button>
            </div>
          </div>
        </div>

        <div className="rounded-xl shadow-md mx-auto mt-10">
          <Image
            className="rounded-xl mx-auto md:h-[150px] md:w-[200px]"
            src={storePic8}
            alt=""
            width="600"
            height="600"
          />
          <div>
            <div className="flex flex-col items-center justify-center p-5">
              <h2>Cat House</h2>
              <p>Play House for Cats</p>
              <p>$80</p>
              <button
                type="submit"
                className=" bg-green-700 text-gray-50 text-lg py-2 px-10 rounded-xl hover:bg-gray-50 hover:text-black"
              >
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Store;
