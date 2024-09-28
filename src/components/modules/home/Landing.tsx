'use client'
import { Input } from '@nextui-org/input'
import { SearchIcon } from '../../../assets/icons'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import { useDebounce } from '@/src/hooks/debounce.hook'
import { useSearchItems } from '@/src/hooks/search.hook'
import { useEffect, useState } from 'react'
import { ISearchResult } from '@/src/types'
import Link from 'next/link'

const Landing = () => {
  const { register, handleSubmit, watch } = useForm()

  const { mutate: handleSearch, data, isPending, isSuccess } = useSearchItems()
  const [searchResults, setSearchResults] = useState<ISearchResult[] | []>([])

  const searchTerm = useDebounce(watch('search'))

  useEffect(() => {
    handleSearch(searchTerm)
  }, [searchTerm])

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data)
  }

  useEffect(() => {
    if (!searchTerm) {
      setSearchResults([])
    }
    if (!isPending && isSuccess && data && searchTerm) {
      setSearchResults(data?.data?.hits ?? [])
    }
  }, [isPending, isSuccess, data, searchTerm])

  return (
    <div className="h-[calc(100vh-64px)] bg-[url('/glass.jpg')] bg-cover bg-center">
      <div className='max-w-xl mx-auto pt-32 flex-1'>
        <form onSubmit={handleSubmit(onSubmit)} className='flex-1'>
          <Input
            aria-label='Search'
            {...register('search')}
            classNames={{
              innerWrapper: 'bg-default-100',
              input: 'text-sm'
            }}
            placeholder='Search...'
            size='lg'
            startContent={
              <SearchIcon className='pointer-events-none flex-shrink-0 text-base text-default-400' />
            }
            type='text'
          />
        </form>
        {searchResults.length > 0 && (
          <div className='mt-2 rounded-xl bg-default-100 p-3'>
            <div className='space-y-3'>
              {searchResults.map((item, index) => (
                <Link
                  key={index}
                  className='text-default-900 block rounded-md from-default-200 p-2 transition-all hover:bg-gradient-to-l'
                  href={`/found-items/${item.id}`}>
                  <div>
                    <div className='flex items-center gap-2'>
                      <img
                        alt='item'
                        className='h-20 w-20 rounded-md'
                        src={item.thumbnail}
                      />
                      <div>
                        <p className='text-lg font-semibold'>{item.title}</p>
                        <p className='mt-1 line-clamp-2 h-12 w-full text-sm'>
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            <div className='mt-3 flex justify-center border-t-1 border-default-50 pt-3'>
              <button
                className='flex items-center justify-center gap-1'
                // onClick={() => handleSeeAll(searchTerm)}
              >
                <span>See All</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Landing
