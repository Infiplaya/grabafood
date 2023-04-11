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
        <DropdownMenuTrigger className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow">
          <Menu />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="mr-10 w-64 p-5 lg:hidden">
          <DropdownMenuLabel>Menu</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Link href="/favorites">
              <p onClick={handleClick}>Favorites</p>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href="/recipes">
              <p onClick={handleClick}>Recipes</p>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href="/about">
              <p onClick={handleClick}>About</p>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href="/contact">
              <p onClick={handleClick}>Contact</p>
            </Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
