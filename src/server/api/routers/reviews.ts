import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "@/server/api/trpc";
import { prisma } from "@/server/db";
import { z } from "zod";

export const reviewsRouter = createTRPCRouter({
  getReviewsForRecipe: publicProcedure
    .input(z.object({ id: z.number() }))
    .query(async ({ input }) => {
      return await prisma.review.findMany({
        where: {
          recipeId: input.id,
        },
        include: {
          user: true,
        },
        orderBy: {
          createdAt: "desc",
        },
      });
    }),

  addReview: protectedProcedure
    .input(
      z.object({
        recipeId: z.number(),
        stars: z
          .number()
          .min(1, { message: "Please provide correct rating!" })
          .max(5),
        description: z
          .string()
          .min(10, {
            message: "Please use at least 10 characters to describe review",
          })
          .max(100),
      })
    )
    .mutation(async ({ input, ctx }) => {
      return await prisma.review.create({
        data: {
          recipeId: input.recipeId,
          stars: input.stars,
          description: input.description,
          userId: ctx.session.user.id,
        },
      });
    }),
});
