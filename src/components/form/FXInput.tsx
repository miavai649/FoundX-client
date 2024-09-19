'use client'

import { Input } from '@nextui-org/input'
import { useFormContext } from 'react-hook-form'

interface IProps {
  variant?: 'flat' | 'bordered' | 'faded' | 'underlined'
  size?: 'sm' | 'md' | 'lg'
  isRequired?: boolean
  type?: 'text' | 'email' | 'password'
  label: string
  name: string
}

const FXInput = ({
  variant = 'bordered',
  size = 'md',
  isRequired = false,
  type = 'text',
  label,
  name
}: IProps) => {
  const {
    register,
    formState: { errors }
  } = useFormContext()

  return (
    <Input
      isInvalid={!!errors[name]}
      errorMessage={errors[name] ? (errors[name].message as string) : ''}
      {...register(name)}
      variant={variant}
      size={size}
      isRequired={isRequired}
      type={type}
      label={label}
    />
  )
}

export default FXInput
