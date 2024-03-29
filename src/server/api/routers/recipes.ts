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
        query: z.string().optional(),
      })
    )
    .query(async ({ input }) => {
      return getRecipes(input.query);
    }),
  getRecipeById: publicProcedure
    .input(
      z.object({
        id: z.string().optional(),
      })
    )
    .query(async ({ input }) => {
      if (!input.id) {
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "An unexpected error occurred, please try again later.",
        });
      }
      return getRecipeById(input.id);
    }),

  addToFavorites: protectedProcedure
    .input(recipeSchema)
    .mutation(async ({ input, ctx }) => {
      const recipe = await prisma.favoriteRecipe.findUnique({
        where: {
          id: input.recipeId,
        },
      });

      if (!recipe) {
        await prisma.favoriteRecipe.create({
          data: {
            id: input.recipeId,
            name: input.name,
            users: {
              connect: {
                id: ctx.session.user.id,
              },
            },
          },
        });
      }
      return await prisma.user.update({
        where: { id: ctx.session.user.id },
        data: {
          favoriteRecipes: {
            connect: {
              id: input.recipeId,
            },
          },
        },
      });
    }),

  removeFromFavorites: protectedProcedure
    .input(
      z.object({
        recipeId: z.number(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      return await prisma.user.update({
        where: { id: ctx.session.user.id },
        data: {
          favoriteRecipes: {
            disconnect: {
              id: input.recipeId,
            },
          },
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

  getReviewsForRecipe: protectedProcedure
    .input(z.object({ id: z.number() }))
    .query(async ({ input }) => {
      return await prisma.review.findMany({
        where: {
          recipeId: input.id,
        },
      });
    }),
});
