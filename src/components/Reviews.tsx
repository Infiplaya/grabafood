import { useReviews } from "@/hooks/useReviews";
import { Star, StarIcon } from "lucide-react";
import { useSession } from "next-auth/react";
import { UserAvatar } from "./ui/Avatar";
import { ReviewDialog } from "./ReviewDialog";
import { ProgressBar } from "./ui/Progress";

export function Reviews({ recipeId }: { recipeId: number }) {
  const { data } = useReviews(recipeId);
  const { data: session } = useSession();
  return (
    <div className="mt-12 grid lg:mt-16 lg:grid-cols-2 lg:gap-5">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold">Reviews of this recipe</h2>
        <div className="mt-2 flex items-center gap-1">
          {Array.from({ length: 5 }).map((_, index) => (
            <Star
              key={index}
              className={2 > index ? "h-6 w-6 fill-neutral-800" : "fill-none"}
            />
          ))}
          <p className="ml-3 text-sm text-neutral-600">Based on 126 reviews</p>
        </div>

        <div className="mt-6 space-y-2">
          {Array.from({ length: 5 })
            .map((_, index) => (
              <div key={index} className="flex items-center gap-3">
                <p className="flex w-9 items-center justify-between">
                  <span>{index + 1}</span> <StarIcon className="h-5 w-5" />
                </p>
                <ProgressBar />
                <p>63%</p>
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
              <UserAvatar user={session!.user} />
              <div>
                <p className="text-sm font-bold">{r.user.name}</p>
                <div className="flex">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star
                      key={index}
                      className={
                        r.stars > index
                          ? "h-5 w-5 fill-black"
                          : "h-5 w-5 fill-none"
                      }
                    />
                  ))}
                </div>
              </div>
            </div>
            <p className="mt-3 text-neutral-600">{r.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
