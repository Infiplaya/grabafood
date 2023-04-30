import { Button } from "@/components/ui/Button";
import { Layout } from "@/components/ui/Layout";
import { useRemoveFromFavorites } from "@/hooks/useDeleteFromFavorites";
import { api } from "@/utils/api";
import { signIn, useSession } from "next-auth/react";
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
    <Layout>Loading...</Layout>;
  }

  if (isError) {
    <Layout>Something went wrong...</Layout>;
  }

  return (
    <Layout>
      {session ? (
        <div className="mb-12 min-h-[800px] space-y-5 rounded-lg bg-white px-6 py-12 shadow-md">
          {data?.favoriteRecipes.map((recipe) => (
            <div
              className="flex items-center justify-between gap-5 border-b-2 border-neutral-100 px-10 py-2"
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
        <div className="-mt-32 flex min-h-screen w-full items-center justify-center">
          <p className="flex items-center text-xl font-medium lg:text-4xl">
            <Button
              className="mr-3 py-6 text-xl lg:text-4xl"
              onClick={() => void signIn()}
            >
              Sign In{" "}
            </Button>
            to see your favorites!
          </p>
        </div>
      )}
    </Layout>
  );
}
