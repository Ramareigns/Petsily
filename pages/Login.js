import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import LoginPic from "../public/Dog1.jpg";
import googleImg from "../public/google.png";
import Link from "next/link";
import { HiAtSymbol, HiFingerPrint } from "react-icons/hi";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import LOGO from "../public/LOGO.png";

function Login({ children }) {
  const { data: session, loading } = useSession();
  const [show, setShow] = useState(false);
  const router = useRouter();
  const handleLogin = async () => {
    await signIn("google");
    router.push("/SideBar"); // navigate to the dashboard page after logging in
  };

  return (
    <div id="Login">
      <Head>
        <title>Login Page</title>
      </Head>
      <div className="h-screen items-center justify-center flex bg-gradient-to-r from-green-400 to-green-800">
        <div className="md:max-w-[1000px] bg-gray-200 shadow-xl shadow-black rounded-xl sm:p-8 p-2">
          <div className="m-auto bg-white rounded-xl h-full w-full flex md:flex-row flex-col">
            <div className="mx-auto">
              <Image
                className="rounded-l-xl md:h-[580px] md:w-[1000px]"
                src={LoginPic}
                alt=""
                width="600"
                height="600"
              />
            </div>
            <div className="bg-gray-300  rounded-r-xl flex flex-col w-full">
              <div className="text-center py-5
              5">
                <section className="w-3/4 mx-auto flex flex-col gap-10">
                  <div>
                    <Image
                      className="mx-auto rounded-full md:h-[100px] md:w-[100px]"
                      src={LOGO}
                      alt=""
                      width="600"
                      height="600"
                    />
                    <h1 className="text-gray-800 text-4xl font-bold py-4">
                      Explore!!
                    </h1>
                    <p className=" mx-auto text-gray-400 ">
                      Log In for them Hugs
                    </p>
                  </div>
                  <form className="flex flex-col gap-5">
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

                    <div>
                      <button
                        // onClick={handleLogin}
                        type="submit"
                        className="w-full bg-green-700 text-gray-50 text-lg py-2 rounded-xl hover:bg-gray-50 hover:text-black"
                      >
                        <Link href={"/"}>Login</Link>
                      </button>
                    </div>
                    <div>
                      <button
                        // onClick={()=>signIn()}
                        onClick={handleLogin}
                        type="button"
                        className="w-full py-2 gap-2 flex justify-center rounded-xl bg-blue-300 hover:bg-gray-50 "
                      >
                        Sign in with Google
                        <Image
                          className=""
                          src={"/google.png"}
                          width="20"
                          height="20"
                          alt="google sign up link"
                        ></Image>
                      </button>
                    </div>
                  </form>
                  <p>
                    Do not have an account yet?{" "}
                    <Link href={"/Register"} className="text-blue-600">
                      Sign Up
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

export default Login;
