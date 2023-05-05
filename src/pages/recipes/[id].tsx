import FavoritesButtons from "@/components/FavoritesButtons";
import { Button } from "@/components/ui/Button";
import DetailsSkeleton from "@/components/ui/DetailsSkeleton";
import { Layout } from "@/components/ui/Layout";
import { useAddToFavorites } from "@/hooks/useAddToFavorites";
import { useRemoveFromFavorites } from "@/hooks/useDeleteFromFavorites";
import { useRecipeById } from "@/hooks/useRecipes";
import Image from "next/image";
import Link from "next/link";

export default function RecipePage() {
  const { isLoading, isError, data } = useRecipeById();

  const addToFavoritesMutation = useAddToFavorites();

  const removeFromFavoritesMutation = useRemoveFromFavorites();

  function addToFavorites() {
    if (!data) {
      return;
    }
    addToFavoritesMutation.mutate({
      recipeId: data.id,
      name: data.title,
    });
  }

  function removeFromFavorites(id: number) {
    removeFromFavoritesMutation.mutate({ recipeId: id });
  }

  if (isLoading) {
    return (
      <Layout>
        <div className="flex w-full justify-center">
          <DetailsSkeleton />
        </div>
      </Layout>
    );
  }

  if (isError) {
    return (
      <Layout>
        <h1 className="mb-6 text-4xl font-bold">Something went wrong...</h1>
        <h2 className="text-2xl font-medium">
          Seems like this recipe doesn&apos;t exist!
        </h2>
        <div className="mt-3">
          <Link
            href="/recipes"
            className="mr-3 rounded-md bg-orange-600 px-3 py-1 text-white transition-all"
          >
            Go to recipes
          </Link>
          <Link
            href="/recipes"
            className="rounded-md bg-orange-600 px-3 py-1 text-white transition-all"
          >
            Go to homepage
          </Link>
        </div>
      </Layout>
    );
  }

  if (data) {
    return (
      <Layout>
        <div className="flex items-baseline justify-center gap-5">
          <h1 className="mb-6 text-4xl font-bold">{data?.title}</h1>
          <FavoritesButtons
            id={data?.id}
            addToFavorites={addToFavorites}
            removeFromFavorites={removeFromFavorites}
            addLoading={addToFavoritesMutation.isLoading}
            removeLoading={removeFromFavoritesMutation.isLoading}
          />
        </div>
        <div className="flex w-full justify-center">
          <Image
            src={data.image}
            alt=""
            width={556}
            height={370}
            className="rounded-lg shadow-md"
          />
        </div>
        <div className="mt-6 flex flex-wrap gap-3 lg:justify-center">
          {data?.dishTypes.map((dishType) => (
            <p
              key={dishType}
              className="inline-flex rounded-lg border border-neutral-300 px-2 py-1 text-sm font-semibold uppercase"
            >
              {dishType}
            </p>
          ))}
        </div>
        <ul className="mt-12 list-disc px-6">
          <h3 className="-ml-6 mb-3 text-2xl font-bold">Ingredients</h3>
          {data?.extendedIngredients.map((item, idx) => (
            <li key={idx}>{item.name}</li>
          ))}
        </ul>
        <div className="mt-12">
          <h2 className="mb-3 text-2xl font-bold">Recipe</h2>
          {data.instructions ? (
            <p
              dangerouslySetInnerHTML={{ __html: data?.instructions }}
              className="max-w-2xl"
            ></p>
          ) : (
            "Unfortunately no recipe was provided"
          )}
        </div>
      </Layout>
    );
  }

  return null;
}
