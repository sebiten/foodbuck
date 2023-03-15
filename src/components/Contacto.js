import Image from "next/image";
import Link from "next/link";
import React from "react";



function Contacto() {
  return (
    <section
      id="contacto"
      className="bg-gray-800 py-12 px-4 md:px-12 lg:px-24 xl:px-48 w-10/12 mx-auto"
    >
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl text-center font-bold text-white">
          Contactanos y seguinos en nuestras redes sociales
        </h1>
      </div>
      <Link
        href="https://www.facebook.com/foodbudrestaurant"
        className="grid grid-cols-1 md:grid-cols-4 gap-4"
      >
        <div className="!important text-white py-12 shadow-grayLight mt-12  hover:scale-110 transition duration-500 ease-in-out">
          <Image
            src="/face.png"
            alt="Logo"
            width={200}
            height={200}
            className="mx-auto"
          />
        </div>
        <Link
          href="https://www.instagram.com/foodbudrestaurant"
          className="!important bg- text-white py-12 shadow-grayLight mt-12 hover:scale-110 transition duration-500 ease-in-out "
        >
          <Image
            src="/instagram.png"
            alt="Logo"
            width={200}
            height={200}
            className="mx-auto"
          />
        </Link>
        <Link
          href="https://www.gmail.com/foodbudrestaurant"
          className="!important bg- text-white py-12 shadow-grayLight mt-12  hover:bg-red-600 hover:scale-110 transition duration-500 ease-in-out"
        >
          <Image
            src="/gmail.png"
            alt="Logo"
            width={200}
            height={200}
            className="mx-auto"
          />
        </Link>
        <Link
          href="https://www.twitter.com/foodbudrestaurant"
          className="!important bg- text-white py-12 shadow-grayLight mt-12 hover:transform hover:scale-110 transition duration-500 ease-in-out"
        >
          <Image
            src="/gorjeo.png"
            alt="Logo"
            width={200}
            height={200}
            className="mx-auto"
          />
        </Link>
      </Link>
    </section>
  );
};

export default Contacto;
