import React from "react";
import backgroundImage from "../assets/restro.png";
function Herosection() {
  const sectionStyle = {
    background: `url(${backgroundImage}) center/cover no-repeat`,
  };
  return (
    <div>
      <section class="bg-gray-50" style={sectionStyle}>
        <div class="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
          <div class="mx-auto max-w-xl text-center">
            <h1 class="text-3xl font-extrabold sm:text-5xl">
              Let Us Find Your
              <strong class="font-extrabold text-red-700 sm:block">
                Forever Food
              </strong>
            </h1>

            <p class="mt-4 sm:text-xl font-bold">
              Pull up a chair. Take a taste. Come join us. Life is so endlessly
              delicious.
            </p>

            <div class="mt-8 flex flex-wrap justify-center gap-4">
              <a
                class="block w-full rounded bg-red-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
                href="/get-started"
              >
                Search Now
              </a>

              <a
                class="block w-full rounded bg-red-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
                href="/about"
              >
                Know More
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Herosection;
