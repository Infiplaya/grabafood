import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { getRandomRecipe, getRecipes } from "@/utils/spoonacular";
import { z } from "zod";

export const recipeRouter = createTRPCRouter({
  getRandomRecipe: publicProcedure.query(async () => {
    return await getRandomRecipe();
  }),
  getRecipes: publicProcedure
    .input(z.object({ query: z.string() }))
    .query(async ({ input }) => {
      return await getRecipes(input.query);
    }),
});
