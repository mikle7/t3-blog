import { z } from 'zod'

export const createPostSchema = z.object({
  title: z.string(),
  content: z.string(),
})

export type CreatePostSchema = z.TypeOf<typeof createPostSchema>

export const getSinglePostSchema = z.object({
  postId: z.string(),
})
