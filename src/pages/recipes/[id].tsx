import { Button } from "@/components/ui/Button";
import { api } from "@/utils/api";
import { useRouter } from "next/router";

export default function RecipePage() {
  const router = useRouter();
  const { id } = router.query;
  const { data, isLoading, isError } = api.recipes.getRecipeById.useQuery({
    id,
  });

  const addToFavoritesMutation = api.recipes.addToFavorites.useMutation();

  const { data: favorites } = api.recipes.getAllFavoritesRecipes.useQuery();

  function addToFavorites() {
    if (!data) {
      return;
    }
    addToFavoritesMutation.mutate({
      recipeId: data.id,
      name: data.title,
    });
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Something went wrong</div>;
  }

  return (
    <div>
      <h1 className="text-4xl font-bold">{data?.title}</h1>
      {favorites?.favoriteRecipes?.map(
        (recipe) => recipe.recipeId === data?.id
      ) ? (
        <Button>Delete From Favorites</Button>
      ) : (
        <Button
          onClick={() => addToFavorites()}
          disabled={addToFavoritesMutation.isLoading}
        >
          ADD TO FAVORITES
        </Button>
      )}

      <div>
        {addToFavoritesMutation.isSuccess ? <p>Cool!</p> : <p>Lool!</p>}
      </div>
    </div>
  );
}
