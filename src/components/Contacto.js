import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebook } from "react-icons/fa";

const Contacto = () => {
  const redesSociales = [
    {
      nombre: "Facebook",
      color: "bg-blue-600",
      logo: <FaFacebook />,
      url: "https://www.facebook.com/tu_pagina_de_facebook",
    },
    // {
    //   nombre: "Instagram",
    //   color: "bg-pink-600",
    //   logo: "fab fa-instagram",
    //   url: "https://www.instagram.com/tu_pagina_de_instagram",
    // },
    // {
    //   nombre: "Twitter",
    //   color: "bg-blue-400",
    //   logo: "fab fa-twitter",
    //   url: "https://www.twitter.com/tu_pagina_de_twitter",
    // },
    // {
    //   nombre: "YouTube",
    //   color: "bg-red-600",
    //   logo: "fab fa-youtube",
    //   url: "https://www.youtube.com/tu_pagina_de_youtube",
    // },
  ];

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
