import { Button } from "@/components/ui/Button";
import { api } from "@/utils/api";
import { useSession } from "next-auth/react";
import Link from "next/link";

export default function Favorites() {
  const { data: session } = useSession();
  const { data, isLoading, isError } =
    api.recipes.getAllFavoritesRecipes.useQuery();

  const deleteMutation = api.recipes.removeFromFavorites.useMutation();

  function removeFromFavorites(id: string) {
    deleteMutation.mutate({ id });
  }

  if (isLoading) {
    <div>Loading...</div>;
  }

  if (isError) {
    <div>Something went wrong...</div>;
  }
  if (session) {
    return (
      <div>
        {data ? (
          <div>
            {data.favoriteRecipes.map((recipe) => (
              <div
                className="flex items-center justify-between px-10"
                key={recipe.id}
              >
                <Link
                  href={`/recipes/${recipe.recipeId}`}
                  className="rounded- p-3 transition-all hover:bg-neutral-200"
                >
                  <p>{recipe.name}</p>
                </Link>

                <Button
                  variant="destructive"
                  size={"sm"}
                  onClick={() => removeFromFavorites(recipe.id)}
                  disabled={deleteMutation.isLoading}
                >
                  Delete
                </Button>
              </div>
            ))}
          </div>
        ) : (
          <p>No recipes in your favorites</p>
        )}
      </div>
    );
  }

  return <div>Log in to see your favorites</div>;
}
