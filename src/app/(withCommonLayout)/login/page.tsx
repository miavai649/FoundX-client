'use client'
import FXForm from '@/src/components/form/FXForm'
import FXInput from '@/src/components/form/FXInput'
import { Button } from '@nextui-org/button'
import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'
import { FieldValues, SubmitHandler } from 'react-hook-form'
import loginValidationSchema from '@/src/schemas/login.schema'
import { useUserLogin } from '@/src/hooks/auth.hook'
import Loading from '@/src/components/UI/Loading'
import { useRouter, useSearchParams } from 'next/navigation'
import { useUser } from '@/src/context/user.provider'

const page = () => {
  const { mutate: handleUserLogin, isPending, isSuccess } = useUserLogin()
  const router = useRouter()

  const { setIsLoading: userLoading } = useUser()

  const searchParams = useSearchParams()

  const redirect = searchParams.get('redirect')

  if (!isPending && isSuccess) {
    if (redirect) {
      router.push(redirect)
    } else {
      router.push('/')
    }
  }

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    await handleUserLogin(data)
    userLoading(true)
  }

  return (
    <>
      {isPending && <Loading />}
      <div className='flex h-[calc(100vh-200px)] w-full flex-col items-center justify-center'>
        <h3 className='my-2 text-2xl font-bold'>Login with FoundX</h3>
        <p className='mb-4'>Welcome Back! Let&lsquo;s Get Started</p>
        <div className='w-[35%]'>
          <FXForm
            onSubmit={onSubmit}
            resolver={zodResolver(loginValidationSchema)}>
            <div className='py-3'>
              <FXInput name='email' label='Email' type='email' />
            </div>
            <div className='py-3'>
              <FXInput name='password' label='Password' type='password' />
            </div>

            <Button
              className='my-3 w-full rounded-md bg-default-900 font-semibold text-default'
              size='lg'
              type='submit'>
              Login
            </Button>
          </FXForm>
          <div className='text-center'>
            Don&lsquo;t have account ? <Link href={'/register'}>Register</Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default page
