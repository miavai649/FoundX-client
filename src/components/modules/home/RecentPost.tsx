import { Button } from '@nextui-org/button'
import Container from '../../UI/Container'
import Link from 'next/link'
import { getRecentPosts } from '@/src/services/RecentPosts'

const RecentPost = async () => {
  const { data: posts } = await getRecentPosts()
  return (
    <Container>
      <div className='my-8 section-title'>
        <h2 className='text-2xl text-center mb-2'>Recently Found Items</h2>
        <p className='text-center'>
          A list of items that have been recently found and reported
        </p>
      </div>
      <div className='grid my-8 sm:grid-cols-1 md:grid-cols-4 gap-10 justify-center'>
        {posts?.map((item: any) => <p key={item?._id}>{item?.title}</p>)}
      </div>
      <div className='flex justify-center'>
        <Button className='rounded-md text-default bg-default-900' size='md'>
          <Link href={'/found-items'}>See All</Link>
        </Button>
      </div>
    </Container>
  )
}

export default RecentPost
