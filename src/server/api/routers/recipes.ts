import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "@/server/api/trpc";
import { prisma } from "@/server/db";
import { getRecipeById, getRecipes } from "@/utils/spoonacular";
import { TRPCError } from "@trpc/server";
import { z } from "zod";

const recipeSchema = z.object({
  recipeId: z.number(),
  name: z.string(),
});

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

  addToFavorites: protectedProcedure
    .input(recipeSchema)
    .mutation(async ({ input, ctx }) => {
      return await prisma.favoriteRecipe.create({
        data: {
          recipeId: input.recipeId,
          name: input.name,
          users: {
            connect: {
              id: ctx.session.user.id,
            },
          },
        },
      });
    }),

  removeFromFavorites: protectedProcedure
    .input(
      z.object({
        id: z.string(),
      })
    )
    .mutation(async ({ input }) => {
      return await prisma.favoriteRecipe.delete({
        where: {
          id: input.id,
        },
      });
    }),

  getAllFavoritesRecipes: protectedProcedure.query(async ({ ctx }) => {
    return await prisma.user.findUnique({
      where: {
        id: ctx.session.user.id,
      },
      include: {
        favoriteRecipes: true,
      },
    });
  }),
});
