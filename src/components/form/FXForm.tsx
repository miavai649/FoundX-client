import { ReactNode } from 'react'
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm
} from 'react-hook-form'

interface IFormConfig {
  defaultValues?: Record<string, any>
  resolver?: any
}

interface IProps extends IFormConfig {
  onsubmit: SubmitHandler<FieldValues>
  children: ReactNode
}

const FXForm = ({ children, onsubmit, defaultValues, resolver }: IProps) => {
  const formConfig: IFormConfig = {}

  if (!!defaultValues) {
    formConfig['defaultValues'] = defaultValues
  }

  if (!!resolver) {
    formConfig['resolver'] = resolver
  }

  const methods = useForm(formConfig)

  const submitHandler = methods.handleSubmit

  return (
    <FormProvider {...methods}>
      <form onSubmit={submitHandler(onsubmit)}>{children}</form>
    </FormProvider>
  )
}

export default FXForm
