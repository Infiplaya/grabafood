import { api } from "@/utils/api";

export function useRemoveFromFavorites() {
  const removeFromFavoritesMutation =
    api.recipes.removeFromFavorites.useMutation();

  return removeFromFavoritesMutation;
}
