import { Button } from '@nextui-org/button'
import FXModal from './FXModal'
import Link from 'next/link'

interface IProps {
  id: string
}

const AuthenticationModal = ({ id }: IProps) => {
  return (
    <FXModal
      buttonText='Claim Request'
      title='Authentication'
      buttonClassName='flex-1'>
      <p>You are not currently logged in. Please login first to continue</p>
      <div className='flex  gap-2 mt-2 mb-4'>
        <Link className='flex-1' href={`/register?redirect=found-items/${id}`}>
          <Button className='w-full'>Register</Button>
        </Link>
        <Link className='flex-1' href={`/login?redirect=found-items/${id}`}>
          <Button className='w-full'>Login</Button>
        </Link>
      </div>
    </FXModal>
  )
}

export default AuthenticationModal
