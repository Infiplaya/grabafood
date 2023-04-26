import { Button } from "@/components/ui/Button";
import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { Searchbar } from "@/components/Searchbar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/Tabs";
import { getRandomPage } from "@/utils/getRandomPage";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Grab a Food</title>
        <meta name="description" content="Recipes application" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <section className="mt-24 grid-cols-2 place-items-center px-6 lg:mx-auto lg:mt-0 lg:grid lg:max-w-7xl lg:gap-20">
          <div className="lg:mb-24">
            <h1 className="max-w-xl text-4xl font-bold tracking-tight lg:max-w-xl lg:text-6xl">
              Having problems figuring out{" "}
              <span className="lg:text-orange-500">what to eat?</span>
            </h1>
            <h2 className="mt-3 text-2xl font-bold tracking-tight">
              No worries. Just search.
            </h2>
            <Searchbar />
            <div className="mt-12 hidden items-center gap-3 lg:flex">
              <p className="text-base font-medium text-neutral-600">
                Feeling lucky?
              </p>
              <Link href={`/recipes/${getRandomPage()}`}>
                <Button variant="subtle" className="text-base text-neutral-600">
                  Get Random Recipe
                </Button>
              </Link>
            </div>
          </div>
          <Image
            priority={true}
            src="/hero.webp"
            alt="food img"
            width={600}
            height={800}
            decoding="async"
            className="hidden h-2/3 rounded-lg object-cover shadow-lg lg:block"
          />
        </section>
        <div className="mt-12 flex w-full justify-center px-6 py-6">
          <Image
            priority={true}
            src="/hero.webp"
            alt="food img"
            width={600}
            height={800}
            decoding="async"
            className="h-80 rounded-lg object-cover shadow-md lg:hidden"
          />
        </div>
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
                  Browse through recipes and find your favorite one! Clicking
                  into a card moves you into page with recipe details. Use
                  search bar to find a recipe for food you would like to eat.
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
                  This is the place where you can see all the recipes you
                  choosed to bookmark. Just click on one of them and you will be
                  redirected to details page of this recipe. You can delete the
                  recipe from favorites, too!
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
        <section className="bg-neutral-800 py-32 text-neutral-100">
          <div className="flex items-center justify-center gap-8 px-6">
            <h3 className="max-w-sm text-2xl tracking-tight  lg:text-4xl">
              Powered by{" "}
              <Link
                className="block text-green-500 underline-offset-8 hover:underline"
                href="https://spoonacular.com/food-api"
              >
                Spoonacular API
              </Link>
            </h3>
            <Image
              src="spoonacular-logo-b.svg"
              alt="spoonacular"
              width={250}
              height={250}
              className="w-28"
            />
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
