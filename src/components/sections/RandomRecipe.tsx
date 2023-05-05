import { getRandomPage } from "@/utils/getRandomPage";
import Link from "next/link";
import { Button } from "../ui/Button";

export function RandomRecipeSection() {
  return (
    <section className="mt-12 flex flex-col items-center justify-center px-6 py-12 lg:mx-auto lg:mt-0 lg:hidden lg:w-1/2 lg:-rotate-6">
      <div className="py-6 text-center">
        <h2 className="text-3xl tracking-tight lg:text-5xl lg:font-medium">
          Feeling lucky?
        </h2>
        <Link href={`/recipes/${getRandomPage()}`}>
          <Button className="mt-6 text-lg" size="lg">
            Get Randome Recipe
          </Button>
        </Link>
      </div>
    </section>
  );
}
