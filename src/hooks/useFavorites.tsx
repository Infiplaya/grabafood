import { api } from "@/utils/api";

export function useFavorites() {
  const { data: favorites } = api.recipes.getAllFavoritesRecipes.useQuery();

  const favoriteRecipesIds = favorites?.favoriteRecipes.map(
    (recipe) => recipe.id
  );


  return favoriteRecipesIds;
}
