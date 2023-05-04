import { api } from "@/utils/api";
import { useRouter } from "next/router";
import { z } from "zod";

const querySchema = z.string().min(1).optional();

export function useRecipeById() {
  const router = useRouter();
  const { id } = router.query;
  const safeId = querySchema.parse(id);
  const { data, isLoading, isError } = api.recipes.getRecipeById.useQuery(
    {
      id: safeId,
    },
    {
      enabled: id !== "undefined",
    }
  );

  console.log("data", data);

  return { data, isLoading, isError };
}
