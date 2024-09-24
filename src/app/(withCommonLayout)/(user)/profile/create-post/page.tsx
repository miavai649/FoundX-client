'use client'

import FXDatePicker from '@/src/components/form/FXDatePicker'
import FXInput from '@/src/components/form/FXInput'
import FXSelect from '@/src/components/form/FXSelect'
import dateToIso from '@/src/utils/dateToIso'
import { Button } from '@nextui-org/button'
import { Divider } from '@nextui-org/divider'
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useFieldArray,
  useForm
} from 'react-hook-form'
import { allDistict } from '@bangladeshi/bangladesh-address'
import { useGetCategory } from '@/src/hooks/categories.hook'

const cityOptions = allDistict()
  .sort()
  .map((city: string) => {
    return {
      key: city,
      label: city
    }
  })

const page = () => {
  const { data: categoriesData, isLoading: categoryLoading } = useGetCategory()

  let categoryOptions: { key: string; label: string }[] = []

  if (categoriesData?.data && !categoryLoading) {
    categoryOptions = categoriesData?.data
      ?.sort()
      ?.map((category: { _id: string; name: string }) => ({
        key: category._id,
        label: category.name
      }))
  }

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
      ),
      dateFound: dateToIso(data.dateFound)
    }

    console.log(postData)
  }

  const handleFieldAppend = () => {
    append({ name: 'questions', value: '' })
  }

  return (
    <div className='h-full rounded-xl bg-gradient-to-b from-default-100 px-[73px] py-12'>
      <h1 className='text-2xl font-semibold'>Post a found item</h1>
      <Divider className='mb-5 mt-3' />
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='flex flex-wrap gap-2 py-2'>
            <div className='min-w-fit flex-1'>
              <FXInput label='Title' name='title' />
            </div>
            <div className='min-w-fit flex-1'>
              <FXDatePicker label='Found date' name='dateFound' />
            </div>
          </div>
          <div className='flex flex-wrap gap-2 py-2'>
            <div className='min-w-fit flex-1'>
              <FXInput label='Location' name='location' />
            </div>
            <div className='min-w-fit flex-1'>
              <FXSelect
                label='City'
                name='city'
                placeholder='Select a city'
                options={cityOptions}
              />
            </div>
          </div>
          <div className='flex flex-wrap gap-2 py-2'>
            <div className='min-w-fit flex-1'>
              <FXSelect
                label='Category'
                name='category'
                placeholder='Select a category'
                options={categoryOptions}
              />
            </div>
            <div className='min-w-fit flex-1'>
              <FXInput label='Upload image' name='category' />
            </div>
          </div>

          <div className='flex flex-wrap-reverse gap-2 py-2'>
            <div className='min-w-fit flex-1'>
              <FXInput label='Description' name='description' />
            </div>
          </div>

          <Divider className='my-5' />

          <div className='flex justify-between items-center mb-5'>
            <h1 className='text-xl'>Owner verification questions</h1>
            <Button onClick={() => handleFieldAppend()}>Append</Button>
          </div>

          <div className='space-y-5'>
            {fields.map((field, index) => (
              <div key={field.id} className='flex gap-2 items-center'>
                <FXInput label='Question' name={`questions.${index}.value`} />
                <Button className='h-14 w-16' onClick={() => remove(index)}>
                  Remove
                </Button>
              </div>
            ))}
          </div>

          <Divider className='my-5' />
          <div className='flex justify-end'>
            <Button size='lg' type='submit'>
              Post
            </Button>
          </div>
        </form>
      </FormProvider>
    </div>
  )
}

export default page
