import { api } from "@/utils/api";
import { useSession } from "next-auth/react";

export function useFavoritesIds() {
  const { data: session } = useSession();
  const { data: favorites } = api.recipes.getAllFavoritesRecipes.useQuery(
    undefined,
    {
      enabled: session ? true : false,
    }
  );

  const favoriteRecipesIds = favorites?.favoriteRecipes.map(
    (recipe) => recipe.id
  );

  return favoriteRecipesIds;
}
