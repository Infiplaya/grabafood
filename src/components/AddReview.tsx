import { useAddReview } from "@/hooks/useReviews";
import { Star } from "lucide-react";
import { type FormEvent, useState } from "react";
import { Button } from "./ui/Button";

export function AddReview({ recipeId }: { recipeId: number }) {
  const [description, setDescription] = useState("");
  const [stars, setStars] = useState(0);

  const addReviewMutation = useAddReview();

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
      <h3>New Review</h3>
      <form onSubmit={handleAddReview}>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        {descriptionErr ? (
          <p className="my-3 text-sm font-medium text-red-500">
            {descriptionErr}
          </p>
        ) : null}

        <div>
          <div className="flex gap-2 space-x-3">
            {Array.from({ length: 5 }).map((_, index) => (
              <Star
                key={index}
                onClick={() => setStars(index + 1)}
                className={stars > index ? "fill-black" : "fill-none"}
              />
            ))}
          </div>
          {starsErr ? (
            <p className="my-3 text-sm font-medium text-red-500">{starsErr}</p>
          ) : null}
        </div>

        <Button type="submit">Add Review</Button>
      </form>
    </div>
  );
}
