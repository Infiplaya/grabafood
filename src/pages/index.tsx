import { Button } from "@/components/ui/Button";
import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { Searchbar } from "@/components/Searchbar";

function getRandomNumber() {
  return Math.ceil(Math.random() * 1000);
}

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Grab a Food</title>
        <meta name="description" content="Recipes application" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <section className="mt-24 px-6">
          <h1 className="max-w-md text-4xl font-bold">
            Having problems figuring out what to eat?
          </h1>
          <h2 className="mt-3 text-2xl font-bold">No worries. Just search.</h2>
          <Searchbar />
        </section>
        <div className="mt-12 flex w-full justify-center py-6">
          <Image
            priority={true}
            src="/hero.webp"
            alt="food img"
            width={600}
            height={800}
            decoding="async"
            className="h-80 w-3/4 rounded-lg object-cover shadow-md"
          />
        </div>
        <section className="mt-12 flex flex-col items-center justify-center px-6 py-12">
          <div className="py-6 text-center">
            <h2 className="text-3xl font-semibold">Feeling lucky?</h2>
            <Link href={`/recipes/${getRandomNumber()}`}>
              <Button className="mt-6 text-lg" size="lg">
                TRY ME!
              </Button>
            </Link>
          </div>
        </section>
        <section className="mt-12 w-full bg-gradient-to-r from-sky-500 via-blue-500 to-indigo-500 py-32">
          <div className="px-6">
            <h2 className="text-3xl font-semibold text-neutral-100">
              Search through{" "}
              <Link
                href="/recipes"
                className="text-orange-500 underline-offset-8 hover:underline"
              >
                recipes
              </Link>
            </h2>
            <p className="mt-3 text-left text-xl text-neutral-100">
              Find a recipe you will love. You can add it to your favorites too!
            </p>
          </div>
        </section>
        <section className="mt-12 bg-green-600  py-32">
          <div className="flex items-center justify-center px-6">
            <h3 className="text-2xl font-medium text-neutral-100">
              Powered by data from{" "}
              <Link
                className="underline-offset-8 hover:underline"
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
