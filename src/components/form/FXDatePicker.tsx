import { ICustomInput } from '@/src/types'
import { DatePicker } from '@nextui-org/date-picker'
import { Controller } from 'react-hook-form'

interface IProps extends ICustomInput {}

const FXDatePicker = ({ label, name }: IProps) => {
  return (
    <Controller
      name={name}
      render={({ field: { value, ...field } }) => (
        <DatePicker label={label} {...field} />
      )}
    />
  )
}

export default FXDatePicker
