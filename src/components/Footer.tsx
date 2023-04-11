import { LucideGithub } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full  border-t-2 border-neutral-300  py-16 text-neutral-600">
      <div className="flex w-full justify-between lg:mx-auto lg:max-w-7xl">
        <ul className="px-10 lg:space-y-5">
          <li>
            <Link href="/" className="underline-offset-8 hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="underline-offset-8 hover:underline">
              About
            </Link>
          </li>
          <li>
            <Link
              href="/recipes"
              className="underline-offset-8 hover:underline"
            >
              Recipes
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="underline-offset-8 hover:underline"
            >
              Contact
            </Link>
          </li>
        </ul>
        <div className="px-10">
          <Link href="https://github.com/infiplaya" target="_blank">
            <LucideGithub className="hover:text-neutral-900" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
