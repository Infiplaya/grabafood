import { RecipesData } from "@/types/complex-search";
import type { RandomRecipeData, Recipe } from "@/types/random-recipe";
import { RecipeByID } from "@/types/recipe-by-id";

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
  query: string | string[]
): Promise<RecipesData | undefined> {
  if (!process.env.SPOONACULAR_API_KEY) {
    return;
  }
  if (typeof query !== "string") {
    return;
  }
  const res = await fetch(
    `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.SPOONACULAR_API_KEY}&query=${query}&number=100`
  );
  return (await res.json()) as RecipesData;
}

export async function getRecipeById(
  id: string | string[]
): Promise<RecipeByID | undefined> {
  if (!process.env.SPOONACULAR_API_KEY) {
    return;
  }
  if (typeof id !== "string") {
    return;
  }
  const res = await fetch(
    `https://api.spoonacular.com/recipes/${id}/information?includeNutrition=false&apiKey=${process.env.SPOONACULAR_API_KEY}`
  );
  return (await res.json()) as RecipeByID;
}
