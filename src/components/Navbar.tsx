import Link from "next/link";
import { FC, useState } from "react";
import { useSession, signOut, signIn } from "next-auth/react";

const Navbar: FC = () => {
  const { data: session, status } = useSession();

  if (status === "authenticated") {
    return (
      <nav className="flex w-full items-center justify-center gap-5 p-5 align-middle">
        <Link href={`/`}>
          <p className="cursor-pointer text-xl font-semibold sm:text-3xl">
            Grab a <span className="text-orange-500">food</span>
          </p>
        </Link>
        <Link href={`/panel`}>
          <button className="font-bold">Dashboard</button>
        </Link>
        <button onClick={() => signOut()} className="font-bold">
          Sign out
        </button>
      </nav>
    );
  }
  return (
    <nav className="flex w-full items-center p-5 align-middle shadow-sm">
      <div className="ml-5 flex h-full flex-1 flex-row justify-center">
        <Link href={`/`}>
          <p className="cursor-pointer text-xl font-semibold sm:text-3xl">
            Grab a <span className="text-orange-500">food</span>
          </p>
        </Link>
      </div>
      <ul className="-ml-6 flex flex-1 flex-row items-center justify-center gap-3 align-middle text-sm font-semibold text-gray-800 sm:gap-10 sm:text-base md:justify-start">
        <li>
          <Link href={`/about`}>About</Link>
        </li>
        <li>
          <Link href={`/contact`}>Contact</Link>
        </li>
        <div className="flex items-center gap-5 px-3 border-l border-gray-200">
          <li>
            <Link href={`/pickfood`}>
              <button className="hidden rounded-md border border-black px-3 py-1 text-gray-900 md:inline-flex">
                Get recipe
              </button>
            </Link>
          </li>
          <li>
            <button
              className="hidden rounded-md bg-orange-400 px-3 py-1 md:inline-flex"
              onClick={() => signIn()}
            >
              Sign in
            </button>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
