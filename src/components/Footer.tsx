import { LucideGithub } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-12 flex w-full justify-between border-t-2 border-neutral-300  py-10 text-neutral-600">
      <ul className="px-10">
        <li>
          <Link href="/home">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/recipes">Recipes</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
      <div className="px-10">
        <Link href="https://github.com/infiplaya" target="_blank">
          <LucideGithub className="hover:text-neutral-900" />
        </Link>
      </div>
    </footer>
  );
}
