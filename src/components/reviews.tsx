import { useReviews } from "@/hooks/useReviews";
import { AddReview } from "./AddReview";

export function Reviews({ recipeId }: { recipeId: number }) {
  const { data } = useReviews(recipeId);
  return (
    <div className="mt-12">
      <h1>Reviews</h1>
      <AddReview recipeId={recipeId} />
      <ul>
        {data?.map((r) => (
          <li key={r.id}>
            <div>
              {r.user.name}
              {r.stars}
              {r.description}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
