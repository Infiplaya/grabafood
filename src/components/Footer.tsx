import { FC } from "react";
import Link from "next/link";

const Footer: FC = () => {
  return (
    <footer className="bg-blue-800 p-4 shadow md:flex md:items-center md:justify-between md:p-6">
      <span className="text-sm text-gray-200 sm:text-center">
        © 2022{" "}
        <Link href={`/`} className="hover:underline">
          Grab A Food
        </Link>
      </span>
      <ul className="mt-3 flex flex-wrap items-center gap-3 text-sm text-gray-200 sm:mt-0">
        <li>
          <Link href={`/about`}>
            <a className="mr-4 hover:underline md:mr-6">About</a>
          </Link>
        </li>
        <li>
          <Link href={`/contact`} className="hover:underline">
            <a className="mr-4 hover:underline md:mr-6">Contact</a>
          </Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
