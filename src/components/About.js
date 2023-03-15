import Image from "next/image";
import Link from "next/link";
import { FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const About = () => {
  return (
    <div className="bg-gray-100 py-12 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row-reverse gap-2">
        <div className="md:w-1/2 md:ml-8 mb-8 md:mb-0">
          <h2 className="text-2xl font-bold mb-2">
            Acerca de <span className="text-red">Foodbud</span>
          </h2>
          <p className="text-gray-700 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            euismod, metus in dapibus faucibus, ante nibh mattis risus, a
            sagittis elit elit nec est.
          </p>
          <p className="text-gray-700 mb-4">
            Nullam nec magna eget dolor iaculis hendrerit eu vitae sapien.
            Suspendisse potenti.
          </p>
          <p className="text-gray-700 mb-8">
            Vestibulum vestibulum accumsan odio, vel efficitur sapien.
          </p>
          <div className="flex items-center mb-4">
            <FaPhoneAlt className="text-gray-500 mr-2" />
            <span className="text-gray-700">(123) 456-7890</span>
          </div>
          <div className="flex items-center mb-8">
            <FaMapMarkerAlt className="text-gray-500 mr-2" />
            <span className="text-gray-700">123 Main St, Anytown USA</span>
          </div>
          <Link
            href="#"
            className="text-center bg-red text-white font-bold rounded-full px-8 py-3 hover:bg-gray-900 w-1/2 md:w-auto"
          >
            Conoce más de nosotros!
          </Link>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <Image
            width={1920}
            height={1080}
            src="/hd2.jpg"
            alt="Restaurante"
            className="rounded-lg shadow-md mb-4 sm:mb-0 w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
