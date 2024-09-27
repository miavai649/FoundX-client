'use client'
import { Input } from '@nextui-org/input'
import { SearchIcon } from '../../../assets/icons'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import { useDebounce } from '@/src/hooks/debounce.hook'

const Landing = () => {
  const { register, handleSubmit, watch } = useForm()

  console.log(useDebounce(watch('search')))

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data)
  }

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
      </div>
    </div>
  )
}

export default Landing
