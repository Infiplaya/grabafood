import FavoritesButtons from "@/components/FavoritesButtons";
import CardSkeleton from "@/components/ui/CardSkeleton";
import DetailsSkeleton from "@/components/ui/DetailsSkeleton";
import { useAddToFavorites } from "@/hooks/useAddToFavorites";
import { useRemoveFromFavorites } from "@/hooks/useDeleteFromFavorites";
import { useRecipeById } from "@/hooks/useRecipes";
import Image from "next/image";

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
      <main className="my-12 px-6 lg:mx-auto lg:max-w-7xl">
        <div className="flex w-full justify-center">
          <DetailsSkeleton />
        </div>
      </main>
    );
  }

  if (isError) {
    return (
      <main className="my-12 px-6 lg:mx-auto lg:max-w-7xl">
        <h1 className="mb-6 text-4xl font-bold">Something went wrong...</h1>
      </main>
    );
  }

  if (data) {
    return (
      <main className="my-12 px-6 lg:mx-auto lg:max-w-7xl">
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
          <p
            dangerouslySetInnerHTML={{ __html: data?.instructions }}
            className="max-w-2xl"
          ></p>
        </div>
      </main>
    );
  }

  return null;
}
