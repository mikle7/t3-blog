import { createRouter } from './context'
import { z } from 'zod'
import { resolve } from 'path'
import { createPostSchema } from '../../schema/posts.schema'

export const postRouter = createRouter()
  .query('getAllPosts', {
    async resolve({ ctx }) {
      return await ctx.prisma.post.findMany()
    },
  })
  .mutation('createPost', {
    input: createPostSchema,
    async resolve({ ctx, input }) {
      return await ctx.prisma.post.create({
        data: {
          title: input.title,
          content: input.content,
        },
      })
    },
  })
