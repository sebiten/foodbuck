import Image from "next/image";
import React from "react";

function NavBar({ currentTheme, setTheme }) {
  return (
    <nav
      className={`flex justify-between items-center py-4 px-8 fixed w-full z-10 bg-white shadow-md`}
    >
      <div className="flex gap-2">
        <Image src="/icono_pizza.svg" alt="logo" width={55} height={55} />
        <span className="text-2xl font-bold text-gray-800">Foodbud</span>
      </div>
      <div className="flex gap-10">
        <ul className="flex justify-between gap-10 xl:mr-10">
          <li>
            <a
              href="#"
              className={`text-gray-800 hover:text-gray-600 font-semibold text-lg`}
            >
              Inicio
            </a>
          </li>
          <li>
            <a
              href="#"
              className={`text-gray-800 hover:text-gray-600 font-semibold text-lg`}
            >
              Menú
            </a>
          </li>
        </ul>
        {currentTheme === "dark" ? (
          <button
            className="bg-black-700 hover:bg-black text-white rounded-md border-pink-600 border-2 px-4 py-2"
            onClick={() => setTheme("light")}
          >
            <Image
              className="fill-current text-white"
              src="/sun.svg"
              alt="light mode"
              width={20}
              height={20}
            />
          </button>
        ) : (
          <button
            className="bg-gray-400 hover:bg-gray-500 rounded-md border-pink-600 border-2 px-4 py-2"
            onClick={() => setTheme("dark")}
          >
            <Image src="/moon.svg" alt="dark mode" width={20} height={20} />
          </button>
        )}
      </div>
    </nav>
  );
}

export default NavBar;
