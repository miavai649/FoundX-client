'use client'

import FXForm from '@/src/components/form/FXForm'
import FXInput from '@/src/components/form/FXInput'
import { useUserRegistration } from '@/src/hooks/auth.hook'
import registerValidationSchema from '@/src/schemas/register.schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@nextui-org/button'
import Link from 'next/link'
import { FieldValues, SubmitHandler } from 'react-hook-form'

const page = () => {
  const { mutate: handleUserRegistration, isPending } = useUserRegistration()

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const userData = {
      ...data,
      profilePhoto:
        'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
    }

    await handleUserRegistration(userData)
  }

  if (isPending) {
    // handle pending state
  }

  return (
    <div className='flex h-[calc(100vh-200px)] w-full flex-col items-center justify-center'>
      <h3 className='my-2 text-2xl font-bold'>Register with FoundX</h3>
      <p className='mb-4'>Help Lost Items Find Their Way Home</p>
      <div className='w-[35%]'>
        <FXForm
          onSubmit={onSubmit}
          defaultValues={{
            name: 'Mir Hussain',
            email: 'mir@gmail.com',
            mobileNumber: '01711223344',
            password: '123456'
          }}
          resolver={zodResolver(registerValidationSchema)}>
          <div className='py-3'>
            <FXInput label='Name' name='name' size='sm' />
          </div>
          <div className='py-3'>
            <FXInput label='Email' name='email' size='sm' />
          </div>
          <div className='py-3'>
            <FXInput label='Mobile Number' name='mobileNumber' size='sm' />
          </div>
          <div className='py-3'>
            <FXInput
              label='Password'
              name='password'
              size='sm'
              type='password'
            />
          </div>

          <Button
            className='my-3 w-full rounded-md bg-default-900 font-semibold text-default'
            size='lg'
            type='submit'>
            Register
          </Button>
        </FXForm>
        <div className='text-center'>
          Already have an account ? <Link href={'/login'}>Login</Link>
        </div>
      </div>
    </div>
  )
}

export default page
