import { FieldValues, SubmitHandler } from 'react-hook-form'
import FXForm from '../form/FXForm'
import FXModal from './FXModal'
import FXInput from '../form/FXInput'
import FXTextarea from '../form/FXTextarea'
import { Button } from '@nextui-org/button'

interface IProps {
  _id: string
  questions: string[]
}

const ClaimRequestModal = ({ _id, questions }: IProps) => {
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data)
  }

  return (
    <FXModal
      buttonText='Claim Request'
      title='Claim Request'
      buttonClassName='flex-1'>
      <FXForm onSubmit={onSubmit}>
        {questions.map((question, index) => (
          <div className='mb-4' key={index}>
            <p className='mb-1'>{question}</p>
            <FXInput
              label={`Answer - ${index + 1}`}
              name={`answer-${index + 1}`}
            />
          </div>
        ))}
        <FXTextarea label='Description' name='description' />
        <Button className='w-full my-2 flex-1' size='lg' type='submit'>
          Send
        </Button>
      </FXForm>
    </FXModal>
  )
}

export default ClaimRequestModal
