import { api } from "@/utils/api";
import { toast } from "./useToast";

export function useRemoveFromFavorites() {
  const removeFromFavoritesMutation =
    api.recipes.removeFromFavorites.useMutation({
      onSuccess: () => {
        toast({
          title: "Favorites",
          description: "You succesfully removed this recipe from favorites!",
        });
      },
      onError: () => {
        toast({
          variant: "destructive",
          title: "Favorites",
          description: "Something went wrong! Try again!",
        });
      },
    });

  return removeFromFavoritesMutation;
}
