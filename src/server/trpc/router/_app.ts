// src/server/trpc/router/_app.ts
import { router } from "../trpc";
import { authRouter } from "./auth";
import { idRouter, randomRouter, recipesRouter } from "./recipes";

export const appRouter = router({
  randomRecipe: randomRouter,
  recipe: recipesRouter,
  recipeById: idRouter,
  auth: authRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
