import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import LoginPic from "../public/Dog1.jpg";
import Link from "next/link";
import LOGO from "../public/LOGO.png";
import { HiAtSymbol, HiFingerPrint, HiEmojiHappy } from "react-icons/hi";

function Register() {
  const [show, setShow] = useState(false);
  return (
    <div id="Register">
      <Head>
        <title>Register Page</title>
      </Head>
      <div className="h-screen items-center justify-center flex bg-gradient-to-r from-green-400 to-green-800">
        <div className="md:max-w-[1000px] bg-gray-200 shadow-xl shadow-black rounded-xl sm:p-8 p-2">
          <div className="m-auto bg-white rounded-xl h-full w-full flex md:flex-row flex-col">
            <div className="mx-auto">
              <Image
                className="rounded-l-xl md:h-[610px] md:w-[1000px]"
                src={LoginPic}
                alt=""
                width="600"
                height="600"
              />
            </div>
            <div className="bg-gray-300  rounded-r-xl flex flex-col w-full">
              <div className="text-center py-5">
                <section className="w-3/4 mx-auto flex flex-col gap-10">
                  <div>
                    <Image
                      className="mx-auto rounded-full md:h-[80px] md:w-[80px]"
                      src={LOGO}
                      alt=""
                      width="600"
                      height="600"
                    />
                    <h1 className="text-gray-800 text-4xl font-bold py-4">
                      Register!!
                    </h1>
                    <p className=" mx-auto text-gray-400 ">
                      Get ready to recieve some Hugs...
                    </p>
                  </div>

                  <form className="flex flex-col gap-5">
                    <div className="relative flex border rounded-lg">
                      <input
                        type="full name"
                        name="fname"
                        placeholder="Full Name"
                        className="w-full py-2 px-6 rounded-xl bg-white"
                      />
                      <span className="icon flex items-center px-4 text-gray-400 hover:text-black">
                        <HiEmojiHappy size={25} />
                      </span>
                    </div>

                    <div className="relative flex border rounded-lg">
                      <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        className="w-full py-2 px-6 rounded-xl bg-white"
                      />
                      <span className="icon flex items-center px-4 text-gray-400 hover:text-black">
                        <HiAtSymbol size={25} />
                      </span>
                    </div>

                    <div className="relative flex border rounded-lg">
                      <input
                        type={`${show ? "text" : "password"}`}
                        name="password"
                        placeholder="Password"
                        className="w-full py-2 px-6 rounded-xl "
                      />
                      <span
                        className="icon flex items-center px-4 text-gray-400 hover:text-black"
                        onClick={() => setShow(!show)}
                      >
                        <HiFingerPrint size={25} />
                      </span>
                    </div>

                    <div className="relative flex border rounded-lg">
                      <input
                        type={`${show ? "text" : "password"}`}
                        name="cpassword"
                        placeholder="Confirm Password"
                        className="w-full py-2 px-6 rounded-xl "
                      />
                      <span
                        className="icon flex items-center px-4 text-gray-400 hover:text-black"
                        onClick={() => setShow(!show)}
                      >
                        <HiFingerPrint size={25} />
                      </span>
                    </div>
                    <div>
                      <button
                        type="submit"
                        className="w-full bg-green-700 text-gray-50 text-lg py-2 rounded-xl hover:bg-gray-50 hover:text-black"
                      >
                        Register
                      </button>
                    </div>
                  </form>
                  <p>
                    Have an Account Already{" "}
                    <Link href={"/Login"} className="text-blue-600">
                      Log In
                    </Link>
                  </p>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
