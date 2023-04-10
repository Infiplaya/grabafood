import { type RecipesData } from "@/types/complex-search";
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
  const { data, isFetched } = api.recipes.getRecipes.useQuery(
    { query: q },
    {
      enabled: q !== undefined,
    }
  );
  return (
    <div>
      {isFetched
        ? data?.results.map((recipe) => (
            <Link key={recipe.id} href={`/recipes/${recipe.id}`}>
              <div>
                <h3>{recipe.title}</h3>
                <Image
                  src={recipe.image}
                  alt={recipe.title}
                  width={250}
                  height={250}
                />
              </div>
            </Link>
          ))
        : recipes.map((recipe) => (
            <Link key={recipe.id} href={`/recipes/${recipe.id}`}>
              <div>
                <h3>{recipe.title}</h3>
                <Image
                  src={recipe.image}
                  alt={recipe.title}
                  width={250}
                  height={250}
                />
              </div>
            </Link>
          ))}
    </div>
  );
}
