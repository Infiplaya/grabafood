import type { NextPage } from "next";
import Navbar from "../components/Navbar";
import Link from "next/link";
import { useState } from "react";
import Footer from "../components/Footer";

const Pickfood: NextPage = () => {
  const [text, setText] = useState("");
  return (
    <>
      <div>
        <Navbar />
        <main className="container mx-auto min-h-screen md:flex md:flex-col justify-center md:px-48">
          <div className="p-10 md:flex">
            <h1 className="mt-10 md:mt-0 text-center text-2xl md:text-5xl font-bold">
              Having problem figure out what to eat? No worries. Just search.
            </h1>
          </div>
          <div className="flex w-full justify-center">
            <div className="flex w-full md:flex-row md:align-middle flex-col px-10 py-4">
              <input
                type={`search`}
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder={`Type a recipe...`}
                className={`w-full rounded-md py-3 px-3 md:py-5 md:px-5 md:rounded-md md:rounded-r-none font-semibold shadow-sm placeholder:text-gray-600 md:text-xl`}
              />
              <Link
                href={{
                  pathname: "/search",
                  query: text,
                }}
              >
                <button className="mt-5 md:mt-0 w-32 md:py-6 md:px-5 md:w-40 md:rounded-l-none self-center rounded-md bg-orange-400 py-2 px-3 md:text-xl">
                  Get recipe
                </button>
              </Link>
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:gap-5 p-10 mt-10 justify-center">
            <h1 className="mt-10 md:mt-0 text-center text-2xl md:text-3xl font-bold">
              Or get random one.
            </h1>
            <Link href={`/random`}>
              <button className="mt-5 md:mt-0 w-32 self-center rounded-md bg-orange-400 py-2 px-3">
                Get random
              </button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Pickfood;
