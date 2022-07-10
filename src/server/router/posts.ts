import { createRouter } from './context'
import { z } from 'zod'
import { resolve } from 'path'

export const postRouter = createRouter()
  .query('getAllPosts', {
    async resolve({ ctx }) {
      return await ctx.prisma.post.findMany()
    },
  })
  .mutation('createPost', {
    input: z.object({
      title: z.string(),
      content: z.string(),
    }),
    async resolve({ ctx, input }) {
      return await ctx.prisma.post.create({
        data: {
          title: input.title,
          content: input.content,
        },
      })
    },
  })
