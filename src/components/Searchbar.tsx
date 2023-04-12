import { SearchIcon } from "lucide-react";
import { useRouter } from "next/router";
import { type FormEvent, useState } from "react";
import { Input } from "./ui/Input";

export function Searchbar() {
  const [query, setQuery] = useState("");

  const router = useRouter();

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    void router.push({
      pathname: "/recipes",
      query: { q: query.toLowerCase() },
    });
  };
  return (
    <form className="relative mt-6 w-full" onSubmit={handleSubmit}>
      <Input
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search a food..."
        className="w-full flex-1 rounded-3xl px-7 py-7 text-base"
      />
      <button type="submit">
        <SearchIcon className="absolute right-4 top-3 h-8 w-8 rounded-full bg-orange-500 p-1 text-neutral-200 hover:bg-orange-400" />
      </button>
    </form>
  );
}
