import { Button } from "@/components/ui/Button";
import { useRemoveFromFavorites } from "@/hooks/useDeleteFromFavorites";
import { api } from "@/utils/api";
import { useSession } from "next-auth/react";
import Link from "next/link";

export default function Favorites() {
  const { data: session } = useSession();
  const { data, isLoading, isError } =
    api.recipes.getAllFavoritesRecipes.useQuery();

  const removeFromFavoritesMutation = useRemoveFromFavorites();

  function removeFromFavorites(id: number) {
    removeFromFavoritesMutation.mutate({ recipeId: id });
  }

  if (isLoading) {
    <main>Loading...</main>;
  }

  if (isError) {
    <main>Something went wrong...</main>;
  }
  if (session) {
    return (
      <main className="mx-auto mt-12 min-h-screen lg:max-w-7xl">
        {data ? (
          <div className="space-y-5">
            {data.favoriteRecipes.map((recipe) => (
              <div
                className="flex items-center justify-between gap-5 px-10"
                key={recipe.id}
              >
                <Link
                  href={`/recipes/${recipe.id}`}
                  className="rounded-lg p-3 transition-all hover:bg-neutral-200"
                >
                  <p>{recipe.name}</p>
                </Link>

                <Button
                  variant="destructive"
                  size={"sm"}
                  onClick={() => removeFromFavorites(recipe.id)}
                  disabled={removeFromFavoritesMutation.isLoading}
                >
                  Delete
                </Button>
              </div>
            ))}
          </div>
        ) : (
          <p>No recipes in your favorites</p>
        )}
      </main>
    );
  }

  return <div>Log in to see your favorites</div>;
}
