import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";
import { getSession } from "next-auth/react";

import Login from "@/pages/Login";
import Register from "@/pages/Register";
import HomePage from "@/pages/HomePage";
import SideBar from "@/pages/SideBar";
import ChatSideBar from "@/pages/ChatSideBar";
import Store from "@/pages/Store";
import Notification from "@/pages/Notification";
import News from "@/pages/News";
import Settings from "@/pages/Settings";



export default function Home({ session }) {
  // if(!session) return <Login />
  return (
    <div>
      <Head>
        <title>Pet App</title>
      </Head>

      {/* <Register /> */}
      <div className="flex-grow h-screen mr-4 sl:mr-40 overflow-y-auto">
        <main className="flex">
          <SideBar />
          <HomePage />
          <News/>
          <Notification />
          <ChatSideBar />
          <Store />
          <Settings />

        </main>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  return {
    props: {
      session,
    },
  };
}

