import { Searchbar } from "@/components/Searchbar";
import Skeleton from "@/components/ui/Skeleton";
import { type Result, type RecipesData } from "@/types/complex-search";
import { api } from "@/utils/api";
import { getRecipes } from "@/utils/spoonacular";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

export async function getStaticProps() {
  const data = await getRecipes("");
  return {
    props: {
      recipes: data?.results,
    },
  };
}

export default function Recipes({
  recipes,
}: {
  recipes: RecipesData["results"];
}) {
  const router = useRouter();
  const { q } = router.query;
  console.log(q);
  const { data, isFetched, isLoading } = api.recipes.getRecipes.useQuery(
    { query: q },
    {
      enabled: q !== undefined,
    }
  );

  if (q !== undefined && isLoading) {
    return (
      <main className="mt-12 px-6 lg:mx-auto lg:max-w-7xl">
        <Searchbar />
        <div className="my-12 flex grid-cols-4 flex-col gap-10 lg:grid">
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </div>
      </main>
    );
  }
  return (
    <main className="mt-12 px-6 lg:mx-auto lg:max-w-7xl">
      <Searchbar />
      <div className="my-12 flex grid-cols-4 flex-col gap-10 lg:grid">
        {isFetched
          ? data?.results.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))
          : recipes.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
      </div>
    </main>
  );
}

function RecipeCard({ recipe }: { recipe: Result }) {
  return (
    <Link
      key={recipe.id}
      href={`/recipes/${recipe.id}`}
      className="rounded-lg border shadow-md transition-all hover:bg-neutral-200"
    >
      <div className="flex flex-col items-center py-10">
        <h3 className="line-clamp-2 max-w-sm px-6 text-lg font-semibold">
          {recipe.title}
        </h3>
        <Image
          src={recipe.image}
          alt={recipe.title}
          width={250}
          height={250}
          className="mt-3"
        />
      </div>
    </Link>
  );
}
