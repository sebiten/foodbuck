import Image from "next/image";
import Link from "next/link";
import React from "react";
import HeroSection from "./Hero";

function Consejos() {
  return (
    <>
      <div className="relative py-32">
        <div className="absolute inset-0"></div>
        <div className="absolute inset-0 bg-gray-900 opacity-40 h-full">
          <Image
            className="h-full w-full object-cover"
            width={1920}
            height={1080}
            src="/hd3.jpg"
            alt="hero"
          />
        </div>
        <div className="relative pb-10 flex flex-col items-center justify-center ">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center items-center">
              <div className="w-full lg:w-6/12 px-4">
                <div className="text-center">
                  <h1 className="text-5xl font-semibold text-white mb-4">
                    Ofrecemos tambien opciones veganas y vegetarianas
                  </h1>
                  <p className="text-lg text-gray-300 mb-10">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quisquam, quod. Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Quisquam, quod.
                  </p>
                  <Link
                    href="#"
                    className="bg-red text-white font-bold rounded-full px-8 py-3 mr-4 hover:bg-gray-900"
                  >
                    Reserva ahora
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Consejos;
