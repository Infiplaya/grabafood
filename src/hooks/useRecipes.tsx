import { api } from "@/utils/api";
import { useRouter } from "next/router";

export function useRecipeById() {
  const router = useRouter();
  const { id } = router.query;
  if (typeof id !== "string") throw new Error("Id must be a string");
  const { data, isLoading, isError } = api.recipes.getRecipeById.useQuery({
    id,
  });

  return { data, isLoading, isError };
}
