import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <footer className="bg-red text-white py-12 shadow-grayLight mt-12 shadow-2xl">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full lg:w-1/4 mb-4 lg:mb-0">
            <h4 className="text-lg mb-4">About Us</h4>
            <p className="text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              eleifend justo in eros tincidunt vehicula. Duis eget nunc vitae
              nulla varius sagittis vel quis urna.
            </p>
          </div>
          <div className="w-full lg:w-1/4 mb-4 lg:mb-0">
            <h4 className="text-lg mb-4">Contact Us</h4>
            <p className="text-sm">1234 Main St.</p>
            <p className="text-sm">Anytown, USA 12345</p>
            <p className="text-sm">Phone: (555) 555-5555</p>
            <p className="text-sm">Email: info@example.com</p>
          </div>

          <div className="w-full lg:w-1/4">
            <form className="mb-4">
              <input
                className="bg-gray-700 text-white py-2 px-3 w-full rounded mb-2"
                type="email"
                placeholder="Enter your email"
              />
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                type="submit"
              >
                Reserva ahora
              </button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
