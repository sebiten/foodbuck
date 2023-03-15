import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const About = () => {
  return (
    <div className="bg-gray-100 py-24 h-full">
      <div className="w-9/12 mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold mb-2">
          Acerca de <span className="text-red">Foodbud</span>
        </h2>
        <div className="flex flex-col sm:flex-row items-center sm:items-start mb-6">
          <Image
            height={400}
            width={600}
            src="/hd2.jpg"
            alt="Restaurante"
            className="w-full sm:w-1/2 rounded-lg shadow-md mb-4 sm:mb-0"
          />
          <div className="sm:ml-6">
            <p className="text-gray-700 mb-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              euismod, metus in dapibus faucibus, ante nibh mattis risus, a
              sagittis elit elit nec est.
            </p>
            <p className="text-gray-700 mb-2">
              Nullam nec magna eget dolor iaculis hendrerit eu vitae sapien.
              Suspendisse potenti.
            </p>
            <p className="text-gray-700 mb-4">
              Vestibulum vestibulum accumsan odio, vel efficitur sapien.
            </p>
            <div className="flex items-center">
              <FaPhoneAlt className="text-gray-500 mr-2" />
              <span className="text-gray-700">(123) 456-7890</span>
            </div>
            <div className="flex items-center mt-2">
              <FaMapMarkerAlt className="text-gray-500 mr-2" />
              <span className="text-gray-700">123 Main St, Anytown USA</span>
            </div>
            <div className="flex flex-col">
              <Link
                href="#"
                className="text-center bg-red text-white font-bold rounded-full px-8 py-3 hover:bg-gray-900 w-1/2 my-10"
              >
                Conoce mas de nosotros!
              </Link>
              <p>
                ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
                quod. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, quod.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
