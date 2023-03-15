import Image from "next/image";
import React from "react";
import { menucomida } from "@/data/menu.js";

const Menu = () => {
  return (
    <>
      <h2 className="text-center font-bold text-3xl my-14">
        Conoce nuestro <span className="text-red">Menu</span>
      </h2>

      <div className="w-9/12 mx-auto grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4">
        {menucomida.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center justify-center p-4 bg-white rounded-md shadow-md border-2 border-gray-200 hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1"
          >
            <div className="w-full text-center mb-4">
              <h1 className="text-lg font-semibold">{item.name}</h1>
            </div>
            <div className="w-full h-full overflow-hidden">
              <Image
                className="object-cover mx-auto"
                src={item.image}
                alt={item.name}
                width={200}
                height={200}
              />
            </div>
            <div className="w-full text-center mt-4">
              <p className="text-gray-500">{item.description}</p>
              <p className="font-bold text-gray-700 mt-2">{item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Menu;
