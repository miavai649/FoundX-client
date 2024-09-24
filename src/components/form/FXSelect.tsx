import { ICustomInput } from '@/src/types'
import { Select, SelectItem } from '@nextui-org/select'
import { useFormContext } from 'react-hook-form'

interface IProps extends ICustomInput {
  options: {
    key: string
    label: string
  }[]
  placeholder: string
}

const FXSelect = ({ options, label, name, placeholder, disabled }: IProps) => {
  const {
    register,
    formState: { errors }
  } = useFormContext()

  return (
    <Select
      {...register(name)}
      label={label}
      isDisabled={disabled}
      placeholder={placeholder}
      className='min-w-full sm:min-w-[225px]'>
      {options.map((option) => (
        <SelectItem key={option.key}>{option.label}</SelectItem>
      ))}
    </Select>
  )
}

export default FXSelect
