import Image from "next/image";
import React from "react";

function NavBar({ theme, onThemeChange }) {
  return (
    <nav
      className={`flex justify-between items-center py-4 px-8 bg-${currentTheme}-100`}
    >
      <div>
        <Image src="/logo.svg" alt="logo" width={50} height={50} />
      </div>
      <div>
        {currentTheme === "dark" ? (
          <button
            className="bg-black-700 hover:bg-black text-white rounded-md border-pink-600 border-2 px-4 py-2"
            onClick={() => setTheme("light")}
          >
            <Image src="/sun.svg" alt="light mode" width={20} height={20} />
          </button>
        ) : (
          <button
            className="bg-white hover:bg-gray-100 rounded-md border-pink-600 border-2 px-4 py-2"
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
