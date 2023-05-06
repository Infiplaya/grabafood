import { useAddReview } from "@/hooks/useReviews";
import { cn } from "@/utils/cnHelper";
import { Star } from "lucide-react";
import { type FormEvent, useState } from "react";
import { Button } from "./ui/Button";

export function AddReview({
  recipeId,
  closeDialog,
}: {
  recipeId: number;
  closeDialog: () => void;
}) {
  const [description, setDescription] = useState("");
  const [stars, setStars] = useState(0);
  const [hoveredStars, setHoveredStars] = useState(0);

  const addReviewMutation = useAddReview(closeDialog);

  const descriptionErr =
    addReviewMutation.error?.data?.zodError?.fieldErrors["description"];
  const starsErr =
    addReviewMutation.error?.data?.zodError?.fieldErrors["stars"];
  function handleAddReview(e: FormEvent) {
    e.preventDefault();

    addReviewMutation.mutate({
      recipeId,
      description,
      stars,
    });
  }
  return (
    <div>
      <form onSubmit={handleAddReview}>
        <label htmlFor="description" className="text-lg font-semibold">
          Share your thoughts
        </label>
        <textarea
          value={description}
          id="description"
          onChange={(e) => setDescription(e.target.value)}
          className="mt-2 h-36 w-full resize-none rounded-md p-3 outline-0 ring-1 ring-neutral-300"
          autoFocus={true}
        ></textarea>
        {descriptionErr ? (
          <p className="my-3 text-sm font-medium text-red-500">
            {descriptionErr}
          </p>
        ) : null}

        <div className="my-3 space-y-2">
          <label className="font-semibold">Rating</label>
          <div className="group flex gap-2">
            {Array.from({ length: 5 }).map((_, index) => (
              <Star
                key={index}
                onClick={() => setStars(index + 1)}
                onMouseOver={() => setHoveredStars(index + 1)}
                className={cn(
                  stars > index ? "fill-yellow-400" : "fill-none",
                  hoveredStars > index ? "group-hover:fill-yellow-400" : "",
                  "icon cursor-pointer transition-colors"
                )}
              />
            ))}
          </div>
          {starsErr ? (
            <p className="my-3 text-sm font-medium text-red-500">{starsErr}</p>
          ) : null}
        </div>
        <div className="flex w-full justify-end">
          <Button type="submit" className="ml-auto">
            Add Review
          </Button>
        </div>
      </form>
    </div>
  );
}
