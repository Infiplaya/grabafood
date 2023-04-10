import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { getRecipeById, getRecipes } from "@/utils/spoonacular";
import { TRPCError } from "@trpc/server";
import { z } from "zod";

export const recipeRouter = createTRPCRouter({
  getRecipes: publicProcedure
    .input(
      z.object({
        query: z.union([z.string(), z.array(z.string()), z.undefined()]),
      })
    )
    .query(async ({ input }) => {
      if (!input.query) {
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "An unexpected error occurred, please try again later.",
        });
      }
      return await getRecipes(input.query);
    }),
  getRecipeById: publicProcedure
    .input(
      z.object({
        id: z.union([z.string(), z.array(z.string()), z.undefined()]),
      })
    )
    .query(async ({ input }) => {
      if (!input.id) {
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "An unexpected error occurred, please try again later.",
        });
      }
      return await getRecipeById(input.id);
    }),
});
