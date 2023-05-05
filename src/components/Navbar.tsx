import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import MobileNav from "./MobileNav";
import { Button } from "./ui/Button";

export function Navbar() {
  const { data: session } = useSession();
  return (
    <header className="w-full shadow-sm shadow-neutral-200">
      <nav className="flex items-center gap-5 px-5 py-8 lg:mx-auto lg:max-w-7xl">
        <div className="px-5 text-xl font-medium">
          <Link href="/" className="inline-block tracking-tight">
            Grab A <span className="text-orange-500">Food</span>
          </Link>
        </div>
        <ul className="hidden items-center text-sm font-medium lg:flex">
          <li>
            <Link
              href="/recipes"
              className="rounded-lg px-4 py-2 transition-all hover:bg-neutral-200"
            >
              Recipes
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="rounded-lg px-4 py-2 transition-all hover:bg-neutral-200"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="rounded-lg px-4 py-2 transition-all hover:bg-neutral-200"
            >
              Contact
            </Link>
          </li>
          {session ? (
            <li>
              <Link
                href="/favorites"
                className="rounded-lg px-4 py-2 transition-all hover:bg-neutral-200"
              >
                Favorites
              </Link>
            </li>
          ) : null}
        </ul>
        <div className="ml-auto flex">
          {session ? (
            <Button onClick={() => void signOut()} size={"sm"}>
              Sign Out
            </Button>
          ) : (
            <Button onClick={() => void signIn("google")} size={"sm"}>
              Sign In
            </Button>
          )}
        </div>
        <div className="lg:hidden">
          <MobileNav />
        </div>
      </nav>
    </header>
  );
}
