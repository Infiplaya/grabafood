import { api } from "@/utils/api";
import { useToast } from "./useToast";

export function useAddToFavorites() {
  const { toast } = useToast();
  const addToFavoritesMutation = api.recipes.addToFavorites.useMutation({
    onSuccess: () => {
      toast({
        title: "Favorites",
        description: "You succesfully added new favorite!",
      });
    },
    onError: () => {
      toast({
        variant: "destructive",
        title: "Favorites",
        description: "Something went wrong! Make sure you are logged in.",
      });
    },
  });

  return addToFavoritesMutation;
}
