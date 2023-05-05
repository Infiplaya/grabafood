import Head from "next/head";
import Image from "next/image";
import Hero from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { Spoonacular } from "@/components/sections/Spoonacular";

const Home = () => {
  return (
    <>
      <Head>
        <title>Grab a Food</title>
        <meta name="description" content="Recipes application" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Hero />
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

        <Features />
        <Spoonacular />
      </main>
    </>
  );
};

export default Home;
