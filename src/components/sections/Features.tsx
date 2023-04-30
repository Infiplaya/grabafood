import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/Tabs";
import Image from "next/image";
import Link from "next/link";

export  function Features() {
  return (
    <section className="mt-12 w-full bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600 py-32">
      <div className="mx-auto px-6 text-left lg:max-w-7xl lg:text-center">
        <h2 className="text-3xl tracking-tight text-neutral-100 lg:text-5xl">
          Search through{" "}
          <Link
            href="/recipes"
            className="text-orange-400 underline-offset-8 hover:underline"
          >
            recipes
          </Link>
        </h2>
        <p className="mx-auto mt-3 text-left text-xl text-neutral-100 lg:mt-6 lg:max-w-7xl lg:text-center">
          Find a recipe you will love. You can add it to your favorites too!
        </p>
        <Tabs
          defaultValue="recipes"
          className="mt-12 rounded-lg lg:mt-3 lg:p-10"
        >
          <TabsList>
            <TabsTrigger value="recipes" className="bg-white/10">
              Recipes
            </TabsTrigger>
            <TabsTrigger value="favorites">Favorites</TabsTrigger>
          </TabsList>
          <TabsContent
            value="recipes"
            className="mt-6 border border-white/25 bg-white/10 lg:p-16"
          >
            <p className="mb-6 w-full text-left text-sm text-neutral-200 lg:mx-auto lg:max-w-md lg:text-base">
              Browse through recipes and find your favorite one! Clicking into a
              card moves you into page with recipe details. Use search bar to
              find a recipe for food you would like to eat.
            </p>
            <Image
              src="/recipes.webp"
              width={1472}
              height={871}
              alt="mockup"
              loading="lazy"
              decoding="async"
              className="mx-auto h-2/3 rounded-lg shadow-lg"
            />
          </TabsContent>
          <TabsContent
            value="favorites"
            className="mt-6 border border-white/25 bg-white/10 lg:p-16"
          >
            <p className="mb-6 w-full text-left text-sm text-neutral-200 lg:mx-auto lg:max-w-md lg:text-base">
              This is the place where you can see all the recipes you choosed to
              bookmark. Just click on one of them and you will be redirected to
              details page of this recipe. You can delete the recipe from
              favorites, too!
            </p>
            <Image
              src="/favorites.webp"
              width={1472}
              height={871}
              alt="mockup"
              loading="lazy"
              decoding="async"
              className="mx-auto h-2/3 rounded-lg shadow-lg"
            />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
