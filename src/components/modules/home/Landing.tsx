import { Input } from '@nextui-org/input'
import { SearchIcon } from '../../icons'

const Landing = () => {
  return (
    <div className="h-[calc(100vh-64px)] bg-[url('/glass.jpg')] bg-cover bg-center">
      <div className='max-w-xl mx-auto pt-32 flex-1'>
        <form className='flex-1'>
          <Input
            aria-label='Search'
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
