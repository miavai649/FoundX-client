'use client'

import FXInput from '@/src/components/form/FXInput'
import { Button } from '@nextui-org/button'
import { Divider } from '@nextui-org/divider'
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useFieldArray,
  useForm
} from 'react-hook-form'

const page = () => {
  const methods = useForm()

  const { control, handleSubmit } = methods

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'questions'
  })

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const postData = {
      ...data,
      questions: data.questions.map(
        (question: { value: string }) => question.value
      )
    }

    console.log(postData)
  }

  const handleFieldAppend = () => {
    append({ name: 'questions', value: '' })
  }

  return (
    <div>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FXInput name='title' label='Title' />
          <Divider className='my-3' />
          <div className='flex justify-between items-center'>
            <h1 className='text-xl'>Owner verification questions</h1>
            <Button onClick={() => handleFieldAppend()}>Append</Button>
          </div>

          {fields.map((field, index) => (
            <div key={field.id} className='flex items-center gap-2'>
              <FXInput name={`questions.${index}.value`} label='Question' />
              <Button onClick={() => remove(index)}>Remove</Button>
            </div>
          ))}

          <Divider className='my-3' />

          <Button type='submit'>Post</Button>
        </form>
      </FormProvider>
    </div>
  )
}

export default page
