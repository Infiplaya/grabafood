import { useRouter } from "next/router";
import { trpc } from "../../utils/trpc";
import Image from "next/future/image";
import Link from "next/link";
import Head from "next/head";

const Recipe = () => {
  const router = useRouter();
  const query = router.query;

  const recipesById = trpc.recipeById.getRecipeById.useQuery({ id: query.id });

  return (
    <>
      <main className="container mx-auto p-5">
        <section className="flex w-full flex-col items-center px-10">
          <Image
            src={recipesById.data?.image}
            alt="dish-image"
            height={400}
            width={400}
            priority={true}
            className={`rounded-lg shadow-lg`}
          ></Image>
          <h1 className="mt-5 text-3xl font-bold text-orange-500 sm:text-4xl">
            {recipesById.data?.title}
          </h1>

          <h2 className="mt-10 self-start text-xl font-semibold text-gray-800 sm:text-3xl">
            Ingredients
          </h2>
          <ul className="mt-3 self-start">
            {recipesById.data?.extendedIngredients.map((ingredient: any) => (
              <li
                key={ingredient.id}
                className="list-disc text-base text-gray-700"
              >
                {ingredient.name}
              </li>
            ))}
          </ul>
        </section>
      </main>
    </>
  );
};

export default Recipe;
