import Landing from '@/src/components/modules/home/Landing'
import RecentPost from '@/src/components/modules/home/RecentPost'
import { Suspense } from 'react'

export default function Home() {
  return (
    <>
      <Landing />
      <Suspense fallback={<p>Loading...</p>}>
        <RecentPost />
      </Suspense>
    </>
  )
}
