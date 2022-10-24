import { router, publicProcedure } from "../trpc";
import { z } from "zod";

export const randomRouter = router({
    getRandomRecipe: publicProcedure
      .query(async () => {
        const randomRecipe = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.NEXT_PUBLIC_KEY}`).then(res =>
        res.json());
        return randomRecipe     
      }),
  });

export const recipesRouter = router({
    getRecipes: publicProcedure
      .input(z.object({ name: z.string().optional()}))  
      .query(async ({ input }) => {
        const recipes = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.NEXT_PUBLIC_KEY}&query=${input.name}`).then(res =>
        res.json());
        return recipes     
      }),
  });


  export const idRouter = router({
    getRecipeById: publicProcedure
      .input(z.object( {id: z.any()}))  
      .query(async ({ input }) => {
        const recipe = await fetch(`https://api.spoonacular.com/recipes/${input.id}/information?apiKey=${process.env.NEXT_PUBLIC_KEY}`).then(res =>
        res.json());
        return recipe     
      }),
  });
