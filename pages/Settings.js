import React from "react";
import Head from "next/head";

function Settings() {
  return (
    <div id="Settings" className="min-h-screen w-[1150px]  bg-gray-100">
      <Head>
        <title>Settings - My App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Settings</h1>

          <div className="mt-5">
            <h2 className="text-lg font-medium text-gray-900">Account</h2>

            <div className="mt-4">
              <p className="text-base font-medium text-gray-500">
                <a href="#" className="text-indigo-600 hover:text-indigo-500">
                  Edit profile
                </a>
              </p>
              <p className="text-base font-medium text-gray-500">
                <a href="#" className="text-indigo-600 hover:text-indigo-500">
                  Change password
                </a>
              </p>
            </div>
          </div>

          <div className="mt-10">
            <h2 className="text-lg font-medium text-gray-900">Privacy</h2>

            <div className="mt-4">
              <p className="text-base font-medium text-gray-500">
                <a href="#" className="text-indigo-600 hover:text-indigo-500">
                  Privacy settings
                </a>
              </p>
            </div>
          </div>

          <div className="mt-10">
            <h2 className="text-lg font-medium text-gray-900">Security</h2>

            <div className="mt-4">
              <p className="text-base font-medium text-gray-500">
                <a href="#" className="text-indigo-600 hover:text-indigo-500">
                  Two-factor authentication
                </a>
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Settings;
