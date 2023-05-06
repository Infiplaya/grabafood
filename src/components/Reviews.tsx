import { useReviews } from "@/hooks/useReviews";
import { Star, StarIcon } from "lucide-react";
import { UserAvatar } from "./ui/Avatar";
import { ReviewDialog } from "./ReviewDialog";
import { ProgressBar } from "./ui/Progress";
import { api } from "@/utils/api";

export function Reviews({ recipeId }: { recipeId: number }) {
  const { data } = useReviews(recipeId);

  const { data: rating } = api.reviews.getAverageRating.useQuery({
    id: recipeId,
  });


  function getStarsRating(starNumber: number) {
    const stars = data
      ?.map((r) => r.stars)
      .filter((star) => star === starNumber);

    if (stars?.length === 0) {
      return 0;
    }

    if (stars && data) {
      const percentage = Math.floor((stars.length / data.length) * 100);
      return percentage;
    }
    return 0;
  }

  return (
    <div className="mt-12 grid lg:mt-16 lg:grid-cols-2 lg:gap-5">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-slate-900">Reviews</h2>
        <div className="mt-2 flex items-center gap-1">
          {rating?._avg.stars &&
            Array.from({ length: 5 }).map((_, index) => (
              <Star
                key={index}
                className={
                  rating._avg.stars! > index + 0.5
                    ? "h-6 w-6 fill-yellow-400"
                    : "fill-none"
                }
              />
            ))}
          <p className="ml-3 text-sm text-neutral-600">
            Based on {data?.length} review(s)
          </p>
        </div>

        <div className="mt-6 space-y-2">
          {Array.from({ length: 5 })
            .map((_, index) => (
              <div key={index} className="flex items-center gap-3">
                <p className="flex w-10">
                  <span className="w-5">{index + 1}</span>{" "}
                  <StarIcon className="h-5 w-5 fill-yellow-400" />
                </p>
                <ProgressBar rating={getStarsRating(index + 1)} />
                <p>{getStarsRating(index + 1)}%</p>
              </div>
            ))
            .reverse()}
        </div>
        <div className="mt-9">
          <h3 className="text-xl font-semibold">Share your review!</h3>
          <p className="mt-1 text-sm text-neutral-700">
            Tell us what u think about this recipe.
          </p>
          <ReviewDialog recipeId={recipeId} />
        </div>
      </div>
      <ul className="space-y-6 divide-y divide-neutral-200">
        {data?.map((r) => (
          <li key={r.id} className="py-6">
            <div className="flex items-center gap-3">
              <UserAvatar user={r.user} />
              <div>
                <p className="text-sm font-bold">{r.user.name}</p>
                <div className="mt-1 flex">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star
                      key={index}
                      className={
                        r.stars > index
                          ? "h-5 w-5 fill-yellow-400"
                          : "h-5 w-5 fill-none"
                      }
                    />
                  ))}
                </div>
              </div>
            </div>
            <p className="mt-6 text-neutral-600">{r.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
