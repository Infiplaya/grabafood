import { api } from "@/utils/api";
import { useRouter } from "next/router";

export function useRecipeById() {
  const router = useRouter();
  const { id } = router.query;
  const { data, isLoading, isError } = api.recipes.getRecipeById.useQuery({
    id,
  });

  return { data, isLoading, isError };
}
