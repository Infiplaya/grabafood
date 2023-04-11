import { api } from "@/utils/api";

export function useAddToFavorites() {
  const addToFavoritesMutation = api.recipes.addToFavorites.useMutation();

  return addToFavoritesMutation;
}
