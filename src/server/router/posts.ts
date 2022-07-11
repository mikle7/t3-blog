import { createRouter } from './context'
import { z } from 'zod'
import { resolve } from 'path'
import {
  createPostSchema,
  getSinglePostSchema,
} from '../../schema/posts.schema'

export const postRouter = createRouter()
  .query('getAllPosts', {
    async resolve({ ctx }) {
      return await ctx.prisma.post.findMany()
    },
  })
  .query('getSinglePost', {
    input: getSinglePostSchema,
    async resolve({ ctx, input }) {
      return await ctx.prisma.post.findFirst({
        where: {
          id: input.postId,
        },
      })
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
