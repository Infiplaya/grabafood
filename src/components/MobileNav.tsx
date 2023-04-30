import { Menu } from "lucide-react";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/DropdownMenu";

export default function MobileNav() {
  function handleClick() {
    document.dispatchEvent(new KeyboardEvent("keydown", { key: "Escape" }));
  }

  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow shadow-neutral-200">
          <Menu />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="mr-10 w-64 p-5 lg:hidden">
          <DropdownMenuLabel>Menu</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Link
              href="/favorites"
              onClick={handleClick}
              className="block h-full w-full"
            >
              Favorites
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link
              href="/recipes"
              onClick={handleClick}
              className="block h-full w-full"
            >
              Recipes
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link
              href="/about"
              className="block h-full w-full"
              onClick={handleClick}
            >
              About
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link
              href="/contact"
              onClick={handleClick}
              className="block h-full w-full"
            >
              Contact
            </Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
