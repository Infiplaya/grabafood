import { Button } from "@/components/ui/Button";
import { useAddToFavorites } from "@/hooks/useAddToFavorites";
import { useRemoveFromFavorites } from "@/hooks/useDeleteFromFavorites";
import { useFavorites } from "@/hooks/useFavorites";
import { useRecipes } from "@/hooks/useRecipes";
import Image from "next/image";

export default function RecipePage() {
  const { isLoading, isError, data } = useRecipes();

  const addToFavoritesMutation = useAddToFavorites();

  const removeFromFavoritesMutation = useRemoveFromFavorites();

  const favoriteRecipesIds = useFavorites();

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
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Something went wrong</div>;
  }

  if (data) {
    return (
      <div>
        <h1 className="text-4xl font-bold">{data?.title}</h1>
        {<Image src={data.image} alt="" width={556} height={370} />}
        <p>{data?.dishTypes}</p>
        <p dangerouslySetInnerHTML={{ __html: data?.instructions }}></p>
        <ul>
          {data?.extendedIngredients.map((item, idx) => (
            <li key={idx}>{item.name}</li>
          ))}
        </ul>
        {favoriteRecipesIds?.includes(data.id) ? (
          <Button
            onClick={() => removeFromFavorites(data.id)}
            disabled={removeFromFavoritesMutation.isLoading}
          >
            Delete From Favorites
          </Button>
        ) : (
          <Button
            onClick={() => addToFavorites()}
            disabled={addToFavoritesMutation.isLoading}
          >
            ADD TO FAVORITES
          </Button>
        )}
      </div>
    );
  }

  return null;
}
