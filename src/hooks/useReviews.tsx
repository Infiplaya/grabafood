import { api } from "@/utils/api";
import { useToast } from "./useToast";

export function useReviews(id: number) {
  const { data, isError, isLoading } = api.reviews.getReviewsForRecipe.useQuery(
    { id }
  );

  return { data, isLoading, isError };
}


export function useAddReview(closeDialog: () => void) {
  const { toast } = useToast();
  const addReviewMutation = api.reviews.addReview.useMutation({
    onSuccess: () => {
      toast({
        title: "Reviews",
        description: "You succesfully added new review!",
      });
      closeDialog();
    },
    onError: () => {
      toast({
        variant: "destructive",
        title: "Favorites",
        description: "Something went wrong! Try again!",
      });
    },
  });

  return addReviewMutation;
}
