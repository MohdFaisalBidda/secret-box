import React, { useContext, useState } from "react";
import { UserContext } from "../context/UserProvider";

function Navbar() {
  const [showNav, setShowNav] = useState(false);
  const { logout } = useContext(UserContext);
  return (
    <div>
      <nav className="bg-black">
        <div className="mx-12">
          <div className="flex items-center justify-between h-24">
            <div className=" flex items-center">
              <div className="flex justify-center md:justify-start">
                <a
                  href="#"
                  className="p-2 text-xl font-bold text-black bg-white"
                >
                  SecretBox.
                </a>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="flex items-baseline ml-10 space-x-4">
                <div className="relative flex items-center w-full h-full lg:w-64 group">
                  <div className="absolute  z-50 flex items-center justify-center w-auto h-10 p-3 pr-2 text-sm text-gray-500 uppercase cursor-pointer sm:hidden">
                    <svg
                      fill="none"
                      className="relative w-5 h-5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <svg
                    className="absolute left-0 z-20 hidden w-4 h-4 ml-4 text-gray-500 pointer-events-none fill-current group-hover:text-gray-400 sm:block"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"></path>
                  </svg>
                  <input
                    type="text"
                    className="block border border-white w-full py-1.5 pl-10 pr-4 leading-normal rounded-2xl focus:border-transparent focus:outline-none focus:ring-2 focus:ring-white ring-opacity-90 bg-black text-white aa-input"
                    placeholder="Search"
                  />
                </div>

                <button
                  className="text-white  hover:text-white/50  px-3 py-2 rounded-md text-lg font-medium"
                  onClick={logout}
                >
                  Logout
                </button>
              </div>
            </div>
            <div className="flex -mr-2 md:hidden">
              <button
                onClick={() => {
                  setShowNav(!showNav);
                  console.log(showNav);
                }}
                className="text-white  inline-flex items-center justify-center p-2 rounded-md focus:outline-none"
              >
                <svg
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="w-8 h-8"
                  viewBox="0 0 1792 1792"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className={`${showNav && "hidden"} md:hidden`}>
          <div className="px-2 pt-2 pb-3 space-y-4 sm:px-3">
            <div className="relative flex items-center w-full h-full lg:w-64 group">
              <div className="absolute  z-50 flex items-center justify-center w-auto h-10 p-3 pr-2 text-sm text-gray-500 uppercase cursor-pointer sm:hidden"></div>
              <svg
                className="absolute left-0 z-20 hidden w-4 h-4 ml-4 text-gray-500 pointer-events-none fill-current group-hover:text-gray-400 sm:block"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"></path>
              </svg>
              <input
                type="text"
                className="block border border-white w-full py-1.5 pl-10 pr-4 leading-normal rounded-2xl focus:border-transparent focus:outline-none focus:ring-2 focus:ring-white ring-opacity-90 bg-black text-white aa-input"
                placeholder="Search"
              />
              <div className="absolute right-0 hidden h-auto px-2 py-1 mr-2 text-xs text-black border border-gray-300 rounded-2xl md:block">
                +
              </div>
            </div>
            <button
              onClick={logout}
              className="text-white hover:text-white/50  block px-3 py-2 rounded-md text-base font-medium"
            >
              Logout
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
