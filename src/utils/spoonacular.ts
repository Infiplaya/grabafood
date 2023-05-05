import { ImageType } from "@/types/complex-search";
import { z } from "zod";

export const imageTypeSchema = z.nativeEnum(ImageType);

export const recipeSchema = z.object({
  id: z.number(),
  title: z.string(),
  image: z.string(),
  imageType: imageTypeSchema,
});

export const recipesDataSchema = z.array(recipeSchema);

export const randomRecipeDataSchema = z.object({});

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

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { results } = await res.json();

  return recipesDataSchema.parse(results);
}

export const recipeByIdSchema = z.object({
  id: z.number(),
  title: z.string(),
  dishTypes: z.array(z.string()),
  image: z.string(),
  extendedIngredients: z.array(
    z.object({
      name: z.string(),
    })
  ),
  instructions: z.string(),
});

export async function getRecipeById(id: string) {
  if (!process.env.SPOONACULAR_API_KEY) {
    return;
  }
  const res = await fetch(
    `https://api.spoonacular.com/recipes/${id}/information?includeNutrition=false&apiKey=${process.env.SPOONACULAR_API_KEY}`
  );
  return recipeByIdSchema.parse(await res.json());
}
