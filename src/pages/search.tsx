import { useRouter } from "next/router";
import { trpc } from "../utils/trpc";
import Image from "next/future/image";
import Link from "next/link";

const Search = () => {
  const router = useRouter();
  const query = router.query;
  const recipeQuery = Object.keys(query)[0];

  const getRecipes = trpc.recipe.getRecipes.useQuery({ name: recipeQuery });

  const data = getRecipes.data?.results;

  const recipes =
    data &&
    data.map((recipe: any) => (
      <Link href="/recipes/[id]" as={`recipes/${recipe.id}`} key={recipe.id}>
        <div className="duration-300r flex w-40 cursor-pointer flex-col items-center gap-3 rounded-lg p-3 lg:w-96">
          <Image
            src={recipe.image}
            alt="recipe"
            width={300}
            height={300}
            className={`rounded-lg shadow-md shadow-gray-500`}
          ></Image>
          <h2 className="text-base font-bold text-gray-900">{recipe.title}</h2>
        </div>
      </Link>
    ));

  return (
    <>
      <main className="container mx-auto flex flex-col items-center p-5">
        <div>
          <h1 className="text-xl font-bold">Results for search: {recipeQuery}</h1>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-5 md:grid-cols-3">
          {recipes}
        </div>
      </main>
    </>
  );
};

export default Search;
