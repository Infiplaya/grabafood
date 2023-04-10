import type { RandomRecipeData } from "@/types/random-recipe";

export async function getRandomRecipe(): Promise<RandomRecipeData | undefined> {
  if (!process.env.SPOONACULAR_API_KEY) {
    return;
  }
  const res = await fetch(
    `https://api.spoonacular.com/recipes/random?apiKey=${process.env.SPOONACULAR_API_KEY}`
  );
  return (await res.json()) as RandomRecipeData;
}

export async function getRecipes(
  query: string
): Promise<RandomRecipeData | undefined> {
  if (!process.env.SPOONACULAR_API_KEY) {
    return;
  }
  const res = await fetch(
    `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.SPOONACULAR_API_KEY}&query=${query}`
  );
  return (await res.json()) as RandomRecipeData;
}
