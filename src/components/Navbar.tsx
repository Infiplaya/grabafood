import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { Button } from "./ui/Button";

export function Navbar() {
  const { data: session } = useSession();
  return (
    <header className="w-full">
      <nav className="flex justify-between px-5 py-8 shadow-md shadow-neutral-200">
        <div className="text-lg font-bold">
          <Link href="/">Home</Link>
        </div>
        <ul className="flex items-center gap-5 font-semibold">
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

          <li>
            {session ? (
              <Button onClick={() => void signOut()} size={"sm"}>
                Sign Out
              </Button>
            ) : (
              <Button onClick={() => void signIn("google")} size={"sm"}>
                Sign In
              </Button>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
}
