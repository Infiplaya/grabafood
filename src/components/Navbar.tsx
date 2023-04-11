import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import MobileNav from "./MobileNav";
import { Button } from "./ui/Button";

export function Navbar() {
  const { data: session } = useSession();
  return (
    <header className="w-full">
      <nav className="flex items-center px-5 py-8 shadow-md shadow-neutral-200">
        <div className="px-5 text-2xl font-medium">
          <Link href="/">
            Grab A <span className="text-orange-500">Food</span>
          </Link>
        </div>
        <div className="ml-auto flex items-center gap-5 lg:hidden">
          {session ? (
            <Button onClick={() => void signOut()} size={"sm"}>
              Sign Out
            </Button>
          ) : (
            <Button onClick={() => void signIn("google")} size={"sm"}>
              Sign In
            </Button>
          )}
          <MobileNav />
        </div>
        <ul className="hidden items-center gap-5 font-semibold lg:flex">
          <li>
            <Link href="/recipes">Recipes</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
          {session ? (
            <li>
              <Link href="/favorites">Favorites</Link>
            </li>
          ) : null}

          {session ? (
            <Button onClick={() => void signOut()} size={"sm"}>
              Sign Out
            </Button>
          ) : (
            <Button onClick={() => void signIn("google")} size={"sm"}>
              Sign In
            </Button>
          )}
        </ul>
      </nav>
    </header>
  );
}
