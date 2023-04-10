import { api } from "@/utils/api";
import { useRouter } from "next/router";

export default function RecipePage() {
  const router = useRouter();
  const { id } = router.query;
  const { data } = api.recipes.getRecipeById.useQuery({ id });

  return <div>{JSON.stringify(data)}</div>;
}
