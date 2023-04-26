import { Searchbar } from "@/components/Searchbar";
import CardSkeleton from "@/components/ui/CardSkeleton";
import { Layout } from "@/components/ui/Layout";
import { type Result, type RecipesData } from "@/types/complex-search";
import { api } from "@/utils/api";
import { getRecipes } from "@/utils/spoonacular";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { z } from "zod";

export async function getStaticProps() {
  const data = await getRecipes();

  if (!data) throw new Error("Something went wrong");

  return {
    props: {
      recipes: data.results,
    },
  };
}

const querySchema = z.string().min(1).optional();

export default function Recipes({
  recipes,
}: {
  recipes: RecipesData["results"];
}) {
  const router = useRouter();
  const { q } = router.query;
  const safeQuery = querySchema.parse(q);

  const { data, isFetched, isLoading, isError } =
    api.recipes.getRecipes.useQuery(
      { query: safeQuery },
      {
        enabled: q !== undefined,
      }
    );

  if (q !== undefined && isLoading) {
    return (
      <Layout>
        <Searchbar />
        <div className="my-12 flex grid-cols-4 flex-col gap-10 lg:grid">
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
        </div>
      </Layout>
    );
  }

  if (isError || data?.results.length === 0) {
    return (
      <Layout>
        <Searchbar />
        <p>No results matched your query! Try different one!</p>
      </Layout>
    );
  }
  return (
    <Layout>
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
    </Layout>
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
