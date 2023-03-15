import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <>
      <div className="relative">
        <div className="absolute inset-0"></div>
        <div className="absolute inset-0 bg-gray-900 opacity-40 h-screen">
          <Image
            className="h-full w-full object-cover"
            width={1920}
            height={1080}
            src="/hd.jpg"
            alt="hero"
          />
        </div>
        <div className="relative pb-10 flex flex-col items-center justify-center min-h-screen">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center items-center">
              <div className="w-full lg:w-6/12 px-4">
                <div className="text-center">
                  <h1 className="text-5xl font-semibold text-white mb-4">
                    Bienvenido a <span className="text-red">Foodbud</span>
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
                  <Link
                    href="#"
                    className="bg-white text-gray-800 font-bold rounded-full px-8 py-3 hover:bg-gray-900"
                  >
                    Conoce más
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
