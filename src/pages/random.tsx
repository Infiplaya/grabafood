import { trpc } from "../utils/trpc";
import Image from "next/future/image";

const Random = () => {
  const randomRecipe = trpc.randomRecipe.getRandomRecipe.useQuery();

  const ingredients = randomRecipe.data?.recipes[0].extendedIngredients.map(
    (ingredient: any) => <li key={ingredient.id}>{ingredient.name.toLowerCase()}</li>
  );

  return (
    <>
      <main className="container mx-auto min-h-screen">
        <div className="mt-20 flex h-screen w-full flex-col items-center font-bold">
          <div className="flex w-full flex-col items-center bg-gray-300">
            <Image
              src={randomRecipe.data?.recipes[0].image}
              alt={`foodimg`}
              width={400}
              height={400}
              className={`rounded-md shadow-md`}
            />
            <h1 className="mt-5 text-center text-xl">
              {randomRecipe.data?.recipes[0].title}
            </h1>

            <div className="self-start p-5">
              <h2 className="mt-5">Ingredients</h2>
              <ul className="list-disc font-normal">{ingredients}</ul>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Random;
