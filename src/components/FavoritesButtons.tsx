import { useFavoritesIds } from "@/hooks/useFavoritesIds";
import { StarIcon } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Spinner from "@/components/ui/Spinner";

export default function FavoritesButtons({
  id,
  addToFavorites,
  removeFromFavorites,
  removeLoading,
  addLoading,
}: {
  id: number;
  addToFavorites: () => void;
  removeFromFavorites: (id: number) => void;
  removeLoading: boolean;
  addLoading: boolean;
}) {
  const favoriteRecipesIds = useFavoritesIds();
  return (
    <>
      {favoriteRecipesIds?.includes(id) ? (
        <Button
          variant={"outline"}
          onClick={() => removeFromFavorites(id)}
          disabled={removeLoading}
          size="sm"
        >
          {removeLoading ? (
            <Spinner />
          ) : (
            <StarIcon className="fill-yellow-400 stroke-1" />
          )}
        </Button>
      ) : (
        <Button
          onClick={() => addToFavorites()}
          disabled={addLoading}
          size="sm"
          variant={"outline"}
        >
          {addLoading ? (
            <Spinner />
          ) : (
            <StarIcon className="fill-white stroke-1" />
          )}
        </Button>
      )}
    </>
  );
}
