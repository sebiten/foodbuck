import Image from "next/image";

const HeroSection = () => {
  return (
    <>
      <div className="relative">
        <div className="absolute inset-0">
          <div className="carousel relative">
            <div className="carousel-inner relative overflow-hidden w-full">
              <input
                className="carousel-open"
                type="radio"
                id="carousel-1"
                name="carousel"
                aria-hidden="true"
                hidden
                checked
              />
              <div
                className="carousel-item absolute opacity-0"
                style={{ height: "50vh" }}
              >
                <div className="block h-full w-full bg-red"></div>
              </div>
              <input
                className="carousel-open"
                type="radio"
                id="carousel-2"
                name="carousel"
                aria-hidden="true"
                hidden
              />
              <div
                className="carousel-item absolute opacity-0"
                style={{ height: "50vh" }}
              >
                <div className="block h-full w-full bg-oliveGreen"></div>
              </div>
              <input
                className="carousel-open"
                type="radio"
                id="carousel-3"
                name="carousel"
                aria-hidden="true"
                hidden
              />
              <div
                className="carousel-item absolute opacity-0"
                style={{ height: "50vh" }}
              >
                <div className="block h-full w-full bg-gold"></div>
              </div>
              <label
                htmlFor="carousel-3"
                className="carousel-control absolute bottom-0 right-0 w-12 h-12 bg-white text-black rounded-full cursor-pointer hidden"
              ></label>
              <label
                htmlFor="carousel-2"
                className="carousel-control absolute bottom-0 right-0 w-12 h-12 bg-white text-black rounded-full cursor-pointer hidden"
              ></label>
              <label
                htmlFor="carousel-1"
                className="carousel-control absolute bottom-0 right-0 w-12 h-12 bg-white text-black rounded-full cursor-pointer"
              ></label>
            </div>
          </div>
        </div>
        <div className="relative pt-32 pb-10">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center">
              <div className="w-full lg:w-6/12 px-4">
                <div className="text-center">
                  <h1 className="text-5xl font-semibold text-brownDark">
                    Bienvenidos a nuestro restaurante
                  </h1>
                  <p className="text-lg leading-relaxed mt-4 mb-4 text-grayLight">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    dictum leo nulla, a porttitor nisi fringilla vel. Quisque
                    pharetra eleifend nibh, ac malesuada ex posuere ac. Nam eu
                    velit et arcu tempor auctor. Ut luctus, sapien eget
                    consequat posuere, mi quam ullamcorper erat, ut rhoncus
                    mauris lacus ut enim.
                  </p>
                  <a
                    href="#"
                    className="bg-red text-white font-bold rounded-full px-8 py-3 mr-4 hover:bg-gray-900"
                  >
                    Reserva ahora
                  </a>
                  <a
                    href="#"
                    className="bg-transparent text-brownDark font-bold rounded-full px-8 py-3 hover:bg-gray-900 border-2 border-brownDark"
                  >
                    Menú
                  </a>
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
