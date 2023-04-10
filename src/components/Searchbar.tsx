import { SearchIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Input } from "./ui/Input";

export function Searchbar() {
  const [query, setQuery] = useState("");
  return (
    <div className="relative mt-6 w-full">
      <Input
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search a food..."
        className="w-full flex-1 rounded-3xl px-7 py-7 text-base"
      />
      <Link
        href={{
          pathname: "/recipes",
          query: { q: query },
        }}
      >
        <SearchIcon className="absolute right-4 top-3 h-8 w-8 rounded-full bg-orange-500 p-1 text-neutral-200 hover:bg-orange-400" />
      </Link>
    </div>
  );
}
