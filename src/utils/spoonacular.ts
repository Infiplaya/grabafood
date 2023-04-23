import { ImageType } from "@/types/complex-search";
import { type RecipeByID } from "@/types/recipe-by-id";
import { z } from "zod";

export const imageTypeSchema = z.nativeEnum(ImageType);

export const resultSchema = z.object({
  id: z.number(),
  title: z.string(),
  image: z.string(),
  imageType: imageTypeSchema,
});

export const recipesDataSchema = z.object({
  results: z.array(resultSchema),
  offset: z.number(),
  number: z.number(),
  totalResults: z.number(),
});

export async function getRecipes(query?: string | undefined) {
  if (!process.env.SPOONACULAR_API_KEY) {
    return;
  }

  let res;

  if (!query) {
    res = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.SPOONACULAR_API_KEY}&number=100`
    );
  } else {
    res = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.SPOONACULAR_API_KEY}&query=${query}&number=100`
    );
  }

  return recipesDataSchema.parse(await res.json());
}

export async function getRecipeById(
  id: string
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
