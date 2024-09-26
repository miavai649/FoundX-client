import Container from '@/src/components/UI/Container'
import Post from '@/src/components/UI/post'
import { getPost } from '@/src/services/post'

interface IProps {
  params: {
    itemId: string
  }
}

const page = async ({ params: { itemId } }: IProps) => {
  const { data: post } = await getPost(itemId)

  return (
    <Container>
      <div className='max-w-[720px] mx-auto my-3'>
        <Post key={post?._id} post={post} />
      </div>
    </Container>
  )
}

export default page
