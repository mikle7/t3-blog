import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { trpc } from '../../utils/trpc'

const SinglePostPage: NextPage = () => {
  const router = useRouter()
  const postId = router.query.postId as string

  const { isLoading, data } = trpc.useQuery(['posts.getSinglePost', { postId }])
  return <div>{JSON.stringify(data, null, 2)}</div>
}

export default SinglePostPage
