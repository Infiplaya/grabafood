import { FC } from "react";
import Link from "next/link";
import { useSession, signOut, signIn } from "next-auth/react";
import Image from "next/future/image";
import hero from "../../public/hero.jpg";

const css = {
  height: "600px",
};

const Hero: FC = () => {
  const { data: session, status } = useSession();
  return (
    <div className="mt-5 flex text-gray-900 sm:mx-10 md:mt-20">
      <div className="flex w-full flex-col items-center justify-center px-3 text-left align-middle md:mt-20 md:w-1/2 md:justify-start md:space-y-5 md:px-0">
        <Image
          src={hero}
          alt={`hero`}
          className={`h-96  w-full rounded-md object-cover shadow-md shadow-gray-500 md:hidden`}
          priority={true}
        ></Image>
        <h1 className="mt-10 text-2xl font-bold leading-tight md:mt-0 md:w-96 md:text-7xl">
          Grab The Food You Will Love.
        </h1>
        <p className="mt-3 text-base text-gray-700 md:mt-0 md:w-96 md:text-xl">
          Don&apos;t know what to eat? We got you covered.
        </p>
        <div className="mt-10 flex w-96 justify-center gap-5 text-xl md:mt-0 md:justify-start">
          {!session && (
            <button className="rounded-md bg-orange-400 py-2 px-4 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110" onClick={() => signIn()}>
              Get started
            </button>
          )}
          <Link href={`/pickfood`}>
            <button
              className={
                session
                  ? "rounded-md bg-orange-400 py-2 px-4 text-gray-800 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
                  : `rounded-md border-2 border-black py-2 px-4 text-gray-900 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110`
              }
            >
              {session ? "Get the recipe" : "Try as guest"}
            </button>
          </Link>
        </div>
      </div>
      <Link href={`/pickfood`}>
        <div
          className="relative mx-10 hidden w-1/2 cursor-pointer flex-col justify-center align-middle transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 md:flex"
          style={css}
        >
          <Image
            src={hero}
            alt={`hero`}
            className={`h-full w-full rounded-md object-cover shadow-lg`}
            priority={true}
          ></Image>
          <div className="font-sans-serif absolute bottom-0 -left-5 h-48 w-48 space-y-3 rounded-lg bg-orange-500/50 p-3 shadow-lg backdrop-blur">
            <h2 className="text-2xl font-bold text-black hover">
              Good looking food here.
            </h2>
            <p className="font-bold text-black drop-shadow-lg">
              Want to make it? Check out the recipes!
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Hero;
