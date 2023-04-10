import Link from "next/link";

export function Navbar() {
  return (
    <header className="w-full">
      <nav className="flex justify-between bg-neutral-200 p-5 shadow-md shadow-neutral-300">
        <div className="text-lg font-bold">
          <Link href="/">Home</Link>
        </div>
        <ul className="flex gap-5 font-semibold">
          <li>
            <Link href="/recipes">Recipes</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
