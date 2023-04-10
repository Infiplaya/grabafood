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
        <section className="mt-12 px-6">
          <h1 className="max-w-md text-3xl font-bold">
            Having problems figuring out what to eat?
          </h1>
          <h2 className="mt-3 text-2xl font-bold">No worries. Just search.</h2>
          <Searchbar />
        </section>
        <div className="mt-6 flex w-full justify-center py-6">
          <Image
            priority={true}
            src="/hero.webp"
            alt="food img"
            width={600}
            height={800}
            className="h-80 w-full rounded-lg object-cover shadow-md"
          />
        </div>
        <section className="mt-12 flex flex-col items-center justify-center px-6">
          <div className="py-6 text-center">
            <h2 className="text-2xl font-semibold">Feeling lucky?</h2>
            <Link href={`/recipes/${getRandomNumber()}`}>
              <Button className="mt-3">Try Me!</Button>
            </Link>
          </div>
        </section>
        <section className="mt-12 w-full py-6 text-center">
          <h2 className="text-2xl font-semibold">
            Search through{" "}
            <Link
              href="/recipes"
              className="text-orange-500 underline-offset-8 hover:underline"
            >
              recipes
            </Link>
          </h2>
        </section>
        <section>
          <div className="mt-12 flex items-center justify-center gap-5 bg-green-600 px-6 py-12">
            <h3 className="line-clamp-4 w-1/3 text-xl font-semibold text-neutral-100">
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
