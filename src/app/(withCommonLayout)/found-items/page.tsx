import Container from '@/src/components/UI/Container'
import Post from '@/src/components/UI/post'
import axiosInstance from '@/src/lib/AxiosInstance'
import { IPost } from '@/src/types'

const page = async () => {
  const { data: itemsData } = await axiosInstance.get('/items')

  return (
    <Container>
      <div className='max-w-[720px] mx-auto my-3'>
        {itemsData?.data?.map((post: IPost) => (
          <Post key={post._id} post={post} />
        ))}
      </div>
    </Container>
  )
}

export default page
